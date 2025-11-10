import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router";

const ActionMovie = ({movies}) => {
    
    return (
        <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie._id}>
            <Link to={`/movies/${movie._id}`}>
              <img
                className="h-72 w-full rounded-xl"
                src={movie.posterUrl}
                alt={movie.title}
              />
              <h3 className="text-sm text-center mt-2">
                {movie.title}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    );
};

export default ActionMovie;