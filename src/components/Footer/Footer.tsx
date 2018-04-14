import * as React from "react";
import injectSheet from "react-jss";

import Footnote from "./Footnote";
import {Theme, WithStyles} from 'material-ui';

const styles = (theme: Theme) => ({
  footer: {
    color: theme.main.colors.footer,
    padding: `1.5rem 1.5rem  calc(${theme.bars.sizes.actionsBar}px + 1.5rem) 1.5rem`,
    "& p": {
      margin: 0
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `2rem 2.5rem  calc(${theme.bars.sizes.actionsBar}px + 2rem) 2.5rem`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: `2rem 3rem 2rem 3rem`
    }
  }
});

const Footer = (props: FooterProps) => {
  const { classes, footnoteHtml } = props;

  return (
    <footer className={classes.footer}>
      <Footnote content={footnoteHtml} />
    </footer>
  );
};

interface Props {
  footnoteHtml: string;
}

type FooterProps = Props & WithStyles<'footer'>;

export default injectSheet(styles)(Footer);
