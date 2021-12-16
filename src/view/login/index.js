import React from 'react'
import { useSelector } from 'react-redux'
import {
  Form, Input, Button, Checkbox, Card, Breadcrumb, Row, Col,
} from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { nav } from '../../router/index'
import { useRegister } from '../../store/action/index'

function Login(props) {
  const { password, nickname } = useSelector((state) => state.login)
  const getData = useRegister()
  const onCheng = () => {
    getData()
  }
  const { history } = props
  const goBack = (values) => {
    // console.log(props)
    setTimeout(() => {
      if (values.password === password && values.username === nickname) {
        nav[3].txt = '退出登录'
        history.push('/')
      } else {
        alert('请输入正确用户名和密码')
      }
      // console.log(values.password)
      // console.log(password)
    }, 1000)
  }
  return (
    <Row>
      <Col span={12}>
        <Card
          title={(
            <Breadcrumb>
              <Breadcrumb.Item><Link to="/">主页</Link></Breadcrumb.Item>
              <Breadcrumb.Item>登录</Breadcrumb.Item>
            </Breadcrumb>
          )}
          type="inner"
          style={{ marginTop: '40px' }}
        >
          <Form
            onValuesChange={onCheng}
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={goBack}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
&nbsp;&nbsp;
          Or
<Link to="/register">register now!</Link>
            </Form.Item>
          </Form>
        </Card>
      </Col>
      <Col span={2} />
      <Col span={10} style={{ marginTop: 40 }}>
        <Card title="关于" type="inner">
          <div>
            <p>CNode：Node.js专业中文社区</p>
            <p>在这里你可以：</p>
            <ul>
              <li>向别人提出你遇到的问题</li>
              <li>帮助遇到问题的人</li>
              <li>分享自己的知识</li>
              <li>和其它人一起进步</li>
            </ul>
          </div>
        </Card>
      </Col>
    </Row>
  )
}
export default withRouter(Login)
