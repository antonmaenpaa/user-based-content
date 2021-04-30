import { Link } from "react-router-dom"
import React, { Component } from "react"


export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            users: [],
        }
        this.passwordFieldRegister = this.passwordFieldRegister.bind(this)
        this.usernameFieldRegister = this.usernameFieldRegister.bind(this)
        this.registerButton = this.registerButton.bind(this)
    }


    async registerButton() {

        try {
            let body = {username: this.state.username, password: this.state.password}
            const response = await fetch("/register", {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json()
            if(this.state.username === "" || this.state.password === "") {
                return alert('Fill in the empty fields')
            }
            this.setState({
                username: "",
                password: "",
                users: data
            })

        }
        catch (e) {
            console.log('CANT ADD USER!')
        }

        let NewUsers = this.state.users
        if (NewUsers.username && NewUsers.password ) {
            this.setState({
                users: NewUsers
            })
            
            alert("You are now registerd homie!");          
            return NewUsers
        } else {
            console.log("ERROR")
        }

    }



    usernameFieldRegister(e) {
        this.setState({
            username: e.target.value
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
        <input style={InputFieldName} onClick={this.clearInput}  onChange={this.usernameFieldRegister} value={this.state.username} placeholder="username" required/>
        <input style={InputFieldPassword} onClick={this.clearInput} ref={(el) => (this.password = el)} onChange={this.passwordFieldRegister} value={this.state.password} placeholder="Password" type="password" required/>
        <button style={ButtonLogin} onClick={this.registerButton}> Register </button>
    </div>
    <div style={regConatiner}>
        <p>If you have an account, please click below and login</p>
        <Link to="/login" style={ButtonReg}>
            <span> Login </span>
        </Link>
    </div>
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






