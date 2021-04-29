import Post from "./post";
import React, { Component } from "react";
// import Cookies from "js-cookie"

class MasterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      title: "",
      text: "",
      showEditBtn: false,
      userId: "",
      role: ""
    };
    this.deletePost = this.deletePost.bind(this);
    this.UpdateTitleFields = this.UpdateTitleFields.bind(this);
    this.UpdateTextFields = this.UpdateTextFields.bind(this);
    this.addNewPost = this.addNewPost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.savePost = this.savePost.bind(this);
  }

  async componentDidMount() {
    this.getAllPosts();

    const response = await fetch("/authenticated", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data)
    this.setState({
      role: data.role
    })
  }

  async UpdateTitleFields(e) {
    this.setState({
      title: e.target.value,
    });
  }

  async UpdateTextFields(e) {
    this.setState({
      text: e.target.value,
    });
  }

  // DELETE POST
  async deletePost(postId) {
    let body;

    const response = await fetch("/posts/" + postId, {
      method: "DELETE",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    await this.getAllPosts();
    return result;
  }

  // EDIT POST
  async editPost(postId, title, text) {
    this.setState({
      title: title,
      text: text,
      showEditBtn: true,
      userId: postId,
    });
  }

  // SAVE POST ON EDIT BUTTON
  async savePost() {
    let body = {
      title: this.state.title,
      text: this.state.text,
    };

    const response = await fetch("/posts/" + this.state.userId, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    await this.getAllPosts();
    this.setState({
      showEditBtn: false,
      title: "",
      text: "",
      userId: "",
    });
    return result;
  }

  // ADD NEW POST
  async addNewPost(e) {
    e.preventDefault();
    
    let body = {
      title: this.state.title,
      text: this.state.text,
    };
    
    const response = await fetch("/posts", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    await this.getAllPosts();
    this.setState({
      title: "",
      text: ""
    });

    return result;
  }

  // RENDER ALL POSTS
  async getAllPosts() {
    let body;
    const response = await fetch("/posts", {
      method: "GET",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    this.setState({
      posts: result,
    });
  }

  render() {
    // console.log(this.state.role)
    return (
      <div style={postContainer}>
        <div style={mainPostContainer}>
          {this.state.posts.map((post, index) => (
            <div key={index} style={{ width: "95%" }} data-id={post._id}>
              <Post
                posts={this.state.posts}
                key={post._id}
                title={post.title}
                text={post.text}
                name={post.user.email}
                admin={this.state.role}
                editPost={() => this.editPost(post._id, post.title, post.text)}
                deletePost={() => this.deletePost(post._id)}
              />
            </div>
          ))}
        </div>

        {this.props.loggedInUser === true && (
          <div style={formDiv}>
            <form style={form} action="" method="post">
              <label name="title">Title</label>
              <input
                name="title"
                id="title"
                placeholder="Title"
                onChange={this.UpdateTitleFields}
                value={this.state.title}
              ></input>
              <label name="text">Text</label>
              <textarea
                name="text"
                rows="4"
                cols="50"
                placeholder="What do you want to write about today?"
                id="text"
                onChange={this.UpdateTextFields}
                value={this.state.text}
              ></textarea>
              {this.state.showEditBtn && (
                <button type="button" onClick={this.savePost}>
                  Edit
                </button>
              )}
              {!this.state.showEditBtn && (
                <button type="button" onClick={this.addNewPost}>
                  Post
                </button>
              )}
            </form>
          </div>
        )}
      </div>
    );
  }
}

const formDiv = {
  width: "100%",
  background: "black",
  height: "12rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "sticky",
  bottom: 0,
  left: 0,
  right: 0,
};
const form = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  maxWidth: "15rem",
  marginBottom: "2rem",
  color: "white",
  position: "sticky",
  bottom: 0,
  left: 0,
  right: 0,
};

const mainPostContainer = {
  display: "flex",
  flexWrap: "wrap",
  marginTop: "1rem",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
};

const postContainer = {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  minHeight: "100%",
};

export default MasterView;
