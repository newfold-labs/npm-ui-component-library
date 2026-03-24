import ToggleField from './index'

describe('ToggleField', () => {
	const mountWith = (props = {}) =>
		cy.mount(
			<ToggleField
				id="main-toggle"
				label="Enable feature"
				checked={false}
				onChange={cy.spy().as('onChange')}
				{...props}
			/>
		)

	it('renders label and toggle button with screen-reader label', () => {
		mountWith()
		cy.get('.nfd-toggle-field__label')
			.should('contain.text', 'Enable feature')
		cy.get('.nfd-toggle')
			.should('have.attr', 'data-id', 'main-toggle')
			.and('have.attr', 'role', 'switch')
		cy.get('.nfd-toggle .nfd-sr-only')
			.should('contain.text', 'Enable feature')
	})

	it('renders optional label suffix when provided', () => {
		mountWith({ labelSuffix: <span data-cy="suffix">suffix</span> })
		cy.get('[data-cy="suffix"]').should('be.visible').and('contain.text', 'suffix')
	})

	it('renders description (wins over children) inside Description slot', () => {
		cy.mount(
			<ToggleField
				id="t1"
				label="Enable feature"
				checked={false}
				onChange={cy.spy().as('onChange')}
				description="This is the primary description."
			>
				<div data-cy="child-text">Child text that should not be used</div>
			</ToggleField>
		)
		cy.get('.nfd-toggle-field__description')
			.should('contain.text', 'This is the primary description.')
			.and('not.contain.text', 'Child text that should not be used')
	})

	it('falls back to children in the description area when description is not provided', () => {
		cy.mount(
			<ToggleField
				id="t2"
				label="Enable feature"
				checked={false}
				onChange={cy.spy().as('onChange')}
			>
				<div data-cy="only-children">Only children description</div>
			</ToggleField>
		)
		cy.get('.nfd-toggle-field__description')
			.should('contain.text', 'Only children description')
	})

	it('calls onChange when the toggle is clicked', () => {
		mountWith()
		cy.get('.nfd-toggle').click()
		cy.get('@onChange').should('have.been.calledOnce')
	})

	it('does not call onChange and sets disabled state when disabled', () => {
		mountWith({ disabled: true })
		cy.get('.nfd-toggle-field').should('have.class', 'nfd-toggle-field--disabled')
		cy.get('.nfd-toggle')
			.should('be.disabled') // headlessui Switch renders a <button disabled>
			.click({ force: true }) // click is ignored by the browser when disabled
		cy.get('@onChange').should('not.have.been.called')
	})

	it('applies custom wrapper className', () => {
		mountWith({ className: 'extra-class' })
		cy.get('.nfd-toggle-field').should('have.class', 'extra-class')
	})

	it('forwards aria-label to the visible label element', () => {
		mountWith({ 'aria-label': 'Analytics label' })
		cy.get('.nfd-toggle-field__label')
			.should('have.attr', 'aria-label', 'Analytics label')
	})

	it('passes arbitrary props to the Toggle control', () => {
		mountWith({ 'data-test-id': 'toggle-x' })
		cy.get('.nfd-toggle')
			.should('have.attr', 'data-test-id', 'toggle-x')
			.and('have.attr', 'data-id', 'main-toggle')
	})
})
