import FeatureUpsell from './index'

const mountWith = (props = {}, child = <div data-cy="content">Feature content</div>) =>
	cy.mount(<FeatureUpsell {...props}>{child}</FeatureUpsell>)

describe('<FeatureUpsell /> — rendering logic', () => {
	it('returns children as-is when shouldUpsell=false', () => {
		mountWith({ shouldUpsell: false })
		cy.get('[data-cy="content"]').should('contain.text', 'Feature content')
		cy.get('.nfd-feature-upsell').should('not.exist')
	})

	it('wraps children and renders overlay + CTA when shouldUpsell=true (default variant=card)', () => {
		mountWith({ shouldUpsell: true, cardText: 'Unlock', cardLink: 'https://example.com' })
		cy.get('.nfd-feature-upsell')
			.should('exist')
			.and('have.class', 'nfd-feature-upsell--card')

		cy.get('.nfd-feature-upsell > .nfd-space-y-8.nfd-grayscale')
			.should('exist')
			.within(() => {
				cy.get('[data-cy="content"]').should('contain.text', 'Feature content')
			})

		cy.get('.nfd-feature-upsell > .nfd-absolute.nfd-inset-0').should('have.length.at.least', 1)
		cy.get('.nfd-feature-upsell .nfd-flex.nfd-items-center.nfd-justify-center')
			.find('a')
			.as('cta')

		cy.get('@cta')
			.should('contain.text', 'Unlock')
			.and('have.attr', 'href', 'https://example.com')
			.and('have.attr', 'target', '_blank')
			.and('have.attr', 'rel', 'noopener')

		cy.get('@cta').find('svg.nfd-w-5.nfd-h-5').should('exist')
	})
})

describe('<FeatureUpsell /> — variants & classes', () => {
	it('applies variant=default class', () => {
		mountWith({ variant: 'default' })
		cy.get('.nfd-feature-upsell').should('have.class', 'nfd-feature-upsell--default')
	})

	it('merges custom className on wrapper', () => {
		mountWith({ className: 'extra-class' })
		cy.get('.nfd-feature-upsell').should('have.class', 'extra-class')
	})
})

describe('<FeatureUpsell /> — CTA props passthrough', () => {
	it('forwards extra props to Button anchor', () => {
		mountWith(
			{ cardText: 'Go Pro', cardLink: '/pro', 'data-track': 'upsell', id: 'upsell-1' }
		)
		cy.get('.nfd-feature-upsell a#upsell-1')
			.should('have.attr', 'href', '/pro')
			.and('have.attr', 'data-track', 'upsell')
			.and('contain.text', 'Go Pro')
	})

	it('renders CTA even if cardLink/cardText are empty strings', () => {
		mountWith({ cardText: '', cardLink: '' })
		cy.get('.nfd-feature-upsell a').should('exist')
	})
})
