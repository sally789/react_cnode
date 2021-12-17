import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import qs from 'qs'
import ListComponent from '../../component/list'
import { useSearchList } from '../../store/action/index'
import IndexNav from '../index/indexNav'

export default function Search() {
  const { data, loading } = useSelector((state) => state.search)
  const { keywords } = useParams()
  const searchData = data.filter((item) => {
    if (item.title.includes(keywords)) {
      return item
    }
    return null
  })
  const getData = useSearchList()
  const { search } = useLocation()
  const { tab = 'all', page = 1 } = qs.parse(search.slice(1))
  useEffect(() => {
    getData(tab, page)
  }, [tab, page])
  return (
    <div>
      <IndexNav />
      <ListComponent data={searchData} loading={loading} />
    </div>
  )
}
