import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import './Home.css'

const splashImage = ("./assets/splash.png");

class Home extends Component {
	render() {
		return (
			<Jumbotron fluid>
				<Container>
                    <div className="AlignCenter">
					<h2>WELCOME TO LENNY'S BASKETBALL BOOKINGS</h2>
                    <br></br>
                    <Image src={splashImage} roundedCircle fluid/>
                    </div>
                    <br></br>
                    <br></br>
					<p>This app was created to allow for easy creation of basketball booking events by the admin (Lenny), and allow for users to register their attendance to the relevant event. It will also allow for payment tracking and COVID safe tracking due to guestlists.</p>
                    <br></br>
                    <p>Please note all bookings attendances are charged at $5 each and are payable to:
                        <br></br><br></br>
                        PayID: 0400 000 000<br></br>
                        BSB: 063 603<br></br>
                        ACC: 1048 4018
                    </p>
				</Container>
			</Jumbotron>
		);
	}
}

export default Home