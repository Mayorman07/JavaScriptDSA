function checkCashRegister(price, cash, cid) {
  const theCurrencyUnits = [
    { name: "PENNY", value: 0.01 },
    { name: "NICKEL", value: 0.05 },
    { name: "DIME", value: 0.1 },
    { name: "QUARTER", value: 0.25 },
    { name: "ONE", value: 1 },
    { name: "FIVE", value: 5 },
    { name: "TEN", value: 10 },
    { name: "TWENTY", value: 20 },
    { name: "ONE HUNDRED", value: 100 }
  ];

  let theChangeDue = cash - price;
  let totalCID = cid.reduce((acc, curr) => acc + curr[1], 0);
  let change = [];

  if (theChangeDue === totalCID) {
    return { status: "CLOSED", change: cid };
  }

  if (theChangeDue > totalCID) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  for (let i = theCurrencyUnits.length - 1; i >= 0; i--) {
    const currencyName = theCurrencyUnits[i].name;
    const currencyValue = theCurrencyUnits[i].value;
    let currencyAmount = 0;

    while (theChangeDue >= currencyValue && cid[i][1] > 0) {
      currencyAmount += currencyValue;
      theChangeDue -= currencyValue;
      theChangeDue = parseFloat(theChangeDue.toFixed(2));
      cid[i][1] -= currencyValue;
    }

    if (currencyAmount > 0) {
      change.push([currencyName, currencyAmount]);
    }
  }

  if (theChangeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: change };
}