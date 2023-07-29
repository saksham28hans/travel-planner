import React from "react";
import "../styles/home.css";
import Carousels from "../components/Carousel/Carousel";
import SearchBar from "../shared/SearchBar";
import { Col, Container, Row } from "reactstrap";
import Subtitle from '../shared/Subtitle';
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
const Home = () => {
  return (
    <>
      <section>
      <Container>
        <Row>
          <Carousels/>
          </Row>
      </Container>
      </section>
      <section>
      <Container>
        <Row>
        <SearchBar/>
        </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={'Explore'} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
