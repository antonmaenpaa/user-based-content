import React, { Component } from "react";
import { Link } from 'react-router-dom';


function Header(props) {
  return (
    <div style={rootStyle}>
      {/* <img src={'../giraff.png'}  width={100} alt={"Giraff"}/> */}
      <div style={blogContainer}>
         <Link style={blogPost} to="/">
            <p>Blogposts</p>
         </Link>
      {props.loggedInUser === true ? (
         <Link style={loginLink} to="/">
            <h2 onClick={props.logOut}>Logout</h2>
        </Link>
      ) : (
        <Link style={loginLink} to="/login">
          <p>Login</p>
        </Link>
      )}
    </div>
    </div>
  );
}

const rootStyle = {
  // display: "sticky",
  // padding: "0 2rem",
  background: "saddlebrown",
  // left: 0,
  // right: 0,
  // top: 0,
  height: "15%",
  // position: "relative",

};

const blogContainer = {
  display: "inline-flex",
}

const blogPost = {
  textDecoration: "none",
  color: "white",
  fontFamily: "Lucida Console, Courier New, monospace",
  fontSize: "30px",
  position: "relative",

};

const loginLink = {
  textDecoration: "none",
  color: "white",
  fontFamily: "Lucida Console, Courier New, monospace",
  fontSize: "30px",
  vericalAlign: "right",

}



export default Header;
