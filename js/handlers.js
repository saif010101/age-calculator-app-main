import { toggleErrorState } from "./helpers.js";

const CURRENT_YEAR = new Date().getFullYear();

export const handleInputChange = (inputBox, category) => {
  let UPPER_LIMIT = null;
  let LOWER_LIMIT = null;

  // decide which type of category we are dealing with
  if (category === "day") {
    UPPER_LIMIT = 31;
    LOWER_LIMIT = 1;
  } else if (category === "month") {
    UPPER_LIMIT = 12;
    LOWER_LIMIT = 1;
  } else {
    UPPER_LIMIT = CURRENT_YEAR;
    LOWER_LIMIT = 1970;
  }

  // fetch current value
  const inputValue = inputBox.value;

  // if input box is empty don't do anything
  if (!inputValue.length) {
    toggleErrorState(inputBox, false);
    return;
  }

  inputValue < LOWER_LIMIT || inputValue > UPPER_LIMIT
    ? toggleErrorState(inputBox, true)
    : toggleErrorState(inputBox, false);
};

export const handleInvalidDate = (dayInput, monthInput, yearInput) => {
  // fetch error message elements

  const dayErrorMessage = dayInput.nextElementSibling;
  const monthErrorMessage = monthInput.nextElementSibling;
  const yearErrorMessage = yearInput.nextElementSibling;

  // we are calling these handler functions to indicate error
  //  then we will overwrite the message

  const emptyFieldMsg = "This field is required";
  const validDateMsg = "Must be a valid date";

  dayErrorMessage.textContent = !dayInput.value.length
    ? emptyFieldMsg
    : validDateMsg;

  monthErrorMessage.textContent = !monthInput.value.length ? emptyFieldMsg : "";
  yearErrorMessage.textContent = !yearInput.value.length ? emptyFieldMsg : "";

  toggleErrorState(dayInput, true);
  toggleErrorState(monthInput, true);
  toggleErrorState(yearInput, true);
};
