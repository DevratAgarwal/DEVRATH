import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Options extends Component {

    render() {
  
        return (
            <div className="navbar-fixed">
            <nav className="z-depth-0">
            <div className="nav-wrapper" style={{background:"#1E1F26"}}>
                <Link
                to="/whiteboard"
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                  marginLeft: "10rem",
                  float:"left"
            
                }}
                className="btn waves-effect waves-light hoverable accent-3"
                >
              
                Whiteboard
                </Link>

                <Link
                to="/video-call"
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                  marginLeft: "15rem",
                  float:"left"
            
                }}
                className="btn waves-effect waves-light hoverable accent-3"
                >
              
                Video-call
                </Link>

                <Link
                to="/feedback"
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                  float: "right",
                  marginRight: "20rem"
                }}
                className="btn waves-effect waves-light hoverable accent-3"
                >
              
                Feedback
                </Link>
              
            </div>
            </nav>
        </div>
        )
}
}

export default Options;