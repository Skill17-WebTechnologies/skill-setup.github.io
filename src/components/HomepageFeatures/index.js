import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    icon: '🚀',
    title: 'Learn by Doing',
    description: (
      <>
        No boring lectures. Build real projects from day one — websites, apps,
        and APIs that you can actually show off in your portfolio.
      </>
    ),
  },
  {
    icon: '🌍',
    title: 'World-Class Standards',
    description: (
      <>
        Our curriculum follows WorldSkills international standards — the same
        benchmarks used in global web development competitions.
      </>
    ),
  },
  {
    icon: '💼',
    title: 'Career Ready',
    description: (
      <>
        Graduate with the skills employers want. From freelancing to agency work,
        you'll be prepared for real-world web development careers.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDesc}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
