import FileImport, { FILE_IMPORT_STATUS } from './index'

const mountWith = (props = {}, children = <div data-cy="extra">Extra content</div>) =>
	cy.mount(
		<FileImport
			id="file"
			name="upload"
			selectLabel="Select a file"
			dropLabel="Drop here"
			screenReaderLabel="Upload file"
			abortScreenReaderLabel="Abort upload"
			feedbackTitle="Importing"
			onChange={cy.stub().as('onChange')}
			onAbort={cy.stub().as('onAbort')}
			{...props}
		>
			{children}
		</FileImport>
	)

const changeFile = (selector, { name, type, content = 'x' }) => {
	cy.get(selector).then(($input) => {
		const file = new File([content], name, { type })
		const dt = new DataTransfer()
		dt.items.add(file)
		Object.defineProperty($input[0], 'files', { value: dt.files, writable: false })
		const ev = new Event('change', { bubbles: true })
		$input[0].dispatchEvent(ev)
	})
}

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

describe('<FileImport />', () => {
	it('renders base structure in idle state', () => {
		mountWith()

		cy.get('.nfd-file-import').should('exist')
		cy.get('.nfd-file-import__input').should('exist')
		cy.contains('Drop here').should('exist')
		cy.get('[data-cy="extra"]').should('not.exist')

		cy.get('input[type="file"]')
			.should('have.attr', 'aria-labelledby', 'Upload file')
			.and('not.be.disabled')
	})

	it('renders feedback and children when status is not idle', () => {
		mountWith({ status: FILE_IMPORT_STATUS.selected })

		cy.get('.nfd-file-import__feedback').should('exist')
		cy.get('[data-cy="extra"]').should('exist')
	})

	it('does not show feedback when status is idle', () => {
		mountWith({ status: FILE_IMPORT_STATUS.idle })
		cy.get('.nfd-file-import__feedback').should('not.exist')
	})

	it('change on native input calls onChange with the selected file', () => {
		mountWith({ status: FILE_IMPORT_STATUS.selected })
		changeFile('input[type="file"]', { name: 'doc.pdf', type: 'application/pdf' })
		cy.get('@onChange').should('have.been.calledOnce')
		cy.get('@onChange').its('firstCall.args.0').should((file) => {
			expect(file).to.be.instanceOf(File)
			expect(file.name).to.eq('doc.pdf')
		})
	})

	it('dropping a file triggers onChange with the dropped file', () => {
		mountWith({ status: FILE_IMPORT_STATUS.selected })
		dropFile('.nfd-file-input', { name: 'report.csv', type: 'text/csv' })
		cy.get('@onChange').should('have.been.calledOnce')
		cy.get('@onChange').its('firstCall.args.0.name').should('eq', 'report.csv')
	})

	it('shows feedback area for selected with info icon', () => {
		mountWith({ status: FILE_IMPORT_STATUS.selected, feedbackDescription: 'Ready to import' })
		cy.get('.nfd-file-import__feedback').should('exist')
		cy.contains('.nfd-file-import__feedback-title', 'Importing').should('exist')
		cy.contains('.nfd-file-import__feedback-description', 'Ready to import').should('exist')
		cy.get('.nfd-validation-icon.nfd-validation-icon--info').should('exist')
		cy.get('.nfd-file-import__abort-button').should('not.exist')
	})

	it('loading state disables input and shows abort button; clicking abort calls onAbort', () => {
		mountWith({ status: FILE_IMPORT_STATUS.loading })
		cy.get('input[type="file"]').should('be.disabled')
		cy.get('.nfd-file-import__abort-button').should('exist').click()
		cy.get('@onAbort').should('have.been.calledOnce')
	})

	it('renders progress bar when progress is provided', () => {
		mountWith({
			status: FILE_IMPORT_STATUS.loading,
			progressMin: 0,
			progressMax: 100,
			progress: 30,
		})
		cy.get('.nfd-progress-bar__progress').should('have.attr', 'style').and('contain', 'width: 30%')
	})

	it('success state shows success icon only', () => {
		mountWith({ status: FILE_IMPORT_STATUS.success })
		cy.get('.nfd-validation-icon.nfd-validation-icon--success').should('exist')
		cy.get('.nfd-validation-icon.nfd-validation-icon--info').should('not.exist')
		cy.get('.nfd-file-import__abort-button').should('not.exist')
	})

	it('aborted state shows warning icon only', () => {
		mountWith({ status: FILE_IMPORT_STATUS.aborted })
		cy.get('.nfd-validation-icon.nfd-validation-icon--warning').should('exist')
		cy.get('.nfd-validation-icon.nfd-validation-icon--error').should('not.exist')
	})

	it('error state shows error icon only', () => {
		mountWith({ status: FILE_IMPORT_STATUS.error })
		cy.get('.nfd-validation-icon.nfd-validation-icon--error').should('exist')
		cy.get('.nfd-validation-icon.nfd-validation-icon--success').should('not.exist')
	})

	it('ignores drop with empty dataTransfer.files', () => {
		mountWith()
		cy.get('.nfd-file-input').then(($el) => {
			const ev = new DragEvent('drop', { bubbles: true })
			Object.defineProperty(ev, 'dataTransfer', {
				value: new DataTransfer(), // no files
			})
			$el[0].dispatchEvent(ev)
		})
		cy.get('@onChange').should('not.have.been.called')
	})
})
