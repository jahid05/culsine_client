import appleStore from "../../assets/images/apple_store.png";
import playStore from "../../assets/images/google_play.png";
import apps from "../../assets/images/Group 34513.png";

const AppDown = () => {
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 py-12 gap-y-8">
        <div className="space-y-6 ">
          <h2 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-2xl md:text-5xl text-theme-color-200 font-bold ">
            Never Feel Hungry
            <br />
            <span className="text-theme-color-100">
              Download Our Mobile App
            </span>
            <br />
            Enjoy Delicious Foods
          </h2>
          <p data-aos="zoom-in"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-gray-500 md:w-1/2">
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words therefore.
          </p>
          <div data-aos="fade-right"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex gap-4">
            <button>
              <img src={appleStore} alt="" />
            </button>
            <button>
              <img src={playStore} alt="" />
            </button>
          </div>
        </div>
        <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex justify-center items-center">
          <img className="md:w-auto w-52" src={apps} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppDown;
