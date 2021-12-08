import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'antd';
import TopicTag from '../../component/topicTag'
import Dayjs from '../../component/day'
export default function Details(props){
    console.log('进入详情页');
    const {loading,data}=props
    console.log(loading)
    const {author,title,content,create_at,good,top,tab,visit_count} = data
    // const {loginname}=author

    console.log(data.author)
    // console.log(data.author.loginname)
    console.log(data)
    return (
        <Card style={{marginTop:'10px'}} loading={loading} bordered 
        title={
            <Fragment>
                <h1><TopicTag tab={top?'top':(good?'good':tab)}/>{title}</h1>
                <p>作者:<Link to={`/user`}>{title}</Link>
                   &nbsp;&nbsp; 创建事件:<Dayjs date={create_at}/>--浏览人数:{visit_count}              
                </p>
            </Fragment>
            } 
        type='inner'>
            <div dangerouslySetInnerHTML={{__html:content}}>

            </div>
        </Card>
    )
    
}