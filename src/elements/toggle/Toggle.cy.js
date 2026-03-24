import Toggle, { StoryComponent } from './index'

const mountWith = (props = {}) =>
	cy.mount(
		<Toggle
			id="t1"
			screenReaderLabel="On/Off"
			onChange={cy.stub().as('onChange')}
			{...props}
		/>
	)

describe('<Toggle /> — structure & defaults', () => {
	it('renders with base classes, role/sr text, default unchecked', () => {
		mountWith()
		cy.get('.nfd-toggle')
			.should('exist')
			.and('have.attr', 'role', 'switch')
			.and('have.attr', 'data-id', 't1')
			.and('not.have.class', 'nfd-toggle--checked')
			.and('not.have.class', 'nfd-toggle--disabled')
		cy.get('.nfd-sr-only').should('contain.text', 'On/Off')
		cy.get('.nfd-toggle').should('have.attr', 'aria-checked', 'false')
		cy.get('.nfd-toggle__handle').should('exist')
		cy.get('.nfd-toggle__icon--check').should('exist').parent().should('have.attr', 'aria-hidden', 'true')
		cy.get('.nfd-toggle__icon--x').should('exist').parent().should('have.attr', 'aria-hidden', 'false')
	})

	it('merges custom className', () => {
		mountWith({ className: 'extra' })
		cy.get('.nfd-toggle').should('have.class', 'extra')
	})

	it('as="button" forces type="button"', () => {
		mountWith({ as: 'button', type: 'submit' })
		cy.get('.nfd-toggle').should('have.attr', 'type', 'button')
	})
})

describe('<Toggle /> — checked states', () => {
	it('checked=true adds modifier and shows check icon (aria-hidden=false)', () => {
		mountWith({ checked: true })
		cy.get('.nfd-toggle')
			.should('have.class', 'nfd-toggle--checked')
			.and('have.attr', 'aria-checked', 'true')
		cy.get('.nfd-toggle__icon--check').parent().should('have.attr', 'aria-hidden', 'false')
		cy.get('.nfd-toggle__icon--x').parent().should('have.attr', 'aria-hidden', 'true')
	})

	it('checked=false shows x icon (aria-hidden=false) and hides check', () => {
		mountWith({ checked: false })
		cy.get('.nfd-toggle').should('not.have.class', 'nfd-toggle--checked')
		cy.get('.nfd-toggle').should('have.attr', 'aria-checked', 'false')
		cy.get('.nfd-toggle__icon--x').parent().should('have.attr', 'aria-hidden', 'false')
		cy.get('.nfd-toggle__icon--check').parent().should('have.attr', 'aria-hidden', 'true')
	})
})

describe('<Toggle /> — interactions', () => {
	it('click toggles and calls onChange with the next state (from false -> true)', () => {
		mountWith({ checked: false })
		cy.get('.nfd-toggle').click()
		cy.get('@onChange').should('have.been.calledWith', true)
	})

	it('click when checked calls onChange with false', () => {
		mountWith({ checked: true })
		cy.get('.nfd-toggle').click()
		cy.get('@onChange').should('have.been.calledWith', false)
	})
})

describe('<Toggle /> — disabled', () => {
	it('adds disabled class/attr and blocks onChange', () => {
		mountWith({ disabled: true })
		cy.get('.nfd-toggle').should('have.class', 'nfd-toggle--disabled')
		cy.get('.nfd-toggle').click({ force: true })
		cy.get('@onChange').should('not.have.been.called')
	})
})

describe('<Toggle /> — prop passthrough', () => {
	it('forwards arbitrary attributes', () => {
		mountWith({ id: 't2', 'data-foo': 'bar' })
		cy.get('.nfd-toggle')
			.should('have.attr', 'data-id', 't2')
			.and('have.attr', 'data-foo', 'bar')
	})
})

describe('<Toggle /> — StoryComponent parity', () => {
	it('StoryComponent mirrors defaults and behavior', () => {
		cy.mount(<StoryComponent id="s1" screenReaderLabel="SR" onChange={cy.stub().as('sOn')} />)
		cy.get('.nfd-toggle')
			.should('have.attr', 'role', 'switch')
			.and('have.attr', 'type', 'button')
			.and('have.attr', 'aria-checked', 'false')
		cy.get('.nfd-sr-only').should('contain.text', 'SR')
		cy.get('.nfd-toggle').click()
		cy.get('@sOn').should('have.been.calledWith', true)
	})
})
