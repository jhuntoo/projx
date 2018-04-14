import * as React from 'react';
import injectSheet from 'react-jss';
import {MenuItem, MenuList} from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import {Manager, Target, Popper} from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import * as classNames from 'classnames';
import FormatSizeIcon from 'material-ui-icons/FormatSize';
import {Theme} from "material-ui";

const styles = (theme: Theme) => ({
    fontSizeSetter: {
        [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {},
    },
    open: {
        "&:hover": theme.bars.colors.icon
    },
    popperClose: {
        pointerEvents: 'none',
    },
});

class FontSetter extends React.Component<FontSetterProps, FontSetterState> {
    state = {
        anchorEl: null as any,
        open: false,
    };
    timeout: any = null;

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

    handleSetting(e: React.MouseEvent<HTMLElement>) {
        console.log('handleSetting', e);
        const val = ((e.target) as any).innerText.replace('%', '');
        const factor = +val / 100;
        this.props.increaseFont(factor);
        this.handleClose();
    }

    render() {
        const {classes} = this.props;
        const {anchorEl, open} = this.state;

        return (
            <nav className={classes.fontSizeSetter}>
                <Manager>
                    <Target>
                        <IconButton
                            aria-label="Increase font size"
                            aria-owns={anchorEl ? 'long-menu' : null}
                            aria-haspopup="true"
                            onClick={() => this.handleClick()}
                            title="Change font size"
                            className={classes.open}
                        >
                            <FormatSizeIcon/>
                        </IconButton>
                    </Target>
                    <Popper
                        placement="bottom-end"
                        eventsEnabled={open}
                        className={classNames({[classes.popperClose]: !open})}
                    >
                        <ClickAwayListener onClickAway={() => this.handleClose()}>
                            <Grow
                                in={open}
                                // id="font-menu-list"
                                style={{transformOrigin: '0 0 0'}}
                            >
                                <Paper>
                                    <MenuList role="menu">
                                        <MenuItem onClick={(e) => this.handleSetting(e)}>150%</MenuItem>
                                        <MenuItem onClick={(e) => this.handleSetting(e)}>125%</MenuItem>
                                        <MenuItem onClick={(e) => this.handleSetting(e)}>100%</MenuItem>
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

interface FontSetterState {
    anchorEl: any;
    open: boolean;
}

interface FontSetterProps {
    classes: any;
    increaseFont: (f: number) => void;
}

export default injectSheet(styles)(FontSetter);
