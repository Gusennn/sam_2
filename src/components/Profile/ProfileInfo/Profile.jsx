import React from 'react'
import infoStyle from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={infoStyle.profileBox}>
            <div>
                <img src="" alt=""/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;