import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from "./Coder.svg";
import "./Landing.css"
import Navbar from "./Navbar"



class Landing extends Component {
  render() {
    
    return (
      <div>
      <Navbar />
      <div style={{padding:"3em"}}>
        <div class="left">
        <h2>A platform for<br></br>the developers, by<br></br>the developers.</h2>
        <h6 style={{marginBottom:"1em"}}>Collaborate with your friends and colleagues to practice<br></br> and improve your development skills, Use the code editor to see instant <br></br>results, the whiteboard to explain complex dev stuff, <br></br>video call to chat and disscuss the ideas and give your constructive<br />feedback to improve your friends skills.<br /><br />Join us Now and enter the crazy dev world!!</h6>
        <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable accent-3"
                style={{marginBottom:"3em", background:"#00BFA6", color:"#000", fontWeight:"bold", textTransform:"capitalize", borderRadius:"8px"}}
              >
                Sign Up
              </Link>
              <div style={{display:"flex", justify:"center"}}><h6 style={{fontWeight:"bold"}}>Already a member?</h6>
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable accent-3"
                style={{marginLeft:"3em", background:"#444857", textTransform:"capitalize", borderRadius:"8px"}}
              >
                Log in
              </Link>
              </div>
        </div>
        <div class="right">
          <img src={img} alt="image" width="500px"/>
        </div>
      </div>
      </div>
    );
  }
}

export default Landing;
