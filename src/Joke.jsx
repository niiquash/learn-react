import React from "react";

const Joke = (props) => {
  return (
    <section className="joke-card">
      {props.setup && <h2>{props.setup}</h2>}
      <p>{props.punchline}</p>
    </section>
  );
};

export default Joke;
