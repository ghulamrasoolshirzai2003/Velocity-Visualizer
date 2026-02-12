# Velocity Visualizer

A complete, modular, production-style Full-Stack web application for visually designing, validating, saving, loading, and managing 3D cloud architecture blueprints.

![Velocity Visualizer](https://img.shields.io/badge/Status-Production--Ready-success)
![React](https://img.shields.io/badge/React-18.3-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![SQLite](https://img.shields.io/badge/Database-SQLite-blue)

## 🎯 Features

- **3D Glassmorphism UI**: Hyper-modern volumetric design with neon accents
- **Sentinel 40 Icon System**: 40 cloud architecture icons across 5 categories
- **Smart Connection Validation**: Real-time validation prevents unsafe architecture patterns
- **Blueprint Persistence**: Save, load, and manage multiple architecture designs
- **Interactive Canvas**: Drag-drop, zoom, pan with React Flow
- **Animated Edges**: Pulse animations for visual feedback
- **3D Toast Notifications**: Immersive error messaging

## 🏗️ Architecture

### Frontend (React + Vite)
- **React 18.3** with Hooks
- **React Flow** for canvas interactions
- **Framer Motion** for 3D animations
- **Tailwind CSS** for styling
- **Axios** for API communication

### Backend (Node.js + Express)
- **Express.js** REST API
- **better-sqlite3** for database connectivity
- **CORS** enabled
- **Environment-based configuration**

### Database (SQLite)
- Zero-configuration file-based database
- Relational schema with indexes
- JSON storage for blueprint data
- User-based blueprint organization
- No server setup required

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm

### 1. Clone and Setup

```bash
cd "d:\Velocity Visualizer"
```

### 2. Database Setup

**No setup required!** SQLite database is automatically created when you start the backend server.

- Database location: `backend/data/velocity_visualizer.db`
- Tables are created automatically on first run

### 3. Backend Setup

```bash
cd backend
npm install

# Start server (no configuration needed!)
npm start
```

### 4. Frontend Setup

```bash
cd frontend
npm install

# Start development server
npm run dev
```

## 🚀 Usage

1. **Access the application**: Open http://localhost:5173
2. **Drag components**: Select icons from the sidebar and drag onto canvas
3. **Create connections**: Click and drag between node handles
4. **Save blueprints**: Enter a name and click "Save Blueprint"
5. **Load blueprints**: Click on saved blueprints to restore them

## 🔒 Connection Validation (Expanded)

The application now features a **Comprehensive Category-Based Validation System** that covers over 150+ components.

**Global Security Rules:**
- **Public Entry Points** (Mobile, IoT, Web Apps) are BLOCKED from accessing **Sensitive Data** (Databases, Ledgers) directly.
- **Compute Resources** (VMs, Containers) warn when accessed directly from Public without a **Security Layer**.
- **Every Component** provides intelligent connection recommendations based on its architectural role.

❌ **Blocked Patterns:**
- Mobile App → Mainframe
- IoT Device → Prod Database
- Public User → Blockchain Ledger

✅ **Recommended Patterns:**
- Mobile App → API Gateway → Lambda → Database
- IoT Device → IoT Core → Stream Processing → Data Warehouse

## 🎨 Component Categories

The application supports a vast array of cloud components across 20+ categories:

- **Core Infrastructure**: Compute, Storage, Networking, Security
- **App Services**: Web Apps, Mobile, API Integration, Media Services
- **Advanced Tech**: AI & Machine Learning, IoT & Robotics, Blockchain, Satellite
- **Operations**: DevOps, Analytics, Migration, Management

## 🛠️ Technology Stack

**Frontend:**
- React 18.3
- Vite 6.0
- React Flow 12.3
- Framer Motion 11.15
- Tailwind CSS 3.4
- Axios 1.7

**Backend:**
- Node.js
- Express 4.21
- better-sqlite3 11.7
- CORS 2.8
- dotenv 16.4

## 📝 Project Structure

```
Velocity Visualizer/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CustomNode.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── FlowCanvas.jsx
│   │   ├── data/
│   │   │   └── iconData.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── backend/
│   ├── routes/
│   │   └── blueprintRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── database/
    └── schema.sql
```

## 🔧 Configuration

### Environment Variables

**Backend (.env):**
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
# Note: SQLite database is automatically created in backend/data/velocity_visualizer.db
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] Drag and drop nodes onto canvas
- [ ] Create connections between nodes
- [ ] Verify connection validation blocks unsafe patterns
- [ ] Save blueprint with custom name
- [ ] Load saved blueprint
- [ ] Delete blueprint
- [ ] Test node hover effects
- [ ] Verify 3D toast notifications

## 🚧 Future Enhancements

- User authentication and authorization
- Real-time collaboration
- Export to PNG/SVG
- Blueprint templates
- Cost estimation
- Deployment automation
- Dark/light theme toggle

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 👨‍💻 Author

Built with ❤️ as a demonstration of Full-Stack Engineering, Modular React Architecture, and Cloud Architecture Design.

---

**Powered by Sentinel 40** - The Cloud Architecture Icon System
