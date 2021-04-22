import Post from "./post"
import  React, { Component }  from "react";



class MasterView extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            title: "",
            text: "",
            showEditBtn: false
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
    }
    
    UpdateTitleFields(e) {    
        this.setState({
            title: e.target.value
        })
    }
    
    UpdateTextFields(e) {
        this.setState({
            text: e.target.value
        })
    }

    // DELETE POST
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

    async savePost(e, userId) {
        console.log('SAVE POST')
        // e.preventDefault();

        // console.log(userId)
    
        // let body = {
        //     title: this.state.title,
        //     text: this.state.text
        // }
        // const response = await fetch('/posts/' + userId, {
        //     method: "PUT",
        //     body: JSON.stringify(body),
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     }
        // });
        
        
        
        // const result = await response.json();
        // console.log(result)
        // await this.getAllPosts()
        // return result
    }


    // EDIT POST
    async editPost(e) {
        console.log("EditPost Function")
        // e.preventDefault();
        
        // const editText = e.target.parentElement.parentElement.querySelector("p").textContent
        // const editTitle = e.target.parentElement.parentElement.querySelector("h4").textContent;
        // let userId = e.target.parentElement.parentElement.parentElement.dataset.id

        
        // this.setState({
        //     title: editTitle,
        //     text: editText,
        //     showEditBtn: true
        // })
        
        // await this.savePost(e, userId)
        
    }

    // ADD NEW POST
    async addNewPost(e) {
        e.preventDefault()   
    
        let body = {
            title: this.state.title, 
            text: this.state.text
        }   
        const response = await fetch("/posts", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            }
    });
        const result = await response.json();
        await this.getAllPosts()
        this.setState({
            title: "",
            text: ""
        })
        return result
    }
    

    // RENDER ALL POSTS
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
    
    
    render() {   
         console.log("TITLE:", this.state.title)   
         console.log("TEXT:", this.state.text)   
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
                            onChange={this.UpdateTitleFields}
                            value={this.state.title}
                            >
                   
                            </input>
                        <label name="text">Text</label>
                        <textarea 
                        name="text" 
                        rows="4" 
                        cols="50" 
                        placeholder="What do you want to write about today?" 
                        id="text"
                        onChange={this.UpdateTextFields}
                        value={this.state.text}
                        >

                        </textarea>
                        {   this.state.showEditBtn && (
                            <button onClick={this.savePost}>Edit</button>
                        )
                        }
                        {   !this.state.showEditBtn && (
                        <button onClick={this.addNewPost}>Post</button>
                        )
                        }
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