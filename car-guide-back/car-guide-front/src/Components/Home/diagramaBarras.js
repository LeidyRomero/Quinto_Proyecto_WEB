import React, { Component } from 'react';
import * as d3 from 'd3';

class DiagramaBarras extends Component {
    constructor(props) {
        super(props);
        this.state = {
          datos: []
        };
        this.drawChart = this.drawChart.bind(this);
      }
      componentDidMount() {
        if (!navigator.onLine) {
          if (localStorage.getItem('datosDiagrama') === null)
              this.setState({ datos: "loading..." })
          else
              this.setState({ datos: localStorage.getItem('datosDiagrama') });
              
      }
    
        fetch("/cars/")
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.setState({ datos: data });
            localStorage.setItem('datosDiagrama', data);
          });
      }
    render() {
        return (
            <div ref="canvas">{this.drawChart()}</div>
            
        );
    } 
    drawChart(){
        const width = 700;
        const height = 500;
        const margin = { top:10, left:50, bottom: 40, right: 10};
        const iwidth = width - margin.left - margin.right;
        const iheight = height - margin.top -margin.bottom;
        
        const svg = d3.select(this.refs.canvas).append('svg');
        svg.attr("width", width);
        svg.attr("height", height);
        
        let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        const x = d3.scaleBand()
        .domain(this.state.datos.map(d => d.name) ) 
        .range([0, iwidth])
		.padding(0.1); 
		
		const y = d3.scaleLinear()
        .domain(this.state.datos.map(d => d.price) ) ; 
        
        const bars = g.selectAll("rect").data(this.state.datos);
        
        const bar = bars.enter().append("rect")
        .attr("class", "bar")
        .style("fill", "steelblue")
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.price))
        .attr("height", d => iheight - y(d.price))
        .attr("width", x.bandwidth())  
        
        g.append("g")
        .classed("x--axis", true)
        .call(d3.axisBottom(x))
        .attr("transform", `translate(0, ${iheight})`);  
        
        g.append("g")
        .classed("y--axis", true)
        .call(d3.axisLeft(y));
        }
}



export default DiagramaBarras;