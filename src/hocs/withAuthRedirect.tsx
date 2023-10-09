import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppRootStateType } from '../redux/redux-store';
import { ComponentType } from 'react';

type mapStateToProps = {
  isAuthorised: boolean;
};
const mapStateToProps = (state: AppRootStateType): mapStateToProps => {
  return {
    isAuthorised: state.authorisation.isAuthorised,
  };
};
export function withAuthRedirect<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: mapStateToProps) => {
    let { isAuthorised, ...restProps } = props;
    if (!isAuthorised) {
      return <Redirect to={'/login'} />;
    }

    return <Component {...(restProps as T)} />;
  };

  let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);

  return ConnectedRedirectComponent;
}
