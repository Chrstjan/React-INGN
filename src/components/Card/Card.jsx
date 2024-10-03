import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import style from "./Card.module.scss";

export const Card = ({ data, hideReadMore, cardStyling, user, action }) => {
  const [sortedArticles, setSortedArticles] = useState([]);
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

  const createGridArray = (articles) => {
    let newArray = [[]];

    articles.forEach((item, index) => {
      length = newArray.length;
      if ((index + 1) % 9) {
        newArray[length - 1].push(item);
      } else {
        newArray.push([]);
        newArray[length - 1].push(item);
      }
    });

    setSortedArticles(newArray);
    console.log("Sorted articles:", sortedArticles);
  };

  useEffect(() => {
    createGridArray(data);
  }, [data]);

  useEffect(() => {
    console.log("Sorted articles:", sortedArticles);
    
  }, [sortedArticles])

  return (
    <>
      {data?.map((item, index) => {
        const classIndex = (index % 9) + 1;
        console.log(classIndex);
        return (
          <figure
            key={item.title}
            className={`${style.cardStyling} ${style[cardStyling]}`}
            // style={{ gridArea: "news" + (index + 1) /* classIndex */ }}
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
