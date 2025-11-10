import Paper, { StoryComponent } from './index'

describe('<Paper /> — structure & defaults', () => {
	it('renders as <div> by default with base class and children', () => {
		cy.mount(
			<Paper>
				<Paper.Header>Title</Paper.Header>
				<Paper.Content>Body</Paper.Content>
			</Paper>
		)

		cy.get('.nfd-paper')
			.should('exist')
			.then(($el) => {
				expect($el[0].tagName).to.eq('DIV')
			})

		cy.get('.nfd-paper__header')
			.should('exist')
			.and('contain.text', 'Title')
			.then(($el) => {
				expect($el[0].tagName).to.eq('HEADER') // Header default
			})

		cy.get('.nfd-paper__content')
			.should('exist')
			.and('contain.text', 'Body')
			.then(($el) => {
				expect($el[0].tagName).to.eq('DIV') // Content default
			})
	})

	it('merges custom className on the root', () => {
		cy.mount(<Paper className="extra"><Paper.Content>Body</Paper.Content></Paper>)
		cy.get('.nfd-paper').should('have.class', 'extra')
	})
})

describe('<Paper /> — "as" prop', () => {
	it('supports changing the root element via as', () => {
		cy.mount(
			<Paper as="section">
				<Paper.Content>Body</Paper.Content>
			</Paper>
		)

		cy.get('.nfd-paper').then(($el) => {
			expect($el[0].tagName).to.eq('SECTION')
		})
	})

	it('Header respects its own "as" prop', () => {
		cy.mount(
			<Paper>
				<Paper.Header as="h2">Heading</Paper.Header>
			</Paper>
		)

		cy.get('.nfd-paper__header')
			.should('contain.text', 'Heading')
			.then(($el) => {
				expect($el[0].tagName).to.eq('H2')
			})
	})

	it('Content respects its own "as" prop', () => {
		cy.mount(
			<Paper>
				<Paper.Content as="main">Main body</Paper.Content>
			</Paper>
		)

		cy.get('.nfd-paper__content')
			.should('contain.text', 'Main body')
			.then(($el) => {
				expect($el[0].tagName).to.eq('MAIN')
			})
	})
})

describe('<Paper /> — subcomponents & order', () => {
	it('renders Header before Content and keeps classes on both', () => {
		cy.mount(
			<Paper>
				<Paper.Header className="hdrx">Title</Paper.Header>
				<Paper.Content className="cntx">Body</Paper.Content>
			</Paper>
		)

		cy.get('.nfd-paper').children().first().should('have.class', 'nfd-paper__header')
		cy.get('.nfd-paper').children().eq(1).should('have.class', 'nfd-paper__content')

		cy.get('.nfd-paper__header').should('have.class', 'hdrx').and('contain.text', 'Title')
		cy.get('.nfd-paper__content').should('have.class', 'cntx').and('contain.text', 'Body')
	})
})

describe('<Paper /> — StoryComponent parity', () => {
	it('StoryComponent mirrors Paper defaults', () => {
		cy.mount(
			<StoryComponent>
				<Paper.Header>Story Header</Paper.Header>
				<Paper.Content>Story Content</Paper.Content>
			</StoryComponent>
		)

		cy.get('.nfd-paper').then(($el) => {
			expect($el[0].tagName).to.eq('DIV')
		})
		cy.get('.nfd-paper__header').should('contain.text', 'Story Header')
		cy.get('.nfd-paper__content').should('contain.text', 'Story Content')
	})
})
