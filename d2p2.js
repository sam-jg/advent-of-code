const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('./d2input.txt')
});

let output = 0;
rl.on('line', line => {
    const lineList = line.split('\t').map(Number);
    lineList.forEach(number => {
        lineList.forEach(twoNumber => {
            if (number !== twoNumber && number % twoNumber === 0) {
                output += number / twoNumber;
            }
        });
    });
});

rl.on('close', () => {
    console.log(output);
});