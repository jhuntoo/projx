"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_jss_1 = require("react-jss");
const IconButton_1 = require("material-ui/IconButton");
const Close_1 = require("material-ui-icons/Close");
const ExpandLess_1 = require("material-ui-icons/ExpandLess");
const styles = theme => ({
    closed: {
        display: "none",
        ".is-aside.closed &, .moving-featured.closed &": {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            margin: 0,
            height: `${theme.navigator.sizes.closedHeight}px`,
            padding: "0 30px 0 40px"
        },
        "& h3": {
            fontSize: "1.1em",
            color: theme.navigator.colors.postsHeader,
            fontWeight: 600,
            margin: "-.2em 0 0 0",
            textTransform: "uppercase",
            "& small": {
                fontSize: ".6em",
                display: "block",
                margin: "0 0 .1em",
                fontWeight: 300,
                letterSpacing: ".2em"
            }
        },
        expand: {
            position: "relative"
        }
    },
    filter: {
        margin: `0 calc(-.5rem + ${theme.base.sizes.linesMargin}) 1em calc(-.5rem + ${theme.base.sizes.linesMargin})`,
        position: "relative",
        fontSize: "1.2em",
        lineHeight: 1,
        color: theme.base.colors.accent,
        borderBottom: `1px solid ${theme.base.colors.lines}`,
        padding: "0 1em 1em",
        fontWeight: 300,
        "& strong": {
            fontWeight: 600,
            display: "block"
        },
        "& small": {
            display: "block",
            margin: "0 0 .3em 0"
        },
        [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
            margin: "0 0 1em 0",
            padding: "0 1em 1.5em",
            ".is-aside &": {
                padding: "0 0 1em .5em",
                margin: `0 calc(-.5rem + ${theme.base.sizes.linesMargin}) 1em calc(-.5rem + ${theme.base.sizes.linesMargin})`
            }
        }
    },
    clear: {
        position: "absolute",
        top: 0,
        right: 0
    }
});
const ListHeader = (props) => {
    const { classes, expandOnClick, categoryFilter, navigatorShape, removeFilter } = props;
    return (react_1.default.createElement("header", null,
        navigatorShape === "closed" && (react_1.default.createElement("div", { className: classes.closed },
            react_1.default.createElement("h3", null, "List of posts"),
            react_1.default.createElement(IconButton_1.default, { "aria-label": "Expand the list", className: classes.expand, onClick: expandOnClick, title: "Expand the list" },
                react_1.default.createElement(ExpandLess_1.default, null)))),
        navigatorShape === "open" &&
            categoryFilter !== "all posts" && (react_1.default.createElement("div", { className: classes.filter },
            react_1.default.createElement("small", null, "Active category filter:"),
            " ",
            react_1.default.createElement("strong", null, categoryFilter),
            react_1.default.createElement(IconButton_1.default, { "aria-label": "Remove filtering", className: classes.clear, onClick: removeFilter, title: "Clear filtering" },
                react_1.default.createElement(Close_1.default, null))))));
};
;
exports.default = react_jss_1.default(styles)(ListHeader);
//# sourceMappingURL=ListHeader.js.map