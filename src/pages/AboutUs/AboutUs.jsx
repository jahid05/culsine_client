import orderImg from "../../assets/images/dishe_2.png";
import chef from "../../assets/images/chef_2.png";
import Button from "../../components/Button/Button";
import SectionTitle from "../../components/SectionTitle/SectionTitle";



const AboutUs = () => {
  return (
    <div className="container mx-auto">
      <SectionTitle title="About" span_title="Us"></SectionTitle>
      <div className="min-h-screen">
        <div className="">
          <div className="grid md:grid-cols-2 md:gap-0 gap-14">
            <div className="flex items-center">
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="700" className="md:w-96 md:space-y-8 space-y-6 md:text-xl text-gray-500">
              <div className="ps-4">
              <p className="border-s-2 border-gray-400 ps-4">Browse our catalog and select a service or product</p>
              </div>
              <div className="rounded-md bg-orange-200 ps-4">
              <p className="border-s-2 p-2 border-gray-400 ps-4">
                <span className="font-bold text-theme-color-100">Book your slot with payment</span> <br /> We put your money on hold in a safe
                place until you confirm completion
              </p>
              </div>
              
              <div className="ps-4">
              <p className="border-s-2 border-gray-400 ps-4">The magic Begins!</p>
              </div>
              <div className="ps-4">
              <p className="border-s-2 border-gray-400 ps-4">Confirm Completion</p>
              </div>
            </div>
            </div>
            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="700" className="flex justify-center items-start">
              <img className="md:w-[450px] w-52" src={orderImg} alt="" />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 py-12 gap-14">
          <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="700" className="flex items-center">
            <img className="md:w-[400px] w-60" src={chef} alt="" />
          </div>
          <div className="flex items-center">
          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="700" className="space-y-6 ">
            <h2 className="text-2xl md:text-5xl text-theme-color-200 font-bold ">
              Welcome to Our <br />{" "}
              <span className="text-theme-color-100">Restaurant</span>
            </h2>
            <p className="md:text-lg text-gray-500">
              combined with a handful of model sentence structures, to generate
              Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
              therefore always free from repetition, injected humor, or
              non-characteristic words therefore. Combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humor, or non-characteristic words
              therefore.
            </p>
            <Button commonButton="Make Reservation"></Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
