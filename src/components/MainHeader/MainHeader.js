import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './MainHeader.css';

export default class MainHeader extends Component {
  render() {
    return (
      <nav className="MainHeader">
          <ul>
              <li><NavLink to="/" activeClassName="active" exact={ true }>Forside</NavLink></li>
              <li><NavLink to="/about" activeClassName="active">Om</NavLink></li>
          </ul>
      </nav>
    );
  }
}
