let biggestPrimeNumber = 0;

for (let index = 2; index <= 50; index +=1) {
    let isPrime = true

    for (let divider = 2; divider < index; divider +=1) {
        if(index % divider === 0) {
            isPrime = false
        }
    }
    if (isPrime) {
        biggestPrimeNumber = index;
    }
}
console.log(biggestPrimeNumber);
