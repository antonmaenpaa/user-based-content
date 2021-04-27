import React, { Component } from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userPostId: "",
      databaseId: "",
      rightUser: "",
    }
  }
 
  
  async componentDidMount() {
    this.getUserFromLocalStorage();
    await this.getUserFromDatabase();
    this.findTheRightUser();
  }
  
  getUserFromLocalStorage() {
    const userPostId = JSON.parse(localStorage.getItem('User'))
    this.setState({
      userPostId: userPostId
    })
  }

  async getUserFromDatabase(){
        try {
      let body;
      const response = await fetch("/users", {
        method: "GET",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      this.setState({
        databaseId: data
      });
    } catch (e) {
      console.log("error");
    }
  }

  findTheRightUser(){
    const findUser = this.state.databaseId
    const postId = this.state.userPostId

    const correctUser = findUser.find((user) => (user._id === postId))
    
    this.setState({
      rightUser: correctUser
    })


  }


  render() {

    return (
      <div style={rootStyle}>
        {/* hide buttons when wrong user inlogged 
          and show only logged in users posts */}
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
