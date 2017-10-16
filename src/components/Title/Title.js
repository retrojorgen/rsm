import React, { Component } from 'react';
import './Title.css';

export default class Title extends Component {
    
  render() {
    let title = this.props.title;
    return (
        <div className="Title"><h1><span>{title}</span></h1></div>
    );
  }
}
