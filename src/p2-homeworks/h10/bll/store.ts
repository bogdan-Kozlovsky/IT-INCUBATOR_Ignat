import {combineReducers, createStore} from 'redux'
import {loadingReducer} from './loadingReducer'

const RootReducers = combineReducers({
    isFetching: loadingReducer,

})
const store = createStore(RootReducers)

export default store

export type AppStoreType = ReturnType<typeof RootReducers>
//
// // @ts-ignore
// window.store = store // for dev
