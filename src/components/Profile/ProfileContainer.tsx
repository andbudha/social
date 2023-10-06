import React, { ComponentType } from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import axios from 'axios';
import { AppRootStateType } from '../../redux/redux-store';
import { Dispatch } from 'redux';
import { UserProfileType } from '../../types/store-types';
import { setUserProfileAC } from '../../redux/profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';

export class ProfileAPIContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    const profileUserID = this.props.match.params.userID || '27941';
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${profileUserID}`
      )
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
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
};
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    userProfile: state.profiles.userProfile,
  };
};

type mapDispatchToPropsType = {
  setUserProfile: (userProfile: UserProfileType) => void;
};
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    setUserProfile: (userProfile: UserProfileType) => {
      dispatch(setUserProfileAC(userProfile));
    },
  };
};

export type ProfileContainerPropsType = mapStateToPropsType &
  mapDispatchToPropsType &
  RouteComponentProps<PathParamsType>;

type PathParamsType = {
  userID: string;
};
const WithUrlPropsProfileAPIContainer = withRouter(ProfileAPIContainer);
export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlPropsProfileAPIContainer);
