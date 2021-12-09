import { createStore,combineReducers } from "redux";
import topics from './reducers/topics'
import detail from './reducers/detail'
import user from './reducers/user'
import search from './reducers/search'
export default createStore(combineReducers({topics:topics,detail:detail,user:user,search:search}))