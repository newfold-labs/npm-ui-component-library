import Select, { StoryComponent } from './index'

const OPTIONS = [
	{ value: 'a', label: 'Alpha' },
	{ value: 'b', label: 'Beta' },
	{ value: 'g', label: 'Gamma' },
]

// Helpers
const mountWith = ( props = {} ) =>
	cy.mount(
		<Select
			id="plan"
			value="a"
			options={ OPTIONS }
			onChange={ cy.stub().as( 'onChange' ) }
			{ ...props }
		/>
	)

const openList = () => cy.get( '.nfd-select__button' ).click()

describe( '<Select /> — structure & defaults', () => {
	it( 'renders the base classes and the button label for the selected option', () => {
		mountWith()

		cy.get( '.nfd-select' )
			.should( 'exist' )
			.and( 'not.have.class', 'nfd-select--disabled' )

		cy.get( '.nfd-select__button' ).should( 'exist' )

		cy.get( '.nfd-select__button-label' )
			.should( 'exist' )
			.and( 'contain.text', 'Alpha' ) // value="a" -> Alpha

		// Options panel closed by default
		cy.get( '.nfd-select__options' ).should( 'not.exist' )
	} )

	it( 'merges custom className on the root', () => {
		mountWith( { className: 'extra' } )
		cy.get( '.nfd-select' ).should( 'have.class', 'extra' )
	} )

	it( 'renders a Label (HeadlessUI Label as custom <Label/>) when label is provided', () => {
		mountWith( { label: 'Choose a plan' } )
		cy.get( '.nfd-label' ).should( 'exist' ).and( 'contain.text', 'Choose a plan' )
	} )
} )

describe( '<Select /> — opening, listing & selecting options', () => {
	it( 'opens on button click and lists all provided options', () => {
		mountWith()
		openList()

		cy.get( '.nfd-select__options' ).should( 'exist' )
		cy.get( '.nfd-select__option' ).should( 'have.length', OPTIONS.length )
		cy.contains( '.nfd-select__option', 'Beta' ).should( 'exist' )
	} )

	it( 'selects an option by click and calls onChange with its value', () => {
		mountWith()
		openList()
		cy.contains( '.nfd-select__option', 'Beta' ).click()
		cy.get( '@onChange' ).should( 'have.been.calledWith', 'b' )
	} )

	it( 'supports keyboard navigation (ArrowDown then Enter) to select the next option', () => {
		// Start from value "a", ArrowDown moves to "b", Enter selects "b"
		mountWith( { value: 'a' } )
		openList()
		cy.press( Cypress.Keyboard.Keys.DOWN )
		cy.press( Cypress.Keyboard.Keys.ENTER )
		cy.get( '@onChange' ).should( 'have.been.calledWith', 'b' )
	} )

	it( 'closes the list on Escape', () => {
		mountWith()
		openList()
		cy.get( '.nfd-select__button' ).type( '{esc}' )
		cy.get( '.nfd-select__options' ).should( 'not.exist' )
	} )
} )

describe( '<Select /> — selectedLabel override & fallback behavior', () => {
	it( 'overrides the displayed label with selectedLabel when provided', () => {
		mountWith( { value: 'b', selectedLabel: 'Custom Beta' } )
		cy.get( '.nfd-select__button-label' ).should( 'contain.text', 'Custom Beta' )
	} )

	it( 'when value does not match any option, falls back to first option label', () => {
		// value not in OPTIONS -> falls back to OPTIONS[0] ("Alpha")
		mountWith( { value: '__missing__' } )
		cy.get( '.nfd-select__button-label' ).should( 'contain.text', 'Alpha' )
	} )
} )

describe( '<Select /> — disabled & validation states', () => {
	it( 'disabled: adds class, button does not open list nor call onChange', () => {
		mountWith( { disabled: true } )
		cy.get( '.nfd-select' ).should( 'have.class', 'nfd-select--disabled' )

		cy.get( '.nfd-select__button' ).click( { force: true } )
		cy.get( '.nfd-select__options' ).should( 'not.exist' )
		cy.get( '@onChange' ).should( 'not.have.been.called' )
	} )

	it( 'validation message hides the selector icon', () => {
		mountWith( { validation: { variant: 'error', message: 'Invalid choice' } } )
		cy.get( '.nfd-select__button-icon' ).should( 'not.exist' )
	} )
} )

describe( '<Select /> — buttonProps passthrough', () => {
	it( 'applies buttonProps to the ListboxButton (via ValidationInput)', () => {
		mountWith( {
			buttonProps: {
				'aria-foo': 'bar',
				'data-foo': 'bar',
			},
		} )
		cy.get( '.nfd-select__button' )
			.should( 'have.attr', 'aria-foo', 'bar' )
			.and( 'have.attr', 'data-foo', 'bar' )
	} )
} )

describe( '<Select /> — children-based options', () => {
	it( 'renders and selects options supplied as children (<Select.Option/>)', () => {
		cy.mount(
			<Select
				id="childsel"
				value="x"
				onChange={cy.stub().as('onChange')}

			>
				<Select.Option value="x" label="X-Ray"/>
				<Select.Option value="y" label="Yankee"/>
			</Select>
		)

		// Initial label falls back: value="x" -> "X-Ray"
		cy.get( '.nfd-select__button-label' ).should( 'contain.text', 'X-Ray' )

		openList()
		cy.contains( '.nfd-select__option', 'Yankee' ).click()
		cy.get( '@onChange' ).should( 'have.been.calledWith', 'y' )
	} )
} )

describe( '<Select /> — StoryComponent parity', () => {
	it( 'StoryComponent mirrors defaults & behaviors', () => {
		cy.mount(
			<StoryComponent
				id="story"
				value="a"
				options={ OPTIONS }
				onChange={ cy.stub().as( 'onChange' ) }
			/>
		)

		cy.get( '.nfd-select__button-label' ).should( 'contain.text', 'Alpha' )
		openList()
		cy.contains( '.nfd-select__option', 'Gamma' ).click()
		cy.get( '@onChange' ).should( 'have.been.calledWith', 'g' )
	} )
} )
