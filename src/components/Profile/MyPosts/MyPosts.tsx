import React, { ChangeEvent, RefObject } from 'react';
import { PostType } from '../../../redux/state';
import styles from './MyPosts.module.css';
import { Post } from './Post/Post';

type MyPostsPropsType = {
  posts: PostType[];
  addPost: (newPost: string | undefined) => void;
};
export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  const postList = props.posts.map((post) => (
    <Post key={post.id} post={post} />
  ));

  //creating reference to the textarea
  const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();
  //adding post func
  const addPostHandler = () => {
    props.addPost(newPostElement.current?.value);
  };
  //textarea value catching func
  const postTypeInHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.currentTarget.value);
  };

  return (
    <div className={styles.myposts_block}>
      <h3> My Posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            name="message_text"
            cols={30}
            rows={6}
            onChange={postTypeInHandler}
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
