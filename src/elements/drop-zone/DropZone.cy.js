import DropZone from './index'

const mountWith = (props = {}, children = 'Drop files here') =>
	cy.mount(<DropZone onDrop={cy.stub().as('onDrop')} {...props}>{children}</DropZone>)

const dt = (items = [{}]) => ({ items }) // simple dataTransfer.items mock

describe('<DropZone /> — structure', () => {
	it('renders base class, merges custom class, and shows children', () => {
		mountWith({ className: 'extra' }, <span data-cy="child">Content</span>)

		cy.get('.nfd-drop-zone')
			.should('exist')
			.and('have.class', 'extra')
			.and('not.have.class', 'nfd-drop-zone-is-dragging-over')
			.and('not.have.class', 'nfd-drop-zone-is-disabled')
			.and('have.attr', 'tabindex', '0') // default tabbable when not disabled

		cy.get('.nfd-drop-zone__content').should('contain.text', 'Content')
	})

	it('passes arbitrary props to the root', () => {
		mountWith({ 'data-foo': 'bar', id: 'dz' })
		cy.get('#dz').should('have.attr', 'data-foo', 'bar')
	})
})

describe('<DropZone /> — drag interactions', () => {
	it('adds/removes "dragging over" class on dragenter/dragleave when items are present', () => {
		mountWith()

		// enter with files
		cy.get('.nfd-drop-zone')
			.trigger('dragenter', { dataTransfer: dt([{ kind: 'file' }]) })
			.should('have.class', 'nfd-drop-zone-is-dragging-over')

		// dragover just prevents default, keeps the class
		cy.get('.nfd-drop-zone')
			.trigger('dragover', { dataTransfer: dt([{ kind: 'file' }]) })
			.should('have.class', 'nfd-drop-zone-is-dragging-over')

		// leave removes the class
		cy.get('.nfd-drop-zone')
			.trigger('dragleave', { dataTransfer: dt([{ kind: 'file' }]) })
			.should('not.have.class', 'nfd-drop-zone-is-dragging-over')
	})

	it('ignores dragenter when items are empty', () => {
		mountWith()
		cy.get('.nfd-drop-zone')
			.trigger('dragenter', { dataTransfer: dt([]) })
			.should('not.have.class', 'nfd-drop-zone-is-dragging-over')
	})

	it('calls onDrop on drop and clears "dragging over" class', () => {
		mountWith()

		cy.get('.nfd-drop-zone')
			.trigger('dragenter', { dataTransfer: dt([{ kind: 'file' }]) })
			.should('have.class', 'nfd-drop-zone-is-dragging-over')

		cy.get('.nfd-drop-zone')
			.trigger('drop', { dataTransfer: dt([{ kind: 'file' }]) })
			.should('not.have.class', 'nfd-drop-zone-is-dragging-over')

		cy.get('@onDrop').should('have.been.calledOnce')
	})
})

describe('<DropZone /> — disabled state', () => {
	it('sets aria-disabled, tabindex="-1", disabled class, and prevents interactions', () => {
		mountWith({ disabled: true })

		cy.get('.nfd-drop-zone')
			.should('have.attr', 'aria-disabled', 'true')
			.and('have.attr', 'tabindex', '-1')
			.and('have.class', 'nfd-drop-zone-is-disabled')

		// Should NOT enter dragging-over state
		cy.get('.nfd-drop-zone')
			.trigger('dragenter', { dataTransfer: dt([{ kind: 'file' }]) })
			.should('not.have.class', 'nfd-drop-zone-is-dragging-over')

		// Should NOT call onDrop
		cy.get('.nfd-drop-zone').trigger('drop', { dataTransfer: dt([{ kind: 'file' }]) })
		cy.get('@onDrop').should('not.have.been.called')
	})
})

describe('<DropZone /> — tabindex behavior', () => {
	it('uses custom tabIndex when provided', () => {
		mountWith({ tabIndex: '3' })
		cy.get('.nfd-drop-zone').should('have.attr', 'tabindex', '3')
	})

	it('falls back to 0 when not disabled and no tabIndex prop is provided', () => {
		mountWith()
		cy.get('.nfd-drop-zone').should('have.attr', 'tabindex', '0')
	})
})
