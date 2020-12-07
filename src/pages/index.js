import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Digital Assets',
    imageUrl: 'img/digital-assets.png',
    description: (
      <>
        Digital assets (Metaverse Smart Token) on Metaverse blockchain are trust-free, traceable and immutable decentralized smart properties that can be freely registered, transferred, issued, deposited, used as collateral and burnt.
      </>
    ),
  },
  {
    title: 'Digital Identity',
    imageUrl: 'img/digital-identity.png',
    description: (
      <>
	Digital identities are self-sovereign identity ledgers on the Metaverse blockchain. Digital credit is created through interactions with assets and other identities.
      </>
    ),
  },
  {
    title: 'Decentralized Exchange',
    imageUrl: 'img/onchain-exchange.png',
    description: (
      <>
	Metaverse allows value to be exchanged freely and easily. Control of assets is returned to the user, preventing assets theft.
      </>
    ),
  },
  {
    title: 'WASM Runtime',
    imageUrl: 'img/onchain-exchange.png',
    description: (
      <>
	Next Generation WebAssembly Blockchain Runtime. Very nice.
      </>
    ),
  },
  {
    title: 'Hybrid Consensus',
    imageUrl: 'img/digital-assets.png',
    description: (
      <>
	PoW block creation protection with PoS finality. 
      </>
    ),
  },
  {
    title: 'Smart Contracts',
    imageUrl: 'img/digital-identity.png',
    description: (
      <>
	High performance WebAssembly Smart Contract engine with EVM compatibility layer. 
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div classname="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--justify">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src={useBaseUrl('/img/metaverse-logo.png')}></img>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              ENTER THE NEW REALITY
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
          <h1 className="text--center">The Future Of Finance Is Here</h1>
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
