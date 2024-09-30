import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import style from "./Card.module.scss";

export const Card = ({ data, hideReadMore }) => {
  return (
    <>
      {data?.map((item) => {
        return (
          <figure key={item.title} className={style.cardStyling}>
            <header>
              <h2>{item.title}</h2>
              <p>
                D. {item.releaseDate} - af {item.author}
              </p>
            </header>
            <Markdown>{item.content}</Markdown>
            {hideReadMore ? null : (
              <Link to={`/article/${item.id}`}>Læs mere</Link>
            )}
            <img src={item.images[0].url} alt={item.title} />
          </figure>
        );
      })}
    </>
  );
};
