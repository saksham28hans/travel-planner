import React, { useState } from "react";
import "../styles/home.css";
import Carousels from "../components/Carousel/Carousel";
import SearchBar from "../shared/SearchBar";
import { Col, Container, Row } from "reactstrap";
import Subtitle from '../shared/Subtitle';
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MassonryGalleryImages from "../components/Image-gallery/MassonryGalleryImages";
const Home = () => {
  const [filter, setfilter] = useState("");
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
        <SearchBar setfilter={setfilter}/>
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
            <FeaturedTourList  filter={filter}/>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={'Gallery'}></Subtitle>
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg='12'><MassonryGalleryImages/></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
