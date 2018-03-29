"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const gatsby_link_1 = require("gatsby-link");
const react_jss_1 = require("react-jss");
const react_lazyload_1 = require("react-lazyload");
const styles = theme => ({
    listItem: {
        margin: "0 0 .7em 0",
        transition: "height 1s",
        [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
            margin: "0 0 1.5rem 0"
        },
        [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
            ".moving-featured &, .is-aside &": {
                margin: "0 0 0 0"
            }
        }
    },
    listLink: {
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        padding: ".7em 1em .7em 1em",
        color: theme.navigator.colors.postsListItemLink,
        "@media (hover: hover)": {
            "&:hover": {
                color: theme.navigator.colors.postsListItemLinkHover,
                "& .pointer": {
                    borderRadius: "65% 75%"
                }
            }
        }
    },
    listItemPointer: {
        position: "relative",
        flexShrink: 0,
        overflow: "hidden",
        borderRadius: "75% 65%",
        width: "60px",
        height: "60px",
        margin: "0",
        transition: "all .5s",
        "& img": {
            width: "100%",
            height: "100%"
        },
        [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
            marginRight: ".5em",
            width: "80px",
            height: "80px"
        },
        [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
            marginRight: ".8em",
            width: "90px",
            height: "90px",
            transition: "all .3s",
            transitionTimingFunction: "ease",
            ".moving-featured &, .is-aside &": {
                width: "30px",
                height: "30px"
            }
        }
    },
    listItemText: {
        margin: "0 0 0 1.5em",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        "& h1": {
            lineHeight: 1.15,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            margin: 0,
            fontSize: `${theme.navigator.sizes.postsListItemH1Font}em`,
            [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
                fontSize: `${theme.navigator.sizes.postsListItemH1Font *
                    theme.navigator.sizes.fontIncraseForM}em`
            },
            [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
                fontSize: `${theme.navigator.sizes.postsListItemH1Font *
                    theme.navigator.sizes.fontIncraseForL}em`,
                ".moving-featured &, .is-aside &": {
                    fontSize: "1em",
                    fontWeight: 400
                }
            }
        },
        "& h2": {
            lineHeight: 1.2,
            display: "block",
            fontSize: `${theme.navigator.sizes.postsListItemH2Font}em`,
            margin: ".3em 0 0 0",
            [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
                fontSize: `${theme.navigator.sizes.postsListItemH2Font *
                    theme.navigator.sizes.fontIncraseForM}em`
            },
            [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
                fontSize: `${theme.navigator.sizes.postsListItemH2Font *
                    theme.navigator.sizes.fontIncraseForL}em`,
                ".moving-featured &, .is-aside &": {
                    display: "none"
                }
            }
        },
        [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
            ".moving-featured &, .is-aside &": {
                margin: "0 0 0 .5em"
            }
        }
    }
});
class ListItem extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            hidden: false
        };
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.categoryFilter !== this.props.categoryFilter) {
            const category = this.props.post.node.frontmatter.category;
            const categoryFilter = this.props.categoryFilter;
            if (categoryFilter === "all posts") {
                this.setState({ hidden: false });
            }
            else if (category !== categoryFilter) {
                this.setState({ hidden: true });
            }
            else if (category === categoryFilter) {
                this.setState({ hidden: false });
            }
        }
    }
    render() {
        const { classes, post, linkOnClick } = this.props;
        return (React.createElement("li", { className: `${classes.listItem} ${post.node.frontmatter.category}`, style: { display: `${this.state.hidden ? "none" : "block"}` }, key: post.node.fields.slug },
            React.createElement(gatsby_link_1.default, { activeClassName: "active", className: classes.listLink, to: post.node.fields.slug, onClick: linkOnClick },
                React.createElement("div", { className: `${classes.listItemPointer} pointer` },
                    React.createElement(react_lazyload_1.default, { height: 60, overflow: true, throttle: 300, once: true, offset: 100 },
                        React.createElement("picture", null,
                            React.createElement("source", { type: "image/webp", srcSet: post.node.frontmatter.cover.children[0].resolutions.srcSetWebp }),
                            React.createElement("source", { srcSet: post.node.frontmatter.cover.children[0].resolutions.srcSet }),
                            React.createElement("img", { src: post.node.frontmatter.cover.children[0].resolutions.src, alt: "" })))),
                React.createElement("div", { className: classes.listItemText },
                    React.createElement("h1", null, post.node.frontmatter.title),
                    post.node.frontmatter.subTitle && React.createElement("h2", null, post.node.frontmatter.subTitle)))));
    }
}
;
exports.default = react_jss_1.default(styles)(ListItem);
//# sourceMappingURL=ListItem.js.map