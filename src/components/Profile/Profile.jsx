import React from 'react'
import profileStyle from './Profile.module.css'
import 'fontsource-roboto';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profile";

const Profile = (props) => {
    return (
        <div className={`${profileStyle.contentBox} ${'flexColumnBoxCentered'}`}>
            <ProfileInfo/>
            <MyPosts
                dispatch={props.dispatch}
                state={props.state}
            />
        </div>
    )
}

export default Profile;