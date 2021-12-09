import React , {useEffect, Fragment} from 'react'
import {useSelector} from 'react-redux'
import {useParams, useHistory} from 'react-router-dom'
import {useTopicDetail} from '../../store/action/index'
import {Alert} from 'antd'
import Details from './detail'
import CommentList from '../../component/comment'
export default function TopicDetail(){
    let {loading,data,isError,err_msg}=useSelector(state=> {
        // console.log('state',state);
        return state.detail      
    })
    // console.log(data)
    let {id}=useParams()
    let history=useHistory()
    let getData=useTopicDetail()
    useEffect(() => {
        getData(id)
    },[id])
    return (
        <div>
            {
                isError?<Alert closable type="error" message={'请求出错'} description={
                    <Fragment>
                        <p>{err_msg}</p>
                        <p>点击关闭按钮返回上一级</p>
                    </Fragment>
                }
                onClose={()=>{
                    history.goBack()
                }}
                />:(
                    <Fragment>
                        <Details loading={loading} data={data}/>
                        <CommentList data={data.replies} loading={loading}/>
                    </Fragment>
                )
            }
        </div>
    )
}