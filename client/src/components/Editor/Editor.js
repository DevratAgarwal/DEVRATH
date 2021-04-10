import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import Nav from "./NavDashboard";

class Editor extends Component {
  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <Nav />
      <div className="container" style={{marginTop:"2rem"}}>
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h1>
              <b>editor</b>
            </h1>
            <p>
            <Link
                to="/whiteboard"
                style={{
                  width: "450px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable accent-3"
              >
                 Open Whiteboard
              </Link>
              <br />
              <br />
              <Link
                to="/feedback"
                style={{
                  width: "450px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable accent-3"
              >
                 feedback page
              </Link>
            </p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

Editor.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Editor);
