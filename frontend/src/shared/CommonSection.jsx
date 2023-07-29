import React from 'react';
import './CommonSection.css';
import { Col } from 'reactstrap';
const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
        <div className='container row'>
          <Col lg="12">
            <h1>{title}</h1>
          </Col>
      </div>
    </section>
  );
};

export default CommonSection;
