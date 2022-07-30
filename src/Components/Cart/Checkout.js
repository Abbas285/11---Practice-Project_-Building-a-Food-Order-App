import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const Checkpout = (props) => {
  const [validation, setvalidation] = useState({
    name: false,
    street: false,
    city: false,
    postalcode: false,
  });
  const nameref = useRef();
  const streetref = useRef();
  const postref = useRef();
  const cityref = useRef();
  const isEmpty = (value) => value.trim() !== "";
  const isEqual = (value) => value.length === 5;

  const confirmHandler = (event) => {
    event.preventDefault();
    const username = nameref.current.value;
    const street = streetref.current.value;
    const postal = postref.current.value;
    const cityvalue = cityref.current.value;

    const isusernameEmpty = !isEmpty(username);
    const isstreetaddress = !isEmpty(street);
    const ispostallength = !isEqual(postal);
    const iscityaddress = !isEmpty(cityvalue);

    setvalidation({
      name: isusernameEmpty,
      street: isstreetaddress,
      city: iscityaddress,
      postalcode: ispostallength,
    });

    let formvalid = false;
    if (isusernameEmpty && isstreetaddress && ispostallength && iscityaddress) {
      formvalid = true;
    }
    if (formvalid) {
      return;
    }
    props.onConfirm({
      name: username,
      street,
      city: cityvalue,
      postalCode: postal,
    });
  };

  const nameclasscheck = `${classes.control} ${
    validation.name ? classes.invalid : ""
  }`;
  const cityclasscheck = `${classes.control} ${
    validation.city ? classes.invalid : ""
  }`;
  const postalclasscheck = `${classes.control} ${
    validation.postalcode ? classes.invalid : ""
  }`;
  const streetclasscheck = `${classes.control} ${
    validation.street ? classes.invalid : ""
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameclasscheck}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameref} />
        {validation.name && <p>name must not be empty</p>}
      </div>
      <div className={streetclasscheck}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetref} />
        {validation.street && <p>street address must not empty</p>}
      </div>
      <div className={postalclasscheck}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postref} />
        {validation.postalcode && <p>postal code must must be 5</p>}
      </div>
      <div className={cityclasscheck}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityref} />
        {validation.city && <p>city name must not empty</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default Checkpout;
