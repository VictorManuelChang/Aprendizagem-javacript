const nums = [1, 2, 3, 4, 5, 6];


for (let num of nums) {
    if (num === 2) {
        console.log('Pulei o 2');
        continue;
    }

    if(num === 5) {
        break;
    }

    console.log(num);
}