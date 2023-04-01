import classes from "./CheckOut.module.css";
import { useRef, useState } from "react";

const checkValid = (data) => data.trim().length !== 0;
const checkFiveLength = (data) => data.trim().length === 5;

const CheckOut = (props) => {
  const [isValidFormData, setIsValidFormData] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const postalCodeRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredCity = cityRef.current.value;
    const enteredPostalCode = postalCodeRef.current.value;

    const enteredNameValid = checkValid(enteredName);
    const enteredStreetValid = checkValid(enteredStreet);
    const enteredCityValid = checkValid(enteredCity);
    const enteredPostalCodeValid = checkFiveLength(enteredPostalCode);

    setIsValidFormData({
      name: enteredNameValid,
      street: enteredStreetValid,
      city: enteredCityValid,
      postalCode: enteredPostalCodeValid,
    });

    const formValid =
      enteredNameValid &&
      enteredStreetValid &&
      enteredCityValid &&
      enteredPostalCodeValid;

    if (!formValid) return;

    props.onSubmit({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const nameClass = isValidFormData.name
    ? classes.checkoutForms
    : `${classes.checkoutForms} ${classes.invalid}`;
  const streetClass = isValidFormData.street
    ? classes.checkoutForms
    : `${classes.checkoutForms} ${classes.invalid}`;
  const postalCodeClass = isValidFormData.postalCode
    ? classes.checkoutForms
    : `${classes.checkoutForms} ${classes.invalid}`;
  const cityClass = isValidFormData.city
    ? classes.checkoutForms
    : `${classes.checkoutForms} ${classes.invalid}`;

  return (
    <form className={classes.checkoutTotalFrame} onSubmit={confirmHandler}>
      <div className={nameClass}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!isValidFormData.name && (
          <p className={classes.nameError}>Please input correct Name</p>
        )}
      </div>
      <div className={streetClass}>
        <label htmlFor="Street">Street</label>
        <input type="text" id="Street" ref={streetRef} />
        {!isValidFormData.street && (
          <p className={classes.nameError}>Please input correct street </p>
        )}
      </div>
      <div className={postalCodeClass}>
        <label htmlFor="Postal">Postal Code</label>
        <input type="text" id="Postal" ref={postalCodeRef} />
        {!isValidFormData.postalCode && (
          <p className={classes.nameError}>Please input correct postalCode</p>
        )}
      </div>
      <div className={cityClass}>
        <label htmlFor="City">City</label>
        <input type="text" id="City" ref={cityRef} />
        {!isValidFormData.city && (
          <p className={classes.nameError}>Please input correct city</p>
        )}
      </div>
      <div className={classes.checkout_buttons}>
        <button
          className={classes.checkout_button_close}
          type="button"
          onClick={props.onClose}
        >
          Cancel
        </button>
        <button className={classes.checkout_button_order}>Confirm</button>
      </div>
    </form>
  );
};
export default CheckOut;
