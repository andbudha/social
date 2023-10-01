import { MyPosts } from './MyPosts';
import { PostType } from '../../../types/store-types';
import { addPostAC, updatePostAC } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../../redux/redux-store';
import { Dispatch } from 'redux';

type mapStateToPropsType = {
  posts: PostType[];
  newPostText: string;
};
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    posts: state.profiles.posts,
    newPostText: state.profiles.newPostText,
  };
};

type MapDispatchPropsType = {
  addPost: () => void;
  updatePost: (postValue: string) => void;
};

export type MyPostsContainerPropsType = MapDispatchPropsType &
  mapStateToPropsType;

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    addPost: () => {
      dispatch(addPostAC());
    },
    updatePost: (postValue: string) => {
      dispatch(updatePostAC(postValue));
    },
  };
};
export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
