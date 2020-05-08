import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  return (<BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <DialogsContainer store={props.store} dispatch={props.dispatch} />} />
        <Route path='/profile' render={() => <Profile store={props.store} dispatch={props.dispatch}/>} />
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
