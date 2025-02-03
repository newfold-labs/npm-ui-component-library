import React from "react";
import { FeaturesSelect } from "@newfold/ui-component-library";

const FeaturesSelectLayoutDemo = ( { layout = "row" } ) => {
	if ( layout === "column" ) {
		return (
			<FeaturesSelect layout="column">
				<FeaturesSelect.Feature
					id="feature-1-layout-col"
					name="feature-group"
					value="1"
				>
					Feature 1
				</FeaturesSelect.Feature>

				<FeaturesSelect.Feature
					id="feature-2-layout-col"
					name="feature-group"
					value="2"
				>
					Feature 2
				</FeaturesSelect.Feature>

				<FeaturesSelect.Feature
					id="feature-3-layout-col"
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
				id="feature-1-layout-row"
				name="feature-group"
				value="1"
			>
				Feature 1
			</FeaturesSelect.Feature>

			<FeaturesSelect.Feature
				id="feature-2-layout-row"
				name="feature-group"
				value="2"
			>
				Feature 2
			</FeaturesSelect.Feature>

			<FeaturesSelect.Feature
				id="feature-3-layout-row"
				name="feature-group"
				value="3"
			>
				Feature 3
			</FeaturesSelect.Feature>
		</FeaturesSelect>
	);
};

export default FeaturesSelectLayoutDemo;
