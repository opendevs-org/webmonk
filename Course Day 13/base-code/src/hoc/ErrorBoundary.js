import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    errorMessage: "",
    hasError: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      errorMessage: error,
    });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something Bad Happened</h2>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
