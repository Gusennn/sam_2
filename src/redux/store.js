import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, postMessage: 'hello', likesCount: 3},
                {id: 2, postMessage: 'hello', likesCount: 23},
            ],
            newPostText: ''
        },
        dialogPage: {
            dialogName: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Maria'},
                {id: 3, name: 'Bob'},
                {id: 4, name: 'Lisa'},
            ],
            messagesText: [
                {id: 1, message: 'state message 1'},
                {id: 2, message: 'state message 2'},
                {id: 3, message: 'state message 3'},
            ],
            newDialogNameText:'',
            newDialogMessageText:'',
        },
    },
    _callSubscriber() {
        console.log('changed')
    },
    getState() {
        return this._state
    },
    subscriber(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogReducer(this._state.dialogPage, action)
        this._callSubscriber(this._state)
        // if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText
        //     this._callSubscriber(this._state)
        // }
        // else if (action.type === ADD_POST) {
        //     let newPush = {
        //         id: 4,
        //         postMessage: this._state.profilePage.newPostText,
        //         likesCount: 434
        //     }
        //     this._state.profilePage.posts.push(newPush)
        //     this._state.profilePage.newPostText = ''
        //     this._callSubscriber(this._state);
        // }
        // else if (action.type === UPDATE_DIALOG_NAME_TEXT) {
        //     this._state.dialogPage.dialogName.newDialogNameText = action.newText
        //     this._callSubscriber(this._state)
        // }
        // else if (action.type === ADD_DIALOG_NAME){
        //     let newPush = {
        //         id: 4,
        //         name: this._state.dialogPage.dialogName.newDialogNameText,
        //     }
        //     this._state.dialogPage.dialogName.push(newPush)
        //     this._state.dialogPage.dialogName.newDialogNameText = ''
        //     this._callSubscriber(this._state);
        // }
        // else if (action.type === UPDATE_DIALOG_MESSAGE_TEXT){
        //     this._state.dialogPage.messagesText.newDialogMessageText = action.newText
        //     this._callSubscriber(this._state)
        // }
        // else if (action.type === ADD_DIALOG_MESSAGE){
        //     let newPush = {
        //         id: 4,
        //         message: this._state.dialogPage.messagesText.newDialogMessageText,
        //     }
        //     this._state.dialogPage.messagesText.push(newPush)
        //     this._state.dialogPage.messagesText.newDialogMessageText = ''
        //     this._callSubscriber(this._state);
        // }
    }
}


export default store;