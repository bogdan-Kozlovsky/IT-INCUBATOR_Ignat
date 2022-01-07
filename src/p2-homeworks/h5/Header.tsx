import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import './h5.css'

function Header() {
    return (
        <div className='overflow'>
            <div className='headerWrapper'>
                {/*// add NavLinks*/}
                <NavLink
                    className={({isActive}) => `headerLink ${isActive ? 'headerLinkActive' : ''}`}
                    to={'/'}>
                    Pre Junior
                </NavLink>
                <NavLink
                    className={({isActive}) => `headerLink ${isActive ? 'headerLinkActive' : ''}`}
                    to={PATH.JUNIOR}>
                    Junior
                </NavLink>
                <NavLink
                    className={({isActive}) => `headerLink ${isActive ? 'headerLinkActive' : ''}`}
                    to={PATH.JUNIORPLUS}>
                    Junior+
                </NavLink>
            </div>
        </div>
    )
}

export default Header
