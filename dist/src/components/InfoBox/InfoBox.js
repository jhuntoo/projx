"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_jss_1 = require("react-jss");
const react_redux_1 = require("react-redux");
require("core-js/fn/array/find");
const SocialIcons_1 = require("./SocialIcons");
const InfoMenu_1 = require("./InfoMenu");
const InfoHeader_1 = require("./InfoHeader");
const InfoText_1 = require("./InfoText");
const StackIcons_1 = require("./StackIcons");
const shared_1 = require("./../../utils/shared");
const store_1 = require("../../state/store");
const styles = theme => ({
    infoBox: {
        display: "none",
        [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
            display: "block",
            color: theme.info.colors.text,
            background: theme.info.colors.background,
            position: "absolute",
            left: 0,
            top: 0,
            width: `${theme.info.sizes.width}px`,
            height: "100%",
            padding: "20px 40px",
            "&::after": {
                content: `""`,
                position: "absolute",
                right: 0,
                top: "20px",
                bottom: "20px",
                width: "1px",
                borderRight: `1px solid ${theme.base.colors.lines}`
            }
        }
    },
    wrapper: {
        position: "absolute",
        top: `${theme.info.sizes.headerHeight}px`,
        bottom: 0,
        left: 0,
        width: "100%",
        padding: "0 40px 0",
        willChange: "opacity, bottom",
        transition: "bottom .5s 0s",
        opacity: 1,
        transitionTimingFunction: "ease",
        ".is-aside.closed &": {
            bottom: `${theme.navigator.sizes.closedHeight}px`
        },
        ".moving-featured &": {
            bottom: 0
        }
    }
});
class InfoBox extends React.Component {
    constructor() {
        super(...arguments);
        this.avatarOnClick = shared_1.featureNavigator.bind(this);
        this.menulinkOnClick = shared_1.moveNavigatorAside.bind(this);
        this.expandOnClick = e => {
            this.props.setNavigatorShape("closed");
        };
    }
    render() {
        const { classes, parts, pages, navigatorPosition, navigatorShape } = this.props;
        const info = parts.find(el => el.node.frontmatter.title === "info");
        return (React.createElement("aside", { className: `${classes.infoBox} ${navigatorPosition ? navigatorPosition : ""} 
        ${navigatorShape ? navigatorShape : ""}` },
            info && (React.createElement(InfoHeader_1.default, { info: info, avatarOnClick: this.avatarOnClick, expandOnClick: this.expandOnClick })),
            React.createElement("div", { className: classes.wrapper },
                info && React.createElement(InfoText_1.default, { info: info }),
                React.createElement(SocialIcons_1.default, null),
                pages && React.createElement(InfoMenu_1.default, { pages: pages, linkOnClick: this.menulinkOnClick }),
                React.createElement(StackIcons_1.default, null))));
    }
}
;
const mapStateToProps = (state, ownProps) => {
    return {
        navigatorPosition: state.navigatorPosition,
        navigatorShape: state.navigatorShape,
        isWideScreen: state.isWideScreen
    };
};
const mapDispatchToProps = {
    setNavigatorPosition: store_1.setNavigatorPosition,
    setNavigatorShape: store_1.setNavigatorShape
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(react_jss_1.default(styles)(InfoBox));
//# sourceMappingURL=InfoBox.js.map