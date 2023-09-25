import { NavLink } from "react-router-dom";
import logo from "../../assets/images/brand_logo.png";
import "./Navbar.css";
import { FaBell, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  const navItems = (
    <>
      <NavLink
        className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "active"
          : "px-8 border-b-2 text-lg font-semibold border-b-transparent hover:border-b-theme-color-100 hover:text-theme-color-100 duration-500 transition-all ease-linear py-1"
      }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "active"
          : "px-8 border-b-2 text-lg font-semibold border-b-transparent hover:border-b-theme-color-100 hover:text-theme-color-100 duration-500 transition-all ease-linear py-1"
      }
        to="aboutUs"
      >
        About Us
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "active"
          : "px-8 border-b-2 text-lg font-semibold border-b-transparent hover:border-b-theme-color-100 hover:text-theme-color-100 duration-500 transition-all ease-linear py-1"
      }
        to="menu"
      >
        Menu
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "active"
          : "px-8 border-b-2 text-lg font-semibold border-b-transparent hover:border-b-theme-color-100 hover:text-theme-color-100 duration-500 transition-all ease-linear py-1"
      }
        to="blog"
      >
        Blog
      </NavLink>
      {/* <NavLink
        className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "active"
          : "px-8 border-b-2 text-lg font-semibold border-b-transparent hover:border-b-theme-color-100 hover:text-theme-color-100 duration-500 transition-all ease-linear py-1"
      }
        to="contact"
      >
        Contact
      </NavLink> */}
    </>
  );
  return (
    <div className="md:relative z-10 container mx-auto">
      <div className="navbar bg-transparent md:absolute md:top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="normal-case text-xl">
            <img className="md:w-28 w-24" src={logo} alt="Logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end text-theme-color-100 gap-4 text-xl md:text-2xl">
          <button className=""><FaShoppingBag></FaShoppingBag></button>
          <button className=""><FaBell></FaBell></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
