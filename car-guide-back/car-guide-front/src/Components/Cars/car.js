import React, { Component } from "react";
import "./cars.css";

import {FormattedMessage} from "react-intl";
import {FormattedNumber} from "react-intl";

class Car extends Component {
  render() {
    return (
      <div className="card sale">
        <img
          className="sale card-img-top"
          width="50"
          height="200"
          src={`${this.props.obj.image}`}
          alt={`${this.props.obj.name}`}
        ></img>
        <div className="wrap-sale-info">
          <div>
            <h1 className="sale-category"><FormattedMessage id={`${this.props.obj.category}`} /></h1>
            <p className="sale-model">{this.props.obj.name}</p>
          </div>
          <p className="sale-price">$ <FormattedNumber value={this.props.obj.price}/></p>
        </div>
        <div className="sale-info">
          <p id="sale-info-text">
            <span id="info-span"><FormattedMessage id="Brand"/>:</span> {this.props.obj.brand}
          </p>
          <p id="sale-info-text">
            <span id="info-span"><FormattedMessage id="Year"/>:</span> {this.props.obj.year}
          </p>
          <p id="sale-info-text">
            <span id="info-span"><FormattedMessage id="Mileage"/>:</span> <FormattedNumber value={this.props.obj.km}/>
          </p>
        </div>
      </div>
    );
  }
}
export default Car;
