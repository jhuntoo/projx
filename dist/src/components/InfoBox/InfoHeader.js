"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_jss_1 = require("react-jss");
const gatsby_link_1 = require("gatsby-link");
const IconButton_1 = require("material-ui/IconButton");
const ExpandMore_1 = require("material-ui-icons/ExpandMore");
const avatar_jpg_1 = require("../../images/jpg/avatar.jpg");
const config_1 = require("../../../content/meta/config");
const styles = theme => ({
    header: {
        lineHeight: 1,
        position: "relative"
    },
    avatarLink: {
        willChange: "left, top",
        float: "left",
        display: "block",
        position: "relative",
        margin: "0 12px 0 0",
        [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
            margin: "0 20px 0 0"
        },
        [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
            position: "absolute",
            top: "10px",
            left: "50%",
            marginLeft: "-30px",
            transition: "all .5s",
            transitionTimingFunction: "ease",
            ".navigator-in-transition-from.navigator-is-opened &": {
                left: "50%"
            },
            ".is-aside.open &": {
                left: "8%",
                top: "0"
            }
        }
    },
    avatar: {
        width: "36px",
        height: "36px",
        borderRadius: "65% 75%",
        border: "1px solid #ddd",
        transition: "all .3s",
        transitionTimingFunction: "ease",
        display: "inline-block",
        overflow: "hidden",
        "& img": {
            maxWidth: "100%"
        },
        [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
            width: "44px",
            height: "44px"
        },
        [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
            width: "60px",
            height: "60px"
        },
        "@media (hover: hover)": {
            "&:hover": {
                borderRadius: "75% 65%"
            }
        }
    },
    title: {
        willChange: "transform, left, top",
        fontSize: `${theme.info.fonts.boxTitleSize}em`,
        margin: 0,
        float: "left",
        transitionTimingFunction: "ease",
        "& small": {
            display: "block",
            fontSize: ".6em",
            marginTop: ".3em"
        },
        [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
            fontSize: `${theme.info.fonts.boxTitleSizeM}em`
        },
        [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
            fontSize: `${theme.info.fonts.boxTitleSizeL}em`,
            position: "absolute",
            top: "85px",
            textAlign: "center",
            left: "50%",
            transform: "translate(-50%)",
            transition: "all .5s",
            ".is-aside.open &": {
                left: "60%",
                top: `${1.9 - theme.info.fonts.boxTitleSizeL}em`,
                textAlign: "left"
            }
        }
    },
    expand: {
        position: "absolute",
        top: "30px",
        right: "-25px",
        display: "none",
        ".is-aside.open &": {
            display: "block"
        }
    }
});
const InfoHeader = (props) => {
    const { classes, avatarOnClick, expandOnClick } = props;
    return (react_1.default.createElement("header", { className: classes.header },
        react_1.default.createElement(gatsby_link_1.default, { className: classes.avatarLink, onClick: avatarOnClick, to: "/", title: "back to Home page" },
            react_1.default.createElement("div", { className: classes.avatar },
                react_1.default.createElement("img", { src: avatar_jpg_1.default, alt: "" }))),
        react_1.default.createElement("h1", { className: classes.title },
            config_1.default.infoTitle.replace(/ /g, "\u00a0"),
            react_1.default.createElement("small", null, config_1.default.infoTitleNote)),
        react_1.default.createElement(IconButton_1.default, { "aria-label": "Expand the box", className: classes.expand, onClick: expandOnClick, title: "Expand the box" },
            react_1.default.createElement(ExpandMore_1.default, null))));
};
;
exports.default = react_jss_1.default(styles)(InfoHeader);
//# sourceMappingURL=InfoHeader.js.map