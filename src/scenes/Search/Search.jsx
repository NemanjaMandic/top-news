import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Form } from "react-bootstrap";

import ArticleList from "../../components/ArticleList";
import Navigation from "../../components/Navigation";
import Loader from "../../components/Loader/Loader";

import useDebounce from "./../../hooks/useDebounce";
import { searchNews } from "../../state/news/actions";

import "./style.css";

const Search = (props) => {
  const { searchNews, articles, inProgress, totalResults } = props;

  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchNews(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };
  return (
    <Container>
      <Navigation />
      <h3 className="title">Search top news from Great Britain by term</h3>
      <Form.Group>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Search term..."
          onChange={handleChange}
        />
      </Form.Group>

      {totalResults < 1 ? (
        <h3 className="noResult">No results for {debouncedSearchTerm}</h3>
      ) : inProgress ? (
        <Loader />
      ) : (
        <ArticleList articles={articles} size={4} />
      )}
    </Container>
  );
};

const mapStateToProps = ({
  news: {
    searchResult: {
      data: { articles },
      data: { totalResults },
    },
    searchResult: { inProgress },
  },
}) => ({
  articles,
  inProgress,
  totalResults,
});

export default connect(mapStateToProps, { searchNews })(Search);
