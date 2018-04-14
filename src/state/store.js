"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_devtools_extension_1 = require("redux-devtools-extension");
/*
 * action types
 */
const SET_NAVIGATOR_POSITION = 'SET_NAVIGATOR_POSITION';
const SET_NAVIGATOR_SHAPE = 'SET_NAVIGATOR_SHAPE';
const SET_NAVIGATOR_FILTER = 'SET_NAVIGATOR_FILTER';
const SET_IS_WIDE_SCREEN = 'SET_IS_WIDE_SCREEN';
const SET_SCROLL_TO_TOP = 'SET_SCROLL_TO_TOP';
const SET_FONT_SIZE_INCREASE = 'SET_FONT_SIZE_INCREASE';
const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
exports.setNavigatorPosition = (val) => {
    return { type: SET_NAVIGATOR_POSITION, val };
};
function setNavigatorShape(val) {
    return { type: SET_NAVIGATOR_SHAPE, val };
}
exports.setNavigatorShape = setNavigatorShape;
// export type NavigatorFilter = '';
// export function setNavigatorFilter(val: NavigatorFilter) {
//   return { type: SET_NAVIGATOR_FILTER, val };
// }
function setIsWideScreen(val) {
    return { type: SET_IS_WIDE_SCREEN, val };
}
exports.setIsWideScreen = setIsWideScreen;
function setScrollToTop(val) {
    return { type: SET_SCROLL_TO_TOP, val };
}
exports.setScrollToTop = setScrollToTop;
function setFontSizeIncrease(val) {
    return { type: SET_FONT_SIZE_INCREASE, val };
}
exports.setFontSizeIncrease = setFontSizeIncrease;
function setCategoryFilter(val) {
    return { type: SET_CATEGORY_FILTER, val };
}
exports.setCategoryFilter = setCategoryFilter;
/*
 * reducer
 */
const reducer = (state, action) => {
    switch (action.type) {
        case SET_NAVIGATOR_POSITION:
            return {
                ...state,
                navigatorPosition: action.val,
            };
        case SET_NAVIGATOR_SHAPE:
            return {
                ...state,
                navigatorShape: action.val,
            };
        case SET_NAVIGATOR_FILTER:
            return {
                ...state,
                navigatorFilter: action.val,
            };
        case SET_IS_WIDE_SCREEN:
            return {
                ...state,
                isWideScreen: action.val,
            };
        case SET_SCROLL_TO_TOP:
            return {
                ...state,
                scrollToTop: action.val,
            };
        case SET_FONT_SIZE_INCREASE:
            return {
                ...state,
                fontSizeIncrease: action.val,
            };
        case SET_CATEGORY_FILTER:
            return {
                ...state,
                categoryFilter: action.val,
            };
        default:
            return state;
    }
};
const initialState = {
    navigatorPosition: 'is-aside',
    navigatorShape: 'open',
    navigatorFilter: '',
    isWideScreen: false,
    scrollToTop: false,
    fontSizeIncrease: 1,
    categoryFilter: 'all posts',
};
exports.createStore = () => redux_1.createStore(reducer, initialState, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware()));
