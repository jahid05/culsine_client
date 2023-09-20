import Button from "../../components/Button/Button";
import dishe_1 from "../../assets/images/dishe_5.png";
import dishe_2 from "../../assets/images/dishe_2.png";
import dishe_3 from "../../assets/images/dishe_3.png";
import dishe_5 from "../../assets/images/dishe_5.png";
import card_1 from "../../assets/images/banner_card.png";
import card_2 from "../../assets/images/banner_card2.png";

import ellipse from "../../assets/images/Ellipse 1.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="grid md:space-y-0 space-y-40 w-full min-h-screen lg:grid-cols-3 z-0">
      <div className="lg:col-span-2">
        <div className="md:px-40 md:py-52 space-y-4 md:space-y-6">
          <h1
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="md:text-[82px] text-5xl font-bold md:leading-[100px] leading-[60px]"
          >
            Enjoy <span className="text-theme-color-100">Delicious</span> <br />{" "}
            <span className="text-theme-color-100">Food</span> In Your <br />{" "}
            Healthy Life
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="md:text-[20px] md:w-2/3  text-gray-500"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            sequi ullam quod quam reiciendis odio impedit aut doloremque laborum
            hic quasi, neque incidunt culpa harum cupiditate? Beatae odit
            explicabo distinctio.
          </p>
          <div
            className=""
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <Link to="menu">
              <Button commonButton="View Menu"></Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:col-span-1 h-96 md:h-screen bg-theme-color-200 relative">
        <div className="">
          <img
            className="absolute bottom-7 md:top-56 md:left-40 lg:top-48 left-10 lg:-left-80 lg:w-auto md:w-80 w-40"
            src={ellipse}
            alt=""
          />
          <img
            className="w-20 md:w-40 animate-[bounce_3s_linear_infinite] absolute top-40 md:top-[43%] lg:top-1/2 left-1 md:left-24 lg:-left-96 lg:border-4 border-2 border-theme-color-100 rounded-full"
            src={dishe_5}
            alt=""
          />
          <img
            className="w-20 md:w-40 animate-[pulse_2s_linear_infinite] absolute top-4 md:top-40 lg:top-36 left-20 md:left-72 lg:-left-56 lg:border-4 border-2 border-theme-color-100 rounded-full"
            src={dishe_2}
            alt=""
          />
          <img
            className="w-20 md:w-40 animate-[pulse_2s_linear_infinite] absolute bottom-4 md:bottom-48 lg:bottom-10 left-20 md:left-72 lg:-left-52 lg:border-4 border-2 border-theme-color-100 rounded-full"
            src={dishe_3}
            alt=""
          />
          <img
            className="w-48 md:w-96 lg:w-auto absolute top-24 md:top-[31%] lg:top-1/3 right-7 md:left-80 lg:-left-1/3 border-4 border-theme-color-100 rounded-full animate-[spin_25s_linear_infinite]"
            src={dishe_1}
            alt=""
          />
          <img
            className="absolute w-20 md:w-auto bottom-6 md:bottom-48 lg:bottom-10 right-6 md:right-28 lg:left-20"
            src={card_1}
            alt=""
          />
          <img
            className="absolute top-10 md:top-56 lg:top-44 right-2 lg:-left-14 w-36 md:w-auto"
            src={card_2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
