// reducers/index.js
import { combineReducers } from 'redux' // 利用combineReducers 合并reducers
import { routerReducer } from 'react-router-redux' // 将routerReducer一起合并管理
import demo from './demo' // 引入update这个reducer
import login from './login'
export default combineReducers({
    demo,
    login,
    routing: routerReducer
})