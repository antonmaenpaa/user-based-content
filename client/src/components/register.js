import { Link } from "react-router-dom"
import React, { Component } from "react"


export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            users: [],
        }
        this.passwordFieldRegister = this.passwordFieldRegister.bind(this)
        this.emailFieldRegister = this.emailFieldRegister.bind(this)
        this.registerButton = this.registerButton.bind(this)
    }


    async registerButton() {

        try {
            let body = {email: this.state.email, password: this.state.password}
            const response = await fetch("/users", {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json()
            this.setState({
                email: "",
                password: "",
                users: data
            })

        }
        catch (e) {
            console.log('CANT ADD USER!')
        }

        let NewUsers = this.state.users
        if (NewUsers.email && NewUsers.password ) {
            this.setState({
                users: NewUsers
            })
            console.log("You are now registerd!" + NewUsers)
            return NewUsers
        } else {
            console.log("ERROR")
        }

    }



    emailFieldRegister(e) {
        this.setState({
            email: e.target.value
        })

    }
    passwordFieldRegister(e) {
        this.setState({
            password: e.target.value,
        })
    }

  

    render () {
   return(
    <div style={rootStyle}>
    <div style={form}>
        <h2 style={RegisText} >Please Register</h2>
        <input style={InputFieldName} onClick={this.clearInput}  onChange={this.emailFieldRegister} value={this.state.email} placeholder="Email"/>
        <input style={InputFieldPassword} onClick={this.clearInput} ref={(el) => (this.password = el)} onChange={this.passwordFieldRegister} value={this.state.password} placeholder="Password"/>
        <button style={ButtonLogin} onClick={this.registerButton}> Register </button>
    </div>
    {this.NewUsers ? (
            <div style={Tooltip}>You are now registerd! <br/> Please  <Link to="/login" style={ButtonReg}>
            <span> Login </span>
        </Link></div>
        ) : (
    <div style={regConatiner}>
        <p>If you have an account, please click below and login</p>
        <Link to="/login" style={ButtonReg}>
            <span> Login </span>
        </Link>
    </div>
        )}
</div>
   )
    }
}

const form = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3rem",

 
}

const Tooltip = {
   backgroundColor: "blue",
   width: "30%",
}

const rootStyle = {
    padding: "0 1rem",
    display: "block",
    border: "1px solid black ",
    height: "35rem",
    width: "50%",
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
    width: "80%",
    height: "1.5rem"

}

const InputFieldPassword = {
    positon: "relative",
    margin: "5px",
    width: "80%",
    height: "1.5rem"

}

const ButtonLogin = {
  display: "block",
  width: "80%",
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






