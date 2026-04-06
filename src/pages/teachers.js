import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './pages.module.css';

const coachingSteps = [
  {
    icon: '📝',
    title: 'Register Your School',
    description: 'Contact your national WorldSkills organization to register your school or institution as a participating center.',
    list: ['Find your national body at worldskills.org', 'Register as a training center', 'Nominate students for selection'],
  },
  {
    icon: '👥',
    title: 'Select & Prepare Students',
    description: 'Identify talented students and begin structured preparation using the Skill17 curriculum and learning path.',
    list: ['Run internal selection challenges', 'Form a training schedule', 'Use the Skill17 Learning Path as your guide'],
  },
  {
    icon: '🎯',
    title: 'Structure Training Sessions',
    description: 'Break training into focused sessions that align with competition modules. Mix theory with hands-on practice.',
    list: ['2–3 sessions per week recommended', 'Alternate between competency areas', 'Include timed practice tasks', 'Review and debrief after each session'],
  },
  {
    icon: '🏅',
    title: 'Compete & Iterate',
    description: 'Enter national competitions and use results to refine training. Each round is a learning opportunity.',
    list: ['Participate in regional rounds', 'Analyze competition feedback', 'Adjust training focus areas', 'Build student confidence'],
  },
];

const curriculumMapping = [
  {
    school: 'HTML & Web Design',
    worldskills: 'Design Implementation (25%)',
    topics: 'Visual design, responsive layouts, accessibility, SEO',
  },
  {
    school: 'Programming / Computer Science',
    worldskills: 'Front-End Development (25%)',
    topics: 'JavaScript, frameworks (React/Vue), testing, interactivity',
  },
  {
    school: 'Advanced Programming / IT',
    worldskills: 'Back-End Development (40%)',
    topics: 'PHP/Node.js, databases, APIs, security, architecture',
  },
  {
    school: 'Project Work / Soft Skills',
    worldskills: 'Professional Skills (10%)',
    topics: 'Version control, project management, communication',
  },
];

function PageHeader() {
  return (
    <header className={styles.pageHeader}>
      <Heading as="h1" className={styles.pageTitle}>
        For Teachers & Coaches
      </Heading>
      <p className={styles.pageSubtitle}>
        Everything you need to prepare students for WorldSkills Web Technologies
        competitions — from registration to training strategies.
      </p>
    </header>
  );
}

export default function Teachers() {
  return (
    <Layout
      title="For Teachers"
      description="Coaching guide, team registration, and curriculum mapping for WorldSkills Web Technologies">
      <PageHeader />
      <div className={styles.pageContent}>
        <Heading as="h2" className={styles.sectionHeading}>
          Coaching Guide
        </Heading>
        <p className={styles.sectionIntro}>
          Follow these steps to get your school involved and start preparing
          students for competition. No prior competition coaching experience is
          required.
        </p>

        <div className={styles.infoGrid}>
          {coachingSteps.map((step) => (
            <div key={step.title} className={styles.infoCard}>
              <div className={styles.infoIcon}>{step.icon}</div>
              <div className={styles.infoTitle}>{step.title}</div>
              <p className={styles.infoDesc}>{step.description}</p>
              <ul className={styles.infoList}>
                {step.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Heading as="h2" id="curriculum-mapping" className={styles.sectionHeading}>
          Curriculum Mapping
        </Heading>
        <p className={styles.sectionIntro}>
          See how standard school subjects map to WorldSkills competency areas.
          Use this to integrate competition preparation into your existing teaching.
        </p>

        <div style={{overflowX: 'auto'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{borderBottom: '2px solid var(--ifm-toc-border-color)'}}>
                <th style={{padding: '1rem', textAlign: 'left', fontWeight: 700}}>School Subject</th>
                <th style={{padding: '1rem', textAlign: 'left', fontWeight: 700}}>WorldSkills Area</th>
                <th style={{padding: '1rem', textAlign: 'left', fontWeight: 700}}>Key Topics</th>
              </tr>
            </thead>
            <tbody>
              {curriculumMapping.map((row) => (
                <tr key={row.school} style={{borderBottom: '1px solid var(--ifm-toc-border-color)'}}>
                  <td style={{padding: '1rem', fontWeight: 600}}>{row.school}</td>
                  <td style={{padding: '1rem', color: 'var(--ifm-color-primary)', fontWeight: 600}}>{row.worldskills}</td>
                  <td style={{padding: '1rem', color: 'var(--skill17-text-muted)'}}>{row.topics}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Heading as="h2" className={styles.sectionHeading}>
          Teacher Resources
        </Heading>
        <p className={styles.sectionIntro}>
          Use these resources to support your teaching and coaching activities.
        </p>

        <div className={styles.resourceGrid}>
          <Link to="/docs/intro" className={styles.resourceCard}>
            <div className={styles.resourceTitle}>Full Curriculum</div>
            <p className={styles.resourceDesc}>Browse the complete curriculum organized by WorldSkills competency areas.</p>
          </Link>
          <Link to="/learning-path" className={styles.resourceCard}>
            <div className={styles.resourceTitle}>Student Learning Path</div>
            <p className={styles.resourceDesc}>Share this structured roadmap with students so they can self-study between sessions.</p>
          </Link>
          <Link to="/competition" className={styles.resourceCard}>
            <div className={styles.resourceTitle}>Competition Details</div>
            <p className={styles.resourceDesc}>Understand the competition format, eligibility, and assessment criteria.</p>
          </Link>
        </div>

        <div className={styles.ctaBanner}>
          <h2>Get Students Started</h2>
          <p>Share the learning path with your students and begin their journey.</p>
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
