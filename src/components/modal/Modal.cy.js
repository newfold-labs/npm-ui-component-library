import Modal from './index'

const mountWith = (props = {}, panelProps = {}, titleProps = {}, children = <div data-cy="body">Body</div>) =>
	cy.mount(
		<Modal
			isOpen
			onClose={cy.stub().as('onClose')}
			{...props}
		>
			<Modal.Panel {...panelProps}>
				<Modal.Title {...titleProps}>My Modal</Modal.Title>
				<Modal.Description>Some details</Modal.Description>
				{children}
			</Modal.Panel>
		</Modal>
	)

describe('<Modal />', () => {
	it('renders when open with title, description and content', () => {
		mountWith({}, {}, { size: '3', as: 'h2' })
		cy.get('.nfd-modal').should('exist')
		cy.get('.nfd-modal__overlay').should('exist')
		cy.get('.nfd-modal__panel').should('exist')
		cy.get('.nfd-title').should('contain.text', 'My Modal').and('have.prop', 'tagName', 'H2')
		cy.get('.nfd-title').should('have.class', 'nfd-title--3')
		cy.contains('Some details').should('exist')
		cy.get('[data-cy="body"]').should('exist')
	})

	it('applies position and custom class names', () => {
		mountWith({ position: 'top-center', className: 'm-custom' }, { className: 'p-custom' }, { className: 't-custom' })
		cy.get('.nfd-modal').should('have.class', 'nfd-modal--top-center').and('have.class', 'm-custom')
		cy.get('.nfd-modal__panel').should('have.class', 'p-custom')
		cy.get('.nfd-title').should('have.class', 't-custom')
	})

	it('close button calls onClose', () => {
		mountWith()
		cy.get('.nfd-modal__close-button').should('exist').click()
		cy.get('@onClose').should('have.been.calledOnce')
	})

	it('backdrop click calls onClose', () => {
		mountWith()
		cy.get('.nfd-modal__overlay').click({ force: true })
		cy.get('@onClose').should('have.been.calledOnce')
	})

	it('Escape key calls onClose', () => {
		mountWith()
		cy.document().trigger('keydown', { key: 'Escape' })
		cy.get('@onClose').should('have.been.calledOnce')
	})

	it('respects hasCloseButton=false and uses provided screen reader text', () => {
		mountWith({}, { hasCloseButton: true, closeButtonScreenReaderText: 'Dismiss' })
		cy.contains('.nfd-sr-only', 'Dismiss').should('exist')
		cy.mount(
			<Modal isOpen onClose={cy.stub().as('onCloseNoBtn')}>
				<Modal.Panel hasCloseButton={false}>
					<div>Content</div>
				</Modal.Panel>
			</Modal>
		)
		cy.get('.nfd-modal__close-button').should('not.exist')
	})

	it('does not render when closed', () => {
		cy.mount(
			<Modal isOpen={false} onClose={cy.stub().as('onCloseClosed')}>
				<Modal.Panel>
					<div>Hidden</div>
				</Modal.Panel>
			</Modal>
		)
		cy.get('.nfd-modal').should('not.exist')
	})

	it('Title defaults to h1 and size 1', () => {
		cy.mount(
			<Modal isOpen onClose={cy.stub().as('onClose')}>
				<Modal.Panel>
					<Modal.Title>Default Title</Modal.Title>
				</Modal.Panel>
			</Modal>
		)
		cy.contains('.nfd-title', 'Default Title')
			.should('have.prop', 'tagName', 'H1')
			.and('have.class', 'nfd-title--1')
	})
})
