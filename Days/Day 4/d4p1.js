const fs = require('fs');
fs.readFile('input', (err, data) => solve(data.toString().split("\r\n\r\n")));

const validFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

function solve(array) {
    let validPassports = 0;

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i]
            .replace('\r\n', ' ')
            .replace(/\r|\n/g, ' ')
            .replace('  ', ' ')
            .trim()
            .replace('  ', ' ');

        let fields = array[i].split(' ');
        let keys = [];

        fields.forEach(field => keys.push(field.substring(0, field.indexOf(':'))));

        let allGood = true;

        for (let k=0; k<validFields.length; k++) {
            if (!keys.includes(validFields[k])) {
                allGood = false;
                break;
            }
        }

        if (allGood) validPassports++;
    }

    console.log('the answer is: ', validPassports);
}
