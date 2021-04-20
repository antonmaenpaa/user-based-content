import { Link } from "react-router-dom"
function Login() {

    return (
        <div style={rootStyle}>
            <div style={form}>
                <h2 style={LoginText} >Please login</h2>
                <input style={InputFieldName} placeholder="Name"/>
                <input style={InputFieldPassword} placeholder="Password"/>
                <button style={ButtonLogin}> Login </button>
            </div>
            <div style={regConatiner}>
                <p>If you dont have an account, please create one below</p>
                <Link to="/register">
                    <span style={ButtonReg}> Register </span>
                </Link>
            </div>
        </div>

    )
}

export default Login;

const form = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}
const rootStyle = {
    marginTop: "5rem",
    padding: "0 2rem",
    position: "relative",
    display: "block",
    

}
const LoginText = {
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
    


