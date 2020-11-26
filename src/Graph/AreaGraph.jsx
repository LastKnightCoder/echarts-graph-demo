import React from 'react';
import ReactEcharts from "echarts-for-react";
import PropTypes from 'prop-types'
import echarts from 'echarts'
import handleGraphProps from "../utils/handleGraphProps";

function AreaGraph(props)  {
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
                type: 'line',
                areaStyle:{
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00c1de'
                    }, {
                        offset: 1,
                        color: 'rgba(0,0,0,0)'
                    }]),
                },
                color:"#42bff4",//折线图颜色
                smooth:true,
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

AreaGraph.propTypes = {
    category: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    graphName: PropTypes.string,
    legend: PropTypes.array,
    theme: PropTypes.string,
    layout: PropTypes.string,
    width: PropTypes.string | PropTypes.number,
    height: PropTypes.string | PropTypes.number
};

AreaGraph.defaultProps = {
    graphName: '',
    yAxis: null,
    legend: null,
    theme: "light",
    layout: 'column'
};

export default AreaGraph