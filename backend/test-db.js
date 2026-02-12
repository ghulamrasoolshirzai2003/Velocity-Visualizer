// Test script to verify database and signup functionality
import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import bcrypt from 'bcryptjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbPath = join(__dirname, 'data', 'velocity_visualizer.db');
console.log('📁 Database path:', dbPath);

try {
    const db = new Database(dbPath);

    // Check if users table exists
    const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
    console.log('\n📊 Tables in database:', tables.map(t => t.name));

    // Check users table schema
    const usersSchema = db.prepare("PRAGMA table_info(users)").all();
    console.log('\n👤 Users table schema:', usersSchema);

    // Try to create a test user
    const testEmail = 'test@example.com';
    const testPassword = 'test123';
    const hashedPassword = await bcrypt.hash(testPassword, 10);

    try {
        const insert = db.prepare('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)');
        const result = insert.run('Test User', testEmail, hashedPassword);
        console.log('\n✅ Test user created successfully:', result);

        // Clean up
        db.prepare('DELETE FROM users WHERE email = ?').run(testEmail);
        console.log('🧹 Test user deleted');
    } catch (err) {
        console.error('\n❌ Error creating test user:', err.message);
    }

    db.close();
    console.log('\n✅ Database test completed');
} catch (error) {
    console.error('\n❌ Database error:', error);
}
