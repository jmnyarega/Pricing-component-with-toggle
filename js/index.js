const annually = document.getElementById("annually");
const monthly = document.getElementById("monthly");
const target = document.getElementById("dot");

const basic = document.getElementById("amount-basic");
const professional = document.getElementById("amount-professional");
const master = document.getElementById("amount-master");

const radio = document.getElementById("radio");

const prices = {
  annually: ["199.99", "249.99", "399.99"],
  monthly: ["19.99", "24.99", "39.99"],
};

window.onload = function () {
  basic.innerHTML = prices.annually[0];
  professional.innerHTML = prices.annually[1];
  master.innerHTML = prices.annually[2];
};

annually.addEventListener("change", (evt) => to_monthly(evt));
monthly.addEventListener("change", (evt) => to_yearly(evt));

function to_yearly() {
  target.style.transform = "translateX(0)";
  target.style.transition = "all ease-in-out 350ms";

  basic.innerHTML = prices.annually[0];
  professional.innerHTML = prices.annually[1];
  master.innerHTML = prices.annually[2];

  annually.checked = false;
  monthly.checked = true;
}

function to_monthly() {
  target.style.transform = "translateX(2.5rem)";
  target.style.transition = "all ease-in-out 350ms";

  basic.innerHTML = prices.monthly[0];
  professional.innerHTML = prices.monthly[1];
  master.innerHTML = prices.monthly[2];

  annually.checked = true;
  monthly.checked = false;
}

radio.addEventListener("click", function () {
  const year = annually.checked;
  const month = monthly.checked;

  !(year || month) && to_monthly();
  year && to_yearly();
  month && to_monthly();
  /*
   * &&, ??
   */

  console.log(annually.checked, monthly.checked);
});
