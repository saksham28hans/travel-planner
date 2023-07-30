import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import './TourCard.css';
const TourCard = ({ tour }) => {
  const { _id, landmark, img, city, expenses, featured,reviews,rating,totalRating } = tour;

  // const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
  // const avgRating =
  //   totalRating === 0
  //     ? ''
  //     : totalRating === 1
  //     ? totalRating
  //     : (totalRating / reviews?.length).toFixed(1);
  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={img} alt="tour-img" />
          {featured && <span>Featured</span>}
        </div>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"></i> {city}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i class="ri-star-fill"></i> {totalRating === 0 ? null : rating/totalRating}
              {totalRating === 0 ? 'Not rated' : <span>({totalRating})</span>}
            </span>
          </div>
          <h5 className="tour__title">
            <Link to={`/tours/${_id}`} state = {{tour : tour}}>{landmark}</Link>
          </h5>
          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${expenses}
              <span>/per person</span>
            </h5>
            <button className="btn booking__btn">
              <Link to={`/tours/${_id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
