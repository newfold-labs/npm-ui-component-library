import ValidationIcon from './validation-icon'

const mountWith = (props = {}) => cy.mount(<ValidationIcon {...props} />)

describe('<ValidationIcon /> — structure & defaults', () => {
	it('renders default "info" variant as an <svg> with base and variant classes', () => {
		mountWith()
		cy.get('.nfd-validation-icon')
			.should('exist')
			.and('have.class', 'nfd-validation-icon--info')
			.then(($el) => {
				expect($el[0].tagName).to.eq('svg')
			})
	})

	it('merges custom className', () => {
		mountWith({ className: 'extra' })
		cy.get('.nfd-validation-icon').should('have.class', 'extra')
	})
})

describe('<ValidationIcon /> — variants', () => {
	it('success', () => {
		mountWith({ variant: 'success' })
		cy.get('.nfd-validation-icon')
			.should('exist')
			.and('have.class', 'nfd-validation-icon--success')
	})

	it('warning', () => {
		mountWith({ variant: 'warning' })
		cy.get('.nfd-validation-icon')
			.should('exist')
			.and('have.class', 'nfd-validation-icon--warning')
	})

	it('error', () => {
		mountWith({ variant: 'error' })
		cy.get('.nfd-validation-icon')
			.should('exist')
			.and('have.class', 'nfd-validation-icon--error')
	})
})

describe('<ValidationIcon /> — a11y attrs from useSvgAria', () => {
	it('applies accessible svg attributes', () => {
		mountWith({ variant: 'info' })
		cy.get('.nfd-validation-icon')
			.should('have.attr', 'aria-hidden')
	})
})

describe('<ValidationIcon /> — prop passthrough', () => {
	it('forwards arbitrary attributes', () => {
		mountWith({ id: 'val-1', 'data-foo': 'bar' })
		cy.get('#val-1.nfd-validation-icon').should('have.attr', 'data-foo', 'bar')
	})
})

describe('<ValidationIcon /> — unknown variant', () => {
	it('renders nothing when variant is not mapped', () => {
		mountWith({ variant: '__unknown__' })
		cy.get('.nfd-validation-icon').should('not.exist')
	})
})
