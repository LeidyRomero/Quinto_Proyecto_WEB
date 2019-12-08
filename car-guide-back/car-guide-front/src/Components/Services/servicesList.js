import React, { Component } from "react";
import Service from "./service.js";
import "../../App.css";
import "./services.css";

import {FormattedMessage} from "react-intl";

class ServicesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servicios: []
    };
    this.renderServices = this.renderServices.bind(this);
  }

  componentDidMount() {
    if (!navigator.onLine) {
      if (localStorage.getItem('serviciosList') === null)
          this.setState({ servicios: "loading..." })
      else
          this.setState({ servicios: localStorage.getItem('serviciosList') });
  }
    fetch("/services/")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ servicios: data });
        localStorage.setItem('serviciosList', data);
      });
  }

  renderServices() {
    if (this.state.servicios.length > 0) {
      return this.state.servicios.map((servicio, i) => (
        <div className="col-6">
          <a href={`${servicio.link}`}>
            <Service service={servicio} key={i} />
          </a>
        </div>
      ));
    }
  }

  render() {
    return (
      <div className="services">
        <img
          width="100%"
          alt="imagen de autos"
          src="https://di-uploads-pod6.dealerinspire.com/mariettatoyota/uploads/2019/04/2019-Toyota-Prius-models-banner.jpg"
        />
        <div id="wrap-services-title">
          <h1 className="services-main-title"><FormattedMessage id="Services"/></h1>
        </div>

        <div className="dashboard-background">
          <div className="card-deck">{this.renderServices()}</div>
        </div>
      </div>
    );
  }
}
export default ServicesList;
