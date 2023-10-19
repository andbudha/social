import React from 'react';
import { connect } from 'react-redux';
import { Header } from './Header';
import { AppDispatchType, AppRootStateType } from '../../redux/redux-store';
import { logoutTC, setAuthDataTC } from '../../redux/auth-reducer';

class HeaderAPIContainer extends React.Component<HeaderContainerPropsType> {
  render() {
    return (
      <>
        <Header {...this.props} />
      </>
    );
  }
}

type mapStateToPropsType = {
  isAuthorised: boolean;
};
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
    isAuthorised: state.authorisation.isAuthorised,
  };
};

type mapDispatchToProps = {
  logoutThunk: () => void;
};
const mapDispatchToProps = (dispatch: AppDispatchType): mapDispatchToProps => {
  return {
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

// class HeaderAPIContainer extends React.Component<HeaderContainerPropsType> {
//   componentDidMount() {
//     this.props.setAuthDataThunk();
//   }
//   render() {
//     return (
//       <>
//         <Header {...this.props} />
//       </>
//     );
//   }
// }

// type mapStateToPropsType = {
//   id: number | null;
//   email: string | null;
//   login: string | null;
//   isAuthorised: boolean;
// };
// const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
//   return {
//     id: state.authorisation.authData.id,
//     email: state.authorisation.authData.email,
//     login: state.authorisation.authData.login,
//     isAuthorised: state.authorisation.isAuthorised,
//   };
// };

// type mapDispatchToProps = {
//   setAuthDataThunk: () => void;
//   logoutThunk: () => void;
// };
// const mapDispatchToProps = (dispatch: AppDispatchType): mapDispatchToProps => {
//   return {
//     setAuthDataThunk: () => {
//       dispatch(setAuthDataTC());
//     },
//     logoutThunk: () => {
//       dispatch(logoutTC());
//     },
//   };
// };

// export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToProps;
// export const HeaderContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(HeaderAPIContainer);
