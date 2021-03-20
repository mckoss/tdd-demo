export { numberToEnglish }

const digits = ["zero", "one", "two",
"three", "four", "five", "six", "seven",
"eight", "nine"];

const teens = ["eleven", "twelve", "thirteen",
    "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen"];

const decades = ["ten", "twenty", "thirty",
    "forty", "fifty", "sixty", "seventy",
    "eighty", "ninety"];

// Convert number to english language equivalent.
function numberToEnglish(n) {
    if (n < 10) {
        return digits[n];
    }

    if (n == 10) {
        return "ten";
    }

    if (n < 20) {
        return teens[n - 11];
    }

    let tens = Math.floor(n / 10);
    let units = n - 10 * tens;
    if (units === 0) {
        return decades[tens - 1];
    }
    return decades[tens - 1] + " " + digits[units];
}