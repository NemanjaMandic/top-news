import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Article from "../../components/Article";
import { getGeneralCategory } from "../../state/news/actions";

import { Carousel, Container } from "react-bootstrap";
import Navigation from "../../components/Navigation";

import "./style.css";

const Categories = (props) => {
  const { getGeneralCategory, generalCategoryArticles } = props;

  const [country, setCountry] = useState("GB");
  useEffect(() => {
    getGeneralCategory("gb");
  }, []);

  const nextIcon = (
    <span aria-hidden="true" className="nextIcon">
      {" "}
      &gt;{" "}
    </span>
  );
  const prevIcon = (
    <span aria-hidden="true" className="prevIcon">
      {" "}
      &lt;{" "}
    </span>
  );

  const selectUsNews = () => {
    setCountry("US");
    getGeneralCategory("us");
  };
  const selectGbNews = () => {
    setCountry("GB");
    getGeneralCategory("gb");
  };

  return (
    <Container>
      <Navigation selectUsNews={selectUsNews} selectGbNews={selectGbNews} />
      <h3 className="title">Top 5 news by categories from {country}: </h3>

      <Carousel prevIcon={prevIcon} nextIcon={nextIcon} indicators={false}>
        {generalCategoryArticles &&
          generalCategoryArticles.map((general) => {
            return (
              <Carousel.Item>
                <Article
                  title={general.title}
                  urlToImage={general.urlToImage}
                  content={general.content}
                  url={general.url}
                />
              </Carousel.Item>
            );
          })}
      </Carousel>
    </Container>
  );
};

const mapStateToProps = ({
  news: {
    category: {
      general: {
        data: { articles: generalCategoryArticles },
      },
      general: { inProgress },
    },
  },
}) => ({
  generalCategoryArticles,
  inProgress,
});

const mapDispatchToProps = { getGeneralCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
