import { connect } from 'react-redux';

import { AppRootStateType } from '../../redux/redux-store';
import { UserType } from '../../types/store-types';
import { Dispatch } from 'redux';
import {
  followUserAC,
  selectUserPageAC,
  setUsersAC,
  unfollowUserAC,
} from '../../redux/users-reducer';
import { UsersAPIContainer } from './UsersAPIContainer';

type mapStateToPropsType = {
  users: UserType[];
  usersPerPage: number;
  amountOfUsers: number;
  selectedPage: number;
};
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    users: state.users.users,
    usersPerPage: state.users.usersPerPage,
    amountOfUsers: state.users.amountOfUsers,
    selectedPage: state.users.selectedPage,
  };
};

type mapDispatchToPropsType = {
  setUsers: (users: UserType[]) => void;
  followUser: (userID: number) => void;
  unfollowUser: (userID: number) => void;
  selectUserPage: (page: number) => void;
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
    selectUserPage: (page: number) => {
      dispatch(selectUserPageAC(page));
    },
  };
};

export type UsersContainerPropsType = mapStateToPropsType &
  mapDispatchToPropsType;
export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIContainer);
