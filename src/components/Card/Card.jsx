import { Link } from "react-router-dom";
import Markdown from 'markdown-to-jsx'
import style from "./Card.module.scss";

export const Card = ({data}) => {
  return (
    <>
        {data?.map((item) => {
            return (
                <figure key={item.title} className={style.cardStyling}>
                 <header>
                    <h2>{item.title}</h2>
                    <p>D. {item.releaseDate} - af {item.author}</p>
                 </header>
                 <Markdown>{item.content.slice(0, 110) + (item.content.length > 20 ? '...' : '')}</Markdown>
                 <Link>Læs mere</Link>
                 <img src={item.images[0].url} alt={item.title}/>
                </figure>
            )
        })}
    </>
  )
}