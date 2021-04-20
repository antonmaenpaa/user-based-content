import { Link } from "react-router-dom"

function Register() {
   return(
    <div style={rootStyle}>
    <div style={form}>
        <h2 style={RegisText} >Please Register</h2>
        <input style={InputFieldName} placeholder="Name"/>
        <input style={InputFieldPassword} placeholder="Password"/>
        <input style={InputFieldPassword} placeholder="FirstName"/>
        <input style={InputFieldPassword} placeholder="LastName"/>
        <button style={ButtonLogin}> Register </button>
    </div>
    <div style={regConatiner}>
        <p>If you have an account, please click below</p>
        <Link to="/login">
            <span style={ButtonReg}> Login </span>
        </Link>
    </div>
</div>
   )
}


export default Register;
const form = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
 
}
const rootStyle = {
    marginTop: "5rem",
    padding: "0 2rem",
    position: "relative",
    display: "block",
    
    overflowy: "hidden",
}
const RegisText = {
    position: "relative",
    textAlgin: "center",  
}

const InputFieldName = {
    positon: "relative",
    display: "block",

}

const InputFieldPassword = {
    positon: "relative",

}

const ButtonLogin = {
  marginTop: "1rem",
  border: "1px solid black",
  color: "grey",
  borderRadius: "10%",
  display: "block",
}

const ButtonReg = {
  textDecoration: "none",
   color: "blue",
}

const regConatiner = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}
