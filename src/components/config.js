import React, { Component } from "react";
import Carin from "./carin";
import Carin2 from "./carin_func";

class Config extends Component {
  
  render() {
    var socialMediaPlatform = ['Facebook', 'Twitter', 'WhatsApp', 'Instagram'];
    var item = "Social Media";
    var foodItemsList = ['Cake', 'Pizza', 'Cookies', 'Toffee'];
    var fooditem = "Food Items";
    return (
      <div>
        <div style={{ height: "5px", background: "#000" }} />
        <Carin email="myemail@abjayon.com" password="strong_password123" />

        <div style={{ height: "5px", background: "#000" }} />
        <Carin2 list={socialMediaPlatform} item={item} />
        <div style={{ height: "5px", background: "#000" }} />
        <Carin2 list={foodItemsList} item={fooditem} />
      </div>
    );
  }
}

export default Config;
