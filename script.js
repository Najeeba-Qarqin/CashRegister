const cash = document.getElementById('cash');
const displayChangeDue = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');

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
    (money) => (displayChangeDue.innerHTML = displayChangeDue.innerHTML + `<p>${money[0]}: $${money[1]}</p>`),
  );
}

function checkRegister() {
  if (!cash.value) {
    displayChangeDue.innerText = '';
    return null;
  }

  const cashValue = parseFloat(cash.value);

  if (cashValue < price) {
    alert('Customer does not have enough money to purchase the item');
    cash.value = '';
    return true;
  }
  if (cashValue === price) {
    displayChangeDue.innerHTML = '<p>No change due - customer paid with exact cash</p>';
    cash.value = '';
    return true;
  }

  let changeDue = cashValue - price;
  const result = { status: 'OPEN', change: [] };
  const reverseCid = [...cid].reverse();
  const denominations = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  const totalCid = cid.reduce((total, denom) => total + denom[1], 0);

  if (totalCid < changeDue) {
    displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
    return true;
  }

  if (totalCid === changeDue) {
    result.status = 'CLOSED';
  }

  for (let i = 0; i < reverseCid.length; i += 1) {
    if (changeDue >= denominations[i] && changeDue > 0) {
      let count = 0;
      let total = reverseCid[i][1];
      while (total > 0 && changeDue >= denominations[i]) {
        total -= denominations[i];
        changeDue = parseFloat((changeDue - denominations[i]).toFixed(2));
        count += 1;
      }
      if (count > 0) {
        result.change.push([reverseCid[i][0], count * denominations[i]]);
      }
    }
  }

  if (changeDue > 0) {
    displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
    return true;
  }

  return formatResults(result.status, result.change);
}
purchaseBtn.addEventListener('click', checkRegister);