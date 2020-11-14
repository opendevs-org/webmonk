import React from "react";

const ErrorBoundaryDemo = (props) => {
  let random = Math.random();
  if (random > 0.6) {
    throw new Error("Something Bad Happened");
  } else {
    return <div>Error Boundary demo works fine....</div>;
  }
};

export default ErrorBoundaryDemo;
