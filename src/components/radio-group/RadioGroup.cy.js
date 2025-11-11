import RadioGroup from './index'

describe('RadioGroup', () => {
	const options = [
		{ value: 'basic', label: 'Basic', screenReaderLabel: 'Select Basic' },
		{ value: 'pro', label: 'Pro', screenReaderLabel: 'Select Pro' },
		{ value: 'enterprise', label: 'Enterprise', screenReaderLabel: 'Select Enterprise' },
	]

	it('renders label, description and options', () => {
		cy.mount(
			<RadioGroup
				id="plan"
				name="plan"
				value="pro"
				label="Choose a plan"
				description="Pick one option"
				options={options}
			/>
		)

		cy.get('fieldset#radio-group-plan').should('exist')
		cy.contains('legend.nfd-radio-group__label', 'Choose a plan').should('exist')
		cy.contains('.nfd-radio-group__description', 'Pick one option').should('exist')
		cy.get('.nfd-radio-group__options input[type="radio"]').should('have.length', 3)
		cy.get('input[type="radio"][name="plan"]').filter('[value="pro"]').should('be.checked')
		cy.get('input[type="radio"][name="plan"]').filter('[value="basic"]').should('not.be.checked')
	})

	it('calls onChange with selected value and reflects controlled re-render', () => {
		const onChange = cy.stub().as('onChange')

		cy.mount(
			<RadioGroup
				id="plan"
				name="plan"
				value="basic"
				label="Choose a plan"
				options={options}
				onChange={onChange}
			/>
		)

		cy.get('input[type="radio"][name="plan"][value="enterprise"]').click({ force: true })
		cy.get('@onChange').should('have.been.calledOnceWith', 'enterprise')

		cy.mount(
			<RadioGroup
				id="plan"
				name="plan"
				value="enterprise"
				label="Choose a plan"
				options={options}
				onChange={onChange}
			/>
		)
		cy.get('input[type="radio"][name="plan"][value="enterprise"]').should('be.checked')
	})

	it('applies disabled state to group and radios', () => {
		cy.mount(
			<RadioGroup
				id="plan"
				name="plan"
				value="basic"
				label="Choose a plan"
				options={options}
				disabled
			/>
		)

		cy.get('.nfd-radio-group').should('have.class', 'nfd-radio-group--disabled')
		cy.get('.nfd-radio-group__options input[type="radio"]').each($el => {
			expect($el).to.be.disabled
		})
	})

	it('renders inline-block variant classes and screen reader labels', () => {
		cy.mount(
			<RadioGroup
				id="plan"
				name="plan"
				value="pro"
				variant="inline-block"
				options={options}
			/>
		)

		cy.get('.nfd-radio-group').should('have.class', 'nfd-radio-group--inline-block')
		cy.get('.nfd-radio.nfd-radio--inline-block .nfd-radio__input').should('have.length', 3)
		cy.get('.nfd-radio__input[value="basic"]').should('have.attr', 'aria-label', 'Select Basic')
	})

	it('forwards extra props to each Radio input', () => {
		cy.mount(
			<RadioGroup
				id="extras"
				name="extras"
				value="pro"
				options={options}
				data-qa="rg"
				aria-describedby="help-text"
			/>
		)

		cy.get('input[type="radio"][name="extras"]').each($el => {
			expect($el).to.have.attr('data-qa', 'rg')
			expect($el).to.have.attr('aria-describedby', 'help-text')
		})
	})
})
