"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const react_jss_1 = require("react-jss");
const react_lazyload_1 = require("react-lazyload");
const store_1 = require("../../state/store");
const shared_1 = require("./../../utils/shared");
const List_1 = require("./List");
const styles = theme => ({
    navigator: {
        transform: "translate3d(0, 0, 0)",
        willChange: "left, top, bottom, width",
        background: theme.navigator.colors.background,
        position: "absolute",
        top: 0,
        left: 0,
        height: "100vh",
        transitionTimingFunction: "ease",
        transition: "left .9s",
        width: "100%",
        [`@media (max-width: ${theme.mediaQueryTresholds.L - 1}px)`]: {
            "&.is-aside": {
                left: "-100%"
            },
            "&.is-featured": {
                left: 0
            }
        },
        [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
            "&.is-featured": {
                transition: "left .9s",
                width: `calc(100vw - ${theme.info.sizes.width}px - ${theme.bars.sizes.actionsBar}px)`,
                left: `${theme.info.sizes.width}px`,
                top: 0
            },
            "&.is-aside": {
                transition: "none, bottom 0.5s",
                left: 0,
                width: `${theme.info.sizes.width - 1}px`,
                zIndex: 1,
                top: "auto",
                "&.closed": {
                    bottom: `calc(-100% + 100px + ${theme.navigator.sizes.closedHeight}px)`,
                    height: `calc(100% - 100px)`
                },
                "&.open": {
                    bottom: 0,
                    height: `calc(100% - 100px)`
                },
                "&::after": {
                    content: `""`,
                    position: "absolute",
                    top: 0,
                    left: theme.base.sizes.linesMargin,
                    right: theme.base.sizes.linesMargin,
                    height: 0,
                    borderTop: `1px solid ${theme.base.colors.lines}`
                }
            },
            "&.moving-aside": {
                transition: "left 0.9s",
                left: `calc(-100vw + ${2 * theme.info.sizes.width + 60}px)`,
                width: `calc(100vw - ${theme.info.sizes.width}px - 60px)`,
                top: 0
            },
            "&.resizing-aside": {
                transition: "none",
                width: `${theme.info.sizes.width - 1}px`,
                top: "auto",
                left: 0,
                "&.closed": {
                    bottom: `calc(-100% + 100px)`,
                    height: `calc(100% - 100px)`
                },
                "&.open": {
                    bottom: `calc(-100% + 100px)`,
                    height: `calc(100% - 100px)`
                }
            },
            "&.moving-featured": {
                transition: "bottom .3s",
                bottom: "-100%",
                top: "auto",
                left: 0,
                zIndex: 1,
                width: `${theme.info.sizes.width - 1}px`
            },
            "&.resizing-featured": {
                transition: "none",
                top: 0,
                bottom: "auto",
                left: `calc(-100vw + ${2 * theme.info.sizes.width + 60}px)`,
                width: `calc(100vw - ${theme.info.sizes.width}px - 60px)`
            }
        }
    }
});
class Navigator extends React.Component {
    constructor() {
        super(...arguments);
        this.linkOnClick = shared_1.moveNavigatorAside.bind(this);
        this.expandOnClick = e => {
            this.props.setNavigatorShape("open");
            setTimeout(react_lazyload_1.forceCheck, 600);
        };
        this.removefilterOnClick = e => {
            this.props.setCategoryFilter("all posts");
        };
    }
    render() {
        const { classes, posts, navigatorPosition, navigatorShape, categoryFilter } = this.props;
        return (React.createElement("nav", { className: `${classes.navigator} ${navigatorPosition ? navigatorPosition : ""} ${navigatorShape ? navigatorShape : ""} ` }, this.props.posts.length && (React.createElement(List_1.default, { posts: posts, navigatorPosition: navigatorPosition, navigatorShape: navigatorShape, linkOnClick: this.linkOnClick, expandOnClick: this.expandOnClick, categoryFilter: categoryFilter, removeFilter: this.removefilterOnClick }))));
    }
}
;
const mapStateToProps = (state, ownProps) => {
    return {
        navigatorPosition: state.navigatorPosition,
        navigatorShape: state.navigatorShape,
        isWideScreen: state.isWideScreen,
        categoryFilter: state.categoryFilter
    };
};
const mapDispatchToProps = {
    setNavigatorPosition: store_1.setNavigatorPosition,
    setNavigatorShape: store_1.setNavigatorShape,
    setCategoryFilter: store_1.setCategoryFilter
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(react_jss_1.default(styles)(Navigator));
//# sourceMappingURL=Navigator.js.map