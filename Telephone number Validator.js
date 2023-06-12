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
