import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import { UserType } from '../../types/store-types';
import { Dispatch } from 'redux';
import {
  fetchDataAC,
  followUserAC,
  isFollowingToggleAC,
  selectUserPageAC,
  setUsersAC,
  unfollowUserAC,
} from '../../redux/users-reducer';
import React from 'react';
import { Users } from './Users';
import { Loader } from '../common/Loader/Loader';
import { usersAPI } from '../../rest-api/rest_api';

export class UsersAPIContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    this.props.fetchData(true);
    usersAPI
      .getUsers(this.props.selectedPage, this.props.usersPerPage)
      .then((data) => {
        this.props.fetchData(false);
        this.props.setUsers(data);
      });
  }

  selectUserPageHandler = (page: number) => {
    this.props.selectUserPage(page);
    this.props.fetchData(true);
    usersAPI.accessUserPage(page, this.props.usersPerPage).then((data) => {
      this.props.fetchData(false);
      this.props.setUsers(data);
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
            isFollowingToggle={this.props.isFollowingToggle}
            followingBTNToggle={this.props.followingBTNToggle}
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
  followingBTNToggle: number[];
};
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    users: state.users.users,
    usersPerPage: state.users.usersPerPage,
    amountOfUsers: state.users.amountOfUsers,
    selectedPage: state.users.selectedPage,
    isFetchingData: state.users.isFetchingData,
    followingBTNToggle: state.users.followingBTNToggle,
  };
};

type mapDispatchToPropsType = {
  setUsers: (users: UserType[]) => void;
  followUser: (userID: number) => void;
  unfollowUser: (userID: number) => void;
  selectUserPage: (page: number) => void;
  fetchData: (isFetchingData: boolean) => void;
  isFollowingToggle: (userID: number, btnStatus: boolean) => void;
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
    isFollowingToggle: (userID: number, btnStatus: boolean) => {
      dispatch(isFollowingToggleAC(userID, btnStatus));
    },
  };
};

export type UsersContainerPropsType = mapStateToPropsType &
  mapDispatchToPropsType;
export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIContainer);
