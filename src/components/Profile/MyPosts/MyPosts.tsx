import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../index";


const MyPosts =(props: PostsType)=> {


    let postElements = props.posts
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