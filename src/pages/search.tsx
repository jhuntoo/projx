import * as React from "react";
require("core-js/fn/array/find");

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Search from "../components/Search";

const SearchPage = (props: SearchPageProps) => {
    const { data } = props;

    return (
        <Main>
            <Article>
                <PageHeader title="Search by" algolia={true} />
                <Search algolia={data.site.siteMetadata.algolia} />
            </Article>
        </Main>
    );
};

interface SearchPageProps {
    data: any;
}

export default SearchPage;

export const query = graphql`
  query AlgoliaQuery {
    site {
      siteMetadata {
        algolia {
          appId
          searchOnlyApiKey
          indexName
        }
      }
    }
  }
`;
