import React from "react";
import ReactDOM from "react-dom";

class RefComp extends React.Component {
  state = {
    data: "",
  };

  updateState(e) {
    this.setState({ data: e.target.value });
  }

  clearInput(e) {
    this.setState({ data: "" });
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }

  render() {
    return (
      <div>
        <input
          value={this.state.data}
          onChange={(event) => this.updateState(event)}
          ref="myInput"
        ></input>
        <button onClick={(event) => this.clearInput(event)}>CLEAR</button>
        <h4>{this.state.data}</h4>
      </div>
    );
  }
}

export default RefComp;
