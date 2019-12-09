import * as React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";
 
export default class GoogleDiagram extends React.Component {
  render() {
    return (
      <div className={"googleChart-container"}>
       <Chart
  width={'1000px'}
  height={'600px'}
  chartType="BarChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Marca', 'Precio'],
    ['Renault', 28000000],
    ['Chevrolet', 260000000],
    ['Mercedez Benz', 250000000],
    ['BMW', 270000000],
    ['Audi', 180000000],
    ['Toyota', 130000000],
    ['Mazda', 52000000],
  ]}
  options={{
    title: 'Precio promedio de los automóviles',
    chartArea: { width: '50%' },
    hAxis: {
      title: 'Rango de Precios',
      minValue: 0,
    },
    vAxis: {
      title: 'Marcas',
    },
    animation: {
        startup: true,
        easing: 'linear',
        duration: 1500,
      },
      colors: ['#cb2e2d']
  }}
  // For tests
  rootProps={{ 'data-testid': '1' }}
  chartEvents={[
    {
      eventName: 'animationfinish',
      callback: () => {
        console.log('Animation Finished')
      },
    },
  ]}
/>
      </div>
    );
  }
}