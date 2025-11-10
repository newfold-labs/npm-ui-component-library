import Table from './index'

const mountTable = (extra = {}) =>
	cy.mount(
		<Table id="tbl" className="tblx" data-foo="bar" {...extra}>
			<Table.Head className="headx" data-head="1">
				<Table.Row className="row-head">
					<Table.Header className="hdx">Name</Table.Header>
					<Table.Header>Role</Table.Header>
				</Table.Row>
			</Table.Head>

			<Table.Body className="bodyx" data-body="1">
				<Table.Row variant="plain" className="row-plain" data-row="1">
					<Table.Cell className="cellx" data-cell="1">Alice</Table.Cell>
					<Table.Cell>Admin</Table.Cell>
				</Table.Row>
				<Table.Row variant="striped" className="row-striped" data-row="2">
					<Table.Cell>Bob</Table.Cell>
					<Table.Cell>User</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
	)

describe('<Table /> — structure & defaults', () => {
	it('renders wrapper, table, head/body sections with default classes', () => {
		mountTable()

		// Root wrapper div (visual container)
		cy.get('.nfd-overflow-hidden.nfd-shadow.nfd-ring-1.nfd-ring-black.nfd-ring-opacity-5.nfd-rounded-lg')
			.should('exist')

		// The actual <table> element receives the className prop
		cy.get('table#tbl')
			.should('exist')
			.and('have.class', 'tblx')
			.and('have.class', 'nfd-min-w-full')
			.and('have.class', 'nfd-divide-y')
			.and('have.class', 'nfd-divide-slate-300')
			.and('have.attr', 'data-foo', 'bar')

		// Thead defaults
		cy.get('thead')
			.should('have.class', 'nfd-bg-slate-50')
			.and('have.class', 'headx')
			.and('have.attr', 'data-head', '1')

		// Tbody defaults
		cy.get('tbody')
			.should('have.class', 'nfd-divide-y')
			.and('have.class', 'nfd-divide-gray-200')
			.and('have.class', 'nfd-bg-white')
			.and('have.class', 'bodyx')
			.and('have.attr', 'data-body', '1')

		// Order: thead before tbody
		cy.get('table#tbl').children().first().should('match', 'thead')
		cy.get('table#tbl').children().eq(1).should('match', 'tbody')
	})

	it('renders headers and cells with their default classes and text', () => {
		mountTable()

		cy.get('thead tr').should('have.length', 1)
		cy.get('thead tr th')
			.should('have.length', 2)
			.first()
			.should('have.class', 'nfd-px-3')
			.and('have.class', 'nfd-py-4')
			.and('have.class', 'nfd-text-left')
			.and('have.class', 'nfd-text-sm')
			.and('have.class', 'nfd-font-semibold')
			.and('have.class', 'nfd-text-slate-900')
			.and('have.class', 'hdx')
			.and('contain.text', 'Name')

		cy.get('tbody tr').should('have.length', 2)

		cy.get('tbody tr.row-plain td')
			.first()
			.should('have.class', 'nfd-px-3')
			.and('have.class', 'nfd-py-4')
			.and('have.class', 'nfd-text-sm')
			.and('have.class', 'nfd-text-slate-500')
			.and('have.class', 'cellx')
			.and('have.attr', 'data-cell', '1')
			.and('contain.text', 'Alice')
	})
})

describe('<Table /> — Row variants', () => {
	it('plain row: no striped utility classes', () => {
		mountTable()
		cy.get('tbody tr.row-plain')
			.should('not.have.class', 'even:nfd-bg-slate-50')
			.and('not.have.class', 'odd:nfd-bg-white')
			.and('have.attr', 'data-row', '1')
	})

	it('striped row: has the even/odd utility classes', () => {
		mountTable()
		cy.get('tbody tr.row-striped')
			.should('have.class', 'even:nfd-bg-slate-50')
			.and('have.class', 'odd:nfd-bg-white')
			.and('have.attr', 'data-row', '2')
	})
})

describe('<Table /> — className merging & prop passthrough', () => {
	it('merges className/props on subcomponents (Head, Body, Row, Header, Cell)', () => {
		cy.mount(
			<Table>
				<Table.Head className="H" data-x="head">
					<Table.Row className="R">
						<Table.Header className="TH" data-th="1">Col A</Table.Header>
						<Table.Header className="TH2" data-th="2">Col B</Table.Header>
					</Table.Row>
				</Table.Head>
				<Table.Body className="B" data-x="body">
					<Table.Row className="R2" data-row="r1">
						<Table.Cell className="TD" data-td="a">A1</Table.Cell>
						<Table.Cell className="TD2" data-td="b">B1</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		)

		cy.get('thead').should('have.class', 'H').and('have.attr', 'data-x', 'head')
		cy.get('tbody').should('have.class', 'B').and('have.attr', 'data-x', 'body')
		cy.get('thead tr').should('have.class', 'R')
		cy.get('tbody tr').should('have.class', 'R2').and('have.attr', 'data-row', 'r1')
		cy.get('thead th').first().should('have.class', 'TH').and('have.attr', 'data-th', '1')
		cy.get('thead th').eq(1).should('have.class', 'TH2').and('have.attr', 'data-th', '2')
		cy.get('tbody td').first().should('have.class', 'TD').and('have.attr', 'data-td', 'a')
		cy.get('tbody td').eq(1).should('have.class', 'TD2').and('have.attr', 'data-td', 'b')
	})
})

describe('<Table /> — content rendering', () => {
	it('renders multiple rows and preserves cell order/content', () => {
		cy.mount(
			<Table>
				<Table.Head>
					<Table.Row>
						<Table.Header>ID</Table.Header>
						<Table.Header>Name</Table.Header>
						<Table.Header>Role</Table.Header>
					</Table.Row>
				</Table.Head>
				<Table.Body>
					<Table.Row>
						<Table.Cell>1</Table.Cell>
						<Table.Cell>Alice</Table.Cell>
						<Table.Cell>Admin</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>2</Table.Cell>
						<Table.Cell>Bob</Table.Cell>
						<Table.Cell>User</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		)

		cy.get('tbody tr').should('have.length', 2)
		cy.get('tbody tr').first().within(() => {
			cy.get('td').eq(0).should('contain.text', '1')
			cy.get('td').eq(1).should('contain.text', 'Alice')
			cy.get('td').eq(2).should('contain.text', 'Admin')
		})
		cy.get('tbody tr').eq(1).within(() => {
			cy.get('td').eq(0).should('contain.text', '2')
			cy.get('td').eq(1).should('contain.text', 'Bob')
			cy.get('td').eq(2).should('contain.text', 'User')
		})
	})
})
