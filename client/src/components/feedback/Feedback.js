import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import Nav from "./NavFeed";
import Feedbackform from "./Feedbackform";

class Feedback extends Component {
  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <Nav />
      <div className="container" style={{marginTop:"1.6rem"}}>
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h5>
              <b>Hope you enjoyed the interview,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Your peer would like some constructive feedback from you😃
              </p>
            </h5>
          </div>
          <Feedbackform />
        </div>
      </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Feedback);