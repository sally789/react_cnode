import React from 'react'
// import {Button} from 'antd'
import { useSelector } from 'react-redux'
import { Route ,Switch} from 'react-router'
import { route } from './router'
export default function App () {
  console.log(useSelector(state=>state))
  return (
    <div>
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
  )
}
