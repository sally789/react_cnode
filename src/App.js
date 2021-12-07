import React from 'react'
import {Layout} from 'antd'
import { useSelector } from 'react-redux'
import { Route ,Switch} from 'react-router'
import { route } from './router'
import HeaderComponent from '../src/component/header'
import FooterComponent from '../src/component/footer'
const {  Content } = Layout;
export default function App () {
  console.log(useSelector(state=>state))
  return (
    <Layout className='page'>
      <HeaderComponent/>
        <Content style={{ padding: '0 50px' }} className='content'>
          <div className="wrap">
            <Switch>
              {route.map((item, index)=>{
                return <Route 
                        key={index} 
                        path={item.path} 
                        exact={item.exact}
                        render={(props)=>{
                          props.username='aaa'
                          return item.render(props)
                        }}
                        />
              })}
            </Switch>
          </div>
        </Content>
      <FooterComponent/>
    </Layout>
  )
}
