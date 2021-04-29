import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div style={rootStyle}>
        <Link style={linkStyle} to="/">
          <h2>Blogposts</h2>
        </Link>
        <h2 style={{color: "white"}}>{this.props.user}</h2>
  
        {this.props.loggedInUser === true ? (
          <Link style={linkStyle} to="/">
            <h2 onClick={this.props.logOut}>Logout</h2>
          </Link>
        ) : (
          <Link style={linkStyle} to="/login">
            <h2>Login</h2>
          </Link>
        )}
      </div>
    );
  }
}

const rootStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 2rem',
    background: 'black',
    position: 'sticky',
    left: 0,
    right: 0,
    top: 0,
};

const linkStyle = {
    textDecoration: 'none',
    color: 'white',
};

export default Header;
