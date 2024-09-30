import style from "./Footer.module.scss";

export const Footer = ({children}) => {
  return (
    <footer className={style.footerStyling}>
        {children}
    </footer>
  )
}