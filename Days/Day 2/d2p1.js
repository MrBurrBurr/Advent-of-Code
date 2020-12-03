const fs = require('fs');
fs.readFile('input', (err, data) => work(data.toString().split("\r\n")));

function work(array) {
  let validLines = 0;

  for (i=0; i<array.length; i++) {
    const line = array[i];
    const min = line.substring(0, line.indexOf('-'));
    const max = line.substring(line.indexOf('-')+1, line.indexOf(' '));
    const char = line.substring(line.indexOf(' ')+1, line.indexOf(':'));
    const pwd = line.substring(line.indexOf(':')+2, line.length);
    
    if (!pwd.includes(char)) continue;
    
    let count = 0;
    
    for(j=0; j<pwd.length; j++) {
      if (pwd[j] !== char) continue;
      count++;
    }
    
    if (count >= min && count <= max) validLines++;
  }

  console.log('the answer is: ', validLines)
}