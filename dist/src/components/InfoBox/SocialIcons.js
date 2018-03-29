"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_jss_1 = require("react-jss");
const config_1 = require("../../../content/meta/config");
const github_svg_1 = require("../../images/svg-icons/github.svg");
const facebook_svg_1 = require("../../images/svg-icons/facebook.svg");
const twitter_svg_1 = require("../../images/svg-icons/twitter.svg");
const styles = theme => ({
    social: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    link: {
        display: "inline-block",
        padding: "5px",
        "&:hover": {
            "& svg": {
                fill: theme.info.colors.socialIconsHover
            }
        }
    },
    svg: {
        width: "40px",
        height: "40px",
        fill: theme.info.colors.socialIcons,
        transition: "all .5s"
    }
});
const Socialcons = (props) => {
    const { classes } = props;
    const items = config_1.default.authorSocialLinks;
    const icons = {
        twitter: twitter_svg_1.default,
        facebook: facebook_svg_1.default,
        github: github_svg_1.default
    };
    return (react_1.default.createElement("div", { className: classes.social }, items.map(item => {
        const Icon = icons[item.name];
        return (react_1.default.createElement("a", { href: item.url, key: item.name, className: classes.link, target: "_blank", rel: "noopener noreferrer", title: item.name },
            react_1.default.createElement(Icon, { className: classes.svg })));
    })));
};
;
exports.default = react_jss_1.default(styles)(Socialcons);
//# sourceMappingURL=SocialIcons.js.map