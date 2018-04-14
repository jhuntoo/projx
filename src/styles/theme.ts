import {createMuiTheme} from 'material-ui/styles';
import * as React from 'react';
import * as Color from 'color';
import {Direction, Theme} from 'material-ui/styles/createMuiTheme';
import {PaletteType} from 'material-ui';
import {CommonColors} from 'material-ui/colors/common';
import {default as createPalette, PaletteColorOptions, PaletteOptions} from 'material-ui/styles/createPalette';
import {Colors} from './colors';



declare module 'material-ui/styles/createMuiTheme' {
    interface Theme {
        base: {
            colors: {
                background: React.CSSProperties['color']
                text: React.CSSProperties['color']
                link: React.CSSProperties['color']
                linkHover: React.CSSProperties['color']
                accent: React.CSSProperties['color']
                lines: React.CSSProperties['color']
            }
            sizes: {
                linesMargin: React.CSSProperties['margin']
            }
            fonts: {
                unstyledFamily: React.CSSProperties['fontFamily']
                styledFamily: React.CSSProperties['fontFamily']
                styledFonts: React.CSSProperties['fontFamily']
            }
        };
        info: {
            colors: {
                text: React.CSSProperties['color']
                background: React.CSSProperties['color']
                socialIcons: React.CSSProperties['color']
                socialIconsHover: React.CSSProperties['color']
                menuLink: React.CSSProperties['color']
                menuLinkHover: React.CSSProperties['color']
            }
            sizes: {
                width: number
                height: number;
                headerHeight: number
            }
            fonts: {
                boxTitleSize: React.CSSProperties['fontSize']
                boxTitleSizeM: React.CSSProperties['fontSize']
                boxTitleSizeL: React.CSSProperties['fontSize']
            }
        };
        navigator: {
            colors: {
                background: React.CSSProperties['color']
                postsListItemLink: React.CSSProperties['color']
                postsListItemLinkHover: React.CSSProperties['color']
                postsHeader: React.CSSProperties['color']
            }
            sizes: {
                closedHeight: number
                postsListItemH1Font: number
                postsListItemH2Font: number
                fontIncraseForM: number
                fontIncraseForL: number
            }
        };
        main: {
            colors: {
                background: React.CSSProperties['color']
                title: React.CSSProperties['color']
                subTitle: React.CSSProperties['color']
                meta: React.CSSProperties['color']
                content: React.CSSProperties['color']
                footer: React.CSSProperties['color']
                contentHeading: React.CSSProperties['color']
                blockquoteFrame: React.CSSProperties['color']
                link: React.CSSProperties['color']
                linkHover: React.CSSProperties['color']
                fbCommentsColorscheme: string;
            }
            sizes: {
                articleMaxWidth: React.CSSProperties['maxWidth']
                maxWidth: React.CSSProperties['maxWidth']
            }
            fonts: {
                title: {
                    size: React.CSSProperties['fontSize']
                    sizeM: React.CSSProperties['fontSize']
                    sizeL: React.CSSProperties['fontSize']
                    weight: React.CSSProperties['fontWeight']
                    lineHeight: React.CSSProperties['lineHeight']
                }
                subTitle: {
                    size: React.CSSProperties['fontSize']
                    sizeM: React.CSSProperties['fontSize']
                    sizeL: React.CSSProperties['fontSize']
                    weight: React.CSSProperties['fontWeight']
                    lineHeight: React.CSSProperties['lineHeight']
                }
                meta: {
                    size: React.CSSProperties['fontSize']
                    weight: React.CSSProperties['fontWeight']
                }
                content: {
                    size: React.CSSProperties['fontSize']
                    sizeM: React.CSSProperties['fontSize']
                    sizeL: React.CSSProperties['fontSize']
                    lineHeight: React.CSSProperties['lineHeight']
                }
                contentHeading: {
                    h2Size: React.CSSProperties['fontSize']
                    h3Size: React.CSSProperties['fontSize']
                    weight: React.CSSProperties['fontWeight']
                    lineHeight: React.CSSProperties['lineHeight']
                }
                footer: {
                    size: React.CSSProperties['fontSize']
                    lineHeight: React.CSSProperties['lineHeight']
                }
            }
        };
        footer: {
            colors: {
                text: React.CSSProperties['color']
                link: React.CSSProperties['color']
                linkHover: React.CSSProperties['color']
            }
            fonts: {
                footnote: {
                    size: React.CSSProperties['fontSize']
                    lineHeight: React.CSSProperties['lineHeight']
                }
            }
        };
        bars: {
            colors: {
                background: React.CSSProperties['color']
                icon: React.CSSProperties['color']
                text: React.CSSProperties['color']
            }
            sizes: {
                actionsBar: number
                infoBar: number
            }
        };
        mediaQueryTresholds: {
            M: number
            L: number
        };
    }

    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        base?: {
            colors: {
                background: React.CSSProperties['color']
                text: React.CSSProperties['color']
                link: React.CSSProperties['color']
                linkHover: React.CSSProperties['color']
                accent: React.CSSProperties['color']
                lines: React.CSSProperties['color']
            }
            sizes: {
                linesMargin: React.CSSProperties['margin']
            }
            fonts: {
                unstyledFamily: React.CSSProperties['fontFamily']
                styledFamily: React.CSSProperties['fontFamily']
                styledFonts: React.CSSProperties['fontFamily']
            }
        };
        info?: {
            colors: {
                text: React.CSSProperties['color']
                background: React.CSSProperties['color']
                socialIcons: React.CSSProperties['color']
                socialIconsHover: React.CSSProperties['color']
                menuLink: React.CSSProperties['color']
                menuLinkHover: React.CSSProperties['color']
            }
            sizes: {
                width: number
                height: number;
                headerHeight: number
            }
            fonts: {
                boxTitleSize: React.CSSProperties['fontSize']
                boxTitleSizeM: React.CSSProperties['fontSize']
                boxTitleSizeL: React.CSSProperties['fontSize']
            }
        };
        navigator?: {
            colors: {
                background: React.CSSProperties['color']
                postsListItemLink: React.CSSProperties['color']
                postsListItemLinkHover: React.CSSProperties['color']
                postsHeader: React.CSSProperties['color']
            }
            sizes: {
                closedHeight: number
                postsListItemH1Font: number
                postsListItemH2Font: number
                fontIncraseForM: number
                fontIncraseForL: number
            }
        };
        main?: {
            colors: {
                background: React.CSSProperties['color']
                title: React.CSSProperties['color']
                subTitle: React.CSSProperties['color']
                meta: React.CSSProperties['color']
                content: React.CSSProperties['color']
                footer: React.CSSProperties['color']
                contentHeading: React.CSSProperties['color']
                blockquoteFrame: React.CSSProperties['color']
                link: React.CSSProperties['color']
                linkHover: React.CSSProperties['color']
                fbCommentsColorscheme: string;
            }
            sizes: {
                articleMaxWidth: React.CSSProperties['maxWidth']
                maxWidth: React.CSSProperties['maxWidth']
            }
            fonts: {
                title: {
                    size: React.CSSProperties['fontSize']
                    sizeM: React.CSSProperties['fontSize']
                    sizeL: React.CSSProperties['fontSize']
                    weight: React.CSSProperties['fontWeight']
                    lineHeight: React.CSSProperties['lineHeight']
                }
                subTitle: {
                    size: React.CSSProperties['fontSize']
                    sizeM: React.CSSProperties['fontSize']
                    sizeL: React.CSSProperties['fontSize']
                    weight: React.CSSProperties['fontWeight']
                    lineHeight: React.CSSProperties['lineHeight']
                }
                meta: {
                    size: React.CSSProperties['fontSize']
                    weight: React.CSSProperties['fontWeight']
                }
                content: {
                    size: React.CSSProperties['fontSize']
                    sizeM: React.CSSProperties['fontSize']
                    sizeL: React.CSSProperties['fontSize']
                    lineHeight: React.CSSProperties['lineHeight']
                }
                contentHeading: {
                    h2Size: React.CSSProperties['fontSize']
                    h3Size: React.CSSProperties['fontSize']
                    weight: React.CSSProperties['fontWeight']
                    lineHeight: React.CSSProperties['lineHeight']
                }
                footer: {
                    size: React.CSSProperties['fontSize']
                    lineHeight: React.CSSProperties['lineHeight']
                }
            }
        };
        footer?: {
            colors: {
                text: React.CSSProperties['color']
                link: React.CSSProperties['color']
                linkHover: React.CSSProperties['color']
            }
            fonts: {
                footnote: {
                    size: React.CSSProperties['fontSize']
                    lineHeight: React.CSSProperties['lineHeight']
                }
            }
        };
        bars?: {
            colors?: {
                background: React.CSSProperties['color']
                icon: React.CSSProperties['color']
                text: React.CSSProperties['color']
            }
            sizes?: {
                actionsBar: number
                infoBar: number
            }
        };
        mediaQueryTresholds?: {
            M: number
            L: number
        };
    }
}

