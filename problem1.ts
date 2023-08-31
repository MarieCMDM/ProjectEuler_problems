let sum: number = 0;
for (let i = 0; i < 1000; i++) {
    if (isMultipleof(i, 3) || isMultipleof(i, 5)) {
        sum += i;
    }
}

console.log(sum);

function isMultipleof(num: number, mul: number): boolean {
    if ((num % mul ) == 0 ) {
        return true;
    } else {
        return false;
    }
}