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
            if (file.endsWith('page.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const pages = walk('./src/app/(public)');
let report = [];

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const hasMetadata = content.includes('export const metadata') || content.includes('export async function generateMetadata');
    const hasJsonLd = content.includes('application/ld+json');
    report.push({ file, hasMetadata, hasJsonLd });
});

console.log('--- Page SEO Audit ---');
report.forEach(r => console.log(`${r.file.padEnd(65)} | Metadata: ${r.hasMetadata ? 'YES' : 'NO '} | JSON-LD: ${r.hasJsonLd ? 'YES' : 'NO '}`));