export const theme: Theme = createMuiTheme({
    base: {
        colors: {
            background: Colors.background,
            text: Colors.dark,
            link: Colors.accent,
            linkHover: Color(Colors.accent)
                .lighten(0.1)
                .string(),
            accent: Colors.accent,
            lines: Colors.superLightGray,
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
            text: Colors.gray,
            background: Colors.background,
            socialIcons: Colors.lightGray,
            socialIconsHover: Colors.accent,
            menuLink: Colors.gray,
            menuLinkHover: Colors.accent,
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
            background: Colors.background,
            postsListItemLink: Colors.gray,
            postsListItemLinkHover: Colors.accent,
            postsHeader: Colors.gray,
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
            background: Colors.background,
            title: Colors.gray,
            subTitle: Colors.gray,
            meta: Colors.gray,
            content: Colors.dark,
            footer: Colors.gray,
            contentHeading: Colors.gray,
            blockquoteFrame: Colors.lightGray,
            link: Colors.accent,
            linkHover: Colors.dark,
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
            text: Color(Colors.gray)
                .lighten(0.5)
                .string(),
            link: Colors.accent,
            linkHover: Color(Colors.accent)
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
            background: Colors.background,
            icon: Colors.gray,
            text: Colors.gray
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
            main: Colors.accent,
        },
        action: {
            hover: 'rgba(0, 0, 0, 0.01)',
        },
    } as PaletteOptions,
    direction: 'ltr'
});
