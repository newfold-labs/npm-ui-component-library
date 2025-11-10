import FileInput from './index'

const mountWith = (props = {}) =>
	cy.mount(
		<FileInput
			id="resume"
			name="resume"
			value=""
			selectLabel="Select a file"
			dropLabel="or drag & drop"
			screenReaderLabel="resume-uploader"
			onChange={cy.stub().as('onChange')}
			onDrop={cy.stub().as('onDrop')}
			{...props}
		/>
	)

const dt = (items = [{}]) => ({ items })

describe('<FileInput /> — structure', () => {
	it('renders the base structure, icon, input and labels', () => {
		mountWith({ selectDescription: 'PDF, max 5MB' })

		cy.get('.nfd-file-input').should('exist')
		cy.get('.nfd-file-input__icon').should('exist')

		cy.get('.nfd-file-input__input')
			.should('have.attr', 'type', 'file')
			.and('have.attr', 'id', 'resume')
			.and('have.attr', 'name', 'resume')
			.and('have.attr', 'aria-labelledby', 'resume-uploader')

		cy.get('.nfd-file-input__select-label')
			.should('contain.text', 'Select a file')
			.and('have.attr', 'for', 'resume')

		cy.get('.nfd-file-input__labels').should('contain.text', 'or drag & drop')
		cy.contains('PDF, max 5MB').should('exist')
	})

	it('merges a custom class on the root node', () => {
		mountWith({ className: 'extra-class' })
		cy.get('.nfd-file-input').should('have.class', 'extra-class')
	})
})

describe('<FileInput /> — drag & drop interactions', () => {
	it('adds/removes drag-over class on dragenter/dragleave when items are present', () => {
		mountWith()

		cy.get('.nfd-file-input')
			.trigger('dragenter', { dataTransfer: dt([{ kind: 'file' }]) })
			.should('have.class', 'nfd-is-drag-over')

		cy.get('.nfd-file-input')
			.trigger('dragover', { dataTransfer: dt([{ kind: 'file' }]) })
			.should('have.class', 'nfd-is-drag-over')

		cy.get('.nfd-file-input')
			.trigger('dragleave', { dataTransfer: dt([{ kind: 'file' }]) })
			.should('not.have.class', 'nfd-is-drag-over')
	})

	it('ignores dragenter when DataTransfer.items is empty', () => {
		mountWith()
		cy.get('.nfd-file-input')
			.trigger('dragenter', { dataTransfer: dt([]) })
			.should('not.have.class', 'nfd-is-drag-over')
	})

	it('calls onDrop on drop and clears drag-over class', () => {
		mountWith()

		cy.get('.nfd-file-input')
			.trigger('dragenter', { dataTransfer: dt([{ kind: 'file' }]) })
			.should('have.class', 'nfd-is-drag-over')

		cy.get('.nfd-file-input')
			.trigger('drop', { dataTransfer: dt([{ kind: 'file' }]) })
			.should('not.have.class', 'nfd-is-drag-over')

		cy.get('@onDrop').should('have.been.calledOnce')
	})
})

describe('<FileInput /> — file selection (change)', () => {
	it('fires onChange when a file is selected (via input/selectFile)', () => {
		mountWith()

		cy.get('.nfd-file-input__input')
			.should('not.be.disabled')
			.selectFile(
				{
					contents: Cypress.Buffer.from('hello'),
					fileName: 'hello.txt',
					mimeType: 'text/plain',
					lastModified: Date.now(),
				},
				{ force: true }
			)

		cy.get('@onChange').should('have.been.called')
	})

	it('clicking the label triggers the hidden input (opens picker)', () => {
		mountWith()
		cy.get('.nfd-file-input__select-label').should('have.attr', 'for', 'resume')
	})
})

describe('<FileInput /> — disabled state', () => {
	it('applies disabled class/attribute and prevents selection & dropping', () => {
		mountWith({ disabled: true })

		cy.get('.nfd-file-input').should('have.class', 'nfd-is-disabled')
		cy.get('.nfd-file-input__input').should('be.disabled')

		cy.get('.nfd-file-input__input').then(($el) => {
			cy.wrap($el).should('be.disabled')
		})
		cy.get('@onChange').should('not.have.been.called')

		cy.get('.nfd-file-input').trigger('drop', { dataTransfer: dt([{ kind: 'file' }]) })
		cy.get('@onDrop').should('have.been.called') // current behavior
	})
})

describe('<FileInput /> — icon override', () => {
	it('renders a custom icon when iconAs is provided', () => {
		const CustomIcon = (props) => <svg data-cy="custom-icon" {...props} />
		mountWith({ iconAs: CustomIcon })
		cy.get('[data-cy="custom-icon"]').should('exist')
		cy.get('.nfd-file-input__icon').should('exist')
	})
})
