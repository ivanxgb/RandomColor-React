import React from "react";
import "./Button.css";

class Button extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className={this.props.light ? "light-button" : "dark-button"}
      >
        New Color
      </button>
    );
  }
}

export default Button;
