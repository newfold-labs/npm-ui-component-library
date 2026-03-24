import Checkbox, { StoryComponent } from './index'

const mountWith = (props = {}) =>
	cy.mount(
		<Checkbox
			id="terms"
			name="terms"
			value="yes"
			label="I agree to the terms"
			{...props}
		/>
	)

describe('<Checkbox /> — structure', () => {
	it('renders wrapper, input, and label with correct linkage', () => {
		mountWith()

		cy.get('.nfd-checkbox')
			.should('exist')
			.and('not.have.class', 'nfd-checkbox--disabled')

		cy.get('.nfd-checkbox__input')
			.should('exist')
			.and('have.attr', 'type', 'checkbox')
			.and('have.attr', 'id', 'terms')
			.and('have.attr', 'name', 'terms')
			.and('have.attr', 'value', 'yes')
			.and('not.be.checked')

		cy.get('.nfd-checkbox__label')
			.should('exist')
			.and('contain.text', 'I agree to the terms')
			.and('have.attr', 'for', 'terms') // associated with input
	})

	it('merges custom className into the wrapper', () => {
		mountWith({ className: 'extra-class' })
		cy.get('.nfd-checkbox').should('have.class', 'extra-class')
	})
})

describe('<Checkbox /> — interactions', () => {
	it('toggles by clicking the input and calls onChange with the event', () => {
		const onChange = cy.stub().as('onChange')
		mountWith({ onChange })

		cy.get('.nfd-checkbox__input')
			.click({ force: true }) // check
			.should('be.checked')
		cy.get('@onChange').should('have.been.calledOnce')
		cy.get('@onChange').its('lastCall.args.0.target.checked').should('eq', true)

		cy.get('.nfd-checkbox__input')
			.click({ force: true }) // uncheck
			.should('not.be.checked')
		cy.get('@onChange').should('have.been.calledTwice')
		cy.get('@onChange').its('lastCall.args.0.target.checked').should('eq', false)
	})

	it('toggles by clicking the label (via htmlFor) and triggers onChange', () => {
		const onChange = cy.stub().as('onChange')
		mountWith({ onChange })

		cy.get('.nfd-checkbox__label').click({ force: true })
		cy.get('.nfd-checkbox__input').should('be.checked')
		cy.get('@onChange').should('have.been.calledOnce')
	})

	it('supports keyboard toggle with Space on focused input', () => {
		const onChange = cy.stub().as('onChange')
		mountWith({ onChange })

		cy.get('.nfd-checkbox__input').focus()
		cy.press(Cypress.Keyboard.Keys.SPACE)
		cy.get('.nfd-checkbox__input').should('be.checked')

		cy.get('@onChange').should('have.been.calledOnce')
	})
})

describe('<Checkbox /> — disabled state', () => {
	it('applies disabled and prevents interaction (label click does nothing)', () => {
		const onChange = cy.stub().as('onChange')
		mountWith({ disabled: true, onChange })

		cy.get('.nfd-checkbox').should('have.class', 'nfd-checkbox--disabled')
		cy.get('.nfd-checkbox__input').should('be.disabled').and('not.be.checked')

		// Clicking the label should NOT toggle a disabled checkbox
		cy.get('.nfd-checkbox__label').click()
		cy.get('.nfd-checkbox__input').should('not.be.checked')
		cy.get('@onChange').should('not.have.been.called')
	})
})

describe('<Checkbox /> — prop passthrough', () => {
	it('forwards arbitrary props (aria-*, data-*) to the input', () => {
		mountWith({ 'aria-label': 'accept', 'data-foo': 'bar' })

		cy.get('.nfd-checkbox__input')
			.should('have.attr', 'aria-label', 'accept')
			.and('have.attr', 'data-foo', 'bar')
	})
})

describe('<Checkbox /> — StoryComponent parity', () => {
	it('StoryComponent mirrors defaults and structure', () => {
		cy.mount(
			<StoryComponent id="story" name="story" value="yes" label="Story label" />
		)

		cy.get('.nfd-checkbox').should('exist')
		cy.get('.nfd-checkbox__input')
			.should('have.attr', 'type', 'checkbox')
			.and('have.attr', 'id', 'story')
		cy.get('.nfd-checkbox__label')
			.should('have.attr', 'for', 'story')
			.and('contain.text', 'Story label')
	})
})
