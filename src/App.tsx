import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dialogues } from './components/Dialogues/Dialogues';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { StateType } from './redux/state';

type AppPropsType = {
  state: StateType;
  addPost: (newPost: string | undefined) => void;
  updatePostText: (newText: string) => void;
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
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updatePostText={props.updatePostText}
              />
            </div>
          }
        />
        <Route
          path="/dialogues/*"
          element={
            <div className="app_content_wrapper">
              <Dialogues messagePage={props.state.messagePage} />
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
