import React from 'react'
import IndexPage from '../view/index/index'
import TopicDetail from '../view/topic/detail'
import UserDetail from '../view/user/detail'
import StartPage from '../view/start/start'
import AboutPage from '../view/about/about'
import ErrPage from '../view/page404/err'

const route=[
    {
        path: '/',
        exact: true,
        render(props) {
            return <IndexPage {...props} />
        },
    },{
        path: '/topic/:id',
        exact: true,
        render(props) {
            return <TopicDetail {...props} />
        },
    },{
        path: '/user/:username',
        exact: true,
        render(props) {
            return <UserDetail {...props} />
        },
    },{
        path: '/start',
        exact: true,
        render(props) {
            return <StartPage {...props} />
        },
    },{
        path: '/about',
        exact: true,
        render(props) {
            return <AboutPage {...props} />
        },
    },{
        path: '',
        exact: true,
        render(props) {
            return <ErrPage {...props} />
        },
    },
]
export {route}
