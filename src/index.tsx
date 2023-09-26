import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { store } from './redux/state';

const renderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
        // addPost={store.addPost.bind(store)}
        // updatePostText={store.updatePostText.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

renderEntireTree();

store.subscribe(renderEntireTree);
