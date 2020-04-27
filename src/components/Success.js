import React from "react";
import "../styling/Success.css";

class Success extends React.Component {
  render() {
    return (
      <div className="container-wrapper-success">
        {this.props.message_success}
      </div>
    );
  }
}
export default Success;
