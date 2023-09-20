import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import {
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaHeart,
  FaPlus,
  FaUndoAlt,
} from "react-icons/fa";
import { FaFilterCircleDollar } from "react-icons/fa6";
import Button from "../../components/Button/Button";

const Menu = () => {
  {
    /*==================== Json Data Loaded ====================*/
  }

  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("Foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  {
    /*==================== See more all items ====================*/
  }

  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = () => {
    setSeeMore(true);
  };

  const itemsToShow = seeMore ? foods.length : 8;

  {
    /*==================== Price Range Filter ====================*/
  }

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };
  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const filterItemsByPriceRange = () => {
    const filteredItems = foods.filter((item) => {
      const itemPrice = item.price;
      return (
        (itemPrice >= parseInt(minPrice) || minPrice === "") &&
        (itemPrice <= parseInt(maxPrice) || maxPrice === "")
      );
    });

    setFoods(filteredItems);
  };

  const resetFilters = () => {
    setMinPrice("");
    setMaxPrice("");
    setFoods(foods);
  };

  {
    /*==================== Sort By Price ====================*/
  }

  const sortByPrice = (order) => {
    const sortedItems = [...foods].sort((a, b) => {
      if (order === "lowToHigh") {
        return a.price - b.price;
      } else if (order === "highToLow") {
        return b.price - a.price;
      }
      return 0;
    });
    setFoods(sortedItems);
    console.log("Click ME");
  };


  return (
    <div className="container mx-auto px-6">
      <SectionTitle title="Our" span_title="Menu"></SectionTitle>
      <div className="flex justify-center items-center text-theme-color-100 pb-8 shadow-xl">
        {/*==================== Price Range Filter ====================*/}
        <div className="flex justify-end items-center">
          <div>
            <input
              className="md:w-28 w-24 border-2 text-md font-semibold border-theme-color-100 md:p-2 p-1 pl-4 rounded:none rounded-s-3xl outline-none focus:scale-105 duration-500"
              type="number"
              id="minPrice"
              value={minPrice}
              placeholder="Min Price"
              onChange={handleMinPriceChange}
            />
          </div>
          <div>
            <input
              className="md:w-28 w-24 border-2 text-md font-semibold border-theme-color-100 md:p-2 p-1 pl-4 rounded:none rounded-tr-2xl border-s-0 outline-none focus:scale-105 duration-500"
              type="number"
              id="maxPrice"
              value={maxPrice}
              placeholder="Max Price"
              onChange={handleMaxPriceChange}
            />
          </div>
          <div className="pr-8 flex">
            <button
              className="md:text-3xl text-2xl text-theme-color-100 p-1"
              onClick={filterItemsByPriceRange}
            >
              <FaFilterCircleDollar></FaFilterCircleDollar>
            </button>
            <button
              className="md:text-3xl text-2xl text-theme-color-100 p-1"
              onClick={resetFilters}
            >
              <FaUndoAlt></FaUndoAlt>
            </button>
          </div>
        </div>
        {/*==================== Sort By Price ====================*/}

        <div className="flex justify-center">
          <button className="p-1" onClick={() => sortByPrice("lowToHigh")}>
            <span className="md:text-3xl text-2xl text-theme-color-100">
              <FaArrowCircleDown></FaArrowCircleDown>
            </span>
          </button>
          <button className="p-1" onClick={() => sortByPrice("highToLow")}>
            <span className="md:text-3xl text-2xl text-theme-color-100">
              <FaArrowCircleUp></FaArrowCircleUp>
            </span>
          </button>
        </div>
      </div>
      {/*==================== Food Card ====================*/}

      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-2 mt-6">
        {foods.slice(0, itemsToShow).map((food) => (
          <div
            key={food.id}
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="card shadow-xl p-2 md:p-4 border border-gray-300"
          >
            <figure>
              <img
                className="md:w-56 md:h-56 w-24 h-24 hover:scale-125 duration-500"
                src={food.image}
                alt="Food"
              />
            </figure>
            <div className="md:p-5 p-2">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold md:font-bold text-lg md:text-2xl">{food.name}</h2>
                  <p className="text-slate-500 text-sm md:text-lg">{food.category}</p>
                </div>
                <span className="text-theme-color-100 text-sm md:text-2xl md:pe-4">
                  <FaHeart></FaHeart>
                </span>
              </div>
              <div className="card-actions justify-between mt-2 md:pt-8">
                <h4 className="text-lg md:text-2xl font-semibold md:font-bold">$ {food.price}</h4>
                <button className="p-2 md:p-3 hover:bg-theme-color-200 duration-300 bg-theme-color-100 text-white rounded-full text-sm md:text-2xl">
                  <FaPlus></FaPlus>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*==================== See more all items ====================*/}

      <div className="py-12 flex justify-center">
        <button onClick={handleSeeMore}>
          <Button commonButton="See More"></Button>
        </button>
      </div>
    </div>
  );
};

export default Menu;
