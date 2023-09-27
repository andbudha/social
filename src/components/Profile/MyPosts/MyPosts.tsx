import React, { ChangeEvent } from 'react';
import {
  ActionTypes,
  PostType,
  addPostAC,
  updatePostAC,
} from '../../../redux/store';
import styles from './MyPosts.module.css';
import { Post } from './Post/Post';

type MyPostsPropsType = {
  addPost: () => void;
  updatePostValue: (newPost: string) => void;
  posts: PostType[];
  newPostText: string;
};
export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  const postList = props.posts.map((post) => (
    <Post key={post.id} post={post} />
  ));

  //adding post func
  const addPostHandler = () => {
    props.addPost();
  };
  //textarea value catching func
  const inputValueUpdatingHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newPost = e.currentTarget.value;
    props.updatePostValue(newPost);
  };

  return (
    <div className={styles.myposts_block}>
      <h3> My Posts</h3>
      <div>
        <div>
          <textarea
            cols={30}
            rows={6}
            onChange={inputValueUpdatingHandler}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPostHandler}>add post</button>
        </div>
      </div>
      <div className={styles.post_block}>{postList}</div>
    </div>
  );
};
