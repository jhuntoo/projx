"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.asyncComponent = (getComponent, loadingComponent) => class AsyncComponent extends React.Component {
    constructor(props) {
        super(props);
        this.Component = null;
        this.state = {
            Component: this.Component
        };
    }
    componentDidMount() {
        if (!this.state.Component) {
            getComponent().then(Component => {
                this.setState({ Component });
            });
        }
    }
    componentWillUnmount() {
        this.setState({ Component: {} });
    }
    render() {
        const { Component } = this.state;
        if (Component) {
            return React.createElement(Component, Object.assign({}, this.props));
        }
        return loadingComponent ? loadingComponent : React.createElement("div", null, "Loading...");
    }
};
//# sourceMappingURL=AsyncComponent.js.map