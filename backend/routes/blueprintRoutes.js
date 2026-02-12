import express from 'express';
import db from '../config/db.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// All blueprint routes require authentication
router.use(authMiddleware);

// GET all blueprints for authenticated user
router.get('/blueprints', async (req, res) => {
    try {
        const userId = req.user.id; // From auth middleware

        const stmt = db.prepare(
            'SELECT id, name, user_id, created_at, updated_at FROM blueprints WHERE user_id = ? ORDER BY updated_at DESC'
        );
        const rows = stmt.all(userId);

        res.json(rows);
    } catch (error) {
        console.error('Error fetching blueprints:', error);
        res.status(500).json({ error: 'Failed to fetch blueprints' });
    }
});

// GET single blueprint by ID
router.get('/blueprints/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        const stmt = db.prepare('SELECT * FROM blueprints WHERE id = ? AND user_id = ?');
        const row = stmt.get(id, userId);

        if (!row) {
            return res.status(404).json({ error: 'Blueprint not found' });
        }

        res.json(row);
    } catch (error) {
        console.error('Error fetching blueprint:', error);
        res.status(500).json({ error: 'Failed to fetch blueprint' });
    }
});

// POST create new blueprint
router.post('/blueprints', async (req, res) => {
    try {
        console.log('📝 Creating blueprint - Request body:', req.body);
        console.log('👤 User from auth middleware:', req.user);

        const { name, jsonData } = req.body;
        const userId = req.user?.id; // From auth middleware

        if (!userId) {
            console.error('❌ No user ID found in request');
            return res.status(401).json({
                error: 'Unauthorized',
                message: 'User not authenticated'
            });
        }

        if (!name || !jsonData) {
            console.error('❌ Missing required fields:', { name: !!name, jsonData: !!jsonData });
            return res.status(400).json({
                error: 'name and jsonData are required'
            });
        }

        console.log(`✅ Inserting blueprint: name="${name}", userId=${userId}`);
        const stmt = db.prepare(
            "INSERT INTO blueprints (name, user_id, json_data, created_at, updated_at) VALUES (?, ?, ?, datetime('now'), datetime('now'))"
        );
        const result = stmt.run(name, userId, jsonData);

        console.log('✅ Blueprint created successfully:', result.lastInsertRowid);
        res.status(201).json({
            id: result.lastInsertRowid,
            name,
            userId,
            message: 'Blueprint created successfully'
        });
    } catch (error) {
        console.error('❌ Error creating blueprint:', error);
        console.error('Error details:', error.message);
        console.error('Stack trace:', error.stack);
        res.status(500).json({
            error: 'Failed to create blueprint',
            message: error.message
        });
    }
});

// PUT update existing blueprint
router.put('/blueprints/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, jsonData } = req.body;
        const userId = req.user.id;

        if (!name || !jsonData) {
            return res.status(400).json({
                error: 'name and jsonData are required'
            });
        }

        // Verify ownership before updating
        const checkStmt = db.prepare('SELECT id FROM blueprints WHERE id = ? AND user_id = ?');
        const exists = checkStmt.get(id, userId);

        if (!exists) {
            return res.status(404).json({ error: 'Blueprint not found or access denied' });
        }

        const stmt = db.prepare(
            "UPDATE blueprints SET name = ?, json_data = ?, updated_at = datetime('now') WHERE id = ? AND user_id = ?"
        );
        const result = stmt.run(name, jsonData, id, userId);

        if (result.changes === 0) {
            return res.status(404).json({ error: 'Blueprint not found' });
        }

        res.json({ message: 'Blueprint updated successfully' });
    } catch (error) {
        console.error('Error updating blueprint:', error);
        res.status(500).json({ error: 'Failed to update blueprint' });
    }
});

// DELETE blueprint
router.delete('/blueprints/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        const stmt = db.prepare('DELETE FROM blueprints WHERE id = ? AND user_id = ?');
        const result = stmt.run(id, userId);

        if (result.changes === 0) {
            return res.status(404).json({ error: 'Blueprint not found or access denied' });
        }

        res.json({ message: 'Blueprint deleted successfully' });
    } catch (error) {
        console.error('Error deleting blueprint:', error);
        res.status(500).json({ error: 'Failed to delete blueprint' });
    }
});

export default router;
