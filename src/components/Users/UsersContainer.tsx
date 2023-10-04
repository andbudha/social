import { connect } from 'react-redux';

import { AppRootStateType } from '../../redux/redux-store';
import { UserType } from '../../types/store-types';
import { Dispatch } from 'redux';
import {
  fetchDataAC,
  followUserAC,
  selectUserPageAC,
  setUsersAC,
  unfollowUserAC,
} from '../../redux/users-reducer';
import React from 'react';
import axios from 'axios';
import { Users } from './Users';
import { Loader } from '../common/Loader/Loader';

export class UsersAPIContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    this.props.fetchData(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.usersPerPage}`
      )
      .then((response) => {
        this.props.fetchData(false);
        this.props.setUsers(response.data.items);
      });
  }

  selectUserPageHandler = (page: number) => {
    this.props.selectUserPage(page);
    this.props.fetchData(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPerPage}`
      )
      .then((response) => {
        this.props.fetchData(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    const amountOfPages = Math.ceil(
      this.props.amountOfUsers / this.props.usersPerPage
    );

    const pages: number[] = [];

    for (let i = 1; i <= amountOfPages; i++) {
      pages.push(i);
    }

    return (
      <div>
        {this.props.isFetchingData ? (
          <Loader />
        ) : (
          <Users
            pages={pages}
            selectedPage={this.props.selectedPage}
            users={this.props.users}
            selectUserPageHandler={this.selectUserPageHandler}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
          />
        )}
      </div>
    );
  }
}

type mapStateToPropsType = {
  users: UserType[];
  usersPerPage: number;
  amountOfUsers: number;
  selectedPage: number;
  isFetchingData: boolean;
};
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    users: state.users.users,
    usersPerPage: state.users.usersPerPage,
    amountOfUsers: state.users.amountOfUsers,
    selectedPage: state.users.selectedPage,
    isFetchingData: state.users.isFetchingData,
  };
};

type mapDispatchToPropsType = {
  setUsers: (users: UserType[]) => void;
  followUser: (userID: number) => void;
  unfollowUser: (userID: number) => void;
  selectUserPage: (page: number) => void;
  fetchData: (isFetchingData: boolean) => void;
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
    fetchData: (isFetchingData: boolean) => {
      dispatch(fetchDataAC(isFetchingData));
    },
  };
};

export type UsersContainerPropsType = mapStateToPropsType &
  mapDispatchToPropsType;
export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIContainer);
