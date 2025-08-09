import { toggleErrorState, isDateValid } from "./helpers.js";
import { handleInvalidDate, handleInputChange } from "./handlers.js";

const inputs = document.querySelector(".inputs");
const calculateBtn = document.querySelector(".logo");
const ageSection = document.querySelector(".age");
const dayInput = inputs.querySelector('[data-category="day"]');
const monthInput = inputs.querySelector('[data-category="month"]');
const yearInput = inputs.querySelector('[data-category="year"]');


const writeAge = (duration) => {
  const years = ageSection.querySelector(".years");
  const months = ageSection.querySelector(".months");
  const days = ageSection.querySelector(".days");

  years.textContent = 0;
  months.textContent = 0;
  days.textContent = 0;

  const CALCULATION_TIME = 500; // total time taken while calculating age in milliseconds
  const YEARS_DELAY = CALCULATION_TIME / duration.years; // ms delay / year
  const MONTHS_DELAY = CALCULATION_TIME / duration.months; // ms delay / month
  const DAYS_DELAY = CALCULATION_TIME / duration.days; // ms delay / day

  const yearID = setInterval(() => {
    years.textContent = Number(years.textContent) + 1;
    if (Number(years.textContent) === duration.years) clearInterval(yearID);
  }, YEARS_DELAY);

  const monthID = setInterval(() => {
    months.textContent = Number(months.textContent) + 1;
    if (Number(months.textContent) === duration.months) clearInterval(monthID);
  }, MONTHS_DELAY);

  const dayID = setInterval(() => {
    days.textContent = Number(days.textContent) + 1;
    if (Number(days.textContent) === duration.days) clearInterval(dayID);
  }, DAYS_DELAY);

};

// Event Listeners
dayInput.addEventListener("input", () => {
  handleInputChange(dayInput, "day");
});

monthInput.addEventListener("input", () => {
  handleInputChange(monthInput, "month");
});

yearInput.addEventListener("input", () => {
  handleInputChange(yearInput, "year");
});

calculateBtn.addEventListener("click", () => {
  // retrive user input
  const dateOfBirth = {
    userDay: dayInput.value,
    userMonth: monthInput.value,
    userYear: yearInput.value,
  };

  const userDate = `${dateOfBirth["userYear"]}-${dateOfBirth["userMonth"]}-${dateOfBirth["userDay"]}`;
  const userDateObj = new Date(userDate);

  // if date is invalid
  if (isNaN(userDateObj) || !isDateValid(dateOfBirth)) {
    handleInvalidDate(dayInput, monthInput, yearInput);
    return;
  } else {
    toggleErrorState(dayInput, false);
    toggleErrorState(monthInput, false);
    toggleErrorState(yearInput, false);
  }

  const currDate = new Date();
  const duration = dateFns.intervalToDuration({
    start: userDateObj,
    end: currDate,
  });

  // write data to the age section
  writeAge(duration);
});
