import React from "react";
import classs from "./Card.module.css";
const Card = (props) => {
  return <div className={classs.card}>{props.children}</div>;
};
export default Card;
