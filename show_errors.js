const fs = require('fs');
const content = fs.readFileSync('ts_errors_utf8.log', 'utf16le');
const lines = content.split('\n');
lines.forEach(line => {
    if (line.includes('error TS') || line.includes('page.tsx')) {
        console.log(line.trim());
    }
});
