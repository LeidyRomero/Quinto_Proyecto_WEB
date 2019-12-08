import React, { Component } from "react";
import "./cars.css";
import "../../App.css";
import { Link } from "react-router-dom";
import Car from "./car";

import {FormattedMessage} from "react-intl";

class CarsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carros: []
    };
    this.renderCars = this.renderCars.bind(this);
  }
  componentDidMount() {
    if (!navigator.onLine) {
      if (localStorage.getItem('carrosList') === null)
          this.setState({ carros: "loading..." })
      else
          this.setState({ carros: localStorage.getItem('carrosList') });
  }
    fetch("/cars")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ carros: data });
        localStorage.setItem('carrosList', data);
      });
  }

  renderCars() {
    if (this.state.carros.length > 0) {
      return this.state.carros.map((car, i) => (
        <div className="col-md-4">
          <Link to={`/cars/${car.license}`}>
            <Car obj={car} key={i} />
          </Link>{" "}
        </div>
      ));
    }
  }
  render() {
    return (
      <div className="sales">
          <img
            src="https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            id="sales-image"
            alt="Ventas"
          />
        <div id="wrap-sales-title">
          <h1 id="sales-title"><FormattedMessage id="Sales"/></h1>
        </div>
        <div className="car-list">{this.renderCars()}</div>
      </div>
    );
  }
}
export default CarsList;
