"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_jss_1 = require("react-jss");
const IconButton_1 = require("material-ui/IconButton");
const gatsby_link_1 = require("gatsby-link");
const react_redux_1 = require("react-redux");
const screenfull_1 = require("screenfull");
const Home_1 = require("material-ui-icons/Home");
const Search_1 = require("material-ui-icons/Search");
const ArrowUpward_1 = require("material-ui-icons/ArrowUpward");
const Fullscreen_1 = require("material-ui-icons/Fullscreen");
const FullscreenExit_1 = require("material-ui-icons/FullscreenExit");
const store_1 = require("../../state/store");
const shared_1 = require("./../../utils/shared");
const FontSetter_1 = require("./FontSetter");
const CategoryFilter_1 = require("./CategoryFilter");
const styles = theme => ({
    actionsBar: {
        position: "absolute",
        background: theme.bars.colors.background,
        left: 0,
        //top: `calc(100vh - ${theme.bars.sizes.actionsBar}px)`,
        bottom: 0,
        display: "flex",
        flexDirection: "row",
        padding: `0 ${theme.base.sizes.linesMargin}`,
        justifyContent: "space-between",
        height: `${theme.bars.sizes.actionsBar}px`,
        width: "100%",
        "&::before": {
            content: `""`,
            position: "absolute",
            left: theme.base.sizes.linesMargin,
            right: theme.base.sizes.linesMargin,
            height: 0,
            top: 0,
            borderTop: `1px solid ${theme.base.colors.lines}`
        },
        [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
            padding: `0 calc(${theme.base.sizes.linesMargin} * 1.5)`
        },
        [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
            flexDirection: "column",
            top: 0,
            right: 0,
            left: "auto",
            height: "100%",
            padding: `${theme.base.sizes.linesMargin} 0`,
            width: `${theme.bars.sizes.actionsBar}px`,
            "&::before": {
                top: theme.base.sizes.linesMargin,
                bottom: theme.base.sizes.linesMargin,
                left: 0,
                right: "auto",
                width: 0,
                height: "auto",
                borderLeft: `1px solid ${theme.base.colors.lines}`
            }
        }
    },
    group: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
            flexDirection: "column"
        }
    },
    tooltip: {
        fontSize: ".9em",
        padding: ".3em .6em",
        whiteSpace: "nowrap"
    }
});
class ActionsBar extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            fullscreen: false
        };
        this.homeOnClick = shared_1.featureNavigator.bind(this);
        this.searchOnClick = shared_1.moveNavigatorAside.bind(this);
        this.fullscreenOnClick = () => {
            if (screenfull_1.default.enabled) {
                screenfull_1.default.toggle();
            }
        };
        this.arrowUpOnClick = () => {
            this.props.setScrollToTop(true);
        };
        this.fontSetterOnClick = val => {
            this.props.setFontSizeIncrease(val);
            if (typeof localStorage !== "undefined") {
                localStorage.setItem("font-size-increase", val);
            }
        };
        this.categoryFilterOnClick = val => {
            this.props.setCategoryFilter(val);
        };
    }
    componentDidMount() {
        if (screenfull_1.default.enabled) {
            screenfull_1.default.on("change", () => {
                this.setState({
                    fullscreen: screenfull_1.default.isFullscreen
                });
            });
        }
    }
    render() {
        const { classes, navigatorPosition, isWideScreen, categories } = this.props;
        return (React.createElement("div", { className: classes.actionsBar },
            React.createElement("div", { className: classes.group },
                React.createElement(IconButton_1.default, { "aria-label": "Back to list", onClick: this.homeOnClick, title: "Back to the list" },
                    React.createElement(Home_1.default, null)),
                (isWideScreen || navigatorPosition !== "is-aside") && (React.createElement(CategoryFilter_1.default, { categories: categories, filterCategory: this.categoryFilterOnClick })),
                React.createElement(IconButton_1.default, { "aria-label": "Search", onClick: this.searchOnClick, component: gatsby_link_1.default, "data-shape": "closed", to: "/search/", title: "Search" },
                    React.createElement(Search_1.default, null))),
            React.createElement("div", { className: classes.group },
                navigatorPosition === "is-aside" && React.createElement(FontSetter_1.default, { increaseFont: this.fontSetterOnClick }),
                screenfull_1.default.enabled && (React.createElement(IconButton_1.default, { "aria-label": "Fullscreen", onClick: this.fullscreenOnClick, title: "Fullscreen mode" }, this.state.fullscreen ? React.createElement(FullscreenExit_1.default, null) : React.createElement(Fullscreen_1.default, null))),
                React.createElement(IconButton_1.default, { "aria-label": "Back to top", onClick: this.arrowUpOnClick, title: "Scroll to top" },
                    React.createElement(ArrowUpward_1.default, null)))));
    }
}
;
const mapStateToProps = (state, ownProps) => {
    return {
        navigatorPosition: state.navigatorPosition,
        isWideScreen: state.isWideScreen,
        categoryFilter: state.categoryFilter
    };
};
const mapDispatchToProps = {
    setNavigatorPosition: store_1.setNavigatorPosition,
    setNavigatorShape: store_1.setNavigatorShape,
    setScrollToTop: store_1.setScrollToTop,
    setFontSizeIncrease: store_1.setFontSizeIncrease,
    setCategoryFilter: store_1.setCategoryFilter
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(react_jss_1.default(styles)(ActionsBar));
//# sourceMappingURL=ActionsBar.js.map