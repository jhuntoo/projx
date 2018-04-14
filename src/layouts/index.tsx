import * as React from 'react';
import injectSheet from 'react-jss';
import {MuiThemeProvider} from 'material-ui/styles';
import {connect} from 'react-redux';

import {theme} from '../styles/theme';
import globals from '../styles/globals';

import {setFontSizeIncrease, setIsWideScreen} from '../state/store';

import {asyncComponent} from '../components/common/AsyncComponent/';
import Loading from '../components/common/Loading/';
import Navigator from '../components/Navigator/';
import ActionsBar from '../components/ActionsBar/';
import InfoBar from '../components/InfoBar/';

import {isWideScreen, timeoutThrottlerHandler} from '../utils/helpers';

const InfoBox = asyncComponent(
    () =>
        import('../components/InfoBox/')
            .then(module => {
                console.log('InfoBox loaded');
                return module;
            })
            .catch(error => { // do nothing
                console.error(error);
            }),
    <Loading
        overrides={{
            height: '100vh',
            right: 'auto',
            width: `${theme.info.sizes.width}px`,
        }}
        afterRight={true}
    />
);

class Layout extends React.Component<LayoutPropTypes, {}> {
    timeouts = {};
    categories: any[] = [];

    constructor(props: LayoutPropTypes, ...rest: any[]) {
        super(props, ...rest);
        this.timeouts = {};
    }

    componentDidMount() {
        this.props.setIsWideScreen(isWideScreen());
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', () => this.resizeThrottler(), false);
        }
    }

    componentWillMount() {
        if (typeof localStorage !== 'undefined') {
            const inLocal = +localStorage.getItem('font-size-increase');

            const inStore = this.props.fontSizeIncrease;

            if (inLocal && inLocal !== inStore && inLocal >= 1 && inLocal <= 1.5) {
                this.props.setFontSizeIncrease(inLocal);
            }
        }

        this.getCategories();
    }

    getCategories() {
        this.categories = this.props.data
            ? this.props.data.posts.edges.reduce((list: string[], edge: MarkdownRemarkEdge, i: number) => {
                const category = edge.node.frontmatter.category;
                if (category && list.indexOf(category) !== -1) {
                    return list.concat(edge.node.frontmatter.category);
                } else {
                    return list;
                }
            }, [])
            : [];
    }

    resizeThrottler() {
        return timeoutThrottlerHandler(
            this.timeouts,
            'resize',
            500,
            () => this.resizeHandler()
        );
    }

    resizeHandler() {
        this.props.setIsWideScreen(isWideScreen());
    }

    render() {
        const {children, data} = this.props;
        // TODO: dynamic management of tabindexes for keybord navigation
        return (
            <MuiThemeProvider theme={theme}>
                <div
                    style={{
                        bottom: 0,
                        left: 0,
                        overflow: 'hidden',
                        padding: '1px',
                        position: 'absolute',
                        right: 0,
                        top: 0,
                    }}
                >
                    {children()}
                    <Navigator posts={data.posts.edges}/>
                    <ActionsBar categories={this.categories}/>
                    <InfoBar pages={data.pages.edges}/>
                    {this.props.isWideScreen && (
                        <InfoBox pages={data.pages.edges} parts={data.parts.edges}/>
                    )}
                </div>
            </MuiThemeProvider>
        );
    }
}

interface LayoutPropTypes {
    data: {
        posts: AllMarkdownRemark,
        pages: AllMarkdownRemark,
        parts: AllMarkdownRemark;
    };
    children: () => React.Component;
    setIsWideScreen: (x: boolean) => void;
    isWideScreen: boolean;
    fontSizeIncrease: number;
    setFontSizeIncrease: (n: number) => void;
}

const mapStateToProps = (state: any, ownProps: LayoutPropTypes) => {
    return {
        pages: state.pages,
        isWideScreen: state.isWideScreen,
        fontSizeIncrease: state.fontSizeIncrease,
    };
};

const mapDispatchToProps = {
    setIsWideScreen,
    setFontSizeIncrease,
};

export default connect(mapStateToProps, mapDispatchToProps)(
    injectSheet(globals)(Layout)
);

export const guery = graphql`
  query LayoutQuery {
    posts: allMarkdownRemark(
      filter: { id: { regex: "//posts//" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            subTitle
            category
             cover {
               children {
                 ... on ImageSharp {
                   resolutions(width: 90, height: 90) {
                        width
                        height
                        src
                        srcSet
                   }
                 }
               }
             }
          }
        }
      }
    }
    pages: allMarkdownRemark(
      filter: {
        id: { regex: "//pages//" }
        fields: { prefix: { regex: "/^\\d+$/" } }
      }
      sort: { fields: [fields___prefix], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            menuTitle
          }
        }
      }
    }
    parts: allMarkdownRemark(filter: { id: { regex: "//parts//" } }) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
