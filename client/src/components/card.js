import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Api from "../utils/api";

const profileImage = ("./assets/profile.png");

const cardImagesArr = ["./assets/nba1.png", "./assets/nba2.png", "./assets/nba3.png", "./assets/nba4.png", "./assets/nba5.png", "./assets/nba6.png"];

const getCardImage = () =>
cardImagesArr[Math.floor(Math.random() * cardImagesArr.length)];

var mystyle = {
    marginTop: "80px",
    textAlign : "center",
    width: "30%",
    fontWeight : "bold",
    marginLeft : "35%"
};

export function EventCardRender(props) {
  const [Event, setEvent] = useState([])
  useEffect(() => {
    Api.getAllEvents().then(res => {
      setEvent(res.data)
    })
  }, [])
  console.log(Event)
  return (
    <>
      {Event.map(event => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={getCardImage()} />
              <Card.Body>
                <Card.Text>
                <p>{event.eventName} on {event.eventDate}</p>
                  <p>starts : {event.eventStartTime}  - {event.eventEndTime}</p>
                </Card.Text>
                <button type="attending" class="btn btn-primary">attending</button>
              </Card.Body>
            </Card>
          )
        })
      }
    </>
  )
  
}


export function ProfileCardRender(props) {
  const [User, setUser] = useState([])
  useEffect(() => {
    Api.getAllUsers().then(res => {
      setUser(res.data)
    })
  }, [])
  
  return (
    <>
      {User.map(user => {
        return (
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={profileImage} />
            <Card.Body>
              <form style={mystyle} >
                <div class="input-group">
                  <div class="input-group-text">Name: {user.name}</div>
                  <input type="text" class="form-control" id="inlineFormInputGroupUsername">
                  </input>
                </div>

                <div class="input-group">
                  <div class="input-group-text">Username: {user.username}</div>
                  <input type="text" class="form-control" id="inlineFormInputGroupUsername">
                  </input>
                </div>

                <div class="input-group">
                  <div class="input-group-text">Email: {user.email}</div>
                  <input type="text" class="form-control" id="inlineFormInputGroupUsername">
                  </input>
                </div>

                <div class="input-group">
                  <div class="input-group-text">Password</div>
                  <input type="text" class="form-control" id="inlineFormInputGroupUsername">
                  </input>
                </div>

                <div class="input-group">
                  <div class="input-group-text">MemberType: {user.memberType}</div>
                  <input type="text" class="form-control" id="inlineFormInputGroupUsername">
                  </input>
                </div>

                <div class="input-group">
                  <div class="input-group-text">GamesOwing: {user.gamesOwing}</div>
                  <input type="text" class="form-control" id="inlineFormInputGroupUsername">
                  </input>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </Card.Body>
          </Card>
        )
      })
      }
    </>
  )
}
