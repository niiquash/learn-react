import React from "react";

const Contact = (props) => {
  return (
    <article className="contact-card">
      <img src={props.img} alt="Photo of Mrs Whiskerson" />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="../images/phone-call.png" alt="phone icon" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src="../images/email.png" alt="mail icon" />
        <p>{props.email}</p>
      </div>
    </article>
  );
};

export default Contact;
