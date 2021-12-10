import { createStore,combineReducers } from "redux";
import topics from './reducers/topics'
import detail from './reducers/detail'
import user from './reducers/user'
import search from './reducers/search'
import login from './reducers/login'
export default createStore(combineReducers(
    {   topics:topics,
        detail:detail,
        user:user,
        search:search,
        login:login
    }
    ))