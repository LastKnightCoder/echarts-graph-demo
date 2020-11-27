import React from 'react';
import ReactDOM from 'react-dom';
import AreaGraph from "./Graph/AreaGraph";
import BarGraph from "./Graph/BarGraph";
import LineGraph from "./Graph/LineGraph";
import PieGraph from "./Graph/PieGraph";
import RadarGraph from "./Graph/RadarGraph";
import PolarBarGraph from "./Graph/PolarBarGraph";
import CubicBarGraph from "./Graph/CubicBarGraph";

const category = ['教职人员', '学生', '家长', '管理人员', '就业人员', '下岗人员'];
const data = [200, 150, 250, 175, 100, 60];
const indicator = [
    {
        name: 'points',
        max: 30
    }, {
        name: 'rebounds',
        max: 10
    }, {
        name: 'assists',
        max: 10
    }, {
        name: 'steals',
        max: 2
    }, {
        name: 'blocks',
        max: 2
    }
];
const players = ['LeBron James', 'Dwyane Wade'];
const scores = [
    [28.0, 8.4, 6.1, 1.9, 0.8],
    [22.3, 5.0, 4.5, 1.7, 1.3]
];

const max = [300, 300, 300, 300, 300, 300];

ReactDOM.render(
  <React.StrictMode>
    <AreaGraph category={category}
              data={data}
              graphName={'Area Graph'}
              layout={'column'}
              width={'100%'}
              height={400}
    />
    <BarGraph category={category}
             data={data}
             graphName={'Bar Graph'}
             layout={'column'}
             width={'100%'}
             height={400}
    />
  <LineGraph category={category}
             data={data}
             graphName={'Line Graph'}
             layout={'column'}
             width={'100%'}
             height={400}
  />
  <PieGraph data={data}
            category={category}
            graphName={'PieGraph'}
            width={'100%'}
            height={400}
  />
  <RadarGraph
    indicator={indicator}
    category={players}
    data={scores}
    graphName={'Radar Graph'}
  />
  <PolarBarGraph
    category={category}
    data={data}
    graphName={'PolarBar Graph'}
    width={'60%'}
    height={600}
    // theme={'dark'}
  />
  <CubicBarGraph
    category={category}
    data={data}
    max={max}
    height={600}
    width={'80%'}
    graphName={'CubicBar Graph'}
  />
  </React.StrictMode>,
  document.getElementById('root')
);
