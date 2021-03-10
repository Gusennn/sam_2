import React from "react";
import dialogStyle from './Dialogs.module.css'
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import SendIcon from '@material-ui/icons/Send';

import Input from "@material-ui/core/Input";
import DialogItems from "./DialogItems";
import MessagesItems from "./MessagesItems";
import {
    addDialogMessageActionCreator,
    addDialogNameActionCreator, updateDialogMessageActionCreator,
    updateDialogNameActionCreator
} from "../../redux/dialogReducer";

const Dialogs = (props) => {
//---- component state
    let state = props.store.getState().dialogPage

//----TextArea value state
    let nameArrayMap = state.dialogName
    let messagesArrayMap = state.messagesText

//---- mapping Dialog & Message component
    let newDialogNamesArray = nameArrayMap.map(ndna =>
        <DialogItems name={ndna.name} id={ndna.id}/>)
    let newDialogMessagesArray = messagesArrayMap.map(nmna =>
        <MessagesItems message={nmna.message} id={nmna.id}/>)

//----- Dialog Name Upd & Add
    let onDialogNameAreaChange = (e) => {
        let text = e.target.value
        props.store.dispatch(updateDialogNameActionCreator(text))
    }
    let onDialogNameAdd = () => {
        props.store.dispatch(addDialogNameActionCreator())
    }

//----- Dialog Message Upd & Add
    let onDialogMessageAdd = () => {
        props.store.dispatch(addDialogMessageActionCreator())
    }
    let onDialogMessageAreaChange = (e) => {
        let text = e.target.value
        props.store.dispatch(updateDialogMessageActionCreator(text))
    }

    return (
        <div className={`${dialogStyle.dialogsBox} ${'flexColumnBoxCentered'}`}>
            <div className={dialogStyle.dialogItems}>
                {newDialogNamesArray}
                <div className={dialogStyle.editTools}>
                    <Input
                        placeholder={'Name Area'}
                        onChange={onDialogNameAreaChange}
                        value={state.dialogName.newDialogNameText}
                    />
                    <Button variant={"text"}
                            color={"secondary"}
                            onClick={onDialogNameAdd}
                    >
                        <SvgIcon component={SendIcon}/>
                    </Button>
                </div>
            </div>
            <div className={dialogStyle.messageItems}>
                <div className={dialogStyle.editTools}>
                    <Input
                        placeholder={'Message Area'}
                        onChange={onDialogMessageAreaChange}
                        value={state.messagesText.newDialogMessageText}
                    />
                    <Button variant={"text"}
                            color={"secondary"}
                            onClick={onDialogMessageAdd}
                    >
                        <SvgIcon component={SendIcon}/>
                    </Button>
                </div>
                {newDialogMessagesArray}

            </div>
        </div>
    )
}

export default Dialogs;