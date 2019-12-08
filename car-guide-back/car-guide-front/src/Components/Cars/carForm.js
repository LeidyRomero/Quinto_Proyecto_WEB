import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import "./cars.css";
import "../../App.css";

import {FormattedMessage} from "react-intl";
import {FormattedNumber} from "react-intl";

class CarForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        fetch('/cars/', {
          method: 'POST',
          body: data,
        });
      }

    render()
    {
        console.log(this.props.user_role);
        if(this.props.user_role !== "Admin"){
            return <Redirect to="/forbidden" />
        }
        else{
            return(
                <div id="form">
        <img
          alt="admin"
          id="sales-image"
          src="https://images.unsplash.com/photo-1496327249223-c84a3c1db090?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
        ></img>
        <div id="wrap-form-title">
          <h1 id="form-title"><FormattedMessage id="RegisterVehicle"/></h1>
        </div>
        <div className="card form">
          <h2 id="mandatory-form"><FormattedMessage id="RequiredFields"/></h2>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col">
                <label>
                <FormattedMessage id="ModelYear"/>{" "}
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Ej. 1999"
                    required
                  />
                  <br></br>
                </label>
              </div>
              <div className="col">
                <label>
                <FormattedMessage id="TraveledKM"/>{" "}
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Ej. 100000"
                    required
                  />
                  <br></br>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>
                <FormattedMessage id="CarCategory"/>{" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ej. Camioneta"
                    required
                  />
                  <br></br>
                </label>
              </div>
              <div className="col">
                <label>
                <FormattedMessage id="CarColor"/>{" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ej. Azul"
                    required
                  />
                  <br></br>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>
                <FormattedMessage id="Date"/>{" "}
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Fecha"
                    required
                  />
                  <br></br>
                </label>
              </div>
              <div className="col">
                <label>
                <FormattedMessage id="CarName"/>{" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ej. BMW 509 7"
                    required
                  />
                  <br></br>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>
                <FormattedMessage id="CarPlate"/>{" "}
                  <input
                    type="text"
                    className="form-control"
                    pattern="[A-Za-z]{3}-[0-9]{3}"
                    title="3 letras y 3 numeros separados por el simbolo -. Ej. ABC-123"
                    placeholder="Ej. ABC-123"
                    required
                  />
                  <br></br>
                </label>
              </div>
              <div className="col">
                <label>
                <FormattedMessage id="SellingPrice"/>{" "}
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Ej. 30000000"
                    required
                  />
                  <br></br>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>
                <FormattedMessage id="CarBrand"/>{" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ej. BMW"
                    required
                  />
                  <br></br>
                </label>
              </div>
              <div className="col">
                <label>
                <FormattedMessage id="DisplacementCC"/>{" "}
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Ej 3000"
                    required
                  />
                  <br></br>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>
                <FormattedMessage id="DisplacementCap"/>{" "}
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Ej 3"
                    required
                  />
                  <br></br>
                </label>
              </div>
              <div className="col">
                <label>
                <FormattedMessage id="CarModel"/>{" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ej. BMW 509"
                    required
                  />
                  <br></br>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>
                <FormattedMessage id="DoorsNum"/>{" "}
                  <input
                    type="number"
                    min="1"
                    max="5"
                    className="form-control"
                    placeholder="4"
                    required
                  />
                  <br></br>
                </label>
              </div>
              <div className="col">
                <label>
                <FormattedMessage id="CarTransm"/>{" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mecanica"
                    required
                  />
                  <br></br>
                </label>
              </div>
            </div>
            <button type="submit" className="btn-form">
            <FormattedMessage id="AddCar"/>
            </button>
            <div></div>
          </form>
        </div>
      </div>
                
            )
        }
    }
}
export default CarForm;
