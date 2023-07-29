import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useLocation } from 'react-router-dom';
const SearchResultList = () => {
  const location = useLocation();
  const [data] = useState(location.state);
  console.log(data);

  return (
    <>
      <section>
      <div className='container'>
            {data.length === 0 ? (
              <h4 className="text-center">No tour found</h4>
            ) : (
              data?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                </Col>
              ))
            )}
          </div>
      </section>
    </>
  );
};

export default SearchResultList;
