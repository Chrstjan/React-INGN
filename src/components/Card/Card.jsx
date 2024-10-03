import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import style from "./Card.module.scss";

export const Card = ({ data, hideReadMore, cardStyling, user, action }) => {
  return (
    <>
      {data?.slice(0, 9).map((item, index) => {
        const classIndex = (index % 9) + 1;
        return (
          <figure
            key={item.title}
            className={`${style.cardStyling} ${style[cardStyling]} ${style[`news-${classIndex}`]}`}
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
            <div className={style.thumbnailContainer}>
              <img
                className={style.thumbnailStyling}
                src={item.images[0].url}
                alt={item.title}
              />
            </div>
            {user ? (
              <span className={style.adminContainer}>
                <button onClick={() => action.mutate(item?.id)}>
                  <MdDelete />
                </button>
                <Link to={`/edit/${item.id}`}>
                  <FaEdit />
                </Link>
              </span>
            ) : null}
          </figure>
        );
      })}
    </>
  );
};
