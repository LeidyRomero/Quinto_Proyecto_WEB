import React, { Component } from "react";
import "../../App.css";

import {FormattedMessage} from "react-intl";
import {FormattedNumber} from "react-intl";

class ServiceDetail extends Component {

    constructor(props){
        super(props);
        this.state= { 
            data:{},
        };
        this.renderDetail = this.renderDetail.bind(this);
    }

    componentDidMount()
    {
        if (!navigator.onLine) {
            if (localStorage.getItem('dataServiceDetail') === null)
                this.setState({ data: "loading..." })
            else
                this.setState({ data: localStorage.getItem('dataServiceDetail') });
        }
        fetch('/services/'+this.props.obj._id).then( (response) => {
            return response.json();
         }).then( (data) => {
            this.setState({data:data});
            localStorage.setItem('dataServiceDetail', data);
         });            
    };

    renderDetail() {
        if (this.state.data) 
        {
            return (
                <div>
                    <h1>{this.props.data.name}</h1>
                    <h3><FormattedMessage id="Description"/>:</h3>
                    <p>{this.props.data.description}</p>
                    <h3><FormattedMessage id="Price"/>: </h3><p>$<FormattedNumber value={this.props.data.price}/> COP</p>
                    <img href={`${this.props.data.image}`} alt={`${this.props.data.name}`}/>
                </div>
            );
        }
    }

    render() {
        return(
            <div className="dashboard-background2">
                <div className="container-fluid">
                    <div className="row">
                        {this.renderDetail()}
                    </div>
                </div>
            </div>
        );
    }
    
}

export default ServiceDetail;