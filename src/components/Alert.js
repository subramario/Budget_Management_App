import React from "react";
import "../styling/Alert.css";

class Alert extends React.Component {
  render() {
    return <div className="container-wrapper-alert">{this.props.message}</div>;
  }
}
export default Alert;
