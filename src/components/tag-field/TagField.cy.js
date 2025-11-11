import TagField from './index'

describe( 'TagField', () => {
	const baseProps = {
		id: 'tags',
		label: 'Tags',
		screenReaderRemoveTag: 'Remove tag',
	}

	it( 'renders label, associates it to the input, and supports a label suffix', () => {
		cy.mount(
			<TagField
				{ ...baseProps }
				labelSuffix={ <span data-cy="suffix">Optional</span> }
				tags={ [ 'alpha' ] }
			/>
		)

		cy.contains( 'label', 'Tags' ).should( 'exist' ).and( 'have.attr', 'for', 'tags' )
		cy.get( '[data-cy="suffix"]' ).should( 'contain.text', 'Optional' )

		cy.contains( 'label', 'Tags' ).click()
		cy.focused().should( 'have.attr', 'id', 'tags' )
	} )

	it( 'applies disabled state to wrapper and input', () => {
		cy.mount(
			<TagField
				{ ...baseProps }
				disabled
				tags={ [ 'alpha' ] }
			/>
		)

		cy.get( '.nfd-tag-field' ).should( 'have.class', 'nfd-tag-field--disabled' )
		cy.get( '#tags' ).should( 'be.disabled' )
	} )

	it( 'adds a tag on Enter and on comma, clears the input on blur', () => {
		const onAddTag = cy.spy().as( 'onAddTag' )

		cy.mount(
			<TagField
				{ ...baseProps }
				onAddTag={ onAddTag }
				tags={ [] }
			/>
		)

		cy.get( '#tags' ).type( 'hello{enter}' )
		cy.get( '@onAddTag' ).should( 'have.been.calledWith', 'hello' )

		cy.get( '#tags' ).type( 'world,' )
		cy.get( '@onAddTag' ).should( 'have.been.calledWith', 'world' )

		cy.get( '#tags' ).type( 'temp' )
		cy.get( '#tags' ).blur()
		cy.get( '@onAddTag' ).should( 'have.been.calledWith', 'temp' )
		cy.get( '#tags' ).should( 'have.value', '' )
	} )

	it( 'Backspace with no text removes last tag; Ctrl+Backspace requests clearing all', () => {
		const onRemoveTag = cy.spy().as( 'onRemoveTag' )
		const onSetTags = cy.spy().as( 'onSetTags' )

		cy.mount(
			<TagField
				{ ...baseProps }
				onRemoveTag={ onRemoveTag }
				onSetTags={ onSetTags }
				tags={ [ 'alpha', 'beta' ] }
			/>
		)

		cy.get( '#tags' ).should( 'have.value', '' )
		cy.get( '#tags' ).trigger( 'keydown', { key: 'Backspace' } )
		cy.get( '@onRemoveTag' ).should( 'have.been.calledWith', 1 )

		cy.get( '#tags' ).trigger( 'keydown', { key: 'Backspace', ctrlKey: true } )
		cy.get( '@onRemoveTag' ).should( 'have.been.calledWith', 1 )
		cy.get( '@onSetTags' ).should( 'have.been.calledWith', [] )
	} )

	it( 'renders existing tags and remove button triggers onRemoveTag for that index', () => {
		const onRemoveTag = cy.spy().as( 'onRemoveTag' )

		cy.mount(
			<TagField
				{ ...baseProps }
				tags={ [ 'alpha', 'beta', 'gamma' ] }
				onRemoveTag={ onRemoveTag }
				screenReaderRemoveTag="Remove tag"
			/>
		)

		cy.contains( 'alpha' ).should( 'exist' )
		cy.contains( 'beta' ).should( 'exist' )
		cy.contains( 'gamma' ).should( 'exist' )

		cy.contains( '.nfd-tag-input__tag', 'beta' ).within( () => {
			cy.get( 'button.nfd-tag-input__remove-tag' ).click()
		} )
		cy.get( '@onRemoveTag' ).should( 'have.been.calledWith', 1 )
	} )

	it( 'shows validation message, links aria-describedby to validation and description', () => {
		cy.mount(
			<TagField
				{ ...baseProps }
				tags={ [] }
				description="Help text"
				validation={ { variant: 'error', message: 'Required' } }
			/>
		)

		cy.get( '.nfd-tag-field__validation' ).as( 'val' ).should( 'contain.text', 'Required' )
		cy.get( '.nfd-tag-field__description' ).as( 'desc' ).should( 'contain.text', 'Help text' )

		cy.get( '@val' ).invoke( 'attr', 'id' ).then( ( valId ) => {
			cy.get( '@desc' ).invoke( 'attr', 'id' ).then( ( descId ) => {
				cy.get( '#tags' )
					.should( 'have.attr', 'aria-describedby' )
					.then( ( described ) => {
						expect( described ).to.include( valId )
						expect( described ).to.include( descId )
					} )
			} )
		} )
	} )

	it( 'passes through extra className to the wrapper', () => {
		cy.mount(
			<TagField
				{ ...baseProps }
				className="extra-class"
				tags={ [] }
			/>
		)
		cy.get( '.nfd-tag-field' ).should( 'have.class', 'extra-class' )
	} )

	it( 'does not call onAddTag when disabled', () => {
		const onAddTag = cy.spy().as( 'onAddTag' )

		cy.mount(
			<TagField
				id="tags"
				label="Tags"
				screenReaderRemoveTag="Remove tag"
				disabled
				onAddTag={ onAddTag }
				tags={ [] }
			/>
		)

		cy.get( '#tags' ).should( 'be.disabled' )
		cy.get( '@onAddTag' ).should( 'not.have.been.called' )
	} )
} )
