const fs = require('fs');
const content = fs.readFileSync('ts_errors_utf8.log', 'utf16le');
const lines = content.split('\n');
let count = 0;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('error TS') || lines[i].includes('page.tsx')) {
        console.log(lines[i].trim());
        count++;
        if (count > 20) break;
    }
}
