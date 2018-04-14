import * as React from 'react';
import injectSheet from 'react-jss';
import {CircularProgress} from 'material-ui/Progress';
import {Theme} from 'material-ui';

const styles = (theme: Theme) => ({
    loading: {
        display: 'flex',
        background: (props: LoadingPropTypes) =>
            props.overrides && props.overrides.background
                ? props.overrides.background
                : theme.base.colors.background,
        position: 'absolute',
        left: (props: LoadingPropTypes) =>
            props.overrides && props.overrides.left ? props.overrides.left : 0,
        right: (props: LoadingPropTypes) =>
            props.overrides && props.overrides.right ? props.overrides.right : 0,
        top: '0',
        width: (props: LoadingPropTypes) =>
            props.overrides && props.overrides.width ? props.overrides.width : '100%',
        height: (props: LoadingPropTypes) =>
            props.overrides && props.overrides.height
                ? props.overrides.height
                : '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '&::after': {
            content: (props: LoadingPropTypes)  => (props.afterLeft || props.afterRight ? `""` : ``),
            position: 'absolute',
            right: (props: LoadingPropTypes)  => (props.afterRight ? 0 : ''),
            left: (props: LoadingPropTypes)  => (props.afterLeft ? 0 : ''),
            top: theme.base.sizes.linesMargin,
            bottom: theme.base.sizes.linesMargin,
            width: 0,
            borderRight: `1px solid ${theme.base.colors.lines}`,
        },
    },
    progress: {},
});

const Loading = (props: LoadingPropTypes) => {
    const {classes, progressSize} = props;

    return (
        <div className={classes.loading}>
            <CircularProgress
                className={classes.progress}
                size={progressSize ? progressSize : 30}
            />
        </div>
    );
};

interface LoadingPropTypes {
    classes: any;
    progressSize: number;
    afterLeft?: boolean;
    afterRight?: boolean;
    overrides: {
        background: React.CSSProperties['color'],
        width: React.CSSProperties['width'],
        height: React.CSSProperties['height'],
        right: string,
        left: string
    };
}

export default injectSheet(styles)(Loading);
