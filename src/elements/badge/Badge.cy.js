import Badge, { StoryComponent } from './index'

describe('<Badge /> — structure & defaults', () => {
	it('renders as a <span> by default with base class and default variant', () => {
		cy.mount(<Badge>New</Badge>)

		cy.get('.nfd-badge')
			.should('exist')
			.and('contain.text', 'New')
			.then(($el) => {
				expect($el[0].tagName).to.eq('SPAN') // default "as"
			})

		// default variant is "info"
		cy.get('.nfd-badge').should('have.class', 'nfd-badge--info')

		// default size is "default" (no extra size class)
		cy.get('.nfd-badge').should('not.have.class', 'nfd-badge--small')
		cy.get('.nfd-badge').should('not.have.class', 'nfd-badge--large')
	})

	it('merges custom className with the base class', () => {
		cy.mount(<Badge className="extra">Label</Badge>)
		cy.get('.nfd-badge').should('have.class', 'extra')
	})
})

describe('<Badge /> — variants and sizes', () => {
	it('applies the "upsell" variant class', () => {
		cy.mount(<Badge variant="upsell">Pro</Badge>)
		cy.get('.nfd-badge')
			.should('have.class', 'nfd-badge--upsell')
			.and('not.have.class', 'nfd-badge--info')
	})

	it('applies the "plain" variant class', () => {
		cy.mount(<Badge variant="plain">Plain</Badge>)
		cy.get('.nfd-badge')
			.should('have.class', 'nfd-badge--plain')
			.and('not.have.class', 'nfd-badge--info')
	})

	it('applies "small" and "large" size classes', () => {
		cy.mount(<Badge size="small">S</Badge>)
		cy.get('.nfd-badge')
			.should('have.class', 'nfd-badge--small')
			.and('not.have.class', 'nfd-badge--large')

		cy.mount(<Badge size="large">L</Badge>)
		cy.get('.nfd-badge')
			.should('have.class', 'nfd-badge--large')
			.and('not.have.class', 'nfd-badge--small')
	})

	it('combines variant and size together with custom classes', () => {
		cy.mount(
			<Badge variant="upsell" size="small" className="test-class">
				Combo
			</Badge>
		)
		cy.get('.nfd-badge')
			.should('have.class', 'nfd-badge--upsell')
			.and('have.class', 'nfd-badge--small')
			.and('have.class', 'test-class')
	})
})

describe('<Badge /> — "as" prop (element type)', () => {
	it('renders as an anchor when as="a" and supports href', () => {
		cy.mount(
			<Badge as="a" href="https://example.com" target="_blank" rel="noreferrer">
				Link
			</Badge>
		)

		cy.get('.nfd-badge')
			.then(($el) => {
				expect($el[0].tagName).to.eq('A')
			})
			.and('have.attr', 'href', 'https://example.com')
			.and('have.attr', 'target', '_blank')
			.and('have.attr', 'rel', 'noreferrer')
	})

	it('renders as a button when as="button" and handles click events', () => {
		const onClick = cy.stub().as('onClick')
		cy.mount(
			<Badge as="button" type="button" onClick={onClick}>
				Click me
			</Badge>
		)

		cy.get('.nfd-badge')
			.then(($el) => {
				expect($el[0].tagName).to.eq('BUTTON')
			})
			.and('have.attr', 'type', 'button')
			.click()

		cy.get('@onClick').should('have.been.calledOnce')
	})
})

describe('<Badge /> — prop passthrough', () => {
	it('forwards arbitrary props (id, aria-*, data-*) to the rendered element', () => {
		cy.mount(
			<Badge id="promo" aria-label="promotion" data-foo="bar">
				Promo
			</Badge>
		)

		cy.get('.nfd-badge')
			.should('have.attr', 'id', 'promo')
			.and('have.attr', 'aria-label', 'promotion')
			.and('have.attr', 'data-foo', 'bar')
	})
})

describe('<Badge /> — StoryComponent parity', () => {
	it('StoryComponent mirrors Badge defaults', () => {
		cy.mount(<StoryComponent>Story</StoryComponent>)

		cy.get('.nfd-badge')
			.should('exist')
			.and('contain.text', 'Story')
			.and('have.class', 'nfd-badge--info')
			.then(($el) => {
				expect($el[0].tagName).to.eq('SPAN')
			})
	})
})
