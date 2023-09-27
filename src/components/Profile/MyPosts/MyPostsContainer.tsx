import React from 'react';
import {
  ActionTypes,
  PostType,
  addPostAC,
  updatePostAC,
} from '../../../redux/store';
import { MyPosts } from './MyPosts';

type MyPostsCotainerPropsType = {
  posts: PostType[];
  dispatch: (action: ActionTypes) => void;
  newPostText: string;
};
export const MyPostsContainer: React.FC<MyPostsCotainerPropsType> = (props) => {
  //adding post func
  const addPost = () => {
    props.dispatch(addPostAC());
  };
  //textarea value catching func
  const updatePostValue = (postValue: string) => {
    props.dispatch(updatePostAC(postValue));
  };

  return (
    <div>
      <MyPosts
        addPost={addPost}
        updatePostValue={updatePostValue}
        posts={props.posts}
        newPostText={props.newPostText}
      />
    </div>
  );
};
