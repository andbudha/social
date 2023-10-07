import React from 'react';
import { connect } from 'react-redux';
import { Header } from './Header';
import { Dispatch } from 'redux';
import { AppRootStateType } from '../../redux/redux-store';
import { setAuthDataAC } from '../../redux/auth-reducer';
import { AuthReducerInitialState } from '../../types/store-types';
class HeaderAPIContainer extends React.Component {
  render() {
    return (
      <>
        <Header />
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
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setAuthData: (authData: AuthReducerInitialState) => {
      dispatch(setAuthDataAC(authData));
    },
  };
};

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderAPIContainer);
