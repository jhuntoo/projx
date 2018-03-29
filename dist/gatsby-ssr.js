"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_jss_1 = require("react-jss");
const styles_1 = require("material-ui/styles");
const server_1 = require("react-dom/server");
require("dotenv").config();
const store_1 = require("./src/state/store");
const theme_1 = require("./src/styles/theme");
function minifyCssString(css) {
    return css.replace(/\n/g, "").replace(/\s\s+/g, " ");
}
exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
    const sheetsRegistry = new react_jss_1.SheetsRegistry();
    const generateClassName = styles_1.createGenerateClassName();
    const store = store_1.default();
    replaceBodyHTMLString(server_1.renderToString(store, { store } >
        registry, { sheetsRegistry }, generateClassName = { generateClassName } >
        theme_1.default, { theme: theme_1.default }, sheetsManager = { new: Map() } >
        { bodyComponent }
        < /MuiThemeProvider>
        < /JssProvider>
        < /Provider>));
    setHeadComponents([
        type, "text/css",
        id = "server-side-jss",
        key = "server-side-jss",
        dangerouslySetInnerHTML = {}, { __html: minifyCssString(sheetsRegistry.toString()) }
    ]);
};
/>;
;
;
exports.onRenderBody = ({ setHeadComponents }) => {
    return setHeadComponents([]);
};
exports.onRenderBody = ({ setPostBodyComponents }) => {
    return setPostBodyComponents([
        key, "fb-root", id = "fb-root" /  > ,
        key, {} `webfontsloader-load`
    ]);
};
href = "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";
as = "script"
    /  > ,
    key;
{
    `webfontsloader-setup`;
}
dangerouslySetInnerHTML = {};
{
    __html: `
        WebFontConfig = {
          google: {
            families: ["${theme_1.default.base.fonts.styledFamily}:${theme_1.default.base.fonts.styledFonts}"]
          }
        };

        (function(d) {
            var wf = d.createElement('script'), s = d.scripts[0];
            wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
            wf.async = true;
            s.parentNode.insertBefore(wf, s);
        })(document);`;
}
/>,
    < script;
key = {} `fb-setup`;
dangerouslySetInnerHTML = {};
{
    __html: `(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=${process.env.FB_APP_ID ? process.env.FB_APP_ID : ""}&autoLogAppEvents=1';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));`;
}
/>;
;
;
//# sourceMappingURL=gatsby-ssr.js.map