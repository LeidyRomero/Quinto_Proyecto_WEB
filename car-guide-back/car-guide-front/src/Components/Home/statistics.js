import React, { Component } from "react";
import "./statistics.css";
import DiagramaBarras from './diagramaBarras';
import GoogleDiagram from './googleDiagram';

import {FormattedMessage} from "react-intl";

import { Link } from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carros: []
    };

    this.renderCarsStatistics = this.renderCarsStatistics.bind(this);
  }
  componentDidMount() {
    if (!navigator.onLine) {
      if (localStorage.getItem('carros') === null)
          this.setState({ carros: "loading..." })
      else
          this.setState({ carros: localStorage.getItem('carros') });
  }
    fetch("/cars")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ carros: data });
      });
    }

  renderDiagram = () => {
    return (
      <DiagramaBarras key={this.state.carros[4].name} cars={this.state.carros}></DiagramaBarras>
    );
  }
  renderCarsStatistics() {
    if (this.state.carros.length > 0) {
      return (
        <div className="trending">
          <div className="col-md-4">
          <Link to={`/firstDiagram`}>
          <div className="car card space link">
              <img
                className="car card-img-top"
                width="50"
                height="200"
                src={`${this.state.carros[4].image}`}
                alt="Card image cap"
              ></img>
              <p className="car card-title"><FormattedMessage id="BESTSELLING"/></p>
              <p className="car card-sub-title2">{this.state.carros[4].name}</p>
            </div>
          </Link>{" "}
          </div>
          <div className="col-md-4">
          <Link to={`/firstDiagram`}>
            <div className="car card space link">
              <img
                className="car card-img-top"
                width="50"
                height="200"
                src={`${this.state.carros[2].image}`}
                alt="Card image cap"
              ></img>
              <p className="car card-title"><FormattedMessage id="PBRAND"/></p>
              <p className="car card-sub-title2">
                {this.state.carros[2].brand}
              </p>
            </div>
            </Link>{" "}
          </div>
          <div className="col-md-4">
          <Link to={`/firstDiagram`}>
            <div className="car card space link">
              <img
                className="car card-img-top"
                width="50"
                height="200"
                src={`${this.state.carros[3].image}`}
                alt="Card image cap"
              ></img>
              <p className="car card-title"><FormattedMessage id="PMODEL"/></p>
              <p className="car card-sub-title2">
                {this.state.carros[3].model}
              </p>
            </div>
            </Link>{" "}
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <div className="home-box">
          <a>
            <img src="home.jpg" width="100%" alt="logo" />
          </a>
          <div className="text-block">
            <h4 id="box-title"><FormattedMessage id="SLOGAN"/></h4>
            <p id="box-text">
              <FormattedMessage id="Mission"/>
            </p>
          </div>
        </div>
        <h1 className="align">
          <FormattedMessage id="Conoce"/> <span className="red"><FormattedMessage id="tendencias"/></span>
        </h1>
        {this.renderCarsStatistics()}

        <div className="branding-title">
          <p id="branding-text">
            <FormattedMessage id="Encuentra"/>{" "}
            <span style={{ color: "#cb2e2d" }}><FormattedMessage id="reconocidas"/></span>
          </p>
        </div>
        <div className="branding">
          <img
            className="brand-image"
            src="http://www.car-brand-names.com/wp-content/uploads/2015/07/Toyota-logo.png"
          />
          <img
            className="brand-image"
            src="https://www.carlogos.org/logo/BMW-logo-2000-2048x2048.png"
          />
          <img
            className="brand-image"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Mazda_logo_with_emblem.svg/970px-Mazda_logo_with_emblem.svg.png"
          />
          <img
            className="brand-image"
            src="http://www.car-brand-names.com/wp-content/uploads/2015/05/Mercedes-Benz-logo.png"
          />
          <img
            className="brand-image"
            src="http://www.car-brand-names.com/wp-content/uploads/2015/08/Chevrolet-logo.png"
          />
          <img
            className="brand-image"
            src="http://www.car-brand-names.com/wp-content/uploads/2015/05/Renault-logo-2.png"
          />
          <img
            className="brand-image"
            src="https://1000logos.net/wp-content/uploads/2018/04/Hyundai-Logo.png"
          />
        </div>
        <div className="branding-title" id="space">
          <p id="branding-text">
            <FormattedMessage id="Visualiza"/> {" "}
            <span style={{ color: "#cb2e2d" }}><FormattedMessage id="presupuesto"/></span>
          </p>
        </div>
        <GoogleDiagram />
      </div>
    );
  }
}
export default Home;
