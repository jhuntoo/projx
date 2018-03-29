"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_jss_1 = require("react-jss");
const algolia_svg_1 = require("../../images/svg-icons/algolia.svg");
const react_svg_1 = require("../../images/svg-icons/react.svg");
const graphql_svg_1 = require("../../images/svg-icons/graphql.svg");
const jss_svg_1 = require("../../images/svg-icons/jss.svg");
const material_ui_svg_1 = require("../../images/svg-icons/material-ui.svg");
const redux_svg_1 = require("../../images/svg-icons/redux.svg");
const gatsby_svg_1 = require("../../images/svg-icons/gatsby.svg");
const webpack_svg_1 = require("../../images/svg-icons/webpack.svg");
const babel_svg_1 = require("../../images/svg-icons/babel.svg");
const netlify_svg_1 = require("../../images/svg-icons/netlify.svg");
const styles = theme => ({
    stack: {
        display: "none",
        [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
            display: "block",
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            padding: "1em 2em"
        }
    },
    box: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    link: {
        display: "inline-block",
        padding: "8px"
    },
    svg: {
        width: "22px",
        height: "22px"
    },
    header: {
        textAlign: "center",
        fontSize: ".85em",
        letterSpacing: ".3em",
        width: "100%",
        margin: "0 0 .8em 0",
        fontWeight: 300
    }
});
;
const StackIcons = (props) => {
    const { classes } = props;
    const items = [
        { name: "gatsby", url: "https://www.gatsbyjs.org/", comp: gatsby_svg_1.default },
        { name: "react", url: "https://reactjs.org/", comp: react_svg_1.default },
        { name: "graphql", url: "http://graphql.org/", comp: graphql_svg_1.default },
        { name: "jss", url: "http://cssinjs.org/", comp: jss_svg_1.default },
        { name: "material-ui", url: "https://material-ui-next.com/", comp: material_ui_svg_1.default },
        { name: "redux", url: "https://redux.js.org/", comp: redux_svg_1.default },
        { name: "algolia", url: "https://www.algolia.com/", comp: algolia_svg_1.default },
        { name: "webpack", url: "https://webpack.js.org/", comp: webpack_svg_1.default },
        { name: "babel", url: "https://babeljs.io/", comp: babel_svg_1.default },
        { name: "netlify", url: "https://www.netlify.com/", comp: netlify_svg_1.default }
    ];
    return (react_1.default.createElement("div", { className: classes.stack },
        react_1.default.createElement("h5", { className: classes.header }, "built with:"),
        react_1.default.createElement("div", { className: classes.box }, items.map(item => {
            const Icon = item.comp;
            return (react_1.default.createElement("a", { href: item.url, key: item.name, className: classes.link, target: "_blank", rel: "noopener noreferrer", title: item.name },
                react_1.default.createElement(Icon, { className: classes.svg })));
        }))));
};
exports.default = react_jss_1.default(styles)(StackIcons);
//# sourceMappingURL=StackIcons.js.map