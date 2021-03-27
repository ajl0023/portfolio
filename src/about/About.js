import React, { useEffect, useRef, useState } from "react";
import style from "./about.module.scss";
import { ReactComponent as Laptop } from "./images/laptop.svg";
import Prism from "prismjs";

const About = () => {
  const [content, setContent] = useState("");
  const svgRef = useRef();
  useEffect(() => {}, []);
  useEffect(() => {
    const trackSvg = (entries, observer) => {
      if (entries[0].isIntersecting) {
        const server = document.getElementById("server-text");
        const client = document.getElementById("client-text");
        var i = 0;
        var txt = `const app = express(); \n app.get('api/skills', (req,res) => { \n res.json(["React","Javascript", \n "nodeJS", "CSS", "HTML"])})`;
        var speed = 10;
        function serverAnimation() {
          if (i < txt.length) {
            setContent(server.innerHTML);
            server.innerHTML += txt.charAt(i);
            i++;
            const timeout = setTimeout(serverAnimation, speed);
            if (i === txt.length) {
              clearTimeout(timeout);
              i = 0;
              clientAnimation();
            }

            // txt = ``;
          }
        }

        function clientAnimation() {
          let txt = `const mySkills = await axios.get('/api/skills') console.log(mySkills.data)`;

          if (i < txt.length) {
            setContent(client.innerHTML);
            client.innerHTML += txt.charAt(i);

            i++;
            setTimeout(clientAnimation, speed);
          }
        }
        observer.disconnect();
        serverAnimation();
      }
    };
    let options = {
      threshold: [0.2],
    };
    let observer = new IntersectionObserver(trackSvg, options);
    observer.observe(svgRef.current);
  }, []);
  useEffect(() => {
    window.Prism.highlightAll();
  }, [content]);
  return (
    <div className={style["container"]}>
      <div className={style["color-container"]}></div>
      <div className={style["main-content"]}>
        <div className={style["code-editor-container"]}>
          <Laptop ref={svgRef} className={style["laptop-svg"]} />
          <div className={style["code-editor"]}>
            <div className={style["client-editor"]}>
              <div className={style["line-number-container"]}>
                <div className={style["line-container"]}>
                  <pre className={"line-numbers"}>
                    <code
                      id="client-text"
                      className={`language-js ${style[3]}`}

                      // className={style["code-line"]}
                    ></code>
                  </pre>
                </div>
              </div>
            </div>
            <div className={style["server-editor"]}>
              <div className={style["line-number-container"]}>
                {/* <div className={style["line-container"]}>
                  <pre className={"line-numbers"}>
                    <code
                      id="server-text"
                      className={`language-js ${style[3]}`}

                      // className={style["code-line"]}
                    ></code>
                  </pre>
                </div> */}
                <div className={style["line-container"]}>
                  <pre className={"line-numbers"}>
                    <code
                      id="server-text"
                      className={`language-js ${style[3]}`}

                      // className={style["code-line"]}
                    ></code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style["text-content"]}>
          {/* <div className={style["line-header"]}></div> */}
          <div className={style["text-container"]}>
            <h3 className={style["main-header"]}>Javascript developer</h3>{" "}
            <p className={style["description"]}>
              Hello, I'm Austin, a web developer with a primary focus in React.
              I'm confident in working with the various MERN stack technologies
              and I'm on a persistent journey in honing my craft in those
              fields.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
