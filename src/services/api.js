import Network from "./network";

const API_KEY = "9ab3f9276dfe4cf7bba8473481fa7d6d";

const BASE_URL = `http://newsapi.org/v2/top-headlines`;

//newsapi.org/v2/top-headlines?country=de&category=business&apiKey=9ab3f9276dfe4cf7bba8473481fa7d6d

export const getNewsAPI = (country) =>
  Network.get(`${BASE_URL}?country=${country}&apiKey=${API_KEY}`);

export const searchNewsAPI = (term) =>
  Network.get(`${BASE_URL}?q=${term}&apiKey=${API_KEY}`);

export const getEntertainmentCategoryAPI = (country) =>
  Network.get(
    `${BASE_URL}?country=${country}&category=entertainment&apiKey=${API_KEY}`
  );

export const getGeneralCategoryAPI = (country) =>
  Network.get(
    `${BASE_URL}?country=${country}&category=general&apiKey=${API_KEY}`
  );

export const getHealthCategoryAPI = (country) =>
  Network.get(
    `${BASE_URL}?country=${country}&category=health&apiKey=${API_KEY}`
  );

export const getScienceCategoryAPI = (country) =>
  Network.get(
    `${BASE_URL}?country=${country}&category=science&apiKey=${API_KEY}`
  );

export const getSportsCategoryAPI = (country) =>
  Network.get(
    `${BASE_URL}?country=${country}&category=sports&apiKey=${API_KEY}`
  );

export const getTechnologyCategoryAPI = (country) =>
  Network.get(
    `${BASE_URL}?country=${country}&category=technology&apiKey=${API_KEY}`
  );
