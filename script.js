const cash = document.getElementById("cash");
const displayChangeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

const price = 1.87;
const cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
];

cash.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    purchaseBtn.click();
  }
});

function formatResults(status, change) {
  displayChangeDue.innerHTML = `<p>Status: ${status}</p>`;
  change.forEach(
    money => (displayChangeDue.innerHTML += `<p>${money[0]}: $${money[1]}</p>`)
  );
}

function checkRegister() {
  if (!cash.value) {
    displayChangeDue.innerText = '';
    return null;
  }

  const cashValue = parseFloat(cash.value);

}
