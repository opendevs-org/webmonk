import React from "react";

const Child = (props) => {
    return (
      <div>
        Props Demo - Child Component
        <p>username: {props.username}</p>
        <p>age: {props.age}</p>
        <button onClick={() => props.nameChanged("Mihir")}>Change Name</button>
      </div>
    );
  }

export default Child;
