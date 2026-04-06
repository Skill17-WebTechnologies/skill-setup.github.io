import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './pages.module.css';

const qualificationSteps = [
  {
    number: 1,
    title: 'National Selection',
    time: 'Varies by country',
    description: 'Each country runs its own national competition or selection process. Students compete in regional and national rounds to earn a spot on their national team.',
    technologies: ['Register via national body', 'Regional rounds', 'National finals'],
  },
  {
    number: 2,
    title: 'Continental Competitions',
    time: 'EuroSkills / regional events',
    description: 'Top performers may compete at continental level events like EuroSkills, which serve as preparation for the global competition.',
    technologies: ['EuroSkills', 'AsiaSkills', 'Americas regional'],
  },
  {
    number: 3,
    title: 'WorldSkills International',
    time: 'Every 2 years',
    description: 'The global competition brings together the best young skilled professionals from over 60 countries. Competitors must be under 23 at the time of competition.',
    technologies: ['60+ countries', 'Under 23 age limit', '4-day competition'],
  },
];

const competitionDetails = [
  {
    icon: '📋',
    title: 'Competition Structure',
    description: 'The competition spans multiple days with different test projects. Each module tests a different aspect of web development — from design accuracy to server-side logic.',
    list: ['Multiple test modules over 3–4 days', '~18 hours of competition time total', 'Individual competition (no teams)', 'Real-world project briefs'],
  },
  {
    icon: '✅',
    title: 'Eligibility',
    description: 'Requirements vary by country, but the core criteria are consistent across WorldSkills.',
    list: ['Age: under 23 at time of competition', 'Student or recent graduate', 'Selected through national competition', 'Passport from competing country'],
  },
  {
    icon: '📊',
    title: 'Assessment Criteria',
    description: 'Projects are evaluated by expert judges using a detailed marking scheme based on the WorldSkills occupational standards.',
    list: ['Design Implementation — 25%', 'Front-End Development — 25%', 'Back-End Development — 40%', 'Professional Skills — 10%'],
  },
  {
    icon: '🏆',
    title: 'What You Win',
    description: 'Beyond medals, competing at WorldSkills opens doors to career opportunities and a global professional network.',
    list: ['Gold, Silver, Bronze medals', 'Medallions of Excellence', 'International recognition', 'Career and networking opportunities'],
  },
];

function PageHeader() {
  return (
    <header className={styles.pageHeader}>
      <Heading as="h1" className={styles.pageTitle}>
        Competition Info
      </Heading>
      <p className={styles.pageSubtitle}>
        Everything you need to know about WorldSkills Web Technologies — from
        qualification to competition day.
      </p>
    </header>
  );
}

export default function Competition() {
  return (
    <Layout
      title="Competition Info"
      description="WorldSkills Web Technologies competition qualification, structure, and marking criteria">
      <PageHeader />
      <div className={styles.pageContent}>
        <Heading as="h2" className={styles.sectionHeading}>
          How to Qualify
        </Heading>
        <p className={styles.sectionIntro}>
          The road to WorldSkills starts at the national level. Here's the
          typical pathway from local competitions to the international stage.
        </p>

        <div className={styles.timeline}>
          {qualificationSteps.map((step) => (
            <div key={step.number} className={styles.phaseCard}>
              <div className={styles.phaseNumber}>{step.number}</div>
              <div className={styles.phaseTitle}>{step.title}</div>
              <div className={styles.phaseTime}>{step.time}</div>
              <p className={styles.phaseDesc}>{step.description}</p>
              <div className={styles.techTags}>
                {step.technologies.map((t) => (
                  <span key={t} className={styles.techTag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Heading as="h2" className={styles.sectionHeading}>
          Competition Details
        </Heading>

        <div className={styles.infoGrid}>
          {competitionDetails.map((item) => (
            <div key={item.title} className={styles.infoCard}>
              <div className={styles.infoIcon}>{item.icon}</div>
              <div className={styles.infoTitle}>{item.title}</div>
              <p className={styles.infoDesc}>{item.description}</p>
              <ul className={styles.infoList}>
                {item.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.ctaBanner}>
          <h2>Start Preparing Today</h2>
          <p>Follow the learning path to build competition-ready skills.</p>
          <Link
            className="button button--lg"
            to="/learning-path"
            style={{background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 50, fontWeight: 600, backdropFilter: 'blur(10px)'}}>
            View Learning Path
          </Link>
        </div>
      </div>
    </Layout>
  );
}
