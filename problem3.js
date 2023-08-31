let input_num = 600851475143;
let primes = [];
let prime_factors = [];

function generate_primes_until(top) {
    for (let i = 2; i <= top/2; i++) {
        let div = i-1;
        primes.push(i);
        while ( div > 1) {    
            if ((i % div) == 0) {
                primes.pop(i);
                break;
            }
            div = div - 1;
        }
    }
}

async function generate_prime_factors(input_num) {
    let result = input_num;
    let i = 0;
    do {
        if ((result % primes[i]) == 0) {
            result = (result / primes[i]);
            prime_factors.push(primes[i]);
            i = 0;
        } else {
            i++;
        }
        console.log(result);
    } while (result != 1)
}

generate_primes_until(input_num);
generate_prime_factors(input_num);
console.log(prime_factors);