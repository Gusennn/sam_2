import React from 'react'
import headerStyle from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header =()=> {
    return (
        <header className={headerStyle.AppHeader}>
            <div className={headerStyle.logo}>
                <NavLink to='/'>
                    <img src="https://www.flaticon.com/svg/vstatic/svg/2111/2111615.svg?token=exp=1614096685~hmac=3e1fece40152d81b390eacc4e56d12d2" alt=""/>
                </NavLink>
            </div>
        </header>
    )
}

export default Header;