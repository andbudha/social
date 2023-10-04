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
import React from 'react';
import axios from 'axios';
import { Users } from './Users';

export class UsersAPIContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.usersPerPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        console.log(response.data);
      });
  }

  selectUserPageHandler = (page: number) => {
    this.props.selectUserPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPerPage}`
      )
      .then((response) => {
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
        <Users
          pages={pages}
          selectedPage={this.props.selectedPage}
          users={this.props.users}
          selectUserPageHandler={this.selectUserPageHandler}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
        />
      </div>
    );
  }
}

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
