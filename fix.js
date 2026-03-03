const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(fullPath));
        } else {
            if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const files = walk('./src/app/(public)');
let changed = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('ahsascab.com')) {
        // Find things like canonicalUrl: 'https://ahsascab.com/about'
        content = content.replace(/canonical(?:Url)?:\s*['"`]https:\/\/ahsascab\.com\/?([^'"`]*)['"`]/g, "canonicalUrl: '/$1'");
        content = content.replace(/canonical:\s*['"`]https:\/\/ahsascab\.com\/?([^'"`]*)['"`]/g, "canonical: '/$1'");

        // Ensure / routes don't have trailing slash
        fs.writeFileSync(file, content, 'utf8');
        changed++;
        console.log('Fixed:', file);
    }
});
console.log('Total fixed:', changed);
