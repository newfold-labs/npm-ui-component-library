import Page from './index'

describe('<Page />', () => {
	it('renders with default tag and base class and shows children', () => {
		cy.mount(<Page>Hello Page</Page>)
		cy.get('.nfd-page').should('exist').and('contain.text', 'Hello Page')
		cy.get('.nfd-page').then($el => {
			expect($el.prop('tagName')).to.eq('DIV')
		})
	})

	it('respects the "as" prop (renders as <main>)', () => {
		cy.mount(<Page as="main">Content</Page>)
		cy.get('main.nfd-page').should('exist').and('contain.text', 'Content')
		cy.get('main.nfd-page').then($el => {
			expect($el.prop('tagName')).to.eq('MAIN')
		})
	})

	it('merges custom className with base class', () => {
		cy.mount(<Page className="extra-class another-one">X</Page>)
		cy.get('.nfd-page')
			.should('have.class', 'extra-class')
			.and('have.class', 'another-one')
	})

	it('passes through arbitrary props to the DOM element', () => {
		cy.mount(
			<Page id="pg-1" role="region" data-testid="page-root" aria-label="Wrapper">
				A
			</Page>
		)
		cy.get('#pg-1.nfd-page')
			.should('have.attr', 'role', 'region')
			.and('have.attr', 'data-testid', 'page-root')
			.and('have.attr', 'aria-label', 'Wrapper')
	})

	it('renders nested children elements', () => {
		cy.mount(
			<Page>
				<span data-cy="child">Nested</span>
			</Page>
		)
		cy.get('.nfd-page [data-cy="child"]').should('exist').and('have.text', 'Nested')
	})

	it('forwards the ref to the underlying DOM node', () => {
		const refSpy = cy.stub().as('refSpy')
		cy.mount(<Page ref={refSpy}>Ref test</Page>)
		cy.get('@refSpy').should('have.been.calledOnce')
	})
})
