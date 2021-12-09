import React from 'react'
import {Layout} from 'antd'
import { Route ,Switch,withRouter} from 'react-router'
import { route } from './router'
import HeaderComponent from '../src/component/header'
import FooterComponent from '../src/component/footer'
const {  Content } = Layout;
const App=function  (props) {
  console.log(props)
  return (
    <Layout className='page'>
      <HeaderComponent {...props} />
        <Content style={{ padding: '0 50px' }} className='content'>
          <div className="wrap">
            <Switch>
              {route.map((item, index)=>{
                return <Route 
                        key={index} 
                        path={item.path} 
                        exact={item.exact}
                        render={(props)=>{
                          console.log(props)
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
export default withRouter(App)
