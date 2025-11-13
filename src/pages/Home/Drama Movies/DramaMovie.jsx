import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router";

const DramaMovie = ({ movies }) => {
  return (
    <div>
      <Swiper
        slidesPerView={1.5} // mobile default
        spaceBetween={15}
        breakpoints={{
          640: { slidesPerView: 2.5, spaceBetween: 15 }, // tablet
          768: { slidesPerView: 3.5, spaceBetween: 20 }, // small desktop
          1024: { slidesPerView: 4.5, spaceBetween: 25 }, // large desktop
          1280: { slidesPerView: 5.5, spaceBetween: 30 }, // extra large
        }}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie._id}>
            <Link to={`/movies/${movie._id}`}>
              <img
                className="h-72 w-full rounded-xl object-cover"
                src={movie.posterUrl}
                alt={movie.title}
              />
              <h3 className="text-sm text-center mt-2 text-white">
                {movie.title}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DramaMovie;
