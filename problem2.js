let a = 1;
let b = 1;
let sum = 0;
let next = 0;

while ( next < 4000000 ) {
    next= a + b;
    if (next < 4000000) {
        a = b;
        b = next;
        if (( b % 2) == 0) {
            sum += b
        }
    }
    
}

console.log(sum)