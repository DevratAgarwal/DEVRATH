import React, { Component } from 'react'
import App from "./comp/App/App";
import BrowserUnsupported from "./comp/BrowserUnsupported/BrowserUnsupported";
import DailyIframe from "@daily-co/daily-js";

export class Videomain extends Component {
  render() {
    return (
      <div>
        <App/>
      </div>
    )
  }
}

export default Videomain
