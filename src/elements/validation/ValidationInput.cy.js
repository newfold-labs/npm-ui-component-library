import ValidationInput from './validation-input'

const DummyIcon = (props) => <svg data-cy="dummy-icon" {...props} />

const mountAsInput = (props = {}) =>
	cy.mount(
		<ValidationInput
			as="input"
			placeholder="Type…"
			{...props}
		/>
	)

describe('<ValidationInput /> — structure', () => {
	it('renders wrapper and inner field with base classes', () => {
		mountAsInput()
		cy.get('.nfd-validation-input').should('exist')
		cy.get('.nfd-validation-input__input')
			.should('exist')
			.and('have.prop', 'tagName', 'INPUT')
			.and('have.attr', 'placeholder', 'Type…')
	})

	it('merges className into the inner field, not the wrapper', () => {
		mountAsInput({ className: 'extra' })
		cy.get('.nfd-validation-input').should('not.have.class', 'extra')
		cy.get('.nfd-validation-input__input').should('have.class', 'extra')
	})

	it('passes arbitrary props to the field', () => {
		mountAsInput({ id: 'fld', name: 'email', 'aria-describedby': 'hint', 'data-foo': 'bar' })
		cy.get('.nfd-validation-input__input#fld')
			.should('have.attr', 'name', 'email')
			.and('have.attr', 'aria-describedby', 'hint')
			.and('have.attr', 'data-foo', 'bar')
	})
})

describe('<ValidationInput /> — icon rendering', () => {
	it('renders the provided icon when no validation message', () => {
		mountAsInput({ icon: DummyIcon })
		cy.get('[data-cy="dummy-icon"]').should('exist')
		cy.get('.nfd-validation-input__icon').should('not.exist')
	})

	it('hides the provided icon and shows ValidationIcon when validation message with mapped variant', () => {
		mountAsInput({ icon: DummyIcon, validation: { variant: 'info', message: 'Info here' } })
		cy.get('[data-cy="dummy-icon"]').should('not.exist')
		cy.get('.nfd-validation-input__icon').should('exist')
	})

	it('keeps the provided icon visible when variant is unknown, even if message exists', () => {
		mountAsInput({ icon: DummyIcon, validation: { variant: '__unknown__', message: 'Something' } })
		cy.get('[data-cy="dummy-icon"]').should('exist')
		cy.get('.nfd-validation-input__icon').should('not.exist')
	})
})

describe('<ValidationInput /> — validation variants & classes', () => {
	const cases = [
		['success', 'nfd-validation-input--success'],
		['warning', 'nfd-validation-input--warning'],
		['info', 'nfd-validation-input--info'],
		['error', 'nfd-validation-input--error'],
	]

	cases.forEach(([variant, cls]) => {
		it(`${variant} adds wrapper modifier and renders ValidationIcon`, () => {
			mountAsInput({ validation: { variant, message: 'Msg' } })
			cy.get('.nfd-validation-input')
				.should('have.class', cls)
			cy.get('.nfd-validation-input__icon').should('exist')
		})
	})

	it('no message => no wrapper modifier and no ValidationIcon, even if variant provided', () => {
		mountAsInput({ validation: { variant: 'error' } })
		cy.get('.nfd-validation-input')
			.should('not.have.class', 'nfd-validation-input--error')
		cy.get('.nfd-validation-input__icon').should('not.exist')
	})

	it('unknown variant with message => no wrapper modifier and no ValidationIcon', () => {
		mountAsInput({ validation: { variant: '__unknown__', message: 'Oops' } })
		cy.get('.nfd-validation-input')
			.should('not.have.class', 'nfd-validation-input--success')
			.and('not.have.class', 'nfd-validation-input--warning')
			.and('not.have.class', 'nfd-validation-input--info')
			.and('not.have.class', 'nfd-validation-input--error')
		cy.get('.nfd-validation-input__icon').should('not.exist')
	})
})

describe('<ValidationInput /> — "as" variations', () => {
	it('renders as a different element when "as" is changed (e.g., button)', () => {
		cy.mount(
			<ValidationInput
				as="button"
				type="submit"
				className="btnx"
				data-foo="bar"
			/>
		)
		cy.get('.nfd-validation-input__input')
			.should('have.prop', 'tagName', 'BUTTON')
			.and('have.attr', 'type', 'submit')
			.and('have.class', 'btnx')
			.and('have.attr', 'data-foo', 'bar')
	})
})

