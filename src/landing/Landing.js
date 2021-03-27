import React, { useEffect, useRef } from "react";
import style from "./landing.module.scss";
import chatapp from "./projectphotos/chatapp.png";
import covidTracker from "./projectphotos/covidTracker.png";
import playlists from "./projectphotos/playlists.png";
import tesla from "./projectphotos/tesla-clone.png";
import readdit from "./projectphotos/readdit.png";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
} from "react-spring";

import { ReactComponent as GitIcon } from "./projectphotos/github.svg";
import { ReactComponent as HtmlIcon } from "./projectphotos/html5.svg";
import { ReactComponent as JsIcon } from "./projectphotos/javascript.svg";
import { ReactComponent as CssIcon } from "./projectphotos/css3.svg";
import { ReactComponent as ReactIcon } from "./projectphotos/react.svg";
import { ReactComponent as NodeIcon } from "./projectphotos/node.svg";
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
  // const springRef = useRef();
  // const { size, opacity, ...rest } = useSpring({
  //   ref: springRef,
  //   config: config.stiff,
  //   from: { size: "20%", background: "hotpink" },
  //   to: { size: true ? "100%" : "20%", background: true ? "white" : "hotpink" },
  // });
  // const transRef = useRef();
  // const transitions = useTransition(true ? techImages : [], (item) => item, {
  //   ref: transRef,
  //   unique: true,
  //   trail: 400 / techImages.length,
  //   from: { opacity: 0, transform: "scale(0)" },
  //   enter: { opacity: 1, transform: "scale(1)" },
  //   leave: { opacity: 0, transform: "scale(0)" },
  // });
  // useChain(true ? [springRef, transRef] : [transRef, springRef], [
  //   0,
  //   true ? 0.1 : 0.6,
  // ]);
  return (
    <div className={style["wrapper"]}>
      {/* <div className={style["tech-wrapper"]}></div> */}
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
            <div className={style["project-container"]}>
              <GitIcon className={style["git-icon"]} />
              <img src={chatapp} className={style["project-image"]} />
            </div>

            <div className={style["project-container"]}>
              {" "}
              <GitIcon className={style["git-icon"]} />
              <img src={covidTracker} className={style["project-image"]} />
            </div>
            <div className={style["project-container"]}>
              {" "}
              <GitIcon className={style["git-icon"]} />
              <img src={playlists} className={style["project-image"]} />
            </div>
            <div className={style["project-container"]}>
              {" "}
              <GitIcon className={style["git-icon"]} />
              <img src={playlists} className={style["project-image"]} />
            </div>
            <div className={style["project-container"]}>
              {" "}
              <GitIcon className={style["git-icon"]} />
              <img src={playlists} className={style["project-image"]} />
            </div>
            <div className={style["project-container"]}>
              {" "}
              <GitIcon className={style["git-icon"]} />
              {/* <img
                className={style["project-container"]}
                src=""
                className={style["project-image"]}
              /> */}
            </div>
          </div>
        </div>
        <div className={style["tech-wrapper"]}>
          <p className={style["tech-container-title"]}>
            Technologies used in these projects
          </p>
          <div className={style["tech-icon-container"]}>
            {/* {transitions.map(({ item, key, props }) => {
              <animated.div style={{ ...props }}></animated.div>;
            })} */}
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
