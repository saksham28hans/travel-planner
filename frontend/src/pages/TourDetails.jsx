import React, { useEffect, useRef, useState, useContext } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useLocation, useParams } from 'react-router-dom';
import tourData from '../assets/data/tours';
import avatar from '../assets/images/avatar.jpg';
import { AuthContext } from '../context/authContext/AuthContext';
import axios from "axios";

const TourDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(3);
  const { user, dispatch } = useContext(AuthContext);
  const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL});

  const tour = location.state.tour;
  const {
    img,
    landamrk,
    popularAttractions,
    expenses,
    reviews,
    city,
    rating,
    totalRating,
    _id
  } = tour;
  // const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
  // const avgRating =
  //   totalRating === 0
  //     ? ''
  //     : totalRating === 1
  //     ? totalRating
  //     : (totalRating / reviews?.length).toFixed(1);


  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const submitHandler = async (e) => {
    e.preventDefault();
    //console.log(reviewMsgRef.current.value)
    // console.log(tourRating)
    // console.log(user)
    if(!user)
    {
      alert("Please Login to give a review")
    }
    else
    {
      try {
        await axiosInstance.put(`/destination/review/${_id}`,{username:user.username,message:reviewMsgRef.current.value});
        await axiosInstance.put(`/destination/rating/${_id}`,{id:tourRating});
      } catch (error) {
       console.log(error);
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);
  return (
    <>
      <section>
        <Container>
            <Row>
              <Col lg="8">
                <div className="tour__content">
                  <img src={img} alt=""></img>
                  <div className="tour__info">
                    <h2>{landamrk}</h2>
                    <div className="d-flex align-items-center gap-5">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <i
                          class="ri-star-fill"
                          style={{ color: 'var(--secondary-color)' }}
                        ></i>
                        {totalRating === 0 ? null : (rating/totalRating)}
                        {totalRating === 0 ? (
                          'Not rated'
                        ) : (
                          <span>({totalRating})</span>
                        )}
                      </span>
                      {/* <span>
                        <i class="ri-map-pin-fill"></i>
                        {address}
                      </span> */}
                    </div>
                    <div className="tour__extra-details">
                      <span>
                        <i class="ri-map-pin-2-line"></i>
                        {city}
                      </span>
                      <span>
                        <i class="ri-money-dollar-circle-line"></i>${expenses}
                      </span>
                      {/* <span>
                        <i class="ri-map-pin-time-line"></i>
                        {distance} k/m
                      </span> */}
                      {/* <span>
                        <i class="ri-group-line"></i>
                        {maxGroupSize} /per people
                      </span> */}
                    </div>
                    <h5>Popular Attractions</h5>
                    {
                    popularAttractions.map((att)=>(
                      <p key={att}>{att}</p>
                    ))
                    }
                  </div>
                  <div className="tour__reviews mt-4">
                    <h4>Reviews ({reviews?.length} reviews)</h4>
                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        <span onClick={() => setTourRating(1)}>
                          1 <i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(2)}>
                          2 <i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(3)}>
                          3 <i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(4)}>
                          4 <i class="ri-star-s-fill"></i>
                        </span>

                        <span onClick={() => setTourRating(5)}>
                          5 <i class="ri-star-s-fill"></i>
                        </span>
                      </div>
                      <div className="review__input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="
                        share your thoughts"
                          required
                        ></input>

                        <button
                          className="btn primary__btn text-white"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>
                    <ListGroup className="user__reviews">
                      {reviews?.map((review) => (
                        <div className="review__item">
                          <img src={avatar} alt="" />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.username}</h5>
                                {/* <p>
                                {new Date(review.createdAt).toLocaleDateString('en-US', options)}
                              </p> */}
                              </div>

                              {/* <span className="d-flex align-items-center">
                                {review.rating}<i class="ri-star-s-fill"></i>
                              </span> */}
                            </div>
                            <h6>{review.message}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                </div>
              </Col>
              <Col lg="4">
              </Col>
            </Row>
        </Container>
      </section>
    </>
  );
};

export default TourDetails;
