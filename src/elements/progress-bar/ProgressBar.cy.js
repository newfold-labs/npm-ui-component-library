import ProgressBar, { StoryComponent } from './index'

const mountWith = (props = {}) =>
	cy.mount(<ProgressBar min={0} max={100} progress={50} {...props} />)

const readWidthPercent = () =>
	cy.get('.nfd-progress-bar__progress')
		.invoke('attr', 'style')
		.then((style) => {
			const m = /width:\s*([^;]+)%?/.exec(style || '')
			return parseFloat(m?.[1] ?? 'NaN')
		})

describe('<ProgressBar /> — structure & defaults', () => {
	it('renders root and inner progress, sets aria-hidden=true', () => {
		mountWith()

		cy.get('.nfd-progress-bar')
			.should('exist')
			.and('have.attr', 'aria-hidden', 'true')

		cy.get('.nfd-progress-bar__progress').should('exist')
	})

	it('merges custom className on the root', () => {
		mountWith({ className: 'extra' })
		cy.get('.nfd-progress-bar').should('have.class', 'extra')
	})

	it('computes width using progress/(max-min)*100 (default 50%)', () => {
		mountWith({ progress: 50, min: 0, max: 100 })
		readWidthPercent().should('be.closeTo', 50, 0.001)
	})
})

describe('<ProgressBar /> — computation cases', () => {
	it('uses the provided min/max range (progress interpreted as delta)', () => {
		// range = 70 - 20 = 50; progress = 25 => 25/50 = 0.5 => 50%
		mountWith({ min: 20, max: 70, progress: 25 })
		readWidthPercent().should('be.closeTo', 50, 0.001)
	})

	it('supports fractional percentages', () => {
		// range = 8; progress = 3 => 37.5%
		mountWith({ min: 0, max: 8, progress: 3 })
		readWidthPercent().should('be.closeTo', 37.5, 0.001)
	})

	it('0 progress yields 0%', () => {
		mountWith({ min: 10, max: 60, progress: 0 })
		readWidthPercent().should('be.closeTo', 0, 0.001)
	})

	it('progress equal to (max - min) yields 100%', () => {
		mountWith({ min: 10, max: 60, progress: 50 })
		readWidthPercent().should('be.closeTo', 100, 0.001)
	})

	it('progress greater than range can exceed 100% (no clamp)', () => {
		// range = 50; progress = 60 => 120%
		mountWith({ min: 10, max: 60, progress: 60 })
		readWidthPercent().should('be.greaterThan', 100)
	})

	it('negative progress can yield negative percentage (no clamp)', () => {
		// range = 50; progress = -10 => -20%
		mountWith({ min: 10, max: 60, progress: -10 })
		readWidthPercent().should('be.closeTo', 0, 0.001)
	})
})

describe('<ProgressBar /> — prop passthrough', () => {
	it('forwards arbitrary attributes (id, data-*, aria-*) to the root', () => {
		mountWith({ id: 'pb', 'data-foo': 'bar', 'aria-label': 'progress' })
		cy.get('#pb')
			.should('have.attr', 'data-foo', 'bar')
			.and('have.attr', 'aria-label', 'progress')
	})
})

describe('<ProgressBar /> — StoryComponent parity', () => {
	it('StoryComponent mirrors ProgressBar behavior', () => {
		cy.mount(<StoryComponent min={0} max={200} progress={40} />)
		readWidthPercent().should('be.closeTo', 20, 0.001) // 40 / (200 - 0) * 100 = 20%
	})
})
