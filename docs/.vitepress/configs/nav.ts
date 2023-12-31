import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
  { text: '导航', link: '/nav/' },
  {
    text: '个人成长',
    items: [
      {
        text: '大江南北游记',
        link: '/column/Travel/' // 表示docs/column/Travel/index.md
      },
      {
        text: '所思·所想',
        link: '/column/Growing/' 
      }
    ]
  },
  { text: '前端开发', link: '/front-end/' },
  { text: '后端开发', link: '/rear-end/' },
  {
    text: '数据库', items: [
      {
        items: [
          { text: 'SQL 教程', link: '/database/sql/' },
          { text: 'MySQL 教程', link: '/database/mysql/' },
          { text: 'Oracle 教程', link: '/database/oracle' },
        ]
      }
    ]
  },
  { text: 'Python', link: '/config/' },
  {
    text: '面试题',
    items: [
      {
        text: '',
        items: [
          { text: 'Java', link: '/interview/java/javabase' },
          { text: 'section-A-2', link: '/test/sectionA-2' },
          { text: 'section-A-3', link: '/test/sectionA-3' },
        ]
      },
      {
        text: 'item-3-B',
        items: [
          { text: 'section-B-1', link: '/test/setctionB-1' },
          { text: 'section-B-2', link: '/test/setctionB-2' },
          { text: 'section-B-3', link: '/test/setctionB-3' },
        ]
      },
      { text: 'item-3-3', link: '/item3/3' },
      { text: 'item-3-4', link: '/item3/4' }
    ]
  },
];