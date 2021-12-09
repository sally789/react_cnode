import React from 'react'
import { Comment,  Avatar ,Card,List} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Dayjs from './day'
import {Link} from 'react-router-dom'
export default function CommentList(props){
    let {data=[],loading} = props
    data.reverse ();
    return (
        <Card title="评论列表" loading={loading} type="inner">
            <List dataSource={data} pagination={true} renderItem={(item)=>{
                let {author,content,create_at} = item
                console.log(item)
                return <li> 
                            <Comment author={<Link to={`user/${author.loginname}`}>{author.loginname}</Link>} 
                            avatar={<Avatar icon={<UserOutlined />} src={author.avatar_url} title={author.loginname}/>}
                            content={<div dangerouslySetInnerHTML={{__html:content}}></div>}
                            datetime={<time>发表于：{<Dayjs date={create_at}/>}</time>}
                            />
                        </li>
            }}>
                
            </List>
        </Card>
    )
}