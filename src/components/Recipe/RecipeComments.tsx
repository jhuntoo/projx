import * as React from "react";
import injectSheet from "react-jss";
import {Config} from '../../../content/meta/config';
import {Theme, WithStyles} from 'material-ui';
import FacebookProvider, { Comments } from "react-facebook";
import {FacebookConfig} from '../../types/facebook';
import {RecipeData} from './types';

require("core-js/fn/array/find");

const styles = (theme: Theme) => ({
    postComments: {
        margin: "3em 0 0",
        padding: "3em 0 0",
        borderTop: "1px solid #ddd"
    }
});
class RecipeComments extends React.Component<RecipeCommentsProps> {

    render() {
        const {classes, facebook, slug} = this.props;

        return (
            <div id="post-comments" className={classes.postComments}>
                <FacebookProvider appId={facebook.appId}>
                    <Comments
                        href={`${Config.siteUrl}${slug}`}
                        width="100%"
                        colorscheme={this.props.theme.main.colors.fbCommentsColorscheme}
                    />
                </FacebookProvider>
            </div>
        );
    }
}

type RecipeCommentsProps = Props & WithStyles<'postComments'>;

interface Props {
    slug: string;
    recipe: RecipeData;
    theme: any;
    facebook: FacebookConfig;
}

export default injectSheet(styles)<Props>(RecipeComments);
