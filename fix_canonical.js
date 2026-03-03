const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
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

const files = walk('./src/app/(public)');
let count = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('canonicalUrl:')) {
        content = content.replace(/canonicalUrl:/g, 'canonical:');
        fs.writeFileSync(file, content, 'utf8');
        count++;
        console.log(`Fixed canonical url in ${file}`);
    }
});

console.log(`Replaced canonicalUrl with canonical in ${count} files.`);
