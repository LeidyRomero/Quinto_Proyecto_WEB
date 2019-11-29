import React, { Component } from "react";
import "./users.css";
import User from "./user";
class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: []
    };
    this.renderUsers = this.renderUsers.bind(this);
  }
  componentDidMount() {
    fetch("/users")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ usuarios: data });
      });
  }

  renderUsers() {
    if (this.state.usuarios.length > 0) {
      return this.state.usuarios.map((user, i) => (
        <div className="col-md-6">
          <User obj={user} key={i} />
        </div>
      ));
    }
  }
  render() {
    return (
      <div className="users">
        <img
          id="users-image"
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        />
        <div id="wrap-users-title">
          <h1 className="users-title">Usuarios</h1>
        </div>
        <div className="users-list">
        {this.renderUsers()}
        </div>
      </div>
    );
  }
}
export default UsersList;
