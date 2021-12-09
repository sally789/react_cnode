import { createStore,combineReducers } from "redux";
import topics from './reducers/topics'
import detail from './reducers/detail'
import user from './reducers/user'
export default createStore(combineReducers({topics:topics,detail:detail,user:user}))