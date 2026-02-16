const fs = require('fs');
try {
    const content = fs.readFileSync('build.log', 'utf8');

    // Keywords to search for
    const keywords = ['Error:', 'Failed to compile', 'Module not found', 'Can\'t resolve'];

    let found = false;
    for (const keyword of keywords) {
        const index = content.indexOf(keyword);
        if (index !== -1) {
            console.log(`--- FOUND "${keyword}" AT INDEX ${index} ---`);
            // Print 500 chars before and 2000 after
            const start = Math.max(0, index - 500);
            const end = Math.min(content.length, index + 2500);
            console.log(content.substring(start, end));
            found = true;
            break;
        }
    }

    if (!found) {
        console.log('--- NO ERROR KEYWORDS FOUND, PRINTING LAST 5000 CHARS ---');
        console.log(content.slice(-5000));
    }
} catch (e) {
    console.error(e);
}
