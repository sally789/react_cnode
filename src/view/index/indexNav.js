import React from 'react'
import { Menu } from 'antd';
import {Link, useLocation} from 'react-router-dom'
import{indexNav,types} from '../../router/index'
import qs from 'qs'

export default function IndexNav(props){
    let {search} = useLocation()
    let {tab}=qs.parse(search.slice(1))
    console.log(tab)
    console.log(types.indexOf(tab))
    return (
        <Menu mode='horizontal' defaultSelectedKeys={['0']} style={{marginTop:'5px'}}>
            {
                indexNav.map((data, index) =>{ 
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