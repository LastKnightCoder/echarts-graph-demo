import React from 'react';
import ReactEcharts from "echarts-for-react";
import PropTypes from 'prop-types'

import handleGraphProps from "../utils/handleGraphProps";

function BarGraph(props)  {
    const config = handleGraphProps(props);

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
        xAxis: config.xAxis,
        yAxis: config.yAxis,
        series: [
            {
                type: 'bar',
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

BarGraph.propTypes = {
    category: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    graphName: PropTypes.string,
    legend: PropTypes.array,
    theme: PropTypes.string,
    layout: PropTypes.string,
    width: PropTypes.string | PropTypes.number,
    height: PropTypes.string | PropTypes.number
};

BarGraph.defaultProps = {
    barName: '',
    yAxis: null,
    legend: null,
    theme: "light",
    layout: 'column'
};

export default BarGraph