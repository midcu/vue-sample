module.exports = {
    base: '/vue-sample/',
    title: 'Vue-Example-Ui',
    description: '各种VUE相关UI页面组件的代码、写法、思路、样例。',
    head: [
        ['link', { rel: 'stylesheet', type: "text/css", href: '/icomoon.css' }],
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
            { text: 'GITHUB', link: 'https://github.com' },
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
                        "transition",
                        "tag"
                    ]
                },
            ],
            "/js/" : [
                {
                    title: 'JS',
                    path: '',
                    collapsable: false,
                    children: [
                        ""
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