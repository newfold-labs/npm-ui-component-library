import React, { createRef } from 'react'
import Card, { StoryComponent } from './index'

describe('<Card />', () => {
	it('renders with defaults (div + base class) and children', () => {
		cy.mount(
			<Card data-testid="card">
				<span data-testid="child">Hello</span>
			</Card>
		)

		cy.get('[data-testid="card"]')
			.should('have.class', 'nfd-card')
			.then(($el) => {
				expect($el[0].tagName).to.eq('DIV')
			})

		cy.get('[data-testid="child"]').should('contain.text', 'Hello')
	})

	it('merges custom className', () => {
		cy.mount(<Card className="extra" data-testid="card" />)
		cy.get('[data-testid="card"]').should('have.class', 'nfd-card').and('have.class', 'extra')
	})

	it('supports the "as" prop to change the root tag', () => {
		cy.mount(<Card as="section" data-testid="card" />)
		cy.get('[data-testid="card"]').then(($el) => {
			expect($el[0].tagName).to.eq('SECTION')
		})
	})

	it('forwards other props (e.g., aria-*, data-*)', () => {
		cy.mount(<Card aria-label="card" data-foo="bar" data-testid="card" />)
		cy.get('[data-testid="card"]').should('have.attr', 'aria-label', 'card')
		cy.get('[data-testid="card"]').should('have.attr', 'data-foo', 'bar')
	})

	it('forwards ref that points to the DOM node', () => {
		const ref = createRef()
		cy.mount(<Card ref={ref}>x</Card>)
		cy.then(() => {
			expect(ref.current).to.exist
			expect(ref.current.tagName).to.eq('DIV')
			expect(ref.current.classList.contains('nfd-card')).to.be.true
		})
	})

	it('composes Header/Content/Footer with correct classes and children', () => {
		cy.mount(
			<Card data-testid="card">
				<Card.Header data-testid="hdr">Title</Card.Header>
				<Card.Content data-testid="cnt">Body</Card.Content>
				<Card.Footer data-testid="ftr">Foot</Card.Footer>
			</Card>
		)

		cy.get('[data-testid="hdr"]')
			.should('have.class', 'nfd-card__header')
			.and('contain.text', 'Title')

		cy.get('[data-testid="cnt"]')
			.should('have.class', 'nfd-card__content')
			.and('contain.text', 'Body')

		cy.get('[data-testid="ftr"]')
			.should('have.class', 'nfd-card__footer')
			.and('contain.text', 'Foot')
	})

	it('Header/Content/Footer respect the "as" prop and className', () => {
		cy.mount(
			<Card>
				<Card.Header as="header" className="hdrx" data-testid="hdr" />
				<Card.Content as="main" className="cntx" data-testid="cnt" />
				<Card.Footer as="footer" className="ftrx" data-testid="ftr" />
			</Card>
		)

		cy.get('[data-testid="hdr"]').then(($el) => {
			expect($el[0].tagName).to.eq('HEADER')
		}).and('have.class', 'nfd-card__header').and('have.class', 'hdrx')

		cy.get('[data-testid="cnt"]').then(($el) => {
			expect($el[0].tagName).to.eq('MAIN')
		}).and('have.class', 'nfd-card__content').and('have.class', 'cntx')

		cy.get('[data-testid="ftr"]').then(($el) => {
			expect($el[0].tagName).to.eq('FOOTER')
		}).and('have.class', 'nfd-card__footer').and('have.class', 'ftrx')
	})

	it('StoryComponent honors Card defaults', () => {
		cy.mount(<StoryComponent data-testid="story" />)
		cy.get('[data-testid="story"]')
			.should('have.class', 'nfd-card')
			.then(($el) => {
				expect($el[0].tagName).to.eq('DIV')
			})
	})
})
