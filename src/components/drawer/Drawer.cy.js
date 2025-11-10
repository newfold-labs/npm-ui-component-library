import Drawer from './index'

const mountDrawer = (props = {}, panelProps = {}, children = <div data-cy="panel-body">Body</div>) =>
	cy.mount(
		<Drawer isOpen onClose={cy.stub().as('onClose')} {...props}>
			<Drawer.Panel {...panelProps}>
				{children}
			</Drawer.Panel>
		</Drawer>
	)

describe('<Drawer /> — structure & visibility', () => {
	it('does not render when isOpen=false', () => {
		cy.mount(
			<Drawer isOpen={false} onClose={cy.stub()}>
				<Drawer.Panel />
			</Drawer>
		)
		cy.get('.nfd-drawer').should('not.exist')
		cy.get('[role="dialog"]').should('not.exist')
	})

	it('renders Dialog root and wrapper with default classes when open', () => {
		mountDrawer()
		cy.get('[role="dialog"]').should('exist')
		cy.get('.nfd-drawer')
			.should('exist')
			.and('have.class', 'nfd-drawer--right')
			.and('have.class', 'nfd-drawer--classic')
		cy.get('.nfd-drawer__panel').should('exist')
		cy.get('[data-cy="panel-body"]').should('contain.text', 'Body')
	})

	it('applies position and variant classes', () => {
		mountDrawer({ position: 'left', variant: 'offset', className: 'wrapx' }, { className: 'panelx' })
		cy.get('.nfd-drawer')
			.should('have.class', 'nfd-drawer--left')
			.and('have.class', 'nfd-drawer--offset')
			.and('have.class', 'wrapx')
		cy.get('.nfd-drawer__panel').should('have.class', 'panelx')
	})
})

describe('<Drawer /> — overlay & closing behavior', () => {
	it('renders overlay by default and calls onClose when clicking it', () => {
		mountDrawer()
		cy.get('.nfd-drawer__overlay').should('exist').click('center', { force: true })
		cy.get('@onClose').should('have.been.called')
	})

	it('closes on Escape key', () => {
		mountDrawer()
		cy.get('body').type('{esc}')
		cy.get('@onClose').should('have.been.called')
	})

	it('overlay=false hides overlay', () => {
		mountDrawer({ overlay: false })
		cy.get('.nfd-drawer__overlay').should('not.exist')
	})
})

describe('<Drawer /> — Header', () => {
	it('renders title (DialogTitle) with defaults and a close button that calls onClose', () => {
		mountDrawer({}, {}, (
			<>
				<Drawer.Header title="Settings" />
				<div data-cy="panel-body">Content</div>
			</>
		))

		cy.get('.nfd-drawer__header').should('exist')
		cy.get('.nfd-drawer__title')
			.should('contain.text', 'Settings')
			.then(($el) => {
				expect($el[0].tagName).to.eq('H2')
			})
			.and('have.class', 'nfd-title--4')

		cy.contains('.nfd-drawer__close button .nfd-sr-only', 'Close').should('exist')
		cy.get('.nfd-drawer__close-button').click()
		cy.get('@onClose').should('have.been.called')
	})

	it('supports titleAs and titleSize, merges header className', () => {
		mountDrawer({}, {}, (
			<>
				<Drawer.Header title="Dialog" titleAs="h3" titleSize="2" className="hdrx" />
				<div />
			</>
		))
		cy.get('.nfd-drawer__header').should('have.class', 'hdrx')
		cy.get('.nfd-drawer__title')
			.should('have.prop', 'tagName', 'H3')
			.and('have.class', 'nfd-title--2')
	})

	it('renders nothing when both title is empty and hasCloseButton=false', () => {
		mountDrawer({}, {}, (
			<>
				<Drawer.Header title="" hasCloseButton={false} />
				<div />
			</>
		))
		cy.get('.nfd-drawer__header').should('not.exist')
	})

	it('custom closeButtonScreenReaderText', () => {
		mountDrawer({}, {}, (
			<>
				<Drawer.Header title="A" closeButtonScreenReaderText="Dismiss" />
				<div />
			</>
		))
		cy.contains('.nfd-drawer__close .nfd-sr-only', 'Dismiss').should('exist')
	})
})

describe('<Drawer /> — Panel', () => {
	it('accepts className and forwards attributes', () => {
		cy.mount(
			<Drawer isOpen onClose={cy.stub()}>
				<Drawer.Panel className="panelz" data-foo="bar">
					<div />
				</Drawer.Panel>
			</Drawer>
		)
		cy.get('.nfd-drawer__panel')
			.should('have.class', 'panelz')
			.and('have.attr', 'data-foo', 'bar')
	})
})

describe('<Drawer /> — contract enforcement', () => {
	it('throws if child is not Drawer.Panel', (done) => {
		cy.on('uncaught:exception', (err) => {
			try {
				expect(err.message).to.include('Drawer component only accepts Drawer.Panel as a child')
				done()
			} catch (e) {
				done(e)
			}
			return false
		})

		cy.mount(
			<Drawer isOpen onClose={() => {}}>
				<div>Invalid child</div>
			</Drawer>
		)
	})
})
