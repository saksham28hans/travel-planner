import React, { useState } from 'react'
import AddDay from '../../pages/AddDay'
import './Itinerary.css';
import { Col, Container, Row } from 'reactstrap';
import tourData from '../../assets/data/tours';
import TourCard from '../../shared/TourCard';

const Itinerary = () => {
    const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  return (
    <>
    <section>
      <AddDay />
      </section>
      <section className="pt-0">
        <Container>
            <Row>
              {tourData?.map((tour) => (
                <Col lg="4" md='6' sm='6' className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))}
              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? 'active__page' : ' '}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Itinerary
