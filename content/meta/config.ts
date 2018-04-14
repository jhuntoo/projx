import {Colors} from '../../src/styles/colors';

export  type SocialSite = 'github' | 'twitter' | 'facebook';

export interface AuthorSocialLink {
    name: SocialSite;
    url: string;
}

export interface IConfig {
    homeTitle: string;
    siteTitle: string;
    shortSiteTitle: string;
    siteDescription: string;
    siteUrl: string;
    pathPrefix: string;
    siteImage: string;
    siteLanguage: string;
    // author
    authorName: string;
    authorTwitterAccount: string;
    // info
    infoTitle: string;
    infoTitleNote: string;
    // manifest.json
    manifestName: string;
    manifestShortName: string;
    manifestStartUrl: string;
    manifestBackgroundColor: string;
    manifestThemeColor: string;
    manifestDisplay: string;
    // social
    authorSocialLinks: AuthorSocialLink[];
}

export const Config: IConfig = {
  homeTitle: "Personal blog",
  siteTitle: "PersonalBlog - a blog starter for GatsbyJS",
  shortSiteTitle: "PersonalBlog GatsbyJS Starter",
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
  pathPrefix: "",
  siteImage:  "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "greg lobinski",
  authorTwitterAccount: "greglobinski",
  // info
  infoTitle: "greg lobinski",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "PersonalBlog - a blog starter for GatsbyJS",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: Colors.background,
  manifestThemeColor: Colors.background,
  manifestDisplay: "standalone",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/greglobinski" },
    { name: "twitter", url: "https://twitter.com/greglobinski" },
    { name: "facebook", url: "http://facebook.com/greglobinski" }
  ]
};
