import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { LoginContainer } from './components/Login/Login';
import { AppRootStateType, useAppDispatch } from './redux/redux-store';
import { useEffect } from 'react';
import { setAuthDataTC } from './redux/auth-reducer';
import { useSelector } from 'react-redux';
import { Loader } from './components/common/Loaders/Loader/Loader';
import React from 'react';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { ErrorBar } from './components/ErrorBar/ErrorBar';

const ProfileContainer = React.lazy(() =>
  import('./components/Profile/ProfileContainer').then(
    ({ ProfileContainer }) => ({ default: ProfileContainer })
  )
);

const DialogueContainer = React.lazy(() =>
  import('./components/Dialogues/DialoguesContainer').then(
    ({ DialogueContainer }) => ({ default: DialogueContainer })
  )
);

const UsersContainer = React.lazy(() =>
  import('./components/Users/UsersContainer').then(({ UsersContainer }) => ({
    default: UsersContainer,
  }))
);

const App: React.FC = () => {
  const isInitialised = useSelector<AppRootStateType>(
    (state) => state.authorisation.isInitialised
  );
  const isAuthorised = useSelector<AppRootStateType, boolean>(
    (state) => state.authorisation.isAuthorised
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAuthDataTC());
  }, [isAuthorised]);

  if (!isInitialised) {
    return <Loader />;
  }

  if (!isAuthorised) {
    return <LoginContainer />;
  }
  return (
    <div className="app-wrapper">
      <ErrorBar />
      <HeaderContainer />
      <Navbar />
      <LoginContainer />
      <Switch>
        <Route
          path="/profile/:userID?"
          render={() => (
            <div className="app_content_wrapper">
              <React.Suspense fallback={<Loader />}>
                <ProfileContainer />
              </React.Suspense>
            </div>
          )}
        />
        <Route
          path="/dialogues"
          render={() => (
            <div className="app_content_wrapper">
              <React.Suspense fallback={<Loader />}>
                <DialogueContainer />
              </React.Suspense>
            </div>
          )}
        />
        <Route
          path="/users"
          render={() => (
            <div className="app_content_wrapper">
              <React.Suspense fallback={<Loader />}>
                <UsersContainer />
              </React.Suspense>
            </div>
          )}
        />
        <Route
          path="/news"
          render={() => (
            <div className="app_content_wrapper">
              <News />
            </div>
          )}
        />
        <Route
          path="/music"
          render={() => (
            <div className="app_content_wrapper">
              <Music />
            </div>
          )}
        />
        <Route
          path="/settings"
          render={() => (
            <div className="app_content_wrapper">
              <Settings />
            </div>
          )}
        />
        <Route
          path="*"
          render={() => (
            <div className="app_content_wrapper">
              <PageNotFound />
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
