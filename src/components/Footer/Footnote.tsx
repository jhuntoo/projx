import * as React from "react";
import injectSheet from "react-jss";
import {Theme} from 'material-ui';

const styles = (theme: Theme) => ({
  container: {
    fontSize: `${theme.footer.fonts.footnote.size}em`,
    lineHeight: theme.footer.fonts.footnote.lineHeight,
    color: theme.footer.colors.text,
    "& a": {
      color: theme.footer.colors.link,
      fontWeight: "normal",
      textShadow: "none"
    },
    "& a:hover": {
      color: theme.footer.colors.linkHover
    },
    "& ul": {
      listStyle: "none",
      margin: 0,
      padding: 0,
      textAlign: "center"
    },
    "& li": {
      display: "inline-block",
      margin: "0 .3em"
    }
  }
});

const Footnote = ({ classes, content }: FootnoteProps) => {
  return <div className={classes.container} dangerouslySetInnerHTML={{ __html: content }} />;
};

interface FootnoteProps {
  classes: any;
  content: string;
}

export default injectSheet(styles)(Footnote);
