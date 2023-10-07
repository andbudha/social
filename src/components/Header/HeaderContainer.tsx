import React from 'react';
import { connect } from 'react-redux';
import { Header } from './Header';
import { Dispatch } from 'redux';
import { AppRootStateType } from '../../redux/redux-store';
import { setAuthDataAC } from '../../redux/auth-reducer';
import { AuthReducerInitialState } from '../../types/store-types';
import axios from 'axios';

class HeaderAPIContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount(): void {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.setAuthData(response.data.data);
        }
      });
  }
  render() {
    return (
      <>
        <Header {...this.props} />
      </>
    );
  }
}

type mapStateToPropsType = {
  id: number;
  email: string;
  login: string;
  isAuthorised?: boolean;
};
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    id: state.authorisation.id,
    email: state.authorisation.email,
    login: state.authorisation.login,
    isAuthorised: state.authorisation.isAuthorised,
  };
};

type mapDispatchToProps = {
  setAuthData: (authData: AuthReducerInitialState) => void;
};
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
  return {
    setAuthData: (authData: AuthReducerInitialState) => {
      dispatch(setAuthDataAC(authData));
    },
  };
};

export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToProps;
export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderAPIContainer);
