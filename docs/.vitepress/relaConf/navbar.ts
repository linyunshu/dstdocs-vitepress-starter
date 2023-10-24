import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
    { text: '主页', link: '/' },
    {
      text: '个人成长',
      items: [
        {
          text: '大江南北游记',
          link: '/column/Travel/' // 表示docs/column/Travel/index.md
        },
        {
          text: '所思·所想',
          link: '/column/Growing/' // 表示docs/column/Growing/index.md
        }
      ]
    },
    { text: '前端开发', link: '/front-end/' },
    { text: '后端开发', link: '/rear-end/' },
    { text: '数据库', link: '/guide/' },
    { text: 'Python', link: '/config/' },
    {
        text: 'itme-3',
        items: [
            {
                items: [
                    { text: 'section-A-1', link: '/test/sectionA-1' },
                    { text: 'section-A-2', link: '/test/sectionA-2' },
                    { text: 'section-A-3', link: '/test/sectionA-3' },
                ]
            },
            { 
                text: 'item-3-B', 
                items: [
                    {text: 'section-B-1', link: '/test/setctionB-1'},
                    {text: 'section-B-2', link: '/test/setctionB-2'},
                    {text: 'section-B-3', link: '/test/setctionB-3'},
                ]
            },
            { text: 'item-3-3', link: '/item3/3' },
            { text: 'item-3-4', link: '/item3/4' }
        ]
    },
];