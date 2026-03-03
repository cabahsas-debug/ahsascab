const fs = require('fs');
const path = require('path');

const fleetDir = './src/app/(public)/fleet';
const targets = [
    { dir: 'toyota-camry', id: 'camry' },
    { dir: 'toyota-hiace', id: 'hiace' },
    { dir: 'toyota-coaster', id: 'coaster' },
    { dir: 'hyundai-starex', id: 'starex' }
];

targets.forEach(target => {
    const pagePath = path.join(fleetDir, target.dir, 'page.tsx');
    if (fs.existsSync(pagePath)) {
        let content = fs.readFileSync(pagePath, 'utf8');

        // Check if already injected
        if (content.includes('OtherFleetSEO')) {
            console.log(`Skipping ${target.dir}: already injected.`);
            return;
        }

        // Add import statement after dynamic
        content = content.replace(
            "import dynamic from 'next/dynamic';",
            "import OtherFleetSEO from '@/components/fleet/OtherFleetSEO';\nimport dynamic from 'next/dynamic';"
        );

        // Inject the component before the 360 viewer section placeholder
        const injectionTarget = "{/* 360 Interior Preview (Placeholder) */}";
        const injectionCode = `            {/* 1000+ Word SEO Injection */}\n            <OtherFleetSEO vehicleId="${target.id}" />\n\n            `;

        content = content.replace(injectionTarget, injectionCode + injectionTarget);

        fs.writeFileSync(pagePath, content, 'utf8');
        console.log(`Successfully injected SEO into ${target.dir}`);
    } else {
        console.log(`Could not find ${pagePath}`);
    }
});
