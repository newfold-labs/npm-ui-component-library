import Notifications from './index'

const mountOne = (notificationsProps = {}, notificationProps = {}, children) =>
	cy.mount(
		<Notifications {...notificationsProps}>
			<Notifications.Notification
				id="n-1"
				title="Saved successfully"
				description="Everything went fine"
				dismissScreenReaderLabel="Dismiss"
				{...notificationProps}
			>
				{children}
			</Notifications.Notification>
		</Notifications>
	)

describe('<Notifications />', () => {
	it('renders container at default position and a basic notification', () => {
		mountOne()
		cy.get('.nfd-notifications').should('have.class', 'nfd-notifications--bottom-left')
		cy.get('.nfd-notification[role="alert"]').should('exist').and('have.class', 'nfd-notification--info')
		cy.contains('.nfd-text-sm.nfd-font-medium', 'Saved successfully').should('exist')
		cy.get('.nfd-notification').contains('Everything went fine').should('exist')
		cy.get('.nfd-notification .nfd-validation-icon').should('have.class', 'nfd-validation-icon--info')
	})

	it('renders with array description as a list', () => {
		mountOne({}, { description: ['A', 'B', 'C'] })
		cy.get('.nfd-notification ul').should('have.class', 'nfd-list-disc').find('li').should('have.length', 3)
		cy.get('.nfd-notification ul li').eq(0).should('contain.text', 'A')
	})

	it('children override description rendering', () => {
		mountOne({}, { description: 'This should not appear' }, <div data-cy="custom">Custom content</div>)
		cy.get('[data-cy="custom"]').should('exist')
		cy.get('.nfd-notification').should('not.contain.text', 'This should not appear')
	})

	it('applies variant and size classes and icon variant', () => {
		mountOne({}, { variant: 'error', size: 'large' })
		cy.get('.nfd-notification').should('have.class', 'nfd-notification--error').and('have.class', 'nfd-notification--large')
		cy.get('.nfd-validation-icon').should('have.class', 'nfd-validation-icon--error')
	})

	it('renders with different container positions', () => {
		mountOne({ position: 'bottom-center' })
		cy.get('.nfd-notifications').should('have.class', 'nfd-notifications--bottom-center')
		mountOne({ position: 'top-center' })
		cy.get('.nfd-notifications').should('have.class', 'nfd-notifications--top-center')
	})

	it('does not render dismiss button when onDismiss is not provided', () => {
		mountOne({}, { onDismiss: undefined })
		cy.contains('.nfd-sr-only', 'Dismiss').should('not.exist')
	})

	it('clicking dismiss calls onDismiss with id after transition delay', () => {
		cy.clock()
		const onDismiss = cy.stub().as('onDismiss')
		mountOne({}, { onDismiss })
		cy.contains('.nfd-sr-only', 'Dismiss').parents('button').click()
		cy.tick(160)
		cy.get('@onDismiss').should('have.been.calledOnceWith', 'n-1')
	})

	it('autoDismiss triggers onDismiss after configured delay + transition', () => {
		cy.clock()
		const onDismiss = cy.stub().as('onAutoDismiss')
		mountOne({}, { onDismiss, autoDismiss: 3000 })
		cy.tick(2999)
		cy.get('@onAutoDismiss').should('not.have.been.called')
		cy.tick(2)
		cy.get('@onAutoDismiss').should('not.have.been.called')
		cy.tick(160)
		cy.get('@onAutoDismiss').should('have.been.calledOnceWith', 'n-1')
	})

	it('multiple notifications dismiss independently', () => {
		cy.clock()
		const onDismiss1 = cy.stub().as('onDismiss1')
		const onDismiss2 = cy.stub().as('onDismiss2')
		cy.mount(
			<Notifications position="bottom-left">
				<Notifications.Notification
					id="n-1"
					title="One"
					description="Desc1"
					onDismiss={onDismiss1}
					dismissScreenReaderLabel="Dismiss One"
				/>
				<Notifications.Notification
					id="n-2"
					title="Two"
					description="Desc2"
					onDismiss={onDismiss2}
					dismissScreenReaderLabel="Dismiss Two"
				/>
			</Notifications>
		)
		cy.contains('.nfd-sr-only', 'Dismiss One').parents('button').click()
		cy.tick(160)
		cy.get('@onDismiss1').should('have.been.calledOnceWith', 'n-1')
		cy.get('@onDismiss2').should('not.have.been.called')
	})

	it('respects size=default (no extra class)', () => {
		mountOne({}, { size: 'default' })
		cy.get('.nfd-notification').should('not.have.class', 'nfd-notification--large')
	})
})
