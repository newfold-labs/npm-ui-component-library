import ImageImport from './index'

const mountWith = (props = {}, children = <div data-cy="extra">Extra content</div>) =>
	cy.mount(
		<ImageImport
			id="img"
			name="avatar"
			buttonText="Select Image"
			dropLabel="Select an image or drag and drop"
			screenReaderLabel="Upload image"
			resetPreviewActionAriaLabel="Remove selected image"
			onChange={cy.stub().as('onChange')}
			onClick={cy.stub().as('onClick')}
			onReset={cy.stub().as('onReset')}
			onError={cy.stub().as('onError')}
			{...props}
		>
			{children}
		</ImageImport>
	)

const dropFile = (selector, { name, type, content = 'x' }) => {
	cy.get(selector).then(($el) => {
		const file = new File([content], name, { type })
		const dt = new DataTransfer()
		dt.items.add(file)
		const ev = new DragEvent('drop', { bubbles: true })
		Object.defineProperty(ev, 'dataTransfer', { value: dt })
		$el[0].dispatchEvent(ev)
	})
}

describe('<ImageImport />', () => {
	it('renders base structure, aria and children', () => {
		mountWith()
		cy.get('.nfd-image-import').should('exist')
		cy.get('.nfd-image-import__drop-label').should('contain.text', 'Select an image or drag and drop')
		cy.get('.nfd-drop-zone').should('have.attr', 'aria-label', 'Select an image or drag and drop')
		cy.get('[data-cy="extra"]').should('exist')
	})

	it('passes extra className and disabled state', () => {
		mountWith({ className: 'extra', disabled: true })
		cy.get('.nfd-image-import').should('have.class', 'extra').and('have.class', 'nfd-is-disabled')
		dropFile('.nfd-drop-zone', { name: 'pic.png', type: 'image/png' })
		cy.get('@onChange').should('not.have.been.called')
	})

	it('shows preview image when provided', () => {
		mountWith({ previewImage: 'https://test.local/p.png', previewImageAlt: 'Selected image' })
		cy.get('img.nfd-image-input__preview-img')
			.should('have.attr', 'src', 'https://test.local/p.png')
			.and('have.attr', 'alt', 'Selected image')
	})

	it('shows loading spinner when isLoading is true', () => {
		mountWith({ isLoading: true })
		cy.get('.nfd-image-input__loading').should('exist')
	})

	it('clicking the button calls onClick', () => {
		mountWith()
		cy.contains('button', 'Select Image').click()
		cy.get('@onClick').should('have.been.calledOnce')
	})

	it('default drop path maps image file into the input and triggers onChange with file', () => {
		mountWith()
		dropFile('.nfd-drop-zone', { name: 'avatar.png', type: 'image/png' })
		cy.get('@onChange').should('have.been.calledOnce')
		cy.get('@onChange').its('firstCall.args.0.file').should((f) => {
			expect(f).to.be.instanceOf(File)
			expect(f.name).to.eq('avatar.png')
			expect(f.type).to.eq('image/png')
		})
		cy.get('img.nfd-image-input__preview-img').should('exist')
	})

	it('resetting the preview calls onReset', () => {
		mountWith()
		dropFile('.nfd-drop-zone', { name: 'avatar.png', type: 'image/png' })
		cy.get('.nfd-image-input__preview-reset').should('exist').click()
		cy.get('@onReset').should('have.been.calledOnce')
		cy.get('img.nfd-image-input__preview-img').should('not.exist')
	})

	it('non-image drop triggers onError and does not call onChange', () => {
		mountWith()
		dropFile('.nfd-drop-zone', { name: 'note.txt', type: 'text/plain' })
		cy.get('@onError').should('have.been.calledOnce')
		cy.get('@onChange').should('not.have.been.called')
	})

	it('custom onDrop overrides default behavior', () => {
		const onDrop = cy.stub().as('onDrop')
		mountWith({ onDrop })
		dropFile('.nfd-drop-zone', { name: 'avatar.png', type: 'image/png' })
		cy.get('@onDrop').should('have.been.calledOnce')
		cy.get('@onChange').should('not.have.been.called')
		cy.get('img.nfd-image-input__preview-img').should('not.exist')
	})

	it('forwards accept prop to input (defaults to image/*)', () => {
		mountWith()
		cy.get('input[type="file"]').should('have.attr', 'accept', 'image/*')
		mountWith({ accept: 'image/png,image/jpeg' })
		cy.get('input[type="file"]').should('have.attr', 'accept', 'image/png,image/jpeg')
	})
})
