import AppBarNavigation from './index'

const DummyIcon = (props) => <svg data-cy="dummy-icon" {...props} />

const InlineNav = (activePath = '/home') => (
	<AppBarNavigation activePath={activePath}>
		<AppBarNavigation.AppBar forceMode="inline" position="fixed" className="appbarx" data-foo="bar">
			<AppBarNavigation.AppBar.Logo>
				<span data-cy="logo">LOGO</span>
			</AppBarNavigation.AppBar.Logo>

			<AppBarNavigation.AppBar.Nav className="navx" data-nav="1">
				<AppBarNavigation.AppBar.Item href="/home" className="homex">Home</AppBarNavigation.AppBar.Item>
				<AppBarNavigation.AppBar.Item href="/about">About</AppBarNavigation.AppBar.Item>
				<AppBarNavigation.AppBar.Item href="/icon" icon={DummyIcon}>IconLink</AppBarNavigation.AppBar.Item>
			</AppBarNavigation.AppBar.Nav>

			<AppBarNavigation.AppBar.Actions className="actionsx" data-actions="1">
				<button data-cy="action-btn">Action</button>
			</AppBarNavigation.AppBar.Actions>
		</AppBarNavigation.AppBar>
	</AppBarNavigation>
)

const CollapsedNav = (activePath = '/home') => (
	<AppBarNavigation activePath={activePath}>
		<AppBarNavigation.AppBar forceMode="collapsed" className="appbarc">
			<AppBarNavigation.AppBar.Logo>
				<span data-cy="logo">LOGO</span>
			</AppBarNavigation.AppBar.Logo>

			<AppBarNavigation.AppBar.Nav className="navc">
				<AppBarNavigation.AppBar.Item href="/home">Home</AppBarNavigation.AppBar.Item>
				<AppBarNavigation.AppBar.Item href="/about">About</AppBarNavigation.AppBar.Item>
			</AppBarNavigation.AppBar.Nav>
		</AppBarNavigation.AppBar>
	</AppBarNavigation>
)

describe('<AppBarNavigation /> — provider & composition', () => {
	it('renders children within NavigationProvider and exposes subcomponents', () => {
		cy.mount(InlineNav())

		cy.get('nav')
			.should('exist')
			.and('have.class', 'nfd-fixed') // position mapped
			.and('have.class', 'appbarx')
			.and('have.attr', 'data-foo', 'bar')

		cy.get('.nfd-appbar-logo').should('exist')
		cy.get('[data-cy="logo"]').should('contain.text', 'LOGO')

		cy.get('.nfd-appbar-actions')
			.should('have.class', 'actionsx')
			.and('have.attr', 'data-actions', '1')
		cy.get('[data-cy="action-btn"]').should('exist')
	})
})

describe('Inline mode — layout & active state', () => {
	it('renders inline menubar without the mobile trigger', () => {
		cy.mount(InlineNav())

		cy.get('[aria-label="Open menu"]').should('not.exist') // no MenuIcon
		cy.get('ul[role="menubar"]')
			.should('exist')
			.and('have.class', 'nfd-appbar-nav')
			.and('have.class', 'navx')
			.and('have.attr', 'data-nav', '1')
			.and('have.class', 'nfd-items-center') // inline mode class
			.and('not.have.class', 'nfd-flex-col')  // collapsed-only classes not present
	})

	it('marks the active item via class and aria-current', () => {
		cy.mount(InlineNav('/home'))

		cy.contains('li.nfd-appbar-item a', 'Home')
			.should('have.attr', 'aria-current', 'page')
			.and('have.class', 'nfd-bg-slate-200')
			.and('have.class', 'nfd-text-slate-900')

		cy.contains('li.nfd-appbar-item', 'Home')
			.should('have.class', 'nfd-appbar-item--active')

		cy.contains('li.nfd-appbar-item a', 'About')
			.should('not.have.attr', 'aria-current')
		cy.contains('li.nfd-appbar-item a', 'About')
			.and('have.class', 'nfd-text-slate-600')
	})

	it('renders an item with icon wrapper and passes classes to the icon', () => {
		cy.mount(InlineNav('/home'))
		cy.contains('li.nfd-appbar-item', 'IconLink')
			.find('[data-cy="dummy-icon"]')
			.should('exist')
			.and('have.class', 'nfd-flex-shrink-0')
			.and('have.class', 'nfd--ml-1')
			.and('have.class', 'nfd-h-6')
			.and('have.class', 'nfd-w-6')
			.and('have.class', 'nfd-text-slate-400')
	})
})

describe('Collapsed mode — trigger, overlay, drawer behavior', () => {
	it('shows the mobile trigger and collapsed nav structure (closed by default)', () => {
		cy.mount(CollapsedNav())

		cy.get('[aria-label="Open menu"]')
			.should('exist')
			.and('have.attr', 'aria-expanded', 'false')

		cy.get('.nfd-appbar-nav-overlay')
			.should('exist')
			.and('have.class', 'nfd-pointer-events-none')
			.and('have.class', 'nfd-opacity-0')

		cy.get('ul[role="menubar"]')
			.should('have.class', 'nfd-flex-col')
			.and('have.class', 'nfd--translate-y-full') // off-screen while closed
			.and('not.have.class', 'nfd-items-center')
	})

	it('opens the drawer on trigger click, locks scroll, toggles aria-expanded and classes', () => {
		cy.mount(CollapsedNav())

		cy.get('[aria-label="Open menu"]').click()
		cy.get('[aria-label="Open menu"]').should('have.attr', 'aria-expanded', 'true')

		cy.get('.nfd-appbar-nav-overlay')
			.should('not.have.class', 'nfd-pointer-events-none')
			.and('have.class', 'nfd-opacity-30')

		cy.get('ul[role="menubar"]').should('have.class', 'nfd-translate-y-0')

		cy.window().then((win) => {
			expect(win.document.documentElement.style.overflow).to.eq('hidden')
		})
	})

	it('closes the drawer on ESC and restores scroll', () => {
		cy.mount(CollapsedNav())

		cy.get('[aria-label="Open menu"]').click()
		cy.get('body').type('{esc}')

		cy.get('[aria-label="Open menu"]').should('have.attr', 'aria-expanded', 'false')
		cy.get('.nfd-appbar-nav-overlay')
			.should('have.class', 'nfd-pointer-events-none')
			.and('have.class', 'nfd-opacity-0')

		cy.window().then((win) => {
			expect(win.document.documentElement.style.overflow || '').to.not.eq('hidden')
		})
	})
})

describe('Items — roles and interaction', () => {
	it('items render with proper roles and classes per mode', () => {
		cy.mount(InlineNav())

		cy.get('ul[role="menubar"] li[role="presentation"]').should('have.length', 3)
		cy.contains('a[role="menuitem"]', 'Home')
			.should('exist')
			.and('have.class', 'nfd-flex')
	})

	it('clicking an item is allowed (handler closes mobile menu via NavigationContext, not asserted visually here)', () => {
		cy.mount(InlineNav())
		cy.contains('a[role="menuitem"]', 'About').click()
	})
})
