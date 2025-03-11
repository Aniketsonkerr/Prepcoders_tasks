import { Link } from "react-router-dom";
import "boxicons";
import { useState } from "react";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="flex flex-row justify-between items-center  text-black  md:px-32 bg-white drop-shadow-md">
        <Link to={"/"}>
          <img
            src="https://brandlogos.net/wp-content/uploads/2020/03/Adidas-logo-512x512.png"
            alt="logo"
            className="w-32 hover:scale-105 transition-all"
          ></img>
        </Link>

        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <Link to={"/"}>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all">
              Home
            </li>
          </Link>
          <Link>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all">
              About
            </li>
          </Link>
          <Link>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all">
              Product
            </li>
          </Link>
          <Link>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all">
              Contact
            </li>
          </Link>
        </ul>
        <div className="relative hidden md:flex items-center justify-center gap-3 ">
          <box-icon name="search-alt-2" className="absolute left-3"></box-icon>
          <input
            type="text"
            placeholder="search..."
            className="py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500"
          ></input>
        </div>
        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <box-icon
            name="menu"
            className="xl:hidden block text-5xl cursor-pointer"
          ></box-icon>
        </div>
        <div
          className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold  text-lg transform transition-transform
            ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
        >
          <Link>
            <li className=" list-none p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all">
              Home
            </li>
          </Link>
          <Link>
            <li className="list-none p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all">
              About
            </li>
          </Link>
          <Link>
            <li className="list-none p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all">
              Product
            </li>
          </Link>
          <Link>
            <li className="list-none p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all">
              Contact
            </li>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
