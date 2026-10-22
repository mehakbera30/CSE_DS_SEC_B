let num = 153;
let original = num;

// Count digits
let temp = num;
let digits = 0;

while (temp > 0) {
    digits++;
    temp = Math.floor(temp / 10);
}

// Calculate Armstrong sum
temp = num;
let sum = 0;

while (temp > 0) {
    let digit = temp % 10;
    sum = sum + Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
}

if (sum === original) {
    console.log("Armstrong number");
} else {
    console.log("Not an Armstrong number");
}