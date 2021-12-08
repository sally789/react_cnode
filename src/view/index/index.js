import React,{useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import IndexNav from './indexNav'
import {useSelector} from 'react-redux'
import ListComponent from '../../component/list'
import {useTopicsList} from '../../store/action/index'
import qs from 'qs'
import IndexPagination from '../../component/pagination'
export default function IndexPage(){
    let {data,loading}=useSelector(state=> state.topics)
    let getData=useTopicsList();
    const {search}=useLocation()
    console.log(search) 
    let {tab='all',page=1}=qs.parse(search.slice(1))
    useEffect(() => {
        getData(tab,page)
    },[tab,page])
    return (
        <div>
            <IndexNav/>
            <ListComponent data={data} loading={loading}/>
            <IndexPagination/>
        </div>
    )
}