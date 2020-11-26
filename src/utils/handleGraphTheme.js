function handleGraphTheme(props) {
    let theme = props.theme;
    if (theme !== "light" && theme !== "dark") {
        theme = "light";
    }

    return theme
}

export default handleGraphTheme