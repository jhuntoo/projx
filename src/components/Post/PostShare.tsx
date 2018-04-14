import * as React from "react";
import injectSheet from "react-jss";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon
} from "react-share";
import {Theme} from 'material-ui';
import {Config} from '../../../content/meta/config';

const styles = (theme: Theme) => ({
  share: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1em 0 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      flexDirection: "row"
    }
  },
  links: {
    display: "flex",
    flexDirection: "row",
    "& .SocialMediaShareButton": {
      margin: "0 .8em",
      cursor: "pointer"
    }
  },
  label: {
    fontSize: "1.2em",
    margin: "0 1em 1em",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 1em"
    }
  }
});

class PostShare extends React.Component<PostShareProps> {
  render() {
    const { post, classes, slug } = this.props;
    const { excerpt, frontmatter } = post;
    const { title } = frontmatter;
    const url = Config.siteUrl + Config.pathPrefix + slug;

    const iconSize = 36;
    const filter = (count: number) => (count > 0 ? count : "");

    return (
      <div className={classes.share}>
        <span className={classes.label}>SHARE</span>
        <div className={classes.links}>
          <TwitterShareButton url={url} title={title}>
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
          <GooglePlusShareButton url={url}>
            <GooglePlusIcon round size={iconSize} />
            <GooglePlusShareCount url={url}>
              {(count: number) => <div className="share-count">{filter(count)}</div>}
            </GooglePlusShareCount>
          </GooglePlusShareButton>
          <FacebookShareButton
            url={url}
            quote={`${title} - ${excerpt}`}
            aria-label="Facebook share"
          >
            <FacebookIcon round size={iconSize} />
            <FacebookShareCount url={url}>
              {(count: number) => <div className="share-count">{filter(count)}</div>}
            </FacebookShareCount>
          </FacebookShareButton>
          <LinkedinShareButton url={url} title={title} description={excerpt}>
            <LinkedinIcon round size={iconSize} />
            <LinkedinShareCount url={url}>
              {(count: number) => <div className="share-count">{filter(count)}</div>}
            </LinkedinShareCount>
          </LinkedinShareButton>
        </div>
      </div>
    );
  }
}

interface PostShareProps {
  post: any;
  classes?: any;
  slug: string;
}

export default injectSheet(styles)(PostShare);
