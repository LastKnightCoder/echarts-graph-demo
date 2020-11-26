import handleGraphStyle from "./handleGraphStyle";
import handleGraphTheme from "./handleGraphTheme";

function handleGraphProps(props) {
    let xAxis;
    let yAxis;
    let encode;
    if (props.layout !== 'column') {
        xAxis = {};
        yAxis = {type: 'category'};
        encode = {
            x: 1,
            y: 0
        }
    } else {
        xAxis = {type: 'category'};
        yAxis = {};
        encode = {
            x: 0,
            y: 1
        }
    }

    const styles = handleGraphStyle(props);
    const theme = handleGraphTheme(props);

    return {
        xAxis,
        yAxis,
        encode,
        styles,
        theme
    }
}

export default handleGraphProps