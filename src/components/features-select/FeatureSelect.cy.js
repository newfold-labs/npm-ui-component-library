import FeaturesSelect from './index'

const mountFeatureOnly = (props = {}, child = <div data-cy="card">Card</div>) =>
	cy.mount(<FeaturesSelect.Feature {...props}>{child}</FeaturesSelect.Feature>)

const mountWithProvider = (wrapperProps = {}, children) =>
	cy.mount(<FeaturesSelect {...wrapperProps}>{children}</FeaturesSelect>)

describe('<FeaturesSelect /> + Feature — base rendering', () => {
	it('renders a single Feature outside provider; defaults to checkbox and toggles via label', () => {
		mountFeatureOnly({
			id: 'f1',
			name: 'feat',
			value: 'a',
			screenReaderLabel: 'Select A',
			className: 'fx',
			'data-x': '1',
		})

		cy.get('.nfd-features-select__feature')
			.should('exist')
			.and('have.class', 'fx')
		cy.get('.nfd-features-select__feature-input')
			.and('have.attr', 'data-x', '1')

		cy.get('#f1.nfd-features-select__feature-input')
			.should('have.attr', 'type', 'checkbox')
			.and('have.attr', 'aria-label', 'Select A')
			.and('not.be.checked')

		cy.get('.nfd-features-select__feature-check').should('exist')
		cy.get('[data-cy="card"]').should('contain.text', 'Card')

		cy.get(`label[for="f1"]`).first().click()
		cy.get('#f1').should('be.checked')

		cy.get(`label[for="f1"]`).first().click()
		cy.get('#f1').should('not.be.checked')
	})

	it('respects type prop when used outside provider (radio)', () => {
		mountFeatureOnly({
			id: 'f2',
			name: 'group1',
			value: 'b',
			type: 'radio',
			screenReaderLabel: 'Pick B',
		})
		cy.get('#f2').should('have.attr', 'type', 'radio')
	})
})

describe('Label text & alignment', () => {
	it('renders bottom label with alignment classes (left/right/center)', () => {
		mountFeatureOnly({
			id: 'f3',
			name: 'feat',
			value: 'c',
			label: 'Pro feature',
			labelTextAlign: 'left',
			screenReaderLabel: 'Pick C',
		})
		cy.get('.nfd-features-select__feature-label')
			.should('contain.text', 'Pro feature')
			.and('have.class', 'nfd-text-left')
			.and('not.have.class', 'nfd-text-right')
			.and('not.have.class', 'nfd-text-center')

		mountFeatureOnly({
			id: 'f4',
			name: 'feat',
			value: 'd',
			label: 'Right label',
			labelTextAlign: 'right',
			screenReaderLabel: 'Pick D',
		})
		cy.get('.nfd-features-select__feature-label')
			.should('contain.text', 'Right label')
			.and('have.class', 'nfd-text-right')

		mountFeatureOnly({
			id: 'f5',
			name: 'feat',
			value: 'e',
			label: 'Center label',
			labelTextAlign: 'center',
			screenReaderLabel: 'Pick E',
		})
		cy.get('.nfd-features-select__feature-label')
			.should('contain.text', 'Center label')
			.and('have.class', 'nfd-text-center')
	})
})

describe('Disabled state', () => {
	it('adds disabled classes/attrs and prevents toggling via label', () => {
		mountFeatureOnly({
			id: 'f6',
			name: 'feat',
			value: 'f',
			disabled: true,
			label: 'Disabled',
			screenReaderLabel: 'Disabled feature',
		})

		cy.get('.nfd-features-select__feature').should('have.class', 'nfd-is-disabled')
		cy.get('#f6').should('be.disabled').and('not.be.checked')
		cy.get(`label[for="f6"]`).first().click()
		cy.get('#f6').should('not.be.checked')
	})
})

describe('Provider behavior — checkbox group', () => {
	it('behavior=checkbox allows multiple selection; wrapper merges className and attrs', () => {
		mountWithProvider(
			{ behavior: 'checkbox', className: 'wrapx', 'data-foo': 'bar' },
			<>
				<FeaturesSelect.Feature id="c1" name="set" value="1" label="One" screenReaderLabel="One">
					<span data-cy="one">One body</span>
				</FeaturesSelect.Feature>
				<FeaturesSelect.Feature id="c2" name="set" value="2" label="Two" screenReaderLabel="Two" />
			</>
		)

		cy.get('.nfd-features-select').should('have.class', 'wrapx').and('have.attr', 'data-foo', 'bar')

		cy.get('#c1').should('have.attr', 'type', 'checkbox')
		cy.get('#c2').should('have.attr', 'type', 'checkbox')

		cy.get(`label[for="c1"]`).first().click()
		cy.get('#c1').should('be.checked')

		cy.get(`label[for="c2"]`).first().click()
		cy.get('#c2').should('be.checked')
		cy.get('#c1').should('be.checked')
	})

	it('layout="column" adds vertical class', () => {
		mountWithProvider(
			{ behavior: 'checkbox', layout: 'column' },
			<FeaturesSelect.Feature id="cx" name="set" value="x" screenReaderLabel="X" />
		)
		cy.get('.nfd-features-select').should('have.class', 'nfd-flex-col')
	})
})

describe('Provider behavior — radio group', () => {
	it('forces radio type for all children and enforces single selection even if child sets type=checkbox', () => {
		mountWithProvider(
			{ behavior: 'radio' },
			<>
				<FeaturesSelect.Feature id="r1" name="grp" value="a" type="checkbox" label="A" screenReaderLabel="A" />
				<FeaturesSelect.Feature id="r2" name="grp" value="b" label="B" screenReaderLabel="B" />
				<FeaturesSelect.Feature id="r3" name="grp" value="c" label="C" screenReaderLabel="C" />
			</>
		)

		cy.get('#r1').should('have.attr', 'type', 'radio')
		cy.get('#r2').should('have.attr', 'type', 'radio')
		cy.get('#r3').should('have.attr', 'type', 'radio')

		cy.get(`label[for="r1"]`).first().click()
		cy.get('#r1').should('be.checked')
		cy.get('#r2').should('not.be.checked')
		cy.get('#r3').should('not.be.checked')

		cy.get(`label[for="r2"]`).first().click()
		cy.get('#r1').should('not.be.checked')
		cy.get('#r2').should('be.checked')
		cy.get('#r3').should('not.be.checked')
	})
})

describe('Passthrough props to input', () => {
	it('forwards arbitrary props to the input element', () => {
		mountFeatureOnly({
			id: 'p1',
			name: 'p',
			value: '1',
			screenReaderLabel: 'SR',
			'data-track': 'yes',
			tabIndex: '0',
		})

		cy.get('#p1')
			.should('have.attr', 'data-track', 'yes')
			.and('have.attr', 'tabindex', '0')
	})
})
