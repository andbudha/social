import React from 'react';
import { connect } from 'react-redux';
import { Header } from './Header';
import { AppDispatchType, AppRootStateType } from '../../redux/redux-store';
import { logoutTC, setAuthDataTC } from '../../redux/auth-reducer';
import { ResetAuthResponseDataType } from '../../types/store-types';

class HeaderAPIContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    this.props.setAuthDataThunk();
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
  isAuthorised: boolean;
};
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    id: state.authorisation.auhData.id,
    email: state.authorisation.auhData.email,
    login: state.authorisation.auhData.login,
    isAuthorised: state.authorisation.isAuthorised,
  };
};

type mapDispatchToProps = {
  setAuthDataThunk: () => void;
  logoutThunk: () => void;
};
const mapDispatchToProps = (dispatch: AppDispatchType): mapDispatchToProps => {
  return {
    setAuthDataThunk: () => {
      dispatch(setAuthDataTC());
    },
    logoutThunk: () => {
      dispatch(logoutTC());
    },
  };
};

export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToProps;
export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderAPIContainer);
