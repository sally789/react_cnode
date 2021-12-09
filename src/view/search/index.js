import React,{useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {useSelector} from 'react-redux'
import ListComponent from '../../component/list'
import {useTopicsList} from '../../store/action/index'
import qs from 'qs'
import IndexPagination from '../../component/pagination'
export default function Search(){
    let {data,loading}=useSelector(state=> state.topics)
    // console.log(useSelector(state=> state))
    console.log('indexpag',data)
    let searchData=data.filter((item)=>{
        // return item.
    })
    let getData=useTopicsList();
    const {search}=useLocation()
    let {tab='all',page=1}=qs.parse(search.slice(1))
    useEffect(() => {
        getData(tab,page)
    },[tab,page])
    return (
        <div>
            <ListComponent data={data} loading={loading}/>
            <IndexPagination/>
        </div>
    )
}