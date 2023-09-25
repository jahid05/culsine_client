// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FaArrowLeft, FaArrowRight, FaHeart, FaPlus } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const FoodSlider = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("Foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  const swiper = useSwiper();
  return (
    <div>
      <SectionTitle title="Popular" span_title="Dishes"></SectionTitle>
      <Swiper
        centeredSlides={true}
        loop={true}
        navigation={{
          nextEl: ".button_next",
          prevEl: ".button_prev",
        }}
        slidesPerView={5}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {foods.map((food) => (
          <SwiperSlide key={food.id}>
            <div
            key={food.id}
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="card shadow-xl p-2 md:p-4 border border-gray-300"
          >
            <figure>
              <img
                className="md:w-56 md:h-56 w-24 h-24 hover:scale-125 duration-500"
                src={food.image}
                alt="Food"
              />
            </figure>
            <div className="md:p-5 ">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold md:font-bold text-lg md:text-2xl">{food.name}</h2>
                  <p className="text-slate-500 text-sm md:text-lg">{food.category}</p>
                </div>
                <span className="text-theme-color-100 text-sm md:text-2xl pt-4 pe-1 md:pe-4">
                  <FaHeart></FaHeart>
                </span>
              </div>
              <div className="card-actions justify-between mt-2 md:pt-8">
                <h4 className="text-lg md:text-2xl font-semibold md:font-bold">$ {food.price}</h4>
                <button className="p-1 md:p-3 hover:bg-theme-color-200 duration-300 bg-theme-color-100 text-white rounded-full text-sm md:text-2xl">
                  <FaPlus></FaPlus>
                </button>
              </div>
            </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper_btn relative z-10 flex justify-center gap-6 py-6">
        <button
          onClick={() => swiper.slidePrev()}
          className="button_prev lg:absolute lg:-top-52 lg:left-[38%] bg-theme-color-100 p-2 rounded text-white text-xl md:text-3xl text-center"
        >
          <FaArrowLeft></FaArrowLeft>
        </button>
        <button
          onClick={() => swiper.slideNext()}
          className="button_next lg:absolute lg:-top-52 lg:right-[38%] bg-theme-color-100 p-2 rounded-md text-white text-xl md:text-3xl text-center"
        >
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default FoodSlider;
