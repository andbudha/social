import React from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { AppDispatchType, AppRootStateType } from '../../redux/redux-store';
import { UserProfileType } from '../../types/store-types';
import { setUserProfileTC } from '../../redux/profile-reducer';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';

export class ProfileAPIContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    const userProfileID = this.props.match.params.userID || '27941';
    this.props.setUserProfileThunk(userProfileID);
  }
  render() {
    if (!this.props.isAuthorised) {
      return <Redirect to={'/login'} />;
    }
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
};
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    userProfile: state.profiles.userProfile,
    isAuthorised: state.authorisation.isAuthorised,
  };
};

type mapDispatchToPropsType = {
  setUserProfileThunk: (userProfileID: string) => void;
};
const mapDispatchToProps = (
  dispatch: AppDispatchType
): mapDispatchToPropsType => {
  return {
    setUserProfileThunk: (userProfileID: string) => {
      dispatch(setUserProfileTC(userProfileID));
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
