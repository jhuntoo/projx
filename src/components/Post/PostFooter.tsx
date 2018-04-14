import * as React from "react";
import injectSheet from "react-jss";

require("core-js/fn/array/find");

import {asyncComponent} from "../common/AsyncComponent/";
import PostAuthor from "./PostAuthor";
import PostComments from "./PostComments";
import {Theme} from 'material-ui';
import PostShare from './PostShare';
import {FacebookConfig} from '../../types/facebook';

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

const AsyncPostShare = asyncComponent<PostShare>(() =>
    import("./PostShare")
        .then(module => {
            return module;
        })
        .catch(error => {
            // do nothing
        })
);

const PostFooter = ({classes, author, post, slug, facebook}: PostFooterProps) => {
    return (
        <footer className={classes.footer}>
            <AsyncPostShare post={post} slug={slug}/>
            <PostAuthor author={author}/>
            <PostComments post={post} slug={slug} facebook={facebook}/>
        </footer>
    );
};

interface PostFooterProps {
    classes: any;
    author: any;
    post: any;
    slug: string;
    facebook: FacebookConfig;
}

export default injectSheet(styles)(PostFooter);
