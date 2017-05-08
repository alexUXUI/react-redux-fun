import { createStore } from 'redux'
import allReducers from '../reducers'

var Store = createStore(allReducers)

export default Store 
