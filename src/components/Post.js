import React, { Component } from 'react'

class Post extends Component {
  render() {
    return (
      <div className="feed">
        <div id={this.props.post.id} className="post">
          <div className="post-head">
            <img className="user" src="img/arman.jpg" alt="user" />
            <div>
              <span className="fullname">{this.props.post.firstname} {this.props.post.lastname}</span>
              <span className="username">{this.props.post.username}</span>
            </div>
            <button className="more-btn"><i className="material-icons">more_vert</i></button>
        </div>
        <div className="post-body">
        <p>{this.props.post.text}<br />
        </p>

        <img src={this.props.post.img} alt={this.props.post.img}/>
        </div>
        <div className="post-foot">
        <button id="0" className="post-btn likes"><i className="material-icons">thumb_up</i><span className="likes"> 0</span></button>
        <button className="post-btn comment"><i className="material-icons">comment</i><span className="comment"> 0</span></button>
        <button className="post-btn share"><i className="material-icons">share</i><span className="share"> 0</span></button>
        </div>
        </div>
      </div>
    )
  }
}

export default Post
