import React, { ComponentType } from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import axios from 'axios';
import { AppRootStateType } from '../../redux/redux-store';
import { Dispatch } from 'redux';
import { UserProfileType } from '../../types/store-types';
import { setUserProfileAC } from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { withRouter } from '../../hocs/withRouter';

export class ProfileAPIContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let profileID = this.props.params;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${profileID}`)
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
  WithRouterProps;
export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
  params: Record<string, string>;
  navigate: ReturnType<typeof useNavigate>;
}

export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileAPIContainer));
