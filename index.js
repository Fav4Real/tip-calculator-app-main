const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");
const customInput = document.getElementById("custom-input");
const btn5 = document.getElementById("btn-5");
const btn10 = document.getElementById("btn-10");
const btn15 = document.getElementById("btn-15");
const btn25 = document.getElementById("btn-25");
const btn50 = document.getElementById("btn-50");
const tipPerPersonText = document.getElementById("tip-per-person-text");
const totalPerPersonText = document.getElementById("total-per-person-text");
const errorMessage = document.getElementById("error-message");
const resetBtn = document.getElementById("reset-btn");

// billInput.addEventListener('input', )

// IF BILLVALUE !== TRUE
// iF PEOPLEVALUE !== TRUE

function calculate(per) {
  if (!billInput.value || !peopleInput.value) {
    errorMessage.style.display = "block";
  } else {
    let tipPerPerson =
      (Number(billInput.value) * per) / Number(peopleInput.value);
    tipPerPersonText.textContent = `$${tipPerPerson.toFixed(2)}`;

    let totalPerson = Number(billInput.value) * per;
    totalPerPersonText.textContent = `$${totalPerson.toFixed(2)}`;

    resetBtn.disabled = false;
  }
}

btn5.addEventListener("click", function () {
  calculate(0.05);
});

btn10.addEventListener("click", function () {
  calculate(0.1);
});

btn15.addEventListener("click", function () {
  calculate(0.15);
});

btn25.addEventListener("click", function () {
  calculate(0.25);
});

btn50.addEventListener("click", function () {
  calculate(0.5);
});

resetBtn.addEventListener("click", function () {
  tipPerPersonText.textContent = "$0.00";
  totalPerPersonText.textContent = "$0.00";
  billInput.value = "";
  peopleInput.value = "";
});
