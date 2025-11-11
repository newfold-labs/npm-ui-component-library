import { default as Root, RootContext } from './index'

const CtxProbe = (props) => (
	<RootContext.Consumer>
		{({ isRtl }) => <div data-cy={props['data-cy']}>{String(isRtl)}</div>}
	</RootContext.Consumer>
)

describe('Root', () => {
	it('renders wrapper and children', () => {
		cy.mount(
			<Root>
				<span data-cy="child">Hello</span>
			</Root>
		)
		cy.get('.nfd-root').should('exist')
		cy.get('[data-cy="child"]').should('have.text', 'Hello')
	})

	it('provides default context value', () => {
		cy.mount(
			<Root>
				<CtxProbe data-cy="probe" />
			</Root>
		)
		cy.get('[data-cy="probe"]').should('have.text', 'false')
	})

	it('overrides context via prop', () => {
		cy.mount(
			<Root context={{ isRtl: true }}>
				<CtxProbe data-cy="probe" />
			</Root>
		)
		cy.get('[data-cy="probe"]').should('have.text', 'true')
	})

	it('falls back to defaults when context is an empty object', () => {
		cy.mount(
			<Root context={{}}>
				<CtxProbe data-cy="probe" />
			</Root>
		)
		cy.get('[data-cy="probe"]').should('have.text', 'false')
	})

	it('passes arbitrary props to the wrapper', () => {
		cy.mount(
			<Root data-qa="root">
				<span>Content</span>
			</Root>
		)
		cy.get('.nfd-root[data-qa="root"]')
			.should('have.attr', 'data-qa', 'root')
	})

	it('scopes values correctly with nested providers', () => {
		cy.mount(
			<Root context={{ isRtl: false }}>
				<CtxProbe data-cy="outer" />
				<Root context={{ isRtl: true }}>
					<CtxProbe data-cy="inner" />
				</Root>
			</Root>
		)
		cy.get('[data-cy="outer"]').should('have.text', 'false')
		cy.get('[data-cy="inner"]').should('have.text', 'true')
	})
})
