import React, {Component} from "react";
import './Comparator.css';
class Comparator extends Component {
    constructor(props)
    {
        super(props);
        this.state= { 
            opcion:"",
            datos:[],
          };
        
        this.renderComparator = this.renderComparator.bind(this);
    }
    changeState(event){
        this.setState({opcion:event.target.value});
    };
    componentDidMount(){
        if (!navigator.onLine) {
            if (localStorage.getItem('datosComparador') === null)
                this.setState({ datos: "loading..." })
            else
                this.setState({ datos: localStorage.getItem('datosComparador') });
        }
        fetch(
            "/comparisons/" 
         ).then((response)=>{return response.json();
         }).then(data=>{
         this.setState({datos:data});
         localStorage.setItem('datosComparador', data);
       })
    }
    renderComparator() {
            return (
                <div className="row">
                <div className="row">
                    <div className = "column-md-3 background-menu">
                        <p><b>COMPARAR VEHICULOS</b></p>
                        <button type="submit" className="btn btn-danger">GUARDAR COMPARACION</button>

                        <button onClick={this.changeState} value ="CATEGORIA">CATEGORIA</button>
                        <button onClick={this.changeState} value ="MODELO">MODELO</button>
                        <button onClick={this.changeState} value ="MARCA">MARCA</button>
                        <button onClick={this.changeState} value ="AÑO">AÑO</button>
                    </div>
                </div>
            {this.state.datos.length>0 ? 
               <div className = "column-md-9">
               <div className="row justify-content-center">
                   <div className = "column-md-6">
                       <select>
                           <option value="volvo">Volvo</option>
                           <option value="saab">Saab</option>
                       </select>

                   </div> 
                   <div className = "column-md-6">
                       <select>
                           <option value="volvo">Volvo</option>
                           <option value="saab">Saab</option>
                       </select>
                   </div>
                   </div>
               </div>
               :
                 null}
            </div>
            ) 
    }
    render()
    {
        return(
        <div>
            {this.renderComparator()}
        </div>
        )
    }

}
export default Comparator;