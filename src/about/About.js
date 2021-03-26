import React, { useEffect, useState } from "react";
import style from "./about.module.scss";
import { ReactComponent as Laptop } from "./images/laptop.svg";
import Prism from "prismjs";

const About = () => {
  const [content, setContent] = useState("");
  //   useEffect(() => {
  //     const line1 = document.getElementById("client-1");
  //     var i = 0;
  //     var txt = "const app = express();";
  //     var speed = 50;
  //     function typeWriter() {
  //       if (i < txt.length) {
  //         setContent(line1.innerHTML);
  //         line1.innerHTML += txt.charAt(i);
  //         i++;
  //         setTimeout(typeWriter, speed);
  //       }
  //     }
  //     typeWriter();
  //   }, []);
  const code = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`.trim();
  useEffect(() => {
    console.log(12);
    setTimeout(() => Prism.highlightAll(), 1000);
  }, [content]);
  return (
    <div className={style["container"]}>
      <div className={style["color-container"]}></div>
      <div className={style["main-content"]}>
        <div className={style["code-editor-container"]}>
          <Laptop className={style["laptop-svg"]} />
          <div className={style["code-editor"]}>
            <div className={style["client-editor"]}>
              <div className={style["line-number-container"]}>
                <div className={style["line-container"]}>
                  <li className={style["line-number"]}>1</li>
                  <span className={style["code-line "]}>
                    const skills = await axios.get('/api/skills')
                  </span>
                </div>
                <div className={style["line-container"]}>
                  <li className={style["line-number"]}>2</li>
                  <span className={style["code-line"]}>
                    console.log(skills)
                  </span>
                </div>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
              </div>
            </div>
            <div className={style["server-editor"]}>
              <div className={style["line-number-container"]}>
                <div className={style["line-container"]}>
                  <li className={style["line-number"]}>1</li>
                  <code
                    id="client-1"
                    className="language-js"

                    // className={style["code-line"]}
                  >
                    {code}
                  </code>
                </div>
                <div className={style["line-container"]}>
                  <li className={style["line-number"]}>2</li>
                  <span className={style["code-line"]}>
                    {`app.get('api/skills', (req,res) =>`}
                  </span>
                </div>
                <div className={style["line-container"]}>
                  <li className={style["line-number"]}>3</li>
                  <span className={style["code-line"]}>
                    {`res.json(["React","Javascript", "nodeJS",`}
                  </span>
                </div>

                <div className={style["line-container"]}>
                  <li className={style["line-number"]}>4</li>
                  <span
                    className={style["code-line"]}
                  >{`"CSS", "HTML"]))`}</span>
                </div>
                <li>5</li>
                <li>6</li>
              </div>
            </div>
          </div>
        </div>

        <div className={style["text-content"]}>
          <div className={style["line-header"]}></div>
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
