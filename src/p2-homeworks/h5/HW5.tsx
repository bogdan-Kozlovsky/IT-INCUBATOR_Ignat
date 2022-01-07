import React from 'react'
import Header from './Header'
import {Switch} from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <div className='wrapper'>
                <HashRouter>

                    <Header/>

                    <Switch/>

                </HashRouter>
            </div>
        </div>
    )
}

export default HW5
