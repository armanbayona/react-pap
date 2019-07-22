import React, { Component } from 'react';

class Header extends Component {
  render() { 
    return (  
      <div className="header">
        <ul className="navbar">
          <li className="logo"><h2>Sailboat</h2>
            <img src="img/boat-o.svg" alt="logo" />
          </li>
          <li>
           <button className="current" id="dive" onClick={this.props.shoot}>Dive</button>
          </li>
        </ul>
      </div>
    );
  }
}
 
export default Header;