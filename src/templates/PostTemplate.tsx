import * as React from "react";
import Main from "../components/Main/";
import {connect} from "react-redux";

require("core-js/fn/array/find");
require("prismjs/themes/prism-okaidia.css");

import {NavigatorPosition, setNavigatorPosition, setNavigatorShape, State} from "../state/store";
import {moveNavigatorAside} from "../utils/shared";
import Post from "../components/Post/";
import Footer from "../components/Footer/";
import Seo from "../components/Seo";

class PostTemplate extends React.Component<PostTemplateProps> {
    moveNavigatorAside = moveNavigatorAside.bind(this);

    componentDidMount() {
        if (this.props.navigatorPosition === "is-featured") {
            this.moveNavigatorAside();
        }
    }

    render() {
        const {data, pathContext} = this.props;
        const facebook = data.site.siteMetadata.facebook;

        return (
            <Main>
                <Post post={data.post} slug={pathContext.slug} author={data.author} facebook={facebook}/>
                <Footer footnote={data.footnote}/>
                <Seo data={data.post} facebook={facebook}/>
            </Main>
        );
    }
}

interface PostTemplateProps {
    data: {
        post: MarkdownRemark;
        author: MarkdownRemark;
        footnote: MarkdownRemark;
        site: Site;
    };
    pathContext: any;
    navigatorPosition: NavigatorPosition;
    setNavigatorPosition: (p: NavigatorPosition) => void;
    isWideScreen: boolean;
}

const mapStateToProps = (state: State, ownProps: PostTemplateProps): Partial<PostTemplateProps> => {
    return {
        navigatorPosition: state.navigatorPosition,
        isWideScreen: state.isWideScreen
    };
};

const mapDispatchToProps = {
    setNavigatorPosition,
    setNavigatorShape
};

export default connect(mapStateToProps, mapDispatchToProps)(PostTemplate);

export const postQuery = graphql`
  query PostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        subTitle
        cover {
          childImageSharp {
            resize(width: 300) {
              src
            }
          }
        }
      }
    }
    author: markdownRemark(id: { regex: "/author/" }) {
      id
      html
    }
    footnote: markdownRemark(id: { regex: "/footnote/" }) {
      id
      html
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
