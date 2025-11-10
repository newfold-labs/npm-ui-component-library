import Label, { StoryComponent } from './index'

const mountWith = (props = {}) =>
	cy.mount(<Label {...props} />)

describe('<Label /> — structure & defaults', () => {
	it('renders as <label> by default with base class and given text via "label"', () => {
		mountWith({ label: 'Username' })

		cy.get('.nfd-label')
			.should('exist')
			.and('contain.text', 'Username')
			.then(($el) => {
				expect($el[0].tagName).to.eq('LABEL')
			})

		cy.get('.nfd-label__required').should('not.exist')
	})

	it('merges custom className', () => {
		mountWith({ label: 'Email', className: 'extra' })
		cy.get('.nfd-label').should('have.class', 'extra')
	})

	it('forwards arbitrary props (htmlFor, id, aria-*, data-*) to the element', () => {
		mountWith({
			label: 'Password',
			htmlFor: 'pwd',
			id: 'pwd-label',
			'aria-label': 'pwd-label-a11y',
			'data-foo': 'bar',
		})

		cy.get('#pwd-label')
			.should('have.attr', 'for', 'pwd')
			.and('have.attr', 'aria-label', 'pwd-label-a11y')
			.and('have.attr', 'data-foo', 'bar')
	})
})

describe('<Label /> — content sources & variants', () => {
	it('uses "children" as fallback when "label" is empty', () => {
		mountWith({ children: 'Alt text' })
		cy.get('.nfd-label').should('contain.text', 'Alt text')
	})

	it('prefers "label" over "children" when both are present', () => {
		mountWith({ label: 'Primary', children: 'Secondary' })
		cy.get('.nfd-label')
			.should('contain.text', 'Primary')
			.and('not.contain.text', 'Secondary')
	})

	it('renders the required indicator when requiredIndicator=true (no dangerouslySetInnerHTML)', () => {
		mountWith({ label: 'Name', requiredIndicator: true })
		cy.get('.nfd-label__required').should('exist').and('contain.text', '*')
	})
})

describe('<Label /> — dangerouslySetInnerHTML path', () => {
	const html = 'Hello <strong data-cy="strong">World</strong>'

	it('renders inner HTML when dangerouslySetInnerHTML is provided', () => {
		mountWith({
			dangerouslySetInnerHTML: { __html: html },
		})

		cy.get('.nfd-label').should('contain.text', 'Hello')
		cy.get('[data-cy="strong"]').should('contain.text', 'World')
		cy.get('.nfd-label__required').should('not.exist')
	})

	it('appends required indicator to the provided HTML when requiredIndicator=true', () => {
		mountWith({
			dangerouslySetInnerHTML: { __html: html },
			requiredIndicator: true,
		})

		cy.get('.nfd-label').should('contain.text', 'Hello')
		cy.get('[data-cy="strong"]').should('contain.text', 'World')
		cy.get('.nfd-label__required').should('exist').and('contain.text', '*')
	})
})

describe('<Label /> — "as" prop (element type)', () => {
	it('renders as a different element when "as" is provided (e.g., span)', () => {
		mountWith({ as: 'span', label: 'Inline label' })
		cy.get('.nfd-label')
			.then(($el) => {
				expect($el[0].tagName).to.eq('SPAN')
			})
			.and('contain.text', 'Inline label')
	})

	it('can render as a legend element', () => {
		mountWith({ as: 'legend', label: 'Group title' })
		cy.get('.nfd-label')
			.then(($el) => {
				expect($el[0].tagName).to.eq('LEGEND')
			})
			.and('contain.text', 'Group title')
	})
})

describe('<Label /> — StoryComponent parity', () => {
	it('StoryComponent mirrors defaults and behavior', () => {
		cy.mount(<StoryComponent label="Story label" />)
		cy.get('.nfd-label')
			.should('exist')
			.and('contain.text', 'Story label')
			.then(($el) => {
				expect($el[0].tagName).to.eq('LABEL')
			})
	})
})
