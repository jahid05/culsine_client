import dishe from "../../assets/images/dishe_6.png";
import dishe_2 from "../../assets/images/offerImg.png";
import Button from "../../components/Button/Button";
const OfferBanner = () => {
  return (
    <div>
      <div className="py-10 grid lg:grid-cols-2 container lg:space-y-0 space-y-12 mx-auto">
        <div data-aos="fade-right"
     data-aos-easing="linear"
     data-aos-duration="1500"  className="flex items-center md:gap-x-8 md:px-14">
          <img className="md:w-auto w-40 animate-[spin_20s_linear_infinite] " src={dishe} alt="" />
          <div className="md:text-2xl text-md font-semibold md:font-bold text-theme-color-200">
            <p>Only For</p>
            <p className="text-2xl md:text-4xl text-theme-color-100">
              Vegetables
            </p>
            <p>Regular</p>
            <p className="text-theme-color-100">$18.0</p>
            <p>Offer Price</p>
            <p className="text-theme-color-100">$12.0</p>
          </div>
        </div>
        <div className="flex items-center">
          <div  className="lg:text-end space-y-6 md:space-y-5 text-theme-color-200 md:px-14">
            <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"  className="md:text-2xl text-xl font-semibold">Special Offer</p>
            <h data-aos="zoom-in"
     data-aos-easing="linear"
     data-aos-duration="1500"  className="text-theme-color-100 text-5xl md:text-8xl font-bold">
              50% OFF
            </h>
            <p data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="1500"  className="md:text-lg text-start text-slate-500">
              combined with a handful of model sentence structures, to generate
              Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
              therefore always free from repetition, injected humor, or
              non-characteristic words therefore.
            </p>
            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"  className="md:text-end py-4">
              <p className="md:text-3xl text-xl mb-2 text-theme-color-100 font-bold">
                Use Coupon: WE54QDS5
              </p>
              <Button commonButton="Order Now"></Button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:py-10 grid lg:grid-cols-2 container lg:space-y-0 space-y-12 mx-auto">
        <div className="flex items-center">
          <div className="space-y-2 md:space-y-5 text-theme-color-200 md:px-14">
            <h2 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-theme-color-200 text-3xl md:text-5xl font-bold">
              Do You Have Any Dinner Plan Today ?{" "}
              <span className="text-theme-color-100 ">Reserve Your Table</span>
            </h2>
            <p data-aos="zoom-in"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-lg text-start text-slate-500">
              combined with a handful of model sentence structures, to generate
              Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
              therefore always free from repetition, injected humour, or
              non-characteristic words therefore.
            </p>
            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"  className="">
            <Button commonButton="Make Reservation"></Button>
            </div>
          </div>
        </div>
        <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex items-center justify-center">
          <img className="md:w-80 w-52" src={dishe_2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
