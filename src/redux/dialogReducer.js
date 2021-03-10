export const updateDialogNameActionCreator = (text) => {

    return {
        type: UPDATE_DIALOG_NAME_TEXT, newText: text
    }
}
export const addDialogNameActionCreator =()=>{
    return {
        type: ADD_DIALOG_NAME
    }
}
export const updateDialogMessageActionCreator = (text) => {
    return {
        type: UPDATE_DIALOG_MESSAGE_TEXT, newText: text
    }
}
export const addDialogMessageActionCreator =()=>{
    return {
        type: ADD_DIALOG_MESSAGE
    }
}

const dialogReducer =(state, action)=>{
    switch (action.type) {
        case UPDATE_DIALOG_NAME_TEXT:
            state.dialogName.newDialogNameText = action.newText
            return state;
        case ADD_DIALOG_NAME:
            let namePush = {
                id: 4,
                name: state.dialogName.newDialogNameText,
            }
            state.dialogName.push(namePush)
            state.dialogName.newDialogNameText = ''
            return state;
        case UPDATE_DIALOG_MESSAGE_TEXT:
            state.messagesText.newDialogMessageText = action.newText
            return state;
        case ADD_DIALOG_MESSAGE:
            let messagePush = {
                id: 4,
                message: state.messagesText.newDialogMessageText,
            }
            state.messagesText.push(messagePush)
            state.messagesText.newDialogMessageText = ''
            return state;
        default:
            return state;
    }

    return state
}

const UPDATE_DIALOG_NAME_TEXT = 'UPDATE-DIALOG-NAME-TEXT'
const ADD_DIALOG_NAME = 'ADD-DIALOG-NAME'
const UPDATE_DIALOG_MESSAGE_TEXT = 'UPDATE-DIALOG-MESSAGE-TEXT'
const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE'

export default dialogReducer;