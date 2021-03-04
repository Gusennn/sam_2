import React from 'react'
import profileStStyle from './Profile.module.css'
import 'fontsource-roboto';
import MyPosts from "./MyPosts/MyPosts";
import Container from "@material-ui/core/Container";

const Profile = () => {
    return (
        <div className={`${profileStStyle.contentBox} ${'flexColumnBoxCentered'}`}>
                <div>
                    <img src="" alt=""/>
                </div>
                <div>
                    ava + description
                </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;