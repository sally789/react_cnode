import React from 'react'
import qs from 'qs'
import IndexPage from '../view/index/index'
import TopicDetail from '../view/topic'
import UserDetail from '../view/user'
import StartPage from '../view/start/start'
import AboutPage from '../view/about/about'
import ErrPage from '../view/page404/err'
import LoginPage from '../view/login/index'
import SearchPage from '../view/search/index'
const route=[
    {
        path: '/',
        exact: true,
        render(props) {
            const {location} = props
            let {search}=location
            const {tab,page}=qs.parse(search.slice(1))
            if((tab===undefined&&page===undefined)||
               (types.includes(tab)&&(page===undefined||page>0)))
                { return <IndexPage {...props} />}
            return <ErrPage {...props} />
        },
    },{
        path: '/search/:keywords',
        exact: true,
        render(props) {
            console.log(props)
            return <SearchPage {...props} />
        },
    },{
        path: '/topic/:id',
        exact: true,
        render(props) {
            // console.log(props)
            return <TopicDetail {...props} />
        },
    },{
        path: '/user/:loginname',
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
        path: '/login',
        exact: true,
        render(props) {
            return <LoginPage {...props} />
        },
    },{
        path: '',
        exact: true,
        render(props) {
            return <ErrPage {...props} />
        },
    },
]
//标题导航
const nav=[{
    to:'/',
    txt:'首页'
},{
    to:'/start',
    txt:'新手入门'
},{
    to:'/about',
    txt:'关于我们'
},{
    to:'/login',
    txt:'登录'
}]
//二级导航
const types=['all','good','share','ask','job','dev']
const indexNav=[{
    to:'/?tab=all',
    txt:'全部'
},{
    to:'/?tab=good',
    txt:'精华'
},{
    to:'/?tab=share',
    txt:'分享'
},{
    to:'/?tab=ask',
    txt:'问答'
},{
    to:'/?tab=job',
    txt:'招聘'
},{
    to:'/?tab=dev',
    txt:'客户端测试'
},]
export {route,nav,indexNav,types}
