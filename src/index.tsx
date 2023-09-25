import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { addPost, state, subscribe, updatePostText } from './redux/state';

const renderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updatePostText={updatePostText} />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

renderEntireTree();

subscribe(renderEntireTree);
