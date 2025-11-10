import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Banner.css";
import { FaPlay, FaStar } from "react-icons/fa";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  useEffect(() => {
    if (swiperInstance && movies.length > 0) {
      setTimeout(() => {
        swiperInstance.slideToLoop(0, 0);
      }, 100);
    }
  }, [swiperInstance, movies]);

  return (
    <div className="banner-container">
      <Swiper
        onSwiper={setSwiperInstance}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="coverflowSwiper"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="movie-card">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="movie-poster"
                loading="lazy"
              />
              <div className="movie-overlay">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-meta">{movie.genre}</p>
                <div className="movie-rating">
                  <FaStar className="text-yellow-400" /> {movie.rating}
                </div>
                <button className="watch-btn">
                  <FaPlay className="w-4 h-4" /> Watch Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
