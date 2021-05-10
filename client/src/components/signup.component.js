import React, { Component } from "react";
import Api from "../utils/api";

export default class SignUp extends Component {
    state = {
        username: "",
        password: "",
        name: "",
        email: ""
    }
    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            email: this.state.email
        }
        Api.signUp(userData).then()
    }
        mystyle = {
            marginTop: "80px",
            textAlign : "center",
            width: "30%",
            marginLeft : "35%",
            fontWeight : "bold"
        };
    render() {
        return (
            <form style={this.mystyle}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Full name</label>
                    <input type="name" className="form-control" placeholder="Full name" name="name" value={this.state.name} onChange={this.handleInputChange} />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="username" className="form-control" placeholder="Full name" name="username" value={this.state.username} onChange={this.handleInputChange} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.handleSubmit}>Register</button>
            </form>
        );
    }
}