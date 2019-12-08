import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { post } from 'axios';
import App from '../../App';
import { isUndefined } from 'util';

import {FormattedMessage} from "react-intl";


class Login extends React.Component {
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
    
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    var user = {email, password};

    post('/users/login', user)
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
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                  <div className="card-body">
                    <h5 className="card-title text-center"><FormattedMessage id="Sigin"/></h5>
                    <form className="form-signin"  onSubmit={this.handleSubmit}>
                      <div className="form-label-group">
                        <input type="email" id="login-email" className="form-control" placeholder="Email" required autoFocus/>
                      </div>
                      <div className="form-label-group">
                        <input type="password" id="login-password" className="form-control" placeholder="Contraseña" required autoFocus></input>
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"></input>
                        <label className="custom-control-label" htmlFor="customCheck1"><FormattedMessage id="RememberMe"/></label>
                      </div>
                      <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit"><FormattedMessage id="Signin"/></button>
                      <br></br>
                      <small className="text-center">
                        <FormattedMessage id="RegisterMsg"/>{" "}
                        <Link to="/signup"><FormattedMessage id="Here"/></Link>
                      </small>
                      <hr className="my-4"></hr>
                      <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> <FormattedMessage id="Google"/></button>
                      <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> <FormattedMessage id="Facebook"/></button>                   
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

export default Login;
