import React, { Component }  from "react";
import Navegacion from "./Components/Navegacion";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Home from "./Components/Home/statistics";
import ServicesList from './Components/Services/servicesList';
import CarsList from './Components/Cars/carsList';
import CarDetail from './Components/Cars/carDetail';
import UsersList from './Components/Users/usersList';
import CarForm from './Components/Cars/carForm';
import Login from './Components/Users/Login';
import Register from './Components/Users/Register.js';
import Comparator from './Components/Comparator/Comparator.js';
import Forbidden from './Components/Forbidden/Forbidden.js';
import { post, get } from 'axios';
import DiagramaBarras from "./Components/Home/diagramaBarras";

import {FormattedMessage} from "react-intl";

export default class app extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_name: "Guest",
      user_role: "Guest",
      logged: null,
    };

    this.handdleLogout = this.handdleLogout.bind(this);
    this.changeState = this.changeState.bind(this);

  }

  componentWillMount(){
    
    this.state.logged = <NavLink to="/login"> <button className="nav-btn-login"><FormattedMessage id="Login"/></button></NavLink>;

  }

  handdleLogout(){
    console.log("logout")
  }
 
  changeState(newUsername, newUserRole) {
    this.setState({
      user_name: newUsername,
      user_role: newUserRole,
      logged : <Button className="nav-btn-logout" variant="warning" onClick={this.handdleLogout}><FormattedMessage id="Logout"/></Button>,
    });
  }

  render() {

    return (
      <div>
          <BrowserRouter>
            <div id="nav">
              <Navegacion user_name={this.state.user_name} user_role={this.state.user_role} logged={this.state.logged}/>
            </div>   
            <Route path="/login" render={() =><Login changeState={this.changeState.bind(this)}/>}/>
            <Route path="/signup" render={() =><Register changeState={this.changeState.bind(this)}/>}/>
            <Route exact path="/" component={Home} />
            <Route path="/cars" component={CarsList} exact/>
            <Route path="/cars/:license" component={CarDetail} exact/>
            <Route path="/services" component={ServicesList} exact/>
            <Route path="/users" component={UsersList} exact/>
            <Route path="/car" render={() =><CarForm user_role={this.state.user_role}/>}/>
            <Route path="/comparator" component={Comparator} exact/>
            <Route path="/forbidden" component={Forbidden}/>
            <Route path="/firstDiagram" component={DiagramaBarras}/>
          </BrowserRouter>
        
        <div id="footer">
          <Footer />
        </div> 
      </div>
    );
  }
}