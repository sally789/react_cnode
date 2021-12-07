import React,{useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import IndexNav from './indexNav'
import {useSelector} from 'react-redux'
import ListComponent from '../../component/list'
import {useTopicsList} from '../../store/action/index'
import qs from 'qs'
export default function IndexPage(props){
    let {data,loading}=useSelector(state=> state.topics)
    let getData=useTopicsList();
    const {search}=useLocation()
    console.log(search)
    let {tab,page}=qs.parse(search.slice(1))
    useEffect(() => {
        console.log('Hook')
        getData()
    },[tab,page])
    return (
        <div>
            <IndexNav/>
            <ListComponent data={data} loading={loading}/>
        </div>
    )
}