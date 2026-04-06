import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const competencies = [
  {
    icon: '🎨',
    title: 'Design Implementation',
    percent: '25%',
    description: 'Visual design, responsive layouts, accessibility, UX prototyping, and SEO optimization.',
  },
  {
    icon: '💻',
    title: 'Front-End Development',
    percent: '25%',
    description: 'JavaScript mastery, modern frameworks, interactive features, testing, and deployment.',
  },
  {
    icon: '⚙️',
    title: 'Back-End Development',
    percent: '40%',
    description: 'Server-side programming, database design, API integration, security, and architecture.',
  },
  {
    icon: '🤝',
    title: 'Professional Skills',
    percent: '10%',
    description: 'Project management, version control, communication, and problem solving.',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          Become a Web Developer
        </Heading>
        <p className={styles.heroSubtitle}>
          Master modern web technologies through hands-on learning based on
          international WorldSkills standards. From design to deployment.
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.heroButtonPrimary, styles.heroButton)}
            to="/docs/intro">
            Start Learning
          </Link>
          <Link
            className={clsx('button button--lg', styles.heroButton)}
            to="/docs/intro">
            View Curriculum
          </Link>
        </div>
      </div>
    </header>
  );
}

function StatsBar() {
  return (
    <div className={styles.statsBar}>
      <div className={styles.statItem}>
        <div className={styles.statNumber}>4</div>
        <div className={styles.statLabel}>Core Areas</div>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statNumber}>17+</div>
        <div className={styles.statLabel}>Skill Modules</div>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statNumber}>100%</div>
        <div className={styles.statLabel}>Hands-On</div>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statNumber}>WorldSkills</div>
        <div className={styles.statLabel}>Standard</div>
      </div>
    </div>
  );
}

function CompetencySection() {
  return (
    <section className={styles.competencySection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          What You'll Learn
        </Heading>
        <p className={styles.sectionSubtitle}>
          A comprehensive curriculum covering every aspect of modern web development.
        </p>
        <div className={styles.competencyGrid}>
          {competencies.map((comp, idx) => (
            <div key={idx} className={styles.competencyCard}>
              <div className={styles.competencyIcon}>{comp.icon}</div>
              <div className={styles.competencyTitle}>{comp.title}</div>
              <div className={styles.competencyPercent}>{comp.percent} of curriculum</div>
              <p className={styles.competencyDesc}>{comp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <Heading as="h2" className={styles.ctaTitle}>
        Ready to Build the Web?
      </Heading>
      <p className={styles.ctaText}>
        Join Skill17 and start your journey toward becoming a professional web developer.
      </p>
      <Link
        className={clsx('button button--lg', styles.heroButtonPrimary, styles.heroButton)}
        to="/docs/intro">
        Get Started Now
      </Link>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Web Technologies Learning Platform"
      description="Master web development skills based on WorldSkills occupational standards">
      <HomepageHeader />
      <StatsBar />
      <main>
        <HomepageFeatures />
        <CompetencySection />
      </main>
      <CTASection />
    </Layout>
  );
}
