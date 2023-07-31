import { classNameMap, StoryComponent } from ".";
import { keys } from "lodash";

export default {
	title: "1) Elements/Spinner",
	component: StoryComponent,
	argTypes: {
		className: { control: "text" },
		variant: {
			control: "select",
			options: keys( classNameMap.variant ),
			table: {
				type: { summary: keys( classNameMap.variant ).join( "|" ) },
			},
		},
		size: {
			control: "select",
			options: keys( classNameMap.size ),
			table: { type: { summary: keys( classNameMap.size ).join( "|" ) } },
		},
	},
	args: {
		className: "",
	},
	parameters: {
		docs: {
			description: {
				component: "A simple spinner component.",
			},
		},
	},
};

export const Factory = ( args ) => (
	<div className={ args.variant ? "white" && "nfd-bg-black nfd-w-14 nfd-p-2" : "" }>
		<StoryComponent { ...args } />
	</div>
);

export const Variants = ( args ) => (
	<div className="nfd-flex nfd-gap-5">
		<StoryComponent variant="default" />
		<StoryComponent variant="primary" />
		<div className="nfd-bg-black nfd-p-2">
			<StoryComponent variant="white" />
		</div>
	</div>
);

export const Sizes = ( args ) => (
	<div className="nfd-flex nfd-gap-5">
		<StoryComponent size="3" />
		<StoryComponent size="4" />
		<StoryComponent size="8" />
	</div>
);
