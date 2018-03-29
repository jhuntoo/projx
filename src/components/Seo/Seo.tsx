import React from "react";
import Helmet from "react-helmet";
import config from "../../../content/meta/config";

const Seo = (props: SeoPropTypes) => {
    const {data, facebook} = props;
    const postTitle = (((data || {}) as any).frontmatter || {}).title;
    const postDescription = (((data || {}) as any).frontmatter || {}).description;
    const postCover = (((data || {}) as any).frontmatter || {}).cover;
    const postSlug = (((data || {}) as any).fields || {}).slug;

    const title = postTitle ? `${postTitle} - ${config.shortSiteTitle}` : config.siteTitle;
    const description = postDescription ? postDescription : config.siteDescription;
    const image = postCover ? postCover : config.siteImage;
    const url = config.siteUrl + config.pathPrefix + postSlug;

    return (
        <Helmet htmlAttributes={{
         lang: config.siteLanguage,
         prefix: "og: http://ogp.me/ns#"
      }}
        >
            {/* General tags */}
            <title>{title}</title>
            <meta name="description" content={description}/>
            {/* OpenGraph tags */}
            <meta property="og:url" content={url}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={image}/>
            <meta property="og:type" content="website"/>
            <meta property="fb:app_id" content={facebook.appId}/>
            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary"/>
            <meta
                name="twitter:creator"
                content={config.authorTwitterAccount ? config.authorTwitterAccount : ""}
            />
        </Helmet>
    );
};

interface SeoPropTypes {
    data: any;
    facebook: any
}
;

export default Seo;
