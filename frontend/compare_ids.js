const fs = require('fs');

const ids = fs.readFileSync('icon_ids.txt', 'utf8').split('\n').filter(l => l.includes('id:')).map(l => {
    const m = l.match(/id: '([^']+)'/);
    return m ? m[1] : null;
}).filter(id => id !== null);

const keys = fs.readFileSync('enhancement_keys.txt', 'utf16le').split('\n').filter(l => l.includes(': {')).map(l => {
    // PowerShell redirection might use UTF-16LE, let's check
    const m = l.match(/'([^']+)':/);
    return m ? m[1] : null;
}).filter(k => k !== null);

// If keys is empty, try reading as utf8
let keysFinal = keys;
if (keysFinal.length === 0) {
    const keysRaw = fs.readFileSync('enhancement_keys.txt', 'utf8');
    const keys2 = keysRaw.split('\n').filter(l => l.includes(': {')).map(l => {
        const m = l.match(/'([^']+)':/);
        return m ? m[1] : null;
    }).filter(k => k !== null);
    keysFinal = keys2;
}

const missing = ids.filter(id => !keysFinal.includes(id));

console.log(`IDs: ${ids.length}`);
console.log(`Keys: ${keysFinal.length}`);
console.log('--- MISSING ---');
missing.forEach(id => console.log(id));
console.log('--- END ---');
