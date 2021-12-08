import React from 'react'
import { Comment, Tooltip, Avatar ,Card,List} from 'antd';
import { UserOutlined } from '@ant-design/icons';
export default function CommentList(props){
    let {data,loading} = props
    return (
        <Card title="评论列表" loading={loading}>
            <List dataSource={data} renderItem={(item)=>{
                let {author} = item
                return <Comment author={'作者'} 
                avatar={<Avatar icon={<UserOutlined />} src={avatar_url.avatar_url} title={author.loginname}/>}
                content={'评论内容'}
                />
                
            }}>

            </List>
        </Card>
    )
}