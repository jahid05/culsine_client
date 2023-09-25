import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FaArrowLeft, FaArrowRight} from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const OurChef = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("Chef.json")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  const swiper = useSwiper();

  return (
    <div>
      <SectionTitle title="Our" span_title="Chef’s"></SectionTitle>
      <Swiper
        centeredSlides={true}
        loop={true}
        navigation={{
          nextEl: ".button_next",
          prevEl: ".button_prev",
        }}
        slidesPerView={5}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {chefs.map((chef) => (
          <SwiperSlide key={chef.id}>
            <div data-aos="zoom-in"
     data-aos-easing="linear"
     data-aos-duration="700" className="card shadow-xl">
              <figure className="md:px-8 pt-4 md:pt-10 relative">
              <div className="absolute bottom-0 md:left-6 md:badge-xl px-2 md:px-4 rounded-lg text-[10px] md:text-[14px] text-white bg-theme-color-100">Experience: {chef.experience}</div>
                <img
                  className="md:h-60 h-36 w-36 object-cover"
                  src={chef.imageURL}
                  alt="Chef Image"
                />
              </figure>
              <div className="md:card-body p-2 items-center text-center">
                <h2 className="md:text-2xl text-md md:font-bold font-semibold">{chef.chefName}</h2>
                <p className="md:text-lg text-[12px] text-gray-500">{chef.designation}</p>
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

export default OurChef;
