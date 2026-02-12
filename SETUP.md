# Velocity Visualizer - Quick Setup Guide

## Prerequisites Check
- ✅ Node.js 18+ installed
- ✅ npm installed

## Step-by-Step Setup

### 1. Database Setup

**SQLite (No Setup Required!)**

The database is automatically created when you start the backend server. No manual setup needed!

- Database file location: `backend/data/velocity_visualizer.db`
- Tables are created automatically on first run
- Zero configuration required

### 2. Backend Configuration

The `.env` file has been created and is already configured for SQLite:

```bash
cd "d:/Velocity Visualizer/backend"
notepad .env
```

Default configuration (no changes needed):
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### 3. Start Backend Server

```bash
cd "d:/Velocity Visualizer/backend"
npm start
```

You should see:
```
╔═══════════════════════════════════════════════════════╗
║   🚀 Velocity Visualizer API Server                  ║
║   Status: Running                                     ║
║   Port: 5000                                          ║
╚═══════════════════════════════════════════════════════╝
```

### 4. Start Frontend Development Server

Open a new terminal:
```bash
cd "d:/Velocity Visualizer/frontend"
npm run dev
```

The application will open at: http://localhost:5173

## Testing the Application

### Test 1: Drag and Drop
1. Click on any icon in the sidebar
2. Drag it onto the canvas
3. Verify the 3D glassmorphism effect

### Test 2: Connection Validation
1. Drag "Public User" onto canvas
2. Drag "SQL Database" onto canvas
3. Try to connect Public User → SQL Database
4. ✅ Should show red toast: "Connection Blocked"

### Test 3: Valid Connection
1. Drag "Public User", "API Gateway", and "SQL Database"
2. Connect: Public User → API Gateway → SQL Database
3. ✅ Should create animated cyan edges

### Test 4: Save Blueprint
1. Create some nodes and connections
2. Enter a name in the sidebar (e.g., "My Architecture")
3. Click "Save Blueprint"
4. ✅ Should show success alert

### Test 5: Load Blueprint
1. Click on the saved blueprint in the sidebar
2. ✅ Canvas should restore all nodes and connections

### Test 6: Delete Blueprint
1. Hover over a saved blueprint
2. Click the 🗑️ icon
3. Confirm deletion
4. ✅ Blueprint should be removed from list

## Troubleshooting

### Database Issues
- Database file is automatically created in `backend/data/velocity_visualizer.db`
- If you encounter issues, delete the database file and restart the server
- Check file permissions in the `backend/data/` directory

### Frontend Can't Connect to Backend
- Verify backend is running on port 5000
- Check CORS settings in `backend/server.js`
- Ensure `FRONTEND_URL` in `.env` matches your frontend URL

### Port Already in Use
**Backend (5000):**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**Frontend (5173):**
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

## Next Steps

Once everything is running:
1. Explore the Velocity icon categories
2. Design your first cloud architecture
3. Test the connection validation rules
4. Save and load multiple blueprints
5. Experiment with the 3D hover effects

## Production Deployment

For production deployment:
1. Build frontend: `cd frontend && npm run build`
2. Set `NODE_ENV=production` in backend `.env`
3. Configure proper database credentials
4. Set up reverse proxy (nginx/Apache)
5. Enable HTTPS
6. Configure authentication

---

**Need Help?** Check the main README.md for detailed documentation.
