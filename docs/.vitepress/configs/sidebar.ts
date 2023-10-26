// docs/.vitepress/relaConf/navbar.ts
import { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Sidebar = {
  '/navz': [
    {
      text: 'Examples',
      items: [
        { text: 'Markdown Examples', link: '/markdown-examples' },
        { text: 'Runtime API Examples', link: '/api-examples' }
      ]
    },
    {
      text: 'EnvStudy',
      items: [
        { text: 'LinuxEnv', link: '/env' }
      ]
    }
  ],
  '/front-end/': [
    {
      text: 'Front-end',
      items: [
        { text: 'Index', link: '/front-end/' },
        { text: 'One', link: '/guide/one' },
        { text: 'Two', link: '/guide/two' }
      ]
    }
  ],
  '/rear-end/': [
    {
      text: 'Rear-end',
      items: [
        { text: 'Index', link: '/rear-end/' },
        { text: 'One', link: '/rear-end' },
        { text: 'Two', link: '/rear-end' }
      ]
    }
  ],
  '/database/sql': [
    {
      text: 'SQL 教程',
      items: [
        { text: '主页', link: '/database/sql' },
        { text: 'Three', link: '/database/sql/5' },
        { text: 'Four', link: '/database/four' }
      ]
    }
  ],
  '/database/mysql': [
    {
      text: 'MySQL 教程',
      items: [
        { text: '主页', link: '/database/mysql' },
        { text: 'Three', link: '/database/three' },
        { text: 'Four', link: '/database/four' }
      ]
    }
  ],
  '/interview': [
    {
      text: '',
      items: [
        { text: 'Index', link: '/interview/java' },
        { text: 'Three', link: '/config/three' },
        { text: 'Four', link: '/config/four' },
        { text: 'Index', link: '/interview/java' },
        { text: 'Three', link: '/config/three' },
        { text: 'Four', link: '/config/four' }
      ]
    }
  ]
};
