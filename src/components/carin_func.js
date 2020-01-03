import React from "react";

const Carin2 = props => {
  console.log(props.list);
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
      <div className="shopping-list">
        <h4>Shopping List for {props.item}</h4>
        <ul>
          {props.list.map(value => {
            return <li key={value}>{value} </li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Carin2;
