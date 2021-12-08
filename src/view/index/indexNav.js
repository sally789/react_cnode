import React from 'react'
import { Menu } from 'antd';
import {Link, useLocation} from 'react-router-dom'
import{indexNav,types} from '../../router/index'
import qs from 'qs'

export default function IndexNav(){
    let {search} = useLocation()
    let {tab}=qs.parse(search.slice(1))
    let activeIndex=tab===undefined ?0:(types.indexOf(tab))
    return (
        <Menu mode='horizontal' defaultSelectedKeys={[activeIndex+'']} style={{marginTop:'5px'}}>
            {
                indexNav.map((data, index) =>{ 
                    // console.log(data)
                    return (
                    <Menu.Item key={index}>
                        <Link to={data.to}>{data.txt}</Link>
                    </Menu.Item>
                    )
                })
            }
        </Menu>
    )
}