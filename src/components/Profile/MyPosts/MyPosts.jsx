import React from 'react'
import MyPostsStyle from './MyPosts.module.css'
import 'fontsource-roboto';
import Post from "./Post/Post";
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import SendIcon from '@material-ui/icons/Send';
import Input from "@material-ui/core/Input";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {
    let postData = props.state.profilePage.posts
    let newPostMessageArray = postData
        .map( npma => <Post
            postMessage={npma.postMessage}
            likesCount={npma.likesCount}
        />)
    //--------------------

    let onPostAdd =()=> {
        props.dispatch(addPostActionCreator())
    }
    let onTextAreaChange =(e)=> {
        let text = e.target.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }
    //----------------------------
    return (
        <div>
            My posts
            <div className={`${MyPostsStyle.addToolsBox} ${'flexRowBoxCentered'}`}>
                <Input
                    placeholder={"Placeholder"}
                    onChange={onTextAreaChange}
                    value={props.state.profilePage.newPostText}
                />
                <Button variant={"text"}
                        color={"secondary"}
                        onClick={onPostAdd}
                >
                    <SvgIcon component={SendIcon}/>
                </Button>
            </div>
            {newPostMessageArray}
        </div>
    )
}

export default MyPosts;