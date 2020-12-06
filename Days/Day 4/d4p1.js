const fs = require('fs');
const lines = fs.readFileSync('input', { encoding: 'utf-8' }).split('\r\n\r\n');

const validFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
let validPassports = 0;

lines.forEach(line => {
    line = line.replace(/\r\n/g, ' ');
    const fields = line.split(' ');
    const fieldsToVerify = [];

    fields.forEach(field => fieldsToVerify.push(field.substring(0, field.indexOf(':'))));

    let allGood = true;

    validFields.forEach(validField => {
        if (!fieldsToVerify.includes(validField)) {
            allGood = false;
            return;
        }
    });

    if (allGood) validPassports++;
});

console.log('the answer is:', validPassports);
