import { Link } from "react-router-dom"

function Register() {
   return(
    <div style={rootStyle}>
    <div style={form}>
        <h2 style={RegisText} >Please Register</h2>
        <input style={InputFieldName} placeholder="Email"/>
        <input style={InputFieldPassword} placeholder="Password"/>
        <input style={InputFieldRepeatPassword} placeholder="Repeat password"/>
        <button style={ButtonLogin}> Register </button>
    </div>
    <div style={regConatiner}>
        <p>If you have an account, please click below</p>
        <Link to="/login" style={ButtonReg}>
            <span> Login </span>
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
    marginTop: "3rem",

 
}
const rootStyle = {
    padding: "0 1rem",
    display: "block",
    border: "1px solid black ",
    height: "35rem",
    width: "30rem",
    margin: "auto",
    boxShadow: "5px 5px",
    marginTop: "5rem",

    
    overflowy: "hidden",
}
const RegisText = {
    position: "relative",
    textAlgin: "center",  
}

const InputFieldName = {
    positon: "relative",
    display: "block",
    margin: "5px",
    width: "15rem",
    height: "1.5rem"

}

const InputFieldPassword = {
    positon: "relative",
    margin: "5px",
    width: "15rem",
    height: "1.5rem"

}

const InputFieldRepeatPassword = {
    margin: "5px",
    width: "15rem",
    height: "1.5rem"

}

const ButtonLogin = {
  display: "block",
  width: "15.5rem",
  height: "2rem",
  margin: "1rem",
  color: "white",
  backgroundColor: "green",
  cursor: "pointer",
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
