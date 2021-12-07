import React from 'react'
import {Tag} from 'antd'
function tag(tab){
    switch(tab){
        case 'good':
            return <Tag color="#f50" className="tag">精品</Tag>
        case 'top':
            return <Tag color="#87d068" className="tag">置顶</Tag>
        case 'share':
            return <Tag color="green" className="tag">分享</Tag>
        case 'ask':
            return <Tag color="gold" className="tag">问答</Tag>
        case 'job':
            return <Tag color="blue" className="tag">招聘</Tag>
        case 'dev':
            return <Tag color="purple" className="tag">测试</Tag>
    }
    return null
}
export default function TopicTag(props){
    let {tab}=props;
    return tag(tab)
}