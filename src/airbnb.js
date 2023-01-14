import React from "react";
import "./airbnb.css"
import logo from "./images/airbnblogo.png"
import groupimg from "./images/Group 77.png"

const Navbar = () => {
    return(
        <nav>
            <img src={logo} alt="failed to load" className="nav--logo"/>
        </nav>
    )
}

const Hero = () => {
    return(
        <div>
            <div className="hero--img">
                <img src={groupimg} alt="no group" />
            </div>
            <div className="hero--text">
                <h1>Online Experiences</h1>
                <p>Join unique ineractive activities led by one-of-kind hosts-
                    all without leaving home.</p>
            </div>
        </div>
    )
}


export {Navbar, Hero};