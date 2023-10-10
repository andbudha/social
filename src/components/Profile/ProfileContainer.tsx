import React from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { AppDispatchType, AppRootStateType } from '../../redux/redux-store';
import { UserProfileType } from '../../types/store-types';
import { setUserProfileTC } from '../../redux/profile-reducer';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { compose } from 'redux';

export class ProfileAPIContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    const userProfileID = this.props.match.params.userID || '27941';
    this.props.setUserProfileThunk(userProfileID);
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
export const ProfileContainer = compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileAPIContainer);

// export const Profile_Container = withAuthRedirect(
//   withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileAPIContainer))
// );

// //const WithUrlPropsProfileAPIContainer = withRouter(ProfileAPIContainer);
// // export const ProfileContainer = withAuthRedirect(
// //   connect(mapStateToProps, mapDispatchToProps)(WithUrlPropsProfileAPIContainer)
// // );
