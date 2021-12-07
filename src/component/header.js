import React from 'react'
import {Link} from 'react-router-dom'
import {nav} from '../router/index'
import {Layout,Affix,Row, Col, Menu} from 'antd'
const { Header} = Layout;
export default function HeaderComponent(){
    return (
        <Affix offsetTop={0}>
        <Layout>
            <Header>
                <div className="wrap">
                    <Row>
                        <Col xs={6} sm={4} md={2}>
                            <h1 className="logo"><Link to=''>LOGO</Link></h1>
                        </Col>
                        <Col xs={18} sm={20} md={22}>
                            <Menu mode="horizontal" theme='dark' defaultSelectedKeys={['0']}>
                                {
                                    nav.map((navdata,index)=>{
                                        return (
                                        <Menu.Item key={index}>
                                            <Link to={navdata.to}>{navdata.txt}</Link>
                                        </Menu.Item>)
                                    })
                                }
                            </Menu>
                        </Col>
                    </Row>
                </div>
            </Header>
        </Layout>
        </Affix>
    )
}