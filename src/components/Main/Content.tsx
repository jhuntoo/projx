import * as React from "react";
import injectSheet from "react-jss";
import {connect} from "react-redux";

import {setFontSizeIncrease, State} from "../../state/store";
import {Theme, WithStyles} from 'material-ui';

const styles = (theme: Theme) => ({
    content: {
        color: theme.main.colors.content,
        fontSize: (props: ContentProps) => `calc(${theme.main.fonts.content.size}em * ${props.fontSizeIncrease})`,
        lineHeight: theme.main.fonts.content.lineHeight,
        "& a": {
            borderBottom: `1px solid ${theme.base.colors.link}`,
            color: theme.base.colors.link
        },
        "& .gatsby-highlight": {
            margin: "2em 0"
        },
        "& .gatsby-resp-iframe-wrapper": {
            margin: "2em 0"
        },
        "& code.language-text": {
            background: "#f3f3f3",
            textShadow: "none",
            color: "#333",
            padding: ".1em .3em .2em",
            borderRadius: ".1em"
        },
        "& .gatsby-resp-image-link": {
            margin: "2em -1.5rem",
            border: "none",
            [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
                margin: "2.5em -3.5rem"
            }
        },
        "& h2, & h3": {
            color: theme.main.colors.contentHeading,
            fontSize: `${theme.main.fonts.contentHeading.h2Size}em`,
            fontWeight: theme.main.fonts.contentHeading.weight,
            lineHeight: theme.main.fonts.contentHeading.lineHeight,
            margin: "2em 0 1em",
            letterSpacing: "-0.02em"
        },
        "& h3": {
            fontSize: `${theme.main.fonts.contentHeading.h3Size}em`
        },
        "& p": {
            margin: "0 0 1.5em 0",
            fontWeight: 400
        },
        "& ul": {
            listStyle: "circle",
            padding: "0 0 0 1.3em",
            [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
                padding: "0 0 0 2em"
            }
        },
        "& li": {
            margin: "0 0 .5em 0"
        },
        "& blockquote": {
            border: `5px solid ${theme.main.colors.blockquoteFrame}`,
            fontStyle: "italic",
            margin: "2.5em 0",
            padding: "1em 1.1em 1em 1.3em",
            position: "relative",
            "& p": {
                margin: 0
            },
            "&::before, &::after": {
                background: theme.main.colors.background,
                content: `""`,
                height: "5px",
                left: "50%",
                marginLeft: "-47%",
                position: "absolute",
                top: "-5px",
                width: "94%"
            },
            "&::after": {
                top: "auto",
                bottom: "-5px"
            }
        },
        [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
            fontSize: `${theme.main.fonts.content.sizeM}em`
        },
        [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
            fontSize: `${theme.main.fonts.content.sizeL}em`
        }
    }
});

const Content = (props: ContentProps) => {
    const {classes, html, children} = props;

    if (html) {
        return <div className={classes.content} dangerouslySetInnerHTML={{__html: html}}/>;
    } else {
        return <div className={classes.content}>{children}</div>;
    }
};

interface Props {
    html?: string;
    children?: any[];
    setFontSizeIncrease?: (n: number) => any;
    fontSizeIncrease?: number;
}

type ContentProps = Props & WithStyles<'content'>;

const mapStateToProps = (state: State, ownProps: ContentProps): Partial<ContentProps> => {
    return {
        fontSizeIncrease: state.fontSizeIncrease
    };
};

const mapDispatchToProps = {
    setFontSizeIncrease
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Content));
