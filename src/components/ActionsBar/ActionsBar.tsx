import * as React from 'react';
import injectSheet from 'react-jss';
import IconButton from 'material-ui/IconButton';

import Link from 'gatsby-link';
import {connect} from 'react-redux';
import * as screenfull from 'screenfull';

import HomeIcon from 'material-ui-icons/Home';
import SearchIcon from 'material-ui-icons/Search';
import ArrowUpwardIcon from 'material-ui-icons/ArrowUpward';
import FullscreenIcon from 'material-ui-icons/Fullscreen';
import FullscreenExitIcon from 'material-ui-icons/FullscreenExit';
import {
    setNavigatorPosition,
    setNavigatorShape,
    setScrollToTop,
    setFontSizeIncrease,
    setCategoryFilter, State, NavigatorShape, NavigatorPosition,
} from '../../state/store';
import {featureNavigator, moveNavigatorAside} from './../../utils/shared';
import FontSetter from './FontSetter';
import CategoryFilter from './CategoryFilter';
import {Theme} from 'material-ui/styles/createMuiTheme';
import {Action} from 'history';

const styles = (theme: Theme) => ({
    actionsBar: {
        position: 'absolute',
        background: theme.bars.colors.background,
        left: 0,
        // top: `calc(100vh - ${theme.bars.sizes.actionsBar}px)`,
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        padding: `0 ${theme.base.sizes.linesMargin}`,
        justifyContent: 'space-between',
        height: `${theme.bars.sizes.actionsBar}px`,
        width: '100%',
        '&::before': {
            content: `""`,
            position: 'absolute',
            left: theme.base.sizes.linesMargin,
            right: theme.base.sizes.linesMargin,
            height: 0,
            top: 0,
            borderTop: `1px solid ${theme.base.colors.lines}`,
        },
        [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
            padding: `0 calc(${theme.base.sizes.linesMargin} * 1.5)`,
        },
        [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
            flexDirection: 'column',
            top: 0,
            right: 0,
            left: 'auto',
            height: '100%',
            padding: `${theme.base.sizes.linesMargin} 0`,
            width: `${theme.bars.sizes.actionsBar}px`,
            '&::before': {
                top: theme.base.sizes.linesMargin,
                bottom: theme.base.sizes.linesMargin,
                left: 0,
                right: 'auto',
                width: 0,
                height: 'auto',
                borderLeft: `1px solid ${theme.base.colors.lines}`,
            },
        },
    },
    group: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
            flexDirection: 'column',
        },
    },
    button: {
        color: theme.bars.colors.icon
    },
});

class ActionsBar extends React.Component<ActionsBarProps, ActionsBarState> {
    state = {
        fullscreen: false,
    };

    homeOnClick = featureNavigator.bind(this);
    searchOnClick = moveNavigatorAside.bind(this);

    componentDidMount() {
        console.log('ActionsBar.componentDidMount', this.props)
        if (screenfull.enabled) {
            screenfull.on('change', () => {
                this.setState({
                    fullscreen: screenfull.isFullscreen,
                });
            });
        }
    }

    fullscreenOnClick() {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    }

    arrowUpOnClick() {
        this.props.setScrollToTop(true);
    }

    fontSetterOnClick(val: number) {
        this.props.setFontSizeIncrease(val);

        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('font-size-increase', `${val}`);
        }
    }

    categoryFilterOnClick(filter: string) {
        this.props.setCategoryFilter(filter);
    }

    render() {
        const {classes, navigatorPosition, navigatorShape, isWideScreen, categories} = this.props;

        return (
            <div className={classes.actionsBar}>
                <div className={classes.group}>
                    <IconButton
                        aria-label="Back to list"
                        onClick={this.homeOnClick}
                        title="Back to the list"
                        className={classes.button}
                    >
                        <HomeIcon/>
                    </IconButton>
                    {((isWideScreen && navigatorShape === "open") || navigatorPosition !== "is-aside") && (
                        <CategoryFilter
                            categories={categories}
                            filterCategory={(filter: string) => this.categoryFilterOnClick(filter)}
                        />
                    )}
                    <Link to="/search/">
                        <IconButton
                            aria-label="Search"
                            onClick={this.searchOnClick}
                            data-shape="closed"
                            title="Search"
                            className={classes.button}
                        >
                            <SearchIcon className={classes.button}/>
                        </IconButton>
                    </Link>
                </div>
                <div className={classes.group}>
                    {navigatorPosition === 'is-aside' && (
                        <FontSetter increaseFont={(v: number) => this.fontSetterOnClick(v)}/>
                    )}
                    {screenfull.enabled && (
                        <IconButton
                            aria-label="Fullscreen"
                            onClick={() => this.fullscreenOnClick()}
                            title="Fullscreen mode"
                            className={classes.button}
                        >
                            {this.state.fullscreen ? (
                                <FullscreenExitIcon/>
                            ) : (
                                <FullscreenIcon/>
                            )}
                        </IconButton>
                    )}
                    <IconButton
                        aria-label="Back to top"
                        onClick={() => this.arrowUpOnClick()}
                        title="Scroll to top"
                    >
                        <ArrowUpwardIcon className={classes.button}/>
                    </IconButton>
                </div>
            </div>
        );
    }
}

interface ActionsBarState {
    fullscreen: boolean;
}

interface ActionsBarProps {
    classes?: any;
    navigatorPosition?: NavigatorPosition;
    navigatorShape?: NavigatorShape;
    isWideScreen?: boolean;
    setScrollToTop?: (v: boolean) => void;
    setFontSizeIncrease?: (v: number) => void;
    categories?: string[];
    setCategoryFilter?: (category: string) => any;
    categoryFilter?: string;
}

const mapStateToProps = (state: State, ownProps: ActionsBarProps): Partial<ActionsBarProps> => {
    return {
        navigatorPosition: state.navigatorPosition,
        navigatorShape: state.navigatorShape,
        isWideScreen: state.isWideScreen,
        categoryFilter: state.categoryFilter,
    };
};

const mapDispatchToProps = {
    setNavigatorPosition,
    setNavigatorShape,
    setScrollToTop,
    setFontSizeIncrease,
    setCategoryFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(
    injectSheet(styles)(ActionsBar)
);
