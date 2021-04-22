import Post from "./post"
import  React, { Component }  from "react";



class MasterView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.deletePost = this.deletePost.bind(this)
  }


    
    async deletePost(e) {
    console.log('DELETE')
    let body;

    let userId = e.target.parentElement.parentElement.parentElement.dataset.id
 
    const response = await fetch("/posts/" + userId, {
        method: "DELETE",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const result = await response.json();
    await this.getAllPosts()
    return result

}

    async editPost() {
        console.log("EDIT POST")
        let id;
        let body;
        const response = await fetch(`/posts/:608028240340eb0a98452eb9`, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
    });
        const result = await response.json();
        console.log(result)
        
    }
    
    async getAllPosts() {
        let body;
        const response = await fetch("/posts", {
            method: "GET",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
    });
        const result = await response.json();
        this.setState({
            posts: result
        })  
    }
    

    async componentDidMount() {
        this.getAllPosts();
    }
    
    render() {      
        return (
            <div style={postContainer}>
                <div style={mainPostContainer}>
                {
                    this.state.posts.map((post, index) => (
                        <div key={index} data-id={post._id}>
                            <Post key={post._id} 
                                title={post.title} 
                                text={post.text} 
                                editPost={this.editPost} 
                                deletePost={this.deletePost}
                            />
                        </div>
                        ))
                }
    
                </div>
                
                <div style={formDiv}>
                    <form style={form} action="" method="POST">
                        <label name="title">Title</label>
                        <input 
                            name="title" 
                            id="title" 
                            placeholder="Title"
                            >
                   
                            </input>
                        <label name="text">Text</label>
                        <textarea name="text" rows="4" cols="50" placeholder="What do you want to write about today?" id="text"></textarea>
                        <button type="submit">Post</button>
                    </form>
                </div>
            </div>
        )
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
}
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
}

const mainPostContainer = {
    display: "flex",
    marginTop: "1.5rem",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%"
}



const postContainer = {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "100%",
}

export default MasterView;