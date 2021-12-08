import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'antd';
import TopicTag from '../../component/topicTag'
import Dayjs from '../../component/day'
export default function Details(props){
    console.log('进入详情页');
    
    // console.log(props)
    const {loading,data}=props
    // const {author,title,content,create_at,good,top,tab,visit_count} = data[0]
    // console.log(loading)
    // console.table('data0',data[0].author)
    for(let i = 0 ;i<data.length; i++) {
        console.log(data.author);
        
    }
    
    // console.log(title)
    // console.log(data.title)
    return (
        <div>
            123
        </div>
        // <Card style={{marginTop:'10px'}} loading={loading} bordered 
        // title={
        //     <Fragment>
        //         <h1><TopicTag tab={top?'top':(good?'good':tab)}/>{title}</h1>
        //         <p>作者:<Link to={`/user/${author.loginname}`}>{author.loginname}</Link>
        //            &nbsp;&nbsp; 创建事件:<Dayjs date={create_at}/>--浏览人数:{visit_count}              
        //         </p>
        //     </Fragment>
        //     } 
        // type='inner'>
        //     <div dangerouslySetInnerHTML={{__html:content}}>

        //     </div>
        // </Card>
    )
    
}