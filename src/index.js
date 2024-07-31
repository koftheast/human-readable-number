module.exports = function toReadable (number) {
    const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    
    if (number === 0) return "zero";

    let result = "";


    if (Math.floor(number / 100) > 0) {
        result += ones[Math.floor(number / 100)] + " hundred";
    }

    let remainder = number % 100;


    if (remainder > 0) {
        if (result) result += " ";

        if (remainder < 10) {
            result += ones[remainder];
        } else if (remainder > 10 && remainder < 20) {
            result += teens[remainder - 10];
        } else {
            result += tens[Math.floor(remainder / 10)];
            if (remainder % 10 > 0) {
                result += " " + ones[remainder % 10];
            }
        }
    }

    return result;
}
  

  