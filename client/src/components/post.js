import React, { Component } from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";
// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

    return (

      <div style={rootStyle}>

            <MdModeEdit
              style={{ fontSize: "1.5rem", marginRight: "1rem", cursor: "pointer" }}
              onClick={this.props.editPost}
            />
            <MdDelete
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
              onClick={this.props.deletePost}
            />

        <h4 type="title">{this.props.title}</h4>
        <p type="text">{this.props.text}</p>
        <p>{this.props.creator}</p>
      </div>
    );
  }

  }

const rootStyle = {
  backgroundColor: "lightgrey",
  margin: ".5rem",
  padding: ".5rem 2rem",
  textAlign: "center",
  webkitboxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
  MozBoxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
  boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
};

export default Post;
