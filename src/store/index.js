import { createStore,combineReducers } from "redux";
import topics from './reducers/topics'
import detail from './reducers/detail'
export default createStore(combineReducers({topics:topics,detail:detail}))