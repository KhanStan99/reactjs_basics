import React, { Component } from "react";

class Carin extends Component {
  state = {
    email: this.props.email,
    password: this.props.password
  };
  render() {
    return (
      <div
        style={{
          padding: "10px",
          fontSize: "15px",
          textAlign: "center",
          backgroundColor: "#fff"
        }}
      >
        <h2>Stateful Component</h2>
        <div>
          <input
            style={{ margin: "10px" }}
            placeholder="Enter Email"
            value={this.state.email}
            onChange={this.emailChanged.bind(this)}
          />
        </div>
        <div>
          <input
            style={{ margin: "10px" }}
            placeholder="Enter Password"
            value={this.state.password}
            onChange={this.passwordChanged.bind(this)}
          />
        </div>
        <button
          style={{ margin: "10px" }}
          onClick={this.handleClick.bind(this)}
        >
          Increment
        </button>
      </div>
    );
  }

  emailChanged(e) {
    this.setState({ email: e.target.value, password: this.state.password });
  }

  passwordChanged(e) {
    this.setState({ password: e.target.value, email: this.state.email });
  }

  handleClick(c) {
    console.log(
      "Passoword: " + this.state.password + " Email: " + this.state.email
    );
    if (this.state.password === "" || this.state.email === "")
      console.log("Enter Details");
    else console.log("Perfect");
  }
}

export default Carin;
