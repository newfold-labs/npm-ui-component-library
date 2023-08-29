import React from 'react';
import { useState } from "@wordpress/element";
import { Notifications, RadioGroup } from "@newfold/ui-component-library";

const NotificationsDemo = () => {
    const [position, setPosition] = useState("bottom-left");

    return ( 
        <>
            <RadioGroup
                id="notifications-demo-radio-group"
                label="Position"
                value={position}
                onChange={(value) => setPosition(value)}
                options={[
                    { label: "Bottom Left", value: "bottom-left" },
                    { label: "Bottom Center", value: "bottom-center" },
                    { label: "Top Center", value: "top-center" },
                ]}
                variant="inline-block"
            />
            <Notifications position={position}>
                <Notifications.Notification
                    id="notifications-demo-item"
                    dismissScreenReaderLabel="Dismiss"
                    title="Notification title"
                    description="Notification description"
                    onDismiss={(id) => {console.log('Dismissed:', id)}}
                />
            </Notifications>
            <style>
                {`
                    .nfd-root .nfd-notifications--top-center,
                    .nfd-root .nfd-notifications--bottom-center { 
                        left: 2rem;
                        z-index: 200;
                    }

                    .nfd-root .nfd-radio--inline-block .nfd-radio__label {
                        font-size: 13px !important;
                        width: 8rem;
                        height: 3rem;
                    }
                `}
            </style>
        </>
     );
}
 
export default NotificationsDemo;
