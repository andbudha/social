import React, { ChangeEvent } from 'react';
import { ActionTypes, PostType } from '../../../redux/state';
import styles from './MyPosts.module.css';
import { Post } from './Post/Post';

type MyPostsPropsType = {
  posts: PostType[];
  dispatch: (action: ActionTypes) => void;
  newPostText: string;
};
export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  const postList = props.posts.map((post) => (
    <Post key={post.id} post={post} />
  ));

  //adding post func
  const addPostHandler = () => {
    props.dispatch({ type: 'ADD-NEW-POST' });
  };
  //textarea value catching func
  const valueCatchingInHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newPost = e.currentTarget.value;
    props.dispatch({ type: 'UPDATE-POST', newText: newPost });
  };

  return (
    <div className={styles.myposts_block}>
      <h3> My Posts</h3>
      <div>
        <div>
          <textarea
            name="message_text"
            cols={30}
            rows={6}
            onChange={valueCatchingInHandler}
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
