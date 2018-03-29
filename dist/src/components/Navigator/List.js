"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_jss_1 = require("react-jss");
const react_lazyload_1 = require("react-lazyload");
const ListHeader_1 = require("./ListHeader");
const SpringScrollbars_1 = require("../SpringScrollbars");
const ListItem_1 = require("./ListItem");
const styles = theme => ({
    posts: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: "100%"
    },
    inner: {
        padding: `calc(${theme.bars.sizes.infoBar}px + 1.3rem) 1.3rem calc(${theme.bars.sizes.actionsBar}px + 1.3rem) 1.3rem`,
        [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
            padding: `calc(${theme.bars.sizes.infoBar}px + 2rem) 2rem calc(${theme.bars.sizes.actionsBar}px + 2rem) 2rem`
        },
        [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
            padding: `2rem  calc(1rem + 17px) calc(2rem + 17px) 2rem`,
            left: `${theme.info.sizes.width}px`,
            ".moving-featured &, .is-aside &": {
                padding: "1rem .5rem 1rem .5rem"
            }
        }
    },
    list: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        ".is-aside.closed &, .moving-featured.closed &": {
            display: "none"
        }
    }
});
class List extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.categoryFilter !== this.props.categoryFilter) {
            setTimeout(react_lazyload_1.forceCheck, 300);
        }
    }
    render() {
        const { classes, posts, linkOnClick, expandOnClick, categoryFilter, navigatorShape, removeFilter } = this.props;
        return (React.createElement("div", { className: classes.posts },
            React.createElement(SpringScrollbars_1.default, { forceCheckOnScroll: true, isNavigator: true },
                React.createElement("div", { className: classes.inner },
                    React.createElement(ListHeader_1.default, { expandOnClick: expandOnClick, categoryFilter: categoryFilter, navigatorShape: navigatorShape, removeFilter: removeFilter }),
                    React.createElement("ul", { className: classes.list }, posts &&
                        posts.map((post, i) => (React.createElement(ListItem_1.default, { key: i, post: post, linkOnClick: linkOnClick, categoryFilter: categoryFilter }))))))));
    }
}
;
exports.default = react_jss_1.default(styles)(List);
//# sourceMappingURL=List.js.map