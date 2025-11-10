import Code, { StoryComponent } from './index'

describe('<Code /> — structure & defaults', () => {
	it('renders as a <code> with base class and default variant', () => {
		cy.mount(<Code>npm run build</Code>)

		cy.get('.nfd-code')
			.should('exist')
			.and('contain.text', 'npm run build')
			.then(($el) => {
				expect($el[0].tagName).to.eq('CODE')
			})

		cy.get('.nfd-code').should('not.have.class', 'nfd-code--block')
	})

	it('merges custom className', () => {
		cy.mount(<Code className="extra">echo</Code>)
		cy.get('.nfd-code').should('have.class', 'extra')
	})
})

describe('<Code /> — variants', () => {
	it('applies the "block" variant class', () => {
		cy.mount(<Code variant="block">console.log("hi")</Code>)
		cy.get('.nfd-code')
			.should('have.class', 'nfd-code--block')
			.and('contain.text', 'console.log("hi")')
	})

	it('respects explicit "default" variant (no extra class)', () => {
		cy.mount(<Code variant="default">print("ok")</Code>)
		cy.get('.nfd-code')
			.should('not.have.class', 'nfd-code--block')
			.and('contain.text', 'print("ok")')
	})
})

describe('<Code /> — prop passthrough & content', () => {
	it('forwards arbitrary attributes (id, aria-*, data-*)', () => {
		cy.mount(
			<Code id="snippet" aria-label="command" data-foo="bar">
				yarn test
			</Code>
		)

		cy.get('.nfd-code')
			.should('have.attr', 'id', 'snippet')
			.and('have.attr', 'aria-label', 'command')
			.and('have.attr', 'data-foo', 'bar')
	})

	it('renders complex children content', () => {
		cy.mount(
			<Code>
				git commit -m "<span data-cy="inner">feat</span>: init"
			</Code>
		)
		cy.get('.nfd-code').should('contain.text', 'git commit -m')
		cy.get('[data-cy="inner"]').should('contain.text', 'feat')
	})
})

describe('<Code /> — StoryComponent parity', () => {
	it('StoryComponent mirrors defaults', () => {
		cy.mount(<StoryComponent>hello world!</StoryComponent>)
		cy.get('.nfd-code')
			.should('exist')
			.and('contain.text', 'hello world!')
			.then(($el) => {
				expect($el[0].tagName).to.eq('CODE')
			})
			.and('not.have.class', 'nfd-code--block')
	})
})
