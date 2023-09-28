import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { AppRootStateType } from './redux/redux-store';
import { DialoguesContainer } from './components/Dialogues/DialoguesContainer';
import { ActionTypes } from './types/action-types';

type AppPropsType = {
  state: AppRootStateType;
  dispatch: (action: ActionTypes) => void;
};

const App: React.FC<AppPropsType> = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/profile"
          element={
            <div className="app_content_wrapper">
              <Profile
                profilePage={props.state.profiles}
                dispatch={props.dispatch}
              />
            </div>
          }
        />
        <Route
          path="/dialogues/*"
          element={
            <div className="app_content_wrapper">
              <DialoguesContainer
                messagePage={props.state.dialogues}
                dispatch={props.dispatch}
                newMessageText={props.state.dialogues.newMessageText}
              />
            </div>
          }
        />
        <Route
          path="/news"
          element={
            <div className="app_content_wrapper">
              <News />
            </div>
          }
        />
        <Route
          path="/music"
          element={
            <div className="app_content_wrapper">
              <Music />
            </div>
          }
        />
        <Route
          path="/settings"
          element={
            <div className="app_content_wrapper">
              <Settings />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
