import { MdModeEdit, MdDelete } from "react-icons/md";

function Post(props) {

    return(
        <div style={rootStyle}>
            <MdModeEdit />
            <MdDelete />
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
    mozBoxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
    boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)"
}

export default Post;