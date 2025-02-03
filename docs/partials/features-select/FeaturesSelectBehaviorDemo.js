import React from "react";
import { FeaturesSelect } from "@newfold/ui-component-library";

const FeaturesSelectBehaviorDemo = ( { behavior = "checkbox" } ) => {
	if ( behavior === "radio" ) {
		return (
			<FeaturesSelect behavior="radio">
				<FeaturesSelect.Feature
					id="feature-1-behavior-r"
					name="feature-group"
					value="1"
				>
					Feature 1
				</FeaturesSelect.Feature>

				<FeaturesSelect.Feature
					id="feature-2-behavior-r"
					name="feature-group"
					value="2"
				>
					Feature 2
				</FeaturesSelect.Feature>

				<FeaturesSelect.Feature
					id="feature-3-behavior-r"
					name="feature-group"
					value="3"
				>
					Feature 3
				</FeaturesSelect.Feature>
		</FeaturesSelect>
		);
	};

	return (
		<FeaturesSelect>
			<FeaturesSelect.Feature
				id="feature-1-behavior-cb"
				name="feature-group"
				value="1"
			>
				Feature 1
			</FeaturesSelect.Feature>

			<FeaturesSelect.Feature
				id="feature-2-behavior-cb"
				name="feature-group"
				value="2"
			>
				Feature 2
			</FeaturesSelect.Feature>

			<FeaturesSelect.Feature
				id="feature-3-behavior-cb"
				name="feature-group"
				value="3"
			>
				Feature 3
			</FeaturesSelect.Feature>
		</FeaturesSelect>
	);
};

export default FeaturesSelectBehaviorDemo;
