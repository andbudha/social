import { Redirect, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { DialogueContainer } from './components/Dialogues/DialoguesContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import { ProfileContainer } from './components/Profile/ProfileContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { LoginContainer } from './components/Login/Login';
import { AppRootStateType, useAppDispatch } from './redux/redux-store';
import { useEffect } from 'react';
import { setAuthDataTC } from './redux/auth-reducer';
import { useSelector } from 'react-redux';
import { Loader } from './components/common/Loaders/Loader/Loader';

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
  }, []);

  if (!isInitialised) {
    return <Loader />;
  }

  if (!isAuthorised) {
    return <LoginContainer />;
  }
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <LoginContainer />

      <Route
        path="/profile/:userID?"
        render={() => (
          <div className="app_content_wrapper">
            <ProfileContainer />
          </div>
        )}
      />
      {/* <Route
        path="/login"
        render={() => (
          <div className="app_content_wrapper">
            <LoginContainer />
          </div>
        )}
      /> */}
      <Route
        path="/dialogues"
        render={() => (
          <div className="app_content_wrapper">
            <DialogueContainer />
          </div>
        )}
      />
      <Route
        path="/users"
        render={() => (
          <div className="app_content_wrapper">
            <UsersContainer />
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
    </div>
  );
};

export default App;
