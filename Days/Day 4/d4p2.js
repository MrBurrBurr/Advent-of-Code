const fs = require('fs');
fs.readFile('input', (err, data) => solve(data.toString().split("\r\n\r\n")));

const validFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
const validEyeColors = new Set(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']);

function solve(array) {
    let validPassports = 0;

    for (let i = 0; i < array.length; i++) {
        const line = array[i]
            .replace('\r\n', ' ')
            .replace(/\r|\n/g, ' ')
            .replace('  ', ' ')
            .trim()
            .replace('  ', ' ');

        const fields = line.split(' ').map(field => field.split(':'));

        let keys = [];
        fields.forEach(field => keys.push(field[0]));

        let hasAllFields = true;
        for (let k=0; k<validFields.length; k++) {
            if (!keys.includes(validFields[k])) hasAllFields = false;
        }

        let allFieldsValid = true;
        let fieldValid = true;
        for (let u = 0; u < fields.length; u++) {
            fieldValid = true;
            const field = fields[u][0];
            const value = fields[u][1];

            switch (field) {
                case 'byr':
                    if (value.length !== 4) fieldValid = false;
                    if (value < 1920 || value > 2002) fieldValid = false;
                    break;

                case 'iyr':
                    if (value.length !== 4) fieldValid = false;
                    if (value < 2010 || value > 2020) fieldValid = false;
                    break;

                case 'eyr':
                    if (value.length !== 4) fieldValid = false;
                    if (value < 2020 || value > 2030) fieldValid = false;
                    break;

                case 'hgt':
                    const type = value.substr(value.length - 2, value.length);
                    const num = parseInt(value.substr(0, value.length - 2));
                    if (type === 'cm' && (num < 150 || num > 193)) fieldValid = false;
                    if (type === 'in' && (num < 59 || num > 76)) fieldValid = false;
                    break;

                case 'hcl':
                    if (!/^#[a-f0-9]{6}$/.test(value) ) fieldValid = false;
                    break;

                case 'ecl':
                    if (!validEyeColors.has(value)) fieldValid = false;
                    break;

                case 'pid':
                    if (!/^\d{9}$/.test(value)) fieldValid = false;
                    break; 
            }

            if (!fieldValid) allFieldsValid = false;
        }

        if (hasAllFields && allFieldsValid) validPassports++; //console.log(line)
    }

    console.log('the answer is: ', validPassports);
}
