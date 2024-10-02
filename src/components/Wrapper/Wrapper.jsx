import style from "./Wrapper.module.scss";

export const Wrapper = ({ children, gridStyling }) => {
  return (
    <section className={`${style.wrapperStyling} ${style[gridStyling]}`}>
      {children}
    </section>
  );
};
