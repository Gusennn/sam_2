export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

let initialState = {
    posts: [
        {id: 1, postMessage: 'hello', likesCount: 3},
        {id: 2, postMessage: 'hello', likesCount: 23},
    ],
    newPostText: ''
}
const profileReducer =(state, action)=>{
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break;
        case ADD_POST:
            let newPush = {
                id: 4,
                postMessage: state.newPostText,
                likesCount: 434
            }
            state.posts.push(newPush)
            state.newPostText = ''
            break;
    }
    return state
}

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

export default profileReducer;