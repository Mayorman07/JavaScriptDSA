JAVASCRIPT DATA STRUCTURES AND ALGORITHMS



PROJECT 1

palindrome

function palindrome(str) {


let str = "A man, a plan, a canal. Panama";

let pattern = /[^a-z0-9]+/gi;
let algoOne = str.replace(pattern, "").toLowerCase();
let algoTwo = algoOne.split("").reverse().join("");
if (algoOne === algoTwo){
  return true;
} else {
  return false;
}

}


PROJECT TWO

Roman numerals


function convertToRoman(num) {
 const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 
          let roman = '';
          let i = 0

           while( num > 0){

           if(num >= arabicNumerals[i]){

           roman = roman += romanNumerals[i];
           num = num - arabicNumerals[i];

         }  else{
           i++
         }
       }
  
  return roman 
}

convertToRoman(36);



PROJECT THREE

Caesar Cipher

function rot13(str) {

let decryptedCipher = '';

for(let i = 0; i<str.length; i ++){
  let cipherCode = str.charCodeAt(i)

  if(cipherCode>=65 && cipherCode <=90){

    cipherCode = ((cipherCode +13 - 65) % 26) + 65;
  }

  decryptedCipher += String.fromCharCode(cipherCode);

}

return decryptedCipher;

}

rot13("SERR PBQR PNZC");




PROJECT FOUR 

Telephone number validator

function telephoneCheck(str) {
  const phoneRegexOne = /^1?\s?\d{3}\s\d{3}\s\d{4}$/;
  const phoneRegexTwo = /^1?\(\d{3}\)\d{3}-\d{4}$/;
  const phoneRegexThree = /^\(\d{3}\)\d{3}-\d{4}$/;
  const phoneRegexFour = /^\d{3}-\d{3}-\d{4}$/;
  const phoneRegexFive = /^\d{10}$/;
  const phoneRegexSix = /^1? \(\d{3}\) \d{3}-\d{4}$/;
  const phoneRegexSeven = /^1?\s?\d{3}-\d{3}-\d{4}$/;

  if (
    phoneRegexOne.test(str) ||
    phoneRegexTwo.test(str) ||
    phoneRegexThree.test(str) ||
    phoneRegexFour.test(str) ||
    phoneRegexFive.test(str) ||
    phoneRegexSix.test(str) ||
    phoneRegexSeven.test(str)
  ) {
    return true;
  } else {
    return false;
  }
}


PROJECT FIVE

Cash Register


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