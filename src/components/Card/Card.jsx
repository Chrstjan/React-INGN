import { useEffect } from "react";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import style from "./Card.module.scss";

export const Card = ({ data, hideReadMore, cardStyling, user, action }) => {
  // const desktopGrid = [
  //   style.news1,
  //   style.news2,
  //   style.news3,
  //   style.news4,
  //   style.news5,
  //   style.news6,
  //   style.news7,
  //   style.news8,
  //   style.news9,
  // ];

  // const createGridArray = (_arr) => {
  //   let newArray = [[]];

  //   _arr.forEach((item, index) => {
  //     length = newArray.length;
  //     if ((index + 1) % 9) {
  //       newArray[length - 1].push(item);
  //     } else {
  //       newArray.push([]);
  //       newArray[length - 1].push(item);
  //     }
  //   });

  //   console.log(newArray);
  // };

  // useEffect(() => {
  //   createGridArray(data);
  // }, [data]);

  return (
    <>
      {data?.slice(0, 9).map((item, index) => {
        return (
          <figure
            key={item.title}
            className={`${style.cardStyling} ${style[cardStyling]}`}
            // style={{ gridArea: "news" + (index + 1) }}
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
                <button>
                  <FaEdit />
                </button>
              </span>
            ) : null}
          </figure>
        );
      })}
    </>
  );
};
