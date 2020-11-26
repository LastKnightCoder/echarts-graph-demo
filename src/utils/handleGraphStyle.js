function handleGraphStyle(props) {
    const styles = {
        width: '100%',
        height: '400px'
    };

    const params = ["width", "height"];

    for (let i = 0; i < params.length; i++) {
        let param = params[i];
        if (props[param] !== undefined) {
            if (typeof props[param] === 'string' && (props[param].indexOf("%") !== -1 || props[param].indexOf("px") !== -1)) {
                styles[param] = props[param];
            } else {
                styles[param] = props[param] + 'px';
            }
        }
    }

    let theme = props.theme;
    if (theme !== "light" && theme !== "dark") {
        theme = "light";
    }

    return styles
}

export default handleGraphStyle