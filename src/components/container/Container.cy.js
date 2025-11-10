import Container from './index'

const mountWith = (ui) => cy.mount(ui)

describe('<Container /> — base & composition', () => {
	it('renders base wrapper, merges className, forwards attrs, and composes children', () => {
		mountWith(
			<Container className="wrapx" data-foo="bar">
				<Container.Header title="Main Title" description="Short description" />
				<Container.Block id="blk-1" separator>
					<span data-cy="blk-content">Block content</span>
				</Container.Block>
				<Container.SettingsField title="Field Title" description="Field description">
					<button data-cy="field-child">Action</button>
				</Container.SettingsField>
				<Container.Footer className="footx">
					<span data-cy="foot-content">Footer content</span>
				</Container.Footer>
			</Container>
		)

		cy.get('.nfd-container')
			.should('exist')
			.and('have.class', 'wrapx')
			.and('have.attr', 'data-foo', 'bar')

		cy.get('.nfd-container__header').should('exist')
		cy.get('.nfd-container__block#blk-1').should('exist')
		cy.get('[data-cy="blk-content"]').should('contain.text', 'Block content')
		cy.get('.nfd-container__settings-field').should('exist')
		cy.get('[data-cy="field-child"]').should('exist')
		cy.get('.nfd-container__footer').should('exist')
		cy.get('[data-cy="foot-content"]').should('contain.text', 'Footer content')
	})

	it('supports "as" prop for each part', () => {
		mountWith(
			<Container as="section" data-cy="root">
				<Container.Header as="header" data-cy="hdr" />
				<Container.Block as="section" data-cy="blk">
					<div>X</div>
				</Container.Block>
				<Container.SettingsField as="section" data-cy="sf" title="T" />
				<Container.Footer as="footer" data-cy="ftr" />
			</Container>
		)

		cy.get('[data-cy="root"].nfd-container').should('have.prop', 'tagName', 'SECTION')
		cy.get('[data-cy="hdr"].nfd-container__header').should('have.prop', 'tagName', 'HEADER')
		cy.get('[data-cy="blk"].nfd-container__block').should('have.prop', 'tagName', 'SECTION')
		cy.get('[data-cy="sf"].nfd-container__settings-field').should('have.prop', 'tagName', 'SECTION')
		cy.get('[data-cy="ftr"].nfd-container__footer').should('have.prop', 'tagName', 'FOOTER')
	})
})

describe('Header — title/description/children', () => {
	it('renders Title as h2 with inferred size and custom classes; description in <p>; children appear', () => {
		mountWith(
			<Container>
				<Container.Header title="Header Title" description="Header Description">
					<span data-cy="hdr-child">Child</span>
				</Container.Header>
			</Container>
		)

		cy.get('.nfd-container__header').within(() => {
			cy.get('.nfd-title')
				.should('contain.text', 'Header Title')
				.and('have.prop', 'tagName', 'H2')
				.and('have.class', 'nfd-title--2')
				.and('have.class', 'nfd-text-2xl')
				.and('have.class', 'nfd-font-medium')
				.and('have.class', 'nfd-text-title')

			cy.get('p').should('contain.text', 'Header Description')
			cy.get('[data-cy="hdr-child"]').should('exist')
		})
	})

	it('merges className and forwards attributes', () => {
		mountWith(
			<Container>
				<Container.Header className="hdrx" data-foo="bar" />
			</Container>
		)
		cy.get('.nfd-container__header')
			.should('have.class', 'hdrx')
			.and('have.attr', 'data-foo', 'bar')
	})
})

describe('Block — wrapper, inner, separator', () => {
	it('wraps children and applies inner padding; toggles separator classes', () => {
		mountWith(
			<Container>
				<Container.Block data-cy="blk-plain">
					<span>Body</span>
				</Container.Block>
				<Container.Block data-cy="blk-sep" separator>
					<span>Body</span>
				</Container.Block>
			</Container>
		)

		cy.get('[data-cy="blk-plain"].nfd-container__block').within(() => {
			cy.get('> .nfd-pb-8').should('exist')
				.and('not.have.class', 'nfd-border-b')
		})

		cy.get('[data-cy="blk-sep"].nfd-container__block').within(() => {
			cy.get('> .nfd-pb-8')
				.should('have.class', 'nfd-border-b')
				.and('have.class', 'nfd-border-[#CBD5E1]')
		})
	})

	it('merges className, forwards id and attrs', () => {
		mountWith(
			<Container>
				<Container.Block id="b1" className="blkx" data-x="1">
					X
				</Container.Block>
			</Container>
		)
		cy.get('#b1.nfd-container__block')
			.should('have.class', 'blkx')
			.and('have.attr', 'data-x', '1')
	})
})

describe('SettingsField — layout, title, description, fieldset', () => {
	it('renders Title h3 (size 4), optional description, and fieldset with legend=title', () => {
		mountWith(
			<Container>
				<Container.SettingsField title="Field Title" description="Field Desc">
					<input data-cy="input-x" />
				</Container.SettingsField>
			</Container>
		)

		cy.get('.nfd-container__settings-field').within(() => {
			cy.get('.nfd-col-span-1 .nfd-title')
				.should('contain.text', 'Field Title')
				.and('have.prop', 'tagName', 'H3')
				.and('have.class', 'nfd-title--4')

			cy.get('.nfd-col-span-1 .nfd-mt-2').should('contain.text', 'Field Desc')

			cy.get('fieldset').within(() => {
				cy.get('legend.nfd-sr-only').should('contain.text', 'Field Title')
				cy.get('.st-space-y-8').within(() => {
					cy.get('[data-cy="input-x"]').should('exist')
				})
			})
		})
	})

	it('merges className and forwards attributes', () => {
		mountWith(
			<Container>
				<Container.SettingsField title="T" className="sfx" data-ok="1">
					<span />
				</Container.SettingsField>
			</Container>
		)
		cy.get('.nfd-container__settings-field')
			.should('have.class', 'sfx')
			.and('have.attr', 'data-ok', '1')
	})
})

describe('Footer — base, className, passthrough', () => {
	it('renders footer wrapper and children; merges className and attrs', () => {
		mountWith(
			<Container>
				<Container.Footer className="ftx" data-ft="y">
					<button data-cy="ft-btn">Save</button>
				</Container.Footer>
			</Container>
		)

		cy.get('.nfd-container__footer')
			.should('have.class', 'ftx')
			.and('have.attr', 'data-ft', 'y')
			.within(() => {
				cy.get('[data-cy="ft-btn"]').should('contain.text', 'Save')
			})
	})
})
