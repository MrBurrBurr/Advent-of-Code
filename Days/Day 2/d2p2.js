const fs = require('fs');
fs.readFile('input', (err, data) => work(data.toString().split("\r\n")));

function work(array) {
  let validLines = 0;
  
  for (i = 0; i < array.length; i++) {
    const line = array[i];
    const first = line.substring(0, line.indexOf('-'));
    const last = line.substring(line.indexOf('-') + 1, line.indexOf(' '));
    const char = line.substring(line.indexOf(' ') + 1, line.indexOf(':'));
    const pwd = line.substring(line.indexOf(':') + 2, line.length);

    //-1 because Toboggan Corporate Policies have no concept of "index zero"!
    const firstRule = (pwd[first - 1] === char) ? true : false;
    const lastRule = (pwd[last - 1] === char) ? true : false;

    if (firstRule && lastRule) continue;
    if (firstRule || lastRule) validLines++;
  }

  console.log('the answer is: ', validLines)
}
