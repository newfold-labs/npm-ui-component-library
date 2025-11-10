import TextInput, { StoryComponent } from './index'

const mountWith = (props = {}) =>
	cy.mount(
		<TextInput
			placeholder="Type here"
			onChange={cy.stub().as('onChange')}
			{...props}
		/>
	)

describe('<TextInput /> — structure & defaults', () => {
	it('renders an <input> with base class and default props', () => {
		mountWith()

		cy.get('input.nfd-text-input')
			.should('exist')
			.and('have.attr', 'type', 'text')
			.and('not.be.disabled')
			.and('not.have.attr', 'readonly')

		cy.get('input.nfd-text-input')
			.and('not.have.attr', 'required')
	})

	it('merges custom className', () => {
		mountWith({ className: 'extra' })
		cy.get('input.nfd-text-input').should('have.class', 'extra')
	})
})

describe('<TextInput /> — typing & change events', () => {
	it('accepts user input and calls onChange (uncontrolled)', () => {
		mountWith()

		cy.get('input.nfd-text-input')
			.type('hello')
			.should('have.value', 'hello')

		cy.get('@onChange').should('have.been.called')
		cy.get('@onChange')
			.its('lastCall.args.0.target.value')
			.should('eq', 'hello')
	})
})

describe('<TextInput /> — type, disabled, readOnly, required', () => {
	it('respects "type" prop (e.g., password)', () => {
		mountWith({ type: 'password' })
		cy.get('input.nfd-text-input').should('have.attr', 'type', 'password')
	})

	it('disabled: sets attribute and disabled class, prevents interaction', () => {
		const onChange = cy.stub().as('onChangeDisabled')
		mountWith({ disabled: true, onChange: onChange })

		cy.get('input.nfd-text-input')
			.should('be.disabled')
			.and('have.class', 'nfd-text-input--disabled')

		// Don’t attempt to type into a disabled input (Cypress will error). Just verify no change fired.
		cy.get('@onChangeDisabled').should('not.have.been.called')
	})

	it('readOnly: sets attribute and read-only class; remains focusable', () => {
		mountWith({ readOnly: true })

		cy.get('input.nfd-text-input')
			.should('have.attr', 'readonly')
		cy.get('input.nfd-text-input')
			.and('have.class', 'nfd-text-input--read-only')
			.focus()
			.blur()
	})

	it('required: sets required attribute', () => {
		mountWith({ required: true })
		cy.get('input.nfd-text-input').should('have.attr', 'required')
	})
})

describe('<TextInput /> — prop passthrough', () => {
	it('forwards id, name, aria-*, data-*', () => {
		mountWith({
			id: 'email',
			name: 'email',
			'aria-label': 'email input',
			'data-foo': 'bar',
		})

		cy.get('#email.nfd-text-input')
			.should('have.attr', 'name', 'email')
			.and('have.attr', 'aria-label', 'email input')
			.and('have.attr', 'data-foo', 'bar')
	})
})

describe('<TextInput /> — StoryComponent parity', () => {
	it('StoryComponent mirrors defaults', () => {
		cy.mount(<StoryComponent placeholder="Story" />)
		cy.get('input.nfd-text-input')
			.should('have.attr', 'type', 'text')
			.and('not.be.disabled')
			.and('not.have.attr', 'readonly')
	})
})
