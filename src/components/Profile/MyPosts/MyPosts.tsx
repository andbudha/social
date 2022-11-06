import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts =()=> {


    let postData = [
        {id: 1, message: 'Hi...', likeCount: 25},
        {id: 2, message: 'How are you?', likeCount: 52}
    ]

    let postElements = postData
        .map(p=><Post message={p.message} likeCount={p.likeCount}/>
        )

    return (
        <div className={classes.posts_block}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;