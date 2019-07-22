import React, { Component } from 'react';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newpost: ''
    }
  }

  newPost = (e) => { 
    this.setState({ [e.target.name]: e.target.value});
  }

  submitPost = (e) => {
    e.preventDefault();
    this.props.addPost(this.state.newpost);
    this.setState({ newposts: '' });
  }

  render() { 
    return (  
      <form className="compose">
        <textarea name="newpost" id="" cols="30" rows="10" placeholder="Write your story as random person" value={this.state.newpost} onChange={this.newPost}></textarea>
        <input type="submit" onClick={this.submitPost} className="post-now" value="POST" />
      </form>  
    );
  }
}
 
export default CreatePost;
