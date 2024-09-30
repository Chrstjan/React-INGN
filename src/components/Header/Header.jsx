import { useState } from "react"
import style from "./Header.module.scss"

export const Header = ({children, setisVisible}) => {
    
    const handleNavbar = () => {
        setisVisible(prev => !prev);
    }

  return (
    <header className={style.headerStyling}>
        <h1>INGN</h1>
        {children}
        <span className={style.imageContainer}>
            <img src="./src/assets/images/user.svg" />
            <img onClick={() => handleNavbar()} src="./src/assets/images/Hamburger.svg" />
        </span>
    </header>
  )
}