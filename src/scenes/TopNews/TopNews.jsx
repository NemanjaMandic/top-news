import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getNews } from "../../state/news/actions";

import { Container } from "react-bootstrap";
import Navigation from "../../components/Navigation";
import ArticleList from "../../components/ArticleList";
import Loader from "../../components/Loader";

import './style.css';

const TopNews = (props) => {
  const { getNews, articles, inProgress } = props;

  const [country, setCountry] = useState('GB');
  
  useEffect(() => {
    getNews('gb');
  }, []);


 const selectUsNews = () => {
  setCountry('US');
  getNews('us');
 }

 const selectGbNews = () => {
  setCountry('GB')
  getNews('gb');
 }

  return (
    <Container>
      <Navigation selectUsNews={selectUsNews} selectGbNews={selectGbNews} />
      <h3 className="title">Top news from {country} </h3>
      {inProgress ? <Loader /> : <ArticleList articles={articles} size={4} />}
    </Container>
  );
};

const mapStateToProps = ({
  news: {
    topNews: {
      data: { articles },
    },
    topNews: { inProgress },
  },
}) => ({
  articles,
  inProgress,
});

export default connect(mapStateToProps, { getNews })(TopNews);
