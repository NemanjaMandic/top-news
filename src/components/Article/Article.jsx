import React from "react";

import { Button, CardDeck, Card, Row, Col } from "react-bootstrap";

const Article = (props) => {
  const { title, urlToImage, content, url, size } = props;
  return (
    <Col lg={size}>
      <CardDeck>
        <Card>
          <Card.Title>{title}</Card.Title>
          <Card.Body>
            <Card.Img variant="top" src={urlToImage} />
            <Card.Text>{content}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="link" href={url}>
              More >
            </Button>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Col>
  );
};

export default Article;
