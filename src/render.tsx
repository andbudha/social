import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { StateType, addPost, updatePostText } from './redux/state';

export const renderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updatePostText={updatePostText} />
    </BrowserRouter>,
    document.getElementById('root')
  );
};
