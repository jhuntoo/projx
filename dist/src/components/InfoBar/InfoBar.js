"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_jss_1 = require("react-jss");
const Avatar_1 = require("material-ui/Avatar");
const gatsby_link_1 = require("gatsby-link");
const react_redux_1 = require("react-redux");
const store_1 = require("../../state/store");
const shared_1 = require("./../../utils/shared");
const config_1 = require("../../../content/meta/config");
const avatar_jpg_1 = require("../../images/jpg/avatar.jpg");
const TopMenu_1 = require("./TopMenu");
const styles = theme => ({
    infoBar: {
        position: "absolute",
        background: theme.bars.colors.background,
        top: 0,
        left: 0,
        width: "100%",
        height: `${theme.bars.sizes.infoBar}px`,
        "&::before": {
            content: `""`,
            position: "absolute",
            left: theme.base.sizes.linesMargin,
            right: theme.base.sizes.linesMargin,
            height: 0,
            bottom: 0,
            borderTop: `1px solid ${theme.base.colors.lines}`
        },
        [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
            display: "none"
        }
    },
    title: {
        float: "left",
        margin: "10px 0 0 15px",
        "& small": {
            display: "block",
            fontSize: ".65em",
            margin: "2px 0 0 0"
        }
    },
    avatarLink: {
        display: "block",
        float: "left",
        margin: "13px 0 0 30px"
    },
    avatar: {
        width: "36px",
        borderRadius: "65% 75%",
        border: "1px solid #ddd",
        height: "36px"
    }
});
class InfoBar extends React.Component {
    constructor() {
        super(...arguments);
        this.homeLinkOnClick = shared_1.featureNavigator.bind(this);
        this.pageLinkOnClick = shared_1.moveNavigatorAside.bind(this);
    }
    render() {
        const { classes, pages } = this.props;
        return (React.createElement("aside", { className: classes.infoBar },
            React.createElement(gatsby_link_1.default, { to: "/", className: classes.avatarLink, onClick: this.homeLinkOnClick },
                React.createElement(Avatar_1.default, { alt: config_1.default.infoTitle, src: avatar_jpg_1.default, className: classes.avatar })),
            React.createElement("h3", { className: classes.title },
                config_1.default.infoTitle,
                React.createElement("small", null, config_1.default.infoTitleNote)),
            React.createElement(TopMenu_1.default, { pages: pages, homeLinkOnClick: this.homeLinkOnClick, pageLinkOnClick: this.pageLinkOnClick })));
    }
}
;
const mapStateToProps = (state, ownProps) => {
    return {
        navigatorPosition: state.navigatorPosition,
        navigatorShape: state.navigatorShape
    };
};
const mapDispatchToProps = {
    setNavigatorPosition: store_1.setNavigatorPosition
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(react_jss_1.default(styles)(InfoBar));
//# sourceMappingURL=InfoBar.js.map