"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./src/state/store");
// remove the JSS style tag generated on the server to avoid conflicts with the one added on the client
exports.onInitialClientRender = function () {
    // eslint-disable-next-line no-undef
    var ssStyles = window.document.getElementById("server-side-jss");
    ssStyles && ssStyles.parentNode.removeChild(ssStyles);
};
exports.replaceRouterComponent = ({ history }) => {
    const store = store_1.default();
    const ConnectedRouterWrapper = ({ children: any }) => store = { store } >
        history, { history };
     > { children } < /Router>
        < /Provider>;
    ;
    return ConnectedRouterWrapper;
};
//# sourceMappingURL=gatsby-browser.js.map