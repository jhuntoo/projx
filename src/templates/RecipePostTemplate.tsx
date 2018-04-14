import * as React from "react";
import Main from "../components/Main/";
import {connect} from "react-redux";

require("core-js/fn/array/find");
require("prismjs/themes/prism-okaidia.css");

import {
    ActionType,
    NavigatorPosition,
    setNavigatorPosition,
    SetNavigatorPositionFunction,
    setNavigatorShape,
    State
} from "../state/store";
import {moveNavigatorAside} from "../utils/shared";
import Post from "../components/Post/";
import Footer from "../components/Footer/";
import Seo from "../components/Seo";
import {RecipeData} from '../components/Recipe/types';
import Recipe from '../components/Recipe/Recipe';

export class RecipePostTemplate extends React.Component<RecipePostTemplateProps> {
    moveNavigatorAside = moveNavigatorAside.bind(this);

    componentDidMount() {
        if (this.props.navigatorPosition === "is-featured") {
            this.moveNavigatorAside();
        }
    }

    render() {
        const {recipe, footnoteHtml } = this.props;
        console.log('RecipePostTemplate.render: props', this.props);
        return (
            <Main>
                <Recipe recipe={recipe}/>
                <Footer footnoteHtml={footnoteHtml}/>
                {/*<Seo data={data.post} facebook={facebook}/>*/}
            </Main>
        );
    }
}

interface RecipePostTemplateProps {
    recipe: RecipeData;
    footnoteHtml: string;
    navigatorPosition: NavigatorPosition;
    setNavigatorPosition: SetNavigatorPositionFunction;
    isWideScreen: boolean;
}

const mapStateToProps = (state: State, ownProps: RecipePostTemplateProps): Partial<RecipePostTemplateProps> => {
    return {
        navigatorPosition: state.navigatorPosition,
        isWideScreen: state.isWideScreen
    };
};

const mapDispatchToProps = {
    setNavigatorPosition
};

const DataWrapper = (props: IRecipeQueryData & RecipePostTemplateProps) => {
    const {data} = props;
    const {recipe} = data;
    const recipeData: RecipeData  = {
        title: recipe.frontmatter.title,
        subTitle: recipe.frontmatter.title,
        date: recipe.frontmatter.date,
        html: recipe.html,
        slug: recipe.fields.slug
    };
    return (
        <RecipePostTemplate
            {...this.props}
            recipe={recipeData}
            footnoteHtml={data.footnote.html}
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(DataWrapper);

interface IRecipeQueryData {
    data: {
        site: Site
        recipe: MarkdownRemark
        footnote: MarkdownRemark
    };
}

export const recipeQuery = graphql`
  query RecipeBySlug($slug: String!) {
    recipe: markdownRemark(fields: { slug: { eq: $slug } }) {
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
