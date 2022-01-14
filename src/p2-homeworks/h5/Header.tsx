import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import './h5.css'

function Header() {
    const [active, setActive] = useState(false)
    return (
        <div className='overflow'>
            <div className={active ? 'active' : 'notActive'}>
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
            <span onClick={() => setActive(!active)} className={'btn'}/>
        </div>
    )
}

export default Header
