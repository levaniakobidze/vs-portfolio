import React from "react";
import Container from "../../components/Container/Container";
import classes from "./Contact.module.css";
import x from "../../assets/x.svg";
import { useState } from "react";
import LeftSideBarCont from "../../components/LeftSideBarCont/LeftSideBarCont";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  /// GET CURRENT DATE
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  /// INPUT HANDLERS
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  return (
    <section className={classes.contact}>
      <Container className={classes.contact_container}>
        <div className={classes.left}>
          <LeftSideBarCont />
        </div>
        <div className={classes.right}>
          <div className={classes.top_bar}>
            {" "}
            <p
              className={classes.top_bar_contact}
              data-aos='fade-left'
              data-aos-duration='2000'>
              contacts <img src={x} alt='x' />
            </p>
          </div>
          <div className={classes.contact_cont}>
            <form className={classes.form}>
              <div className={classes.inputs_cont}>
                <div
                  className={classes.input_cont}
                  data-aos='fade-up'
                  data-aos-duration='500'>
                  <label htmlFor='name'>-name:</label>
                  <input
                    name='name'
                    type='text'
                    className={classes.name_input}
                    value={name}
                    onChange={nameChangeHandler}
                  />
                </div>
                <div
                  className={classes.input_cont}
                  data-aos='fade-up'
                  data-aos-duration='800'>
                  <label htmlFor='email'>_email:</label>
                  <input
                    name='email'
                    type='email'
                    className={classes.name_input}
                    value={email}
                    onChange={emailChangeHandler}
                  />
                </div>
                <div
                  className={classes.input_cont}
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  <label htmlFor='message'>message:</label>
                  <textarea
                    name='message'
                    id='message'
                    cols='30'
                    rows='10'
                    value={message}
                    onChange={messageChangeHandler}></textarea>
                </div>
                <div
                  className={classes.submit_button_cont}
                  data-aos='fade-up'
                  data-aos-duration='1000'
                  data-aos-offset='10'>
                  <button>submit-message</button>
                </div>
              </div>
            </form>
            <div
              className={classes.design}
              data-aos='fade-up'
              data-aos-duration='1000'>
              <div className={classes.design_main_cont}>
                <p className={classes.code}>
                  <p className={classes.line_num}> 1 </p>
                  <span className={classes.const}>const </span>
                  <span className={classes.variable}>button </span>
                  <span className={classes.equal}> = </span>
                  <span className={classes.value}>
                    document.quarySelector
                    <span className={classes.bracket}>(</span>
                    <span className={classes.string}>'#sendBtn'</span>
                    <span className={classes.bracket}>)</span>
                  </span>
                </p>
                <div className={classes.code}>
                  <p className={classes.line_num}>2 </p>
                </div>
                <div className={classes.code}>
                  <p className={classes.line_num}>3 </p>
                  <span className={classes.const}> const </span>
                  <span className={classes.variable}>message </span>
                  <span className={classes.equal}> = </span>
                  <span className={classes.bracket}> {"{"}</span>
                </div>
                <div className={classes.code}>
                  <p className={classes.line_num}>4 </p>
                  <span className={classes.value}>
                    name: <span className={classes.string}>"{name}"</span>,
                  </span>
                </div>
                <div className={classes.code}>
                  <p className={classes.line_num}>5 </p>
                  <span className={classes.value}>
                    email: <span className={classes.string}>"{email}"</span>,
                  </span>
                </div>
                <div className={classes.code}>
                  <p className={classes.line_num}>6 </p>
                  <span className={classes.value}>
                    message: <span className={classes.string}>"{message}"</span>
                    ,
                  </span>
                </div>
                <div className={classes.code}>
                  <p className={classes.line_num}>7 </p>
                  <span className={classes.value}>
                    date:{" "}
                    <span className={classes.string}>"{currentDate}"</span>,
                  </span>
                </div>
                <div className={classes.code}>
                  <p className={classes.line_num}>8 </p>
                  <span className={classes.bracket}>{"}"}</span>
                </div>
                <div className={classes.code}>
                  <p className={classes.line_num}>9 </p>
                </div>
                <div className={classes.code}>
                  <p className={classes.line_num}>10 </p>
                  <span className={classes.value}>
                    {" "}
                    button.addEventListener{" "}
                    <span className={classes.bracket}>(</span>
                    <span className={classes.string}>'click'</span>
                    <span className={classes.value}>,</span>{" "}
                    <span className={classes.bracket}>(</span>
                    <span className={classes.bracket}>)</span>{" "}
                    <span className={classes.equal}> =</span>
                    <span className={classes.equal}>{">"}</span>
                    <span className={classes.bracket}> {"{"}</span>
                  </span>
                </div>
                <div className={classes.code}>
                  <p className={classes.line_num}>11 </p>
                  <span className={classes.value}>
                    form.send<span className={classes.bracket}>(</span>message
                    <span className={classes.bracket}>)</span> ;
                  </span>
                </div>
                <div className={classes.code}>
                  <p className={classes.line_num}>12 </p>
                  <span className={classes.bracket}>{"}"}</span>
                  <span className={classes.bracket}>)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
