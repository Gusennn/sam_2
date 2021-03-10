import React from "react";
import Paper from "@material-ui/core/Paper/Paper";
import dItem from './Dialogs.module.css'

const MessagesItems = (props) => {
    return (
        <div>
            <Paper elevation={2}>
                <div className={dItem.messageItems}>
                    {props.message}
                </div>
            </Paper>
        </div>
    )
}

export default MessagesItems;