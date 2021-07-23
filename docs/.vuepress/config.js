module.exports = {
    base: '/vue-sample/',
    title: 'Vue-Sample',
    description: '各种VUE相关UI页面组件的代码、写法、思路、样例。',
    head: [
        ['link', { rel: 'stylesheet', type: "text/css", href: '/icomoon.css' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: 'UI', link: '/ui/' },
            { text: 'JS', link: '/js/' },
            { text: 'CSS', link: '/css/' },
            { text: 'GITHUB', link: 'https://github.com/midcu/vue-sample' },
        ],
        sidebarDepth: 2,
        sidebar: {
            "/ui/" : [
                {
                    title: 'UI',
                    path: '',
                    collapsable: false,
                    children: [
                        "",
                        "tag",
                        "button",
                        "tree-menu",
                        "transition",
                        "scrollbar"
                    ]
                },
            ],
            "/js/" : [
                {
                    title: 'JS',
                    path: '',
                    collapsable: false,
                    children: [
                        "",
                        "zoom",
                        "scrollBarWidth"
                    ]
                },
            ],
            "/css/" : [
                {
                    title: 'CSS',
                    path: '',
                    collapsable: false,
                    children: [
                        ""
                    ]
                },
            ],
        }
    },
}