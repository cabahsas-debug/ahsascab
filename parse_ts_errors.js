const fs = require('fs');

if (fs.existsSync('ts_errors.log')) {
    const log = fs.readFileSync('ts_errors.log', 'utf8');
    const lines = log.split('\n');
    let errorFiles = new Set();

    lines.forEach(line => {
        if (line.includes('error TS')) {
            const match = line.match(/^([^:]+):/);
            if (match && match[1]) {
                errorFiles.add(match[1].trim());
            }
        }
    });

    console.log("Files with TypeScript errors:");
    errorFiles.forEach(file => console.log(file));
} else {
    console.log("No ts_errors.log found.");
}
