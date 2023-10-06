import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { DialogueContainer } from './components/Dialogues/DialoguesContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import { ProfileContainer } from './components/Profile/ProfileContainer';

type AppPropsType = {};

const App: React.FC<AppPropsType> = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Switch>
        <Route path="/profile">
          <div className="app_content_wrapper">
            <ProfileContainer />
          </div>
        </Route>
        <Route path="/dialogues">
          <div className="app_content_wrapper">
            <DialogueContainer />
          </div>
        </Route>
        <Route path="/users">
          <div className="app_content_wrapper">
            <UsersContainer />
          </div>
        </Route>
        <Route path="/news">
          <div className="app_content_wrapper">
            <News />
          </div>
        </Route>
        <Route path="/music">
          <div className="app_content_wrapper">
            <Music />
          </div>
        </Route>
        <Route path="/settings">
          <div className="app_content_wrapper">
            <Settings />
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
