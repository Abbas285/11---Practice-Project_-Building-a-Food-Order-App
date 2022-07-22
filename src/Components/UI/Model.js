import React from "react";
import classs from "./Model.module.css";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className={classs.backdrop} onClick={props.closeback} />;
};
const ModelOverlay = (props) => {
  return (
    <div className={classs.modal}>
      <div className={classs.content}>{props.children}</div>
    </div>
  );
};
const portalElements = document.getElementById("modelroot");
const Model = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeback={props.onclose} />,
        portalElements
      )}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portalElements
      )}
    </>
  );
};

export default Model;
