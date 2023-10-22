// docs/.vitepress/relaConf/navbar.ts
import { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Sidebar = {
  '/': [
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
  '/config/': [
    {
      text: 'Config',
      items: [
        { text: 'Index', link: '/config/' },
        { text: 'Three', link: '/config/three' },
        { text: 'Four', link: '/config/four' }
      ]
    }
  ]
};
