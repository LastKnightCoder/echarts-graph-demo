import React from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts'
import ReactEcharts from "echarts-for-react";
import handleGraphStyle from "../utils/handleGraphStyle";
import handleGraphTheme from "../utils/handleGraphTheme";

function CubicBarGraph(props) {
    const styles = handleGraphStyle(props);
    const theme = handleGraphTheme(props);
    const CubeLeft = echarts.graphic.extendShape({
        shape: {
            x: 0,
            y: 0
        },
        buildPath: function(ctx, shape) {
            const xAxisPoint = shape.xAxisPoint;
            const c0 = [shape.x, shape.y];
            const c1 = [shape.x - 9, shape.y - 9];
            const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9];
            const c3 = [xAxisPoint[0], xAxisPoint[1]];
            ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
        }
    });

    const CubeRight = echarts.graphic.extendShape({
        shape: {
            x: 0,
            y: 0
        },
        buildPath: function(ctx, shape) {
            const xAxisPoint = shape.xAxisPoint;
            const c1 = [shape.x, shape.y];
            const c2 = [xAxisPoint[0], xAxisPoint[1]];
            const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9];
            const c4 = [shape.x + 18, shape.y - 9];
            ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
        }
    });

    const CubeTop = echarts.graphic.extendShape({
        shape: {
            x: 0,
            y: 0
        },
        buildPath: function(ctx, shape) {
            const c1 = [shape.x, shape.y];
            const c2 = [shape.x + 18, shape.y - 9];
            const c3 = [shape.x + 9, shape.y - 18];
            const c4 = [shape.x - 9, shape.y - 9];
            ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
        }
    });

    echarts.graphic.registerShape('CubeLeft', CubeLeft);
    echarts.graphic.registerShape('CubeRight', CubeRight);
    echarts.graphic.registerShape('CubeTop', CubeTop);
    const option = {
        title: {
            text: props.graphName,
            top: 32,
            left: 18
        },
        grid: {
            left: 20,
            right: 40,
            bottom: '19%',
            top: 107,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: props.category,
            offset: 20,
            axisTick: {
                show: false,
                length: 9,
                alignWithLabel: true,
                lineStyle: {
                    color: '#7DFFFD'
                }
            },
            axisLabel: {
                fontSize: 10
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                fontSize: 16
            },
            boundaryGap: ['20%', '20%']
        },
        series: [{
            type: 'custom',
            renderItem: function(params, api) {
                const location = api.coord([api.value(0), api.value(1)])
                return {
                    type: 'group',
                    children: [{
                        type: 'CubeLeft',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: 'rgba(7,29,97,.6)'
                        }
                    }, {
                        type: 'CubeRight',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: 'rgba(10,35,108,.7)'
                        }
                    }, {
                        type: 'CubeTop',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: 'rgba(11,42,106,.8)'
                        }
                    }]
                }
            },
            data: props.max
        }, {
            type: 'custom',
            renderItem: (params, api) => {
                const location = api.coord([api.value(0), api.value(1)]);
                return {
                    type: 'group',
                    children: [{
                        type: 'CubeLeft',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#3B80E2'
                            },
                                {
                                    offset: 1,
                                    color: '#49BEE5'
                                }
                            ])
                        }
                    }, {
                        type: 'CubeRight',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#3B80E2'
                            },
                                {
                                    offset: 1,
                                    color: '#49BEE5'
                                }
                            ])
                        }
                    }, {
                        type: 'CubeTop',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#3B80E2'
                            },
                                {
                                    offset: 1,
                                    color: '#49BEE5'
                                }
                            ])
                        }
                    }]
                }
            },
            data: props.data
        }, {
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 16,
                    color: 'black',
                    offset: [4, -25]
                }
            },
            itemStyle: {
                color: 'transparent'
            },
            data: props.max
        }]
    };

    return <ReactEcharts
        option={option}
        style={styles}
        theme={theme}
    />
}

CubicBarGraph.propTypes = {
    category: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    max: PropTypes.array.isRequired,
    graphName: PropTypes.string,
    width: PropTypes.string | PropTypes.number,
    height: PropTypes.string | PropTypes.number,
    theme: PropTypes.string
};

CubicBarGraph.defaultProps = {
    graphName: '',
    theme: 'light'
};

export default CubicBarGraph