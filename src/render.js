import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPost, updateNewPostText, addMessage, updateNewMessageText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';


export let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} 
      addPost={addPost} 
      addMessage={addMessage} 
      updateNewPostText={updateNewPostText}
      updateNewMessageText={updateNewMessageText} /> </BrowserRouter>, document.getElementById('root')
  );
}


serviceWorker.unregister();
