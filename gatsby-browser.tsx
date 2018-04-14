import * as React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { History } from 'history';

import {createStore} from "./src/state/store";

// remove the JSS style tag generated on the server to avoid conflicts with the one added on the client
export const onInitialClientRender = () => {
    const ssStyles = window.document.getElementById("server-side-jss");
    if (ssStyles) {
        ssStyles.parentNode.removeChild(ssStyles);
    }
};

export const replaceRouterComponent = ({ history }: { history: History }): React.StatelessComponent => {
    console.log('gatsby-browser: replaceRouterComponent')
    const store = createStore();
    return ({ children }) => (
        <Provider store={store}>
            <Router history={history}>{children}</Router>
        </Provider>
    );
};
