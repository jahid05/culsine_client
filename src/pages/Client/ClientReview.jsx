import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import Rating from "react-rating";

const Client = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    fetch("Client.json")
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);
  const swiper = useSwiper();
  return (
    <div>
      <SectionTitle title="Our Clients" span_title="Review"></SectionTitle>
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
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
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
        {clients.map((client) => (
          <SwiperSlide key={client.id}>
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="card p-2 md:p-4 shadow-xl"
            >
              <div className="flex justify-around items-center">
                <img
                  className="md:w-20 md:h-20 w-14 h-14 object-cover rounded-full"
                  src={client.imageURL}
                  alt="Profile"
                />
                <div className="">
                  <h2 className="md:text-2xl text-md font-semibold">
                    {client.clientName}
                  </h2>
                  <p className="text-sm md:text-lg text-gray-500 font-semibold">
                    {client.profession}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <div className="">
                  {client.comment.length >= 150 ? (
                    <q className="text-md md:text-lg text-gray-500">
                      {client.comment}
                    </q>
                  ) : (
                    client.comment.slice(0, 150)
                  )}
                  <p className="text-sm md:text-lg font-semibold  py-4">{client.date}</p>
                </div>
                <div className="card-actions items-center">
                  <Rating
                    placeholderRating={client.rating}
                    emptySymbol={
                      <span className="text-gray-400 md:text-xl">
                        <FaStar></FaStar>
                      </span>
                    }
                    placeholderSymbol={
                      <span className="text-theme-color-100 md:text-xl">
                        <FaStar></FaStar>
                      </span>
                    }
                    readonly
                  />
                  <p className="md:text-xl font-semibold">({client.rating})</p>
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

export default Client;
