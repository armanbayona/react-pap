import React, { Component } from 'react';

class CreatePost extends Component {

  render() { 
    return (  
      <div class="compose">
        <textarea name="" id="" cols="30" rows="10" placeholder="Write your story as random person"></textarea>
        <button class="post-now">POST</button>
      </div>  
    );
  }
}
 
export default CreatePost;
