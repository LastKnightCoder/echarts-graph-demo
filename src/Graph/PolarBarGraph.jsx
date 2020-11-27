import React from 'react'
import PropTypes from 'prop-types'
import ReactEcharts from "echarts-for-react";
import echarts from 'echarts'
import handleGraphStyle from "../utils/handleGraphStyle";
import handleGraphTheme from "../utils/handleGraphTheme";

function PolarBarGraph(props) {
    const option = {
        title: {
            text: props.graphName
        },
        tooltip: {},
        xAxis: [{
            data: props.category,
            axisLabel: {
                textStyle: {
                    color: '#aaaaaa',
                    fontSize:14
                },
                margin: 30, //刻度标签与轴线之间的距离。
            },
            axisLine: {
                show: false //不显示x轴
            },
            axisTick: {
                show: false //不显示刻度
            },
            boundaryGap: true,
        }],
        yAxis: [
            {
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#eee',
                        type: 'solid'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#888'
                    },
                }
            }
        ],
        series: [
            {//柱底圆片
                name: "",
                type: "pictorialBar",
                symbolSize: [60, 22],//调整截面形状
                symbolOffset: [0, 10],
                z: 12,
                itemStyle: {
                    "normal": {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(89,211,255,1)"
                        },
                            {
                                offset: 1,
                                color: "rgba(23,237,194,1)"
                            }
                        ])
                    }
                },
                data: props.data
            },

            //柱体
            {
                name: '',
                type: 'bar',
                barWidth: 60,
                barGap: '0%',
                itemStyle: {
                    "normal": {
                        "color": {
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "type": "linear",
                            "global": false,
                            "colorStops": [{//第一节下面
                                "offset": 0,
                                "color": "rgba(0,255,245,0.5)"
                            }, {
                                "offset": 1,
                                "color": "#43bafe"
                            }]
                        }
                    }
                },

                data: props.data
            },

            //柱顶圆片
            {
                name: "",
                type: "pictorialBar",
                symbolSize: [60, 22],//调整截面形状
                symbolOffset: [0, -10],
                z: 12,
                symbolPosition: "end",
                "itemStyle": {
                    "normal": {
                        color: new echarts.graphic.LinearGradient(0,0,0,1,
                            [{
                                offset: 0,
                                color: "rgba(89,211,255,1)"
                            },
                                {
                                    offset: 1,
                                    color: "rgba(23,237,194,1)"
                                }
                            ],
                            false
                        ),
                    }
                },
                data: props.data
            }
        ]
    };

    const styles = handleGraphStyle(props);
    const theme = handleGraphTheme(props);

    return <ReactEcharts
        option={option}
        style={styles}
        theme={theme}
    />
}

PolarBarGraph.propTypes = {
    category: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    graphName: PropTypes.string,
    width: PropTypes.string | PropTypes.number,
    height: PropTypes.string | PropTypes.number,
    theme: PropTypes.string
};

PolarBarGraph.defaultProps = {
    graphName: '',
    theme: 'light'
};

export default PolarBarGraph
