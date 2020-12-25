const fs = require('fs');
const lines = fs.readFileSync('input/day7', { encoding: 'utf-8' }).split('\r\n');

let result = 0;
const bags = [];

lines.forEach(line => {
    const container = line.substr(line.indexOf('contain')+8, line.indexOf('.')).split(', ');
    const canContain = [];

    container.forEach(contain => {
        canContain.push({
            amount: contain.charAt(0),
            name: contain.substr(contain.indexOf(' ')+1, contain.indexOf('bag')-3),
        });
    });

    bags.push({
        name: line.substr(0, line.indexOf('bags')-1),
        canContain,
    });
});

let validBagNames = new Set(['shiny gold']);

// todo: learn how to solve this properly
for (let i = 0; i < 10; i++) {
    bags.forEach(bag => {
        let bagHasShiny = false;

        bag.canContain.forEach(bag => {
            if (validBagNames.has(bag.name)) bagHasShiny = true;
        });

        if (bagHasShiny) validBagNames.add(bag.name);
    });
}

bags.forEach(bag => {
    let bagIsValid = false;
    bag.canContain.forEach(bag => {
        if (validBagNames.has(bag.name)) bagIsValid = true; return;
    });

    if (bagIsValid) result++;
});

console.log('part 1 - the answer is: ' + result);
