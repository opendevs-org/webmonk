import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import Toggle from "./components/Toggle";

import "./styles.css";

export function App() {
  return (
    <Provider store={Store}>
      <Toggle />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
