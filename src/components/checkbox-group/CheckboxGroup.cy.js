// src/CheckboxGroup.cy.jsx
import React from 'react'
import CheckboxGroup from './index'

const OPTIONS = [
	{ value: 'a', label: 'Option A' },
	{ value: 'b', label: 'Option B' },
	{ value: 'c', label: 'Option C' },
]

describe( '<CheckboxGroup />', () => {
	it( 'renders a fieldset with base classes, id and label', () => {
		cy.mount(
			<CheckboxGroup
				id="pets"
				name="pets"
				label="Pick your options"
				options={ OPTIONS }
				values={ [] }
				description="Choose any option"
			/>
		)

		cy.get( '#checkbox-group-pets' )
			.should( 'exist' )
			.and( 'have.class', 'nfd-checkbox-group' )

		cy.get( '.nfd-checkbox-group__label' )
			.should( 'have.prop', 'tagName', 'LEGEND' )
			.and( 'contain.text', 'Pick your options' )

		cy.contains( '.nfd-checkbox-group__description', 'Choose any option' ).should( 'exist' )
	} )

	it( 'renders options mapped from props with stable ids and correct name', () => {
		cy.mount(
			<CheckboxGroup
				id="pets"
				name="pets"
				label="Pick your pets"
				options={ OPTIONS }
				values={ [] }
			/>
		)

		// 3 checkboxes with ids checkbox-pets-0..2
		cy.get( '[id^="checkbox-pets-"]' ).should( 'have.length', 3 )

		cy.get( '#checkbox-pets-0' ).should( 'have.attr', 'name', 'pets' )
		cy.get( '#checkbox-pets-1' ).should( 'have.attr', 'name', 'pets' )
		cy.get( '#checkbox-pets-2' ).should( 'have.attr', 'name', 'pets' )

		// Option labels should be present in the options container
		cy.get( '.nfd-checkbox-group__options' ).should( 'contain.text', 'Option A' )
		cy.get( '.nfd-checkbox-group__options' ).should( 'contain.text', 'Option B' )
		cy.get( '.nfd-checkbox-group__options' ).should( 'contain.text', 'Option C' )
	} )

	it( 'marks options as checked based on the "values" prop', () => {
		cy.mount(
			<CheckboxGroup
				id="pets"
				name="pets"
				label="Pick your pets"
				options={ OPTIONS }
				values={ [ 'b' ] }
			/>
		)

		cy.get( '#checkbox-pets-0' ).should( 'not.be.checked' )
		cy.get( '#checkbox-pets-1' ).should( 'be.checked' )
		cy.get( '#checkbox-pets-2' ).should( 'not.be.checked' )
	} )

	it( 'calls onChange with added value when checking an unchecked option', () => {
		const onChange = cy.spy().as( 'onChange' )
		cy.mount(
			<CheckboxGroup
				id="pets"
				name="pets"
				label="Pick your pets"
				options={ OPTIONS }
				values={ [] }
				onChange={ onChange }
			/>
		)

		// check Option B
		cy.get( '#checkbox-pets-1' ).check( { force: true } )
		cy.get( '@onChange' ).should( 'have.been.calledOnce' )
		cy.get( '@onChange' ).should( 'have.been.calledWith', [ 'b' ] )
	} )

	it( 'calls onChange with removed value when unchecking a checked option', () => {
		const onChange = cy.spy().as( 'onChange' )
		cy.mount(
			<CheckboxGroup
				id="pets"
				name="pets"
				label="Pick your pets"
				options={ OPTIONS }
				values={ [ 'b', 'c' ] }
				onChange={ onChange }
			/>
		)

		// uncheck Option B
		cy.get( '#checkbox-pets-1' ).uncheck( { force: true } )
		cy.get( '@onChange' ).should( 'have.been.calledOnce' )
		cy.get( '@onChange' ).should( 'have.been.calledWith', [ 'c' ] )
	} )

	it( 'applies disabled state to group and to all options', () => {
		cy.mount(
			<CheckboxGroup
				id="pets"
				name="pets"
				label="Pick your pets"
				options={ OPTIONS }
				values={ [ 'a' ] }
				disabled
			/>
		)

		cy.get( '#checkbox-group-pets' ).should( 'have.class', 'nfd-checkbox-group--disabled' )
		cy.get( '[id^="checkbox-pets-"]' ).each( ( $el ) => {
			expect( $el ).to.have.prop( 'disabled', true )
		} )
	} )

	it( 'merges custom className with base class', () => {
		cy.mount(
			<CheckboxGroup
				id="pets"
				name="pets"
				label="Pick your pets"
				options={ OPTIONS }
				values={ [] }
				className="extra"
			/>
		)

		cy.get( '#checkbox-group-pets' )
			.should( 'have.class', 'nfd-checkbox-group' )
			.and( 'have.class', 'extra' )
	} )

	it( 'forwards arbitrary props to each generated Checkbox (e.g., data-*)', () => {
		cy.mount(
			<CheckboxGroup
				id="pets"
				name="pets"
				label="Pick your pets"
				options={ OPTIONS }
				values={ [] }
				data-foo="bar"
			/>
		)

		// Each generated checkbox receives spread props; assert on first one
		cy.get( '#checkbox-pets-0' ).should( 'have.attr', 'data-foo', 'bar' )
	} )

	it( 'renders children instead of mapping options when children are provided', () => {
		cy.mount(
			<CheckboxGroup id="custom" label="Custom">
				<div data-testid="custom-child">Custom content</div>
			</CheckboxGroup>
		)

		cy.get( '.nfd-checkbox-group__options' )
			.children()
			.should( 'have.length', 1 )
			.and( 'contain.text', 'Custom content' )

		// No auto-generated option ids should exist
		cy.get( '[id^="checkbox-custom-"]' ).should( 'have.length', 0 )
	} )
} )