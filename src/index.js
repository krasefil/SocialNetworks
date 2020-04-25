import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import { BrowserRouter } from 'react-router-dom';

let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} 
      addPost={store.addPost.bind(store)} 
      addMessage={store.addMessage.bind(store)} 
      updateNewPostText={store.updateNewPostText.bind(store)}
      updateNewMessageText={store.updateNewMessageText.bind(store)} /> </BrowserRouter>, document.getElementById('root')
  );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

serviceWorker.unregister();
