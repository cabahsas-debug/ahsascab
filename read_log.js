const fs = require('fs');
const content = fs.readFileSync('ts_errors_utf8.log', 'utf16le');
console.log(content.slice(0, 2000));
