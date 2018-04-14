import * as React from "react";
import Article from "../Main/Article";
import PageHeader from "./PageHeader";
import Content from "../Main/Content";

const Page = (props: PageProps) => {
  const { page } = props;
  const html = (page || {}).html;

  return (
    <Article>
      <PageHeader {...page.frontmatter} />
      <Content html={html} />
    </Article>
  );
};

interface PageProps {
  page: any;
}

export default Page;
