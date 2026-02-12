import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import './config/db.js'; // Initialize database
import blueprintRoutes from './routes/blueprintRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middleware
app.use(helmet());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use('/api', limiter);

// Middleware
app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:5174',
        process.env.FRONTEND_URL
    ].filter(Boolean),
    credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// Request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', blueprintRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Velocity Visualizer API is running' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Start server - Bind to IPv4 explicitly to avoid IPv6 issues
app.listen(PORT, '127.0.0.1', () => {
    console.log(`
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║   🚀 Velocity Visualizer API Server                  ║
║                                                       ║
║   Status: Running                                     ║
║   Port: ${PORT}                                        ║
║   Host: 127.0.0.1 (IPv4)                              ║
║   Environment: ${process.env.NODE_ENV || 'development'}                              ║
║                                                       ║
║   Endpoints:                                          ║
║   • POST   /api/auth/signup                          ║
║   • POST   /api/auth/login                           ║
║   • POST   /api/auth/logout                          ║
║   • GET    /api/blueprints                           ║
║   • GET    /api/blueprints/:id                       ║
║   • POST   /api/blueprints                           ║
║   • PUT    /api/blueprints/:id                       ║
║   • DELETE /api/blueprints/:id                       ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝
  `);
});

export default app;
