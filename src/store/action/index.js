import axios from 'axios';
import {useDispatch} from 'react-redux'
import {useRef} from 'react'
//获取主题列表（首页）数据
function useTopicsList() {
    let dispatch=useDispatch()
    return function(tab='all',page=1,limit=20,mdrender=true) {
        dispatch(
            {type:'topics_loading'}
        )
        axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then(
            (response) => {
                console.log('首页列表获取成功')
                dispatch(
                    {
                        type:'topics_loadover',
                        data:response.data.data
                    }
                )
            }
        )
    }
}
//获取主题详情
function useTopicDetail() {
    let dispatch=useDispatch()
    return function(id) {
        dispatch(
            {type:'detail_loading'}
        )
        axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then(
            (response) => {
                console.log(response.data.data)
                console.log('详情列表获取成功')
                dispatch(
                    {
                        type:'detail_loadover',
                        data:response.data.data
                    }
                )
            }).catch((error) => {
                console.log('详情列表获取失败')
                console.log(error)
                dispatch({
                    type:'detail_error',
                    err_msg:error,
                })
            })
    }
}
//获取用户详情
function useUser() {
    let dispatch=useDispatch()
    return function(loginname) {
        dispatch(
            {type:'user_loading'}
        )
        axios.get(`https://cnodejs.org/api/v1/user/${loginname}`).then(
            (response) => {
                // console.log(response.data.data)
                console.log('详情列表获取成功')
                dispatch(
                    {
                        type:'user_loadover',
                        data:response.data.data
                    }
                )
            }).catch((error) => {
                console.log('详情列表获取失败')
                console.log(error)
                dispatch({
                    type:'user_error',
                    err_msg:error,
                })
            })
    }
}
 //获取搜索列表数据
function useSearchList() {
    let dispatch=useDispatch()
    return function(tab='all',page=1,limit=500,mdrender=true) {
        dispatch(
            {type:'search_loading'}
        )
        axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then(
            (response) => {
                console.log('搜索列表获取成功')
                dispatch(
                    {
                        type:'search_loadover',
                        data:response.data.data
                    }
                )
            }
        )
    }
}  
//设置注册
function useRegister(){
    let dispatch=useDispatch()
    
    return function(){
        // console.log(data)
        dispatch(
            {
                type:'Login_loading',
            }
        )
        axios.get('https://dev-v2.bundleb2b.net/apidoc-server/app/mock/57/register').then(
            response => {
                console.log('注册发起请求')
                console.log(response.data.password)
                dispatch(
                    {
                        type:'Login_loadover',
                        password:response.data.password,
                        nickname:response.data.nickname,
                    }
                )
            }
        )
    }
}
export {useTopicsList,useTopicDetail,useUser,useSearchList,useRegister}