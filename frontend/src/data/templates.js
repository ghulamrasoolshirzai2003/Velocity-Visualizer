import { icons } from './iconData';

// Template categories and pre-built cloud architecture blueprints
export const templateCategories = [
    { id: 'web', name: 'Web Applications', icon: '🌐', color: '#00f0ff' },
    { id: 'microservices', name: 'Microservices', icon: '🔷', color: '#a855f7' },
    { id: 'data', name: 'Data & Analytics', icon: '📊', color: '#10b981' },
    { id: 'security', name: 'Security', icon: '🔒', color: '#ec4899' },
    { id: 'serverless', name: 'Serverless', icon: '⚡', color: '#f59e0b' },
    { id: 'analytics', name: 'Analytics', icon: '📈', color: '#2dd4bf' },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: '🧠', color: '#818cf8' },
    { id: 'iot', name: 'IoT & Robotics', icon: '🤖', color: '#fbbf24' },
    { id: 'integration', name: 'App Integration', icon: '🔗', color: '#ec4899' },
    { id: 'business', name: 'Business Apps', icon: '💼', color: '#ef4444' },
    { id: 'dev-tools', name: 'Developer Tools', icon: '🛠️', color: '#6366f1' },
    { id: 'migration', name: 'Migration', icon: '🚚', color: '#10b981' },
    { id: 'media', name: 'Media Services', icon: '🎬', color: '#f59e0b' },
    { id: 'euc', name: 'End User Computing', icon: '🖥️', color: '#a855f7' },
    { id: 'mobile', name: 'Mobile', icon: '📱', color: '#db2777' },
    { id: 'blockchain', name: 'Blockchain', icon: '⛓️', color: '#f59e0b' },
    { id: 'satellite', name: 'Satellite', icon: '📡', color: '#3b82f6' },
    { id: 'game-tech', name: 'Game Tech', icon: '🎮', color: '#8b5cf6' },
    { id: 'management', name: 'Management', icon: '⚙️', color: '#ef4444' }
];

