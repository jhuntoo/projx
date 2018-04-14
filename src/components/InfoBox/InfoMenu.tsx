import * as React from 'react';
import injectSheet from 'react-jss';
import Link from 'gatsby-link';
import {Theme} from 'material-ui';

const styles = (theme: Theme) => ({
  infoMenu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    width: '100%',
  },
  link: {
    padding: '.5em',
    fontWeight: 300,
    fontTransform: 'lowercase',
    color: theme.info.colors.menuLink,
    '&:hover': {
      color: theme.info.colors.menuLinkHover,
    },
  },
});

const InfoMenu = (props: InfoMenuProps) => {
  const { classes, pages, linkOnClick } = props;

  return (
    <nav className={classes.infoMenu}>
      {pages.map((page, i) => {
        const { fields, frontmatter } = page.node;
        console.log('[InfoMenu.render] fields', fields)
        return (
          <Link
            key={fields.slug}
            to={fields.slug}
            onClick={linkOnClick}
            className={classes.link}
            data-shape="closed"
          >
            {frontmatter.menuTitle ? frontmatter.menuTitle : frontmatter.title}
          </Link>
        );
      })}
      <Link
        to="/contact/"
        onClick={linkOnClick}
        className={classes.link}
        data-shape="closed"
      >
        Contact
      </Link>
    </nav>
  );
};

interface InfoMenuProps {
  pages: any[];
  classes: any;
  linkOnClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export default injectSheet(styles)(InfoMenu);
