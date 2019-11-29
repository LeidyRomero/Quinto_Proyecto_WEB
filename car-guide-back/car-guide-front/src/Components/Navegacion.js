import React, { Component } from "react";
import {NavLink }  from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import "./NavegacionFooter.css";
import Cookies from 'js-cookie';


class Navegacion extends Component {
  constructor(props) { 
    super(props);
    this.state = { 
      pagActual:'Inicio',
      logged_state: null,
    }; 
  }


  render(){
      return(
      <nav className="navbar" role="navigation">
          <NavLink to="/" id="logo-inicio"><img src="logo.png" alt="nav-logo" id="nav-logo"/></NavLink>
              <div className="nav-links">
                  <NavLink to="/" className="nav-link" id="btn-inicio">INICIO</NavLink>
                  <NavLink to="/cars" className="nav-link" id="btn-cars">VENTAS</NavLink>
                  <NavLink to="/services" className="nav-link" id="btn-services">SERVICIOS</NavLink>
                  {/*TODO: implements this component */}
                  {/* <NavLink to="/users" className="nav-link" id="btn-users">USUARIOS</NavLink> */}
                  <NavLink to="/car" className="nav-link" id="btn-add">ADMIN</NavLink>
                  {/*TODO: implements this component */}
                  {/* <NavLink to="/comparator" className="nav-link" id="btn-compare">COMPARAR</NavLink> */}
                  <NavLink to="/" className="nav-link-profile" ><FontAwesomeIcon icon={faUser} size="1x"/>&nbsp; &nbsp;{this.props.user_name}</NavLink>
                  {this.props.logged}
              </div>
      </nav>
      );
    }

}

export default Navegacion;