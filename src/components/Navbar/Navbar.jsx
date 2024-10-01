import { NavLink } from "react-router-dom";
import { useGraphFetch } from "../../hooks/useGraphFetch";
import { allCategories } from "../../queries/allCategories";
import style from "./Navbar.module.scss";

export const Navbar = ({ isVisible }) => {
  const { data } = useGraphFetch(
    undefined,
    "VITE_PUBLIC_API_KEY",
    allCategories
  );

  return (
    <nav>
      <ul className={`${style.navStyling} ${isVisible ? style.visible : null}`}>
        <li>
          <NavLink to="/">Alle</NavLink>
        </li>
        {data?.kategoriers.map((item) => {
          return (
            <li key={item.id}>
              <NavLink to={`/category/${item.title}`}>{item.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
