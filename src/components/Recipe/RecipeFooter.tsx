import * as React from "react";
import injectSheet from "react-jss";

require("core-js/fn/array/find");

import {asyncComponent} from "../common/AsyncComponent/";
import RecipeComments from "./RecipeComments";
import {Theme, WithStyles} from 'material-ui';
import RecipeShare from './RecipeShare';
import {FacebookConfig} from '../../types/facebook';
import {RecipeData} from './types';

const styles = (theme: Theme) => ({
    footer: {
        color: theme.main.colors.footer,
        fontSize: `${theme.main.fonts.footer.size}em`,
        lineHeight: theme.main.fonts.footer.lineHeight,
        "& p": {
            margin: 0
        }
    }
});

const AsyncRecipeShare = asyncComponent<RecipeShare>(() =>
    import("./RecipeShare")
        .then(module => {
            return module;
        })
        .catch(error => {
            // do nothing
        })
);

const PostFooter: React.SFC<RecipeFooterProps> = ({classes, author, recipe, slug, facebook}: RecipeFooterProps) => {
    return (
        <footer className={classes.footer}>
            <AsyncRecipeShare recipe={recipe} slug={slug}/>
            <RecipeComments recipe={post} slug={slug} facebook={facebook}/>
        </footer>
    );
};

interface Props {
    author: any;
    recipe: RecipeData;
    slug: string;
    facebook: FacebookConfig;
}

type RecipeFooterProps = Props & WithStyles<'footer'>;

export default injectSheet(styles)(PostFooter);
