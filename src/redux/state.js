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
        },
    },
    _callSubscriber (){
        console.log('changed')
    },
    getState(){
        return this._state
    },
    updatePostText(newText){
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    addPost () {
        let newPush = {
            id: 4,
            postMessage: this._state.profilePage.newPostText,
            likesCount: 434
        }
        this._state.profilePage.posts.push(newPush)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
    },
    addDialogName (text){
        let newPush = {
            id: 4,
            name: text,
        }
        this._state.dialogPage.dialogName.push(newPush)
        this._callSubscriber(this._state);
    },
    addDialogMessage (text) {
        let newPush = {
            id: 4,
            message: text,
        }
        this._state.dialogPage.messagesText.push(newPush)
        this._callSubscriber(this._state);
    },
    subscriber (observer){
        this._callSubscriber = observer
    },
}


export default store;