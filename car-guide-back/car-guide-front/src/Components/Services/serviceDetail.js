import React, { Component } from "react";
import "../../App.css";

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
        fetch('/services/'+this.props.obj._id).then( (response) => {
            return response.json();
         }).then( (data) => {
            this.setState({data:data});
         });            
    };

    renderDetail() {
        if (this.state.data) 
        {
            return (
                <div>
                    <h1>{this.props.data.name}</h1>
                    <h3>Descripcion:</h3>
                    <p>{this.props.data.description}</p>
                    <h3>Precio: </h3><p>{this.props.data.price}</p>
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