import ValidationMessage from './validation-message'

const mountWith = (props = {}, children = 'Message') =>
	cy.mount(<ValidationMessage {...props}>{children}</ValidationMessage>)

describe('<ValidationMessage /> — structure & defaults', () => {
	it('renders as <p> with base and default variant classes', () => {
		mountWith()
		cy.get('.nfd-validation-message')
			.should('exist')
			.and('have.class', 'nfd-validation-message--info')
			.and('contain.text', 'Message')
			.then(($el) => expect($el[0].tagName).to.eq('P'))
	})

	it('merges custom className', () => {
		mountWith({ className: 'extra' })
		cy.get('.nfd-validation-message').should('have.class', 'extra')
	})
})

describe('<ValidationMessage /> — variants', () => {
	;[
		['success', 'nfd-validation-message--success'],
		['warning', 'nfd-validation-message--warning'],
		['info', 'nfd-validation-message--info'],
		['error', 'nfd-validation-message--error'],
	].forEach(([variant, cls]) => {
		it(`${variant} applies its modifier class`, () => {
			mountWith({ variant })
			cy.get('.nfd-validation-message').should('have.class', cls)
		})
	})

	it('unknown variant renders without any known variant class', () => {
		mountWith({ variant: '__unknown__' })
		cy.get('.nfd-validation-message')
			.should('not.have.class', 'nfd-validation-message--success')
			.and('not.have.class', 'nfd-validation-message--warning')
			.and('not.have.class', 'nfd-validation-message--info')
			.and('not.have.class', 'nfd-validation-message--error')
	})
})

describe('<ValidationMessage /> — "as" prop', () => {
	it('renders as a different element when "as" is provided', () => {
		mountWith({ as: 'div' })
		cy.get('.nfd-validation-message')
			.then(($el) => expect($el[0].tagName).to.eq('DIV'))

		mountWith({ as: 'span' })
		cy.get('.nfd-validation-message')
			.then(($el) => expect($el[0].tagName).to.eq('SPAN'))
	})
})

describe('<ValidationMessage /> — children', () => {
	it('renders complex children', () => {
		mountWith({}, <>Please <strong data-cy="b">fix</strong> this</>)
		cy.get('.nfd-validation-message').should('contain.text', 'Please fix this')
		cy.get('[data-cy="b"]').should('contain.text', 'fix')
	})
})

describe('<ValidationMessage /> — prop passthrough', () => {
	it('forwards arbitrary attributes', () => {
		mountWith({ id: 'vm1', role: 'alert', 'aria-live': 'polite', 'data-foo': 'bar' })
		cy.get('#vm1.nfd-validation-message')
			.should('have.attr', 'role', 'alert')
			.and('have.attr', 'aria-live', 'polite')
			.and('have.attr', 'data-foo', 'bar')
	})
})
