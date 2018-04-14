import * as React from "react";
import {ReactElement} from 'react';
import {JssProvider, SheetsRegistry} from 'react-jss';
import {MuiThemeProvider, createGenerateClassName} from "material-ui/styles";
import {renderToString} from "react-dom/server";
import {Provider} from "react-redux";

require("dotenv").config();

import {createStore} from "./src/state/store";
import {theme} from './src/styles/theme';
import {createElement} from 'react';

// import theme from "./src/styles/theme";
type SetHeadComponentsFunction = (a: any[]) => void;
type SetPostBodyComponentsFunction = (a: any[]) => void;

function minifyCssString(css: string): string {
    return css.replace(/\n/g, "").replace(/\s\s+/g, " ");
}

export const replaceRenderer = ({
                                    bodyComponent,
                                    replaceBodyHTMLString,
                                    setHeadComponents
                                }:
                                    {
                                        bodyComponent: any,
                                        replaceBodyHTMLString: (x: string) => string,
                                        setHeadComponents: SetHeadComponentsFunction
                                    }) => {
    const sheetsRegistry = new SheetsRegistry();

    const generateClassName = createGenerateClassName();
    console.log('gatsby-ssr: replaceRenderer')
    const store = createStore();

    replaceBodyHTMLString(
        renderToString(
            <Provider store={store}>
                <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
                    <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
                        {bodyComponent}
                    </MuiThemeProvider>
                </JssProvider>
            </Provider>
        )
    );

    setHeadComponents([
        <style
            type="text/css"
            id="server-side-jss"
            key="server-side-jss"
            dangerouslySetInnerHTML={{__html: minifyCssString(sheetsRegistry.toString())}}
        />
    ]);
};

export const onRenderBody = ({setHeadComponents, setPostBodyComponents}:
                                 {
                                     setHeadComponents: SetHeadComponentsFunction,
                                     setPostBodyComponents: SetPostBodyComponentsFunction
                                 }) => {
    setHeadComponents([]);
    setPostBodyComponents([
        <script
            key={`webfontsloader-setup`}
            dangerouslySetInnerHTML={{
                __html: `
        WebFontConfig = {
          google: {
            families: ["${theme.base.fonts.styledFamily}:${theme.base.fonts.styledFonts}"]
          }
        };

        (function(d) {
            var wf = d.createElement('script'), s = d.scripts[0];
            wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
            wf.async = true;
            s.parentNode.insertBefore(wf, s);
        })(document);`
            }}
        />,
    ]);
};
