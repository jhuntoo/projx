import * as React from "react";

export const asyncComponent = (getComponent, loadingComponent) => class AsyncComponent extends React.Component<any, any> {
  state : {
    Component : any
  }

  private Component : React.Component;

  constructor(props:Object){
    super(props);

    this.Component = null;

    this.state = {
      Component : this.Component
    }
  }

    componentDidMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          this.setState({ Component });
        });
      }
    }

    componentWillUnmount(){
      this.setState({Component: {}});
    }
    render():JSX.Element {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return loadingComponent ? loadingComponent : <div>Loading...</div>;
    }
  }


