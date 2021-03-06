import * as React from 'react';
import injectSheet from 'react-jss';

import {AuthorSocialLink, Config, SocialSite} from '../../../content/meta/config';

import GithubIcon from '../../images/svg-icons/github.svg';
import FacebookIcon from '../../images/svg-icons/facebook.svg';
import TwitterIcon from '../../images/svg-icons/twitter.svg';
import {Theme} from 'material-ui';

const styles = (theme: Theme) => ({
  social: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  link: {
    display: 'inline-block',
    padding: '5px',
    '&:hover': {
      '& svg': {
        fill: theme.info.colors.socialIconsHover,
      },
    },
  },
  svg: {
    width: '40px',
    height: '40px',
    fill: theme.info.colors.socialIcons,
    transition: 'all .5s',
  },
});

const Socialcons = (props: SocialconsProps) => {
  const { classes } = props;
  const items = Config.authorSocialLinks;
  const icons: { [s: string]: any; } = {
    twitter: TwitterIcon,
    facebook: FacebookIcon,
    github: GithubIcon,
  };

  return (
    <div className={classes.social}>
      {items.map((item: AuthorSocialLink) => {
        const Icon = icons[item.name];
        return (
          <a
            href={item.url}
            key={item.name}
            className={classes.link}
            target="_blank"
            rel="noopener noreferrer"
            title={item.name}
          >
            <Icon className={classes.svg} />
          </a>
        );
      })}
    </div>
  );
};

interface SocialconsProps {
  classes: any;
}

export default injectSheet(styles)(Socialcons);
