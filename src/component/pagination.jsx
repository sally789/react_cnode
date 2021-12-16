import React from 'react'
import { Pagination } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import qs from 'qs'

export default function IndexPagination() {
  const { search } = useLocation()
  const { tab = 'all', page = 1 } = qs.parse(search.slice(1))
  return (
    <Pagination
      current={page - 0}
      defaultPageSize={20}
      total={200}
      style={{ backgroundColor: '#fff', padding: '5px 0', textAlign: 'center' }}
      itemRender={(pages, type) => {
        switch (type) {
          case 'page':
            return <Link to={`/?tab=${tab}&page=${pages}`}>{pages}</Link>
          case 'prev':
            return <Link to={`/?tab=${tab}&page=${pages}`}>{'<'}</Link>
          case 'next':
            return <Link to={`/?tab=${tab}&page=${pages}`}>{'>'}</Link>
          default:
            return <Link to={`/?tab=${tab}&page=${pages}`}>......</Link>
        }
      }}
    />
  )
}
