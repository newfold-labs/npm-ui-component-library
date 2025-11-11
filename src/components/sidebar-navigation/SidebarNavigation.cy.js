import SidebarNavigation from './index'

describe('SidebarNavigation', () => {
	const mountWithSidebar = (activePath = '/dashboard', extra = null) => {
		cy.mount(
			<SidebarNavigation activePath={activePath}>
				<SidebarNavigation.Sidebar className="test-sidebar">
					<SidebarNavigation.MenuItem label="Main" defaultOpen>
						<SidebarNavigation.SubmenuItem href="/dashboard" label="Dashboard" />
						<SidebarNavigation.SubmenuItem href="/settings" label="Settings" />
					</SidebarNavigation.MenuItem>
					{extra}
				</SidebarNavigation.Sidebar>
			</SidebarNavigation>
		)
	}

	it('renders Sidebar wrapper and highlights the active SubmenuItem', () => {
		mountWithSidebar('/dashboard')

		cy.get('.test-sidebar').should('exist')

		cy.contains('a', 'Dashboard')
			.as('active')
			.should('have.attr', 'aria-current', 'page')
			.and('have.class', 'nfd-bg-slate-200')
			.and('have.class', 'nfd-text-slate-900')

		cy.contains('a', 'Settings')
			.as('inactive')
			.should('not.have.attr', 'aria-current')
		cy.contains('a', 'Settings')
			.and('have.class', 'nfd-text-slate-600')
	})

	it('toggles MenuItem content and aria-expanded', () => {
		cy.mount(
			<SidebarNavigation activePath="/none">
				<SidebarNavigation.Sidebar>
					<SidebarNavigation.MenuItem label="Sections" defaultOpen={false}>
						<SidebarNavigation.SubmenuItem href="/a" label="A" />
						<SidebarNavigation.SubmenuItem href="/b" label="B" />
					</SidebarNavigation.MenuItem>
				</SidebarNavigation.Sidebar>
			</SidebarNavigation>
		)

		cy.contains('button', 'Sections')
			.as('toggle')
			.should('have.attr', 'aria-expanded', 'false')

		cy.get('ul').should('not.exist')

		cy.get('@toggle').click().should('have.attr', 'aria-expanded', 'true')
		cy.get('ul').should('exist').within(() => {
			cy.contains('a', 'A').should('exist')
			cy.contains('a', 'B').should('exist')
		})

		cy.get('@toggle').click().should('have.attr', 'aria-expanded', 'false')
		cy.get('ul').should('not.exist')
	})

	it('supports custom element and pathProp on SubmenuItem', () => {
		cy.mount(
			<SidebarNavigation activePath="/preferences">
				<SidebarNavigation.Sidebar>
					<ul>
						<SidebarNavigation.SubmenuItem
							as="button"
							pathProp="data-href"
							data-href="/preferences"
							label="Preferences"
						/>
					</ul>
				</SidebarNavigation.Sidebar>
			</SidebarNavigation>
		)

		cy.contains('button', 'Preferences')
			.should('have.attr', 'aria-current', 'page')
			.and('have.class', 'nfd-bg-slate-200')
			.and('have.class', 'nfd-text-slate-900')
	})

	it('Mobile: opens via open button, shows dialog, and closes via close button', () => {
		cy.mount(
			<SidebarNavigation activePath="/home">
				<SidebarNavigation.Mobile
					openButtonId="openMenu"
					closeButtonId="closeMenu"
					aria-label="Site menu"
					openButtonScreenReaderText="Open menu"
					closeButtonScreenReaderText="Close menu"
				>
					<ul>
						<SidebarNavigation.SubmenuItem href="/home" label="Home" />
						<SidebarNavigation.SubmenuItem href="/about" label="About" />
					</ul>
				</SidebarNavigation.Mobile>
			</SidebarNavigation>
		)

		cy.get('.nfd-mobile-navigation__dialog').should('not.exist')

		cy.get('#openMenu').click()
		cy.get('.nfd-mobile-navigation__dialog').should('exist')
		cy.get('.nfd-fixed.nfd-inset-0').should('exist') // overlay

		cy.get('#closeMenu').click()
		cy.get('.nfd-mobile-navigation__dialog').should('not.exist')
	})

	it('Mobile: clicking a SubmenuItem closes the drawer', () => {
		cy.mount(
			<SidebarNavigation activePath="/home">
				<SidebarNavigation.Mobile
					openButtonId="openMenu"
					closeButtonId="closeMenu"
					aria-label="Site menu"
				>
					<ul>
						<SidebarNavigation.SubmenuItem href="/home" label="Home" />
						<SidebarNavigation.SubmenuItem href="/contact" label="Contact" />
					</ul>
				</SidebarNavigation.Mobile>
			</SidebarNavigation>
		)

		cy.get('#openMenu').click()
		cy.get('.nfd-mobile-navigation__dialog').should('exist')

		cy.contains('a', 'Contact').click()
		cy.get('.nfd-mobile-navigation__dialog').should('not.exist')
	})
})
