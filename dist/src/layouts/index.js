"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_jss_1 = require("react-jss");
const styles_1 = require("material-ui/styles");
const react_redux_1 = require("react-redux");
const theme_1 = require("../styles/theme");
const globals_1 = require("../styles/globals");
const store_1 = require("../state/store");
const _1 = require("../components/common/AsyncComponent/");
const _2 = require("../components/common/Loading/");
const _3 = require("../components/Navigator/");
const _4 = require("../components/ActionsBar/");
const _5 = require("../components/InfoBar/");
const helpers_1 = require("../utils/helpers");
const InfoBox = _1.asyncComponent(() => Promise.resolve().then(() => require("../components/InfoBox/")).then(module => {
    return module;
})
    .catch(error => { }), React.createElement(_2.default, { overrides: { width: `${theme_1.theme.info.sizes.width}px`, height: "100vh", right: "auto" }, afterRight: true }));
class Layout extends React.Component {
    constructor() {
        super(...arguments);
        this.timeouts = {};
        this.categories = [];
        this.getCategories = () => {
            this.categories = this.props.data ? this.props.data.posts.edges.reduce((list, edge, i) => {
                const category = edge.node.frontmatter.category;
                if (category && !~list.indexOf(category)) {
                    return list.concat(edge.node.frontmatter.category);
                }
                else {
                    return list;
                }
            }, []) : [];
        };
        this.resizeThrottler = () => {
            return helpers_1.timeoutThrottlerHandler(this.timeouts, "resize", 500, this.resizeHandler);
        };
        this.resizeHandler = () => {
            this.props.setIsWideScreen(helpers_1.isWideScreen());
        };
    }
    componentDidMount() {
        this.props.setIsWideScreen(helpers_1.isWideScreen());
        if (typeof window !== "undefined") {
            window.addEventListener("resize", this.resizeThrottler, false);
        }
    }
    componentWillMount() {
        if (typeof localStorage !== "undefined") {
            const inLocal = +localStorage.getItem("font-size-increase");
            const inStore = this.props.fontSizeIncrease;
            if (inLocal && inLocal !== inStore && inLocal >= 1 && inLocal <= 1.5) {
                this.props.setFontSizeIncrease(inLocal);
            }
        }
        this.getCategories();
    }
    render() {
        const { children, data } = this.props;
        // TODO: dynamic management of tabindexes for keybord navigation
        return (React.createElement(styles_1.MuiThemeProvider, { theme: theme_1.theme },
            React.createElement("div", { style: {
                    padding: "1px",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    overflow: "hidden"
                } },
                children(),
                React.createElement(_3.default, { posts: data.posts.edges }),
                React.createElement(_4.default, { categories: this.categories }),
                React.createElement(_5.default, { pages: data.pages.edges, parts: data.parts.edges }),
                this.props.isWideScreen && React.createElement(InfoBox, { pages: data.pages.edges, parts: data.parts.edges }))));
    }
}
;
const mapStateToProps = (state, ownProps) => {
    return {
        pages: state.pages,
        isWideScreen: state.isWideScreen,
        fontSizeIncrease: state.fontSizeIncrease
    };
};
const mapDispatchToProps = {
    setIsWideScreen: store_1.setIsWideScreen,
    setFontSizeIncrease: store_1.setFontSizeIncrease
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(react_jss_1.default(globals_1.default)(Layout));
//eslint-disable-next-line no-undef
exports.guery = graphql `
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
            # cover {
            #   children {
            #     ... on ImageSharp {
            #       resolutions(width: 90, height: 90) {
            #         ...GatsbyImageSharpResolutions_withWebp_noBase64
            #       }
            #     }
            #   }
            # }
          }
        }
      }
    }
    pages: allMarkdownRemark(
      filter: { id: { regex: "//pages//" }, fields: { prefix: { regex: "/^\\d+$/" } } }
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
//# sourceMappingURL=index.js.map