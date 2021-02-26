import React from "react";
import Article from "../Article";
import { Row } from "react-bootstrap";


const ArticleList = (props) => {
  
  const { articles, size } = props;

  return (
    <Row>
      {articles &&
        articles.map((article, index) => (
          <Article {...article} key={index} size={size} />
        ))}
    </Row>
  );
};

export default ArticleList;
