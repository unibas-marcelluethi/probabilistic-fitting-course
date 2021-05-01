import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Week 1: Analysis by synthesis',
    to: 'week1/week1',
    imageUrl: 'img/cogs-solid.svg',
    description: (
      <>
        Where we discuss the analysis by synthesis 
        paradigm to shape and image analysis and given 
        an introduction to Bayesian inference.        
        
      </>
    ),
  },
  {
    title: 'Week 2: Basics of Markov Chain Monte Carlo',
    to: 'week2/week2',
    imageUrl: 'img/toolbox-solid.svg',
    description: (
      <>
        Where we introduce the Metropolis Hastings algorithm, 
        and use it in Scalismo to do Bayesian regression on 
        our hand dataset.
      </>
    ),
  },
  {
    title: 'Week 3: Shape model fitting with MCMC',
    to: 'week3/week3',
    imageUrl: 'img/bone-solid.svg',
    description: (
      <>
      Where we show how MCMC enable us to obtain fully probabilistic
      solutions to shape model fitting problems.
      </>
    ),
  },
  {
    title: 'Week 4: Designing effective proposals',
    to: 'week4/week4',
    imageUrl: 'img/rocket-solid.svg',
    description: (
      <>
      Where we discuss how to speed up our samples using 
      targeted proposal distributions. 

      </>
    ),
  }
];

function Feature({imageUrl,to, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--3', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img width="50%" className={styles.featureImage} src={imgUrl} alt={title} />
          
        </div>
      )}
      <h3><a href={`${to}`}>{title}</a></h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Probabilistic fitting  ${siteConfig.title}`}
      description="Online course on probabilistic">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
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
