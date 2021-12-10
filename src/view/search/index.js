import React,{useEffect} from 'react'
import {useLocation,useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import ListComponent from '../../component/list'
import {useSearchList} from '../../store/action/index'
import IndexNav from '../index/indexNav'
import qs from 'qs'
export default function Search(){
    let {data,loading}=useSelector(state=> state.search)
    const {keywords}=useParams()
    console.log(useParams())
    console.log('indexpag',data)
    let searchData=data.filter((item)=>{
        if(item.title.includes(keywords)){
           return item
        }
    })  
    console.log(searchData)
    let getData=useSearchList();
    const {search}=useLocation()
    let {tab='all',page=1}=qs.parse(search.slice(1))
    useEffect(() => {
        getData(tab,page)
    },[tab,page])
    return (
        <div>
            <IndexNav/>
            <ListComponent data={searchData} loading={loading}/>
        </div>
    )
}