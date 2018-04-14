import { createStore as reduxCreateStore, applyMiddleware, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/*
 * action types
 */

const SET_NAVIGATOR_POSITION: ActionType  = 'SET_NAVIGATOR_POSITION';
const SET_NAVIGATOR_SHAPE: ActionType = 'SET_NAVIGATOR_SHAPE';
const SET_NAVIGATOR_FILTER: ActionType = 'SET_NAVIGATOR_FILTER';
const SET_IS_WIDE_SCREEN: ActionType = 'SET_IS_WIDE_SCREEN';
const SET_SCROLL_TO_TOP: ActionType = 'SET_SCROLL_TO_TOP';
const SET_FONT_SIZE_INCREASE: ActionType = 'SET_FONT_SIZE_INCREASE';
const SET_CATEGORY_FILTER: ActionType = 'SET_CATEGORY_FILTER';
export type ActionType = 'SET_NAVIGATOR_POSITION' |
    'SET_NAVIGATOR_SHAPE' |
    'SET_NAVIGATOR_FILTER' |
    'SET_IS_WIDE_SCREEN' |
    'SET_SCROLL_TO_TOP' |
    'SET_FONT_SIZE_INCREASE' |
    'SET_CATEGORY_FILTER';
/*
 * action creators
 */
export type NavigatorPosition = 'is-featured' | 'moving-featured' | 'resizing-featured' | 'is-aside' | 'moving-aside';

export type SetNavigatorPositionFunction = (p: NavigatorPosition) => { type: ActionType, val: NavigatorPosition};
export const setNavigatorPosition: SetNavigatorPositionFunction = (val: NavigatorPosition) => {
  return { type: SET_NAVIGATOR_POSITION, val };
}

export type NavigatorShape = 'open' | 'closed';
export function setNavigatorShape(val: NavigatorShape) {
  return { type: SET_NAVIGATOR_SHAPE, val };
}

// export type NavigatorFilter = '';
// export function setNavigatorFilter(val: NavigatorFilter) {
//   return { type: SET_NAVIGATOR_FILTER, val };
// }

export function setIsWideScreen(val: boolean) {
  return { type: SET_IS_WIDE_SCREEN, val };
}

export function setScrollToTop(val: boolean) {
  return { type: SET_SCROLL_TO_TOP, val };
}

export function setFontSizeIncrease(val: number) {
  return { type: SET_FONT_SIZE_INCREASE, val };
}

export function setCategoryFilter(val: string) {
  return { type: SET_CATEGORY_FILTER, val };
}

/*
 * reducer
 */
const reducer = (state: State, action: any) => {
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

export interface State {
    navigatorPosition: NavigatorPosition;
    navigatorShape: NavigatorShape;
    navigatorFilter: string;
    isWideScreen: boolean;
    scrollToTop: boolean;
    fontSizeIncrease: number;
    categoryFilter: string;
}

const initialState: State = {
  navigatorPosition: 'is-aside',
  navigatorShape: 'open',
  navigatorFilter: '',
  isWideScreen: false,
  scrollToTop: false,
  fontSizeIncrease: 1,
  categoryFilter: 'all posts',
};

export const createStore = () =>
  reduxCreateStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
