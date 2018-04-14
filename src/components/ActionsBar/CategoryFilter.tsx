import * as React from 'react';
import injectSheet from 'react-jss';
import {MenuItem, MenuList} from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import {Manager, Target, Popper} from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import * as classNames from 'classnames';
import FilterListIcon from 'material-ui-icons/FilterList';
import {Theme} from 'material-ui';

const styles = (theme: Theme) => ({
    fontSizeSetter: {
        [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {},
    },
    open: {
        "&:hover": {
            color: theme.bars.colors.icon
        }
    },

    popperClose: {
        pointerEvents: 'none',
    },
    popper: {
        zIndex: 1,
    },
});

class CategoryFilter extends React.Component<CategoryFilterProps, CategoryFilterState> {
    state = {
        anchorEl: null as any,
        open: false,
    };
    timeout?: number = null;

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    handleClick() {
        this.setState({open: !this.state.open});
    }

    handleClose() {
        if (!this.state.open) {
            return;
        }

        this.timeout = setTimeout(() => {
            this.setState({open: false});
        });
    }

    handleFiltering(e: React.MouseEvent<HTMLElement>) {
        const category = (e.target as any).innerText.trim();
        this.props.filterCategory(category);
        this.handleClose();
    }

    render() {
        const {classes, categories} = this.props;
        const {anchorEl, open} = this.state;

        return (
            <nav className={classes.fontSizeSetter}>
                <Manager>
                    <Target>
                        <IconButton
                            aria-label="Filter by category"
                            aria-owns={anchorEl ? 'long-menu' : null}
                            aria-haspopup="true"
                            onClick={() => this.handleClick()}
                            title="Filter the list by category"
                            className={classes.open}
                        >
                            <FilterListIcon/>
                        </IconButton>
                    </Target>
                    <Popper
                        placement="bottom-end"
                        eventsEnabled={open}
                        className={`${classNames({[classes.popperClose]: !open})} ${
                            classes.popper
                            }`}
                    >
                        <ClickAwayListener onClickAway={() => this.handleClose()}>
                            <Grow
                                in={open}
                                // id="cat-menu-list"
                                style={{transformOrigin: '0 0 0'}}
                            >
                                <Paper>
                                    <MenuList role="menu">
                                        <MenuItem key="all" onClick={(ev: any) => this.handleFiltering(ev)}>
                                            all posts
                                        </MenuItem>
                                        {categories.map(category => (
                                            <MenuItem key={category} onClick={(ev: any) => this.handleFiltering(ev)}>
                                                {category}
                                            </MenuItem>
                                        ), this)}
                                    </MenuList>
                                </Paper>
                            </Grow>
                        </ClickAwayListener>
                    </Popper>
                </Manager>
            </nav>
        );
    }
}

interface CategoryFilterProps {
    classes: any;
    categories: any[];
    filterCategory: (filter: string) => void;
}

interface CategoryFilterState {
    anchorEl: any;
    open: boolean;
}

export default injectSheet(styles)(CategoryFilter);
