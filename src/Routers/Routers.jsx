import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Main from "../layout/Main/Main";
import AboutUs from "../pages/AboutUs/AboutUs";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
