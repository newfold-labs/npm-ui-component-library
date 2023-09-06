import { Card, Code, Title } from '@newfold/ui-component-library';
import { Logo } from "@App/assets";

const Welcome = () => {
    return (
        <div className="nfd-flex nfd-flex-col nfd-items-center nfd-justify-center
            nfd-pt-[5.5%] nfd-w-[665px] nfd-my-0 nfd-mx-auto max-[782px]:nfd-w-[90%]"
        >
            <Logo />

            <Card className="nfd-w-full nfd-mt-10 nfd-mb-5">
                <Card.Content>
                    <Title>Welcome to Newfold UI 👋</Title>
                    <p className="nfd-mt-3 nfd-text-base">
                        To get started, open the <Code>src/app</Code> directory in your project
                        and start editing <Code>index.js</Code>.
                    </p>
                </Card.Content>
                <Card.Footer>
                    <p className="nfd-text-tiny">
                        Tip: Use <Code>npm start</Code> to automatically rebuild your changes on save during development.
                    </p>
                </Card.Footer>
            </Card>

            <div className="nfd-grid nfd-grid-cols-2 nfd-gap-5 nfd-w-full max-[782px]:nfd-grid-cols-1">
                <a
                    href="https://newfold-labs.github.io/npm-ui-component-library/docs/intro"
                    target="_blank"
                    className="nfd-no-underline nfd-text-[inherit]"
                >
                    <Card>
                        <Title as="h2">Documentation <span className="nfd-text-base">→</span></Title>
                        <p className="nfd-mt-2 nfd-text-tiny">Explore the official API docs and learn how Newfold UI works.</p>
                    </Card>
                </a>
                <a
                    href="https://github.com/newfold-labs/npm-ui-component-library"
                    target="_blank"
                    className="nfd-no-underline nfd-text-[inherit]"
                >
                    <Card>
                        <Title as="h2">GitHub <span className="nfd-text-base">→</span></Title>
                        <p className="nfd-mt-2 nfd-text-tiny">Newfold UI is fully open-source. Visit our GitHub repo to view the source code.</p>
                    </Card>
                </a>
                <a
                    href="https://github.com/newfold-labs/npm-ui-component-library/issues"
                    target="_blank"
                    className="nfd-no-underline nfd-text-[inherit]"
                >
                    <Card>
                        <Title as="h2">Issues <span className="nfd-text-base">→</span></Title>
                        <p className="nfd-mt-2 nfd-text-tiny">Discover and report issues related to Newfold UI on the GitHub repo.</p>
                    </Card>
                </a>
                <a
                    href="http://localhost:3000/npm-ui-component-library/docs/contribute"
                    target="_blank"
                    className="nfd-no-underline nfd-text-[inherit]"
                >
                    <Card>
                        <Title as="h2">Contribute <span className="nfd-text-base">→</span></Title>
                        <p className="nfd-mt-2 nfd-text-tiny">Learn how to contributing to Newfold UI and help us improve the project.</p>
                    </Card>
                </a>
            </div>
        </div>
    );
}

export default Welcome;
