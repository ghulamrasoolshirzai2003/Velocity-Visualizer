import bcrypt from 'bcryptjs';
import db from '../config/db.js';

const UserModel = {
    // Create new user
    create: async (name, email, password) => {
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const stmt = db.prepare(`
                INSERT INTO users (name, email, password_hash)
                VALUES (?, ?, ?)
            `);

            const result = stmt.run(name, email, hashedPassword);

            return {
                id: result.lastInsertRowid,
                name,
                email
            };
        } catch (err) {
            if (err.message.includes('UNIQUE constraint failed')) {
                throw new Error('Email already exists');
            }
            throw err;
        }
    },

    // Find user by email
    findByEmail: (email) => {
        const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
        return stmt.get(email);
    },

    // Find user by ID
    findById: (id) => {
        const stmt = db.prepare('SELECT id, name, email, created_at FROM users WHERE id = ?');
        return stmt.get(id);
    },

    // Verify password
    verifyPassword: async (plainPassword, hashedPassword) => {
        return await bcrypt.compare(plainPassword, hashedPassword);
    },

    // Update user
    update: (id, updates) => {
        const fields = [];
        const values = [];

        if (updates.name) {
            fields.push('name = ?');
            values.push(updates.name);
        }
        if (updates.email) {
            fields.push('email = ?');
            values.push(updates.email);
        }

        if (fields.length === 0) {
            return { id };
        }

        fields.push('updated_at = CURRENT_TIMESTAMP');
        values.push(id);

        const stmt = db.prepare(`UPDATE users SET ${fields.join(', ')} WHERE id = ?`);
        const result = stmt.run(...values);

        return { id, changes: result.changes };
    },

    // Delete user
    delete: (id) => {
        const stmt = db.prepare('DELETE FROM users WHERE id = ?');
        const result = stmt.run(id);

        return { deleted: result.changes > 0 };
    }
};

export default UserModel;
