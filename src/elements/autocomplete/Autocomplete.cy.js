import Autocomplete from './index'

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
	CITIES.map(o => (
		<Autocomplete.Option key={o.value} value={o.value}>
			{o.label}
		</Autocomplete.Option>
	))

const openList = () => cy.get('.nfd-autocomplete__input').click()

describe('<Autocomplete /> — structure & props', () => {
	it('renders base class and merges custom className', () => {
		mountWith({ className: 'extra-class' }, renderCities())
		cy.get('.nfd-autocomplete')
			.should('exist')
			.and('have.class', 'extra-class')
		cy.get('.nfd-autocomplete__button').should('exist')
		cy.get('.nfd-autocomplete__input')
			.should('exist')
			.and('have.attr', 'placeholder', 'Search a city…')
	})

	it('renders label and optional labelSuffix', () => {
		mountWith({ label: 'Choose a city', labelSuffix: <span data-cy="suffix"> *</span> }, renderCities())
		cy.contains('Choose a city').should('exist')
		cy.get('[data-cy="suffix"]').should('contain.text', '*')
	})

	it('applies buttonProps to the clickable area (aria-describedby & data-*)', () => {
		mountWith({ buttonProps: { 'aria-describedby': 'desc-1', 'data-foo': 'bar' } }, renderCities())
		cy.get('.nfd-autocomplete__button')
			.should('have.attr', 'aria-describedby', 'desc-1')
			.and('have.attr', 'data-foo', 'bar')
	})

	it('shows selector icon by default and hides it when validation.message is present', () => {
		mountWith({}, renderCities())
		cy.get('.nfd-autocomplete__button-icon').should('exist')

		mountWith({ validation: { variant: 'error', message: 'Invalid city' } }, renderCities())
		cy.get('.nfd-autocomplete__button-icon').should('not.exist')
	})
})

describe('<Autocomplete /> — interactions & selection', () => {
	it('opens the options list on input click and renders options', () => {
		mountWith({}, renderCities())
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

	it('supports keyboard navigation: ArrowDown sets an active option; Enter selects it', () => {
		mountWith({}, renderCities())
		openList()
		cy.get('.nfd-autocomplete__input').type('{downarrow}')
		cy.get('.nfd-autocomplete__option--active').should('have.length', 1)
		cy.get('.nfd-autocomplete__input').type('{enter}')
		cy.get('@onChange').should('have.been.calledOnce')
		cy.get('.nfd-autocomplete__options').should('not.exist') // closes after selection
	})

	it('selects an option by clicking it and calls onChange with the value', () => {
		mountWith({}, renderCities())
		openList()
		cy.contains('.nfd-autocomplete__option', 'London').click({ force: true })
		cy.get('@onChange').should('have.been.calledWith', 'ldn')
	})

	it('reopening shows the selected state (selected class + check icon)', () => {
		// First: select
		mountWith({}, renderCities())
		openList()
		cy.contains('.nfd-autocomplete__option', 'London').click({ force: true })
		cy.get('@onChange').should('have.been.calledWith', 'ldn')

		// Controlled re-mount to verify UI state
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

describe('<Autocomplete /> — nullable / clear selection', () => {
	it('renders clear button when nullable=true and selectedLabel is present; clears to null on click', () => {
		mountWith(
			{ value: 'ldn', selectedLabel: 'London', nullable: true, clearButtonScreenReaderText: 'Clear selection' },
			renderCities()
		)
		cy.contains('span.nfd-sr-only', 'Clear selection').should('exist')
		cy.contains('span.nfd-sr-only', 'Clear selection').parent('button').click()
		cy.get('@onChange').should('have.been.calledWith', null)
	})

	it('does not render clear button when there is no selectedLabel', () => {
		mountWith({ value: null, nullable: true, clearButtonScreenReaderText: 'Clear selection' }, renderCities())

		cy.get('.nfd-autocomplete')
			.find('button .nfd-sr-only')
			.should('not.exist')
	})

})

describe('<Autocomplete /> — controlled display value', () => {
	it('displays selectedLabel inside the input when value/selectedLabel are provided', () => {
		mountWith({ value: 'par', selectedLabel: 'Paris' }, renderCities())
		cy.get('.nfd-autocomplete__input').should(($el) => {
			expect($el[0].value).to.contain('Paris')
		})
	})
})

describe('<Autocomplete /> — prop passthrough', () => {
	it('forwards arbitrary attributes to the root and button elements', () => {
		mountWith(
			{
				className: 'testing',
				buttonProps: { 'data-foo': 'bar', 'aria-describedby': 'desc-x' },
			},
			renderCities()
		)
		cy.get('.nfd-autocomplete').should('have.class', 'testing')
		cy.get('.nfd-autocomplete__button')
			.should('have.attr', 'data-foo', 'bar')
			.and('have.attr', 'aria-describedby', 'desc-x')
	})
})
