import React from "react";
import workingManImage from "../assets/working-man.png";
import "../styles/pages/_Contact.scss";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-banner">
        <img src={workingManImage} alt="working man" />
      </div>

      <div className="contact-container">
        <div className="contact-header">
          <h1>КОНТАКТИ</h1>
        </div>

        <div className="contact-content">
          <div className="contact-card">
            <div className="contact-card-inner">
              <h2>телефони</h2>
              <p>+380986032592</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-inner">
              <h2>адреса офісів</h2>
              <p>
                69035, Запорізька обл., м. Запоріжжя, вул. Незалежної України,
                буд. 68А, прим. 26
              </p>
              <p>електронна пошта: info@th-capitalmarket.com</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-inner">
              <h2>години роботи</h2>
              <p>Пн-Пт: 9:00 - 18:00</p>
              <p>Сб-Нд: Вихідний</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
