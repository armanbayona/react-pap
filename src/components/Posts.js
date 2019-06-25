import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      text: "\"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.\" ― Albert Einstein",
    }
  }
  render() { 
    return (  
      <div className="feed">
        <div id="0" className="post">
          <div className="post-head">
            <img className="user" src="img/arman.jpg" alt="user" />
            <div>
              <span className="fullname"><fname>arman</fname> <lname>bayona</lname></span>
              <span className="username">@armanbayona</span>
            </div>
            <button className="more-btn"><i className="material-icons">more_vert</i></button>
        </div>
        <div className="post-body">
        <p>{this.state.text}<br />
        </p>

        <img />
        </div>
        <div className="post-foot">
        <button id="0" className="post-btn likes"><i className="material-icons">thumb_up</i><span className="likes"> 0</span></button>
        <button className="post-btn comment"><i className="material-icons">comment</i><span className="comment"> 0</span></button>
        <button className="post-btn share"><i className="material-icons">share</i><span className="share"> 0</span></button>
        </div>
        </div>
      </div>
    );
  }
}
 
export default Posts;
