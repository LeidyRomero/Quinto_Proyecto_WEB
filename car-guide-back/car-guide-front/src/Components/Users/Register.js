import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { post } from 'axios';

import {FormattedMessage} from "react-intl";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      user: null,
      error: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {

    e.preventDefault();
    let username = document.getElementById("register-username").value;
    let name = document.getElementById("register-name").value;
    let age = document.getElementById("register-age").value;
    let email = document.getElementById("register-email").value;
    let phone = document.getElementById("register-phone").value;
    let password = document.getElementById("register-password").value; 
    let role = document.getElementById("register-role").value;
    var user = {username, name, age, email, phone, password, role };

    post('/users/signup', user)
    .then((res) => {
      this.setState({
        redirectToReferrer: true,
        user: res.data.user
      })

      this.props.changeState(this.state.user.username, this.state.user.role);

    })
    .catch((error) =>{
      console.log(error);
    });
    
  }

  render() {
    
    const redirectToReferrer = this.state.redirectToReferrer;
    if (redirectToReferrer === true) {
        return <Redirect to="/" />
    }

    return (
      <div className="top_spaced">
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-md-6">
              <div className="logo-wrap">
                <img id="logo" src="Signin.jpg" />
              </div>
          </div>
            <div className="col-md-6">
              <div className="card card-signin my-5">
                <div className="card-header text-center"><FormattedMessage id="REGISTER"/></div>
                    <div className="card-body">
                      <form className="form-horizontal form-signin" id="register-form"  onSubmit={this.handleSubmit}>
                          <div className="form-group">
                              <label htmlFor="name" className="cols-sm-2 control-label"><FormattedMessage id="Name"/></label>
                              <div className="cols-sm-10">
                                  <div className="input-group">
                                      <span className="input-group-addon"></span>
                                      <input type="text" className="form-control" name="name" id="register-name" placeholder="Pepito Perez" required/>
                                  </div>
                              </div>
                          </div>
                          <div className="form-group">
                              <label htmlFor="email" className="cols-sm-2 control-label">Email</label>
                              <div className="cols-sm-10">
                                  <div className="input-group">
                                      <span className="input-group-addon"></span>
                                      <input type="text" className="form-control" name="email" id="register-email" placeholder="Email" required/>
                                  </div>
                              </div>
                          </div>
                          <div className="form-group">
                              <label htmlFor="username" className="cols-sm-2 control-label"><FormattedMessage id="Username"/></label>
                              <div className="cols-sm-10">
                                  <div className="input-group">
                                      <span className="input-group-addon"></span>
                                      <input type="text" className="form-control" name="username" id="register-username" placeholder="PepPerez" required/>
                                  </div>
                              </div>
                          </div>
                          <div className="form-group">
                              <label htmlFor="username" className="cols-sm-2 control-label"><FormattedMessage id="Age"/></label>
                              <div className="cols-sm-10">
                                  <div className="input-group">
                                      <span className="input-group-addon"></span>
                                      <input type="number" className="form-control" name="age" id="register-age" placeholder="22" required autoFocus/>
                                  </div>
                              </div>
                          </div>
                          <div className="form-group">
                              <label htmlFor="username" className="cols-sm-2 control-label"><FormattedMessage id="Phone"/></label>
                              <div className="cols-sm-10">
                                  <div className="input-group">
                                      <span className="input-group-addon"></span>
                                      <input type="number" className="form-control" name="phone" id="register-phone" placeholder="3022285078" autoFocus/>
                                  </div>
                              </div>
                          </div>
                          <div className="form-group">
                              <label htmlFor="password" className="cols-sm-2 control-label"><FormattedMessage id="Password"/></label>
                              <div className="cols-sm-10">
                                  <div className="input-group">
                                      <span className="input-group-addon"></span>
                                      <input type="password" className="form-control" name="password" id="register-password" placeholder="Contraseña" required autoFocus/>
                                  </div>
                              </div>
                          </div>
                          <div className="form-group">
                              <label htmlFor="confirm" className="cols-sm-2 control-label"><FormattedMessage id="Confirm"/></label>
                              <div className="cols-sm-10">
                                  <div className="input-group">
                                      <span className="input-group-addon"></span>
                                      <input type="password" className="form-control" name="confirm" id="register-confirm" placeholder="Confirma tu contraseña" required autoFocus/>
                                  </div>
                              </div>
                          </div>
                          <div className="form-group">
                              <div className="cols-sm-10">
                                  <div className="input-group">
                                  <input type="hidden" className="form-control input-lg" id="register-role" name="role"  value="User"/>                                  </div>
                              </div>
                          </div>
                          <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit"><FormattedMessage id="Register"/></button>
                          <div className="login-register">
                            <small className="text-center">
                            <FormattedMessage id="LoginMsg"/>{" "}
                              <Link to="/login"><FormattedMessage id="Here"/></Link>
                            </small>                        
                          </div>
                      </form>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
