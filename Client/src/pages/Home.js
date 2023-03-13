import React from "react";
import Header from "./components/Header";
import { Card, Col, Row } from "react-materialize";

const Home = () => {
  return (
    <div>
      <Header />
      <Row>
        <Col m={6}>
          <Card
            className="blue-grey darken-1"
            textClassName="white-text"
            title="Welcome to Full Plate"
          >
            <p>Here you can find and save your favorite recipes.</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
