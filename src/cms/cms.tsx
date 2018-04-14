import * as React from 'react';
import CMS from 'netlify-cms';
import 'netlify-cms/dist/cms.css';
import RecipePostPreview, {RecipePostPreviewProps} from './preview-templates/RecipePostPreview';
import {renderToString} from 'react-dom/server';
import {createGenerateClassName} from 'material-ui/styles';
import {default as injectSheet, SheetsRegistry} from 'react-jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {createStore} from '../state/store';
import {Provider} from 'react-redux';
import {theme} from '../styles/theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {ReactElement, ReactNode} from 'react';
import globals from '../styles/globals';
import jssPreset from 'material-ui/styles/jssPreset';
import {create, GenerateClassName, Rule, StyleSheet} from 'jss';

const registeredPreivewStylesMap: { [key: string]: boolean } = {};

interface Props {
    previewName: string;
    children: any;
}

const store = createStore();
// let insertionPointSet = false;

// function getInsertionPoint(): string {
//     if (insertionPointSet) {
//         return 'jss-insertion-point';
//     }
//     const elements: HTMLCollectionOf<Element> = document.getElementsByClassName('nc-previewPane-frame');
//     const iframe: HTMLIFrameElement = elements[0] as any;
//     const innerDoc: HTMLDocument = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
//     const styleNode = innerDoc.createComment("jss-insertion-point");
//     innerDoc.head.insertBefore(styleNode, innerDoc.head.firstChild);
//     insertionPointSet = true;
//     return 'jss-insertion-point';
// }

function getJss() {
    const jss = create({...jssPreset()});
    return jss;
}

const WrapPreviewTemplateWithRegisteredStyles: React.SFC<Props> = (props: Props) => {
    console.log('WrapPreviewTemplateWithRegisteredStyles', props);
    const sheetsRegistry = new SheetsRegistry();
    const generateClassName = (rule: Rule, sheet?: StyleSheet<any>) => `${props.previewName}-${createGenerateClassName()(rule, sheet)}`;
    const {children} = props;
    const childrenWithProps: any = React.Children.map(children, (child: ReactElement<any>) =>
        React.cloneElement(child, {...props}));
    if (!registeredPreivewStylesMap[props.previewName]) {

        const html = renderToString(
            <Provider store={store}>
                <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
                    <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
                        {...childrenWithProps}
                    </MuiThemeProvider>
                </JssProvider>
            </Provider>
        );
        const css = sheetsRegistry.toString();
        CMS.registerPreviewStyle(css, {raw: true});
        registeredPreivewStylesMap[props.previewName] = true;
        console.log('Registered css', css);
    }
    return <Provider store={store}>
        <JssProvider jss={getJss()} registry={sheetsRegistry} generateClassName={generateClassName}>
            <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
                {...childrenWithProps}
            </MuiThemeProvider>
        </JssProvider>
    </Provider>;
}

CMS.registerPreviewTemplate('recipe', (props: RecipePostPreviewProps) => {
    console.log('registerPreviewTemplate', props);
    // CMS.registerPreviewStyle(css, { raw: true })
    return <WrapPreviewTemplateWithRegisteredStyles previewName={'recipe'}>
        <RecipePostPreview {...props}></RecipePostPreview>
    </WrapPreviewTemplateWithRegisteredStyles>;
});
CMS.registerEditorComponent({
    // Internal id of the component
    id: "youtube",
    name: "youtube",
    // Visible label
    label: "Youtube",
    // Fields the user need to fill out when adding an instance of the component
    fields: [{name: 'id', label: 'Youtube Video ID', widget: 'string'}],
    // Pattern to identify a block as being an instance of this component
    pattern: /^youtube (\S+)$/,
    // Function to extract data elements from the regexp match
    fromBlock: (match: any) => {
        return {
            id: match[1]
        };
    },
    // Function to create a text block from an instance of this component
    toBlock: (obj: any) => {
        return 'youtube ' + obj.id;
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: (obj: any) => {
        return (
            '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
        );
    }
});
