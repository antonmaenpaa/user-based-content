import React, { Component } from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";
import "../styling/post.css"

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
    
    }
  }

  render() {

    const userStorage = localStorage.getItem('user')
   
    return (
      <div className="rootStyle">
        {
          userStorage === this.props.name | this.props.admin === "admin" ? (
          <div className="icons">
            <MdModeEdit
              className="editIcon"
              onClick={this.props.editPost}
            />
            <MdDelete
              className="deleteIcon"
              onClick={this.props.deletePost}
            />
          </div>

          ) : (
            <></>
          )
        }
            <h4 className="title" type="title">{this.props.title}</h4>
            <div className="titleUnderline"></div>
            <p className="text" type="text">{this.props.text}</p>
            <p style={{ color: "lightgrey" }}>@{this.props.name}'s post</p>
      </div>
    );
  }
  }

export default Post;
