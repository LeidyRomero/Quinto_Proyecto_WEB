import React, { Component } from "react";
import "./users.css";

class User extends Component {
  render() {
    return (
      <div className="user-card">
        <h5 className="user-card-title">{this.props.obj.name}</h5>

        <h6 className="user-card-sub-title"><span id="user-span">Correo:</span> {this.props.obj.email}</h6>

        <h6 className="user-card-sub-title2"><span id="user-span">Edad:</span>  {this.props.obj.age}</h6>

        <h6 className="user-card-sub-title"><span id="user-span">Número:</span>  {this.props.obj.phone}</h6>

        <h6 className="user-card-sub-title2"><span id="user-span">Tipo:</span> {this.props.obj.role}</h6>
      </div>
    );
  }
}
export default User;
