import style from "./Wrapper.module.scss"

export const Wrapper = ({children}) => {
  return (
    <section className={style.wrapperStyling}>{children}</section>
  )
}