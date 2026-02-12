-- Velocity Visualizer Database Schema
-- SQLite Version

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Blueprints table
CREATE TABLE IF NOT EXISTS blueprints (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  user_id INTEGER NOT NULL,
  json_data TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_user_id ON blueprints(user_id);
CREATE INDEX IF NOT EXISTS idx_updated_at ON blueprints(updated_at);

-- Sample data (optional)
INSERT OR IGNORE INTO blueprints (id, name, user_id, json_data, created_at, updated_at) 
VALUES (1, 'Sample Architecture', 'user-001', '{"nodes":[],"edges":[],"viewport":{"x":0,"y":0,"zoom":1}}', datetime('now'), datetime('now'));
