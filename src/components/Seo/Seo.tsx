import * as React from 'react';
import Helmet from 'react-helmet';
import {Config} from '../../../content/meta/config';

const Seo = (props: SeoPropTypes) => {
  const { data, facebook } = props;
  const postTitle = (((data || {}) as any).frontmatter || {}).title;
  const postDescription = (((data || {}) as any).frontmatter || {}).description;
  const postCover = (((data || {}) as any).frontmatter || {}).cover;
  const postSlug = (((data || {}) as any).fields || {}).slug;

  const title = postTitle
    ? `${postTitle} - ${Config.shortSiteTitle}`
    : Config.siteTitle;
  const description = postDescription ? postDescription : Config.siteDescription;
  const image = postCover ? postCover : Config.siteImage;
  const url = Config.siteUrl + Config.pathPrefix + postSlug;

  return (
    <Helmet
      htmlAttributes={{
        lang: Config.siteLanguage,
        prefix: 'og: http://ogp.me/ns#',
      }}
    >
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="fb:app_id" content={facebook.appId} />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={Config.authorTwitterAccount ? Config.authorTwitterAccount : ''}
      />
    </Helmet>
  );
};

interface SeoPropTypes {
  data?: any;
  facebook?: any;
}
export default Seo;
