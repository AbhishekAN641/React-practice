import React from "react";
import styles from "./Contact.module.css";
import Button from "./Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Anshu");
  const [email, setEmail] = useState("Anshu");
  const [text, setText] = useState("Anshu");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutLine={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor=""> NAME</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor=""> EMAIL</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text"> TEXT</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/Service 24_7-pana 1.svg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
