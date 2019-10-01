import React, { Component } from "react";
import "../styles/header.css";
class Header extends Component {
  className = "header-item";
  state = {};
  createHeaderElement(text, className) {
    return <div className={className}>{text}</div>;
  }
  render() {
    return (
      <header
        className="website-header-container"
        style={{ backgroundColor: "#00b894", height: 50, color: "white" }}
      >
        {this.createHeaderElement("Logo", "header-item")}
        {this.createHeaderElement("Features", "header-item")}
        {this.createHeaderElement("Sign In", "header-item")}
      </header>
    );
  }
}

export default Header;
