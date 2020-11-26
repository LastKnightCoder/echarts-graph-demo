import React from 'react'
import ReactEcharts from "echarts-for-react";
import PropTypes from 'prop-types'

import handleGraphStyle from "../utils/handleGraphStyle";
import handleGraphTheme from "../utils/handleGraphTheme";

function PieGraph(props) {
    const option = {
        dataset: {
            source: [
                props.category,
                props.data
            ]
        },
        tooltip: {},
        title: {
            text: props.graphName
        },
        series: [
            {
                type: 'pie',
                seriesLayoutBy: 'row'
            }
        ]
    };

    const theme = handleGraphTheme(props);
    const styles = handleGraphStyle(props);

    return <ReactEcharts
            option={option}
            theme={theme}
            style={styles}
           />
}

PieGraph.propTypes = {
    category: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    graphName: PropTypes.string,
    theme: PropTypes.string,
    width: PropTypes.string | PropTypes.number,
    height: PropTypes.string | PropTypes.number
};

PieGraph.defaultProps = {
    theme: 'light',
    graphName: ''
};

export default PieGraph