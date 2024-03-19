// function FizzBuzz(num) {
//     switch (num) {
//         case num % 3 === 0:
//             return 'Fizz'
//         case num % 5 === 0:
//             return 'Buzz'
//         case num % 3 === 0 && num % 5 === 0:
//             return 'FizzBuzz';
//         case num % 3 !== 0 && num % 5 !== 0:
//             return num;
//     }
//     console.log(num);
// }

function fizzBuzz(num) {
    if (typeof num !== 'number') return NaN;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 == 0) return 'Buzz';
    else return num;
}

console.log('a', fizzBuzz('a'));

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}