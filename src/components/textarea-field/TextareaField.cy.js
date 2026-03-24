import TextareaField from './index'

describe('TextareaField', () => {
	const mountWith = (props = {}) =>
		cy.mount(
			<TextareaField
				id="ta"
				label="Your message"
				{...props}
			/>
		)

	it('renders label and associates it with the textarea', () => {
		mountWith()
		cy.get('.nfd-textarea-field__label')
			.should('contain.text', 'Your message')
			.and('have.attr', 'for', 'ta')
		cy.get('textarea#ta')
			.should('exist')
			.and('have.class', 'nfd-textarea-field__input')
			.and('have.class', 'nfd-textarea')
	})

	it('allows typing and updates the textarea value', () => {
		const onChange = cy.spy().as('onChange')
		mountWith({ onChange, placeholder: 'type here' })
		cy.get('textarea#ta')
			.should('have.attr', 'placeholder', 'type here')
			.type('Hello world!')
			.should('have.value', 'Hello world!')
		cy.get('@onChange').should('have.been.called')
	})

	it('passes rows and cols props through (uses Textarea defaults when not provided)', () => {
		mountWith()
		cy.get('textarea#ta')
			.should('have.attr', 'rows', '2')
			.and('have.attr', 'cols', '20')

		mountWith({ rows: 5, cols: 30 })
		cy.get('textarea#ta')
			.should('have.attr', 'rows', '5')
			.and('have.attr', 'cols', '30')
	})

	it('applies disabled state to the textarea', () => {
		const onChange = cy.spy().as('onChange')
		mountWith({ disabled: true, onChange })
		cy.get('.nfd-textarea-field').should('exist')
		cy.get('textarea#ta').should('be.disabled')
		cy.get('@onChange').should('not.have.been.called')
	})

	it('merges custom className on the wrapper', () => {
		mountWith({ className: 'custom-class' })
		cy.get('.nfd-textarea-field').should('have.class', 'custom-class')
	})

	it('renders validation message and wires aria-describedby (validation only)', () => {
		mountWith({
			validation: { variant: 'error', message: 'This field is required.' },
		})

		cy.get('.nfd-textarea-field__validation')
			.should('contain.text', 'This field is required.')
			.invoke('attr', 'id')
			.as('valId')

		cy.get('textarea#ta')
			.invoke('attr', 'aria-describedby')
			.as('describedBy')

		cy.get('@valId').then((vid) => {
			expect(vid).to.be.a('string').and.not.be.empty
			cy.get('@describedBy').should('contain', vid)
		})
	})

	it('renders description and wires aria-describedby for both description and validation', () => {
		mountWith({
			description: 'Helpful description',
			validation: { variant: 'warning', message: 'Be careful.' },
		})

		cy.get('.nfd-textarea-field__validation').invoke('attr', 'id').as('valId')
		cy.get('.nfd-textarea-field__description').invoke('attr', 'id').as('descId')
		cy.get('textarea#ta').invoke('attr', 'aria-describedby').as('describedBy')

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

	it('passes common textarea props through', () => {
		mountWith({ name: 'message', autoComplete: 'off', maxLength: 120 })
		cy.get('textarea#ta')
			.should('have.attr', 'name', 'message')
			.and('have.attr', 'autocomplete', 'off')
			.and('have.attr', 'maxlength', '120')
	})
})
