import React from 'react'
import navStyle from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";

const NavBar = () => {
    return (
        <nav className={`${navStyle.navBox} ${"flexRowBoxCentered"}`}>
            <div className={`${navStyle.navItems} ${"flexRowBoxCentered"}`}>
                <div className={navStyle.item}>
                    <NavLink to="/dialog" activeClassName={navStyle.active}>
                        <Button variant='outlined' color='primary'>Dialogs</Button>
                    </NavLink>
                </div>
                <div className={navStyle.item}>
                    <NavLink to="/profile" activeClassName={navStyle.active}>
                        <Button variant='outlined' color='primary'>Profile</Button>
                    </NavLink>
                </div>
                <div className={navStyle.item}>
                    <NavLink to="/draw" activeClassName={navStyle.active}>
                        <Button variant='outlined' color='primary'>SVG-draw</Button>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}


export default NavBar;