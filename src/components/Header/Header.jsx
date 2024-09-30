import { useState } from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = ({ children, setisVisible }) => {
  const handleNavbar = () => {
    setisVisible((prev) => !prev);
  };

  return (
    <header className={style.headerStyling}>
      <Link to={"/"}>
        <h1>INGN</h1>
      </Link>
      {children}
      <span className={style.imageContainer}>
        <img src="./src/assets/images/user.svg" />
        <img
          onClick={() => handleNavbar()}
          src="./src/assets/images/Hamburger.svg"
        />
      </span>
    </header>
  );
};
