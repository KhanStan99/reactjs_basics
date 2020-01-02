import React from "react";

const Carin2 = props => {
  return (
    <div
      style={{
        padding: "10px",
        fontSize: "15px",
        textAlign: "center",
        backgroundColor: "#fff"
      }}
    >
      <h2>Stateless/Functional Component</h2>
      <div>
        <input
          style={{ margin: "10px" }}
          placeholder="Enter Email"
          value={props.email}
          
        />
      </div>
      <div>
        <input
          style={{ margin: "10px" }}
          placeholder="Enter Password"
          value={props.password}
          /* onChange={passwordChanged.bind(this)} */
        />
      </div>
      <button
        style={{ margin: "10px" }}
        /* onClick={handleClick.bind(this)} */
      >
        Increment
      </button>
    </div>
  );
};

export default Carin2;
