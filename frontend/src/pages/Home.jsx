import React from "react";
import "../styles/home.css";
import Carousels from "../components/Carousel/Carousel";
import SearchBar from "../shared/SearchBar";
const Home = () => {
  return (
    <>
      <section>
          <Carousels/>
      </section>
      <section>
        <SearchBar/>
      </section>
    </>
  );
};

export default Home;
