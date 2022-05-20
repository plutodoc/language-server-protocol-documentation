import { gitPlugin } from '@vuepress/plugin-git';
import { searchPlugin } from '@vuepress/plugin-search';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Language Server Protocol',
      description: 'Provide language features like auto complete, go to definition, find all references etc',
    },
  },

  theme: defaultTheme({
    docsDir: 'docs',
    logo: '/images/hero.png',
    repo: 'https://github.com/microsoft/language-server-protocol',
    locales: {
      '/': {
        editLink: false,
        navbar: [
          {
            text: 'Specification',
            link: '/specification/base-protocol/base-protocol',
          },
        ],
        sidebar: {
          '/specification/': [
            {
              text: 'Base Protocol',
              collapsible: true,
              children: [
                '/specification/base-protocol/base-protocol.md',
                '/specification/base-protocol/header-part.md',
                '/specification/base-protocol/content-part.md',
                '/specification/base-protocol/base-protocol-json-structures.md',
              ],
            },
            {
              text: 'Language Server Protocol',
              collapsible: true,
              children: [
                '/specification/language-server-protocol/language-server-protocol.md',
                '/specification/language-server-protocol/capabilities.md',
                '/specification/language-server-protocol/message-ordering.md',
                '/specification/language-server-protocol/message-documentation.md',
              ],
            },
            {
              text: 'Basic JSON Structures',
              collapsible: true,
              children: [
                '/specification/basic-json-structures/basic-json-structures.md',
                '/specification/basic-json-structures/uri.md',
                '/specification/basic-json-structures/regexp.md',
                '/specification/basic-json-structures/enumerations.md',
              ],
            },
          ],
        },
      },
    },
  }),
  markdown: {},
  plugins: [
    gitPlugin({
      contributors: false,
    }),
    searchPlugin({
      isSearchable: (page) => page.path !== '/',
    }),
  ],
});
