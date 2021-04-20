import React from "react";
import { Link } from "react-router-dom"


function Header() {

    return (
        <div style={rootStyle}>
            <Link style={linkStyle} to="/">
                <h2>Blogposts</h2>
            </Link>
            <Link style={linkStyle} to="/login">
                <h2>Login</h2>
            </Link>
        </div>

    )
}

const rootStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 2rem",
    background: "black",
    position: "fixed",
    left: 0,
    right: 0,
    top: 0
}

const linkStyle = {
    textDecoration: "none",
    color: "white"
}

export default Header;

