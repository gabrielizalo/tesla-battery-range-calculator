import React, {Component} from "react";

import "./TeslaBattery.css";
import TeslaNotice from "../components/TeslaNotice/TeslaNotice";

class TeslaBattery extends Component {
  render() {
    return (
      <form className="tesla-battery">
        <h1>Range Per Change</h1>
        <TeslaNotice />
      </form>
    );
  }
}

export default TeslaBattery;
