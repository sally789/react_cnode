import React from 'react'
import {
  Comment, Avatar, Card, List,
} from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Dayjs from './day'

export default function CommentList(props) {
  const { data = [], loading } = props
  data.reverse()
  return (
    <Card title="评论列表" loading={loading} type="inner">
      <List
        dataSource={data}
        pagination
        renderItem={(item) => {
          const { author, content, create_at } = item
          return (
            <li>
              <Comment
                author={<Link to={`user/${author.loginname}`}>{author.loginname}</Link>}
                avatar={(
                  <Avatar
                    icon={<UserOutlined />}
                    src={author.avatar_url}
                    title={author.loginname}
                  />
                )}
                content={<div dangerouslySetInnerHTML={{ __html: content }} />}
                datetime={(
                  <time>
                    发表于：
                    <Dayjs date={create_at} />
                  </time>
                )}
              />
            </li>
          )
        }}
      />
    </Card>
  )
}
