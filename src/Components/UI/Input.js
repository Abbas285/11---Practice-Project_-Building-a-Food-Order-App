import React, { forwardRef } from "react";
import classs from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  // const inputref = useRef();
  // const getInputValue = () => {
  //   return inputref.current.value;
  // };
  // useImperativeHandle(ref, () => {
  //   return {
  //     getInputValue,
  //   };
  // });

  return (
    <div className={classs.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
