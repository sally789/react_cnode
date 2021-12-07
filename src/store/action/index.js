import axios from 'axios';
import {useDispatch} from 'react-redux'

//获取主题列表（首页）数据
function useTopicsList() {
    let dispatch=useDispatch()
    return function(tab='all',page=1,limit=20,mdrender=true) {
        dispatch(
            {type:'topics_loading'}
        )
        axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then(
            (response) => {
                // console.log(response)
                dispatch(
                    {
                        type:'topics_loadover',
                        data:response.data.data
                    }
                )
            }
        )
    }
}
export {useTopicsList}