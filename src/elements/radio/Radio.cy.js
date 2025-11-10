import Radio, { StoryComponent } from './index'

const mountRadio = (props = {}) =>
	cy.mount(
		<Radio
			id="plan-basic"
			name="plan"
			value="basic"
			label="Basic plan"
			{...props}
		/>
	)

describe('<Radio /> — structure & defaults', () => {
	it('renders wrapper, input[type=radio], label; default variant and not disabled', () => {
		mountRadio()

		cy.get('.nfd-radio')
			.should('exist')
			.and('not.have.class', 'nfd-radio--inline-block')
			.and('not.have.class', 'nfd-radio--disabled')

		cy.get('.nfd-radio__input')
			.should('have.attr', 'type', 'radio')
			.and('have.attr', 'id', 'plan-basic')
			.and('have.attr', 'name', 'plan')
			.and('have.attr', 'value', 'basic')
			.and('not.be.disabled')
			.and('not.be.checked')

		cy.get('.nfd-radio__label')
			.should('exist')
			.and('have.attr', 'for', 'plan-basic')
			.and('contain.text', 'Basic plan')
	})

	it('merges custom className on the wrapper', () => {
		mountRadio({ className: 'extra' })
		cy.get('.nfd-radio').should('have.class', 'extra')
	})
})

describe('<Radio /> — interactions', () => {
	it('checks by clicking the input and fires onChange', () => {
		const onChange = cy.stub().as('onChange')
		mountRadio({ onChange })

		cy.get('.nfd-radio__input').check().should('be.checked')
		cy.get('@onChange').should('have.been.called')
	})

	it('checks by clicking the label (htmlFor linkage)', () => {
		mountRadio()
		cy.get('.nfd-radio__label').click()
		cy.get('.nfd-radio__input').should('be.checked')
	})

	it('radio group: only one with the same name can be checked', () => {
		cy.mount(
			<>
				<Radio id="r1" name="grp" value="one" label="One" />
				<Radio id="r2" name="grp" value="two" label="Two" />
			</>
		)

		cy.get('#r1').check().should('be.checked')
		cy.get('#r2').should('not.be.checked')

		cy.get('#r2').check().should('be.checked')
		cy.get('#r1').should('not.be.checked')
	})
})

describe('<Radio /> — disabled state', () => {
	it('adds disabled class/attribute and prevents interaction', () => {
		const onChange = cy.stub().as('onChange')
		mountRadio({ disabled: true, onChange })

		cy.get('.nfd-radio')
			.should('have.class', 'nfd-radio--disabled')

		cy.get('.nfd-radio__input')
			.should('be.disabled')
			.and('not.be.checked')

		// Clicking the label should not toggle a disabled input
		cy.get('.nfd-radio__label').click()
		cy.get('.nfd-radio__input').should('not.be.checked')
		cy.get('@onChange').should('not.have.been.called')
	})
})

describe('<Radio /> — inline-block variant', () => {
	it('renders inline-block specific classes/structure, includes check icon, and supports screenReaderLabel', () => {
		cy.mount(
			<Radio
				id="ib"
				name="grp2"
				value="v"
				label="Inline"
				variant="inline-block"
				screenReaderLabel="Select inline option"
			/>
		)

		cy.get('.nfd-radio')
			.should('have.class', 'nfd-radio--inline-block')

		cy.get('#ib.nfd-radio__input')
			.should('have.attr', 'type', 'radio')
			.and('have.attr', 'aria-label', 'Select inline option')

		cy.get('.nfd-radio__content').should('exist')
		cy.get('.nfd-radio__check').should('exist')

		// Label still toggles
		cy.get('.nfd-radio__label').click()
		cy.get('#ib').should('be.checked')
	})

	it('inline-block variant still honors disabled state', () => {
		cy.mount(
			<Radio
				id="ib2"
				name="grp3"
				value="v2"
				label="Inline disabled"
				variant="inline-block"
				disabled
			/>
		)

		cy.get('.nfd-radio').should('have.class', 'nfd-radio--disabled')
		cy.get('#ib2').should('be.disabled')
		cy.get('.nfd-radio__label').click()
		cy.get('#ib2').should('not.be.checked')
	})
})

describe('<Radio /> — dangerous HTML label', () => {
	it('renders label using dangerouslySetInnerHTML when isLabelDangerousHtml=true', () => {
		cy.mount(
			<Radio
				id="danger"
				name="grp4"
				value="x"
				label={'Choose <strong data-cy="hl">this</strong>'}
				isLabelDangerousHtml
			/>
		)

		// The bold element should be in the label’s DOM
		cy.get('.nfd-radio__label').find('[data-cy="hl"]').should('contain.text', 'this')
	})
})

describe('<Radio /> — prop passthrough', () => {
	it('forwards arbitrary props to the input (aria-*, data-*)', () => {
		mountRadio({ 'aria-describedby': 'hint', 'data-foo': 'bar' })
		cy.get('.nfd-radio__input')
			.should('have.attr', 'aria-describedby', 'hint')
			.and('have.attr', 'data-foo', 'bar')
	})
})

describe('<Radio /> — StoryComponent parity', () => {
	it('StoryComponent mirrors Radio defaults', () => {
		cy.mount(
			<StoryComponent id="story" name="grp5" value="s" label="Story radio" />
		)

		cy.get('.nfd-radio').should('exist')
		cy.get('#story.nfd-radio__input')
			.should('have.attr', 'type', 'radio')
			.and('not.be.disabled')
		cy.get('.nfd-radio__label')
			.should('have.attr', 'for', 'story')
			.and('contain.text', 'Story radio')
	})
})
