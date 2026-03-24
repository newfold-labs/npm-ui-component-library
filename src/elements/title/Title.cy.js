import Title, { StoryComponent } from './index'

describe( '<Title /> — structure & defaults', () => {
	it( 'renders as <h1> by default with base class and size 1', () => {
		cy.mount( <Title>Hello</Title> )

		cy.get( '.nfd-title' )
			.should( 'exist' )
			.and( 'contain.text', 'Hello' )
			.and( 'have.class', 'nfd-title--1' )
			.then( ( $el ) => {
				expect( $el[ 0 ].tagName ).to.eq( 'H1' )
			} )
	} )

	it( 'merges custom className', () => {
		cy.mount( <Title className="extra">X</Title> )
		cy.get( '.nfd-title' ).should( 'have.class', 'extra' )
	} )
} )

describe( '<Title /> — "as" prop inference', () => {
	it( 'infers size from heading tag: as="h3" -> size 3', () => {
		cy.mount( <Title as="h3">Heading 3</Title> )
		cy.get( '.nfd-title' )
			.should( 'have.class', 'nfd-title--3' )
			.then( ( $el ) => expect( $el[ 0 ].tagName ).to.eq( 'H3' ) )
	} )

	it( 'non-heading tag without size defaults to size 1', () => {
		cy.mount( <Title as="div">Block title</Title> )
		cy.get( '.nfd-title' )
			.should( 'have.class', 'nfd-title--1' )
			.then( ( $el ) => expect( $el[ 0 ].tagName ).to.eq( 'DIV' ) )
	} )
} )

describe( '<Title /> — explicit size overrides inference', () => {
	it( 'size overrides inferred size (h4 + size="2" -> class --2)', () => {
		cy.mount( <Title as="h4" size="2">Overridden</Title> )
		cy.get( '.nfd-title' )
			.should( 'have.class', 'nfd-title--2' )
			.and( 'not.have.class', 'nfd-title--4' )
			.then( ( $el ) => expect( $el[ 0 ].tagName ).to.eq( 'H4' ) )
	} )

	it( 'supports largest mapped size "5"', () => {
		cy.mount( <Title size="5">XL</Title> )
		cy.get( '.nfd-title' ).should( 'have.class', 'nfd-title--5' )
	} )
} )

describe( '<Title /> — prop passthrough & children', () => {
	it( 'forwards arbitrary attributes (id, role, aria-*, data-*)', () => {
		cy.mount(
			<Title
				id="ttl"
				role="heading"
				aria-level="2"
				data-foo="bar"
			>
				A11y
			</Title>
		)

		cy.get( '#ttl.nfd-title' )
			.should( 'have.attr', 'role', 'heading' )
			.and( 'have.attr', 'aria-level', '2' )
			.and( 'have.attr', 'data-foo', 'bar' )
			.and( 'contain.text', 'A11y' )
	} )

	it( 'renders complex children content', () => {
		cy.mount(
			<Title>
				Title <strong data-cy="strong">bold</strong>
			</Title>
		)
		cy.get( '.nfd-title' ).should( 'contain.text', 'Title' )
		cy.get( '[data-cy="strong"]' ).should( 'contain.text', 'bold' )
	} )
} )

describe( '<Title /> — StoryComponent parity', () => {
	it( 'StoryComponent mirrors defaults and inference (as="h2" -> size 2)', () => {
		cy.mount( <StoryComponent as="h2">Story</StoryComponent> )
		cy.get( '.nfd-title' )
			.should( 'have.class', 'nfd-title--2' )
			.should('have.prop', 'tagName', 'H2')
			.and( 'contain.text', 'Story' )
	} )
} )
