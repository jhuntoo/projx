"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("material-ui/styles");
const Color = require("color");
const colors_1 = require("./colors");
exports.theme = styles_1.createMuiTheme({
    base: {
        colors: {
            background: colors_1.Colors.background,
            text: colors_1.Colors.dark,
            link: colors_1.Colors.accent,
            linkHover: Color(colors_1.Colors.accent)
                .lighten(0.1)
                .string(),
            accent: colors_1.Colors.accent,
            lines: colors_1.Colors.superLightGray,
        },
        sizes: {
            linesMargin: '20px',
        },
        fonts: {
            unstyledFamily: `Arial`,
            styledFamily: 'Open Sans',
            styledFonts: '300,400,600',
        },
    },
    info: {
        colors: {
            text: colors_1.Colors.gray,
            background: colors_1.Colors.background,
            socialIcons: colors_1.Colors.lightGray,
            socialIconsHover: colors_1.Colors.accent,
            menuLink: colors_1.Colors.gray,
            menuLinkHover: colors_1.Colors.accent,
        },
        sizes: {
            width: 320,
            height: null,
            headerHeight: 170,
        },
        fonts: {
            boxTitleSize: 1.3,
            boxTitleSizeM: 1.5,
            boxTitleSizeL: 1.7,
        },
    },
    navigator: {
        colors: {
            background: colors_1.Colors.background,
            postsListItemLink: colors_1.Colors.gray,
            postsListItemLinkHover: colors_1.Colors.accent,
            postsHeader: colors_1.Colors.gray,
        },
        sizes: {
            closedHeight: 80,
            postsListItemH1Font: 1.3,
            postsListItemH2Font: 1.1,
            fontIncraseForM: 1.15,
            fontIncraseForL: 1.3,
        },
    },
    main: {
        colors: {
            background: colors_1.Colors.background,
            title: colors_1.Colors.gray,
            subTitle: colors_1.Colors.gray,
            meta: colors_1.Colors.gray,
            content: colors_1.Colors.dark,
            footer: colors_1.Colors.gray,
            contentHeading: colors_1.Colors.gray,
            blockquoteFrame: colors_1.Colors.lightGray,
            link: colors_1.Colors.accent,
            linkHover: colors_1.Colors.dark,
            fbCommentsColorscheme: "light"
        },
        sizes: {
            articleMaxWidth: '50em',
            maxWidth: '50em'
        },
        fonts: {
            title: {
                size: 1.9,
                sizeM: 2.5,
                sizeL: 2.7,
                weight: 600,
                lineHeight: 1.1,
            },
            subTitle: {
                size: 1.5,
                sizeM: 1.8,
                sizeL: 1.95,
                weight: 300,
                lineHeight: 1.1,
            },
            meta: {
                size: 0.9,
                weight: 600,
            },
            content: {
                size: 1.0,
                sizeM: 1.15,
                sizeL: 1.1,
                lineHeight: 1.6,
            },
            contentHeading: {
                h2Size: 1.5,
                h3Size: 1.3,
                weight: 600,
                lineHeight: 1.3,
            },
            footer: {
                size: 1,
                lineHeight: 1.4,
            },
        },
    },
    footer: {
        colors: {
            text: Color(colors_1.Colors.gray)
                .lighten(0.5)
                .string(),
            link: colors_1.Colors.accent,
            linkHover: Color(colors_1.Colors.accent)
                .lighten(0.2)
                .string(),
        },
        fonts: {
            footnote: {
                size: 0.8,
                lineHeight: 1.4,
            },
        },
    },
    bars: {
        colors: {
            background: colors_1.Colors.background,
            icon: colors_1.Colors.gray,
            text: colors_1.Colors.gray
        },
        sizes: {
            actionsBar: 60,
            infoBar: 60,
        },
    },
    mediaQueryTresholds: {
        M: 600,
        L: 1024,
    },
    typography: {
        fontFamily: `Arial, sans-serif`,
        fontSize: 16,
    },
    palette: {
        primary: {
            main: colors_1.Colors.accent,
        },
        action: {
            hover: 'rgba(0, 0, 0, 0.01)',
        },
    },
    direction: 'ltr'
});
