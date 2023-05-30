import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MdLanguage } from "react-icons/md";
import { RxChevronRight, RxChevronDown } from "react-icons/rx";
import { useLanguage } from "../context/languageCtx";

const Navbar = () => {
  const { language, translate, setLanguage } = useLanguage();

  const [navbar, setNavbar] = useState(false);
  const [menuItems, setMenuItems] = useState(false);

  const menuRef = useRef(null);
  const menuContainerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.prevScroll = window.pageYOffset;

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    //esconde el menu
    let currentScroll = window.pageYOffset;
    if (e.currentTarget.prevScroll > currentScroll && window.innerWidth > 725) {
      menuContainerRef.current.style.top = "0";
    } else if (window.innerWidth > 725) {
      menuContainerRef.current.style.top = "-105px";
    }
    e.currentTarget.prevScroll = currentScroll;
    //pone/saca fondo al menu
    if (window.pageYOffset > 50) {
      menuRef.current.classList.replace("md:bg-transparent", "md:bg-darkDrop");
    } else {
      menuRef.current.classList.replace("md:bg-darkDrop", "md:bg-transparent");
    }
  };

  const handleMenu = (e) => {
    setNavbar((el) => !el);
    setMenuItems((el) => !el);
  };

  return (
    <div className="menu md:p-4" ref={menuContainerRef}>
      <menu
        className="md:rounded-3xl md:opacity-80 dark:md:opacity-95 md:bg-transparent bg-darkOld px-4 md:px-[4rem] lg:px-[7rem] md:py-4"
        ref={menuRef}
      >
        <div className="navbar bg-transparent">
          <div
            className={`hamburg group ${navbar ? "change" : ""}`}
            onClick={handleMenu}
          >
            <div className="bar1 group-hover:bg-naranja"></div>
            <div className="bar2 group-hover:bg-naranja"></div>
            <div className="bar3 group-hover:bg-naranja"></div>
          </div>
          <div className="w-full flex justify-end md:w-auto md:block  md:justify-start text-naranja md:text-naranja">
            <Link
              className="home hover:bg-transparent text-[1.3rem] md:text-[2rem]"
              href="/"
            >
              ARCA
            </Link>
          </div>
          <div
            className={`menu-items text-dark md:text-light dark:text-light dark:bg-darkDrop bg-light md:bg-transparent md:gap-6 ${
              menuItems ? "is-active" : ""
            }`}
          >
            <Link
              href="#porque"
              className="hover:bg-marcosFinos hover:md:bg-transparent hover:md:text-naranja dark:hover:md:text-naranja dark:hover:text-naranja dark:hover:bg-darkDropHov py-4"
              onClick={handleMenu}
            >
              {translate[language].porque}
            </Link>
            <Link
              href="#servicios"
              className="hover:bg-marcosFinos hover:md:bg-transparent hover:md:text-naranja dark:hover:md:text-naranja dark:hover:text-naranja dark:hover:bg-darkDropHov py-4"
              onClick={handleMenu}
            >
              {translate[language].servicios}
            </Link>
            <Link
              href="#como"
              className="hover:bg-marcosFinos hover:md:bg-transparent hover:md:text-naranja dark:hover:md:text-naranja dark:hover:text-naranja dark:hover:bg-darkDropHov py-4"
              onClick={handleMenu}
            >
              {translate[language].como}
            </Link>
            <Link
              href="#equipo"
              className="hover:bg-marcosFinos hover:md:bg-transparent hover:md:text-naranja dark:hover:md:text-naranja dark:hover:text-naranja dark:hover:bg-darkDropHov py-4"
              onClick={handleMenu}
            >
              {translate[language].equipo}
            </Link>
            <Link
              href="#hablemos"
              className="hover:bg-marcosFinos hover:md:bg-transparent hover:md:text-naranja dark:hover:md:text-naranja dark:hover:text-naranja dark:hover:bg-darkDropHov py-4"
              onClick={handleMenu}
            >
              {translate[language].hablemos}
            </Link>
            <Dropdown
              setNavbar={setNavbar}
              setMenuItems={setMenuItems}
              setLang={setLanguage}
            />
          </div>
        </div>
      </menu>
    </div>
  );
};

export default Navbar;

function Dropdown({ setNavbar, setMenuItems, setLang }) {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown((el) => !el);
  };

  const handleMenu = (e) => {
    setLang(e.currentTarget.textContent.toLowerCase());
    localStorage.setItem("arcaLang", e.currentTarget.textContent.toLowerCase());
    setNavbar((el) => !el);
    setMenuItems((el) => !el);
    setDropdown((el) => !el);
  };

  return (
    <>
      <div className="h-full" onClick={handleDropdown}>
        <div
          className="dropdown-items h-full flex items-center justify-between md:text-light hover:bg-marcosFinos md:hover:bg-transparent hover:md:text-naranja dark:hover:text-naranja dark:hover:bg-darkDropHov !px-8 md:!px-0"
          href="/"
        >
          <MdLanguage size={23} />
          {!dropdown ? (
            <RxChevronRight size={23} />
          ) : (
            <RxChevronDown size={23} />
          )}
        </div>
      </div>
      <div
        className={`md:bg-light dark:bg-darkDrop dark:md:bg-darkDrop text-dark dark:text-light md:absolute md:top-[60px] md:right-[60px] md:w-60 md:rounded md:drop-shadow-lg h-auto ${
          dropdown
            ? "dark:md:border dark:md:border-darkDropHov flex flex-col items-center justify-center"
            : "hidden"
        }`}
      >
        <div
          className={`dropdown-items w-full flex items-center justify-center hover:bg-marcosFinos dark:hover:bg-darkDropHov dark:hover:text-naranja py-4`}
          onClick={handleMenu}
        >
          Español
        </div>
        <div
          className={`dropdown-items w-full flex items-center justify-center hover:bg-marcosFinos dark:hover:bg-darkDropHov dark:hover:text-naranja py-4`}
          onClick={handleMenu}
        >
          English
        </div>
        <div
          className={`dropdown-items w-full flex items-center justify-center hover:bg-marcosFinos dark:hover:bg-darkDropHov dark:hover:text-naranja py-4`}
          onClick={handleMenu}
        >
          Português
        </div>
        <div
          className={`dropdown-items w-full h-full flex items-center justify-center hover:bg-marcosFinos dark:hover:bg-darkDropHov dark:hover:text-naranja py-4`}
          onClick={handleMenu}
        >
          Italiano
        </div>
      </div>
    </>
  );
}
