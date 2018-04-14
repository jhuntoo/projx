import * as React from "react";
import injectSheet from "react-jss";
import Avatar from "material-ui/Avatar";

import * as avatar from "../../images/jpg/avatar.jpg";
import {Theme} from 'material-ui';
import {Config} from '../../../content/meta/config';

const styles = (theme: Theme) => ({
  author: {
    margin: "3em 0 0",
    padding: "3em 0 0",
    borderTop: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& a": {
      borderBottom: `1px solid ${theme.base.colors.link}`,
      color: theme.base.colors.link
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      flexDirection: "row",
      justifyContent: "center"
    }
  },
  avatar: {
    margin: "0 1em 1em",
    borderRadius: "75% 65%",
    width: "60px",
    height: "60px",
    border: "1px solid #ddd",
    flexShrink: 0,
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 1em 0"
    }
  },
  box: {
    display: "flex",
    flexDirction: "column",
    minHeight: "50px",
    alignItems: "center"
  }
});

const PostAuthor = (props: PostAuthorProps) => {
  const { classes, author } = props;

  return (
    <div className={classes.author}>
      <Avatar src={avatar} className={classes.avatar} alt={Config.authorName} />
      <div className={classes.box} dangerouslySetInnerHTML={{ __html: author.html }} />
    </div>
  );
};

interface PostAuthorProps {
  classes: any;
  author: any;
}

export default injectSheet(styles)(PostAuthor);
