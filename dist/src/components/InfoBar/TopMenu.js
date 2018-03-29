"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_jss_1 = require("react-jss");
const Menu_1 = require("material-ui/Menu");
const MoreVert_1 = require("material-ui-icons/MoreVert");
const IconButton_1 = require("material-ui/IconButton");
const react_popper_1 = require("react-popper");
const ClickAwayListener_1 = require("material-ui/utils/ClickAwayListener");
const Grow_1 = require("material-ui/transitions/Grow");
const Paper_1 = require("material-ui/Paper");
const classnames_1 = require("classnames");
const styles = theme => ({
    topMenu: {
        float: "right",
        margin: "5px 10px 0 0",
        [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {}
    },
    buttonRoot: {
        "&:hover": {
            background: "rgba(0, 0, 0, 0.04)"
        }
    },
    buttonLabel: {
        textTransform: "none",
        fontSize: "1.4em",
        color: "#777"
    },
    popperClose: {
        pointerEvents: "none"
    }
});
class TopMenu extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            anchorEl: null,
            open: false
        };
        this.handleClick = () => {
            this.setState({ open: !this.state.open });
        };
        this.handleClose = () => {
            if (!this.state.open) {
                return;
            }
            this.timeout = setTimeout(() => {
                this.setState({ open: false });
            });
        };
    }
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
    render() {
        const { classes, pages } = this.props;
        const { anchorEl, open } = this.state;
        return (React.createElement("nav", { className: classes.topMenu },
            React.createElement(react_popper_1.Manager, null,
                React.createElement(react_popper_1.Target, null,
                    React.createElement(IconButton_1.default, { "aria-label": "More", "aria-owns": anchorEl ? "long-menu" : null, "aria-haspopup": "true", onClick: this.handleClick },
                        React.createElement(MoreVert_1.default, null))),
                React.createElement(react_popper_1.Popper, { placement: "bottom-end", eventsEnabled: open, className: classnames_1.default({ [classes.popperClose]: !open }) },
                    React.createElement(ClickAwayListener_1.default, { onClickAway: this.handleClose },
                        React.createElement(Grow_1.default, { in: open, id: "menu-list", style: { transformOrigin: "0 0 0" } },
                            React.createElement(Paper_1.default, null,
                                React.createElement(Menu_1.MenuList, { role: "menu" },
                                    React.createElement(Menu_1.MenuItem, { onClick: e => {
                                            this.props.homeLinkOnClick(e);
                                            this.handleClose();
                                        } }, "Home"),
                                    pages.map((page, i) => {
                                        const { fields, frontmatter } = page.node;
                                        return (React.createElement("a", { key: fields.slug, href: fields.slug, style: { display: "block" } },
                                            React.createElement(Menu_1.MenuItem, { onClick: e => {
                                                    this.props.pageLinkOnClick(e);
                                                    this.handleClose();
                                                } }, frontmatter.menuTitle ? frontmatter.menuTitle : frontmatter.title)));
                                    }),
                                    React.createElement("a", { href: "/contact/", style: { display: "block" } },
                                        React.createElement(Menu_1.MenuItem, { onClick: e => {
                                                this.props.pageLinkOnClick(e);
                                                this.handleClose();
                                            } }, "Contact"))))))))));
    }
}
;
exports.default = react_jss_1.default(styles)(TopMenu);
//# sourceMappingURL=TopMenu.js.map