import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



function Nav({ isLoggedIn, handleLogout }) {

    return (
        <div fluid>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <ul className="navbar-nav ml-auto">
                        {!isLoggedIn &&
                            < li className="nav-item">
                                <Link className="nav-link" to={"/"}>Sign in</Link>
                            </li>
                        }
                        {!isLoggedIn &&
                            <li className="nav-item">
                                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                            </li>
                        }
                        {isLoggedIn &&
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>Home</Link>
                            </li>
                        }
                        {isLoggedIn &&
                            <li className="nav-item">
                                <Link className="nav-link" to={"/events"}>Events</Link>
                            </li>
                        }
                        {isLoggedIn &&
                            <li className="nav-item">
                                <Link className="nav-link" to={"/admin"}>Admin</Link>
                            </li>
                        }
                        {isLoggedIn &&
                            <li className="nav-item">
                                <button className="nav-link" onClick={handleLogout}>Sign out</button>
                            </li>
                        }
                    </ul>
                </div>
            </nav>
        </div >
    )
}

export default Nav

