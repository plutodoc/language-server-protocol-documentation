import { gitPlugin } from '@vuepress/plugin-git';
import { pwaPlugin } from '@vuepress/plugin-pwa';
import { searchPlugin } from '@vuepress/plugin-search';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/images/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/images/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/images/favicon-16x16.png',
      },
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/manifest.webmanifest',
      },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/images/safari-pinned-tab.svg',
        color: '#ffffff',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#ffffff',
      },
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
  ],
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
                '/specification/basic-json-structures/text-documents.md',
                '/specification/basic-json-structures/position.md',
                '/specification/basic-json-structures/range.md',
                '/specification/basic-json-structures/text-document-item.md',
                '/specification/basic-json-structures/text-document-identifier.md',
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
    pwaPlugin({
      // 配置项
    }),
    searchPlugin({
      isSearchable: (page) => page.path !== '/',
    }),
  ],
});
