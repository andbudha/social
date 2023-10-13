import { MyPosts } from './MyPosts';
import { PostType } from '../../../types/store-types';
import { addPostAC } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../../redux/redux-store';
import { Dispatch } from 'redux';

type mapStateToPropsType = {
  posts: PostType[];
};
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    posts: state.profiles.posts,
  };
};

type MapDispatchPropsType = {
  addPost: (newPost: string) => void;
};

export type MyPostsContainerPropsType = MapDispatchPropsType &
  mapStateToPropsType;

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    addPost: (newPost: string) => {
      dispatch(addPostAC(newPost));
    },
  };
};
export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
