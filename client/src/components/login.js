import { Link } from "react-router-dom"
import React, {Component} from "react"
// import Users from "../../../server/DbModel/UserSchema";



function LoginButton(){
    if( this.props.email && this.props.password){
        // skicka vidare till main-page       
    } else {
        console.log("You are not a user , please register!")
    }
}


export default class log extends Component {
        Constructor(props){
            this.State = {
            email: "",
            password: "",
            errors: {},
        };
        this.setState({email: "email", password: "password"})
    }

    async componentDidMount(){
        try {
            let body;
            const response = await fetch("/users", {
                method: "GET",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json()
            console.log(data, 'Users')
        
        }
        catch(e){
          console.log('error')
        }
    }

    
        
render() {
return (
        <div style={rootStyle}>
            <div style={form}>
                <h2 style={LoginText} >Please login</h2>
                <input style={InputFieldName} placeholder="Name"/>
                <input style={InputFieldPassword} placeholder="Password"/>
                <button style={ButtonLogin}  value={this} onClick={LoginButton()}> Login </button>
            </div>
            <div style={regConatiner}>
                <p>If you dont have an account please register below</p>
                <Link to="/register" style={ButtonReg}>
                    <span> Register </span>
                </Link>
            </div>
        </div>
 )}
}



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
    height: "25rem",
    width: "30rem",
    margin: "auto",
    boxShadow: "5px 5px",
    marginTop: "8rem",
}
const LoginText = {
    position: "relative",
    textAlgin: "center", 
}

const InputFieldName = {
    positon: "relative",
    display: "block",
    margin: "10px",
    width: "15rem",
    height: "1.5rem"

}

const InputFieldPassword = {
    positon: "relative",
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

 
    


