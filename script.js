const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");

function handleClick(event) {
  const selectedPeriod = event.target.id;
  const periods = ['daily', 'weekly', 'monthly'];

  periods.forEach((period) => {
    const elements = document.querySelectorAll(`.${period}`);
    if (period === selectedPeriod) {
      elements.forEach((element) => element.classList.remove("hide"));
      event.target.classList.add("selected");
    } else {
      elements.forEach((element) => element.classList.add("hide"));
      document.querySelector(`#${period}`).classList.remove("selected");
    }
  });
}

daily.addEventListener("click", handleClick);
weekly.addEventListener("click", handleClick);
monthly.addEventListener("click", handleClick);

