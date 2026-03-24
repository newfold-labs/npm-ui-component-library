import TagInput, { StoryComponent } from './index'

const mountWith = (props = {}) =>
	cy.mount(
		<TagInput
			tags={['Alpha', 'Beta']}
			onAddTag={cy.stub().as('onAddTag')}
			onRemoveTag={cy.stub().as('onRemoveTag')}
			onSetTags={cy.stub().as('onSetTags')}
			onBlur={cy.stub().as('onBlur')}
			screenReaderRemoveTag="Remove tag"
			{...props}
		/>
	)

describe('<TagInput /> — structure & basics', () => {
	it('renders wrapper, default tags and input', () => {
		mountWith()

		cy.get('.nfd-tag-input')
			.should('exist')
			.and('not.have.class', 'nfd-tag-input--disabled')

		cy.get('.nfd-tag-input__tag').should('have.length', 2)
		cy.get('.nfd-tag-input__tag').first().should('contain.text', 'Alpha')
		cy.get('.nfd-tag-input__tag').eq(1).should('contain.text', 'Beta')

		cy.get('.nfd-tag-input__input').should('exist').and('have.attr', 'type', 'text')
	})

	it('merges custom className on root and forwards arbitrary props to input', () => {
		mountWith({ className: 'extra', placeholder: 'Add tag…', 'data-foo': 'bar', tabIndex: 2 })
		cy.get('.nfd-tag-input').should('have.class', 'extra')
		cy.get('.nfd-tag-input__input')
			.should('have.attr', 'placeholder', 'Add tag…')
			.and('have.attr', 'tabindex', '2')
	})
})

describe('<TagInput /> — adding tags', () => {
	it('adds a tag on comma (,) and clears the input', () => {
		mountWith()

		cy.get('.nfd-tag-input__input').type('hello,')
		cy.get('@onAddTag').should('have.been.calledWith', 'hello')
		cy.get('.nfd-tag-input__input').should('have.value', '')
	})

	it('adds a tag on Enter and clears the input', () => {
		mountWith()

		cy.get('.nfd-tag-input__input').type('world{enter}')
		cy.get('@onAddTag').should('have.been.calledWith', 'world')
		cy.get('.nfd-tag-input__input').should('have.value', '')
	})

	it('does not add an empty tag when pressing comma with empty input', () => {
		mountWith()
		cy.get('.nfd-tag-input__input').type(',')
		cy.get('@onAddTag').should('not.have.been.called')
	})

	it('adds a tag on blur when input has text and calls onBlur', () => {
		mountWith()

		cy.get('.nfd-tag-input__input').type('temp')
		cy.get('.nfd-tag-input__input').blur()
		cy.get('@onAddTag').should('have.been.calledWith', 'temp')
		cy.get('@onBlur').should('have.been.called')
		cy.get('.nfd-tag-input__input').should('have.value', '')
	})
})

describe('<TagInput /> — removing tags from input with Backspace', () => {
	it('Backspace with empty input removes the last tag', () => {
		mountWith({ tags: ['A', 'B', 'C'] })

		// Ensure input is empty
		cy.get('.nfd-tag-input__input').should('have.value', '')

		// Use a native keydown to include ctrlKey in other test; here simple backspace
		cy.get('.nfd-tag-input__input').trigger('keydown', { key: 'Backspace' })

		// Should remove index tags.length - 1 (2)
		cy.get('@onRemoveTag').should('have.been.calledWith', 2)
	})

	it('Ctrl+Backspace with empty input removes last tag and calls onSetTags([])', () => {
		mountWith({ tags: ['A', 'B'] })

		cy.get('.nfd-tag-input__input').trigger('keydown', { key: 'Backspace', ctrlKey: true })
		cy.get('@onRemoveTag').should('have.been.calledWith', 1)
		cy.get('@onSetTags').should('have.been.calledWith', [])
	})

	it('Backspace does nothing when there is text in the input', () => {
		mountWith({ tags: ['A'] })
		cy.get('.nfd-tag-input__input').type('x')
		cy.get('.nfd-tag-input__input').trigger('keydown', { key: 'Backspace' })
		cy.get('@onRemoveTag').should('not.have.been.called')
	})
})

describe('<TagInput.Tag /> — removing tags via tag UI', () => {
	it('clicking the remove button calls onRemoveTag with the correct index', () => {
		mountWith({ tags: ['One', 'Two', 'Three'] })

		// Click remove on the second tag
		cy.get('.nfd-tag-input__tag').eq(1).within(() => {
			cy.get('.nfd-tag-input__remove-tag').click()
		})
		cy.get('@onRemoveTag').should('have.been.calledWith', 1)
	})

	it('pressing Backspace/Delete on a tag removes it (keyboard)', () => {
		mountWith({ tags: ['K1', 'K2'] })

		// The Badge element is not focusable by default; trigger keydown directly
		cy.get('.nfd-tag-input__tag').first().trigger('keydown', { key: 'Backspace' })
		cy.get('@onRemoveTag').should('have.been.calledWith', 0)

		cy.get('.nfd-tag-input__tag').eq(1).trigger('keydown', { key: 'Delete' })
		cy.get('@onRemoveTag').should('have.been.calledWith', 1)
	})

	it('renders screen-reader text inside remove button', () => {
		mountWith({ screenReaderRemoveTag: 'Remove this tag' })
		cy.get('.nfd-tag-input__remove-tag .nfd-sr-only').should('contain.text', 'Remove this tag')
	})
})

describe('<TagInput /> — disabled state', () => {
	it('disables input and prevents tag removal via UI/keyboard', () => {
		mountWith({ disabled: true })

		cy.get('.nfd-tag-input').should('have.class', 'nfd-tag-input--disabled')
		cy.get('.nfd-tag-input__input').should('be.disabled')

		// Clicking remove should do nothing
		cy.get('.nfd-tag-input__tag').first().within(() => {
			cy.get('.nfd-tag-input__remove-tag').click({ force: true })
		})
		cy.get('@onRemoveTag').should('not.have.been.called')

		// Keydown on tag should do nothing
		cy.get('.nfd-tag-input__tag').first().trigger('keydown', { key: 'Backspace' })
		cy.get('@onRemoveTag').should('not.have.been.called')
	})
})

describe('<TagInput /> — children override', () => {
	it('renders custom children instead of default Tag list', () => {
		cy.mount(
			<TagInput
				tags={['WillNotRender']}
				screenReaderRemoveTag="Remove tag"
			>
				<div data-cy="custom-tags">Custom tags here</div>
			</TagInput>
		)

		cy.get('[data-cy="custom-tags"]').should('exist').and('contain.text', 'Custom tags here')
		cy.get('.nfd-tag-input__tag').should('not.exist') // default tags not rendered
	})
})

describe('<TagInput /> — StoryComponent parity', () => {
	it('StoryComponent mirrors defaults and behavior', () => {
		cy.mount(
			<StoryComponent
				tags={['S1']}
				onAddTag={cy.stub().as('s_onAdd')}
				onRemoveTag={cy.stub().as('s_onRemove')}
				screenReaderRemoveTag="SR remove"
			/>
		)

		cy.get('.nfd-tag-input__tag').should('have.length', 1).and('contain.text', 'S1')
		cy.get('.nfd-tag-input__input').type('Z{enter}')
		cy.get('@s_onAdd').should('have.been.calledWith', 'Z')
		cy.get('.nfd-tag-input__tag').first().find('.nfd-tag-input__remove-tag').click()
		cy.get('@s_onRemove').should('have.been.calledWith', 0)
	})
})
