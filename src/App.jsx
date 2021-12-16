import React from 'react'
import { Layout } from 'antd'
import { Route, Switch, withRouter } from 'react-router-dom'
import { route } from './router'
import HeaderComponent from './component/header'
import FooterComponent from './component/footer'

const { Content } = Layout
function App(props) {
  return (
    <Layout className="page">
      <HeaderComponent {...props} />
      <Content style={{ padding: '0 50px' }} className="content">
        <div className="wrap">
          <Switch>
            {route.map((item, index) => (
              <Route
                key={index.toString()}
                path={item.path}
                exact={item.exact}
                render={(data) => item.render(data)}
              />
            ))}
          </Switch>
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  )
}
export default withRouter(App)
