import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";



const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  const handleNavLinkClick = () => setNav(false);

  return (
    <nav className="w-full flex justify-between items-center bg-[#00000080] backdrop-blur-sm px-8 fixed z-50 ">
      <div className="flex w-[100%] xl:w-[40%]">
        <div className="w-[30%]">
          <Link to="/">
            <img src="/terror.png" alt="logo" className="w-12 xl:w-20" />
          </Link>
        </div>
        <div className="flex w-[70%] gap-7">
          <Link to="https://www.facebook.com/share/SxNw6xYSjPrVqMxw/?mibextid=LQQJ4d" target="_blank">
            <img src="/facebook_icon.png" alt="logo" className="w-12 xl:w-20 transform active:scale-90 transition-transform ease-in-out duration-300" />
          </Link>
          <Link to="https://www.tiktok.com/@producciones_sky" target="_blank">
            <img src="/tiktok_icon.png" alt="logo" className="w-12 xl:w-20 transform active:scale-90 transition-transform ease-in-out duration-300" />
          </Link>
        </div>
      </div>
      <ul className="hidden md:flex text-2xl">
        <li className="list-none">
          <NavLink
            className="text-white p-2 mx-2 rounded-lg transition duration-200 ease"
            to="/"
          >
            Inicio
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            className="text-white p-2 mx-2 rounded-lg transition duration-200 ease"
            to="/webseries"
          >
            Web Serie
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            className="text-white p-2 mx-2 rounded-lg transition duration-200 ease"
            to="/movie"
          >
            Pelicula
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            className="text-white p-2 mx-2 rounded-lg transition duration-200 ease"
            to="/book"
          >
            Libro
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            className="text-white p-2 mx-2 rounded-lg transition duration-200 ease"
            to="/videogame"
          >
            Juego
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            className="text-white p-2 mx-2 rounded-lg transition duration-200 ease"
            to="/timeline"
          >
            TimeLine
          </NavLink>
        </li>
      </ul>
      {/* Hamb or Close Icon */}
      <div className="md:hidden z-10 text-[#D31010]" onClick={handleClick}>
        {nav ? <FaTimes size={30} /> : <RxHamburgerMenu size={30} />}
      </div>
      {/* Mobile Menu */}
      <ul className={`${
        nav ? 'py-2 opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-y-full'
      } transition-all duration-300 ease-in-out absolute top-0 left-0 w-full h-screen bg-zinc-800/80 backdrop-blur-sm flex flex-col justify-center items-center gap-6 text-2xl 
      `}>
      <li className="list-none">
          <NavLink
            className="text-white p-2 mx-2 rounded-lg transition duration-200 ease"
            to="/"
            onClick={handleNavLinkClick}
          >
            Inicio
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            className="text-white p-2 mx-2 rounded-lg transition duration-200 ease"
            to="/webseries"
            onClick={handleNavLinkClick}
          >
            Web Serie
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            className="text-white p-2 mx-2 rounded-lg transition duration-200 ease"
            to="/movie"
            onClick={handleNavLinkClick}
          >
            Pelicula
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            className="text-white p-2 mx-2 rounded-lg transition duration-200 ease"
            to="/book"
            onClick={handleNavLinkClick}
          >
            Libro
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            className="text-white p-2 mx-2 rounded-lg transition duration-200 ease"
            to="/videogame"
            onClick={handleNavLinkClick}
          >
            Juego
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
