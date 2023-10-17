import React from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { AppDispatchType, AppRootStateType } from '../../redux/redux-store';
import { UserProfileType } from '../../types/store-types';
import {
  getProfileStatusTC,
  setProfileStatusTC,
  setUserProfileTC,
} from '../../redux/profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { compose } from 'redux';

export class ProfileAPIContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let userProfileID = this.props.match.params.userID;
    if (!userProfileID) {
      userProfileID = this.props.loggedinUserID.toString();
    }
    //my id = '27941'
    this.props.setUserProfileThunk(userProfileID);
    this.props.getProfileStatusThunk(userProfileID);
    console.log(this.props.loggedinUserID);
  }
  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}
type mapStateToPropsType = {
  userProfile: UserProfileType | null;
  isAuthorised: boolean;
  profileStatus: string;
  isUpdatingStatus: boolean;
  loggedinUserID: number;
};
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    userProfile: state.profiles.userProfile,
    isAuthorised: state.authorisation.isAuthorised,
    profileStatus: state.profiles.profileStatus,
    isUpdatingStatus: state.profiles.isUpdatingStatus,
    loggedinUserID: state.authorisation.auhData.id,
  };
};

type mapDispatchToPropsType = {
  setUserProfileThunk: (userProfileID: string) => void;
  getProfileStatusThunk: (userID: string) => void;
  setProfileStatusThunk: (status: string) => void;
};
const mapDispatchToProps = (
  dispatch: AppDispatchType
): mapDispatchToPropsType => {
  return {
    setUserProfileThunk: (userProfileID: string) => {
      dispatch(setUserProfileTC(userProfileID));
    },
    getProfileStatusThunk: (userID: string) => {
      dispatch(getProfileStatusTC(userID));
    },
    setProfileStatusThunk: (status: string) => {
      dispatch(setProfileStatusTC(status));
    },
  };
};

export type ProfileContainerPropsType = mapStateToPropsType &
  mapDispatchToPropsType &
  RouteComponentProps<PathParamsType>;

type PathParamsType = {
  userID: string;
};
export const ProfileContainer = compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileAPIContainer);
