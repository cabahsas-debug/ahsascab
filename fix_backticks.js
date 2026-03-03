const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = [...walk('./src/app/(public)'), ...walk('./src/components')];
let count = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace escaped \` with proper `
    content = content.split('\\`').join('`');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        count++;
        console.log(`Fixed syntax in ${file}`);
    }
});

console.log(`Fixed backticks in ${count} files.`);
