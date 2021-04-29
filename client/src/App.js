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
      userLoggedIn: "",
      user: "",
      password: "",
      email: ""
    };

    this.logOut = this.logOut.bind(this);
    this.getUserFromLocalStorage = this.getUserFromLocalStorage.bind(this);
    this.passwordField = this.passwordField.bind(this);
    this.emailField = this.emailField.bind(this);
    this.loginButton = this.loginButton.bind(this);

  }

  componentDidMount() {
    // ask server if i am still logged in
     this.getUserFromLocalStorage();
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
    console.log(data)
    window.localStorage.clear();
    this.setState({
      loggedInUser: !this.state.loggedInUser,
      user: ""
    });
    return data;  
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

      passwordField(e) {
        this.setState({
            password: e.target.value,
        });
    }

        emailField(e) {
        this.setState({
            email: e.target.value,
        });
    }

       async loginButton() {
        let body = {
            email: this.state.email,
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
        localStorage.setItem('user', data.email);
        console.log(data);

        if (data !== 'USER NOT FOUND') {
            console.log('login');
            this.setState({
                loggedInUser: !this.state.loggedInUser
            });
        }
    }

  render() {
    return (
      <BrowserRouter>
        <div style={rootStyle}>
          <Header loggedInUser={this.state.loggedInUser} logOut={this.logOut} user={this.state.user}/>
          <Switch>
            <Route exact path="/">
              <MasterView loggedInUser={this.state.loggedInUser} />
            </Route>
            <Route path="/login">
              <Login 
              loginButton={this.loginButton}
              passwordField={(e) => this.passwordField(e)} 
              emailField={e => this.emailField(e)}
              password={this.state.password}
              email={this.state.email}
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
  height: "100%",
};

export default App;
