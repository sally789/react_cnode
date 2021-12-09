import React ,{useRef}from 'react'
import {Link, useLocation,withRouter} from 'react-router-dom'
import {nav} from '../router/index'
import {Layout,Affix,Row, Col, Menu,Input} from 'antd'
const { Search } = Input;
const { Header} = Layout;
const HeaderComponent=function (props){
    console.log(props)
    let {pathname,state}=useLocation()
    let searchEl=useRef(null)
    let activeIndex=nav.findIndex((navdata)=>{
        return navdata.to===pathname
    })
    let onSearch=()=>{
        if(searchEl.current.state.value!==''&&searchEl.current.state.value!==undefined)
        props.history.push(`/search/${searchEl.current.state.value}`)
        console.log(searchEl.current.state.value)
        console.log(props.history)
    }
    return (
        <Affix offsetTop={0}>
        <Layout>
            <Header>
                <div className="wrap">
                    <Row>
                        <Col span={2}>
                            <h1 className="logo"><Link to='/'>LOGO</Link></h1>
                        </Col>
                        <Col span={7}>
                            <Search ref={searchEl}  placeholder="input search text" onSearch={onSearch} style={{ marginTop:15}} />
                        </Col>
                        <Col span={12} offset={3}>
                            <Menu mode="horizontal" theme='dark' defaultSelectedKeys={activeIndex+''}>
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
export default withRouter(HeaderComponent)