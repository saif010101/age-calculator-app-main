const MONTHS = [
  { name: "january", days: 31 },
  { name: "february", days: 28 },
  { name: "march", days: 31 },
  { name: "april", days: 30 },
  { name: "may", days: 31 },
  { name: "june", days: 30 },
  { name: "july", days: 31 },
  { name: "august", days: 31 },
  { name: "september", days: 30 },
  { name: "october", days: 31 },
  { name: "november", days: 30 },
  { name: "december", days: 31 },
];


export const isDateValid = ({userDay,userMonth,userYear}) => {
  // if the day of the date provided exceed the number of days
  // in the given month then it is an invalid date
  if (userDay > MONTHS[userMonth - 1].days) return false;

  return true;
};

export const toggleErrorState = (inputBox, toAdd) => {

  const inputLabel = inputBox.previousElementSibling;
  const messageElement = inputBox.nextElementSibling;

  if (toAdd) {
    inputBox.classList.add("invalid");
    inputLabel.classList.add("invalid");
    messageElement.classList.add("visible");
  } else {
    inputBox.classList.remove("invalid");
    inputLabel.classList.remove("invalid");
    messageElement.classList.remove("visible");
  }
};



