import * as React from 'react';
interface AsyncComponentState {
    component: React.ComponentClass<any> | React.StatelessComponent<any> | null;
}

// noinspection TsLint
export const asyncComponent = function <P>(importComponent: () => Promise<any>, loadingComponent?: JSX.Element) {
    class AsyncComponent extends React.Component<P, AsyncComponentState> {
        constructor(props: any) {
            super(props);

            this.state = {
                component: null
            };
        }

        componentDidMount() {
            importComponent().then((module: any) => {
                const { default: component } = module;
                this.setState({
                    component: component
                });
            });
        }

        render() {
            const C = this.state.component;

            return C ? <C {...this.props} /> : loadingComponent ? loadingComponent : <div>Loading...</div>;
        }
    }

    return AsyncComponent;
};
