const currency_one_input = document.getElementById('currency-one');
const rate1 = document.getElementById('amount-one');
const currency_two_input = document.getElementById('currency-two');
const rate2 = document.getElementById('amount-two');
const rateText = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
  const currency_one = currency_one_input.value;
  const currency_two = currency_two_input.value;
  fetch("https://open.exchangerate-api.com/v6/latest")
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currency_two] / data.rates[currency_one];
      rateText.innerText = `Current Rate : "1 ${currency_one} = ${rate} ${currency_two}"`;
      rate2.value = (rate1.value * (rate)).toFixed(2);
    });
}

currency_one_input.addEventListener('change', calculate);
rate1.addEventListener('input', calculate);
currency_two_input.addEventListener('change', calculate);
rate2.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currency_one_input.value;
  currency_one_input.value = currency_two_input.value;
  currency_two_input.value = temp;
  calculate();
});

calculate();