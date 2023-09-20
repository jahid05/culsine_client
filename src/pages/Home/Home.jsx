import Header from "../../layout/Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import AppDown from "../AppDown/AppDown";
import Client from "../Client/ClientReview";
import FoodSlider from "../FoodSlider/FoodSlider";
import OurChef from "../OurChef/OurChef";
import OfferBanner from "./OfferBanner"

const Home = () => {
  return (
    <div className="overflow-hidden min-h-screen px-6 md:px-0">
      <Header></Header>
      <FoodSlider></FoodSlider>
      <OfferBanner></OfferBanner>
      <Client></Client>
      <AboutUs></AboutUs>
      <OurChef></OurChef>
      <AppDown></AppDown>
    </div>
  );
};

export default Home;
