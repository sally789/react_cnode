import React, { useRef } from 'react'
import { Link, useLocation, withRouter } from 'react-router-dom'
import {
  Layout, Affix, Row, Col, Menu, Input,
} from 'antd'
import { nav } from '../router/index'

const { Search } = Input
const { Header } = Layout
function HeaderComponent(props) {
  const { history } = props
  const { pathname } = useLocation()
  const searchEl = useRef(null)
  const activeIndex = nav.findIndex((navdata) => navdata.to === pathname)
  const onSearch = () => {
    if (searchEl.current.state.value !== '' && searchEl.current.state.value !== undefined) {
      history.push(`/search/${searchEl.current.state.value}`)
    }
  }
  const isLogin = () => {
    if (localStorage.getItem('token')) {
      alert('你已退出登录')
      localStorage.removeItem('token')
      nav[3].txt = '登录'
      nav[3].to = '/login'
    }
  }
  return (
    <Affix offsetTop={0}>
      <Layout>
        <Header>
          <div className="wrap">
            <Row>
              <Col span={2}>
                <h1 className="logo">
                  <Link to="/">LOGO</Link>
                </h1>
              </Col>
              <Col span={7}>
                <Search ref={searchEl} placeholder="input search text" onSearch={onSearch} style={{ marginTop: 15 }} />
              </Col>
              <Col span={12} offset={3}>
                <Menu mode="horizontal" theme="dark" defaultSelectedKeys={`${activeIndex}`}>
                  <Menu.Item key="0">
                    <Link to="/">首页</Link>
                  </Menu.Item>
                  <Menu.Item key="1">
                    <Link to="/start">新手入门</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/about">关于我们</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to={nav[3].to} onClick={isLogin}>
                      {localStorage.getItem('token') ? '退出登录' : '登录'}
                    </Link>
                  </Menu.Item>
                </Menu>
              </Col>
            </Row>
          </div>
        </Header>
      </Layout>
    </Affix>
  )
}
export default withRouter(HeaderComponent)
