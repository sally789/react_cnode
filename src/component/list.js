import React from 'react'
import {List,Avatar,Col} from 'antd'
import moment from 'moment'
import {Link} from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
import TopicTag from '../component/topicTag'
export default function ListComponent(props){
    let {loading,data} = props
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
                        <Link to={`/topics/${id}`}>{title}</Link>
                    </Link>
                </Col>
                <Col xs={0} md={4}>
                    
                </Col>
            </List.Item>
            )
        }}
        />
            
    )
}