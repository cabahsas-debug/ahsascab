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

    // Only revert in files that use our custom constructMetadata function
    if (content.includes('constructMetadata(')) {
        // Revert canonical: '/path' back to canonicalUrl: '/path'
        if (content.includes('canonical:')) {
            content = content.replace(/canonical:/g, 'canonicalUrl:');
            fs.writeFileSync(file, content, 'utf8');
            count++;
            console.log(`Reverted canonical to canonicalUrl in ${file}`);
        }
    }
});

console.log(`Fixed constructMetadata arguments in ${count} files.`);
