"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_jss_1 = require("react-jss");
const gatsby_link_1 = require("gatsby-link");
const styles = theme => ({
    infoMenu: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        listStyle: "none",
        margin: 0,
        width: "100%"
    },
    link: {
        padding: ".5em",
        fontWeight: 300,
        fontTransform: "lowercase",
        color: theme.info.colors.menuLink,
        "&:hover": {
            color: theme.info.colors.menuLinkHover
        }
    }
});
const InfoMenu = (props) => {
    const { classes, pages, linkOnClick } = props;
    return (react_1.default.createElement("nav", { className: classes.infoMenu },
        pages.map((page, i) => {
            const { fields, frontmatter } = page.node;
            return (react_1.default.createElement(gatsby_link_1.default, { key: fields.slug, to: fields.slug, onClick: linkOnClick, className: classes.link, "data-shape": "closed" }, frontmatter.menuTitle ? frontmatter.menuTitle : frontmatter.title));
        }),
        react_1.default.createElement(gatsby_link_1.default, { to: "/contact/", onClick: linkOnClick, className: classes.link, "data-shape": "closed" }, "Contact")));
};
;
exports.default = react_jss_1.default(styles)(InfoMenu);
//# sourceMappingURL=InfoMenu.js.map