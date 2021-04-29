import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

export default class Log extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      redirect: false,
      user: [],
    
    };
  }

 



    render() {
        if (this.props.loggedInUser) {
            return <Redirect to="/" />;
        }
        return (
            <div style={rootStyle}>
                <div style={form}>
                    <h2 style={LoginText}>Please login</h2>
                    <input
                        style={InputFieldName}
                        onChange={(e) => this.props.emailField(e)}
                        value={this.props.email}
                        placeholder="Email"
                    />
                    <input
                        style={InputFieldPassword}
                        onChange={(e) => this.props.passwordField(e)}
                        value={this.props.password}
                        placeholder="Password"
                        type="password"
                    />
                    <button
                        style={ButtonLogin}
                        value={this}
                        onClick={() => {
                            this.props.loginButton();
                        }}
                    >
                        {' '}
                        Login{' '}
                    </button>
                </div>
                <div style={regConatiner}>
                    <p>If you dont have an account please register below</p>
                    <Link to="/register" style={ButtonReg}>
                        <span> Register </span>
                    </Link>
                </div>
            </div>
        );
    }
}

const form = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3rem',
};

const rootStyle = {
    padding: '0 1rem',
    display: 'block',
    border: '1px solid black ',
    height: '25rem',
    width: '50%',
    margin: 'auto',
    boxShadow: '5px 5px',
    marginTop: '8rem',
};
const LoginText = {
    position: 'relative',
    textAlgin: 'center',
};

const InputFieldName = {
    positon: 'relative',
    display: 'block',
    margin: '10px',
    width: '80%',
    height: '1.5rem',
};

const InputFieldPassword = {
    positon: 'relative',
    width: '80%',
    height: '1.5rem',
};

const ButtonLogin = {
    display: 'block',
    width: '80%',
    height: '2rem',
    margin: '1rem',
    color: 'white',
    backgroundColor: 'green',
    cursor: 'pointer',
};

const ButtonReg = {
    textDecoration: 'none',
    color: 'blue',
};

const regConatiner = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};
