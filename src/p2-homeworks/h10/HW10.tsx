import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import {UniversalTitle} from "../../components/UniversalTitle";
import loading from '../../assets/images/loading.gif'

function HW10() {


    const dispatch = useDispatch()
    const loadingSelector = useSelector<AppStoreType>((state) => state.isFetching.isFetching)
    const setLoading = () => {
        dispatch(loadingAC(false))
        setTimeout(() => {
            dispatch(loadingAC(true))
        }, 4000)
    };

    return (
        <div>
            <hr/>
            <UniversalTitle name={'homeworks 10'}/>

            <div style={{padding: '20px 0'}}>
                {loadingSelector
                    ? (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    ) : (
                        <img style={{width: '80px', display: 'block', margin: '0 auto'}} src={loading} alt="loading"/>
                    )
                }
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
