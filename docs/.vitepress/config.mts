// 配置
import { defineConfig } from 'vitepress'
import { head, nav, sidebar } from './configs'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "./",
  // 图片真实路径是./public/img/logo.png，不使用public文件夹图片打包后不生效
  // 输出目录
  outDir: '../dist',

  lang: 'zh-CN',
  title: 'Simon 技术文档',
  description: '个人搭建的有关IT技术文档 ',
  
  head,

   // markdown 配置 
   markdown: {
    lineNumbers: true, // 行号
  },

  // 主题配置
  themeConfig: {
    logo: '/img/logo.png',

    nav,

    sidebar, // 把定义的sidebar给替换进来

    // 右侧大纲配置
    outline: {
      level: [2, 4],   //deep
      label: '目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    // 搜索框
    search: {
      provider: 'local'
    },

    //国际化i18n
    i18nRouting: true,

    langMenuLabel: '英文',

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zouyaowen/freewheeling' },
      { icon: 'twitter', link: '...' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'cool link'
      }
    ],
    
    // 页脚
    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">基于VitePress搭建</a>',
      copyright: 'Copyright © 2019-present Simon'
    }
  },
  // 更新时间
  lastUpdated: true,

  darkModeSwitchLabel: '外观',
  returnToTopLabel: '返回顶部',
  lastUpdatedText: '上次更新',

  // 外部链接图标
  externalLinkIcon: true,

  //忽略死链接
  ignoreDeadLinks: true,

})

