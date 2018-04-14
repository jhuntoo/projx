import {Config} from './content/meta/config';
/// <reference path="src/declarations.d.ts" />
require("dotenv").config();

import * as path from "path";

interface IGatsbyConfig {
    siteMetadata: SiteMetadata;
    plugins: Array<string | { resolve: string; options?: {} }>;
}

const query = `{
  allMarkdownRemark(filter: { id: { regex: "//posts|pages//" } }) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        internal {
          content
        }
        frontmatter {
          title
          subTitle
        }
      }
    }
  }
}`;

// const queries = [
//     {
//         query,
//         transformer: ({ data }) => data.allMarkdownRemark.edges.map(({ node }) => node)
//     }
// ];

const GATSBY_CONFIG: IGatsbyConfig = {
    siteMetadata: {
        title: `Gatsby Typescript Starter`,
        description: Config.siteDescription,
        siteUrl: Config.siteUrl,
        pathPrefix: Config.pathPrefix,
        algolia: {
            appId: process.env.ALGOLIA_APP_ID ? process.env.ALGOLIA_APP_ID : "",
            searchOnlyApiKey: process.env.ALGOLIA_SEARCH_ONLY_API_KEY
                ? process.env.ALGOLIA_SEARCH_ONLY_API_KEY
                : "",
            indexName: process.env.ALGOLIA_INDEX_NAME ? process.env.ALGOLIA_INDEX_NAME : ""
        },
        facebook: {
            appId: process.env.FB_APP_ID ? process.env.FB_APP_ID : ""
        }
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/posts/`,
                name: "posts"
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/pages/`,
                name: "pages"
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `parts`,
                path: `${__dirname}/content/parts/`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-plugin-sharp`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 800,
                            backgroundColor: "transparent"
                        }
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 2em`
                        }
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`
                ]
            }
        },

        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-catch-links`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: Config.manifestName,
                short_name: Config.manifestShortName,
                start_url: Config.manifestStartUrl,
                background_color: Config.manifestBackgroundColor,
                theme_color: Config.manifestThemeColor,
                display: Config.manifestDisplay,
                icons: [
                    {
                        src: "/icons/icon-48x48.png",
                        sizes: "48x48",
                        type: "image/png"
                    },
                    {
                        src: "/icons/icon-96x96.png",
                        sizes: "96x96",
                        type: "image/png"
                    },
                    {
                        src: "/icons/icon-144x144.png",
                        sizes: "144x144",
                        type: "image/png"
                    },
                    {
                        src: "/icons/icon-192x192.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "/icons/icon-256x256.png",
                        sizes: "256x256",
                        type: "image/png"
                    },
                    {
                        src: "/icons/icon-384x384.png",
                        sizes: "384x384",
                        type: "image/png"
                    },
                    {
                        src: "/icons/icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png"
                    }
                ]
            }
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_ID
            }
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
                feeds: [
                    {
                        serialize: (obj: any) => {
                            const site = obj.query.site;
                            const allMarkdownRemark = obj.query.allMarkdownRemark;
                            return allMarkdownRemark.edges.map((edge: any) => {
                                return Object.assign({}, edge.node.frontmatter, {
                                    description: edge.node.excerpt,
                                    url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                    guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                    custom_elements: [{"content:encoded": edge.node.html}]
                                });
                            });
                        },
                        query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [fields___prefix] },
                  filter: { id: { regex: "//posts//" } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                        prefix
                      }
                      frontmatter {
                        title
                      }
                    }
                  }
                }
              }
            `,
                        output: "/rss.xml"
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-sitemap`
        },
        {
            resolve: "gatsby-plugin-svgr",
            options: {
                dir: `svg-icons`
            }
        },
        `gatsby-plugin-typescript`,
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/cms/cms.tsx`,
            },
        },
    ],
};

export = GATSBY_CONFIG;
