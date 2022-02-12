import React from 'react'
import s from './App.module.css'
import './../../../App.css'
import HW5 from "../../../p2-homeworks/h5/HW5";
import {UniversalTitle} from "../../../components/UniversalTitle";

function App() {
    return (
        <div className={s.App}>
            <UniversalTitle name={'react homeworks: '}/>
            <HW5/>

        </div>
    )
}

export default App
