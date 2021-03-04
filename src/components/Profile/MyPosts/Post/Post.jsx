import React from 'react'
import PostStStyle from './Post.module.css'
import 'fontsource-roboto';

const Post = (props) => {
    return (
        <div>
            <span>
            {props.postMessage}
            </span>
            <span>
                <br/>
                {props.likesCount}
            </span>
        </div>
    )
}

export default Post;