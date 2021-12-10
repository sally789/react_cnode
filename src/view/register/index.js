import React, { useState } from 'react';
import {Link,withRouter} from 'react-router-dom'
import {
  Card,Breadcrumb,
  Form,
  Input,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
} from 'antd';
import {useRegister} from '../../store/action/index'
const { Option } = Select;


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = (props) => {
  const [form] = Form.useForm();
  const getDate=useRegister()
  let data;
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    getDate(values)
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Row><Col span={3}></Col><Col span={18}>
    <Card title={<Breadcrumb>
        <Breadcrumb.Item><Link to='/'>主页</Link></Breadcrumb.Item>
        <Breadcrumb.Item>注册</Breadcrumb.Item>
    </Breadcrumb>} 
    type='inner' style={{marginTop:'40px'}}>
    <Form style={{paddingRight:'100px'}}
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: '86',
      }}
      scrollToFirstError
    >
      {/* 邮箱 */}
      <Form.Item 
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

        {/* 密码 */}
      <Form.Item 
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

        {/* 确认密码 */}
      <Form.Item 
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

        {/* 昵称 */}
      <Form.Item 
        name="nickname"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

        {/* 电话 */}
      <Form.Item 
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

        {/* 同意 */}
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>

      {/* 注册 */}
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          {/* <Link to="/login"></Link> */}Register
        </Button>
      </Form.Item>
    </Form>
    </Card>
    </Col>
    <Col span={3}></Col>
    </Row>
  );
};
export default withRouter(RegistrationForm) ;