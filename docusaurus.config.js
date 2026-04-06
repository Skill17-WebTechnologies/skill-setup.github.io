// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Skill17',
  tagline: 'Master Web Technologies',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://skill17.com',
  baseUrl: '/',

  organizationName: 'skill-setup',
  projectName: 'skill-setup.github.io',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/Skill17-WebTechnologies/skill-setup.github.io/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Skill17',
        logo: {
          alt: 'Skill17 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Curriculum',
          },
          {
            href: 'https://github.com/Skill17-WebTechnologies/skill-setup.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Curriculum',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Skill17-WebTechnologies/skill-setup.github.io',
              },
            ],
          },
          {
            title: 'Reference',
            items: [
              {
                label: 'WorldSkills Standards',
                href: 'https://worldskills.org/what/projects/wsos/2024/events/579/skills/1693/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Skill17. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
