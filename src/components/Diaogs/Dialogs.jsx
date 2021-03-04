import React from "react";
import {NavLink} from "react-router-dom";
import dialogStyle from './Dialogs.module.css'
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import SendIcon from '@material-ui/icons/Send';


const Dialog = (props) => {
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
const Message = (props) => {
    return (
        <div>
            <Paper elevation={2}>
                {props.message}
            </Paper>
        </div>
    )
}

const Dialogs = (props) => {

    let nameArrayMap = props.state.dialogPage.dialogName
    let messagesArrayMap = props.state.dialogPage.messagesText


    let newDialogNamesArray = nameArrayMap.map(ndna =>
        <Dialog name={ndna.name} id={ndna.id}/>)
    let newDialogMessagesArray = messagesArrayMap.map(nmna =>
        <Message message={nmna.message} id={nmna.id}/>)

    let nameAreaRef = React.createRef();
    let messageAreaRef = React.createRef();

    let onDialogNameAdd = () => {
        let text = nameAreaRef.current.value
        props.addDialogName(text)
    }
    let onDialogMessageAdd = () => {
        let text = messageAreaRef.current.value
        props.addDialogMessage(text)
    }

    return (
        <div className={`${dialogStyle.dialogsBox} ${'flexColumnBoxCentered'}`}>
            <div className={dialogStyle.dialogItems}>
                {newDialogNamesArray}
                <textarea
                    ref={nameAreaRef}
                />
                <Button variant={"text"}
                        color={"secondary"}
                        onClick={onDialogNameAdd}
                >
                    <SvgIcon component={SendIcon}/>
                </Button>
            </div>
            <div className={dialogStyle.messageItems}>
                messages items
                {newDialogMessagesArray}
                <textarea
                    ref={messageAreaRef}
                />
                <Button variant={"text"}
                        color={"secondary"}
                        onClick={onDialogMessageAdd}
                >
                    <SvgIcon component={SendIcon}/>
                </Button>
            </div>
        </div>
    )
}

export default Dialogs;