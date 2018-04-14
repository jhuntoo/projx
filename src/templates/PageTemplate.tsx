import * as React from "react";
import { connect } from "react-redux";

import {NavigatorPosition, setNavigatorPosition, setNavigatorShape, State} from "../state/store";
import { moveNavigatorAside } from "../utils/shared";
import Main from "../components/Main/";
import Page from "../components/Page/";
import Footer from "../components/Footer/";
import Seo from "../components/Seo";

class PageTemplate extends React.Component<PageTemplateProps, {}> {
  moveNavigatorAside = moveNavigatorAside.bind(this);

  componentDidMount() {
    if (this.props.navigatorPosition === "is-featured") {
      this.moveNavigatorAside();
    }
  }

  render() {
    const { data } = this.props;
    const facebook = (((data || {}).site || {}).siteMetadata || {}).facebook;

    return (
      <Main>
        <Page page={data.page} />
        <Footer footnote={data.footnote} />
        <Seo data={data.post} facebook={facebook} />
      </Main>
    );
  }
}

interface PageTemplateProps {
  data: any;
  navigatorPosition: NavigatorPosition;
  setNavigatorPosition: (p: NavigatorPosition) => void;
  isWideScreen: boolean;
}

const mapStateToProps = (state: State, ownProps: NavigatorPosition): Partial<PageTemplateProps> => {
  return {
    navigatorPosition: state.navigatorPosition,
    isWideScreen: state.isWideScreen
  };
};

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape
};

export default connect(mapStateToProps, mapDispatchToProps)(PageTemplate);

export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
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
