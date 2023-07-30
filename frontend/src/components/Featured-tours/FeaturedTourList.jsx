import React, { useEffect, useState } from 'react';
import TourCard from '../../shared/TourCard';
// import tourData from '../../assets/data/tours';
import { Col } from 'reactstrap';
import axios from "axios";

const FeaturedTourList = ({filter}) => {
  const [tourData, settourData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL});
  useEffect(() => {
    const fetchTours = async()=>{
     try {
      const res =  await axiosInstance.get('/destination');
      settourData(res.data);
     } catch (error) {
      console.log(error)
     }
    }
    fetchTours();
  }, []);
  useEffect(() => {
    filter && setfilteredData(
      tourData.filter((tour)=>{
        return (
          (tour.city.toLowerCase().includes(filter.toLowerCase())) || (tour.landmark.toLowerCase().includes(filter.toLowerCase()))
        )
      })
    )
  }, [filter]);
  return (
    <>
    {filter 
     ? 
     filteredData?.map((tour) => (
          <Col lg="3" sm='6' md='6' className="mb-4" key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        )) :
     tourData?.map((tour) => (
          <Col lg="3" sm='6' md='6' className="mb-4" key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
};

export default FeaturedTourList;
