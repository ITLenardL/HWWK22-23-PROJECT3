import React, { Component } from "react";
import Api from "../utils/api";
import { Redirect } from "react-router-dom"


export default class EventCreate extends Component {
    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/showevents' />
        }
    }
    state = {
        eventName: "",
        eventStartTime: "",
        eventEndTime: "",
        eventDate: ""
    }
    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const eventData = {
            eventName: this.state.eventName,
            eventStartTime: this.state.eventStartTime,
            eventEndTime: this.state.eventEndTime,
            eventDate: this.state.eventDate
        }
        Api.eventCreate(eventData).then(res => {
            this.setRedirect();
        })
    }
    showEvents = {
        marginTop: "60px"
    }
    mystyle = {
        marginTop: "80px",
        textAlign: "center",
        width: "30%",
        marginLeft: "35%",
        fontWeight: "bold"
    };

    render() {
        return (
            <form style={this.mystyle}>
                <h3>Create Event</h3>

                <div className="form-group">
                    <label>Event date</label>
                    <input type="text" className="form-control" placeholder="Event date" name="eventDate" value={this.state.eventDate} onChange={this.handleInputChange} />
                </div>

                <div className="form-group">
                    <label>Event name</label>
                    <input type="text" className="form-control" placeholder="Event name" name="eventName" value={this.state.eventName} onChange={this.handleInputChange} />
                </div>

                <div className="form-group">
                    <label>Event start time</label>
                    <input type="text" className="form-control" placeholder="Event start time" name="eventStartTime" value={this.state.eventStartTime} onChange={this.handleInputChange} />
                </div>

                <div className="form-group">
                    <label>Event end time</label>
                    <input type="text" className="form-control" placeholder="Event end time" name="eventEndTime" value={this.state.eventEndTime} onChange={this.handleInputChange} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.handleSubmit}>Submit</button>
                {this.renderRedirect()}
                <button style={this.showEvents} className="btn btn-secondary btn-lg active" onClick={this.setRedirect}>Show Events</button>
            </form>
        );
    }
}