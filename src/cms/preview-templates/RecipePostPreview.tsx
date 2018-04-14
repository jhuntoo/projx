import * as React from 'react';
import {RecipePostTemplate} from '../../templates/RecipePostTemplate';
import {RecipeData} from '../../components/Recipe/types';
import {
    createStore,
    setFontSizeIncrease,
    setIsWideScreen,
    setNavigatorPosition,
    SetNavigatorPositionFunction
} from '../../state/store';
import {theme} from '../../styles/theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectSheet from "react-jss";
import {connect, Provider} from 'react-redux';
import globals from '../../styles/globals';

export interface RecipePostPreviewProps {
    entry: {
        getIn: (vals: string[]) => any,
    };
    widgetFor: (x: string) => any;
}

const RecipePostPreview: React.SFC<RecipePostPreviewProps> = ({entry, widgetFor}) => {
    const recipeData: RecipeData = {
        html: widgetFor('body'),
        title: entry.getIn(['data', 'title']),
        subTitle: entry.getIn(['data', 'subTitle']),
        slug: entry.getIn(['data', 'slug']),
        date: entry.getIn(['data', 'date']),
    };
    return <div>
        <div>Preview</div>
        <RecipePostTemplate recipe={recipeData}
                            footnoteHtml={"Fake footer"}
                            navigatorPosition={'is-featured'}
                            isWideScreen={false}
                            setNavigatorPosition={setNavigatorPosition}
        />
    </div>;
};

export default injectSheet(globals)(RecipePostPreview);
