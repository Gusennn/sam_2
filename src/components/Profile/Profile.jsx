import React from 'react'
import profileStStyle from './Profile.module.css'
import 'fontsource-roboto';

const Profile =()=> {
    return (
        <div className={profileStStyle.contentBox}>
            <div>
                <img src="" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>Post 1</div>
                <div>Post 2</div>
                <div>Post 3</div>
            </div>
        </div>
    )
}

export default Profile;