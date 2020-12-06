const fs = require('fs');
const lines = fs.readFileSync('input', { encoding: 'utf-8' }).split('\r\n');

let validLines = 0;

lines.forEach(line => {
  const min = line.substring(0, line.indexOf('-'));
  const max = line.substring(line.indexOf('-') + 1, line.indexOf(' '));
  const char = line.substring(line.indexOf(' ') + 1, line.indexOf(':'));
  const pwd = line.substring(line.indexOf(':') + 2, line.length);

  let count = 0;

  [...pwd].forEach(c => {
    if (c === char) count++;
  });

  if (count >= min && count <= max) validLines++;
});

console.log('the answer is:', validLines);