import React, { useState, useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ShowEvents from "./pages/ShowEvents";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Nav from "./components/nav";
import "./App.css";
import EventCreate from "./components/eventCreate";
import Api from "./utils/api";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Api.getUser().then((user) => {
      if(user) {
        setIsLoggedIn(false);
      }
      setIsLoading(false);
    })
  }, []);

  const handleLogin = (username, password) => {
    Api.signIn({ username, password }).then(res => {
      console.log(res)
      setIsLoggedIn(true);
      setIsLoading(false);
    })
  }
  const handleLogout = () => {
    console.log("handle logout clicked")
    Api.signOut().then(
      setIsLoggedIn(false)
    )
  }

  if(isLoading) {
    return null;
  }

  return (<Router>
    <Nav
      handleLogout={handleLogout}
      isLoggedIn={isLoggedIn}
    />
    <Switch>
      <Route exact path='/' >
        {isLoggedIn ? <Home /> : <Login handleLogin={handleLogin} />}
      </Route>
      <Route exact path="/sign-up">
        {isLoggedIn ? <Home /> : <SignUp handleLogin={handleLogin} />}
      </Route>
      <Route exact path="/events">
        {isLoggedIn ? <EventCreate /> : <Login handleLogin={handleLogin} />}
      </Route>
      <Route exact path="/showevents">
        {isLoggedIn ? <ShowEvents /> : <Login handleLogin={handleLogin} />}
      </Route>
      <Route exact path="/admin">
        {isLoggedIn ? <Admin/> : <Login handleLogin={handleLogin} />}
      </Route>
    </Switch>
  </Router>
  );
}


export default App;
