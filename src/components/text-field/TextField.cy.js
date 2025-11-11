import TextField from './index'

// simple icon mock
const MockIcon = (props) => <svg data-cy="mock-icon" {...props} />

describe('TextField', () => {
	const mountTf = (props = {}) =>
		cy.mount(
			<TextField
				id="tf"
				label="Your label"
				onChange={cy.spy().as('onChange')}
				{...props}
			/>
		)

	it('renders label and associates it to input', () => {
		mountTf()
		cy.get('.nfd-text-field__label')
			.should('contain.text', 'Your label')
			.and('have.attr', 'for', 'tf')

		cy.get('input#tf')
			.should('exist')
			.and('have.class', 'nfd-text-input')
			.and('have.class', 'nfd-validation-input__input')
			.and('have.class', 'nfd-text-field__input')
	})

	it('renders labelSuffix when provided', () => {
		mountTf({ labelSuffix: <span data-cy="suffix">suffix</span> })
		cy.get('[data-cy="suffix"]').should('exist').and('contain.text', 'suffix')
	})

	it('calls onChange when typing and updates value', () => {
		mountTf({ placeholder: 'type here' })
		cy.get('input#tf')
			.should('have.attr', 'placeholder', 'type here')
			.type('hello')
			.should('have.value', 'hello')
		cy.get('@onChange').should('have.been.called')
	})

	it('applies disabled state and prevents input', () => {
		mountTf({ disabled: true, value: '1' })
		cy.get('.nfd-text-field').should('have.class', 'nfd-text-field--disabled')
		cy.get('input#tf').should('be.disabled')
		cy.get('@onChange').should('not.have.been.called')
	})

	it('applies readOnly state', () => {
		mountTf({ readOnly: true, value: '2' })
		cy.get('.nfd-text-field').should('have.class', 'nfd-text-field--read-only')
		cy.get('input#tf').should('have.attr', 'readonly')
		cy.get('@onChange').should('not.have.been.called')
	})

	it('shows required indicator when required + labelRequiredIndicator are true', () => {
		mountTf({ required: true, labelRequiredIndicator: true })
		cy.get('.nfd-text-field__label .nfd-label__required').should('exist').and('have.text', '*')
	})

	it('shows icon and applies with-icon classes', () => {
		mountTf({ icon: MockIcon })
		cy.get('.nfd-text-field').should('have.class', 'nfd-text-field--with-icon')
		cy.get('input#tf').should('have.class', 'nfd-text-field--input-with-icon')
		cy.get('[data-cy="mock-icon"]').should('exist')
	})

	it('renders validation message and wires aria-describedby correctly (validation only)', () => {
		mountTf({
			validation: { variant: 'error', message: 'This field is required.' },
		})

		// grab generated validation id to compare
		cy.get('.nfd-text-field__validation')
			.should('contain.text', 'This field is required.')
			.invoke('attr', 'id')
			.as('valId')

		cy.get('input#tf')
			.invoke('attr', 'aria-describedby')
			.as('describedBy')

		cy.get('@valId').then((vid) => {
			expect(vid, 'validation id exists').to.be.a('string').and.not.be.empty
			cy.get('@describedBy').should('contain', vid)
		})
	})

	it('renders description and wires aria-describedby for both description and validation', () => {
		mountTf({
			description: 'Helpful description',
			validation: { variant: 'warning', message: 'Be careful.' },
		})

		cy.get('.nfd-text-field__validation').invoke('attr', 'id').as('valId')
		cy.get('.nfd-text-field__description').invoke('attr', 'id').as('descId')

		cy.get('input#tf').invoke('attr', 'aria-describedby').as('describedBy')

		cy.get('@valId').then((vid) => {
			cy.get('@descId').then((did) => {
				expect(vid).to.be.a('string').and.not.be.empty
				expect(did).to.be.a('string').and.not.be.empty
				cy.get('@describedBy').then((adb) => {
					expect(adb).to.contain(vid)
					expect(adb).to.contain(did)
				})
			})
		})
	})

	it('merges custom className on wrapper', () => {
		mountTf({ className: 'custom-class' })
		cy.get('.nfd-text-field').should('have.class', 'custom-class')
	})

	it('passes common input props through to the underlying input', () => {
		mountTf({ name: 'username', autoComplete: 'off' })
		cy.get('input#tf')
			.should('have.attr', 'name', 'username')
			.and('have.attr', 'autocomplete', 'off')
	})
})
