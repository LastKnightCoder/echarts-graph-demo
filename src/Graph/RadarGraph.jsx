import React from 'react'
import PropTypes from 'prop-types'
import ReactEcharts from "echarts-for-react"

function RadarGraph(props) {
    const data = [];

    props.category.forEach((item, index) => {
        let obj = {};
        obj.name = item;
        obj.value = props.data[index];
        data.push(obj);
    });

    const option = {
        title: {
            text: props.graphName
        },
        tooltip: {},
        // dataset
        radar: {
          indicator: props.indicator
        },
        series: {
            type: 'radar',
            areaStyle: {
                normal: {}
            },
            data: data
        }
    };

    return <ReactEcharts option={option} />
}

RadarGraph.propTypes = {
    category: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    indicator: PropTypes.array.isRequired,
    graphName: PropTypes.string
};

RadarGraph.defaultProps = {
    graphName: ""
};

export default RadarGraph