import React, { Component } from "react";
import Carin from "./carin";
import Carin2 from "./carin_func";

class Config extends Component {
  render() {
    return (
      <div>
        <div style={{ height: "5px", background: "#000" }} />
        <Carin email="myemail@abjayon.com" password="strong_password123" />


        <div style={{ height: "5px", background: "#000" }} />
        <Carin2 email="email@domain.com" password="strong_password123" />
        
        <div style={{ height: "5px", background: "#000" }} />
      </div>
    );
  }
}

export default Config;
