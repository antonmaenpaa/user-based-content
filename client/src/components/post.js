import { MdModeEdit, MdDelete } from "react-icons/md";

function Post(props) {




    return(
        <div style={rootStyle}>
            <MdModeEdit style={{fontSize: "1.5rem", marginRight: "1rem"}} onClick={props.editPost}/>
            <MdDelete style={{fontSize: "1.5rem"}} onClick={props.deletePost}/>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    )
}

const rootStyle = {
    backgroundColor: "lightgrey",
    margin: ".5rem",
    padding: ".5rem 2rem",
    textAlign: "center",
    webkitboxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
    MozBoxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
    boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
    width: "90%"
}

export default Post;