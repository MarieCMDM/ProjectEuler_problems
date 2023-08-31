var sum = 0;
for (var i = 0; i < 1000; i++) {
    if (isMultipleof(i, 3) || isMultipleof(i, 5)) {
        sum += i;
    }
}
console.log(sum);
function isMultipleof(num, mul) {
    if ((num % mul) == 0) {
        return true;
    }
    else {
        return false;
    }
}
