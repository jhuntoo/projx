"use strict";
/* tslint:disable no-var-requires */
/* tslint:disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_helmet_1 = require("react-helmet");
// Load production style
let styles;
if (process.env['NODE_ENV'] === `production`) {
    try {
        styles = require("!raw-loader!../public/styles.css");
    }
    catch (err) {
        console.log(err);
    }
}
// Use `module.exports` to be compliante with `webpack-require` import method
module.exports = (props) => {
    const head = react_helmet_1.default.rewind();
    let css;
    if (process.env['NODE_ENV'] === `production`) {
        css = React.createElement("style", { id: "gatsby-inlined-css", dangerouslySetInnerHTML: { __html: styles } });
    }
    return (React.createElement("html", Object.assign({}, props.htmlAttributes),
        React.createElement("head", null,
            React.createElement("meta", { charSet: "utf-8" }),
            React.createElement("meta", { httpEquiv: "x-ua-compatible", content: "ie=edge" }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
            props.headComponents,
            css,
            React.createElement("meta", { name: "apple-mobile-web-app-capable", content: "yes" }),
            React.createElement("meta", { name: "apple-mobile-web-app-status-bar-style", content: "#D0E0D8" }),
            React.createElement("meta", { name: "apple-mobile-web-app-title", content: "Lazywill" }),
            React.createElement("link", { rel: "apple-touch-icon", href: "/icons/apple-icon-57x57.png", sizes: "57x57" }),
            React.createElement("link", { rel: "apple-touch-icon", href: "/icons/apple-icon-60x60.png", sizes: "60x60" }),
            React.createElement("link", { rel: "apple-touch-icon", href: "/icons/apple-icon-72x72.png", sizes: "72x72" }),
            React.createElement("link", { rel: "apple-touch-icon", href: "/icons/apple-icon-76x76.png", sizes: "76x76" }),
            React.createElement("link", { rel: "apple-touch-icon", href: "/icons/apple-icon-114x114.png", sizes: "114x114" }),
            React.createElement("link", { rel: "apple-touch-icon", href: "/icons/apple-icon-120x120.png", sizes: "120x120" }),
            React.createElement("link", { rel: "apple-touch-icon", href: "/icons/apple-icon-144x144.png", sizes: "144x144" }),
            React.createElement("link", { rel: "apple-touch-icon", href: "/icons/apple-icon-152x152.png", sizes: "152x152" }),
            React.createElement("link", { rel: "apple-touch-icon", href: "/icons/apple-icon-180x180.png", sizes: "180x180" }),
            React.createElement("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/favicon-16x16.png" }),
            React.createElement("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/favicon-32x32.png" }),
            React.createElement("link", { rel: "icon", type: "image/png", sizes: "96x96", href: "/icons/favicon-96x96.png" })),
        React.createElement("body", Object.assign({}, props.bodyAttributes),
            React.createElement("noscript", null, "You need to enable JavaScript to run this app!"),
            props.preBodyComponents,
            React.createElement("div", { key: `body`, id: "___gatsby", dangerouslySetInnerHTML: { __html: props.body } }),
            props.postBodyComponents)));
};
//# sourceMappingURL=html.js.map