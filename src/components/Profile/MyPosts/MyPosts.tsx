import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postMessage: string)=> void
}

const MyPosts =(props: MyPostsPropsType)=> {

    let postElements = props
        .posts.map(p=><Post message={p.message} likeCount={p.likeCount}/>
        );

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost =()=>{
        if(newPostElement.current){
            props.addPost(newPostElement.current.value);
            newPostElement.current.value='';
        }

    }

    return (
        <div className={classes.posts_block}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;