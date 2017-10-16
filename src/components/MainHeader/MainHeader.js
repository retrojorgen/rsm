import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './MainHeader.css';

export default class MainHeader extends Component {
  render() {
    return (
      <nav className="MainHeader">
          <h1 className="logo"></h1>
          <ul>
              <li><NavLink to="/" activeClassName="active" exact={ true }>Forside</NavLink></li>
              <li><NavLink to="/about" activeClassName="active">Om Retrospillmessen</NavLink></li>
              <li><NavLink to="/rent" activeClassName="active">Leie stand</NavLink></li>
              <li><NavLink to="/rent" activeClassName="active">VIP Gjester</NavLink></li>
              <li><NavLink to="/rent" activeClassName="active">Timeplan</NavLink></li>
              <li><NavLink to="/rent" activeClassName="active">Praktisk info</NavLink></li>
              <li><NavLink to="/rent" activeClassName="active">Billetter</NavLink></li>
          </ul>
      </nav>
    );
  }
}
