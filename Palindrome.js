
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