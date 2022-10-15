import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts =()=> {
    return (
        <div>
            My Posts
            <div>
                New Posts
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you?' likeCount={50}/>
                <Post message='Hi, it is my first post' likeCount={23}/>
            </div>
        </div>
    );
}

export default MyPosts;