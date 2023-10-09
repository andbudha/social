import { Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { DialogueContainer } from './components/Dialogues/DialoguesContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import { ProfileContainer } from './components/Profile/ProfileContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { Login } from './components/Login/Login';

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />

      <Route
        path="/profile/:userID?"
        render={() => (
          <div className="app_content_wrapper">
            <ProfileContainer />
          </div>
        )}
      />
      <Route
        path="/login"
        render={() => (
          <div className="app_content_wrapper">
            <Login />
          </div>
        )}
      />
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
