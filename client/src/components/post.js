import { MdModeEdit, MdDelete } from "react-icons/md";


function Post() {

    return(
        <div style={rootStyle}>
            <MdModeEdit />
            <MdDelete />
            <h4>Titel</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                 nisi ut aliquip ex ea commodo consequat.
            </p>
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