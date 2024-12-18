import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Hubspot account id
const hubspot = {
  accountId: '21339207',
};
const config: Config = {
  title: 'APICove',
  tagline: 'APIs made easy',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://apicove.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  organizationName: 'la-rebelion', // Usually your GitHub org/user name.
  projectName: 'apicove', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          path: './blog',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          postsPerPage: 6,
          // blogListComponent: '@theme/BlogListPage',
          // blogPostComponent: '@theme/BlogPostPage',
          // blogTagsListComponent: '@theme/BlogTagsListPage',
          // blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          blogSidebarCount: 0,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-R63DV8HNZS',
        },
        googleTagManager: {
          containerId: 'GTM-PCV79Q6Z',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      // https://docusaurus.io/docs/blog#multiple-blogs
      '@docusaurus/plugin-content-blog',
      {
        id: 'gyat',
        routeBasePath: '/gyat/',
        path: './gyat',
      },
    ],
    [
      // https://docusaurus.io/docs/blog#multiple-blogs
      '@docusaurus/plugin-content-blog',
      {
        id: 'hapi',
        routeBasePath: '/hapi/',
        path: './hapi',
      }
    ],
    // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects
    // This plugin is always inactive in development and only active in production because it works on the build output
    ['@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          // {
          //   to: '/docs/newDoc',
          //   from: '/docs/oldDoc',
          // },
          // Redirect from multiple old paths to the new path
          {
            to: '/gyat',
            from: ['/gyat-go-through-your-apis-tool', '/go-through-your-apis-tool'],
          },
          {
            to: '/hapi',
            from: ['/hapi-headless-api'],
          },
        ],
      },
    ],
  ],

  themeConfig: {
    image: 'img/APICove-social-2-1-s.png',
    navbar: {
      title: 'APICove',
      logo: {
        alt: 'APICove Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: 'https://tools.apicove.com', label: 'Online Tools', position: 'left', target: '_blank' },
        { to: '/gyat', label: 'GYAT', position: 'left' },
        { to: '/hapi', label: 'HAPI', position: 'left' },
        {
          href: 'https://go.rebelion.la/sponsors',
          label: 'Sponsor',
          position: 'right',
        },
        {
          href: 'https://www.buymeacoffee.com/larebelion',
          label: 'Add Cafeine ☕',
          position: 'right',
        },
        {
          label: 'Newsletter',
          position: 'right',
          to: '/' //'/newsletter',
        },
        {
          href: 'https://github.com/la-rebelion',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn Follow',
              href: 'https://https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=adrianescutia',
            },
            {
              label: 'Add Caffeine',
              href: 'https://www.buymeacoffee.com/larebelion',
            },
            {
              label: 'LinkedIn Company',
              href: 'https://www.linkedin.com/company/larebelion-labs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'La Rebelion',
              to: 'https://rebelion.la',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/la-rebelion',
            },
            {
              label: 'K1s Terminal',
              href: 'https://k1s.sh',
            },
            {
              label: 'APICove',
              href: 'https://apicove.com',
            }
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              href: 'https://apicove.com/privacy',
            },
            {
              label: 'Terms of Service',
              href: 'https://apicove.com/terms',
            },
          ],
        },
        // {
        //   title: 'Subscribe to our Newsletter',
        //   items: [
        //     {
        //       html: `<HubSpotForm divider={false} />`,
        //     },
        //   ],
        // }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} APICove. By La Rebelion.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  scripts: [
    {
      src: 'https://js.hsforms.net/forms/embed/v2.js',
      async: true,
    },
  ],
  headTags: [
    {
      tagName: 'script',
      attributes: {
        async: "true",
        defer: "true",
        type: 'text/javascript',
        id: 'hs-script-loader',
        src: `//js.hs-scripts.com/${hubspot.accountId}.js`,
      },
    },
  ],
};

export default config;
