import Header from "./components/header";
import MasterView from "./components/masterview";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import Login from "./components/login";
import Register from "./components/register";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: false,
      user: "",
      password: "",
      username: ""
    };

    this.logOut = this.logOut.bind(this);
    this.passwordField = this.passwordField.bind(this);
    this.usernameField = this.usernameField.bind(this);
    this.loginButton = this.loginButton.bind(this);
    this.getUserFromLocalStorage = this.getUserFromLocalStorage.bind(this);

  }

    componentDidMount(){
      this.getUserFromLocalStorage()
    }

 getUserFromLocalStorage() {
    let userStorage = localStorage.getItem("user");

    if (userStorage) {
      this.setState({
        loggedInUser: !this.state.loggedInUser,
        user: userStorage
      });
      

      return;
    }
  }



  async logOut() {
    let body
    const response = await fetch("/logout", {
      method: "DELETE",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    window.localStorage.clear();
    this.setState({
      loggedInUser: !this.state.loggedInUser,
      user: ""
    });
    return data;  
    }

    passwordField(e) {
      this.setState({
        password: e.target.value,
      });
    }

    usernameField(e) {
      this.setState({
        username: e.target.value,
      });
    }

    async loginButton() {
    let body = {
        username: this.state.username,
        password: this.state.password,
    };
    const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    localStorage.setItem('user', data.username);
    let userStorage = localStorage.getItem("user");

    if (data !== 'USER NOT FOUND') {
        this.setState({
            loggedInUser: !this.state.loggedInUser,
            user: userStorage
        });
    }
}

  render() {
    return (
      <BrowserRouter>
        <div style={rootStyle}>
          <Header 
          loggedInUser={this.state.loggedInUser} 
          logOut={this.logOut} 
          user={this.state.user}/>
          <Switch>
            <Route exact path="/">
              <MasterView loggedInUser={this.state.loggedInUser} />
            </Route>
            <Route path="/login">
              <Login 
              loginButton={this.loginButton}
              passwordField={(e) => this.passwordField(e)} 
              usernameField={(e) => this.usernameField(e)}
              password={this.state.password}
              username={this.state.username}
              loggedInUser={this.state.loggedInUser}
              />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const rootStyle = {
  height: "100%"
};

export default App;
