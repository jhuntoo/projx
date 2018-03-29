"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_jss_1 = require("react-jss");
const Menu_1 = require("material-ui/Menu");
const IconButton_1 = require("material-ui/IconButton");
const react_popper_1 = require("react-popper");
const ClickAwayListener_1 = require("material-ui/utils/ClickAwayListener");
const Grow_1 = require("material-ui/transitions/Grow");
const Paper_1 = require("material-ui/Paper");
const classnames_1 = require("classnames");
const FilterList_1 = require("material-ui-icons/FilterList");
const styles = theme => ({
    fontSizeSetter: {
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
    },
    popper: {
        zIndex: 1
    }
});
class CategoryFilter extends React.Component {
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
        this.handleFiltering = e => {
            const category = e.target.innerText.trim();
            this.props.filterCategory(category);
            this.handleClose();
        };
    }
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
    render() {
        const { classes, categories } = this.props;
        const { anchorEl, open } = this.state;
        return (React.createElement("nav", { className: classes.fontSizeSetter },
            React.createElement(react_popper_1.Manager, null,
                React.createElement(react_popper_1.Target, null,
                    React.createElement(IconButton_1.default, { "aria-label": "Filter by category", "aria-owns": anchorEl ? "long-menu" : null, "aria-haspopup": "true", onClick: this.handleClick, title: "Filter the list by category" },
                        React.createElement(FilterList_1.default, null))),
                React.createElement(react_popper_1.Popper, { placement: "bottom-end", eventsEnabled: open, className: `${classnames_1.default({ [classes.popperClose]: !open })} ${classes.popper}` },
                    React.createElement(ClickAwayListener_1.default, { onClickAway: this.handleClose },
                        React.createElement(Grow_1.default, { in: open, id: "cat-menu-list", style: { transformOrigin: "0 0 0" } },
                            React.createElement(Paper_1.default, null,
                                React.createElement(Menu_1.MenuList, { role: "menu" },
                                    React.createElement(Menu_1.MenuItem, { key: "all", onClick: this.handleFiltering }, "all posts"),
                                    categories.map(category => (React.createElement(Menu_1.MenuItem, { key: category, onClick: this.handleFiltering }, category)))))))))));
    }
}
;
exports.default = react_jss_1.default(styles)(CategoryFilter);
//# sourceMappingURL=CategoryFilter.js.map