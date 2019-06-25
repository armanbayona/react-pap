import React from 'react';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import Posts from './components/Posts'

import './App.css';
import axios from 'axios';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <CreatePost />
        <Posts />
        <Posts text="f"/>
       
      </div>
      <div class="fade-overlay"></div>
    </React.Fragment>
  );
}

export default App;
