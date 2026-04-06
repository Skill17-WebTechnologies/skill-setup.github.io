import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './pages.module.css';

const phases = [
  {
    number: 1,
    title: 'Fundamentals',
    time: '~60 hours',
    description: 'Build a solid foundation with the core building blocks of the web. Learn to structure content, style layouts, and understand how the web works.',
    technologies: ['HTML5', 'CSS3', 'Git Basics', 'Browser DevTools', 'Accessibility'],
  },
  {
    number: 2,
    title: 'Intermediate Front-End',
    time: '~80 hours',
    description: 'Add interactivity and dynamic behavior. Master JavaScript fundamentals and learn to build responsive, accessible interfaces.',
    technologies: ['JavaScript (ES6+)', 'DOM Manipulation', 'Responsive Design', 'CSS Frameworks', 'API Fetching'],
  },
  {
    number: 3,
    title: 'Frameworks & Tooling',
    time: '~100 hours',
    description: 'Level up with modern frameworks and professional development workflows. Build real-world single-page applications.',
    technologies: ['React', 'Vue.js', 'TypeScript', 'Bundlers (Vite)', 'Testing', 'Component Design'],
  },
  {
    number: 4,
    title: 'Back-End Development',
    time: '~120 hours',
    description: 'Understand server-side programming, databases, and API design. Build full-stack applications from front to back.',
    technologies: ['Node.js', 'PHP', 'SQL & Databases', 'REST APIs', 'Authentication', 'Server Security'],
  },
  {
    number: 5,
    title: 'Competition Preparation',
    time: '~60 hours',
    description: 'Sharpen your skills under time pressure. Practice with past competition tasks, optimize your workflow, and prepare for WorldSkills challenges.',
    technologies: ['Speed Coding', 'Task Analysis', 'Performance Optimization', 'Debugging', 'Time Management'],
  },
];

function PageHeader() {
  return (
    <header className={styles.pageHeader}>
      <Heading as="h1" className={styles.pageTitle}>
        Learning Path
      </Heading>
      <p className={styles.pageSubtitle}>
        Your roadmap from beginner to competition-ready web developer. Follow
        the phases at your own pace.
      </p>
    </header>
  );
}

function PhaseCard({phase}) {
  return (
    <div className={styles.phaseCard}>
      <div className={styles.phaseNumber}>{phase.number}</div>
      <div className={styles.phaseTitle}>{phase.title}</div>
      <div className={styles.phaseTime}>{phase.time}</div>
      <p className={styles.phaseDesc}>{phase.description}</p>
      <div className={styles.techTags}>
        {phase.technologies.map((tech) => (
          <span key={tech} className={styles.techTag}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default function LearningPath() {
  return (
    <Layout
      title="Learning Path"
      description="Your roadmap from beginner to competition-ready web developer">
      <PageHeader />
      <div className={styles.pageContent}>
        <p className={styles.sectionIntro}>
          This learning path is designed around the WorldSkills Web Technologies
          occupational standards. Each phase builds on the previous one. Total
          estimated time: <strong>~420 hours</strong> of hands-on learning.
        </p>

        <div className={styles.timeline}>
          {phases.map((phase) => (
            <PhaseCard key={phase.number} phase={phase} />
          ))}
        </div>

        <div className={styles.ctaBanner}>
          <h2>Ready to Start?</h2>
          <p>Dive into the curriculum and begin your web development journey.</p>
          <Link
            className="button button--lg"
            style={{background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 50, fontWeight: 600, backdropFilter: 'blur(10px)'}}>
            View Curriculum
          </Link>
        </div>
      </div>
    </Layout>
  );
}
