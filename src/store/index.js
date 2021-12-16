// eslint-disable-next-line no-unsafe-optional-chaining
import { createStore, combineReducers } from 'redux'
import topics from './reducers/topics'
import detail from './reducers/detail'
import user from './reducers/user'
import search from './reducers/search'
import login from './reducers/login'

export default createStore(
  combineReducers({
    topics,
    detail,
    user,
    search,
    login,
  }),
)
