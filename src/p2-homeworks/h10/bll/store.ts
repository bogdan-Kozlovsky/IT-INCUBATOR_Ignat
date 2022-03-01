import {combineReducers, createStore} from 'redux'
import {loadingReducer} from './loadingReducer'
import {themeReducer} from "../../h12/bll/themeReducer";

const RootReducers = combineReducers({
    isFetching: loadingReducer,
    themeReducer: themeReducer,

})
const store = createStore(RootReducers)

export default store

export type AppStoreType = ReturnType<typeof RootReducers>
//
// // @ts-ignore
// window.store = store // for dev
