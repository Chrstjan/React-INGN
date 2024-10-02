import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import style from "./Card.module.scss";

export const Card = ({ data, hideReadMore, cardStyling }) => {
  return (
    <>
      {data?.map((item) => {
        return (
          <figure
            key={item.title}
            className={`${style.cardStyling} ${style[cardStyling]}`}
          >
            <div className={style.textContainer}>
              <header>
                <img
                  className={style.headerImage}
                  src={item.images[0].url}
                  alt={item.title}
                />
                <h2>{item.title}</h2>
                <p>
                  D. {item.releaseDate} - af {item.author}
                </p>
              </header>
              <figcaption>
                <span>
                  <Markdown>{item.content}</Markdown>
                  {hideReadMore ? null : (
                    <Link to={`/article/${item.id}`}>Læs mere</Link>
                  )}
                </span>
              </figcaption>
            </div>
            <div>
              <img
                className={style.thumbnailStyling}
                src={item.images[0].url}
                alt={item.title}
              />
            </div>
          </figure>
        );
      })}
    </>
  );
};
