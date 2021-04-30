import React from "react";
import { Link } from 'react-router-dom';


function Header(props) {
  return (
    <div style={rootStyle}>
      <div style={blogContainer}>
         <Link style={blogPost} to="/">
            <span style={{fontSize: "1rem"}}>Blogposts</span>
         </Link>
         <div>
         <span style={{ fontSize: "1rem", marginRight: "0.5rem"}}>{props.user}</span>
      {props.loggedInUser === true ? (
         <Link style={blogPost} to="/">
            <span style={{ fontSize: "1rem" }} onClick={props.logOut}>Logout</span>
        </Link>
      ) : (
        <Link style={blogPost} to="/login">
          <span style={{ fontSize: "1rem" }}>Login</span>
        </Link>
      )}
      </div>
    </div>
    </div>
  );
}

const rootStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "0 2rem",
  background: "saddlebrown",
  left: 0,
  right: 0,
  top: 0,
  position: "relative",
  height: "4rem"

};

const blogContainer = {
  display: "flex",
  width: "90%",
  justifyContent: "space-between",
  alignItems: "center"
}

const blogPost = {
  textDecoration: "none",
  color: "white",
  fontFamily: "Lucida Console, Courier New, monospace",
  fontSize: "2rem",
  position: "relative",

};
export default Header;
