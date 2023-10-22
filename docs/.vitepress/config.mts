// 配置
import { defineConfig } from 'vitepress'
import { sidebar } from './relaConf/sidebar'
import { nav } from './relaConf/navbar'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "./",
  // 图片真实路径是./public/img/logo.png，不使用public文件夹图片打包后不生效
  head: [['link', { rel: 'icon', href: '/img/logo.png' }]],
  lang: 'en-ZN',
  title: 'Simon 技术文档',
  description: '个人搭建的有关IT技术文档 ',
  themeConfig: {
    logo: '/img/logo.png',
    nav: nav,
    sidebar: sidebar, // 把定义的sidebar给替换进来

    // 目录
    outline: {
      level: [2, 4],
      label: '目录'
    },

    // 搜索框
    search: {
      provider: 'local'
    },

    //国际化i18n
    i18nRouting: true,

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zouyaowen/freewheeling' }
    ],
    
    // 页脚
    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">基于VitePress搭建</a>',
      copyright: 'Copyright © 2023 Simon'
    }
  },
  // 更新时间
  lastUpdated: true,
  //忽略死链接
  ignoreDeadLinks: true,

})

