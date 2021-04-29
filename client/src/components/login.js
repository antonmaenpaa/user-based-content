import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

export default class Log extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
            redirect: false,
            user: [],
        };
        this.passwordField = this.passwordField.bind(this);
        this.emailField = this.emailField.bind(this);
        this.loginButton = this.loginButton.bind(this);
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
                redirect: true,
            });
        }
    }

    emailField(e) {
        this.setState({
            email: e.target.value,
        });
    }
    passwordField(e) {
        this.setState({
            password: e.target.value,
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
        return (
            <div style={rootStyle}>
                <div style={form}>
                    <h2 style={LoginText}>Please login</h2>
                    <input
                        style={InputFieldName}
                        onChange={this.emailField}
                        value={this.state.email}
                        placeholder="Email"
                    />
                    <input
                        style={InputFieldPassword}
                        onChange={this.passwordField}
                        value={this.state.password}
                        placeholder="Password"
                        type="password"
                    />
                    <button
                        style={ButtonLogin}
                        value={this}
                        onClick={() => {
                            this.loginButton();
                            this.props.loggedInUser();
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
