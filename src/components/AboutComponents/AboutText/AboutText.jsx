import React from "react";
import classes from "./AboutText.module.css";
import github from "../../../assets/github.png";
import TypeIt from "typeit-react";

function AboutText() {
  return (
    <div
      className={classes.about_text}
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className={classes.text_cont}>
        <p className={classes.comment}>{"/**"}</p>
        <p className={classes.text}>
          <TypeIt
            options={{
              speed: 10,
            }}
          >
            Welcome to my corner of the digital world! I'm Levan Iakobidze, a
            passionate and dedicated Fullstack Developer with over a year of
            hands-on experience, backed by more than three years of continuous
            learning and growth. I specialize in React.js, Next.js, Node.js, and
            Express.js, crafting seamless and efficient web solutions. <br />
            <br /> In my journey, I've delved into the intricacies of databases,
            mastering both PostgreSQL and MongoDB. Handling data is not just
            about storage—it's about creating robust, scalable systems that
            empower applications to shine.
            <br />
            <br /> But my toolkit extends beyond code and databases. I navigate
            the containerized universe with ease, leveraging Docker to
            streamline development processes. Additionally, I've embraced the
            cloud, familiarizing myself with several AWS services to optimize
            performance and scalability.
            <br />
            <br /> What sets me apart is not just my technical prowess, but my
            unyielding commitment to personal and professional growth. I view
            every project as an opportunity to challenge myself, to learn, and
            to enhance my skills. I believe in the power of hard work and
            motivation, recognizing that the journey to becoming an exceptional
            developer is ongoing.
            <br />
            <br /> My primary goal is to build not just remarkable software but
            also a better version of myself as a developer. I thrive on
            challenges, embrace innovation, and approach every line of code with
            enthusiasm. I am not just a Fullstack Developer; I am a relentless
            pursuer of excellence.
          </TypeIt>
        </p>
        <p className={classes.comment}>{"/**"}</p>
      </div>
      <div className={classes.code_snippet}>
        <img src={github} alt="code" />
      </div>
    </div>
  );
}

export default AboutText;
