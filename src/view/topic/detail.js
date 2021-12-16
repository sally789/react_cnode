/* eslint-disable react/no-danger */
import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import TopicTag from '../../component/topicTag'
import Dayjs from '../../component/day'

export default function Details(props) {
  //   console.log('进入详情页');
  const { loading, data } = props
  const {
    author,
    title,
    content,
    create_at,
    good,
    top,
    tab,
    visit_count,
  } = data
  const { loginname = '' } = author
  return (
    <Card
      style={{ marginTop: '10px' }}
      loading={loading}
      bordered
      title={(
        <div>
          <h1>
            <TopicTag tab={top ? 'top' : good ? 'good' : tab} />
            {title}
          </h1>
          <p>
            作者:
            <Link to={`/user/${loginname}`}>{loginname}</Link>
            &nbsp;&nbsp; 创建事件:
            <Dayjs date={create_at} />
            --浏览人数:
            {visit_count}
          </p>
        </div>
      )}
      type="inner"
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Card>
  )
}
