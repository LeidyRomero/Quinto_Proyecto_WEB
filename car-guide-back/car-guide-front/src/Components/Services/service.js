import React, { Component } from "react";
import "./services.css";

import {FormattedNumber} from "react-intl";

class Service extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="services-card">
        <img
          className="service-img"
          src={`${this.props.service.image}`}
          alt="banner servicios"
        />
        <div className="service-text">
          <h5 id={`card-title${this.props.service._id}`} className="service-title">
            {this.props.service.name}
          </h5>

          <p id="service-description">{this.props.service.description}</p>

          <p className="service-price">
            <b>$ <FormattedNumber value={this.props.service.price}/> COP </b>
          </p>
        </div>
      </div>
    );
  }
}

export default Service;
