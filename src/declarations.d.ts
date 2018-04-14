

declare const graphql: (query: TemplateStringsArray) => void;
declare const FB: any;
declare module "react-share";
declare module "react-facebook";
declare module "netlify-cms";
declare module "react-jss" {
    import {
        ComponentClass,
        StatelessComponent,
        CSSProperties,
        Component,
    } from "react";

    export type Styles = { [key: string]: CSSProperties };
    export type Theme = Styles & {};
    export type StylesCallback = (theme?: Theme) => Styles;
    export type ReactType<T = {}> = ComponentClass<T> | StatelessComponent<T>;
    export type Classes = { [key: string]: string };
    export type StyledProps = { classes?: Classes };

    const injectSheet: (
        styles: Styles | StylesCallback,
    ) => <T extends StyledProps = StyledProps>(
        C: ReactType<T>,
    ) => ComponentClass<T>;

    export default injectSheet;

    import {ThemeProvider, withTheme, createTheming} from "theming";
    import jss, {SheetsRegistry} from "jss";

    class JssProvider extends Component<{
        jss?: {
            options?: {
                createGenerateClassName: Function;
            };
            createStyleSheet: Function;
            removeStyleSheet: Function;
            registry: SheetsRegistry;
        };
        generateClassName?: Function;
        classNamePrefix?: string;
        registry?: SheetsRegistry;
    }> {
    }

    const createGenerateClassName: Function;
    export {
        ThemeProvider,
        withTheme,
        createTheming,
        JssProvider,
        jss,
        SheetsRegistry,
        createGenerateClassName,
    };
}

declare module '*.jpg';
declare module '*.svg';

declare module 'rebound' {
    interface Spring {
        destroy(): void;

        addListener(obj: any): void;

        getCurrentValue(): any;

        setCurrentValue(obj: any): Spring;

        setAtRest(): void;

        setEndValue(obj: any): void;
    }

    class SpringSystem {
        createSpring(): Spring;

        deregisterSpring(s: Spring): void;

        removeAllListeners(): void;
    }

    class MathUtil {
        static mapValueInRange(...num: number[]): number;
    }
}

declare  interface FacebookConfig {
    appId: string;
}

declare interface SiteMetadata {
    readonly title: string;
    readonly author?: string;
    readonly siteUrl: string;
    readonly description: string;
    readonly pathPrefix: string;
    readonly algolia: {
        readonly appId: string;
        readonly searchOnlyApiKey: string;
        readonly indexName: string;
    };
    readonly facebook: FacebookConfig;
}

declare interface Site {
    readonly siteMetadata: SiteMetadata;
}

declare interface MarkdownRemark {
    readonly id: string;
    readonly excerpt: string;
    readonly html: string;
    readonly fields: {
        slug: string;
        prefix: string;
    };
    readonly frontmatter: {
        readonly date: string
        readonly draft: boolean
        readonly path: string
        readonly tags: ReadonlyArray<string>
        readonly title: string
        readonly menuTitle: string
        readonly category: string
        readonly cover: {
            children: Array<{
                resolutions: {
                    width: string;
                    height: string;
                    src: string;
                    srcSet: string;
                    srcSetWebp: string;
                }
            }>
        };
    };
}

declare interface MarkdownRemarkEdge {
    readonly node: MarkdownRemark;
}

declare type MarkdownRemarkEdges = ReadonlyArray<MarkdownRemarkEdge>;

declare interface AllMarkdownRemark {
    readonly totalCount: number;
    readonly edges: MarkdownRemarkEdges;
}
