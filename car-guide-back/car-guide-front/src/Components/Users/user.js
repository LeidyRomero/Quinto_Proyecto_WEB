import React, { Component } from "react";
import "./users.css";

import {FormattedMessage} from "react-intl";

class User extends Component {
  render() {
    return (
      <div className="user-card">
        <h5 className="user-card-title">{this.props.obj.name}</h5>

        <h6 className="user-card-sub-title"><span id="user-span">Email:</span> {this.props.obj.email}</h6>

        <h6 className="user-card-sub-title2"><span id="user-span"><FormattedMessage id="Age"/>:</span>  {this.props.obj.age}</h6>

        <h6 className="user-card-sub-title"><span id="user-span"><FormattedMessage id="Phone"/>:</span>  {this.props.obj.phone}</h6>

        <h6 className="user-card-sub-title2"><span id="user-span"><FormattedMessage id="Role"/>:</span> {this.props.obj.role}</h6>
      </div>
    );
  }
}
export default User;
