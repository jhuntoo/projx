import * as React from 'react';
import injectSheet from 'react-jss';
import Avatar from 'material-ui/Avatar';
import Link from 'gatsby-link';
import { connect } from 'react-redux';

import {setNavigatorPosition, State} from '../../state/store';
import { featureNavigator, moveNavigatorAside } from './../../utils/shared';

import avatar from '../../images/jpg/avatar.jpg';
import TopMenu from './TopMenu';
import {Theme} from 'material-ui';
import {Config} from '../../../content/meta/config';

const styles = (theme: Theme) => ({
  infoBar: {
    position: 'absolute',
    background: theme.bars.colors.background,
    top: 0,
    left: 0,
    width: '100%',
    height: `${theme.bars.sizes.infoBar}px`,
    '&::before': {
      content: `""`,
      position: 'absolute',
      left: theme.base.sizes.linesMargin,
      right: theme.base.sizes.linesMargin,
      height: 0,
      bottom: 0,
      borderTop: `1px solid ${theme.base.colors.lines}`,
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: 'none',
    },
  },
  title: {
    float: 'left',
    margin: '10px 0 0 15px',
    color: theme.bars.colors.text,
    '& small': {
      display: 'block',
      fontSize: '.65em',
      margin: '2px 0 0 0',
    },
  },
  avatarLink: {
    display: 'block',
    float: 'left',
    margin: '13px 0 0 30px',
  },
  avatar: {
    width: '36px',
    borderRadius: '65% 75%',
    border: '1px solid #ddd',
    height: '36px',
  },
});

class InfoBar extends React.Component<InfoBarProps> {
  homeLinkOnClick = featureNavigator.bind(this);
  pageLinkOnClick = moveNavigatorAside.bind(this);

  render() {
    const { classes, pages } = this.props;

    return (
      <aside className={classes.infoBar}>
        <Link
          to="/"
          className={classes.avatarLink}
          onClick={this.homeLinkOnClick}
        >
          <Avatar
            alt={Config.infoTitle}
            src={avatar}
            className={classes.avatar}
          />
        </Link>
        <h3 className={classes.title}>
          {Config.infoTitle}
          <small>{Config.infoTitleNote}</small>
        </h3>
        <TopMenu
          pages={pages}
          homeLinkOnClick={this.homeLinkOnClick}
          pageLinkOnClick={this.pageLinkOnClick}
        />
      </aside>
    );
  }
}

interface InfoBarProps {
  classes?: any;
  pages: AllMarkdownRemark;
}

const mapStateToProps = (state: State, ownProps: InfoBarProps) => {
  return {
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape,
  };
};

const mapDispatchToProps = {
  setNavigatorPosition,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  injectSheet(styles)(InfoBar)
);
