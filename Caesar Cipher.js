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