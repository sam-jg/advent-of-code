const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('./d2input.txt')
});

let output = 0;
rl.on('line', line => {
    const lineList = line.split('\t').map(Number);
    const min = Math.min.apply(null, lineList);
    const max = Math.max.apply(null, lineList);
    output += (max - min);
});

rl.on('close', () => {
    console.log(output);
});
