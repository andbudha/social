import React, { ChangeEvent } from 'react';
import styles from './MyPosts.module.css';
import { Post } from './Post/Post';
import { MyPostsContainerPropsType } from './MyPostsContainer';

export const MyPosts: React.FC<MyPostsContainerPropsType> = (props) => {
  const postList = props.posts.map((post) => (
    <Post key={post.id} post={post} />
  ));

  //adding post func
  const addPostHandler = () => {
    props.addPost();
    props.updatePost('');
  };
  //textarea value catching func
  const inputValueUpdatingHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newPost = e.currentTarget.value;
    props.updatePost(newPost);
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
