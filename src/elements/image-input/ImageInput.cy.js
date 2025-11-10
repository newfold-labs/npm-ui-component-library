import ImageInput from './index'

const mountWith = (props = {}) =>
	cy.mount(
		<ImageInput
			id="avatar"
			name="avatar"
			buttonText="Upload"
			{...props}
		/>
	)

const fileFixture = {
	contents: Cypress.Buffer.from('image-bytes'),
	fileName: 'pic.png',
	mimeType: 'image/png',
	lastModified: Date.now(),
}

describe('<ImageInput /> — structure & defaults', () => {
	it('renders the root, placeholder icon, hidden input and button', () => {
		mountWith()

		cy.get('.nfd-image-input').should('exist').and('not.have.class', 'nfd-has-preview')
		cy.get('.nfd-image-input__icon').should('exist') // placeholder icon (no preview)
		cy.get('input#avatar.nfd-hidden[type="file"]')
			.should('have.attr', 'accept', 'image/*')
			.and('not.be.disabled')
		cy.contains('button', 'Upload').should('exist')
	})

	it('merges custom class on the root', () => {
		mountWith({ className: 'extra-class' })
		cy.get('.nfd-image-input').should('have.class', 'extra-class')
	})

	it('uses custom accept and button text/variant when provided', () => {
		mountWith({ accept: '.jpg', buttonText: 'Select Image', buttonVariant: 'primary' })
		cy.get('input#avatar').should('have.attr', 'accept', '.jpg')
		cy.contains('button', 'Select Image').should('exist')
	})
})

describe('<ImageInput /> — selecting a file (onChange) and preview', () => {
	it('selects a file via input and calls onChange, shows preview img and adds nfd-has-preview', () => {
		mountWith({ onChange: cy.stub().as('onChange') })

		cy.get('input#avatar').selectFile(fileFixture, { force: true })

		cy.get('@onChange').should('have.been.called')
		cy.get('.nfd-image-input').should('have.class', 'nfd-has-preview')
		cy.get('.nfd-image-input__preview-img').should('exist') // blob URL rendered
	})

	it('clicking the button triggers the hidden input .click() when no custom onClick is provided', () => {
		mountWith()

		cy.get('input#avatar').then(($el) => {
			const el = $el[0]
			cy.stub(el, 'click').as('inputClick')
		})

		cy.contains('button', 'Upload').click()
		cy.get('@inputClick').should('have.been.calledOnce')
	})

	it('when a custom onClick is provided, it is called and the input is not clicked', () => {
		const onClick = cy.stub().as('onClick')
		mountWith({ onClick })

		cy.get('input#avatar').then(($el) => {
			cy.stub($el[0], 'click').as('inputClick')
		})

		cy.contains('button', 'Upload').click()
		cy.get('@onClick').should('have.been.calledOnce')
		cy.get('@inputClick').should('not.have.been.called')
	})
})

describe('<ImageInput /> — preview provided via prop & variant styling', () => {
	it('shows provided previewImage and variant class on the preview wrapper', () => {
		const preview = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAB'
		mountWith({ previewImage: preview, previewImageAlt: 'Avatar', variant: 'rounded' })

		cy.get('.nfd-image-input').should('have.class', 'nfd-has-preview')
		cy.get('.nfd-image-input__preview-img')
			.should('have.attr', 'src', preview)
			.and('have.attr', 'alt', 'Avatar')

		// variant=rounded => wrapper gets nfd-rounded-lg
		cy.get('.nfd-image-input__preview').should('have.class', 'nfd-rounded-lg')
	})

	it('falls back to default alt when previewImageAlt not provided', () => {
		const preview = 'data:image/png;base64,AAA'
		mountWith({ previewImage: preview })
		cy.get('.nfd-image-input__preview-img').should('have.attr', 'alt').and('match', /Selected/i)
	})
})

describe('<ImageInput /> — loading state', () => {
	it('shows Spinner when isLoading=true (no img yet) and does not add nfd-has-preview', () => {
		mountWith({ isLoading: true })
		cy.get('.nfd-image-input__loading').should('exist')
		cy.get('.nfd-image-input__preview-img').should('not.exist')
		cy.get('.nfd-image-input').should('not.have.class', 'nfd-has-preview')
	})
})

describe('<ImageInput /> — reset preview (click & keyboard) and onReset', () => {
	const preview = 'data:image/png;base64,BBB'

	it('clicking reset overlay clears preview and calls onReset with details', () => {
		mountWith({ previewImage: preview, onReset: cy.stub().as('onReset') })

		cy.get('.nfd-image-input__preview-reset').click()
		cy.get('.nfd-image-input__preview-img').should('not.exist')
		cy.get('.nfd-image-input').should('not.have.class', 'nfd-has-preview')

		cy.get('@onReset').should('have.been.calledOnce')
		cy.get('@onReset').its('lastCall.args.0').should((payload) => {
			expect(payload.inputId).to.eq('avatar')
			expect(payload.previousPreview).to.match(/^(data:|blob:)/)
		})
	})

	it('pressing Enter on reset overlay clears preview (keyboard support)', () => {
		mountWith({ previewImage: preview })
		cy.get('.nfd-image-input__preview-reset').trigger('keydown', { key: 'Enter' })
		cy.get('.nfd-image-input__preview-img').should('not.exist')
	})
})

describe('<ImageInput /> — disabled state', () => {
	const preview = 'data:image/png;base64,CCC'

	it('disables interactions: button click and reset do nothing', () => {
		const onReset = cy.stub().as('onReset')
		const onClick = cy.stub().as('onClick')

		mountWith({ disabled: true, previewImage: preview, onReset, onClick })

		// Button is disabled by prop; click should not trigger custom onClick
		cy.contains('button', 'Upload').should('be.disabled').click({ force: true })
		cy.get('@onClick').should('not.have.been.called')

		// Reset overlay should NOT clear when disabled
		cy.get('.nfd-image-input__preview-img').should('exist')
		cy.get('.nfd-image-input__preview-reset').click({ force: true })
		cy.get('.nfd-image-input__preview-img').should('still.exist')
		cy.get('@onReset').should('not.have.been.called')
	})
})
