import ChildrenLimiter from './index'

const makeItems = (n, prefix = 'it') =>
	Array.from({ length: n }, (_, i) => (
		<div key={`${prefix}-${i + 1}`} data-cy={`${prefix}-${i + 1}`}>{`Item ${i + 1}`}</div>
	))

const renderButton = ({ show, toggle, ariaProps }) => (
	<button data-cy="toggle-btn" onClick={toggle} {...ariaProps}>
		{show ? 'Show less' : 'Show more'}
	</button>
)

describe('<ChildrenLimiter /> — basic limiting', () => {
	it('returns children unchanged when limit < 0 (no button / no AnimateHeight)', () => {
		cy.mount(
			<ChildrenLimiter limit={-1} renderButton={renderButton}>
				{makeItems(5)}
			</ChildrenLimiter>
		)

		cy.get('[data-cy^="it-"]').should('have.length', 5)
		cy.get('[data-cy="toggle-btn"]').should('not.exist')
		// no predictable AnimateHeight id since not rendered
	})

	it('returns children unchanged when children length <= limit', () => {
		cy.mount(
			<ChildrenLimiter limit={3} renderButton={renderButton}>
				{makeItems(3)}
			</ChildrenLimiter>
		)

		cy.get('[data-cy^="it-"]').should('have.length', 3)
		cy.get('[data-cy="toggle-btn"]').should('not.exist')
	})

	it('collapses items after the limit and toggles visibility', () => {
		cy.mount(
			<ChildrenLimiter limit={2} id="test-ah" renderButton={renderButton}>
				{makeItems(5)}
			</ChildrenLimiter>
		)

		cy.get('[data-cy^="it-"]').should('have.length', 5)

		cy.get('[data-cy="it-1"]').should('be.visible')
		cy.get('[data-cy="it-2"]').should('be.visible')

		cy.get('[data-cy="it-3"]').should('not.be.visible')
		cy.get('[data-cy="it-4"]').should('not.be.visible')
		cy.get('[data-cy="it-5"]').should('not.be.visible')

		cy.get('[data-cy="toggle-btn"]')
			.should('have.attr', 'aria-expanded', 'false')
			.and('have.attr', 'aria-controls', 'test-ah')

		cy.get('#test-ah').should('exist')

		cy.get('[data-cy="toggle-btn"]').click()
		cy.wait(350)

		cy.get('[data-cy="toggle-btn"]').should('have.attr', 'aria-expanded', 'true')
		cy.get('[data-cy="it-3"]').should('be.visible')
		cy.get('[data-cy="it-4"]').should('be.visible')
		cy.get('[data-cy="it-5"]').should('be.visible')

		cy.get('[data-cy="toggle-btn"]').click()
		cy.wait(350)

		cy.get('[data-cy="toggle-btn"]').should('have.attr', 'aria-expanded', 'false')
		cy.get('[data-cy="it-3"]').should('not.be.visible')
	})
})

describe('<ChildrenLimiter /> — initialShow and aria props', () => {
	it('starts expanded when initialShow=true and reflects aria props', () => {
		cy.mount(
			<ChildrenLimiter limit={2} id="expanded-ah" initialShow renderButton={renderButton}>
				{makeItems(4)}
			</ChildrenLimiter>
		)

		cy.get('[data-cy="toggle-btn"]')
			.should('have.attr', 'aria-controls', 'expanded-ah')
			.and('have.attr', 'aria-expanded', 'true')

		cy.get('[data-cy="it-3"]').should('be.visible')
		cy.get('[data-cy="it-4"]').should('be.visible')
	})
})

describe('<ChildrenLimiter /> — flattens nested children', () => {
	it('flattens nested arrays before applying the limit', () => {
		cy.mount(
			<ChildrenLimiter limit={2} id="flat-ah" renderButton={renderButton}>
				{[
					<div key="a" data-cy="n-1">A</div>,
					[<div key="b" data-cy="n-2">B</div>, <div key="c" data-cy="n-3">C</div>],
				]}
			</ChildrenLimiter>
		)

		cy.get('[data-cy="n-1"]').should('be.visible')
		cy.get('[data-cy="n-2"]').should('be.visible')

		cy.get('[data-cy="n-3"]').should('not.be.visible')

		cy.get('[data-cy="toggle-btn"]').click()
		cy.wait(350)
		cy.get('[data-cy="n-3"]').should('be.visible')
	})
})

describe('<ChildrenLimiter /> — robustness', () => {
	it('works with custom button rendering using provided args', () => {
		const CustomBtn = ({ show, toggle, ariaProps }) => (
			<a href="#" data-cy="custom-btn" onClick={(e) => { e.preventDefault(); toggle() }} {...ariaProps}>
				{show ? 'Less' : 'More'}
			</a>
		)

		cy.mount(
			<ChildrenLimiter limit={1} id="robust-ah" renderButton={(args) => <CustomBtn {...args} />}>
				{makeItems(2)}
			</ChildrenLimiter>
		)

		cy.get('[data-cy="custom-btn"]')
			.should('have.attr', 'aria-controls', 'robust-ah')
			.and('have.attr', 'aria-expanded', 'false')
			.and('contain.text', 'More')

		cy.get('[data-cy="it-2"]').should('not.be.visible')

		cy.get('[data-cy="custom-btn"]').click()
		cy.wait(350)

		cy.get('[data-cy="custom-btn"]')
			.should('have.attr', 'aria-expanded', 'true')
			.and('contain.text', 'Less')

		cy.get('[data-cy="it-2"]').should('be.visible')
	})
})
