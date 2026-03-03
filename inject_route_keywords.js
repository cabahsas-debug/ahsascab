const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src/data/pricing.json');
const pricing = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const genericIntent = [
    "book online", "cheap transport", "affordable taxi", "VIP transfer", "luxury ride", "private cab",
    "reliable transportation", "family van hire", "group travel bus", "24/7 service",
    "instant confirmation booking", "whatsapp reservation", "safe pilgrim travel", "executive chauffeur"
];

const vehicles = [
    "GMC Yukon XL", "Hyundai Staria VIP", "Toyota Camry sedan", "Toyota Hiace bus",
    "luxury SUV rental", "7 seater family van", "11 passenger minibus", "premium VIP car"
];

const umrahSpecific = [
    "pilgrim transport", "umrah taxi company", "certified drivers", "ihram friendly",
    "saudi transport agency", "hajj cab service", "english speaking driver"
];

function generateKeywords(route) {
    const keywords = new Set(route.seo.keywords);

    const isZiyarat = route.slug.includes('ziyarat');
    const isAirport = route.slug.includes('airport') || route.slug.includes('jeddah-hotel');

    const parts = route.name.split(' to ');
    const origin = parts[0] ? parts[0].replace(' Hotel', '') : route.name;
    const dest = parts[1] ? parts[1].replace(' Hotel', '') : "Saudi Arabia";

    // Core permutations
    const baseTerms = [
        `${origin} to ${dest} taxi`,
        `taxi from ${origin} to ${dest}`,
        `${origin} to ${dest} fare`,
        `how much is taxi from ${origin} to ${dest}`,
        `book cab ${origin}`,
        `transportation to ${dest}`,
        `private car ${origin} to ${dest}`,
    ];

    baseTerms.forEach(term => keywords.add(term));

    genericIntent.forEach(intent => {
        keywords.add(`${intent} ${origin}`);
        keywords.add(`${origin} to ${dest} ${intent}`);
    });

    vehicles.forEach(vehicle => {
        keywords.add(`${vehicle} ${origin} to ${dest}`);
        keywords.add(`rent ${vehicle} in ${dest}`);
    });

    umrahSpecific.forEach(term => {
        keywords.add(`${term} ${origin} to ${dest}`);
    });

    if (isZiyarat) {
        ["historical tour", "islamic landmarks", "cave hira", "mount uhud", "masjid quba", "private guide", "ziyarat package", "jabal thawr", "qiblatayn", "seven mosques"].forEach(z => {
            keywords.add(`${z} ${origin}`);
            keywords.add(`${origin} ${z} taxi`);
        });
    }

    if (isAirport) {
        ["airport transfer", "meet and greet", "terminal pickup", "KAIA", "MED", "airport dropoff"].forEach(a => {
            keywords.add(`${origin} ${a}`);
            keywords.add(`${a} to ${dest}`);
        });
    }

    return Array.from(keywords);
}

pricing.routes.forEach(route => {
    const numBefore = route.seo.keywords.length;
    route.seo.keywords = generateKeywords(route);
    console.log(`Route [${route.slug}]: Expanded from ${numBefore} to ${route.seo.keywords.length} keywords.`);
});

fs.writeFileSync(dataPath, JSON.stringify(pricing, null, 4));
console.log("Successfully injected 100+ keywords into every route in pricing.json!");
