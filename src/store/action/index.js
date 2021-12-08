import axios from 'axios';
import {useDispatch} from 'react-redux'

//获取主题列表（首页）数据
function useTopicsList() {
    let dispatch=useDispatch()
    return function(tab='all',page=1,limit=20,mdrender=true) {
        dispatch(
            {type:'topics_loading'}
        )
        axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then(
            (response) => {
                console.log('1111')
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
            {type:'topics_loading'}
        )
        axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then(
            (response) => {
                console.log(response.data.data)
                console.log('33')
                dispatch(
                    {
                        type:'topics_loadover',
                        data:response.data.data
                    }
                )
            }).catch((error) => {
                console.log('33')
                dispatch({
                    type:'topics_error',
                    err_msg:error.response.data.error_msg,
                })
            })
    }
}
export {useTopicsList,useTopicDetail}