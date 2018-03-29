"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_custom_scrollbars_1 = require("react-custom-scrollbars");
const rebound_1 = require("rebound");
const react_lazyload_1 = require("react-lazyload");
const react_redux_1 = require("react-redux");
const store_1 = require("../../state/store");
class SpringScrollbars extends react_1.Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.handleSpringUpdate = this.handleSpringUpdate.bind(this);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.isNavigator && this.props.navigatorPosition !== "is-featured") {
            return;
        }
        if (this.props.scrollToTop && this.props.scrollToTop !== prevProps.scrollToTop) {
            this.scrollTop(0);
            this.props.setScrollToTop(false);
        }
    }
    componentDidMount() {
        this.springSystem = new rebound_1.SpringSystem();
        this.spring = this.springSystem.createSpring();
        this.spring.addListener({ onSpringUpdate: this.handleSpringUpdate });
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
    scrollTop(top) {
        const scrollTop = this.scrollbars.getScrollTop();
        const scrollHeight = this.scrollbars.getScrollHeight();
        const val = rebound_1.MathUtil.mapValueInRange(top, 0, scrollHeight, scrollHeight * 0.01, scrollHeight * 0.99);
        this.spring.setCurrentValue(scrollTop).setAtRest();
        this.spring.setEndValue(val);
    }
    handleSpringUpdate(spring) {
        window.requestAnimationFrame(() => {
            const val = spring.getCurrentValue();
            this.scrollbars.scrollTop(val);
        });
    }
    render() {
        const { children, forceCheckOnScroll } = this.props;
        return (react_1.default.createElement(react_custom_scrollbars_1.Scrollbars, { autoHide: true, universal: true, onScroll: forceCheckOnScroll && react_lazyload_1.forceCheck, ref: comp => {
                this.scrollbars = comp;
            } }, children));
    }
}
;
const mapStateToProps = (state, ownProps) => {
    return {
        scrollToTop: state.scrollToTop,
        navigatorPosition: state.navigatorPosition
    };
};
const mapDispatchToProps = {
    setScrollToTop: store_1.setScrollToTop
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SpringScrollbars);
//# sourceMappingURL=SpringScrollbars.js.map