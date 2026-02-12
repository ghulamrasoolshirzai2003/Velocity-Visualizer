// Additional cloud architecture templates (Part 2)
export const additionalTemplates = [
    // E-commerce
    {
        id: 'ecommerce-full',
        name: 'E-commerce Platform',
        category: 'web',
        description: 'Complete e-commerce with payment, inventory, and CDN',
        difficulty: 'advanced',
        tags: ['payment', 'inventory', 'cdn'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 100, y: 50 }, data: { label: 'CDN', iconId: 'cdn', color: '#00f0ff', svg: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' } },
            { id: 'n2', type: 'custom', position: { x: 100, y: 150 }, data: { label: 'Load Balancer', iconId: 'load-balancer', color: '#00f0ff', svg: 'M4 6h16M4 12h16M4 18h16' } },
            { id: 'n3', type: 'custom', position: { x: 100, y: 250 }, data: { label: 'Web App', iconId: 'web-server', color: '#a855f7', svg: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' } },
            { id: 'n4', type: 'custom', position: { x: 250, y: 250 }, data: { label: 'Payment Gateway', iconId: 'api-gateway', color: '#10b981', svg: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' } },
            { id: 'n5', type: 'custom', position: { x: 100, y: 350 }, data: { label: 'Database', iconId: 'database', color: '#10b981', svg: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' } }
        ],
        edges: [
            { id: 'e1', source: 'n1', target: 'n2' },
            { id: 'e2', source: 'n2', target: 'n3' },
            { id: 'e3', source: 'n3', target: 'n4' },
            { id: 'e4', source: 'n3', target: 'n5' }
        ]
    },
    // IoT Platform
    {
        id: 'iot-platform',
        name: 'IoT Data Platform',
        category: 'data',
        description: 'IoT device management with real-time processing',
        difficulty: 'advanced',
        tags: ['iot', 'real-time', 'streaming'],
        nodes: [
            { id: 'n1', type: 'custom', position: { x: 50, y: 100 }, data: { label: 'IoT Devices', iconId: 'monitoring', color: '#f59e0b', svg: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' } },
            { id: 'n2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Message Queue', iconId: 'message-queue', color: '#f59e0b', svg: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' } },
            { id: 'n3', type: 'custom', position: { x: 350, y: 100 }, data: { label: 'Stream Processing', iconId: 'ci-cd', color: '#a855f7', svg: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' } },
            { id: 'n4', type: 'custom', position: { x: 350, y: 250 }, data: { label: 'Time Series DB', iconId: 'database', color: '#10b981', svg: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' } }
        ],
        edges: [
            { id: 'e1', source: 'n1', target: 'n2' },
            { id: 'e2', source: 'n2', target: 'n3' },
            { id: 'e3', source: 'n3', target: 'n4' }
        ]
    }
];
