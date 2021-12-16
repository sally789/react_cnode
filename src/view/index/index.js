import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import qs from 'qs'
import IndexNav from './indexNav'
import ListComponent from '../../component/list'
import { useTopicsList } from '../../store/action/index'
import IndexPagination from '../../component/pagination'

export default function IndexPage() {
    const { data, loading } = useSelector((state) => state.topics)
    // console.log(useSelector(state=> state))
    // console.log('indexpag',data)
    const getData = useTopicsList()
    const { search } = useLocation()
    const { tab = 'all', page = 1 } = qs.parse(search.slice(1))
    useEffect(() => {
        getData(tab, page)
    }, [tab, page])
    return (
        <div>
            <IndexNav />
            <ListComponent data={data} loading={loading} />
            <IndexPagination />
        </div>
    )
}
