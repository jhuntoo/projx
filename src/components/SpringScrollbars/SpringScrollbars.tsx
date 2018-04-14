import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';
// import { SpringSystem, Spring } from 'rebound';
import * as rebound from 'rebound';
import {forceCheck} from 'react-lazyload';
import {connect} from 'react-redux';

import {setScrollToTop, State} from '../../state/store';

class SpringScrollbars extends React.Component<SpringScrollbarsProps, {}> {
    springSystem: rebound.SpringSystem;
    spring: rebound.Spring;
    scrollbars: any;

    constructor(props: SpringScrollbarsProps, ...rest: any[]) {
        super(props, ...rest);
        this.handleSpringUpdate = this.handleSpringUpdate.bind(this);
    }

    componentDidUpdate(prevProps: SpringScrollbarsProps, prevState: any) {
        if (
            this.props.isNavigator &&
            this.props.navigatorPosition !== 'is-featured'
        ) {
            return;
        }

        if (
            this.props.scrollToTop &&
            this.props.scrollToTop !== prevProps.scrollToTop
        ) {
            this.scrollTop(0);
            this.props.setScrollToTop(false);
        }
    }

    componentDidMount() {
        this.springSystem = new rebound.SpringSystem();
        this.spring = this.springSystem.createSpring();
        this.spring.addListener({onSpringUpdate: this.handleSpringUpdate});
    }

    componentWillUnmount() {
        this.springSystem.deregisterSpring(this.spring);
        this.springSystem.removeAllListeners();
        this.springSystem = undefined;
        this.spring.destroy();
        this.spring = undefined;
    }

    getScrollTop() {
        return this.scrollbars.getScrollTop();
    }

    getScrollHeight() {
        return this.scrollbars.getScrollHeight();
    }

    getHeight() {
        return this.scrollbars.getHeight();
    }

    scrollTop(top: number) {
        const scrollTop = this.scrollbars.getScrollTop();
        const scrollHeight = this.scrollbars.getScrollHeight();
        const val = rebound.MathUtil.mapValueInRange(
            top,
            0,
            scrollHeight,
            scrollHeight * 0.01,
            scrollHeight * 0.99
        );
        this.spring.setCurrentValue(scrollTop).setAtRest();
        this.spring.setEndValue(val);
    }

    handleSpringUpdate(spring: rebound.Spring) {
        window.requestAnimationFrame(() => {
            const val = spring.getCurrentValue();
            this.scrollbars.scrollTop(val);
        });
    }

    render() {
        const {children, forceCheckOnScroll} = this.props;

        return (
            <Scrollbars
                autoHide
                universal={true}
                onScroll={forceCheckOnScroll && forceCheck}
                ref={(comp: any) => {
                    this.scrollbars = comp;
                }}
            >
                {children}
            </Scrollbars>
        );
    }
}

interface SpringScrollbarsProps {
    children?: any;
    scrollToTop?: boolean;
    setScrollToTop?: (v: boolean) => void;
    forceCheckOnScroll?: boolean;
    navigatorPosition?: string;
    isNavigator?: boolean;
}

const mapStateToProps = (state: State, ownProps: SpringScrollbarsProps): SpringScrollbarsProps => {
    return {
        scrollToTop: state.scrollToTop,
        navigatorPosition: state.navigatorPosition,
    };
};

const mapDispatchToProps = {
    setScrollToTop,
};

export default connect(mapStateToProps, mapDispatchToProps)(SpringScrollbars as any);
