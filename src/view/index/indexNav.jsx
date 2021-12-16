import React from 'react'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import qs from 'qs'
import { indexNav, types } from '../../router/index'

export default function IndexNav() {
  const { search } = useLocation()
  const { tab } = qs.parse(search.slice(1))
  const activeIndex = tab === undefined ? 0 : (types.indexOf(tab))
  return (
    <Menu mode="horizontal" defaultSelectedKeys={[`${activeIndex}`]} style={{ marginTop: '10px' }}>
      {
        indexNav.map((data, index) => (
          <Menu.Item key={index.toString()}>
            <Link to={data.to}>{data.txt}</Link>
          </Menu.Item>
        ))
        }
    </Menu>
  )
}
