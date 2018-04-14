import * as React from 'react';
import injectSheet from 'react-jss';
import { forceCheck } from 'react-lazyload';

import ListHeader from './ListHeader';
import SpringScrollbars from '../SpringScrollbars';
import ListItem from './ListItem';
import {Theme} from 'material-ui';
import {NavigatorPosition, NavigatorShape} from '../../state/store';

const styles = (theme: Theme) => ({
  posts: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '100%',
  },
  inner: {
    padding: `calc(${theme.bars.sizes.infoBar}px + 1.3rem) 1.3rem calc(${
      theme.bars.sizes.actionsBar
    }px + 1.3rem) 1.3rem`,
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `calc(${theme.bars.sizes.infoBar}px + 2rem) 2rem calc(${
        theme.bars.sizes.actionsBar
      }px + 2rem) 2rem`,
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: `2rem  calc(1rem + 17px) calc(2rem + 17px) 2rem`,
      left: `${theme.info.sizes.width}px`,
      '.moving-featured &, .is-aside &': {
        padding: '1rem .5rem 1rem .5rem',
      },
    },
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '.is-aside.closed &, .moving-featured.closed &': {
      display: 'none',
    },
  },
});

class List extends React.Component<ListProps, {}> {
  componentDidUpdate(prevProps: ListProps, prevState: any) {
    if (prevProps.categoryFilter !== this.props.categoryFilter) {
      setTimeout(forceCheck, 300);
    }
  }

  render() {
    const {
      classes,
      posts,
      linkOnClick,
      expandOnClick,
      categoryFilter,
      navigatorShape,
      removeFilter,
    } = this.props;

    return (
      <div className={classes.posts}>
        <SpringScrollbars forceCheckOnScroll={true} isNavigator={true}>
          <div className={classes.inner}>
            <ListHeader
              expandOnClick={expandOnClick}
              categoryFilter={categoryFilter}
              navigatorShape={navigatorShape}
              removeFilter={removeFilter}
            />
            <ul className={classes.list}>
              {posts &&
                posts.map((post, i) => (
                  <ListItem
                    key={i}
                    post={post}
                    linkOnClick={linkOnClick}
                    categoryFilter={categoryFilter}
                  />
                ))}
            </ul>
          </div>
        </SpringScrollbars>
      </div>
    );
  }
}

interface ListProps {
  classes: any;
  readonly posts: MarkdownRemarkEdges;
  linkOnClick: (event: React.MouseEvent<HTMLElement>) => void;
  expandOnClick: (event: React.MouseEvent<HTMLElement>) => void;
  navigatorPosition: NavigatorPosition;
  navigatorShape: NavigatorShape;
  categoryFilter: string;
  removeFilter: () => void;
}

export default injectSheet(styles)(List);
