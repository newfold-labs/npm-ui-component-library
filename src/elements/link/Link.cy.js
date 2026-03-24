import Link, { StoryComponent } from './index'

describe('<Link /> — structure & defaults', () => {
	it('renders as an <a> by default with base and default variant classes', () => {
		cy.mount(<Link href="https://example.com">Docs</Link>)

		cy.get('.nfd-link')
			.should('exist')
			.and('contain.text', 'Docs')
			.and('have.class', 'nfd-link--default')
			.then(($el) => {
				expect($el[0].tagName).to.eq('A')
			})
	})

	it('merges custom className', () => {
		cy.mount(<Link className="extra">Label</Link>)
		cy.get('.nfd-link').should('have.class', 'extra')
	})
})

describe('<Link /> — variants', () => {
	it('applies the "primary" variant class', () => {
		cy.mount(<Link variant="primary">Primary</Link>)
		cy.get('.nfd-link')
			.should('have.class', 'nfd-link--primary')
			.and('not.have.class', 'nfd-link--error')
	})

	it('applies the "error" variant class', () => {
		cy.mount(<Link variant="error">Error</Link>)
		cy.get('.nfd-link')
			.should('have.class', 'nfd-link--error')
			.and('not.have.class', 'nfd-link--primary')
	})

	it('respects explicit "default" variant', () => {
		cy.mount(<Link variant="default">Default</Link>)
		cy.get('.nfd-link')
			.should('have.class', 'nfd-link--default')
			.and('not.have.class', 'nfd-link--primary')
			.and('not.have.class', 'nfd-link--error')
	})
})

describe('<Link /> — "as" prop (element type)', () => {
	it('renders as a <button> when as="button" and handles click', () => {
		const onClick = cy.stub().as('onClick')
		cy.mount(
			<Link as="button" type="button" onClick={onClick}>
				Click me
			</Link>
		)

		cy.get('.nfd-link')
			.then(($el) => {
				expect($el[0].tagName).to.eq('BUTTON')
			})
			.and('have.attr', 'type', 'button')
			.click()

		cy.get('@onClick').should('have.been.calledOnce')
	})

	it('renders as a <span> when as="span" and can receive role/aria props', () => {
		cy.mount(
			<Link as="span" role="link" aria-label="custom">
				Span link
			</Link>
		)

		cy.get('.nfd-link')
			.then(($el) => {
				expect($el[0].tagName).to.eq('SPAN')
			})
			.and('have.attr', 'role', 'link')
			.and('have.attr', 'aria-label', 'custom')
	})
})

describe('<Link /> — prop passthrough', () => {
	it('forwards href/target/rel and aria/data attributes when rendered as <a>', () => {
		cy.mount(
			<Link
				href="https://example.com"
				target="_blank"
				rel="noreferrer"
				aria-label="external-link"
				data-foo="bar"
			>
				External
			</Link>
		)

		cy.get('.nfd-link')
			.should('have.attr', 'href', 'https://example.com')
			.and('have.attr', 'target', '_blank')
			.and('have.attr', 'rel', 'noreferrer')
			.and('have.attr', 'aria-label', 'external-link')
			.and('have.attr', 'data-foo', 'bar')
	})

	it('renders complex children', () => {
		cy.mount(
			<Link href="#">
				Go to <strong data-cy="bold">details</strong>
			</Link>
		)
		cy.get('.nfd-link').should('contain.text', 'Go to')
		cy.get('[data-cy="bold"]').should('contain.text', 'details')
	})
})

describe('<Link /> — StoryComponent parity', () => {
	it('StoryComponent mirrors Link defaults', () => {
		cy.mount(<StoryComponent href="#">Story link</StoryComponent>)
		cy.get('.nfd-link')
			.should('exist')
			.and('contain.text', 'Story link')
			.and('have.class', 'nfd-link--default')
			.then(($el) => {
				expect($el[0].tagName).to.eq('A')
			})
	})
})
