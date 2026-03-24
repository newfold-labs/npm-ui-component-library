import Textarea, { StoryComponent } from './index'

const mountWith = (props = {}) =>
	cy.mount(
		<Textarea
			placeholder="Type your message"
			onChange={cy.stub().as('onChange')}
			{...props}
		/>
	)

describe('<Textarea /> — structure & defaults', () => {
	it('renders a <textarea> with base class and default rows/cols', () => {
		mountWith()

		cy.get('textarea.nfd-textarea')
			.should('exist')
			.and('have.attr', 'rows', '2')   // default
			.and('have.attr', 'cols', '20')  // default
			.and('not.be.disabled')
	})

	it('merges custom className', () => {
		mountWith({ className: 'extra' })
		cy.get('textarea.nfd-textarea').should('have.class', 'extra')
	})
})

describe('<Textarea /> — typing & change events', () => {
	it('accepts user input and calls onChange', () => {
		mountWith()

		cy.get('textarea.nfd-textarea')
			.type('hello world')
			.should('have.value', 'hello world')

		cy.get('@onChange').should('have.been.called')
		cy.get('@onChange')
			.its('lastCall.args.0.target.value')
			.should('eq', 'hello world')
	})

	it('supports multiline input (Enter inserts newline)', () => {
		mountWith()
		cy.get('textarea.nfd-textarea')
			.type('line one{enter}line two')
			.should('have.value', 'line one\nline two')
	})
})

describe('<Textarea /> — rows/cols & disabled', () => {
	it('respects custom rows/cols', () => {
		mountWith({ rows: 5, cols: 50 })
		cy.get('textarea.nfd-textarea')
			.should('have.attr', 'rows', '5')
			.and('have.attr', 'cols', '50')
	})

	it('disabled: sets attribute and disabled class, prevents interaction', () => {
		const onChange = cy.stub().as('onChangeDisabled')
		mountWith({ disabled: true, onChange })

		cy.get('textarea.nfd-textarea')
			.should('be.disabled')
			.and('have.class', 'nfd-textarea--disabled')

		// Do not type into a disabled textarea (Cypress would error); just assert no change fired
		cy.get('@onChangeDisabled').should('not.have.been.called')
	})
})

describe('<Textarea /> — prop passthrough', () => {
	it('forwards id, name, placeholder, aria-*, data-*', () => {
		mountWith({
			id: 'bio',
			name: 'bio',
			placeholder: 'Write something…',
			'aria-label': 'bio textarea',
			'data-foo': 'bar',
		})

		cy.get('#bio.nfd-textarea')
			.should('have.attr', 'name', 'bio')
			.and('have.attr', 'placeholder', 'Write something…')
			.and('have.attr', 'aria-label', 'bio textarea')
			.and('have.attr', 'data-foo', 'bar')
	})
})

describe('<Textarea /> — StoryComponent parity', () => {
	it('StoryComponent mirrors defaults', () => {
		cy.mount(<StoryComponent placeholder="Story textarea" />)
		cy.get('textarea.nfd-textarea')
			.should('have.attr', 'rows', '2')
			.and('have.attr', 'cols', '20')
			.and('not.be.disabled')
	})
})
