import * as actions from "./actions";
import initialState from "./initialState";

export default (state = initialState(), action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.GET_NEWS:
      return {
        ...state,
        topNews: {
          ...state.topNews,
          inProgress: true,
        },
      };
    case actions.GET_NEWS_SUCCESS:
      return {
        ...state,
        topNews: {
          inProgress: false,
          data: payload,
        },
      };
    case actions.GET_NEWS_FAIL:
      return {
        ...state,
        topNews: {
          inProgress: false,
          error: payload,
        },
      };

    case actions.SEARCH_NEWS:
      return {
        ...state,
        searchResult: {
          ...state.searchResult,
          inProgress: true,
        },
      };
    case actions.SEARCH_NEWS_SUCCESS:
      return {
        ...state,
        searchResult: {
          inProgress: false,
          data: payload,
        },
      };
    case actions.SEARCH_NEWS_FAIL:
      return {
        ...state,
        searchResult: {
          inProgress: false,
          error: payload,
        },
      };

    case actions.GET_GENERAL_CATEGORY:
      return {
        ...state,
        category: {
          ...state.category,
          general: {
            ...state.category.general,
            inProgress: true,
          },
        },
      };
    case actions.GET_GENERAL_CATEGORY_SUCCESS:
      return {
        ...state,
        category: {
          general: {
            inProgress: false,
            data: payload,
          },
        },
      };
    case actions.GET_GENERAL_CATEGORY_FAIL:
      return {
        ...state,
        category: {
          general: {
            inProgress: false,
            error: payload,
          },
        },
      };
    default:
      return state;
  }
};
