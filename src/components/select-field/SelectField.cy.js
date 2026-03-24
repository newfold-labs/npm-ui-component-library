import SelectField from './index'

const baseOptions = [
	{ value: 'rm', label: 'Rome' },
	{ value: 'mi', label: 'Milan' },
	{ value: 'ct', label: 'Catania' },
]

describe('SelectField', () => {
	const mountWith = (overrideProps = {}) => {
		const onChange = cy.stub().as('onChange')
		const props = {
			id: 'city',
			name: 'city',
			label: 'City',
			options: baseOptions,
			value: 'rm',
			onChange,
			...overrideProps,
		}
		cy.mount(<SelectField {...props} />)
		return { onChange }
	}

	it('renders label, description and validation message', () => {
		mountWith({
			description: 'Pick your city',
			validation: { variant: 'error', message: 'Required' },
			className: 'extra',
		})

		cy.get('.nfd-select-field').should('exist').and('have.class', 'extra')
		cy.get('.nfd-select-field__label').should('contain.text', 'City')

		cy.get('.nfd-select-field__validation').should('contain.text', 'Required')
		cy.get('.nfd-select-field__description').should('contain.text', 'Pick your city')
	})

	it('opens the list and selects an option via click', () => {
		const { onChange } = mountWith()

		cy.get('.nfd-select__button').click()
		cy.get('.nfd-select__options').should('be.visible')
		cy.contains('.nfd-select__option-label', 'Milan').click()
		cy.get('@onChange').should('have.been.calledOnceWith', 'mi')
	})

	it('respects disabled state and does not open', () => {
		mountWith({ disabled: true })

		cy.get('.nfd-select').should('have.class', 'nfd-select--disabled')
		cy.get('.nfd-select__button').click({ force: true })
		cy.get('.nfd-select__options').should('not.exist')
	})

	it('supports custom Option children with selectedLabel', () => {
		const onChange = cy.stub().as('onChange')

		cy.mount(
			<SelectField
				id="flavor"
				name="flavor"
				label="Flavor"
				value="a"
				selectedLabel="Alpha"
				onChange={onChange}
			>
				<SelectField.Option value="a" label="Alpha" />
				<SelectField.Option value="b" label="Beta" />
			</SelectField>
		)

		cy.get('.nfd-select__button-label').should('have.text', 'Alpha')
		cy.get('.nfd-select__button').click()
		cy.contains('.nfd-select__option-label', 'Beta').click()
		cy.get('@onChange').should('have.been.calledOnceWith', 'b')
	})

	it('renders without options when children are provided (no crash)', () => {
		cy.mount(
			<SelectField
				id="nums"
				name="nums"
				label="Numbers"
				value={1}
				selectedLabel="One"
				onChange={cy.stub()}
			>
				<SelectField.Option value={1} label="One" />
				<SelectField.Option value={2} label="Two" />
			</SelectField>
		)

		cy.get('.nfd-select__button-label').should('have.text', 'One')
	})
})
