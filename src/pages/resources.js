import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './pages.module.css';

const curriculumDocs = [
  {
    title: 'Design Implementation',
    description: 'Visual design, responsive layouts, accessibility, UX prototyping, and SEO — covering 25% of the curriculum.',
    to: '/docs/design/visual-design',
  },
  {
    title: 'Front-End Development',
    description: 'JavaScript mastery, modern frameworks, interactive features, testing, and deployment — 25% of the curriculum.',
    to: '/docs/frontend/javascript',
  },
  {
    title: 'Back-End Development',
    description: 'Server-side programming, database design, APIs, security, and architecture — the largest section at 40%.',
    to: '/docs/backend/server-side',
  },
  {
    title: 'Professional Skills',
    description: 'Project management, version control, communication, and problem solving — 10% of the curriculum.',
    to: '/docs/professional/workflow',
  },
];

const tools = [
  {
    title: 'Visual Studio Code',
    description: 'The most popular code editor for web development. Free, extensible, and powerful.',
  },
  {
    title: 'Git & GitHub',
    description: 'Version control is essential. Learn Git workflows and collaborate through GitHub.',
  },
  {
    title: 'Browser DevTools',
    description: 'Chrome and Firefox DevTools are indispensable for debugging, profiling, and testing.',
  },
  {
    title: 'Node.js & npm',
    description: 'JavaScript runtime and package manager for modern build tools and server-side development.',
  },
  {
    title: 'Figma',
    description: 'Industry-standard design tool. Useful for understanding design specs and prototyping.',
  },
  {
    title: 'Postman / Thunder Client',
    description: 'API testing tools that help you build and debug REST APIs efficiently.',
  },
];

const externalResources = [
  {
    title: 'MDN Web Docs',
    description: 'The definitive reference for HTML, CSS, and JavaScript. Maintained by Mozilla.',
  },
  {
    title: 'freeCodeCamp',
    description: 'Free, project-based curriculum covering full-stack web development.',
  },
  {
    title: 'The Odin Project',
    description: 'Open-source full-stack curriculum with a focus on hands-on learning.',
  },
  {
    title: 'JavaScript.info',
    description: 'Comprehensive, modern JavaScript tutorial — from basics to advanced topics.',
  },
  {
    title: 'CSS-Tricks',
    description: 'Practical articles and guides on CSS, front-end development, and web design.',
  },
  {
    title: 'WorldSkills Technical Docs',
    description: 'Official occupational standards and technical descriptions for Web Technologies.',
  },
];

function PageHeader() {
  return (
    <header className={styles.pageHeader}>
      <Heading as="h1" className={styles.pageTitle}>
        Resources
      </Heading>
      <p className={styles.pageSubtitle}>
        Curriculum documents, recommended tools, and learning resources to
        support your web development journey.
      </p>
    </header>
  );
}

function ResourceSection({title, intro, items, isLink}) {
  return (
    <>
      <Heading as="h2" className={styles.sectionHeading}>{title}</Heading>
      {intro && <p className={styles.sectionIntro}>{intro}</p>}
      <div className={styles.resourceGrid}>
        {items.map((item) => {
          const Card = isLink && item.to ? Link : 'div';
          const props = isLink && item.to ? {to: item.to} : {};
          return (
            <Card key={item.title} className={styles.resourceCard} {...props}>
              <div className={styles.resourceTitle}>{item.title}</div>
              <p className={styles.resourceDesc}>{item.description}</p>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default function Resources() {
  return (
    <Layout
      title="Resources"
      description="Curriculum docs, tools, and recommended resources for web development learning">
      <PageHeader />
      <div className={styles.pageContent}>
        <ResourceSection
          title="Curriculum"
          intro="Our curriculum is organized around the four WorldSkills Web Technologies competency areas. Dive into any section to start learning."
          items={curriculumDocs}
          isLink
        />

        <ResourceSection
          title="Recommended Tools"
          intro="These are the tools used by professionals and competitors alike. All are free or have free tiers."
          items={tools}
        />

        <ResourceSection
          title="External Learning Resources"
          intro="Supplement your learning with these high-quality, mostly free resources from the web development community."
          items={externalResources}
        />

        <div className={styles.ctaBanner}>
          <h2>Follow the Learning Path</h2>
          <p>Not sure where to start? Our structured learning path guides you step by step.</p>
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
