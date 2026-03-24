import PriceField from './index'

describe( 'PriceField', () => {
	const baseFormat = { decimals: 2, decimalSeparator: ',', thousandSeparator: '.' }

	it( 'renders label, input, and wires aria-describedby to validation and description', () => {
		cy.mount(
			<PriceField
				id="price"
				label="Price"
				value=""
				onChange={ () => {
				} }
				description="Helper description"
				validation={ { variant: 'error', message: 'Required field' } }
			/>
		)

		cy.get( '.nfd-price-field__validation' )
			.should( 'exist' )
			.invoke( 'attr', 'id' )
			.as( 'valId' )

		cy.get( '.nfd-price-field__description' )
			.should( 'exist' )
			.invoke( 'attr', 'id' )
			.as( 'descId' )

		cy.get( '@valId' ).then( ( vid ) => {
			cy.get( '@descId' ).then( ( did ) => {
				cy.get( 'input#price' )
					.should( 'have.attr', 'aria-describedby' )
					.then( ( attr ) => {
						expect( attr ).to.include( vid )
						expect( attr ).to.include( did )
					} )
			} )
		} )
	} )

	it( 'formats while typing and calls onChange', () => {
		const onChange = cy.stub().as( 'onChange' )

		cy.mount(
			<PriceField
				id="price"
				label="Price"
				value=""
				format={ baseFormat }
				onChange={ onChange }
			/>
		)

		cy.get( 'input#price' ).type( '1234567,89' )
		cy.get( 'input#price' ).should( 'have.value', '1.234.567,89' )
		cy.get( '@onChange' ).should( 'have.been.called' )
	} )

	it( 'disabled state prevents editing and adds classes', () => {
		cy.mount(
			<PriceField
				id="price"
				label="Price"
				value="1"
				disabled
				onChange={ () => {
				} }
			/>
		)

		cy.get( '.nfd-price-field' ).should( 'have.class', 'nfd-price-field--disabled' )
		cy.get( 'input#price' ).should( 'be.disabled' )

		cy.get( 'input#price' ).type( '9', { force: true } )
		cy.get( 'input#price' ).should( 'have.value', '1' )
	} )

	it( 'readOnly state prevents editing and adds classes', () => {
		cy.mount(
			<PriceField
				id="price"
				label="Price"
				value="2"
				readOnly
				onChange={ () => {
				} }
			/>
		)

		cy.get( '.nfd-price-field' ).should( 'have.class', 'nfd-price-field--read-only' )
		cy.get( 'input#price' ).should( 'have.attr', 'readonly' )

		cy.get( 'input#price' ).type( '5', { force: true } )
		cy.get( 'input#price' ).should( 'have.value', '2' )
	} )

	it( 'shows the icon when provided and adds input-with-icon class', () => {
		const DummyIcon = ( props ) => <svg data-cy="dummy-icon" { ...props } />

		cy.mount(
			<PriceField
				id="price"
				label="Price"
				value=""
				icon={ DummyIcon }
				onChange={ () => {
				} }
			/>
		)

		cy.get( '.nfd-text-input__icon' ).should( 'exist' )
		cy.get( '.nfd-price-field__input' ).should( 'have.class', 'nfd-price-field--input-with-icon' )
	} )

	it( 'updates formatted value when external value prop changes (without useState)', () => {
		const onChange = cy.stub().as( 'onChange' )

		const commonProps = {
			id: 'price',
			label: 'Price',
			onChange,
			format: { decimals: 0, decimalSeparator: ',', thousandSeparator: '.' },
		}

		// Initial mount with value = "1000"
		cy.mount( <PriceField { ...commonProps } value="1000"/> )
		cy.get( 'input#price' ).should( 'have.value', '1.000' )

		// Re-mount with a different value to simulate a parent prop change
		cy.mount( <PriceField { ...commonProps } value="2000"/> )
		cy.get( 'input#price' ).should( 'have.value', '2.000' )
	} )

	it( 'respects the maximum configured decimals', () => {
		cy.mount(
			<PriceField
				id="price"
				label="Price"
				value=""
				format={ { decimals: 3, decimalSeparator: ',', thousandSeparator: '.' } }
				onChange={ () => {
				} }
			/>
		)

		cy.get( 'input#price' ).type( '12,34567' )
		cy.get( 'input#price' ).should( 'have.value', '12,345' )
	} )

	it( 'sanitizes noisy input keeping digits and decimal separator only', () => {
		cy.mount(
			<PriceField
				id="price"
				label="Price"
				value=""
				format={ baseFormat }
				onChange={ () => {
				} }
			/>
		)

		cy.get( 'input#price' ).type( 'abc1x2y3z,4w5' )
		cy.get( 'input#price' ).should( 'have.value', '123,45' )
	} )
} )
