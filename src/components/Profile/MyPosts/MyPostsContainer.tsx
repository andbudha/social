import { MyPosts } from './MyPosts';
import { StateType } from '../../../types/store-types';
import { addPostAC, updatePostAC } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import { ActionTypes } from '../../../types/action-types';

const mapStateToProps = (state: StateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
  return {
    addPost: () => {
      dispatch(addPostAC());
    },
    updatePost: (postValue: string) => {
      dispatch(updatePostAC(postValue));
    },
  };
};
export const connectMyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
//OLD CODE

// import React from 'react';

// import { MyPosts } from './MyPosts';
// import { PostType } from '../../../types/store-types';
// import { ActionTypes } from '../../../types/action-types';
// import { addPostAC, updatePostAC } from '../../../redux/profile-reducer';

// type MyPostsCotainerPropsType = {
//   posts: PostType[];
//   dispatch: (action: ActionTypes) => void;
//   newPostText: string;
// };
// export const MyPostsContainer: React.FC<MyPostsCotainerPropsType> = (props) => {
//   //adding post func
//   const addPost = () => {
//     props.dispatch(addPostAC());
//   };
//   //textarea value catching func
//   const updatePostValue = (postValue: string) => {
//     props.dispatch(updatePostAC(postValue));
//   };

//   return (
//     <div>
//       <MyPosts
//         addPost={addPost}
//         updatePostValue={updatePostValue}
//         posts={props.posts}
//         newPostText={props.newPostText}
//       />
//     </div>
//   );
// };
