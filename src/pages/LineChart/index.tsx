import React from 'react';
import styles from './index.less';
import { Line, LineConfig } from '@ant-design/charts';
//import { Line, LineConfig } from '@ant-design/plots';
import { MappingAlgorithm, Space, Switch, theme } from 'antd';
import { useAntdConfig, useAntdConfigSetter } from 'umi';

const { darkAlgorithm, defaultAlgorithm } = theme;
const Page: React.FC = () => {
  const antdConfig = useAntdConfig();
  
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
  const config: LineConfig = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: { style: { fill: 'black' } },
    //line: { style: { fill: 'black' } },
    // annotations: [{
    //   type: 'axisX',
    //   tickCount: 25,
    //   title: 'My X-Values',
    //   labelFormatter: (e) => { return e+" year"}, 
    //   label: { style: { fill: 'black',stroke: 'red',
    //    } },
    //   //line: { style: { fill: 'red' } },
    //   style: {
    //     stroke: 'red',
    //     fill: "red",
    //   }
    // },
    // {
    //   type: "lineX",
    //   xField: '0',
    //   style: { stroke: "#F4664A", strokeOpacity: 1, lineWidth: 1 },
    // },
    // {
    //   type: 'axisY',
    //   tickCount: 25,
    //   //title: 'My Y-Values',
    // },
    
    // ],
    
    axis: {
      x: {
        title: 'My X-Values',
        titleStroke: 'red',
        line: true,
        arrow: true,
        lineLineWidth: 2,
        lineStroke: 'red',
        tick: true,
        tickStroke: 'red',
        label: true,
        labelFill: 'red',
        grid: true,
        gridLineWidth: 2,
        gridStroke: 'green',
      },
      y: { 
        title: 'My Y-Values',
        titleStroke: 'red',
        line: true,
        arrow: true,
        lineLineWidth: 2,
        lineStroke: 'red',
        tick: true,
        tickStroke: 'red',
        label: true,
        labelFill: 'red',
        grid: true,
        gridLineWidth: 2,
        gridStroke: 'green',
      },
    },
    // theme: antdConfig?.theme?.algorithm.includes(darkAlgorithm)? 'dark' : 'light',
  };
  //https://ant-design-charts-next.antgroup.com/options/plots/component/axis

  return (<div style={{backgroundColor: "rgb(100, 100, 100)"}}><Line {...config} /></div>);
};
export default Page;