import React from "react";
import { FeaturesSelect } from "@newfold/ui-component-library";

const FeaturesSelectUsageDemo = () => {
	return (
		<FeaturesSelect>
			<FeaturesSelect.Feature
				id="feature-1"
				name="feature-group"
				value="1"
			>
				Feature 1
			</FeaturesSelect.Feature>

			<FeaturesSelect.Feature
				id="feature-2"
				name="feature-group"
				value="2"
			>
				Feature 2
			</FeaturesSelect.Feature>

			<FeaturesSelect.Feature
				id="feature-3"
				name="feature-group"
				value="3"
			>
				Feature 3
			</FeaturesSelect.Feature>
		</FeaturesSelect>
	);
};

export default FeaturesSelectUsageDemo;
