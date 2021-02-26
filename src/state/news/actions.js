import { createAction } from "redux-actions";

export const GET_NEWS = "GET_NEWS";
export const getNews = createAction(GET_NEWS);

export const GET_NEWS_SUCCESS = `${GET_NEWS}_SUCCESS`;
export const getNewsSuccess = createAction(GET_NEWS_SUCCESS);

export const GET_NEWS_FAIL = `${GET_NEWS}_FAIL`;
export const getNewsFail = createAction(GET_NEWS_FAIL);

export const SEARCH_NEWS = "SEARCH_NEWS";
export const searchNews = createAction(SEARCH_NEWS);

export const SEARCH_NEWS_SUCCESS = `${SEARCH_NEWS}_SUCCESS`;
export const searchNewsSuccess = createAction(SEARCH_NEWS_SUCCESS);

export const SEARCH_NEWS_FAIL = `${SEARCH_NEWS}_FAIL`;
export const searchNewsFail = createAction(SEARCH_NEWS_FAIL);

export const GET_GENERAL_CATEGORY = "GET_GENERAL_CATEGORY";
export const getGeneralCategory = createAction(GET_GENERAL_CATEGORY);

export const GET_GENERAL_CATEGORY_SUCCESS = `${GET_GENERAL_CATEGORY}_SUCCESS`;
export const getGeneralCategorySuccess = createAction(
  GET_GENERAL_CATEGORY_SUCCESS
);

export const GET_GENERAL_CATEGORY_FAIL = `${GET_GENERAL_CATEGORY}_FAIL`;
export const getGeneralCategoryFail = createAction(GET_GENERAL_CATEGORY_FAIL);

export const GET_HEALTH_CATEGORY = "GET_HEALTH_CATEGORY";
export const getHealthCategory = createAction(GET_HEALTH_CATEGORY);

export const GET_HEALTH_CATEGORY_SUCCESS = `${GET_HEALTH_CATEGORY}_SUCCESS`;
export const getHealthCategorySuccess = createAction(
  GET_HEALTH_CATEGORY_SUCCESS
);

export const GET_HEALTH_CATEGORY_FAIL = `${GET_HEALTH_CATEGORY}_FAIL`;
export const getHealthCategoryFail = createAction(GET_HEALTH_CATEGORY_FAIL);

export const GET_SCIENCE_CATEGORY = "GET_SCIENCE_CATEGORY";
export const getScienceCategory = createAction(GET_SCIENCE_CATEGORY);

export const GET_SCIENCE_CATEGORY_SUCCESS = `${GET_SCIENCE_CATEGORY}_SUCCESS`;
export const getScienceCategorySuccess = createAction(
  GET_SCIENCE_CATEGORY_SUCCESS
);

export const GET_SCIENCE_CATEGORY_FAIL = `${GET_SCIENCE_CATEGORY}_FAIL`;
export const getScienceCategoryFail = createAction(GET_SCIENCE_CATEGORY_FAIL);

export const GET_SPORTS_CATEGORY = "GET_SPORTS_CATEGORY";
export const getSportsCategory = createAction(GET_SPORTS_CATEGORY);

export const GET_SPORTS_CATEGORY_SUCCESS = `${GET_SPORTS_CATEGORY}_SUCCESS`;
export const getSportsCategorySuccess = createAction(
  GET_SPORTS_CATEGORY_SUCCESS
);

export const GET_SPORTS_CATEGORY_FAIL = `${GET_SPORTS_CATEGORY}_FAIL`;
export const getSportsCategoryFail = createAction(GET_SPORTS_CATEGORY_FAIL);

export const GET_TECHNOLOGY_CATEGORY = "GET_TECHNOLOGY_CATEGORY";
export const getTechnologyCategory = createAction(GET_TECHNOLOGY_CATEGORY);

export const GET_TECHNOLOGY_CATEGORY_SUCCESS = `${GET_TECHNOLOGY_CATEGORY}_SUCCESS`;
export const getTechnologyCategorySuccess = createAction(
  GET_TECHNOLOGY_CATEGORY_SUCCESS
);

export const GET_TECHNOLOGY_CATEGORY_FAIL = `${GET_TECHNOLOGY_CATEGORY}_FAIL`;
export const getTechnologyCategoryFail = createAction(
  GET_TECHNOLOGY_CATEGORY_FAIL
);

export const GET_ENTERTAINMENT_CATEGORY = "GET_ENTERTAINMENT_CATEGORY";
export const getEntertainmentCategory = createAction(
  GET_ENTERTAINMENT_CATEGORY
);

export const GET_ENTERTAINMENT_CATEGORY_SUCCESS = `${GET_ENTERTAINMENT_CATEGORY}_SUCCESS`;
export const getEntertainmentCategorySuccess = createAction(
  GET_ENTERTAINMENT_CATEGORY_SUCCESS
);

export const GET_ENTERTAINMENT_CATEGORY_FAIL = `${GET_ENTERTAINMENT_CATEGORY}_FAIL`;
export const getEntertainmentCategoryFail = createAction(
  GET_ENTERTAINMENT_CATEGORY_FAIL
);
