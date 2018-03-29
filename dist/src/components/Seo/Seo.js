"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_helmet_1 = require("react-helmet");
const config_1 = require("../../../content/meta/config");
const Seo = (props) => {
    const { data, facebook } = props;
    const postTitle = ((data || {}).frontmatter || {}).title;
    const postDescription = ((data || {}).frontmatter || {}).description;
    const postCover = ((data || {}).frontmatter || {}).cover;
    const postSlug = ((data || {}).fields || {}).slug;
    const title = postTitle ? `${postTitle} - ${config_1.default.shortSiteTitle}` : config_1.default.siteTitle;
    const description = postDescription ? postDescription : config_1.default.siteDescription;
    const image = postCover ? postCover : config_1.default.siteImage;
    const url = config_1.default.siteUrl + config_1.default.pathPrefix + postSlug;
    return (react_1.default.createElement(react_helmet_1.default, { htmlAttributes: {
            lang: config_1.default.siteLanguage,
            prefix: "og: http://ogp.me/ns#"
        } },
        react_1.default.createElement("title", null, title),
        react_1.default.createElement("meta", { name: "description", content: description }),
        react_1.default.createElement("meta", { property: "og:url", content: url }),
        react_1.default.createElement("meta", { property: "og:title", content: title }),
        react_1.default.createElement("meta", { property: "og:description", content: description }),
        react_1.default.createElement("meta", { property: "og:image", content: image }),
        react_1.default.createElement("meta", { property: "og:type", content: "website" }),
        react_1.default.createElement("meta", { property: "fb:app_id", content: facebook.appId }),
        react_1.default.createElement("meta", { name: "twitter:card", content: "summary" }),
        react_1.default.createElement("meta", { name: "twitter:creator", content: config_1.default.authorTwitterAccount ? config_1.default.authorTwitterAccount : "" })));
};
;
exports.default = Seo;
//# sourceMappingURL=Seo.js.map