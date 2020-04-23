import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, { addPost, updateNewPostText, addMessage, updateNewMessageText, subscribe } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

let renderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} 
      addPost={addPost} 
      addMessage={addMessage} 
      updateNewPostText={updateNewPostText}
      updateNewMessageText={updateNewMessageText} /> </BrowserRouter>, document.getElementById('root')
  );
}

renderEntireTree(state);

subscribe(renderEntireTree);

serviceWorker.unregister();
