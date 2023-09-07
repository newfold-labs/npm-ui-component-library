import { Card, Code, Link, Title } from '@newfold/ui-component-library';
import { Logo, ViteLogo } from "@App/assets";

const Welcome = () => {
    return (
        <div className="nfd-flex nfd-flex-col nfd-items-center nfd-justify-center nfd-pt-[5.5%] nfd-w-[665px] nfd-my-0 nfd-mx-auto max-[782px]:nfd-w-[90%]">
            <Logo />

            <Card className="nfd-w-full nfd-mt-10 nfd-mb-5">
                <Card.Content>
                    <Title>Welcome to Newfold UI 👋</Title>
                    <p className="nfd-mt-3 nfd-text-base">
                        Open the <Code>src/app</Code> directory in your project
                        and start editing <Code>index.jsx</Code>.
                    </p>
                </Card.Content>
                <Card.Footer>
                    <div className="nfd-flex nfd-items-center nfd-gap-1.5">
                        <div className="[&>svg]:nfd-w-[18px] [&>svg]:nfd-h-auto">
                            <ViteLogo />
                        </div>
                        <p className="nfd-text-tiny">
                            This project is packaged with ViteJS. Read <Link href="https://vitejs.dev/guide/" target="_blank">ViteJS official API documentation</Link> to learn more.
                        </p>
                    </div>
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
