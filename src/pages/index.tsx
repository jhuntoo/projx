import * as React from "react";
import { connect } from "react-redux";

import {NavigatorPosition, setNavigatorPosition, setNavigatorShape, State} from "../state/store";
import { featureNavigator } from "../utils/shared";
import Seo from "../components/Seo";

class Index extends React.Component<IndexProps> {
    featureNavigator = featureNavigator.bind(this);

    componentWillMount() {
        if (this.props.navigatorPosition !== "is-featured") {
            this.props.setNavigatorPosition("is-featured");
        }
    }

    render() {
        const { data } = this.props;
        const facebook = (((data || {}).site || {}).siteMetadata || {}).facebook;

        return (
            <div>
                <Seo facebook={facebook} />
            </div>
        );
    }
}

interface IndexProps {
    data: any;
    navigatorPosition: NavigatorPosition;
    setNavigatorPosition: (p: NavigatorPosition) => any;
    isWideScreen: boolean;
}

const mapStateToProps = (state: State, ownProps: IndexProps): Partial<IndexProps> => {
    return {
        navigatorPosition: state.navigatorPosition,
        isWideScreen: state.isWideScreen
    };
};

const mapDispatchToProps = {
    setNavigatorPosition,
    setNavigatorShape
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
