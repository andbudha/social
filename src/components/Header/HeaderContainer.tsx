import React from 'react';
import { connect } from 'react-redux';
import { Header } from './Header';
import { Dispatch } from 'redux';
import { AppRootStateType } from '../../redux/redux-store';
import { setAuthDataAC } from '../../redux/auth-reducer';
import { AuthReducerInitialState } from '../../types/store-types';
import axios from 'axios';
import { authorisationAPI } from '../../rest-api/rest_api';

class HeaderAPIContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    authorisationAPI.getAuthData().then((data) => {
      if (data.resulCode === 0) {
        this.props.setAuthData(data.data);
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
