import { all, takeLatest, put } from "redux-saga/effects";

import {
  getNewsAPI,
  searchNewsAPI,
  getGeneralCategoryAPI,
  getHealthCategoryAPI,
  getScienceCategoryAPI,
  getEntertainmentCategoryAPI,
  getSportsCategoryAPI,
  getTechnologyCategoryAPI,
} from "../../services/api";
import * as actions from "./actions";

export function* getNews$({ payload }) {
  try {
    const news = yield getNewsAPI(payload);
    yield put(actions.getNewsSuccess(news.data));
  } catch (error) {
    yield put(actions.getNewsFail(error));
  }
}

export function* searchNews$({ payload }) {
  try {
    const news = yield searchNewsAPI(payload);
    yield put(actions.searchNewsSuccess(news.data));
  } catch (error) {
    yield put(actions.searchNewsFail(error));
  }
}

export function* getGeneralCategory$({ payload }) {
  try {
    const { data } = yield getGeneralCategoryAPI(payload);
    yield put(actions.getGeneralCategorySuccess(data));
  } catch (error) {
    yield put(actions.getGeneralCategoryFail(error));
  }
}

export default function* () {
  yield all([
    takeLatest(actions.getNews, getNews$),
    takeLatest(actions.searchNews, searchNews$),
    takeLatest(actions.getGeneralCategory, getGeneralCategory$),
  ]);
}
