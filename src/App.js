import React, { Component } from 'react';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import Posts from './components/Posts'

import './App.css';
import uuid from 'uuid'
import axios from 'axios';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = { 
      posts : [
        {
          id: uuid.v4(),
          text: "Welcome Aboard! Click dive to view new posts! Scroll down to generate random posts!",
          firstname: "Arman",
          lastname: "Bayona",
          username: "@armanbayona",
          userimg: "",
          img: ""
        }
      ]
    }
  }

  addPost = (text) => {
    axios.get('https://randomuser.me/api')
    .then(res => {
      console.log(res.data.results[0].name.first)
      //this.addPost(res.data.slip.advice)
      const newPost = {
        id: uuid.v4(),
        text,
        firstname: res.data.results[0].name.first,
        lastname: res.data.results[0].name.last,
        username: res.data.results[0].name.email,
        userimg: res.data.results[0].picture.thumbnail,
        img: ""
      }
      this.setState({
        posts: [newPost, ...this.state.posts]
      });
    })

    
  }


  
  shoot = () => {
   
    const rand_text = 2//Math.floor(Math.random() * 3);
    switch(rand_text){
      case 0:
        axios.get('https://api.adviceslip.com/advice')
        .then(res => {
          console.log(res.data.slip.advice)
          this.addPost(res.data.slip.advice)
        })
        break;
      case 1:
        axios.get('https://official-joke-api.appspot.com/jokes/random')
        .then(res => {
          console.log(res.data.setup)
          this.addPost(res.data.setup)
        })
        break;
      case 2:
        axios.get('https://www.boredapi.com/api/activity')
        .then(res => {
          console.log(res.data.activity)
          this.addPost(res.data.activity)
        })
        break;
      default:
    }
    //console.log(this.state.posts);
  }

  render(){
    return (
      <React.Fragment>
        <Header shoot={this.shoot} />
        <div className="container">
          <CreatePost addPost={this.addPost}/>
          <Posts posts={this.state.posts} />
        </div>
        <div className="fade-overlay"></div>
      </React.Fragment>
    );
  }
  
}

export default App
