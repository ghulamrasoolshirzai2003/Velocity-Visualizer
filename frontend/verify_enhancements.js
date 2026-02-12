const fs = require('fs');
const path = require('path');

const iconDataPath = './src/data/iconData.js';
const iconEnhancementsPath = './src/data/iconEnhancements.js';

console.log(`Checking icons...`);

try {
    const iconData = fs.readFileSync(iconDataPath, 'utf8');
    const iconEnhancements = fs.readFileSync(iconEnhancementsPath, 'utf8');

    // Extract IDs from iconData
    const idRegex = /id:\s*'([^']+)'/g;
    const iconIds = [];
    let match;
    while ((match = idRegex.exec(iconData)) !== null) {
        iconIds.push(match[1]);
    }

    // Extract keys from iconEnhancements
    const keyRegex = /'([^']+)':\s*{/g;
    const enhancementKeys = [];
    while ((match = keyRegex.exec(iconEnhancements)) !== null) {
        enhancementKeys.push(match[1]);
    }

    const missing = iconIds.filter(id => !enhancementKeys.includes(id));

    console.log(`Total Icons in Data: ${iconIds.length}`);
    console.log(`Total Enhancements: ${enhancementKeys.length}`);

    if (missing.length > 0) {
        console.log('MISSING_START');
        missing.forEach(id => console.log(id));
        console.log('MISSING_END');
    } else {
        console.log('All icons covered!');
    }

} catch (err) {
    console.error('Error:', err.message);
}
