import React,{useEffect} from 'react'
import {Card,Avatar} from 'antd'
import {useParams} from 'react-router-dom'
import {useUser} from '../../store/action/index'
import {useSelector} from 'react-redux'
import ListComponent from '../../component/list'
import Dayjs from '../../component/day'
import {UserOutlined} from '@ant-design/icons'
export default function UserDetail(){
    let {loginname}=useParams();
    // console.log(loginname)
    let getData=useUser()
    let {data,loading}=useSelector(state=>state.user)
    // console.log(data)
    let {recent_replies=[],recent_topics=[],avatar_url,create_at,githubUsername,score}=data
    useEffect(() => {
        getData(loginname)
    },[loginname])
    return (
        <div>
            <Card loading={loading} style={{textAlign: 'center'}}>
                <Avatar size={80} icon={<UserOutlined />} src={avatar_url}/>
                <p style={{marginTop:20}}>用户名：{loginname}  注册时间：{<Dayjs date={create_at}/>}  积分：{score}</p>
                <p>github:<a href={`https://github.com/${githubUsername}`} target="_blank">https://github.com/{githubUsername}</a></p>
            </Card>
            <Card loading={loading} title={"最近创建的话题"} type={'inner'}>
                <ListComponent loading={loading} data={recent_topics}/>
            </Card>
            <Card loading={loading} title={"最近参与的话题"} type={'inner'}>
                <ListComponent loading={loading} data={recent_replies}/>
            </Card>
        </div>
    )
}