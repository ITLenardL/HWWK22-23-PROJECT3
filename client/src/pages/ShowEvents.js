import React from "react";
import {EventCardRender} from "../components/card";
import './Home.css';


class ShowEvents extends React.Component {

render() {
    return (
        <>
    <EventCardRender />
    </>
    );
}
}

export default ShowEvents;