const rawTemplates = [
    // Web Applications
    {
        id: 'web-basic-3tier',
        name: 'Basic 3-Tier Web App',
        category: 'web',
        description: 'Classic 3-tier architecture with load balancer, web servers, and database',
        difficulty: 'beginner',
        tags: ['load-balancer', 'web-server', 'database'],
        nodes: [
            { id: 'node-1', type: 'custom', position: { x: 100, y: 50 }, data: { label: 'Users', iconId: 'public-users', color: '#ec4899', svg: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' } },
            { id: 'node-2', type: 'custom', position: { x: 100, y: 200 }, data: { label: 'Load Balancer', iconId: 'load-balancer', color: '#00f0ff', svg: 'M4 6h16M4 12h16M4 18h16' } },
            { id: 'node-3', type: 'custom', position: { x: 50, y: 350 }, data: { label: 'Web Server 1', iconId: 'web-server', color: '#a855f7', svg: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' } },
            { id: 'node-4', type: 'custom', position: { x: 200, y: 350 }, data: { label: 'Web Server 2', iconId: 'web-server', color: '#a855f7', svg: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' } },
            { id: 'node-5', type: 'custom', position: { x: 125, y: 500 }, data: { label: 'Database', iconId: 'database', color: '#10b981', svg: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' } }
        ],
        edges: [
            { id: 'e1-2', source: 'node-1', target: 'node-2' },
            { id: 'e2-3', source: 'node-2', target: 'node-3' },
            { id: 'e2-4', source: 'node-2', target: 'node-4' },
            { id: 'e3-5', source: 'node-3', target: 'node-5' },
            { id: 'e4-5', source: 'node-4', target: 'node-5' }
        ]
    },
    {
        id: 'web-secure-app',
        name: 'Secure Web Application',
        category: 'web',
        description: 'Web app with WAF, API Gateway, and encryption',
        difficulty: 'intermediate',
        tags: ['waf', 'api-gateway', 'encryption'],
        nodes: [
            { id: 'node-1', type: 'custom', position: { x: 100, y: 50 }, data: { label: 'Users', iconId: 'public-users', color: '#ec4899', svg: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' } },
            { id: 'node-2', type: 'custom', position: { x: 100, y: 150 }, data: { label: 'WAF', iconId: 'waf', color: '#ec4899', svg: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' } },
            { id: 'node-3', type: 'custom', position: { x: 100, y: 250 }, data: { label: 'API Gateway', iconId: 'api-gateway', color: '#00f0ff', svg: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' } },
            { id: 'node-4', type: 'custom', position: { x: 100, y: 350 }, data: { label: 'App Server', iconId: 'app-server', color: '#a855f7', svg: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' } },
            { id: 'node-5', type: 'custom', position: { x: 100, y: 450 }, data: { label: 'Encrypted DB', iconId: 'encryption', color: '#ec4899', svg: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' } }
        ],
        edges: [
            { id: 'e1-2', source: 'node-1', target: 'node-2' },
            { id: 'e2-3', source: 'node-2', target: 'node-3' },
            { id: 'e3-4', source: 'node-3', target: 'node-4' },
            { id: 'e4-5', source: 'node-4', target: 'node-5' }
        ]
    },
    {
        id: 'web-cdn-static',
        name: 'CDN Static Website',
        category: 'web',
        description: 'Static website with CDN and object storage',
        difficulty: 'beginner',
        tags: ['cdn', 'storage', 'static'],
        nodes: [
            { id: 'node-1', type: 'custom', position: { x: 100, y: 50 }, data: { label: 'Users', iconId: 'public-users', color: '#ec4899', svg: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' } },
            { id: 'node-2', type: 'custom', position: { x: 100, y: 200 }, data: { label: 'CDN', iconId: 'cdn', color: '#00f0ff', svg: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' } },
            { id: 'node-3', type: 'custom', position: { x: 100, y: 350 }, data: { label: 'Object Storage', iconId: 'object-storage', color: '#10b981', svg: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' } }
        ],
        edges: [
            { id: 'e1-2', source: 'node-1', target: 'node-2' },
            { id: 'e2-3', source: 'node-2', target: 'node-3' }
        ]
    },

    // Microservices
    {
        id: 'micro-basic',
        name: 'Basic Microservices',
        category: 'microservices',
        description: 'Microservices with API Gateway, service mesh, and container orchestration',
        difficulty: 'intermediate',
        tags: ['api-gateway', 'containers', 'service-mesh'],
        nodes: [
            { id: 'node-1', type: 'custom', position: { x: 150, y: 50 }, data: { label: 'API Gateway', iconId: 'api-gateway', color: '#00f0ff', svg: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' } },
            { id: 'node-2', type: 'custom', position: { x: 50, y: 200 }, data: { label: 'Service A', iconId: 'container', color: '#a855f7', svg: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' } },
            { id: 'node-3', type: 'custom', position: { x: 150, y: 200 }, data: { label: 'Service B', iconId: 'container', color: '#a855f7', svg: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' } },
            { id: 'node-4', type: 'custom', position: { x: 250, y: 200 }, data: { label: 'Service C', iconId: 'container', color: '#a855f7', svg: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' } },
            { id: 'node-5', type: 'custom', position: { x: 150, y: 350 }, data: { label: 'Message Queue', iconId: 'message-queue', color: '#f59e0b', svg: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' } }
        ],
        edges: [
            { id: 'e1-2', source: 'node-1', target: 'node-2' },
            { id: 'e1-3', source: 'node-1', target: 'node-3' },
            { id: 'e1-4', source: 'node-1', target: 'node-4' },
            { id: 'e2-5', source: 'node-2', target: 'node-5' },
            { id: 'e3-5', source: 'node-3', target: 'node-5' },
            { id: 'e4-5', source: 'node-4', target: 'node-5' }
        ]
    },

    // Data & Analytics
    {
        id: 'data-pipeline',
        name: 'Data Processing Pipeline',
        category: 'data',
        description: 'ETL pipeline with data lake and analytics',
        difficulty: 'advanced',
        tags: ['etl', 'data-lake', 'analytics'],
        nodes: [
            { id: 'node-1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Data Source', iconId: 'database', color: '#10b981', svg: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' } },
            { id: 'node-2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'ETL Pipeline', iconId: 'ci-cd', color: '#f59e0b', svg: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' } },
            { id: 'node-3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Data Lake', iconId: 'object-storage', color: '#10b981', svg: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' } },
            { id: 'node-4', type: 'custom', position: { x: 350, y: 250 }, data: { label: 'Analytics', iconId: 'monitoring', color: '#00f0ff', svg: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' } }
        ],
        edges: [
            { id: 'e1-2', source: 'node-1', target: 'node-2' },
            { id: 'e2-3', source: 'node-2', target: 'node-3' },
            { id: 'e3-4', source: 'node-3', target: 'node-4' }
        ]
    },

    // Security
    {
        id: 'security-zero-trust',
        name: 'Zero Trust Architecture',
        category: 'security',
        description: 'Zero trust security with identity management and MFA',
        difficulty: 'advanced',
        tags: ['zero-trust', 'identity', 'mfa'],
        nodes: [
            { id: 'node-1', type: 'custom', position: { x: 100, y: 50 }, data: { label: 'Users', iconId: 'public-users', color: '#ec4899', svg: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' } },
            { id: 'node-2', type: 'custom', position: { x: 100, y: 150 }, data: { label: 'MFA', iconId: 'mfa', color: '#ec4899', svg: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z' } },
            { id: 'node-3', type: 'custom', position: { x: 100, y: 250 }, data: { label: 'Identity Provider', iconId: 'identity-mgmt', color: '#ec4899', svg: 'M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2' } },
            { id: 'node-4', type: 'custom', position: { x: 100, y: 350 }, data: { label: 'WAF', iconId: 'waf', color: '#ec4899', svg: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' } },
            { id: 'node-5', type: 'custom', position: { x: 100, y: 450 }, data: { label: 'Application', iconId: 'app-server', color: '#a855f7', svg: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' } }
        ],
        edges: [
            { id: 'e1-2', source: 'node-1', target: 'node-2' },
            { id: 'e2-3', source: 'node-2', target: 'node-3' },
            { id: 'e3-4', source: 'node-3', target: 'node-4' },
            { id: 'e4-5', source: 'node-4', target: 'node-5' }
        ]
    },

    // Serverless
    {
        id: 'serverless-api',
        name: 'Serverless API',
        category: 'serverless',
        description: 'Serverless REST API with functions and managed database',
        difficulty: 'intermediate',
        tags: ['serverless', 'api', 'functions'],
        nodes: [
            { id: 'node-1', type: 'custom', position: { x: 100, y: 50 }, data: { label: 'API Gateway', iconId: 'api-gateway', color: '#00f0ff', svg: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' } },
            { id: 'node-2', type: 'custom', position: { x: 50, y: 200 }, data: { label: 'Lambda 1', iconId: 'serverless', color: '#f59e0b', svg: 'M13 10V3L4 14h7v7l9-11h-7z' } },
            { id: 'node-3', type: 'custom', position: { x: 150, y: 200 }, data: { label: 'Lambda 2', iconId: 'serverless', color: '#f59e0b', svg: 'M13 10V3L4 14h7v7l9-11h-7z' } },
            { id: 'node-4', type: 'custom', position: { x: 100, y: 350 }, data: { label: 'DynamoDB', iconId: 'database', color: '#10b981', svg: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' } }
        ],
        edges: [
            { id: 'e1-2', source: 'node-1', target: 'node-2' },
            { id: 'e1-3', source: 'node-1', target: 'node-3' },
            { id: 'e2-4', source: 'node-2', target: 'node-4' },
            { id: 'e3-4', source: 'node-3', target: 'node-4' }
        ]
    },

    // Machine Learning Pipeline
    {
        id: 'ml-training-pipeline',
        name: 'ML Training Pipeline',
        category: 'data',
        description: 'Machine learning training with GPU compute and model storage',
        difficulty: 'advanced',
        tags: ['ml', 'gpu', 'training'],
        nodes: [
            { id: 'node-1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Data Lake', iconId: 'object-storage', color: '#10b981', svg: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' } },
            { id: 'node-2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'GPU Cluster', iconId: 'container', color: '#a855f7', svg: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' } },
            { id: 'node-3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Model Registry', iconId: 'database', color: '#10b981', svg: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' } },
            { id: 'node-4', type: 'custom', position: { x: 200, y: 250 }, data: { label: 'API Endpoint', iconId: 'api-gateway', color: '#00f0ff', svg: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' } }
        ],
        edges: [
            { id: 'e1-2', source: 'node-1', target: 'node-2' },
            { id: 'e2-3', source: 'node-2', target: 'node-3' },
            { id: 'e3-4', source: 'node-3', target: 'node-4' }
        ]
    },

    // CI/CD Pipeline
    {
        id: 'cicd-pipeline',
        name: 'CI/CD Pipeline',
        category: 'microservices',
        description: 'Automated build, test, and deployment pipeline',
        difficulty: 'intermediate',
        tags: ['ci-cd', 'automation', 'deployment'],
        nodes: [
            { id: 'node-1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Git Repo', iconId: 'database', color: '#10b981', svg: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' } },
            { id: 'node-2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Build Server', iconId: 'ci-cd', color: '#f59e0b', svg: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' } },
            { id: 'node-3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Container Registry', iconId: 'container', color: '#a855f7', svg: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' } },
            { id: 'node-4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'Kubernetes', iconId: 'kubernetes', color: '#00f0ff', svg: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' } }
        ],
        edges: [
            { id: 'e1-2', source: 'node-1', target: 'node-2' },
            { id: 'e2-3', source: 'node-2', target: 'node-3' },
            { id: 'e3-4', source: 'node-3', target: 'node-4' }
        ]
    },

    // Gaming Backend
    {
        id: 'gaming-backend',
        name: 'Gaming Backend',
        category: 'serverless',
        description: 'Real-time multiplayer gaming infrastructure',
        difficulty: 'advanced',
        tags: ['gaming', 'real-time', 'websocket'],
        nodes: [
            { id: 'node-1', type: 'custom', position: { x: 100, y: 50 }, data: { label: 'Players', iconId: 'public-users', color: '#ec4899', svg: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' } },
            { id: 'node-2', type: 'custom', position: { x: 100, y: 150 }, data: { label: 'WebSocket API', iconId: 'api-gateway', color: '#00f0ff', svg: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' } },
            { id: 'node-3', type: 'custom', position: { x: 50, y: 300 }, data: { label: 'Game Server', iconId: 'app-server', color: '#a855f7', svg: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' } },
            { id: 'node-4', type: 'custom', position: { x: 150, y: 300 }, data: { label: 'Leaderboard', iconId: 'database', color: '#10b981', svg: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' } }
        ],
        edges: [
            { id: 'e1-2', source: 'node-1', target: 'node-2' },
            { id: 'e2-3', source: 'node-2', target: 'node-3' },
            { id: 'e2-4', source: 'node-2', target: 'node-4' }
        ]
    },

    // Mobile App Backend
    {
        id: 'serverless-mobile-backend',
        name: 'Mobile App Backend',
        category: 'serverless',
        description: 'Serverless backend for mobile applications with push notifications',
        difficulty: 'intermediate',
        tags: ['mobile', 'push', 'serverless'],
        nodes: [
            { id: 'node-1', type: 'custom', position: { x: 100, y: 50 }, data: { label: 'Mobile Apps', iconId: 'public-users', color: '#ec4899', svg: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' } },
            { id: 'node-2', type: 'custom', position: { x: 100, y: 150 }, data: { label: 'API Gateway', iconId: 'api-gateway', color: '#00f0ff', svg: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' } },
            { id: 'node-3', type: 'custom', position: { x: 50, y: 250 }, data: { label: 'Lambda Functions', iconId: 'serverless', color: '#f59e0b', svg: 'M13 10V3L4 14h7v7l9-11h-7z' } },
            { id: 'node-4', type: 'custom', position: { x: 150, y: 250 }, data: { label: 'Push Service', iconId: 'notification', color: '#ec4899', svg: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' } },
            { id: 'node-5', type: 'custom', position: { x: 100, y: 350 }, data: { label: 'NoSQL DB', iconId: 'database', color: '#10b981', svg: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' } }
        ],
        edges: [
            { id: 'e1-2', source: 'node-1', target: 'node-2' },
            { id: 'e2-3', source: 'node-2', target: 'node-3' },
            { id: 'e2-4', source: 'node-2', target: 'node-4' },
            { id: 'e3-5', source: 'node-3', target: 'node-5' }
        ]
    },

    // Multi-Region Deployment
    {
        id: 'multi-region',
        name: 'Multi-Region Deployment',
        category: 'web',
        description: 'Global application with multi-region failover',
        difficulty: 'advanced',
        tags: ['multi-region', 'failover', 'global'],
        nodes: [
            { id: 'node-1', type: 'custom', position: { x: 200, y: 50 }, data: { label: 'Global DNS', iconId: 'dns', color: '#00f0ff', svg: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' } },
            { id: 'node-2', type: 'custom', position: { x: 100, y: 200 }, data: { label: 'Region US', iconId: 'web-server', color: '#a855f7', svg: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' } },
            { id: 'node-3', type: 'custom', position: { x: 300, y: 200 }, data: { label: 'Region EU', iconId: 'web-server', color: '#a855f7', svg: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' } },
            { id: 'node-4', type: 'custom', position: { x: 200, y: 350 }, data: { label: 'Global DB', iconId: 'database', color: '#10b981', svg: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' } }
        ],
        edges: [
            { id: 'e1-2', source: 'node-1', target: 'node-2' },
            { id: 'e1-3', source: 'node-1', target: 'node-3' },
            { id: 'e2-4', source: 'node-2', target: 'node-4' },
            { id: 'e3-4', source: 'node-3', target: 'node-4' }
        ]
    },

    // Real-time Chat
    {
        id: 'realtime-chat',
        name: 'Real-time Chat App',
        category: 'web',
        description: 'Scalable chat application with WebSocket and message queue',
        difficulty: 'intermediate',
        tags: ['chat', 'websocket', 'real-time'],
        nodes: [
            { id: 'node-1', type: 'custom', position: { x: 100, y: 50 }, data: { label: 'Users', iconId: 'public-users', color: '#ec4899', svg: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' } },
            { id: 'node-2', type: 'custom', position: { x: 100, y: 150 }, data: { label: 'WebSocket Server', iconId: 'api-gateway', color: '#00f0ff', svg: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' } },
            { id: 'node-3', type: 'custom', position: { x: 100, y: 250 }, data: { label: 'Message Queue', iconId: 'message-queue', color: '#f59e0b', svg: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' } },
            { id: 'node-4', type: 'custom', position: { x: 100, y: 350 }, data: { label: 'Chat DB', iconId: 'database', color: '#10b981', svg: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' } }
        ],
        edges: [
            { id: 'e1-2', source: 'node-1', target: 'node-2' },
            { id: 'e2-3', source: 'node-2', target: 'node-3' },
            { id: 'e3-4', source: 'node-3', target: 'node-4' }
        ]
    },

    // Video Streaming
    {
        id: 'video-streaming',
        name: 'Video Streaming Platform',
        category: 'data',
        description: 'Live video streaming with CDN and transcoding',
        difficulty: 'advanced',
        tags: ['video', 'streaming', 'cdn'],
        nodes: [
            { id: 'node-1', type: 'custom', position: { x: 100, y: 50 }, data: { label: 'Video Source', iconId: 'monitoring', color: '#f59e0b', svg: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' } },
            { id: 'node-2', type: 'custom', position: { x: 100, y: 150 }, data: { label: 'Transcoder', iconId: 'ci-cd', color: '#a855f7', svg: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' } },
            { id: 'node-3', type: 'custom', position: { x: 100, y: 250 }, data: { label: 'CDN', iconId: 'cdn', color: '#00f0ff', svg: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' } },
            { id: 'node-4', type: 'custom', position: { x: 100, y: 350 }, data: { label: 'Viewers', iconId: 'public-users', color: '#ec4899', svg: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' } }
        ],
        edges: [
            { id: 'e1-2', source: 'node-1', target: 'node-2' },
            { id: 'e2-3', source: 'node-2', target: 'node-3' },
            { id: 'e3-4', source: 'node-3', target: 'node-4' }
        ]
    },

    // Blockchain Node
    {
        id: 'blockchain-node',
        name: 'Blockchain Infrastructure',
        category: 'security',
        description: 'Blockchain node with validator and explorer',
        difficulty: 'advanced',
        tags: ['blockchain', 'crypto', 'validator'],
        nodes: [
            { id: 'node-1', type: 'custom', position: { x: 100, y: 50 }, data: { label: 'Blockchain Node', iconId: 'app-server', color: '#a855f7', svg: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' } },
            { id: 'node-2', type: 'custom', position: { x: 50, y: 200 }, data: { label: 'Validator', iconId: 'encryption', color: '#ec4899', svg: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' } },
            { id: 'node-3', type: 'custom', position: { x: 150, y: 200 }, data: { label: 'Explorer API', iconId: 'api-gateway', color: '#00f0ff', svg: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' } },
            { id: 'node-4', type: 'custom', position: { x: 100, y: 300 }, data: { label: 'Block Storage', iconId: 'database', color: '#10b981', svg: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' } }
        ],
        edges: [
            { id: 'e1-2', source: 'node-1', target: 'node-2' },
            { id: 'e1-3', source: 'node-1', target: 'node-3' },
            { id: 'e1-4', source: 'node-1', target: 'node-4' }
        ]
    },

    // Monitoring Stack
    {
        id: 'monitoring-stack',
        name: 'Monitoring & Observability',
        category: 'microservices',
        description: 'Complete monitoring with metrics, logs, and tracing',
        difficulty: 'intermediate',
        tags: ['monitoring', 'metrics', 'logs'],
        nodes: [
            { id: 'node-1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Applications', iconId: 'app-server', color: '#a855f7', svg: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' } },
            { id: 'node-2', type: 'custom', position: { x: 200, y: 50 }, data: { label: 'Metrics Collector', iconId: 'monitoring', color: '#10b981', svg: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' } },
            { id: 'node-3', type: 'custom', position: { x: 200, y: 150 }, data: { label: 'Log Aggregator', iconId: 'database', color: '#f59e0b', svg: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' } },
            { id: 'node-4', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Dashboard', iconId: 'monitoring', color: '#00f0ff', svg: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' } }
        ],
        edges: [
            { id: 'e1-2', source: 'node-1', target: 'node-2' },
            { id: 'e1-3', source: 'node-1', target: 'node-3' },
            { id: 'e2-4', source: 'node-2', target: 'node-4' },
            { id: 'e3-4', source: 'node-3', target: 'node-4' }
        ]
    },

    // Disaster Recovery
    {
        id: 'disaster-recovery',
        name: 'Disaster Recovery Setup',
        category: 'security',
        description: 'High availability with backup and failover',
        difficulty: 'advanced',
        tags: ['backup', 'failover', 'ha'],
        nodes: [
            { id: 'node-1', type: 'custom', position: { x: 100, y: 50 }, data: { label: 'Primary Region', iconId: 'web-server', color: '#a855f7', svg: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' } },
            { id: 'node-2', type: 'custom', position: { x: 300, y: 50 }, data: { label: 'Backup Region', iconId: 'web-server', color: '#10b981', svg: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' } },
            { id: 'node-3', type: 'custom', position: { x: 100, y: 200 }, data: { label: 'Primary DB', iconId: 'database', color: '#00f0ff', svg: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' } },
            { id: 'node-4', type: 'custom', position: { x: 300, y: 200 }, data: { label: 'Replica DB', iconId: 'database', color: '#10b981', svg: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' } },
            { id: 'node-5', type: 'custom', position: { x: 200, y: 300 }, data: { label: 'Backup Storage', iconId: 'object-storage', color: '#ec4899', svg: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' } }
        ],
        edges: [
            { id: 'e1-2', source: 'node-1', target: 'node-2' },
            { id: 'e1-3', source: 'node-1', target: 'node-3' },
            { id: 'e3-4', source: 'node-3', target: 'node-4' },
            { id: 'e3-5', source: 'node-3', target: 'node-5' }
        ]
    },
    // ANALYTICS TEMPLATES
    {
        id: 'analytics-modern-stack',
        name: 'Modern Data Stack',
        category: 'analytics',
        description: 'Data ingestion, warehouse, and BI',
        difficulty: 'intermediate',
        tags: ['analytics', 'warehouse', 'bi'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Stream', iconId: 'kinesis-data-streams', color: '#2dd4bf', svg: 'M13 10V3L4 14h7v7l9-11h-7z' } },
            { id: 'n2', type: 'custom', position: { x: 250, y: 100 }, data: { label: 'Warehouse', iconId: 'data-warehouse-v2', color: '#2dd4bf', svg: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' } },
            { id: 'n3', type: 'custom', position: { x: 450, y: 100 }, data: { label: 'BI Tool', iconId: 'quicksight', color: '#2dd4bf', svg: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    // AI/ML TEMPLATES
    {
        id: 'ai-ml-pipeline',
        name: 'ML Training Pipeline',
        category: 'ai-ml',
        description: 'End-to-end ML workflow',
        difficulty: 'advanced',
        tags: ['ml', 'training', 'pipeline'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Data Lake', iconId: 's3-bucket', color: '#10b981', svg: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' } },
            { id: 'n2', type: 'custom', position: { x: 250, y: 100 }, data: { label: 'Training', iconId: 'sagemaker', color: '#818cf8', svg: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' } },
            { id: 'n3', type: 'custom', position: { x: 450, y: 100 }, data: { label: 'Endpoint', iconId: 'endpoint', color: '#818cf8', svg: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    // IoT TEMPLATES
    {
        id: 'iot-smart-home',
        name: 'Smart Home Backend',
        category: 'iot',
        description: 'Backend for connected home devices',
        difficulty: 'intermediate',
        tags: ['iot', 'smart-home', 'mqtt'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Devices', iconId: 'iot-thing', color: '#fbbf24', svg: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' } },
            { id: 'n2', type: 'custom', position: { x: 250, y: 100 }, data: { label: 'IoT Core', iconId: 'iot-core', color: '#fbbf24', svg: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' } },
            { id: 'n3', type: 'custom', position: { x: 450, y: 100 }, data: { label: 'Rule Engine', iconId: 'iot-analytics', color: '#fbbf24', svg: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    // MOBILE TEMPLATES
    {
        id: 'mobile-basic-backend',
        name: 'Mobile Backend',
        category: 'mobile',
        description: 'Serverless backend for mobile apps',
        difficulty: 'intermediate',
        tags: ['mobile', 'serverless', 'api'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Mobile App', iconId: 'mobile-client', color: '#ec4899', svg: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' } },
            { id: 'n2', type: 'custom', position: { x: 250, y: 100 }, data: { label: 'API', iconId: 'api-gateway', color: '#00f0ff', svg: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' } },
            { id: 'n3', type: 'custom', position: { x: 450, y: 100 }, data: { label: 'Auth', iconId: 'cognito', color: '#ec4899', svg: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    // INTEGRATION TEMPLATES
    {
        id: 'integration-event-driven',
        name: 'Event Driven Arch',
        category: 'integration',
        description: 'Decoupled services using EventBridge',
        difficulty: 'intermediate',
        tags: ['integration', 'events', 'decoupled'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Source', iconId: 'lambda-layer', color: '#a855f7', svg: 'M13 10V3L4 14h7v7l9-11h-7z' } },
            { id: 'n2', type: 'custom', position: { x: 250, y: 100 }, data: { label: 'Event Bus', iconId: 'event-bridge', color: '#ec4899', svg: 'M13 10V3L4 14h7v7l9-11h-7z' } },
            { id: 'n3', type: 'custom', position: { x: 450, y: 50 }, data: { label: 'Target A', iconId: 'sqs', color: '#ec4899', svg: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' } },
            { id: 'n4', type: 'custom', position: { x: 450, y: 150 }, data: { label: 'Target B', iconId: 'lambda-layer', color: '#a855f7', svg: 'M13 10V3L4 14h7v7l9-11h-7z' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e2-4', source: 'n2', target: 'n4' }
        ]
    },
    // DEV TOOLS TEMPLATES
    {
        id: 'dev-cicd',
        name: 'CI/CD Pipeline',
        category: 'dev-tools',
        description: 'Automated build and deploy pipeline',
        difficulty: 'intermediate',
        tags: ['cicd', 'automation', 'pipeline'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Repo', iconId: 'code-commit', color: '#6366f1', svg: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Build', iconId: 'code-build', color: '#6366f1', svg: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Deploy', iconId: 'code-deploy', color: '#6366f1', svg: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'Pipeline', iconId: 'code-pipeline', color: '#6366f1', svg: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e4-1', source: 'n4', target: 'n1' }
        ]
    },
    // BLOCKCHAIN TEMPLATES
    {
        id: 'blockchain-nft',
        name: 'NFT Marketplace',
        category: 'blockchain',
        description: 'Decentralized application for NFTs',
        difficulty: 'advanced',
        tags: ['blockchain', 'nft', 'web3'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Frontend', iconId: 's3-bucket', color: '#10b981', svg: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' } },
            { id: 'n2', type: 'custom', position: { x: 250, y: 100 }, data: { label: 'Contract', iconId: 'smart-contract', color: '#f59e0b', svg: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' } },
            { id: 'n3', type: 'custom', position: { x: 450, y: 100 }, data: { label: 'Ledger', iconId: 'managed-blockchain', color: '#f59e0b', svg: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    // MEDIA TEMPLATES
    {
        id: 'media-live-stream',
        name: 'Live Streaming',
        category: 'media',
        description: 'Live video processing and delivery',
        difficulty: 'intermediate',
        tags: ['media', 'streaming', 'video'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Source', iconId: 'media-connect', color: '#f59e0b', svg: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Process', iconId: 'media-live', color: '#f59e0b', svg: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Package', iconId: 'media-package', color: '#f59e0b', svg: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'CDN', iconId: 'cloudfront', color: '#00f0ff', svg: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    // MEDIA COMPLETED (Total: 2) - Need more later

    // ==================== NEW TEMPLATES ====================

    // MICROSERVICES (Target: 5)
    // 1. micro-basic (Existing)
    // 2. cicd-pipeline (Existing)
    // 3. monitoring-stack (Existing)
    // 4. micro-event-driven (Added below)
    // 5. micro-saga-pattern (Added below)

    {
        id: 'micro-event-driven',
        name: 'Event-Driven Microservices',
        category: 'microservices',
        description: 'Decoupled architecture using SNS/SQS',
        difficulty: 'intermediate',
        tags: ['event-driven', 'sns', 'sqs'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Publisher', iconId: 'lambda-function' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Topic', iconId: 'sns' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 50 }, data: { label: 'Queue A', iconId: 'sqs' } },
            { id: 'n4', type: 'custom', position: { x: 350, y: 150 }, data: { label: 'Queue B', iconId: 'sqs' } },
            { id: 'n5', type: 'custom', position: { x: 500, y: 50 }, data: { label: 'Worker A', iconId: 'lambda-function' } },
            { id: 'n6', type: 'custom', position: { x: 500, y: 150 }, data: { label: 'Worker B', iconId: 'lambda-function' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e2-4', source: 'n2', target: 'n4' },
            { id: 'e3-5', source: 'n3', target: 'n5' },
            { id: 'e4-6', source: 'n4', target: 'n6' }
        ]
    },
    {
        id: 'micro-saga-pattern',
        name: 'Saga Pattern',
        category: 'microservices',
        description: 'Distributed transaction management using Step Functions',
        difficulty: 'advanced',
        tags: ['saga', 'step-functions', 'transactions'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Orchestrator', iconId: 'step-functions' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 50 }, data: { label: 'Service A', iconId: 'lambda-function' } },
            { id: 'n3', type: 'custom', position: { x: 200, y: 150 }, data: { label: 'Service B', iconId: 'lambda-function' } },
            { id: 'n4', type: 'custom', position: { x: 350, y: 50 }, data: { label: 'DB A', iconId: 'dynamodb' } },
            { id: 'n5', type: 'custom', position: { x: 350, y: 150 }, data: { label: 'DB B', iconId: 'dynamodb' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e1-3', source: 'n1', target: 'n3' },
            { id: 'e2-4', source: 'n2', target: 'n4' },
            { id: 'e3-5', source: 'n3', target: 'n5' }
        ]
    },

    // DATA (Target: 5)
    // 1. data-pipeline (Existing)
    // 2. video-streaming (Existing - moved to Media?) -> It is Category: data in existing.
    // 3. analytics-modern-stack (Existing - in Analytics category)
    // 4. data-lakehouse (Added below)
    // 5. data-batch-processing (Added below)
    // 6. data-realtime-analytics (Added below)

    {
        id: 'data-lakehouse',
        name: 'Data Lakehouse',
        category: 'data',
        description: 'Unified architecture for data lake and warehouse',
        difficulty: 'advanced',
        tags: ['lakehouse', 'redshift', 's3'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'S3 Data Lake', iconId: 's3-bucket' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Glue Catalog', iconId: 'glue' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Redshift Spectrum', iconId: 'redshift' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'QuickSight', iconId: 'quicksight' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'data-batch-processing',
        name: 'Batch Processing',
        category: 'data',
        description: 'Scheduled batch processing with EMR',
        difficulty: 'intermediate',
        tags: ['batch', 'emr', 'spark'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Input S3', iconId: 's3-bucket' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'EMR Cluster', iconId: 'emr' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Output S3', iconId: 's3-bucket' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'data-realtime',
        name: 'Real-time Analytics',
        category: 'data',
        description: 'Real-time data ingestion and visualization',
        difficulty: 'advanced',
        tags: ['kinesis', 'opensearch', 'real-time'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Kinesis Stream', iconId: 'kinesis-data-streams' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Kinesis Firehose', iconId: 'kinesis-firehose' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'OpenSearch', iconId: 'opensearch-service' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'Dashboards', iconId: 'opensearch-service' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },

    // SECURITY (Target: 5)
    // 1. security-zero-trust (Existing)
    // 2. blockchain-node (Existing - Category: security ?? Move to Blockchain category later)
    // 3. disaster-recovery (Existing - Category: security)
    // 4. security-compliance (Added below)
    // 5. security-ingress-egress (Added below)
    // 6. security-container (Added below)

    {
        id: 'security-compliance',
        name: 'Compliance Architecture',
        category: 'security',
        description: 'Standard architecture for HIPAA/PCI compliance',
        difficulty: 'advanced',
        tags: ['compliance', 'hipaa', 'pci'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Config', iconId: 'config' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'CloudTrail', iconId: 'cloudtrail' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'GuardDuty', iconId: 'guardduty' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'Security Hub', iconId: 'security-hub' } }
        ],
        edges: [
            { id: 'e1-4', source: 'n1', target: 'n4' },
            { id: 'e2-4', source: 'n2', target: 'n4' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'security-ingress-egress',
        name: 'Centralized Ingress/Egress',
        category: 'security',
        description: 'Centralized network security inspection',
        difficulty: 'advanced',
        tags: ['network', 'firewall', 'transit-gateway'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 250, y: 50 }, data: { label: 'Internet', iconId: 'internet-gateway' } },
            { id: 'n2', type: 'custom', position: { x: 250, y: 150 }, data: { label: 'Network Firewall', iconId: 'network-firewall' } },
            { id: 'n3', type: 'custom', position: { x: 250, y: 250 }, data: { label: 'Transit Gateway', iconId: 'transit-gateway' } },
            { id: 'n4', type: 'custom', position: { x: 100, y: 350 }, data: { label: 'VPC A', iconId: 'vpc' } },
            { id: 'n5', type: 'custom', position: { x: 400, y: 350 }, data: { label: 'VPC B', iconId: 'vpc' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' },
            { id: 'e3-5', source: 'n3', target: 'n5' }
        ]
    },
    {
        id: 'security-container',
        name: 'Container Security',
        category: 'security',
        description: 'Secure container pipeline with image scanning',
        difficulty: 'intermediate',
        tags: ['container', 'security', 'scanning'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'CodeCommit', iconId: 'code-commit' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'CodeBuild', iconId: 'code-build' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'ECR (Scan on Push)', iconId: 'ecr' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'EKS', iconId: 'eks' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },

    // SERVERLESS (Target: 5)
    // 1. serverless-api (Existing)
    // 2. gaming-backend (Existing - Category: serverless)
    // 3. mobile-backend (Existing - Category: serverless)
    // 4. serverless-image-processing (Added below)
    // 5. serverless-chatbot (Added below)

    {
        id: 'serverless-image-processing',
        name: 'Image Processing',
        category: 'serverless',
        description: 'Automated image resizing and processing',
        difficulty: 'beginner',
        tags: ['s3', 'lambda', 'processing'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Upload Bucket', iconId: 's3-bucket' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Processor', iconId: 'lambda-function' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Resized Bucket', iconId: 's3-bucket' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'serverless-chatbot',
        name: 'AI Chatbot',
        category: 'serverless',
        description: 'Serverless chatbot using Amazon Lex',
        difficulty: 'intermediate',
        tags: ['chatbot', 'lex', 'ai'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'User', iconId: 'public-users' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Amazon Lex', iconId: 'lex' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Fulfillment', iconId: 'lambda-function' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'DynamoDB', iconId: 'dynamodb' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },

    // ANALYTICS (Target: 5)
    // 1. analytics-modern-stack (Existing)
    // 2. analytics-realtime-dashboard (Added below)
    // 3. analytics-customer-360 (Added below)
    // 4. analytics-log-analytics (Added below)
    // 5. analytics-streaming-etl (Added below)

    {
        id: 'analytics-realtime-dashboard',
        name: 'Real-time Dashboard',
        category: 'analytics',
        description: 'Serverless real-time analytics dashboard',
        difficulty: 'intermediate',
        tags: ['kinesis', 'lambda', 'dynamodb'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Data Source', iconId: 'kinesis-data-streams' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Processor', iconId: 'lambda-function' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Aggregator', iconId: 'dynamodb' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'Dashboard', iconId: 'quicksight' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'analytics-customer-360',
        name: 'Customer 360',
        category: 'analytics',
        description: 'Command center for customer data',
        difficulty: 'advanced',
        tags: ['glue', 'redshift', 'quicksight'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'CRM Data', iconId: 's3-bucket' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'ETL Job', iconId: 'glue' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Warehouse', iconId: 'redshift' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'BI Tool', iconId: 'quicksight' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'analytics-log-analytics',
        name: 'Log Analytics',
        category: 'analytics',
        description: 'Centralized logging and analysis',
        difficulty: 'intermediate',
        tags: ['cloudwatch', 'opensearch', 'logs'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'App Logs', iconId: 'cloudwatch' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Stream', iconId: 'kinesis-firehose' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Search Engine', iconId: 'opensearch-service' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'Kibana', iconId: 'opensearch-service' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'analytics-streaming-etl',
        name: 'Streaming ETL',
        category: 'analytics',
        description: 'Real-time data transformation',
        difficulty: 'advanced',
        tags: ['msk', 'flink', 'streaming'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Kafka', iconId: 'managed-streaming-for-kafka' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Flink App', iconId: 'kinesis-data-analytics' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Data Lake', iconId: 's3-bucket' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },

    // AI/ML (Target: 5)
    // 1. ai-ml-pipeline (Existing)
    // 2. ai-text-processing (Added below)
    // 3. ai-image-recognition (Added below)
    // 4. ai-personalization (Added below)
    // 5. ai-forecasting (Added below)

    {
        id: 'ai-text-processing',
        name: 'NLP Pipeline',
        category: 'ai-ml',
        description: 'Extract insights from text documents',
        difficulty: 'intermediate',
        tags: ['comprehend', 'lambda', 'nlp'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Documents', iconId: 's3-bucket' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Trigger', iconId: 'lambda-function' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'NLP Service', iconId: 'comprehend' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'Metadata DB', iconId: 'dynamodb' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'ai-image-recognition',
        name: 'Image Recognition',
        category: 'ai-ml',
        description: 'Detect objects in images automatically',
        difficulty: 'beginner',
        tags: ['rekognition', 'image', 'ml'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Uploads', iconId: 's3-bucket' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Analysis', iconId: 'rekognition' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Results', iconId: 'dynamodb' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'ai-personalization',
        name: 'Recommendation Engine',
        category: 'ai-ml',
        description: 'Real-time product recommendations',
        difficulty: 'advanced',
        tags: ['personalize', 'recommendation', 'ml'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'User Events', iconId: 'kinesis-data-streams' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Model', iconId: 'personalize' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'API', iconId: 'api-gateway' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'App', iconId: 'web-server' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'ai-forecasting',
        name: 'Time-Series Forecast',
        category: 'ai-ml',
        description: 'Predict future business metrics',
        difficulty: 'intermediate',
        tags: ['forecast', 'time-series', 'prediction'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'History Data', iconId: 's3-bucket' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Predictor', iconId: 'forecast' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Visuals', iconId: 'quicksight' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },

    // IOT (Target: 5)
    // 1. iot-smart-home (Existing)
    // 2. iot-industrial-monitoring (Added below)
    // 3. iot-fleet-management (Added below)
    // 4. iot-preventive-maintenance (Added below)
    // 5. iot-camera-connector (Added below)

    {
        id: 'iot-industrial-monitoring',
        name: 'Industrial Monitoring',
        category: 'iot',
        description: 'Monitor industrial equipment stats',
        difficulty: 'advanced',
        tags: ['sitewise', 'industrial', 'iot'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Sensors', iconId: 'greengrass' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'SiteWise', iconId: 'iot-sitewise' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Dashboard', iconId: 'iot-sitewise' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'iot-fleet-management',
        name: 'Fleet Management',
        category: 'iot',
        description: 'Track vehicle locations and status',
        difficulty: 'intermediate',
        tags: ['location', 'fleet', 'tracking'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Vehicle', iconId: 'iot-thing' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'IoT Core', iconId: 'iot-core' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Location Svc', iconId: 'location-service' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'Map App', iconId: 'mobile-client' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'iot-preventive-maintenance',
        name: 'Preventive Maintenance',
        category: 'iot',
        description: 'Detect anomalies in equipment behavior',
        difficulty: 'advanced',
        tags: ['iot-events', 'maintenance', 'detection'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Equipment', iconId: 'iot-thing' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'IoT Events', iconId: 'iot-events' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Alert', iconId: 'sns' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'iot-camera-connector',
        name: 'Smart Camera',
        category: 'iot',
        description: 'Stream video from IoT cameras',
        difficulty: 'intermediate',
        tags: ['kinesis-video', 'camera', 'streaming'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Camera', iconId: 'iot-thing' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Kinesis Video', iconId: 'kinesis-video-streams' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Rekognition', iconId: 'rekognition' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },

    // INTEGRATION (Target: 5)
    // 1. integration-event-driven (Existing)
    // 2. integration-api-facade (Added below)
    // 3. integration-webhook-handler (Added below)
    // 4. integration-legacy-proxy (Added below)
    // 5. integration-pub-sub (Added below)

    {
        id: 'integration-api-facade',
        name: 'API Facade',
        category: 'integration',
        description: 'Unified API fronting multiple services',
        difficulty: 'intermediate',
        tags: ['api-gateway', 'alb', 'proxy'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Client', iconId: 'public-users' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'API Gateway', iconId: 'api-gateway' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 50 }, data: { label: 'Service A', iconId: 'lambda-function' } },
            { id: 'n4', type: 'custom', position: { x: 350, y: 150 }, data: { label: 'Service B', iconId: 'app-server' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e2-4', source: 'n2', target: 'n4' }
        ]
    },
    {
        id: 'integration-webhook-handler',
        name: 'Webhook Handler',
        category: 'integration',
        description: 'Reliable webhook ingestion',
        difficulty: 'beginner',
        tags: ['webhook', 'sqs', 'lambda'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: '3rd Party', iconId: 'internet-gateway' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'API Gateway', iconId: 'api-gateway' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Buffer Queue', iconId: 'sqs' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'Processor', iconId: 'lambda-function' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'integration-legacy-proxy',
        name: 'Legacy Proxy',
        category: 'integration',
        description: 'Secure access to on-prem resources',
        difficulty: 'advanced',
        tags: ['vpn', 'proxy', 'hybrid'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'API Gateway', iconId: 'api-gateway' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Nginx Proxy', iconId: 'app-server' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'VPN', iconId: 'vpn-connection' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'On-Prem DB', iconId: 'database' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'integration-pub-sub',
        name: 'Pub/Sub Pattern',
        category: 'integration',
        description: 'Fan-out messaging pattern',
        difficulty: 'intermediate',
        tags: ['sns', 'fanout', 'messaging'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Publisher', iconId: 'lambda-function' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'SNS Topic', iconId: 'sns' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 50 }, data: { label: 'Email Q', iconId: 'sqs' } },
            { id: 'n4', type: 'custom', position: { x: 350, y: 150 }, data: { label: 'Analytics Q', iconId: 'sqs' } },
            { id: 'n5', type: 'custom', position: { x: 350, y: 250 }, data: { label: 'Audit Q', iconId: 'sqs' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e2-4', source: 'n2', target: 'n4' },
            { id: 'e2-5', source: 'n2', target: 'n5' }
        ]
    },

    // MEDIA (Target: 5)
    // 1. media-live-stream (Existing)
    // 2. media-vod-workflow (Added below)
    // 3. media-server-side-ad-insertion (Added below)
    // 4. media-live-to-vod (Added below)
    // 5. media-content-moderation (Added below)

    {
        id: 'media-vod-workflow',
        name: 'VOD Workflow',
        category: 'media',
        description: 'Video on demand processing pipeline',
        difficulty: 'intermediate',
        tags: ['vod', 'mediaconvert', 's3'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Source File', iconId: 's3-bucket' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Convert', iconId: 'media-convert' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Output', iconId: 's3-bucket' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'CDN', iconId: 'cloudfront' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'media-server-side-ad-insertion',
        name: 'Ad Insertion',
        category: 'media',
        description: 'Monetize video with server-side ads',
        difficulty: 'advanced',
        tags: ['ads', 'mediatailor', 'monetization'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Content', iconId: 'media-package' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 50 }, data: { label: 'Ad Decision', iconId: 'lambda-function' } },
            { id: 'n3', type: 'custom', position: { x: 200, y: 150 }, data: { label: 'Ad Server', iconId: 'app-server' } },
            { id: 'n4', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'MediaTailor', iconId: 'media-tailor' } },
            { id: 'n5', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'Distribution', iconId: 'cloudfront' } }
        ],
        edges: [
            { id: 'e1-4', source: 'n1', target: 'n4' },
            { id: 'e2-4', source: 'n2', target: 'n4' },
            { id: 'e3-4', source: 'n3', target: 'n4' },
            { id: 'e4-5', source: 'n4', target: 'n5' }
        ]
    },
    {
        id: 'media-live-to-vod',
        name: 'Live to VOD',
        category: 'media',
        description: 'Archive live streams for on-demand playback',
        difficulty: 'intermediate',
        tags: ['live', 'archive', 'vod'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Live Stream', iconId: 'media-live' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Package & Archive', iconId: 'media-package' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'S3 Archive', iconId: 's3-bucket' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'media-content-moderation',
        name: 'Content Moderation',
        category: 'media',
        description: 'Automated moderation of user uploads',
        difficulty: 'intermediate',
        tags: ['moderation', 'rekognition', 'safety'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Upload', iconId: 's3-bucket' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Scan', iconId: 'rekognition' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Flag', iconId: 'lambda-function' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'Review Queue', iconId: 'sqs' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },

    // BUSINESS (Target: 5)
    // 1. business-alexa-skill (Added below)
    // 2. business-connect-call-center (Added below)
    // 3. business-chime-meeting (Added below)
    // 4. business-workmail-integration (Added below)
    // 5. business-honeycode-app (Added below)

    {
        id: 'business-alexa-skill',
        name: 'Alexa Skill',
        category: 'business',
        description: 'Backend for custom Alexa skills',
        difficulty: 'beginner',
        tags: ['alexa', 'voice', 'lambda'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Alexa', iconId: 'alexa-for-business' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Skill Logic', iconId: 'lambda-function' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'User Data', iconId: 'dynamodb' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'business-connect-call-center',
        name: 'Cloud Contact Center',
        category: 'business',
        description: 'Scalable customer contact center',
        difficulty: 'intermediate',
        tags: ['connect', 'call-center', 'voice'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Customer', iconId: 'public-users' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Connect', iconId: 'connect' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Flow Logic', iconId: 'lambda-function' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'CRM', iconId: 'database' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'business-chime-meeting',
        name: 'Meeting App',
        category: 'business',
        description: 'Custom meeting application using Chime SDK',
        difficulty: 'advanced',
        tags: ['chime', 'video', 'meeting'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Client', iconId: 'mobile-client' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Meeting API', iconId: 'api-gateway' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Meeting Mgmt', iconId: 'lambda-function' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'Media Service', iconId: 'chime' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'business-workmail-integration',
        name: 'Email Integration',
        category: 'business',
        description: 'Process incoming emails automatically',
        difficulty: 'beginner',
        tags: ['email', 'workmail', 'automation'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Inbox', iconId: 'workmail' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Rule', iconId: 'lambda-function' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Action', iconId: 'sns' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'business-honeycode-app',
        name: 'No-Code App',
        category: 'business',
        description: 'Business app with Honeycode',
        difficulty: 'beginner',
        tags: ['no-code', 'honeycode', 'app'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'User', iconId: 'public-users' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Honeycode App', iconId: 'honeycode' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Integration', iconId: 'lambda-function' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },

    // DEV TOOLS (Target: 5)
    // 1. dev-cicd (Existing)
    // 2. dev-serverless-pipeline (Added below)
    // 3. dev-container-pipeline (Added below)
    // 4. dev-blue-green (Added below)
    // 5. dev-infrastructure-as-code (Added below)

    {
        id: 'dev-serverless-pipeline',
        name: 'SAM Pipeline',
        category: 'dev-tools',
        description: 'CI/CD for Serverless Applications',
        difficulty: 'intermediate',
        tags: ['sam', 'pipeline', 'serverless'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Git', iconId: 'code-commit' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Build', iconId: 'code-build' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Deploy', iconId: 'cloudformation' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'dev-container-pipeline',
        name: 'Container Pipeline',
        category: 'dev-tools',
        description: 'Build and deploy Docker containers',
        difficulty: 'intermediate',
        tags: ['docker', 'ecs', 'pipeline'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Source', iconId: 'code-commit' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Build Image', iconId: 'code-build' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Registry', iconId: 'ecr' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'EKS Cluster', iconId: 'eks' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'dev-blue-green',
        name: 'Blue/Green Deploy',
        category: 'dev-tools',
        description: 'Safe deployment strategy',
        difficulty: 'advanced',
        tags: ['blue-green', 'codedeploy', 'safety'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Artifact', iconId: 's3-bucket' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'CodeDeploy', iconId: 'code-deploy' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 50 }, data: { label: 'Blue Fleet', iconId: 'ec2-instance' } },
            { id: 'n4', type: 'custom', position: { x: 350, y: 150 }, data: { label: 'Green Fleet', iconId: 'ec2-instance' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e2-4', source: 'n2', target: 'n4' }
        ]
    },
    {
        id: 'dev-infrastructure-as-code',
        name: 'IaC Pipeline',
        category: 'dev-tools',
        description: 'Manage infrastructure versioning',
        difficulty: 'advanced',
        tags: ['iac', 'cdk', 'cloudformation'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'CDK Code', iconId: 'code-commit' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Synth', iconId: 'code-build' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'ChangeSet', iconId: 'cloudformation' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },

    // MIGRATION (Target: 5)
    // 1. migration-database (Added below)
    // 2. migration-server (Added below)
    // 3. migration-data-transfer (Added below)
    // 4. migration-snowball (Added below)
    // 5. migration-mainframe (Added below)

    {
        id: 'migration-database',
        name: 'Database Migration',
        category: 'migration',
        description: 'Migrate on-prem DB to RDS',
        difficulty: 'intermediate',
        tags: ['dms', 'migration', 'database'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Source DB', iconId: 'database' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'DMS Instance', iconId: 'dms' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Target RDS', iconId: 'rds' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'migration-server',
        name: 'Server Migration',
        category: 'migration',
        description: 'Lift and shift servers to EC2',
        difficulty: 'intermediate',
        tags: ['sms', 'migration', 'lift-shift'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'VMware', iconId: 'app-server' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Server Migration', iconId: 'server-migration-service' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'AMI', iconId: 'ec2-ami' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'EC2', iconId: 'ec2-instance' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'migration-data-transfer',
        name: 'DataSync Transfer',
        category: 'migration',
        description: 'Automated data transfer to S3/EFS',
        difficulty: 'beginner',
        tags: ['datasync', 'storage', 'migration'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'NFS/SMB', iconId: 'file-system' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'DataSync Agent', iconId: 'datasync' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Target S3', iconId: 's3-bucket' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'migration-snowball',
        name: 'Offline Transfer',
        category: 'migration',
        description: 'Petabyte-scale data transport',
        difficulty: 'beginner',
        tags: ['snowball', 'offline', 'transfer'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Datacenter', iconId: 'corporate-data-center' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Snowball Edge', iconId: 'snowball' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'AWS Region', iconId: 'region' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'S3 Import', iconId: 's3-bucket' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'migration-mainframe',
        name: 'Mainframe Modernization',
        category: 'migration',
        description: 'Replatform mainframe workloads',
        difficulty: 'advanced',
        tags: ['mainframe', 'modernization', 'replatform'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Mainframe', iconId: 'app-server' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Micro Focus', iconId: 'ec2-instance' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'RDS PostgreSQL', iconId: 'rds' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },

    // EUC (Target: 5)
    // 1. euc-workspaces (Added below)
    // 2. euc-appstream (Added below)
    // 3. euc-vdi (Added below)
    // 4. euc-remote-access (Added below)
    // 5. euc-docs-repo (Added below)

    {
        id: 'euc-workspaces',
        name: 'Cloud Desktop',
        category: 'euc',
        description: 'Managed desktop as a service',
        difficulty: 'intermediate',
        tags: ['workspaces', 'desktop', 'vdi'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'User', iconId: 'public-users' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'AD Connector', iconId: 'directory-service' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'WorkSpaces', iconId: 'workspaces' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'Internet', iconId: 'internet-gateway' } }
        ],
        edges: [
            { id: 'e1-3', source: 'n1', target: 'n3' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'euc-appstream',
        name: 'App Streaming',
        category: 'euc',
        description: 'Stream desktop applications to any device',
        difficulty: 'intermediate',
        tags: ['appstream', 'streaming', 'desktop'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'User', iconId: 'public-users' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'AppStream 2.0', iconId: 'appstream-2-0' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'S3 Home Folder', iconId: 's3-bucket' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'euc-vdi',
        name: 'Custom VDI',
        category: 'euc',
        description: 'VDI solution on EC2',
        difficulty: 'advanced',
        tags: ['vdi', 'ec2', 'remote'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Client', iconId: 'mobile-client' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'VDI Gateway', iconId: 'vdi-gateway' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Desktop Instance', iconId: 'ec2-instance' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'NFS Storage', iconId: 'file-system' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'euc-remote-access',
        name: 'Remote Access VPN',
        category: 'euc',
        description: 'Secure access to private subnet',
        difficulty: 'beginner',
        tags: ['vpn', 'remote', 'access'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Remote User', iconId: 'public-users' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Client VPN', iconId: 'client-vpn' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Private Subnet', iconId: 'subnet' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'euc-docs-repo',
        name: 'Document Repo',
        category: 'euc',
        description: 'Managed content collaboration',
        difficulty: 'beginner',
        tags: ['workdocs', 'storage', 'collaboration'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'User', iconId: 'public-users' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'WorkDocs', iconId: 'workdocs' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Directory', iconId: 'directory-service' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },

    // MOBILE (Target: 5)
    // 1. mobile-backend (Existing - DUPLICATE ID at line 243) -> I'll rename this NEW one to avoid conflict, relying on diff logic
    // 2. mobile-amplify-full (Added below)
    // 3. mobile-geo-app (Added below)
    // 4. mobile-device-farm (Added below)
    // 5. mobile-user-engagement (Added below)

    {
        id: 'mobile-app-full',
        name: 'Full Stack Mobile',
        category: 'mobile',
        description: 'Amplify backend with data store',
        difficulty: 'intermediate',
        tags: ['amplify', 'appsync', 'mobile'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'iOS/Android', iconId: 'mobile-client' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Amplify', iconId: 'amplify-mobile' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 50 }, data: { label: 'Cognito', iconId: 'cognito' } },
            { id: 'n4', type: 'custom', position: { x: 350, y: 150 }, data: { label: 'AppSync', iconId: 'app-sync-mobile' } },
            { id: 'n5', type: 'custom', position: { x: 500, y: 150 }, data: { label: 'DynamoDB', iconId: 'dynamodb' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e2-4', source: 'n2', target: 'n4' },
            { id: 'e4-5', source: 'n4', target: 'n5' }
        ]
    },
    {
        id: 'mobile-geo-app',
        name: 'Geo Application',
        category: 'mobile',
        description: 'Location-based mobile app',
        difficulty: 'intermediate',
        tags: ['location', 'map', 'mobile'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Mobile App', iconId: 'mobile-client' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Location Svc', iconId: 'location-service' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Tracker', iconId: 'lambda-function' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'Geofence DB', iconId: 'dynamodb' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'mobile-device-farm',
        name: 'App Testing',
        category: 'mobile',
        description: 'Automated testing on real devices',
        difficulty: 'beginner',
        tags: ['testing', 'device-farm', 'ci'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Build Server', iconId: 'code-build' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Artifacts', iconId: 's3-bucket' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Device Farm', iconId: 'device-farm-mobile' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'mobile-user-engagement',
        name: 'User Engagement',
        category: 'mobile',
        description: 'Push notifications and analytics',
        difficulty: 'intermediate',
        tags: ['pinpoint', 'push', 'analytics'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'User Action', iconId: 'mobile-client' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Pinpoint', iconId: 'pinpoint-mobile' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Campaign Lambda', iconId: 'lambda-function' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },

    // BLOCKCHAIN (Target: 5)
    // 1. blockchain-node (Existing - in security/blockchain) -> I'll treat it as one.
    // 2. blockchain-hyperledger (Added below)
    // 3. blockchain-ethereum-dapp (Added below)
    // 4. blockchain-supply-chain (Added below)
    // 5. blockchain-crypto-exchange (Added below)

    {
        id: 'blockchain-hyperledger',
        name: 'Hyperledger Fabric',
        category: 'blockchain',
        description: 'Private permissioned blockchain network',
        difficulty: 'advanced',
        tags: ['hyperledger', 'fabric', 'private'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Member Org', iconId: 'member' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 50 }, data: { label: 'Peer Node', iconId: 'peer-node' } },
            { id: 'n3', type: 'custom', position: { x: 200, y: 150 }, data: { label: 'Orderer', iconId: 'orderer' } },
            { id: 'n4', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'CA', iconId: 'ca-service' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e1-3', source: 'n1', target: 'n3' },
            { id: 'e1-4', source: 'n1', target: 'n4' }
        ]
    },
    {
        id: 'blockchain-ethereum-dapp',
        name: 'Ethereum DApp',
        category: 'blockchain',
        description: 'Public blockchain application',
        difficulty: 'intermediate',
        tags: ['ethereum', 'dapp', 'web3'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Web3 Wallet', iconId: 'crypto-wallet' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Eth Client', iconId: 'ethereum-client' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Smart Contract', iconId: 'smart-contract' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'blockchain-supply-chain',
        name: 'Supply Chain',
        category: 'blockchain',
        description: 'Track goods with immutable ledger',
        difficulty: 'advanced',
        tags: ['qldb', 'supply-chain', 'ledger'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Scanner', iconId: 'iot-thing' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Processor', iconId: 'lambda-function' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'QLDB Ledger', iconId: 'qldb' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'blockchain-crypto-exchange',
        name: 'Crypto Exchange',
        category: 'blockchain',
        description: 'High performance trading platform',
        difficulty: 'advanced',
        tags: ['exchange', 'trading', 'crypto'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'User', iconId: 'public-users' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'ALB', iconId: 'load-balancer' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Matching Engine', iconId: 'fargate' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'Order DB', iconId: 'dynamodb' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },

    // SATELLITE (Target: 5)
    // 1. satellite-ground-station (Added below)
    // 2. satellite-earth-observation (Added below)
    // 3. satellite-data-processing (Added below)
    // 4. satellite-broadcast (Added below)
    // 5. satellite-archive (Added below)

    {
        id: 'satellite-ground-station',
        name: 'Ground Station',
        category: 'satellite',
        description: 'Direct satellite communication',
        difficulty: 'advanced',
        tags: ['ground-station', 'satellite', 'communication'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Antenna', iconId: 'ground-station' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Receiver', iconId: 'ec2-instance' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Data Lake', iconId: 's3-bucket' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'satellite-earth-observation',
        name: 'Earth Observation',
        category: 'satellite',
        description: 'Process satellite imagery',
        difficulty: 'intermediate',
        tags: ['imagery', 'satellite', 'observation'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Satellite', iconId: 'satellite' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Downlink', iconId: 'ground-station' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Processing', iconId: 'ec2-instance' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'satellite-data-processing',
        name: 'Space Data ETL',
        category: 'satellite',
        description: 'ETL pipeline for space data',
        difficulty: 'advanced',
        tags: ['etl', 'space', 'data'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Raw Data', iconId: 's3-bucket' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Transformation', iconId: 'lambda-function' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'SageMaker', iconId: 'sagemaker' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'satellite-broadcast',
        name: 'Broadcast Uplink',
        category: 'satellite',
        description: 'Uplink to broadcast satellite',
        difficulty: 'intermediate',
        tags: ['broadcast', 'uplink', 'satellite'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Source', iconId: 'media-live' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Uplink Station', iconId: 'ground-station' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Satellite', iconId: 'satellite' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'satellite-archive',
        name: 'Space Archive',
        category: 'satellite',
        description: 'Long-term storage for space data',
        difficulty: 'beginner',
        tags: ['archive', 'glacier', 'storage'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Data', iconId: 's3-bucket' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Lifecycle Rule', iconId: 's3-glacier' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Deep Archive', iconId: 's3-glacier-deep-archive' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },

    // GAME TECH (Target: 5)
    // 1. game-tech-hosting (Added below)
    // 2. game-tech-matchmaking (Added below)
    // 3. game-tech-analytics (Added below)
    // 4. game-tech-realtime (Added below)
    // 5. game-tech-leaderboard (Added below)

    {
        id: 'game-tech-hosting',
        name: 'Game Server Hosting',
        category: 'game-tech',
        description: 'Dedicated game server hosting',
        difficulty: 'intermediate',
        tags: ['gamelift', 'hosting', 'multiplayer'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Player', iconId: 'public-users' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'GameLift Fleet', iconId: 'gamelift' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Backfill', iconId: 'sqs' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'game-tech-matchmaking',
        name: 'Matchmaking Service',
        category: 'game-tech',
        description: 'Scalable matchmaking logic',
        difficulty: 'advanced',
        tags: ['matchmaking', 'flexmatch', 'game'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Player', iconId: 'public-users' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'FlexMatch', iconId: 'gamelift' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Ticket', iconId: 'dynamodb' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'Assignment', iconId: 'sns' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'game-tech-analytics',
        name: 'Game Analytics',
        category: 'game-tech',
        description: 'Real-time game metrics',
        difficulty: 'intermediate',
        tags: ['analytics', 'kinesis', 'dashboard'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Client Events', iconId: 'mobile-client' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Ingest', iconId: 'kinesis-data-streams' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Processing', iconId: 'kinesis-data-analytics' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'Dashboard', iconId: 'quicksight' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'game-tech-realtime',
        name: 'Real-time UDP',
        category: 'game-tech',
        description: 'Low latency UDP game server',
        difficulty: 'advanced',
        tags: ['udp', 'real-time', 'fargate'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Client', iconId: 'mobile-client' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'NLB (UDP)', iconId: 'load-balancer' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Game Server', iconId: 'fargate' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'game-tech-leaderboard',
        name: 'Leaderboard',
        category: 'game-tech',
        description: 'High performance leaderboard',
        difficulty: 'beginner',
        tags: ['leaderboard', 'redis', 'cache'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Game Client', iconId: 'mobile-client' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'API', iconId: 'api-gateway' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Update Score', iconId: 'lambda-function' } },
            { id: 'n4', type: 'custom', position: { x: 500, y: 100 }, data: { label: 'ElastiCache', iconId: 'elasticache' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },

    // MANAGEMENT (Target: 5)
    // 1. management-multi-account (Added below)
    // 2. management-logging (Added below)
    // 3. management-compliance (Added below)
    // 4. management-patching (Added below)
    // 5. management-cost-optimization (Added below)

    {
        id: 'management-multi-account',
        name: 'Multi-Account Setup',
        category: 'management',
        description: 'Governance with Control Tower',
        difficulty: 'advanced',
        tags: ['control-tower', 'organizations', 'governance'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Master', iconId: 'organizations' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Control Tower', iconId: 'control-tower' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 50 }, data: { label: 'Log Archive', iconId: 's3-bucket' } },
            { id: 'n4', type: 'custom', position: { x: 350, y: 150 }, data: { label: 'Audit', iconId: 'cloudtrail' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e2-4', source: 'n2', target: 'n4' }
        ]
    },
    {
        id: 'management-logging',
        name: 'Central Logging',
        category: 'management',
        description: 'Centralized log aggregation',
        difficulty: 'intermediate',
        tags: ['logging', 'cloudtrail', 'athena'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Account A', iconId: 'cloudtrail' } },
            { id: 'n2', type: 'custom', position: { x: 50, y: 200 }, data: { label: 'Account B', iconId: 'cloudtrail' } },
            { id: 'n3', type: 'custom', position: { x: 200, y: 150 }, data: { label: 'Central S3', iconId: 's3-bucket' } },
            { id: 'n4', type: 'custom', position: { x: 350, y: 150 }, data: { label: 'Athena Query', iconId: 'athena' } }
        ],
        edges: [
            { id: 'e1-3', source: 'n1', target: 'n3' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e3-4', source: 'n3', target: 'n4' }
        ]
    },
    {
        id: 'management-compliance',
        name: 'Compliance Rules',
        category: 'management',
        description: 'Automated compliance checks',
        difficulty: 'intermediate',
        tags: ['config', 'compliance', 'automation'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'AWS Config', iconId: 'config' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Rule Check', iconId: 'lambda-function' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Remediation', iconId: 'systems-manager' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    },
    {
        id: 'management-patching',
        name: 'Patch Management',
        category: 'management',
        description: 'Automated server patching',
        difficulty: 'beginner',
        tags: ['patch', 'ssm', 'maintenance'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Maintenance Window', iconId: 'systems-manager' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Run Command', iconId: 'systems-manager' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 50 }, data: { label: 'EC2 A', iconId: 'ec2-instance' } },
            { id: 'n4', type: 'custom', position: { x: 350, y: 150 }, data: { label: 'EC2 B', iconId: 'ec2-instance' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' },
            { id: 'e2-4', source: 'n2', target: 'n4' }
        ]
    },
    {
        id: 'management-cost-optimization',
        name: 'Cost Control',
        category: 'management',
        description: 'Monitor and control spending',
        difficulty: 'beginner',
        tags: ['cost', 'budgets', 'alert'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'Cost Explorer', iconId: 'cost-explorer' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Audit', iconId: 'lambda-function' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Budget Alert', iconId: 'sns' } }
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3' }
        ]
    }
];

export const templates = rawTemplates.map(t => ({
    ...t,
    nodes: t.nodes.map(n => {
        const icon = icons.find(i => i.id === n.data.iconId);
        return {
            ...n,
            data: {
                ...n.data,
                svg: icon ? icon.svg : n.data.svg,
                color: icon ? icon.color : n.data.color
            }
        };
    })
}));

// Get templates by category
export const getTemplatesByCategory = (categoryId) => {
    return templates.filter(t => t.category === categoryId);
};

// Get template by ID
export const getTemplateById = (templateId) => {
    return templates.find(t => t.id === templateId);
};

// Get difficulty badge color
export const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
        case 'beginner': return '#10b981';
        case 'intermediate': return '#f59e0b';
        case 'advanced': return '#ec4899';
        default: return '#6b7280';
    }
};
