import FeatureUpsell from ".";

export default {
	title: "2) Components/Feature upsell",
	component: FeatureUpsell,
	parameters: {
		docs: {
			description: {
				component: "A feature upsell component.",
			},
		},
	},
	argTypes: {
		children: { control: "text" },
	},
	args: {
		children: <p className="nfd-p-2 nfd-bg-blue-700 nfd-text-white">Content that will be grayscale.</p>,
	},
};

const Template = args => <FeatureUpsell { ...args } />;

export const Factory = Template.bind( {} );
Factory.parameters = {
	controls: { disable: false },
};

export const Card = Template.bind( {} );
Card.args = {
	variant: "card",
	cardLink: "#",
	cardText: "Upgrade",
};
Card.parameters = {
	docs: {
		description: {
			story: "When using the `card` variant. You should provide a `cardLink` and a `cardText`.",
		},
	},
};
