import React from 'react';
import ReactEcharts from "echarts-for-react";
import PropTypes from 'prop-types'
import handleGraphProps from '../utils/handleGraphProps'

function LineGraph(props)  {
    const config = handleGraphProps(props);
    console.log(config);

    const option = {
        dataset: {
            source: [
                props.category,
                props.data
            ]
        },
        title: {
            text: props.graphName
        },
        tooltip: {},
        legend: props.legend,
        xAxis: config.xAxis,
        yAxis: config.yAxis,
        series: [
            {
                type: 'line',
                seriesLayoutBy: 'row',
                encode: config.encode
            }
        ]
    };

    return (
        <ReactEcharts
            option={option}
            theme={config.theme}
            style={config.styles}
        />
    )
}

LineGraph.propTypes = {
    category: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    graphName: PropTypes.string,
    legend: PropTypes.array,
    theme: PropTypes.string,
    layout: PropTypes.string,
    width: PropTypes.string | PropTypes.number,
    height: PropTypes.string | PropTypes.number
};

LineGraph.defaultProps = {
    graphName: '',
    yAxis: null,
    legend: null,
    theme: "light",
    layout: 'column'
};

export default LineGraph