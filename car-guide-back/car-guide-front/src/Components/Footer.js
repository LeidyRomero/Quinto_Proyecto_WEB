import React, { Component } from "react";
import "./NavegacionFooter.css";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="info">
            <a>
              <img src="logo.png" width="20%" alt="logo" />
            </a>
            <p>Bogotá-Colombia</p>
            <p>Crr 100 #23 - 47</p>
            <p>+57 313 202 8555</p>
            <p>theCarGuide@gmail.com</p>
          </div>
      </div>
    );
  }
}

export default Footer;
