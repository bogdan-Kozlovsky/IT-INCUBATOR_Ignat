import React from 'react'
import Clock from './Clock'
import './../../App.css'
import {UniversalTitle} from "../../components/UniversalTitle";

function HW9() {
    return (
        <div>
            <hr/>
            <UniversalTitle name={'homeworks 9'}/>

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9
