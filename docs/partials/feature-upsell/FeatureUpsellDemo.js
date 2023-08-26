import React from "react";
import { FeatureUpsell, ToggleField } from "@newfold/ui-component-library";

const FeatureUpsellDemo = ({
    variant,
    cardLink,
    cardText,
}) => {
    return (
        <FeatureUpsell
            variant={variant}
            cardLink={cardLink}
            cardText={cardText}
        >
            <ToggleField 
                id="feature-upsell-demo-toggle-field"
                label="CDN Cache"
                description="Content delivery networks (CDNs) using edge servers around 
                the world to store static website files for faster delivery to users who 
                are geographically distant from the host server."
                checked={false}
            />
        </FeatureUpsell>
    );
}

export default FeatureUpsellDemo;