import React from "react";
import dialogStyle from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";

const DialogItems = (props) => {
    let dialogId = props.id;
    let path = "/dialog/" + dialogId;
    return (
        <div className={dialogStyle.dItem}>
            <NavLink to={path} activeClassName={dialogStyle.active}>
                <Button variant='outlined' color='primary'>{props.name}</Button>
            </NavLink>
        </div>
    )
}

export default DialogItems;