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
        // Replace "https://ahsascab.com/..." with `${getBaseUrl()}/...`
        content = content.replace(/"https:\/\/ahsascab\.com([^"]*)"/g, '\\`${getBaseUrl()}$1\\`');

        // Ensure getBaseUrl is imported
        if (!content.includes("from '@/lib/url-utils'") && !content.includes('from "@/lib/url-utils"')) {
            // Find last import
            const importMatch = content.match(/import .* from ['"].*['"];?\n/g);
            if (importMatch) {
                const lastImport = importMatch[importMatch.length - 1];
                const index = content.lastIndexOf(lastImport) + lastImport.length;
                content = content.slice(0, index) + "import { getBaseUrl } from '@/lib/url-utils';\n" + content.slice(index);
            } else {
                content = "import { getBaseUrl } from '@/lib/url-utils';\n" + content;
            }
        }

        fs.writeFileSync(file, content, 'utf8');
        changed++;
        console.log('Fixed:', file);
    }
});
console.log('Total fixed:', changed);
