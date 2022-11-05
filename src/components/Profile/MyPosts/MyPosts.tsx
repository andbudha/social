import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts =()=> {


    let postData = [
        {id: 1, message: 'Hi...', likeCount: 25},
        {id: 2, message: 'How are you?', likeCount: 52}
    ]

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
                <Post message={postData[0].message} likeCount={postData[0].likeCount}/>
                <Post message={postData[1].message} likeCount={postData[1].likeCount}/>

            </div>
        </div>
    );
}

export default MyPosts;