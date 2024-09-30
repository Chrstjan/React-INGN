import style from "./FooterLinks.module.scss";

export const FooterLinks = ({header, title, linkOne, linkTwo, linkThree, linkFour}) => {
  return (
    <section className={style.linkStyling}>
        <h4>{header}</h4>
        {title ? <p>{title}</p> : null}
        <p>{linkOne}</p>
        <p>{linkTwo}</p>
        <p>{linkThree}</p>
        {linkFour ? <p>{linkFour}</p>: null}
    </section>
  )
}