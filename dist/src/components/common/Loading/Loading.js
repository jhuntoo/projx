"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_jss_1 = require("react-jss");
const Progress_1 = require("material-ui/Progress");
const styles = theme => ({
    loading: {
        display: "flex",
        background: props => props.overrides && props.overrides.background
            ? props.overrides.background
            : theme.base.colors.background,
        position: "absolute",
        left: props => (props.overrides && props.overrides.left ? props.overrides.left : 0),
        right: props => (props.overrides && props.overrides.right ? props.overrides.right : 0),
        top: "0",
        width: props => (props.overrides && props.overrides.width ? props.overrides.width : "100%"),
        height: props => (props.overrides && props.overrides.height ? props.overrides.height : "100%"),
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "&::after": {
            content: props => (props.afterLeft || props.afterRight ? `""` : ``),
            position: "absolute",
            right: props => (props.afterRight ? 0 : ""),
            left: props => (props.afterLeft ? 0 : ""),
            top: theme.base.sizes.linesMargin,
            bottom: theme.base.sizes.linesMargin,
            width: 0,
            borderRight: `1px solid ${theme.base.colors.lines}`
        }
    },
    progress: {}
});
const Loading = (props) => {
    const { classes, progressSize } = props;
    return (react_1.default.createElement("div", { className: classes.loading },
        react_1.default.createElement(Progress_1.CircularProgress, { className: classes.progress, size: progressSize ? progressSize : 30 })));
};
;
exports.default = react_jss_1.default(styles)(Loading);
//# sourceMappingURL=Loading.js.map