import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


export default class Login extends Component {
    state = {
        username: "",
        password: ""
    }
    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.handleLogin(userData.username, userData.password)

    }
        mystyle = {
            marginTop: "80px",
            textAlign : "center",
            width: "30%",
            fontWeight : "bold",
            marginLeft : "35%"
        };
    render() {
        return (
            <form style={this.mystyle} >

                <h3>Log in</h3>
                <div className="form-group mt-4">
                    <label>Username</label>
                    <input type="username" className="form-control" placeholder="Enter username" name="username" value={this.state.email} onChange={this.handleInputChange} />
                </div>

                <div className="form-group" >
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.handleSubmit}>Sign in</button>
            </form>
        );
    }
}