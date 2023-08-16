import React from 'react';
import Link from '@docusaurus/Link';
import { Root as NewfoldRoot, ToggleField, Card, Title, Notifications, Button, Select, Link as NewfoldLink } from '@newfold/ui-component-library';
import './home-hero.css';

const HomeHero = () => {
    return (
        <section id="home-hero">
            <div className="container">
                <div id="home-hero-content">
                    <HomeHeroIntro />
                    <HomeHeroShowcase />
                </div>
            </div>
        </section>
    );
}

const HomeHeroIntro = () => {
    return (
        <div id="home-hero-intro" className="home-hero-col">
            <h1>Welcome to Newfold UI 👋</h1>
            <p>A React component library with effortless TailwindCSS integration and seamless WordPress admin pages compatibility. Building stunning user interfaces has never been easier.</p>

            <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Documentation - 10min ⏱️
            </Link>
        </div>
    );
}

const HomeHeroShowcase = () => {
    return (
        <div id="home-hero-showcase" className="home-hero-col">
            <NewfoldRoot>
                <div id="home-hero-showcase-content">
                    <HomeHeroShowcaseToggle />
                    <HomeHeroShowcaseCards />
                    <HomeHeroShowcaseSelect />
                </div>
            </NewfoldRoot>
        </div>
    );
}

const HomeHeroShowcaseToggle = () => {
    const [checked, setChecked] = React.useState(true);
    return (
        <div className="home-hero-showcase-component">
            <ToggleField
                id="togglefield-id"
                label="A Toggle Field"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
        </div>
    );
}

const HomeHeroShowcaseCards = () => {
    const [checked, setChecked] = React.useState(false);
    const AIRPLANEMODE_ON_ICON = require('@site/static/img/airplanemodeon-icon.svg').default;
    const AIRPLANEMODE_OFF_ICON = require('@site/static/img/airplanemodeoff-icon.svg').default;

    return (
        <div id="home-hero-showcase-cards">
            <div className="home-hero-showcase-component nfd-flex nfd-flex-col nfd-justify-between max-[525px]:nfd-gap-4" style={{ width: "50%", padding: "0", backgroundColor: "transparent" }}>
                <Card className="nfd-p-4">
                    <Card.Header>
                        {checked ?
                            <AIRPLANEMODE_ON_ICON className="home-hero-showcase-card-svg" role="img" /> :
                            <AIRPLANEMODE_OFF_ICON className="home-hero-showcase-card-svg" role="img" />
                        }
                    </Card.Header>
                    <Card.Content>
                        <Title as="h4" size="4" className="nfd-mb-2.5">Feature Card</Title>
                        <span>A simple card component. It has subcomponents for header, content and footer</span>
                    </Card.Content>
                    <Card.Footer>
                        <ToggleField
                            id="airplanemode-id"
                            label="Enable Feature"
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                        />
                    </Card.Footer>
                </Card>
                <div className="home-hero-showcase-component">
                    <Title as="h4" size="4" className="nfd-mb-3">Button</Title>
                    <Button className="nfd-mr-3">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                </div>
            </div>

            <div className="home-hero-showcase-component" style={{ width: "50%", padding: "0", backgroundColor: "transparent" }}>
                <Card className="nfd-p-4">
                    <Card.Content>
                        <Title as="h4" size="4" className="nfd-mb-4">Toast Notifications</Title>
                        <div className="nfd-flex nfd-flex-col nfd-gap-4">
                            <Notifications.Notification
                                description="Success message"
                                dismissScreenReaderLabel="Dismiss"
                                id="notification-success"
                                title="Success Notification"
                                variant="success"
                            />

                            <Notifications.Notification
                                description="Error message"
                                dismissScreenReaderLabel="Dismiss"
                                id="notification-error"
                                title="Error Notification"
                                variant="error"
                            />

                            <Notifications.Notification
                                description="Info message"
                                dismissScreenReaderLabel="Dismiss"
                                id="notification-info"
                                title="Info Notification"
                                variant="info"
                            />

                            <Notifications.Notification
                                description="Warning message"
                                dismissScreenReaderLabel="Dismiss"
                                id="notification-warn"
                                title="Warning Notification"
                                variant="warning"
                            />
                        </div>
                    </Card.Content>
                </Card>
            </div>
        </div>
    );
}

const HomeHeroShowcaseSelect = () => {
    const [selected, setSelected] = React.useState('3');

    return (
        <div id="home-hero-showcase-select">
            <div className="home-hero-showcase-component" style={{ overflow: "visible", width: "70%" }}>
                <Title as="h4" size="4" className="nfd-mb-3">Select Field</Title>
                <Select
                    id="select-field-4"
                    name="name-4"
                    options={[
                        {
                            label: 'Option 1',
                            value: '1'
                        },
                        {
                            label: 'Option 2',
                            value: '2'
                        },
                        {
                            label: 'Option 3',
                            value: '3'
                        },
                        {
                            label: 'Option 4',
                            value: '4'
                        }
                    ]}
                    value={selected}
                    onChange={(value) => setSelected(value)}
                />
            </div>

            <div className="home-hero-showcase-component" style={{ overflow: "visible", width: "30%" }}>
                <div className="nfd-flex nfd-flex-col nfd-justify-between">
                    <Title as="h4" size="2" className="nfd-mb-3">& 45+ Components</Title>
                    <NewfoldLink variant="default" className="nfd-text-base nfd-no-underline">
                        <Link
                            className="nfd-no-underline"
                            to="/docs/intro">
                            Learn More
                        </Link>
                    </NewfoldLink>
                </div>

            </div>
        </div>
    );
}

export default HomeHero;