import { NavLink } from "react-router-dom";
import { Paths } from "../../router/Paths";
import style from "./Navbar.module.scss";

export const Navbar = ({isVisible}) => {
  const navMenu = [
    {
      path: Paths.home,
      text: "Alle",
    },
    {
      path: Paths.indland,
      text: "Indland",
    },
    {
      path: Paths.udland,
      text: "Udland",
    },
    {
      path: Paths.teknologi,
      text: "Teknologi",
    },
    {
      path: Paths.sports,
      text: "Sports",
    },
    {
      path: Paths.politik,
      text: "Politik",
    },
    {
      path: Paths.samfund,
      text: "Samfund",
    },
  ];

  return <nav>
    <ul className={`${style.navStyling} ${isVisible ? style.visible : null}`}>
      {navMenu.map((item) => {
        return (
          <li key={item.text}>
            <NavLink to={item.path}>{item.text}</NavLink>
          </li>
        )
      })}
    </ul>
  </nav>;
};
