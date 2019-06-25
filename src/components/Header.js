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
           <a className="current" id="dive">Dive</a>
          </li>
        </ul>
      </div>
    );
  }
}
 
export default Header;