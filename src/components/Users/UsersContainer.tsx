import { connect } from 'react-redux';
import { AppDispatchType, AppRootStateType } from '../../redux/redux-store';
import { UserType } from '../../types/store-types';

import {
  followUserTC,
  isFollowingToggleAC,
  selectUserPageAC,
  selectUserPageTC,
  setUsersTC,
  unfollowUserTC,
} from '../../redux/users-reducer';
import React from 'react';
import { Users } from './Users';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { Loader } from '../common/Loaders/Loader/Loader';
import {
  getAmountOfUsers,
  getFollowingBTNToggle,
  getIsAuthorised,
  getIsFetchingData,
  getSelectedPage,
  getUsersPerPageSelector,
  getUsersSelector,
} from '../../redux/users-selectors';

export class UsersAPIContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    this.props.setUsersThunk(this.props.selectedPage, this.props.usersPerPage);
  }

  selectUserPageHandler = (page: number) => {
    this.props.selectUserPageThunk(page, this.props.usersPerPage);
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
            followUserThunk={this.props.followUserThunk}
            unfollowUserThunk={this.props.unfollowUserThunk}
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
  isAuthorised: boolean;
};

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    users: getUsersSelector(state),
    usersPerPage: getUsersPerPageSelector(state),
    amountOfUsers: getAmountOfUsers(state),
    selectedPage: getSelectedPage(state),
    isFetchingData: getIsFetchingData(state),
    followingBTNToggle: getFollowingBTNToggle(state),
    isAuthorised: getIsAuthorised(state),
  };
};

type mapDispatchToPropsType = {
  setUsersThunk: (selectedPage: number, usersPerPage: number) => void;
  selectUserPageThunk: (page: number, usersPerPage: number) => void;
  followUserThunk: (userID: number) => void;
  unfollowUserThunk: (userID: number) => void;
  selectUserPage: (page: number) => void;
  isFollowingToggle: (userID: number, btnStatus: boolean) => void;
};
const mapDispatchToProps = (
  dispatch: AppDispatchType
): mapDispatchToPropsType => {
  return {
    setUsersThunk: (selectedPage: number, usersPerPage: number) => {
      dispatch(setUsersTC(selectedPage, usersPerPage));
    },
    selectUserPageThunk: (page: number, usersPerPage: number) => {
      dispatch(selectUserPageTC(page, usersPerPage));
    },
    followUserThunk: (userID: number) => {
      dispatch(followUserTC(userID));
    },
    unfollowUserThunk: (userID: number) => {
      dispatch(unfollowUserTC(userID));
    },
    selectUserPage: (page: number) => {
      dispatch(selectUserPageAC(page));
    },
    isFollowingToggle: (userID: number, btnStatus: boolean) => {
      dispatch(isFollowingToggleAC(userID, btnStatus));
    },
  };
};

export type UsersContainerPropsType = mapStateToPropsType &
  mapDispatchToPropsType;

// export const UsersContainer = compose<React.ComponentType>(
//   connect(mapStateToProps, mapDispatchToProps),
//   withAuthRedirect
// )(UsersAPIContainer);

export const UsersContainer = withAuthRedirect(
  connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)
);
