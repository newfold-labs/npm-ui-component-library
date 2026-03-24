import Autocomplete from './index'

const Option = Autocomplete.Option

const mountWith = (props = {}, children = null) =>
	cy.mount(
		<Autocomplete
			id="city"
			value={null}
			label="Choose a city"
			onChange={cy.stub().as('onChange')}
			onQueryChange={cy.stub().as('onQueryChange')}
			placeholder="Search a city…"
			{...props}
		>
			{children}
		</Autocomplete>
	)

const CITIES = [
	{ value: 'nyc', label: 'New York' },
	{ value: 'ldn', label: 'London' },
	{ value: 'par', label: 'Paris' },
]

const renderCities = () =>
	CITIES.map(o => <Option key={o.value} value={o.value}>{o.label}</Option>)

const openList = () =>
	cy.get('.nfd-autocomplete__input').click()

describe('<Autocomplete /> — structure & accessibility', () => {
	it('renders base classes and merges custom className', () => {
		mountWith({ className: 'extra-class' }, renderCities())

		cy.get('.nfd-autocomplete-field')
			.should('exist')
			.and('have.class', 'extra-class')

		cy.get('.nfd-autocomplete__button').should('exist')
		cy.get('.nfd-autocomplete__input')
			.should('exist')
			.and('have.attr', 'placeholder', 'Search a city…')
	})

	it('renders a label (via ComboboxLabel) and optional labelSuffix', () => {
		mountWith({ label: 'Choose a city', labelSuffix: <span data-cy="suffix"> *</span> }, renderCities())
		cy.contains('Choose a city').should('exist')
		cy.get('[data-cy="suffix"]').should('contain.text', '*')
	})

	it('applies buttonProps to the clickable area (aria-describedby + custom attrs)', () => {
		mountWith({ buttonProps: { 'aria-describedby': 'desc-1', 'data-foo': 'bar' } }, renderCities())

		cy.get('.nfd-autocomplete__button')
			.should('have.attr', 'aria-describedby', 'desc-1')
			.and('have.attr', 'data-foo', 'bar')
	})

	it('shows the selector icon by default and hides it when validation.message exists', () => {
		// default: icon visible
		mountWith({}, renderCities())
		cy.get('.nfd-autocomplete__button-icon').should('exist')

		// with validation.message: icon hidden
		mountWith({ validation: { variant: 'error', message: 'Invalid city' } }, renderCities())
		cy.get('.nfd-autocomplete__button-icon').should('not.exist')
	})
})

describe('<Autocomplete /> — interactions & list behavior', () => {
	it('opens the options list on input click and renders options', () => {
		mountWith({}, renderCities())

		// Initially closed
		cy.get('.nfd-autocomplete__options').should('not.exist')

		openList()
		cy.get('.nfd-autocomplete__options').should('exist')
		cy.get('.nfd-autocomplete__option').should('have.length', 3)
		cy.contains('.nfd-autocomplete__option', 'London').should('exist')
	})

	it('fires onQueryChange when typing in the input', () => {
		mountWith({}, renderCities())
		openList()
		cy.get('.nfd-autocomplete__input').type('Lon')
		cy.get('@onQueryChange').should('have.been.called')
		cy.get('@onQueryChange').its('lastCall.args.0.target.value').should('eq', 'Lon')
	})

	it('supports keyboard navigation: ArrowDown marks an active option; Enter selects it', () => {
		mountWith({}, renderCities())
		openList()

		// Move to first option
		cy.get('.nfd-autocomplete__input').type('{downarrow}')
		cy.get('.nfd-autocomplete__option--active').should('have.length', 1)

		// Select active option
		cy.get('.nfd-autocomplete__input').type('{enter}')
		cy.get('@onChange').should('have.been.calledOnce')

		// The list usually closes after selection
		cy.get('.nfd-autocomplete__options').should('not.exist')
	})

	it('selects an option by clicking it and calls onChange with the value', () => {
		mountWith({}, renderCities())
		openList()
		cy.contains('.nfd-autocomplete__option', 'London').click({ force: true })
		cy.get('@onChange').should('have.been.calledWith', 'ldn')
	})

	it('shows selected state (check icon / selected class) when reopened after a selection', () => {
		// First select by clicking
		mountWith({}, renderCities())
		openList()
		cy.contains('.nfd-autocomplete__option', 'London').click({ force: true })
		cy.get('@onChange').should('have.been.calledWith', 'ldn')

		// Re-mount as a controlled selection to verify UI (selectedLabel is what gets displayed)
		cy.mount(
			<Autocomplete
				id="city"
				value="ldn"
				selectedLabel="London"
				onChange={cy.stub().as('onChange2')}
				onQueryChange={cy.stub().as('onQueryChange2')}
			>
				{renderCities()}
			</Autocomplete>
		)

		// Open and assert selected class on London
		openList()
		cy.contains('.nfd-autocomplete__option', 'London')
			.should('have.class', 'nfd-autocomplete__option--selected')
			.within(() => {
				cy.get('.nfd-autocomplete__option-check').should('exist')
			})
	})

	it('closes the list on Escape', () => {
		mountWith({}, renderCities())
		openList()
		cy.get('.nfd-autocomplete__input').type('{esc}')
		cy.get('.nfd-autocomplete__options').should('not.exist')
	})
})

describe('<Autocomplete /> — nullable & clear selection', () => {
	it('renders a clear button when nullable=true and a selection label is present, and clears on click', () => {
		// Controlled selection to show the clear button
		mountWith(
			{
				value: 'ldn',
				selectedLabel: 'London',
				nullable: true,
				clearButtonScreenReaderText: 'Clear selection',
			},
			renderCities()
		)

		// Clear button is visible (identified by the sr-only text)
		cy.contains('span.nfd-sr-only', 'Clear selection').should('exist')
		cy.contains('span.nfd-sr-only', 'Clear selection').parent('button').click()

		cy.get('@onChange').should('have.been.calledWith', null)
	})
})

describe('<Autocomplete /> — controlled display value', () => {
	it('displays selectedLabel in the input when value/selectedLabel are provided (controlled mode)', () => {
		mountWith({ value: 'par', selectedLabel: 'Paris' }, renderCities())

		// The displayed value resides in the input; assert value or text content
		cy.get('.nfd-autocomplete__input').should(($el) => {
			const el = $el[0]
			expect(el.value).to.contain('Paris')
		})
	})
})
