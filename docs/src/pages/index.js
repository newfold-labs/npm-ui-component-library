import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomeHero from '@site/src/components/HomeHero';
import HomeFeatures from '@site/src/components/HomeFeatures';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description={siteConfig.tagline}>
        <HomeHero />
      <main>
        <HomeFeatures />
      </main>
    </Layout>
  );
}
