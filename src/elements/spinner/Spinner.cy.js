import Spinner, { StoryComponent } from './index'

describe('<Spinner /> — structure & defaults', () => {
	it('renders an <svg> with base class and default size/variant', () => {
		cy.mount(<Spinner />)

		cy.get('svg')
			.should('exist')
			.and('have.class', 'nfd-animate-spin')
			.and('have.class', 'nfd-w-4')
			.and('have.class', 'nfd-h-4')
			// default variant -> no explicit color classes
			.and('not.have.class', 'nfd-text-primary-500')
			.and('not.have.class', 'nfd-text-white')
			.and('have.attr', 'viewBox', '0 0 24 24')
			.and('have.attr', 'fill', 'none')

		// inner shapes exist with expected classes
		cy.get('svg > circle')
			.should('exist')
			.and('have.class', 'nfd-opacity-25')
			.and('have.attr', 'cx', '12')
			.and('have.attr', 'cy', '12')
			.and('have.attr', 'r', '10')

		cy.get('svg > path')
			.should('exist')
			.and('have.class', 'nfd-opacity-75')
	})

	it('merges custom className on the svg', () => {
		cy.mount(<Spinner className="extra-class" />)
		cy.get('svg').should('have.class', 'extra-class')
	})
})

describe('<Spinner /> — variants', () => {
	it('applies the "primary" variant class', () => {
		cy.mount(<Spinner variant="primary" />)
		cy.get('svg')
			.should('have.class', 'nfd-text-primary-500')
			.and('not.have.class', 'nfd-text-white')
	})

	it('applies the "white" variant class', () => {
		cy.mount(<Spinner variant="white" />)
		cy.get('svg')
			.should('have.class', 'nfd-text-white')
			.and('not.have.class', 'nfd-text-primary-500')
	})

	it('respects explicit "default" (no color class added)', () => {
		cy.mount(<Spinner variant="default" />)
		cy.get('svg')
			.should('not.have.class', 'nfd-text-primary-500')
			.and('not.have.class', 'nfd-text-white')
	})
})

describe('<Spinner /> — sizes', () => {
	it('size="3" adds nfd-w-3 nfd-h-3', () => {
		cy.mount(<Spinner size="3" />)
		cy.get('svg').should('have.class', 'nfd-w-3').and('have.class', 'nfd-h-3')
	})

	it('size="8" adds nfd-w-8 nfd-h-8', () => {
		cy.mount(<Spinner size="8" />)
		cy.get('svg').should('have.class', 'nfd-w-8').and('have.class', 'nfd-h-8')
	})

	it('default size is "4" (nfd-w-4 nfd-h-4)', () => {
		cy.mount(<Spinner />)
		cy.get('svg').should('have.class', 'nfd-w-4').and('have.class', 'nfd-h-4')
	})
})

describe('<Spinner /> — prop passthrough', () => {
	it('forwards arbitrary attributes (id, aria-*, data-*) to svg', () => {
		cy.mount(<Spinner id="spin" aria-label="loading" data-foo="bar" />)
		cy.get('#spin')
			.should('have.attr', 'aria-label', 'loading')
			.and('have.attr', 'data-foo', 'bar')
	})
})

describe('<Spinner /> — StoryComponent parity', () => {
	it('StoryComponent mirrors Spinner defaults and behavior', () => {
		cy.mount(<StoryComponent />)
		cy.get('svg')
			.should('have.class', 'nfd-animate-spin')
			.and('have.class', 'nfd-w-4')
			.and('have.class', 'nfd-h-4')
	})
})
