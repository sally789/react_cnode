import React from 'react'
import { List, Avatar, Col } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'
import TopicTag from './topicTag'
import Dayjs from './day'

function ListComponent(props) {
  const { loading, data } = props
  return (
    <List
      className="topic_list"
      loading={loading}
      dataSource={data}
      renderItem={(item) => {
        const {
          author, last_reply_at, good, tab, top, title, id,
        } = item
        const { avatar_url, loginname } = author
        return (
          <List.Item>
            {localStorage.getItem('token') ? (
              <Col xs={24} md={20} className="avatar">
                <Link to={`/user/${loginname}`}>
                  <Avatar
                    icon={<UserOutlined />}
                    src={avatar_url}
                    title={loginname}
                  />
                  <TopicTag tab={top ? 'top' : good ? 'good' : tab} />
                </Link>
                <Link to={`/topic/${id}`} style={{ marginLeft: 10 }}>
                  {title}
                </Link>
              </Col>
            ) : (
              <Col xs={24} md={20} className="avatar">
                <Link to="/login">
                  <Avatar
                    icon={<UserOutlined />}
                    src={avatar_url}
                    title={loginname}
                  />
                  <TopicTag tab={top ? 'top' : good ? 'good' : tab} />
                </Link>
                <Link to="/login" style={{ marginLeft: 10 }}>
                  {title}
                </Link>
              </Col>
            )}
            <Col xs={0} md={4} className="fromNow">
              <Dayjs date={last_reply_at} />
            </Col>
          </List.Item>
        )
      }}
    />
  )
}
export default withRouter(ListComponent)
