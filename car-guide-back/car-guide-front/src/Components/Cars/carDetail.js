import React, { Component } from "react";
import "./cars.css";
import "../../App.css";

import {FormattedMessage} from "react-intl";
import {FormattedNumber} from "react-intl";

class CarDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: []
    };
    this.renderDetail = this.renderDetail.bind(this);
  }
  componentDidMount() {
    if (!navigator.onLine) {
      if (localStorage.getItem('datosCarDetail') === null)
          this.setState({ datos: "loading..." })
      else
          this.setState({ datos: localStorage.getItem('datosCarDetail') });
          
  }

    fetch("/cars/" + this.props.match.params.license)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ datos: data });
        localStorage.setItem('datosCarDetail', data);
      });
  }
  renderDetail() {
    if (this.state.datos.length > 0) {
      return (
        <div className="car-detail-background">
          <div id="car-detail">
            <h1 id="car-detail-title">{this.state.datos[0].name}</h1>
            <div className="row align-items-md-center">
              <div className="col-md-6">
                <img
                  className="card-img-top space2"
                  width="100"
                  height="300"
                  src={`${this.state.datos[0].image}`}
                  alt="Card image cap"
                ></img>
              </div>
              <div className="col-md-3">
                <div className="card-deck2">
                  <div className="data-card">
                    <p><span id="detail-span"><FormattedMessage id="Price" />: </span>$<FormattedNumber value={this.state.datos[0].price}/> COP</p>
                    <p><span id="detail-span"><FormattedMessage id="Year" />: </span> {this.state.datos[0].year}</p>
                    <p><span id="detail-span"><FormattedMessage id="Mileage"/>: </span> <FormattedNumber value={this.state.datos[0].km}/> km</p>
                    <p><span id="detail-span"><FormattedMessage id="Category"/>: </span> <FormattedMessage id={this.state.datos[0].category}/></p>
                    <p><span id="detail-span"><FormattedMessage id="Color"/>: </span> <FormattedMessage id={this.state.datos[0].color}/></p>
                    <p><span id="detail-span"><FormattedMessage id="LicensePlate"/>: </span> {this.state.datos[0].license}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-deck2">
                  <div className="data-card">
                    <p><span id="detail-span"><FormattedMessage id="Brand"/>: </span> {this.state.datos[0].brand}</p>
                    <p><span id="detail-span"><FormattedMessage id="Displacement"/> (cc): </span> <FormattedNumber value={this.state.datos[0].centcubs}/></p>
                    <p><span id="detail-span"><FormattedMessage id="Displacement"/>: </span> <FormattedNumber value={this.state.datos[0].cil_capacity}/></p>
                    <p><span id="detail-span"><FormattedMessage id="Doors"/>: </span> {this.state.datos[0].doors}</p>
                    <p><span id="detail-span"><FormattedMessage id="Transmission"/>: </span> <FormattedMessage id={this.state.datos[0].transmission}/></p>
                    <p><span id="detail-span"><FormattedMessage id="Model"/>: </span> {this.state.datos[0].model}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="dashboard-background2">
        <div className="container-fluid">
          <div className="row">{this.renderDetail()}</div>
        </div>
      </div>
    );
  }
}
export default CarDetail;
