import * as React from 'react';

import Article from '../Main/Article';
import RecipeHeader from './RecipeHeader';
import Content from '../Main/Content';
import RecipeFooter from './RecipeFooter';
import {RecipeData} from './types';

const Recipe: React.SFC<RecipeProps> = (props: RecipeProps) => {
  const { recipe } = props;
  console.log('Recipe: props', props);
  return (
    <Article>
      <RecipeHeader title={recipe.title} subTitle={recipe.subTitle} date={recipe.date} />
        <Content>{recipe.html}</Content>
      {/*<RecipeFooter author={author} post={post} slug={slug} facebook={facebook} />*/}
    </Article>
  );
};

interface RecipeProps {
  recipe: RecipeData;
}

export default Recipe;
