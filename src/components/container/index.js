import { PropTypes } from "prop-types";
import classNames from "classnames";
import { forwardRef } from "@wordpress/element";
import Title from "../../elements/title";

/**
 * @param {string} as The element to render as.
 * @param {Object} children The children.
 * @param {string} className The className.
 * @param {string} title The title.
 * @param {string} description The description.
 * @returns {JSX.Element} The header.
 */
const Header = ( {
	as: Component = "div",
	children,
	className = "",
	title,
	description,
	...props
} ) => (
	<Component { ...props } className={ classNames( "nfd-container__header", className ) }>
		{ title && <Title as="h2" className="nfd-text-2xl nfd-font-medium nfd-text-title">{ title }</Title> }
		{ description && <p>{ description }</p> }
		{ children }
	</Component>
);

Header.propTypes = {
	as: PropTypes.element,
	children: PropTypes.node,
	className: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
};

/**
 * @param {string} as The element to render as.
 * @param {Object} children The children.
 * @param {string} className The className.
 * @param {string} id The id.
 * @param {boolean} separator Whether to show a separator.
 * @returns {JSX.Element} The block.
 */
const Block = ( {
	as: Component = "div",
	children,
	className = "",
	id = "",
	separator = false,
	...props
} ) => (
	<Component { ...props } id={ id } className={ classNames( "nfd-container__block", className ) }>
		<div className={ classNames( "nfd-pb-8", separator && "nfd-border-b nfd-border-[#CBD5E1]" ) }>
			{ children }
		</div>
	</Component>
);

Block.propTypes = {
	as: PropTypes.element,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	id: PropTypes.string,
	separator: PropTypes.bool,
};

/**
 * @param {string} as The element to render as.
 * @param {Object} children The children.
 * @param {string} className The className.
 * @param {string} description The description.
 * @param {string} title The title.
 * @returns {JSX.Element} The settings field.
*/
const SettingsField = ( {
	as: Component = "div",
	children,
	className = "",
	description = "",
	title,
	...props
} ) => (
	<Component { ...props } className={ classNames( "nfd-container__settings-field", className ) }>
		<div className="nfd-col-span-1">
			<div className="nfd-max-w-screen-sm">
				<Title as="h3" size="4">
					{ title }
				</Title>
				{ description && <div className="nfd-mt-2">{ description }</div> }
			</div>
		</div>

		<fieldset className="nfd-min-w-0 nfd-mt-8 xl:nfd-mt-0 xl:nfd-col-span-2">
			<legend className="nfd-sr-only">{ title }</legend>
			<div className="st-space-y-8">
				{ children }
			</div>
		</fieldset>
	</Component>
);

SettingsField.propTypes = {
	as: PropTypes.element,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	description: PropTypes.string,
	title: PropTypes.string,
};

/**
 * @param {string} as The element to render as.
 * @param {Object} children The children.
 * @param {string} className The className.
 * @returns {JSX.Element} The footer.
 */
const Footer = ( {
	as: Component = "div",
	children,
	className = "",
	...props
} ) => (
	<Component { ...props } className={ classNames( "nfd-container__footer", className ) }>
		{ children }
	</Component>
);

Footer.propTypes = {
	as: PropTypes.element,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

/**
 * @param {string} as The element to render as.
 * @param {Object} children The children.
 * @param {string} className The className.
 * @returns {JSX.Element} The container component.
 */
const Container = forwardRef( ( { as: Component = "div", children, className = "", ...props }, ref ) => (
	<Component { ...props } className={ classNames( "nfd-container", className ) } ref={ ref }>
		{ children }
	</Component>
) );

Container.propTypes = {
	as: PropTypes.element,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

Container.Header = Header;
Container.Block = Block;
Container.SettingsField = SettingsField;
Container.Footer = Footer;

export default Container;
