import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import RefComp from './RefDemo/index';
import ErrorBoundary from "./hoc/ErrorBoundary";
import ErrorBoundaryDemo from "./ErrorBoundaryDemo/ErrorBoundaryDemo";

function App() {
  return (
    <div className="container">
      <ErrorBoundary>
        <RefComp/>
        <ErrorBoundaryDemo />
      </ErrorBoundary>
    </div>
  );
}

export default App;
