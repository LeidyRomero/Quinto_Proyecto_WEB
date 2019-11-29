import React, { Component } from "react";
import "./cars.css";
class Car extends Component {
  render() {
    return (
      <div className="card sale">
        <img
          className="sale card-img-top"
          width="50"
          height="200"
          src={`${this.props.obj.image}`}
          alt="Card image cap"
        ></img>
        <div className="wrap-sale-info">
          <div>
            <h1 className="sale-category">{this.props.obj.category}</h1>
            <p className="sale-model">{this.props.obj.name}</p>
          </div>
          <p className="sale-price">$ {this.props.obj.price}</p>
        </div>
        <div className="sale-info">
          <p id="sale-info-text">
            <span id="info-span">Marca:</span> {this.props.obj.brand}
          </p>
          <p id="sale-info-text">
            <span id="info-span">Año:</span> {this.props.obj.year}
          </p>
          <p id="sale-info-text">
            <span id="info-span">Kilometraje:</span> {this.props.obj.km}
          </p>
        </div>
      </div>
    );
  }
}
export default Car;
