import React from 'react'
import {List,Avatar,Col} from 'antd'
import {Link} from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
import TopicTag from '../component/topicTag'
import Dayjs from './day'
export default function ListComponent(props){
    let {loading,data} = props
    // console.log('list',data)
    return (
        <List
        className='topic_list'
        loading={loading}
        dataSource={data}
        renderItem={(data)=>{
            // console.log(data)
            const {author,last_reply_at,good,tab,top,title,id} = data
            const {avatar_url,loginname}=author
            return (
            <List.Item>
                <Col xs={24} md={20} className='avatar'>
                    <Link to={`/user/${loginname}`}>
                        <Avatar icon={<UserOutlined />} src={avatar_url} title={loginname}/>
                        <TopicTag tab={top?'top':(good?'good':tab)}/>
                    </Link>
                        <Link to={`/topic/${id}`} style={{marginLeft:10}}>{title}</Link>
                </Col>
                <Col xs={0} md={4} className='fromNow'>
                    <Dayjs date={last_reply_at}/>
                </Col>
            </List.Item>
            )
        }}
        />
            
    )
}