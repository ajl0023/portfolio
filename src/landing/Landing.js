import React, { useEffect } from "react";
import style from "./landing.module.scss";
import chatapp from "./projectphotos/chatapp.png";
import covidTracker from "./projectphotos/covidTracker.png";
import { ReactComponent as CssIcon } from "./projectphotos/css3.svg";
import { ReactComponent as GitIcon } from "./projectphotos/github.svg";
import { ReactComponent as HtmlIcon } from "./projectphotos/html5.svg";
import { ReactComponent as JsIcon } from "./projectphotos/javascript.svg";
import { ReactComponent as NodeIcon } from "./projectphotos/node.svg";
import playlists from "./projectphotos/playlists.png";
import { ReactComponent as ReactIcon } from "./projectphotos/react.svg";
import readdit from "./projectphotos/readdit.png";
import tesla from "./projectphotos/tesla-clone.png";
import portfolio from "./projectphotos/portfolio.png";
import { Link } from "react-router-dom";
const Landing = () => {
  const techImages = [
    {
      image: <ReactIcon className={style["tech-icon"]} />,
      name: "React",
    },
    { image: <JsIcon className={style["tech-icon"]} />, name: "Js ES6" },
    {
      image: <NodeIcon className={style["tech-icon"]} />,
      name: "Node",
    },
    {
      image: <HtmlIcon className={style["tech-icon"]} />,
      name: "Html",
    },
    {
      image: <CssIcon className={style["tech-icon"]} />,
      name: "Css",
    },
  ];
  useEffect(() => {
    const containerTarget = document.getElementsByClassName(
      style["image-container"]
    )[0];
    containerTarget.childNodes.forEach((ele, i) => {
      ele.style.opacity = 1;
      ele.style.transition = `opacity ${
        1 + i / 6
      }s cubic-bezier(0.5, 0, 0, 1.5) 0s`;
    });
  }, []);
  return (
    <div className={style["wrapper"]}>
      <div className={style["center-container"]}>
        <div className={style["container"]}>
          <div className={style["text-container"]}>
            <h1 className={style["main-title"]}>
              Hi, I'm <span>Austin</span>
            </h1>
            <h4 className={style["description"]}>
              Here are some of my projects I've been working on.
            </h4>
          </div>
          <div className={style["image-container"]}>
            <Link
              to={{
                pathname: "https://github.com/ajl0023/chatApp",
              }}
              target="_blank"
              className={style["project-container"]}
            >
              <GitIcon className={style["git-icon"]} />
              <img src={chatapp} className={style["project-image"]} />
            </Link>
            <Link
              to={{
                pathname: "https://github.com/ajl0023/Covid-tracker",
              }}
              target="_blank"
              className={style["project-container"]}
            >
              {" "}
              <GitIcon className={style["git-icon"]} />
              <img src={covidTracker} className={style["project-image"]} />
            </Link>
            <Link
              to={{
                pathname: "https://github.com/ajl0023/readit",
              }}
              target="_blank"
              className={style["project-container"]}
            >
              {" "}
              <GitIcon className={style["git-icon"]} />
              <img src={readdit} className={style["project-image"]} />
            </Link>
            <Link
              to={{
                pathname: "https://github.com/ajl0023/spotifyPlaylists",
              }}
              target="_blank"
              className={style["project-container"]}
            >
              {" "}
              <GitIcon className={style["git-icon"]} />
              <img src={playlists} className={style["project-image"]} />
            </Link>
            <Link
              to={{
                pathname: "https://github.com/ajl0023/tesla-clone",
              }}
              target="_blank"
              className={style["project-container"]}
            >
              {" "}
              <GitIcon className={style["git-icon"]} />
              <img src={tesla} className={style["project-image"]} />
            </Link>
            <Link
              to={{
                pathname: "https://github.com/ajl0023/portfolio",
              }}
              target="_blank"
              className={style["project-container"]}
            >
              {" "}
              <GitIcon className={style["git-icon"]} />
              <img
                src={portfolio}
                className={`${style["project-image"]} ${style["portfolio-image"]}`}
              />
            </Link>
          </div>
        </div>
        <div className={style["tech-wrapper"]}>
          <p className={style["tech-container-title"]}>
            Technologies used in these projects
          </p>
          <div className={style["tech-icon-container"]}>
            {techImages.map((img) => {
              return (
                <div className={style["icon-container"]}>
                  {img.image}
                  <p className={style["icon-label"]}>{img.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
