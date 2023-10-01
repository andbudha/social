import { connect } from 'react-redux';
import { Users } from './Users';
import { AppRootStateType } from '../../redux/redux-store';
import { UserType } from '../../types/store-types';
import { Dispatch } from 'redux';
import {
  followUserAC,
  setUsersAC,
  unfollowUserAC,
} from '../../redux/users-reducer';

type mapStateToPropsType = {
  users: UserType[];
};
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return { users: state.users.users };
};

type mapDispatchToPropsType = {
  setUsers: (users: UserType[]) => void;
  followUser: (userID: number) => void;
  unfollowUser: (userID: number) => void;
};
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    setUsers: (users: UserType[]) => {
      dispatch(setUsersAC(users));
    },
    followUser: (userID: number) => {
      dispatch(followUserAC(userID));
    },
    unfollowUser: (userID: number) => {
      dispatch(unfollowUserAC(userID));
    },
  };
};

export type UsersContainerPropsType = mapStateToPropsType &
  mapDispatchToPropsType;
export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
