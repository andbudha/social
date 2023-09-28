import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { store } from './redux/redux-store';
import { Provider } from 'react-redux';

const renderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App state={store.getState()} dispatch={store.dispatch} />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

renderEntireTree();

store.subscribe(renderEntireTree);
