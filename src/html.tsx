/* tslint:disable no-var-requires */
/* tslint:disable no-console */

import * as React from 'react';
import Helmet from 'react-helmet';

// Load production style
let styles: string;
if (process.env.NODE_ENV === `production`) {
  try {
    styles = require('!raw-loader!../public/styles.css');
  } catch (err) {
    console.log(err);
  }
}

interface HtmlProps {
  body: any;
  bodyAttributes: any;
  htmlAttributes: any;
  preBodyComponents: any;
  postBodyComponents: any;
  headComponents: any;
}

// Use `module.exports` to be compliante with `webpack-require` import method
module.exports = (props: HtmlProps) => {
  const head = Helmet.rewind();
  let css;
  if (process.env.NODE_ENV === `production`) {
    css = (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  }
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {props.headComponents}
        {css}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#D0E0D8" />
        <meta name="apple-mobile-web-app-title" content="Lazywill" />
        <link
          rel="apple-touch-icon"
          href="/icons/apple-icon-57x57.png"
          sizes="57x57"
        />
        <link
          rel="apple-touch-icon"
          href="/icons/apple-icon-60x60.png"
          sizes="60x60"
        />
        <link
          rel="apple-touch-icon"
          href="/icons/apple-icon-72x72.png"
          sizes="72x72"
        />
        <link
          rel="apple-touch-icon"
          href="/icons/apple-icon-76x76.png"
          sizes="76x76"
        />
        <link
          rel="apple-touch-icon"
          href="/icons/apple-icon-114x114.png"
          sizes="114x114"
        />
        <link
          rel="apple-touch-icon"
          href="/icons/apple-icon-120x120.png"
          sizes="120x120"
        />
        <link
          rel="apple-touch-icon"
          href="/icons/apple-icon-144x144.png"
          sizes="144x144"
        />
        <link
          rel="apple-touch-icon"
          href="/icons/apple-icon-152x152.png"
          sizes="152x152"
        />
        <link
          rel="apple-touch-icon"
          href="/icons/apple-icon-180x180.png"
          sizes="180x180"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons/favicon-96x96.png"
        />
      </head>
      <body {...props.bodyAttributes}>
        <noscript>You need to enable JavaScript to run this app!</noscript>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
