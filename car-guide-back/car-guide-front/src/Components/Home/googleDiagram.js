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
    ['Renault', 28222222],
    ['Chevrolet', 260155555],
    ['Mercedez Benz', 257555555],
    ['BMW', 272333333],
    ['Audi', 179777777],
    ['Toyota', 136444444],
    ['Mazda', 52444444],
  ]}
  options={{
    title: 'Precio de los automóviles',
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