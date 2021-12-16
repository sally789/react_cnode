import React from 'react'
import { List, Avatar, Col } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'
import TopicTag from './topicTag'
import { nav } from '../router/index'
import Dayjs from './day'

function ListComponent(props) {
  const { loading, data, history } = props
  const ifLoaded = () => {
    if (nav[3].txt === '登录') {
      history.push('/login')
    }
  }
  return (
    <List
      className="topic_list"
      loading={loading}
      dataSource={data}
      renderItem={(item) => {
        // console.log(data)
        const {
          author, last_reply_at, good, tab, top, title, id,
        } = item
        const { avatar_url, loginname } = author
        return (
          <List.Item onClick={ifLoaded}>
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
