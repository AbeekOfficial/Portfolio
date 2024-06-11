import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//icons
import { RiHomeLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { PiUserList } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
import { PiPhoneDisconnectLight } from "react-icons/pi";
import { RiSettingsLine } from "react-icons/ri";
import Settings from "./Settings";

function Navbar() {
  const [top, setTop] = useState<boolean>(true);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleClick = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`sticky z-20 top-0 right-0 left-0  py-8 px-4 mx-auto ${
        !top &&
        `bg-[#0F1924] shadow-lg duration-500 ease-in-out shadow-green-700`
      }`}
    >
      <nav className="container  flex justify-between items-center ">
        <Link to={"/"} className="font-bold flex text-2xl ">
          <h1 className="flex">
            WEB <div className="text-green-500">DEV</div>
          </h1>
        </Link>

        <ul className="gap-12 items-center flex ">
          <Link
            onClick={handleClick}
            to={"/"}
            className=" gap-2 items-center hover:text-green-500 transition-all ease-out hidden md:flex"
          >
            <RiHomeLine className="text-2xl" />
            <li className="nav-link">Home</li>
          </Link>
          <Link
            onClick={handleClick}
            to={"/about"}
            className=" gap-2 items-center hover:text-green-500 transition-all ease-out hidden md:flex"
          >
            <PiUserList className="text-2xl" />
            <li className="nav-link">About</li>
          </Link>
          <Link
            onClick={handleClick}
            to={"/projects"}
            className=" gap-2 items-center hover:text-green-500 transition-all ease-out hidden md:flex"
          >
            <GrProjects className="" />
            <li className="nav-link">Projects</li>
          </Link>
          <Link
            onClick={handleClick}
            to={"/contact"}
            className=" gap-2 items-center hover:text-green-500 transition-all ease-out hidden md:flex"
          >
            <PiPhoneDisconnectLight className="text-2xl" />
            <li className="nav-link">Contact</li>
          </Link>
          <div className=" gap-2 items-center hover:text-green-500 transition-all ease-out hidden md:flex">
            <RiSettingsLine className="text-2xl" />
            <Settings />
          </div>
        </ul>
        <div onClick={toggleMenu} className="block md:hidden">
          {openMenu ? (
            <IoCloseSharp size={20} />
          ) : (
            <RxHamburgerMenu size={20} />
          )}
        </div>

        <div
          className={
            openMenu
              ? "fixed bg-[#0F1924] p-5 h-full left-0 top-0 w-[60%] border-r border-r-gray-900 ease-in-out duration-500"
              : `fixed left-[-100%] h-full`
          }
        >
          <div className="">
            <Link to={"/"} className="font-bold flex text-2xl  ">
              <h1 className="flex">
                WEB <div className="text-green-500">DEV</div>
              </h1>
            </Link>
            <ul className="flex flex-col gap-4 mt-5">
              <Link
                onClick={handleClick}
                to={"/"}
                className=" gap-2 flex items-center hover:text-green-500 transition-all ease-out"
              >
                <RiHomeLine className="text-2xl " />
                <li className="nav-link">Home</li>
              </Link>
              <Link
                onClick={handleClick}
                to={"/about"}
                className=" gap-2 flex items-center hover:text-green-500 transition-all ease-out"
              >
                <PiUserList className="text-2xl " />
                <li className="nav-link">About</li>
              </Link>
              <Link
                onClick={handleClick}
                to={"/projects"}
                className=" ml-[px] gap-2 flex items-center hover:text-green-500 transition-all ease-out"
              >
                <GrProjects className="" />
                <li className="nav-link">Projects</li>
              </Link>
              <Link
                onClick={handleClick}
                to={"/contact"}
                className=" gap-2 flex items-center hover:text-green-500 transition-all ease-out"
              >
                <PiPhoneDisconnectLight className="text-2xl " />
                <li className="nav-link">Contact</li>
              </Link>
              <Link
                onClick={handleClick}
                to={"/contact"}
                className=" gap-2 flex items-center hover:text-green-500 transition-all ease-out"
              >
                <RiSettingsLine className="text-2xl " />
                <li className="nav-link">Settings</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
