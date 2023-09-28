import React from 'react';

import { MyPosts } from './MyPosts';
import { PostType } from '../../../types/store-types';
import { ActionTypes } from '../../../types/action-types';
import { addPostAC, updatePostAC } from '../../../redux/profile-reducer';

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
