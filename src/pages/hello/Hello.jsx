import React from "react";
import Container from "../../components/Container/Container";
import classes from "./Hello.module.css";
import code from "../../assets/code_snippet.svg";
import green_light from "../../assets/green_light.svg";
import blue_light from "../../assets/blue_light.svg";
import TypeIt from "typeit-react";

function Hello() {
  return (
    <section className={classes.hello}>
      <Container className={classes.hello_container}>
        <div className={classes.left}>
          <div className={classes.personal_info}>
            <p className={classes.greetings}>Hi all. I am</p>
            <h1 className={classes.name}>Levan Iakobidze</h1>
            <TypeIt
              options={{
                speed: 100,
                waitUntilVisible: true,
                loop: true,
              }}
              className={classes.profession}
            >
              {">"} Full-Stack developer
            </TypeIt>
          </div>
          <div className={classes.below_text}>
            <p className={classes.comment}>{"// find my profile on Github:"}</p>
            <span className={classes.github_link_cont}>
              <span className={classes.const}>const </span>
              <span className={classes.variable}>githubLink</span>
              <span className={classes.equal}> = </span>
              <a
                className={classes.value}
                href="https://github.com/levaniakobidze"
                target="_blank"
                rel="noreferrer"
              >
                <TypeIt
                  options={{
                    speed: 300,
                    waitUntilVisible: true,
                  }}
                >
                  "https://github.com/levaniakobidze"
                </TypeIt>
              </a>
            </span>
          </div>
        </div>
        <div className={classes.right}>
          <img
            data-aos="fade-up"
            data-aos-duration="500"
            className={classes.blur1}
            src={code}
            alt="code"
          />
          <img
            data-aos="fade-up"
            data-aos-duration="800"
            className={classes.middle}
            src={code}
            alt="code"
          />
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            className={classes.blur2}
            src={code}
            alt="code"
          />
          <img
            data-aos="fade-up"
            className={classes.green_light}
            src={green_light}
            alt="light"
          />
          <img
            data-aos="fade-up"
            className={classes.blue_light}
            src={blue_light}
            alt="light"
          />
        </div>
      </Container>
    </section>
  );
}

export default Hello;
