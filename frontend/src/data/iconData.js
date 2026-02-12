// Cloud Architecture Icon System
// 40+ icons across multiple categories with connection validation rules

import { iconEnhancements } from './iconEnhancements';

export const iconCategories = {
    SECURITY: 'Security',
    NETWORKING: 'Networking',
    COMPUTE: 'Compute',
    STORAGE: 'Storage',
    DEVOPS: 'DevOps',
    WEB_APP: 'Web Application',
    ANALYTICS: 'Analytics',
    AI_ML: 'AI & Machine Learning',
    IOT: 'IoT & Robotics',
    INTEGRATION: 'App Integration',
    BUSINESS: 'Business Apps',
    DEV_TOOLS: 'Developer Tools',
    MIGRATION: 'Migration',
    MEDIA: 'Media Services',
    EUC: 'End User Computing',
    MOBILE: 'Mobile',
    BLOCKCHAIN: 'Blockchain',
    SATELLITE: 'Satellite',
    GAME_TECH: 'Game Tech',
    MANAGEMENT: 'Management'
};

// Categories mapped to validation roles
export const VALIDATION_ROLES = {
    PUBLIC_ENTRY: [
        iconCategories.MOBILE,
        iconCategories.IOT,
        iconCategories.WEB_APP,
        iconCategories.EUC
    ],
    SENSITIVE_DATA: [
        iconCategories.STORAGE,
        iconCategories.ANALYTICS,
        iconCategories.BLOCKCHAIN,
        iconCategories.MANAGEMENT,
        iconCategories.DEVOPS // Secrets, Config, etc.
    ],
    SECURITY_LAYER: [
        iconCategories.SECURITY,
        // Networking handled separately due to mixed content
    ],
    COMPUTE_LAYER: [
        iconCategories.COMPUTE,
        iconCategories.AI_ML,
        iconCategories.MEDIA,
        iconCategories.GAME_TECH,
        iconCategories.BUSINESS,
        iconCategories.MIGRATION,
        iconCategories.INTEGRATION,
        iconCategories.DEV_TOOLS,
        iconCategories.SATELLITE
    ]
};

export const icons = [
    // SECURITY (8 icons)
    {
        id: 'waf',
        name: 'WAF',
        category: iconCategories.SECURITY,
        svg: 'M12 2l-8 3v6c0 5 8 9 8 9s8-4 8-9V5l-8-3z M18 10h-2v2h2v-2z M14 10h-2v2h2v-2z M10 10h-2v2h2v-2z M18 13h-2v2h2v-2z M14 13h-2v2h2v-2z M10 13h-2v2h2v-2z',
        color: '#ec4899'
    },
    {
        id: 'firewall',
        name: 'Firewall',
        category: iconCategories.SECURITY,
        svg: 'M2 13h8v6H2v-6z M12 13h10v6H12v-6z M2 6h10v6H2V6z M14 6h8v6h-8V6z M12 15c0-2-1-3-2-4 1 0 2 1 2 4z M12 17c0-1-0.5-1.5-1-2 0.5 0 1 0.5 1 2z',
        color: '#ec4899'
    },
    {
        id: 'encryption',
        name: 'Encryption',
        category: iconCategories.SECURITY,
        svg: 'M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm-3 5a3 3 0 016 0v3H9V7zm3 10a2 2 0 112-2 2 2 0 01-2 2z',
        color: '#ec4899'
    },
    {
        id: 'identity-mgmt',
        name: 'Identity Management',
        category: iconCategories.SECURITY,
        svg: 'M12 11a4 4 0 100-8 4 4 0 000 8z M12 13c-4.4 0-8 2.2-8 5v3h16v-3c0-2.8-3.6-5-8-5z M18 13l3 3-3 3 M21 16h-4',
        color: '#ec4899'
    },
    {
        id: 'mfa',
        name: 'MFA',
        category: iconCategories.SECURITY,
        svg: 'M12 2a4 4 0 100 8 4 4 0 000-8z M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2 M19 8h2a1 1 0 011 1v4a1 1 0 01-1 1h-2a1 1 0 01-1-1V9a1 1 0 011-1z M20 12h.01',
        color: '#ec4899'
    },
    {
        id: 'ddos-protection',
        name: 'DDoS Protection',
        category: iconCategories.SECURITY,
        svg: 'M12 2l-8 3v6c0 5 8 9 8 9s8-4 8-9V5l-8-3z M12 6c-3 0-5.5 2.5-5.5 5.5S9 17 12 17s5.5-2.5 5.5-5.5S15 6 12 6zm0 2.5a3 3 0 100 6 3 3 0 000-6z M12 11v2 M10 12h4',
        color: '#ec4899'
    },
    {
        id: 'secrets-vault',
        name: 'Secrets Vault',
        category: iconCategories.SECURITY,
        svg: 'M12 2a10 10 0 100 20 10 10 0 000-20z M12 17a5 5 0 100-10 5 5 0 000 10z M12 10v4 M10 12h4 M15 12h1 M8 12h1',
        color: '#ec4899'
    },
    {
        id: 'compliance',
        name: 'Compliance',
        category: iconCategories.SECURITY,
        svg: 'M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2 M12 2v4 M8 4h8 M9 12l2 2 4-4',
        color: '#ec4899'
    },
    {
        id: 'inspector',
        name: 'Inspector',
        category: iconCategories.SECURITY,
        svg: 'M21 21l-4.35-4.35 M11 19a8 8 0 100-16 8 8 0 000 16z M9 9h4v4h-4z M7 7h8v8h-8z',
        color: '#ec4899'
    },
    {
        id: 'guardduty',
        name: 'GuardDuty',
        category: iconCategories.SECURITY,
        svg: 'M12 2l-8 3v6c0 5 8 9 8 9s8-4 8-9V5l-8-3z M12 6a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z M12 10v2',
        color: '#ec4899'
    },
    {
        id: 'macie',
        name: 'Macie',
        category: iconCategories.SECURITY,
        svg: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z M14 3l5 5h-5V3z M18 18l-3-3 m0-4a4 4 0 10-8 0 4 4 0 008 0z',
        color: '#ec4899'
    },
    {
        id: 'shield',
        name: 'Shield',
        category: iconCategories.SECURITY,
        svg: 'M12 2l-10 4.5v6c0 5.5 10 10.5 10 10.5s10-5 10-10.5v-6L12 2z M12 5l7 3.5v5c0 4-7 8-7 8s-7-4-7-8v-5L12 5z',
        color: '#ec4899'
    },
    {
        id: 'kms',
        name: 'KMS',
        category: iconCategories.SECURITY,
        svg: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z M15 7l-1-1-4 4v4h4v-2h-2v-2h2z M10 11h2v2h-2z',
        color: '#ec4899'
    },
    {
        id: 'cloudhsm',
        name: 'CloudHSM',
        category: iconCategories.SECURITY,
        svg: 'M2 8v8h20V8H2zm2 2h16v4H4v-4zm3 1h2v2H7v-2zm4 0h6v2h-6v-2z M12 4v2 M12 18v2',
        color: '#ec4899'
    },
    {
        id: 'cert-manager',
        name: 'Cert Mgr',
        category: iconCategories.SECURITY,
        svg: 'M12 2L3 7v10l9 5 9-5V7l-9-5z M12 5l7 4v3h-4v-1h-6v1H5V9l7-4z M5 14h4v1h6v-1h4v3l-7 4-7-4v-3z',
        color: '#ec4899'
    },
    {
        id: 'waf-v2',
        name: 'WAF V2',
        category: iconCategories.SECURITY,
        svg: 'M3 10h18M3 14h18M3 18h18M7 10v4M12 10v4M17 10v4M5 14v4M10 14v4M15 14v4M20 14v4 M12 2l-7 3v6c0 5 7 9 7 9s7-4 7-9V5l-7-3z M18 4l2 2-2 2 M12 6v6m-2-2l2 2 2-2',
        color: '#ec4899'
    },
    {
        id: 'firewall-mgr',
        name: 'Firewall Mgr',
        category: iconCategories.SECURITY,
        svg: 'M12 2a10 10 0 100 20 10 10 0 000-20z M7 8h10v2H7V8z M7 12h10v2H7v-2z M7 16h6v2H7v-2z M15 15l2 2 4-4',
        color: '#ec4899'
    },
    {
        id: 'artifact',
        name: 'Artifact',
        category: iconCategories.SECURITY,
        svg: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z M14 3l5 5h-5V3z M12 15s4-2 4-5-4-5-4-5-4 2-4 5 4 5 4 5z M12 12a2 2 0 100-4 2 2 0 000 4z',
        color: '#ec4899'
    },
    {
        id: 'detective',
        name: 'Detective',
        category: iconCategories.SECURITY,
        svg: 'M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z M15 15l6 6 M10 6v4h4',
        color: '#ec4899'
    },
    {
        id: 'security-hub',
        name: 'Security Hub',
        category: iconCategories.SECURITY,
        svg: 'M12 2a10 10 0 110 20 10 10 0 010-20zm0 18a8 8 0 100-16 8 8 0 000 16z M12 6l3 6-3 6-3-6 3-6z M8 12h8 M12 8v8',
        color: '#ec4899'
    },

    // NETWORKING (8 icons)
    {
        id: 'load-balancer',
        name: 'Load Balancer',
        category: iconCategories.NETWORKING,
        svg: 'M12 2l-10 5v10l10 5 10-5V7l-10-5zm8 14.2l-8 4-8-4V8.8l8-4 8 4v7.4z M10 12l2 2 2-2 M6 10l2 2-2 2 M18 10l-2 2 2 2',
        color: '#00f0ff'
    },
    {
        id: 'api-gateway',
        name: 'API Gateway',
        category: iconCategories.NETWORKING,
        svg: 'M12 1L3 5v14l9 4 9-4V5l-9-4zm7 17.5l-7 3.1-7-3.1V6.5l7-3.1 7 3.1v11z M12 7c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
        color: '#00f0ff'
    },
    {
        id: 'cdn',
        name: 'CDN',
        category: iconCategories.NETWORKING,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M12 6c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm0 2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z M9 11l1 1-1 1 M15 11l-1 1 1 1',
        color: '#00f0ff'
    },
    {
        id: 'dns',
        name: 'DNS',
        category: iconCategories.NETWORKING,
        svg: 'M19 15v3H5v-3h14m2-10H3v12h18V5zm-2 2v3H5V7h14zM5 11h14v3H5v-3z M12 12l2 2-2 2-2-2 2-2z',
        color: '#00f0ff'
    },
    {
        id: 'vpn',
        name: 'VPN',
        category: iconCategories.NETWORKING,
        svg: 'M18 10V8c0-3.3-2.7-6-6-6S6 4.7 6 8v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-1zM8 8c0-2.2 1.8-4 4-4s4 1.8 4 4v2H8V8zm11 12H5V12h14v8z M10 15h4v1.5L12 18l-2-1.5V15z',
        color: '#00f0ff'
    },
    {
        id: 'nat-gateway',
        name: 'NAT Gateway',
        category: iconCategories.NETWORKING,
        svg: 'M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2zm-2 0H7V5h10v14z M10 11l2 2 4-4',
        color: '#00f0ff'
    },
    {
        id: 'public-users',
        name: 'Public Users',
        category: iconCategories.NETWORKING,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z',
        color: '#00f0ff'
    },
    {
        id: 'web-server',
        name: 'Web Server',
        category: iconCategories.NETWORKING,
        svg: 'M19 15v3H5v-3h14m2-10H3v12h18V5zm-2 2v3H5V7h14zM5 11h14v3H5v-3z M12 12l2 2-2 2-2-2 2-2z M8 8h1v1H8z',
        color: '#00f0ff'
    },
    {
        id: 'vpc',
        name: 'VPC',
        category: iconCategories.NETWORKING,
        svg: 'M12 2l-10 5v10l10 5 10-5V7l-10-5zm8 14.2l-8 4-8-4V8.8l8-4 8 4v7.4z M9 9h6v6H9V9z',
        color: '#00f0ff'
    },
    {
        id: 'subnet',
        name: 'Subnet',
        category: iconCategories.NETWORKING,
        svg: 'M20 4H4v16h16V4z M4 2a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2H4zm2 4h3v3H6V6zm5 0h3v3h-3V6zm5 0h2v3h-2V6zM6 11h3v3H6v-3zm5 0h3v3h-3v-3zm5 0h2v3h-2v-3zM6 16h3v2H6v-2zm5 0h3v2h-3v-2zm5 0h2v2h-2v-2z',
        color: '#00f0ff'
    },
    {
        id: 'internet-gateway',
        name: 'Internet Gateway',
        category: iconCategories.NETWORKING,
        svg: 'M13 13h6v8h-6v-8zm1 2h4v4h-4v-4z M17.5 11h-11a4.5 4.5 0 011.25-8.82A7 7 0 0118.3 4.1 4.5 4.5 0 0117.5 11z M5 13l2 2-2 2',
        color: '#00f0ff'
    },
    {
        id: 'vpn-gateway',
        name: 'VPN Gateway',
        category: iconCategories.NETWORKING,
        svg: 'M13 13h6v8h-6v-8z M18 10V8c0-3.3-2.7-6-6-6S6 4.7 6 8v2H5c-1.1 0-2 .9-2 2v2h3v-2h14v2h3v-2c0-1.1-.9-2-2-2h-1zM8 8c0-2.2 1.8-4 4-4s4 1.8 4 4v2H8V8z',
        color: '#00f0ff'
    },
    {
        id: 'customer-gateway',
        name: 'Customer Gateway',
        category: iconCategories.NETWORKING,
        svg: 'M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14M7 3h10v16H7V3zm3 4h4v2h-4V7zm0 4h4v2h-4v-2zm-8 8h20v2H2v-2z',
        color: '#00f0ff'
    },
    {
        id: 'transit-gateway',
        name: 'Transit Gateway',
        category: iconCategories.NETWORKING,
        svg: 'M12 2l-10 5v10l10 5 10-5V7l-10-5zm0 18.5l-8-4V7.5l8-4 8 4v7l-8 4z M12 9l2 2-2 2-2-2 2-2z M12 11h1v1h-1v-1z M12 3v3 M12 18v3 M3 12h3 M18 12h3',
        color: '#00f0ff'
    },
    {
        id: 'route-table',
        name: 'Route Table',
        category: iconCategories.NETWORKING,
        svg: 'M4 4h16v16H4V4z M4 9h16 M4 15h16 M10 4v16 M6 6h2v2H6V6zm6 0h2v2h-2V6zm6 0h2v2h-2V6zM6 11h2v2H6v-11zm6 0h2v2h-2v-11zm6 0h2v2h-2v-11z',
        color: '#00f0ff'
    },
    {
        id: 'network-acl',
        name: 'NACL',
        category: iconCategories.NETWORKING,
        svg: 'M12 2l-10 5v10c0 6 10 10 10 10s10-4 10-10V7l-10-5zm8 15l-8 4-8-4V8.8l8-4 8 4v7.2z M8 10h8v1H8v-1zm0 3h8v1H8v-1zm0 3h5v1H8v-1z',
        color: '#00f0ff'
    },
    {
        id: 'elastic-ip',
        name: 'Elastic IP',
        category: iconCategories.NETWORKING,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M11 7l4 3-4 6 1-3-3 0 2-6z',
        color: '#00f0ff'
    },
    {
        id: 'vpc-peering',
        name: 'VPC Peering',
        category: iconCategories.NETWORKING,
        svg: 'M12 2l-7 3.5v7l7 3.5 7-3.5v-7L12 2zm7 10.5l-7 3.5-7-3.5v-5.5l7 3.5 7-3.5v5.5z M12 22l-7-3.5v-3.5l7 3.5 7-3.5v3.5l-7 3.5z',
        color: '#00f0ff'
    },
    {
        id: 'direct-connect',
        name: 'Direct Connect',
        category: iconCategories.NETWORKING,
        svg: 'M18 10V8c0-1.1-.9-2-2-2h-3V1h-2v5H9c-1.1 0-2 .9-2 2v2H5v3h2v7c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-7h2v-3h-2z M9 19V8h6v11H9z',
        color: '#00f0ff'
    },
    {
        id: 'private-link',
        name: 'PrivateLink',
        category: iconCategories.NETWORKING,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M12 11c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z M7 12h10',
        color: '#00f0ff'
    },

    // COMPUTE (8 icons)
    {
        id: 'container',
        name: 'Container',
        category: iconCategories.COMPUTE,
        svg: 'M12 2L3 7v10l9 5 9-5V7l-9-5z M7 8l5 2.5 5-2.5 M7 13l5 2.5 5-2.5 M12 10.5v10 M3 7l9 4.5 9-4.5',
        color: '#a855f7'
    },
    {
        id: 'serverless',
        name: 'Serverless',
        category: iconCategories.COMPUTE,
        svg: 'M12 1L4 6v12l8 5 8-5V6l-8-5z M11 7l4 3-4 6 1-3-3 0 2-6z',
        color: '#a855f7'
    },
    {
        id: 'kubernetes',
        name: 'Kubernetes',
        category: iconCategories.COMPUTE,
        svg: 'M12 2L4 5l-2 7 2 7 8 3 8-3 2-7-2-5-8-3z M12 5.5s1.5 2.5 1.5 2.5l-3 0 1.5-2.5z M18.5 12l-2.5 1.5V10.5l2.5 1.5z M12 18.5l-1.5-2.5h3L12 18.5z M5.5 12l2.5-1.5v3L5.5 12z M12 12m-2 0a2 2 0 104 0a2 2 0 10-4 0',
        color: '#a855f7'
    },
    {
        id: 'app-server',
        name: 'Application Server',
        category: iconCategories.COMPUTE,
        svg: 'M3 8s1-1 4-1 6 2 9 2 4-1 4-1v10s-1 1-4 1-6-2-9-2-4 1-4 1V8z M12 9v10 M7 11v6 M17 8v6',
        color: '#a855f7'
    },
    {
        id: 'batch-processing',
        name: 'Batch Processing',
        category: iconCategories.COMPUTE,
        svg: 'M2 17l10 5 10-5M2 12l10 5 10-5M12 2L2 7l10 5 10-5-10-5z M7 7l5 2.5L17 7l-5-2.5L7 7z M9 9v3 M15 9v3',
        color: '#a855f7'
    },
    {
        id: 'queue-worker',
        name: 'Queue Worker',
        category: iconCategories.COMPUTE,
        svg: 'M2 12h5V9H2v3zm8 0h12v-1H10v1zm2 3h10v-1H12v1zm-2 3h12v-1H10v1z M5 12v6 M10 11v8 M2 12v6h5v-6H2z',
        color: '#a855f7'
    },
    {
        id: 'edge-compute',
        name: 'Edge Computing',
        category: iconCategories.COMPUTE,
        svg: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zM12 12m-3 0a3 3 0 106 0a3 3 0 10-6 0 M12 4v3 M12 17v3 M4 12h3 M17 12h3',
        color: '#a855f7'
    },
    {
        id: 'vm',
        name: 'Virtual Machine',
        category: iconCategories.COMPUTE,
        svg: 'M12 22l-10-5V5l10-5 10 5v12l-10 5z M12 4L4 8v8l8 4 8-4V8l-8-4z M12 9l4 2-4 2-4-2 4-2z M12 13v4 M8 11v4 M16 11v4',
        color: '#a855f7'
    },
    {
        id: 'ec2-instance',
        name: 'EC2 Instance',
        category: iconCategories.COMPUTE,
        svg: 'M12 2L4 7v10l8 5 8-5V7l-8-5z M12 7l5 3v4l-5 3-5-3v-4l5-3z M9 11h6v2H9v-2zm1-3h4v2h-4V8zm0 6h4v2h-4v-2z',
        color: '#a855f7'
    },
    {
        id: 'auto-scaling-group',
        name: 'Auto Scaling',
        category: iconCategories.COMPUTE,
        svg: 'M2 12l4-4v3h5V6H8l4-4 4 4h-3v5h5V8l4 4-4 4v-3h-5v5h3l-4 4-4-4h3v-5h-5v3l-4-4z',
        color: '#a855f7'
    },
    {
        id: 'elastic-beanstalk',
        name: 'Elastic Beanstalk',
        category: iconCategories.COMPUTE,
        svg: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zM12 16V8M8 12h8M10 14h4',
        color: '#a855f7'
    },
    {
        id: 'lambda-layer',
        name: 'Lambda Layer',
        category: iconCategories.COMPUTE,
        svg: 'M23 16l-11 5L1 16l11-5 11 5z M23 11l-11 5L1 11l11-5 11 5z M12 3l7 3-7 4-7-4 7-3z M12 9l3-2-3-4-3 4 3 2z',
        color: '#a855f7'
    },
    {
        id: 'fargate',
        name: 'Fargate',
        category: iconCategories.COMPUTE,
        svg: 'M12 1L2 6v12l10 5 10-5V6L12 1z M12 5l7 3.5v7L12 19l-7-3.5v-7L12 5z M12 8l3 1.5v3l-3 1.5-3-1.5v-3L12 8z',
        color: '#a855f7'
    },
    {
        id: 'lightsail',
        name: 'Lightsail',
        category: iconCategories.COMPUTE,
        svg: 'M12 2L4 18h16L12 2z M12 6l4 8H8l4-8z M4 20h16v2H4v-2z M12 4v4 M2 18h20',
        color: '#a855f7'
    },
    {
        id: 'outposts',
        name: 'Outposts',
        category: iconCategories.COMPUTE,
        svg: 'M3 3h18v18H3V3zm3 3v12h12V6H6zM8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v1H8v-1z M4 2v19h16V2H4z',
        color: '#a855f7'
    },
    {
        id: 'vmware-cloud',
        name: 'VMware Cloud',
        category: iconCategories.COMPUTE,
        svg: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zM12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z M8 12h8 M12 8v8',
        color: '#a855f7'
    },
    {
        id: 'batch-job',
        name: 'Batch Job',
        category: iconCategories.COMPUTE,
        svg: 'M2 17l10 5 10-5M2 12l10 5 10-5M12 2L2 7l10 5 10-5-10-5z M7 7l5 2.5L17 7l-5-2.5L7 7z M12 8v4 M9 10h6',
        color: '#a855f7'
    },
    {
        id: 'parallel-cluster',
        name: 'Parallel Cluster',
        category: iconCategories.COMPUTE,
        svg: 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 18L5 16.5l3.5-2 3.5 2V20zm0-5.5L8.5 12.5 12 10.5l3.5 2-3.5 2z M5 7.5L12 11l7-3.5L12 4z',
        color: '#a855f7'
    },
    {
        id: 'wavelength',
        name: 'Wavelength',
        category: iconCategories.COMPUTE,
        svg: 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 18a8 8 0 110-16 8 8 0 010 16z M12 12m-3 0a3 3 0 106 0a3 3 0 10-6 0 M12 6v3 M12 15v3 M6 12h3 M15 12h3',
        color: '#a855f7'
    },
    {
        id: 'simspaceweaver',
        name: 'SimSpace',
        category: iconCategories.COMPUTE,
        svg: 'M12 1L3 5v14l9 4 9-4V5l-9-4z M12 6l5 3-5 3-5-3 5-3z M12 12l5 3-5 3-5-3 5-3z M12 12s3 1.5 3 4.5S12 21 12 21s-3-1.5-3-4.5S12 12 12 12z',
        color: '#a855f7'
    },

    // STORAGE (8 icons)
    {
        id: 'database',
        name: 'Database',
        category: iconCategories.STORAGE,
        svg: 'M12 2C8 2 5 3.5 5 5.5v13c0 2 3 3.5 7 3.5s7-1.5 7-3.5v-13C19 3.5 16 2 12 2zm0 3c3 0 5 1 5 1.5S15 8 12 8 7 7 7 6.5 9 5 12 5zm5 13.5c0 .5-2 1.5-5 1.5s-5-1-5-1.5v-2c1.5 1 3 1.5 5 1.5s3.5-.5 5-1.5v2zm0-4c0 .5-2 1.5-5 1.5s-5-1-5-1.5v-2c1.5 1 3 1.5 5 1.5s3.5-.5 5-1.5v2z',
        color: '#10b981'
    },
    {
        id: 'object-storage',
        name: 'Object Storage',
        category: iconCategories.STORAGE,
        svg: 'M12 3a9 9 0 100 18 9 9 0 000-18zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm3-7l-3-3-3 3h2v4h2v-4h2z',
        color: '#10b981'
    },
    {
        id: 'cache',
        name: 'Cache',
        category: iconCategories.STORAGE,
        svg: 'M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9l-7-7zm-1 9V3.5L17.5 9H12z M13 13l3-3-3 3zm0 4l3-3-3 3z M8 8h2v2H8V8zm0 4h2v2H8v-2zm0 4h2v2H8v-2z',
        color: '#10b981'
    },
    {
        id: 'file-storage',
        name: 'File Storage',
        category: iconCategories.STORAGE,
        svg: 'M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v4H8v-4z',
        color: '#10b981'
    },
    {
        id: 'backup',
        name: 'Backup',
        category: iconCategories.STORAGE,
        svg: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm1-13h-2v7l5 3 1-1.7-4-2.3V7z',
        color: '#10b981'
    },
    {
        id: 'data-warehouse',
        name: 'Data Warehouse',
        category: iconCategories.STORAGE,
        svg: 'M20 13H4v-2h16v2zm-2-6H6v2h12V7zM4 17h16v-2H4v2z M2 4h20v16H2V4z',
        color: '#10b981'
    },
    {
        id: 'message-queue',
        name: 'Message Queue',
        category: iconCategories.STORAGE,
        svg: 'M2 9v6h4V9H2zm16 0v6h4V9h-4z M10 12h4m-4-3h4v6h-4V9z M8 12l2 2-2-2zm8 0l-2-2 2 2z',
        color: '#10b981'
    },
    {
        id: 'block-storage',
        name: 'Block Storage',
        category: iconCategories.STORAGE,
        svg: 'M12 12m-9 0a9 9 0 1018 0a9 9 0 10-18 0 M12 7v10 M7 12h10 M12 12l3-3m-3 3l-3 3',
        color: '#10b981'
    },
    {
        id: 's3-bucket',
        name: 'S3 Bucket',
        category: iconCategories.STORAGE,
        svg: 'M3 4h18v2H3V4zm2 4h14v12H5V8zm4 4h6v2H9v-2z',
        color: '#10b981'
    },
    {
        id: 's3-glacier',
        name: 'Glacier',
        category: iconCategories.STORAGE,
        svg: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
        color: '#10b981'
    },
    {
        id: 'efs',
        name: 'EFS',
        category: iconCategories.STORAGE,
        svg: 'M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.9V18h-2v-1.1c-1.3-.3-2-.9-2-2.1h1.5c0 .6.6.9 1.5.9s1.4-.4 1.4-.9c0-.4-.3-.7-1.1-1l-1.2-.4C9.1 13 8.5 12 8.5 10.8c0-1.2.8-2.1 2.5-2.5V7h2v1.2c1.2.3 1.8.9 1.8 2h-1.5c0-.5-.5-.8-1.3-.8s-1.2.3-1.2.8c0 .3.2.7 1 1l1.3.5c1.1.4 1.9 1.2 1.9 2.1 0 1.2-.8 2.3-2.5 2.8z',
        color: '#10b981'
    },
    {
        id: 'fsx',
        name: 'FSx',
        category: iconCategories.STORAGE,
        svg: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z M14 3.5L18.5 8H14V3.5z M8 12h8v2H8v-2zm0 4h8v2H8v-2z',
        color: '#10b981'
    },
    {
        id: 'ebs-volume',
        name: 'EBS Volume',
        category: iconCategories.STORAGE,
        svg: 'M12 2C6.5 2 2 4.2 2 7v10c0 2.8 4.5 5 10 5s10-2.2 10-5V7c0-2.8-4.5-5-10-5z M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3 M4 17c0 1.7 3.6 3 8 3s8-1.3 8-3',
        color: '#10b981'
    },
    {
        id: 'storage-gateway',
        name: 'Storage Gateway',
        category: iconCategories.STORAGE,
        svg: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-5-9h10v2H7z',
        color: '#10b981'
    },
    {
        id: 'backup-vault',
        name: 'Backup Vault',
        category: iconCategories.STORAGE,
        svg: 'M12 1L3 5v14l9 4 9-4V5l-9-4z M12 6a4 4 0 00-4 4v2h8v-2a4 4 0 00-4-4z M18 12v3a2 2 0 01-2 2H8a2 2 0 01-2-2v-3h12z',
        color: '#10b981'
    },
    {
        id: 'dr-service',
        name: 'DR Service',
        category: iconCategories.STORAGE,
        svg: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-13h2v10h-2z',
        color: '#10b981'
    },
    {
        id: 'archive',
        name: 'Archive',
        category: iconCategories.STORAGE,
        svg: 'M4 4h16v4H4V4zm1 6h14v10H5V10zm4 4h6v2H9v-2z',
        color: '#10b981'
    },
    {
        id: 'snapshot',
        name: 'Snapshot',
        category: iconCategories.STORAGE,
        svg: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z',
        color: '#10b981'
    },
    {
        id: 'volume',
        name: 'Volume',
        category: iconCategories.STORAGE,
        svg: 'M23 12l-2.4-2.4 1-3.3-3.3-0.7-1.4-3.1L14 4.3 11.2 2 8.4 4.3 5 3.5 3.6 6.6l-3.3 0.7 1 3.3L1 12l2.4 2.4-1 3.3 3.3 0.7 1.4 3.1 2.9-1.8 2.8 2.3 2.8-2.3 2.9 1.8 1.4-3.1 3.3-0.7-1-3.3L23 12zm-8.3 4.2L12 14.5 9.3 16.2 10 13.2 7.7 11.3 10.7 11.1 12 8.3l1.3 2.8 3 0.2-2.3 1.9 0.7 3z',
        color: '#10b981'
    },
    {
        id: 'bucket-policy',
        name: 'Bucket Policy',
        category: iconCategories.STORAGE,
        svg: 'M12 2a10 10 0 100 20 10 10 0 000-20z M7 12h10 M12 7v10 M9 9l6 6M15 9l-6 6',
        color: '#10b981'
    },

    // DEVOPS (8 icons)
    {
        id: 'ci-cd',
        name: 'CI/CD',
        category: iconCategories.DEVOPS,
        svg: 'M2 13h5v-2H2v2zm5 0h10v-2H7v2zm11 0h4v-2h-4v2z M4 9h2v6H4V9zm12 0h2v6h-2V9z M12 3l-3 3h2v12h-2l3 3 3-3h-2V6h2z',
        color: '#f59e0b'
    },
    {
        id: 'monitoring',
        name: 'Monitoring',
        category: iconCategories.DEVOPS,
        svg: 'M3 3v18h18V3H3zm16 16H5V5h14v14z M7 15l2-2 3 3 5-5 M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z',
        color: '#f59e0b'
    },
    {
        id: 'logging',
        name: 'Logging',
        category: iconCategories.DEVOPS,
        svg: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 8V2l6 6h-6z M8 13h8v2H8v-2zm0 4h8v2H8v-2z M17 17l4 4',
        color: '#f59e0b'
    },
    {
        id: 'notification',
        name: 'Alerting',
        category: iconCategories.DEVOPS,
        svg: 'M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z M12 12m-2 0a2 2 0 104 0a2 2 0 10-4 0 M12 6v4 M12 14v4 M6 12h4 M14 12h4',
        color: '#f59e0b'
    },
    {
        id: 'container-registry',
        name: 'Container Registry',
        category: iconCategories.DEVOPS,
        svg: 'M12 2L4 7v10l8 5 8-5V7l-8-5z M12 7l5 3v4l-5 3-5-3v-4l5-3z M9 11l3 3 3-3 M12 10v4',
        color: '#f59e0b'
    },
    {
        id: 'secrets-manager',
        name: 'Secrets Manager',
        category: iconCategories.DEVOPS,
        svg: 'M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z M8 11h8v5a4 4 0 01-8 0v-5zm4-5a3 3 0 00-3 3v2h2v-2a1 1 0 012 0v2h2v-2a3 3 0 00-3-3z',
        color: '#f59e0b'
    },
    {
        id: 'config-service',
        name: 'Config Service',
        category: iconCategories.DEVOPS,
        svg: 'M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z M8 8h3v1H8v2h3v1H8v2h8V8H8zm6 0h2v1h-2V8zm0 3h2v1h-2v-1zm0 3h2v1h-2v-1z',
        color: '#f59e0b'
    },
    {
        id: 'admin-service',
        name: 'Admin Service',
        category: iconCategories.DEVOPS,
        svg: 'M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z M12 7a3 3 0 11-3 3 3 3 0 013-3zm4 9H8v-1a2 2 0 012-2h4a2 2 0 012 2z',
        color: '#f59e0b'
    },
    {
        id: 'cloudwatch',
        name: 'CloudWatch',
        category: iconCategories.DEVOPS,
        svg: 'M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z M12 6l2 4 4 2-4 2-2 4-2-4-4-2 4-2z',
        color: '#f59e0b'
    },
    {
        id: 'config',
        name: 'Config',
        category: iconCategories.DEVOPS,
        svg: 'M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z M9 12l2 2 4-4',
        color: '#f59e0b'
    },
    {
        id: 'cloudtrail',
        name: 'CloudTrail',
        category: iconCategories.DEVOPS,
        svg: 'M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z M12 8a4 4 0 104 4 4 4 0 00-4-4zm-6 4a6 6 0 016-6v2a4 4 0 00-4 4H6z',
        color: '#f59e0b'
    },
    {
        id: 'systems-manager-ops',
        name: 'Systems Mgr',
        category: iconCategories.DEVOPS,
        svg: 'M12 2L4 6v12l8 4 8-4V6l-8-4z M12 6l5 2.5v7.5l-5 2.5-5-2.5v-7.5L12 6z M8 10h8v1H8v-1zm0 3h8v1H8v-1zm0 3h5v1H8v-1z',
        color: '#f59e0b'
    },




    {
        id: 'well-architected-ops',
        name: 'Well Arch',
        category: iconCategories.DEVOPS,
        svg: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M12 22V12 M12 7l3 1.5-3 1.5-3-1.5 3-1.5z M7 4.5L12 7l5-2.5',
        color: '#f59e0b'
    },
    {
        id: 'distro-opentelemetry',
        name: 'OpenTelemetry',
        category: iconCategories.DEVOPS,
        svg: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z',
        color: '#f59e0b'
    },
    {
        id: 'managed-grafana',
        name: 'Grafana',
        category: iconCategories.DEVOPS,
        svg: 'M12 2a10 10 0 100 20 10 10 0 000-20z M5 15l4-6 4 6 4-6v6 M12 4v2 M12 18v2',
        color: '#f59e0b'
    },
    {
        id: 'managed-prometheus',
        name: 'Prometheus',
        category: iconCategories.DEVOPS,
        svg: 'M12 2a10 10 0 100 20 10 10 0 000-20z M12 18s-4-2.5-4-6c0-2.2 1.8-4 4-4s4 1.8 4 4c0 3.5-4 6-4 6z M12 12m-1 0a1 1 0 102 0a1 1 0 10-2 0',
        color: '#f59e0b'
    },

    // WEB APPLICATION (2 icons)
    {
        id: 'mobile-client',
        name: 'Mobile Client',
        category: iconCategories.WEB_APP,
        svg: 'M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v14H7V4zm5 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
        color: '#ec4899'
    },
    {
        id: 'browser',
        name: 'Browser',
        category: iconCategories.WEB_APP,
        svg: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 18V9h16v9H4zm0-11V6h16v1H4zm3 0H5v-1h2v1zm3 0H8v-1h2v1zm3 0h-2v-1h2v1z',
        color: '#ec4899'
    },
    {
        id: 'spa',
        name: 'Single Page App',
        category: iconCategories.WEB_APP,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v10h-2z',
        color: '#ec4899'
    },
    {
        id: 'ssr-app',
        name: 'SSR App',
        category: iconCategories.WEB_APP,
        svg: 'M20 13H4v-2h16v2zm-2-6H6v2h12V7zM4 17h16v-2H4v2z M2 4h20v16H2V4z M12 2v2',
        color: '#ec4899'
    },
    {
        id: 'pwa',
        name: 'PWA',
        category: iconCategories.WEB_APP,
        svg: 'M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-4-6h-2v2H9v-2H7v-2h2v-2h2v2h2v2z',
        color: '#ec4899'
    },
    {
        id: 'static-site',
        name: 'Static Website',
        category: iconCategories.WEB_APP,
        svg: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
        color: '#ec4899'
    },
    {
        id: 'micro-frontend-host',
        name: 'Micro-Frontend Host',
        category: iconCategories.WEB_APP,
        svg: 'M20 4H4v16h16V4zm-2 14H6V6h12v12z M9 9h2v2H9V9zm4 0h2v2h-2V9zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2z',
        color: '#ec4899'
    },
    {
        id: 'micro-frontend-remote',
        name: 'Micro-Frontend Remote',
        category: iconCategories.WEB_APP,
        svg: 'M16 4H4v16h12V4zm-2 14H6V6h8v12z M8 8h2v2H8V8zm0 4h2v2H8v-2z',
        color: '#ec4899'
    },
    {
        id: 'bff',
        name: 'Backend for Frontend',
        category: iconCategories.WEB_APP,
        svg: 'M17 2H7v6h10V2zm-2 4H9V4h6v2zm-8 4v2h10v-2H7zm0 4v6h10v-6H7zm8 4H9v-2h6v2z',
        color: '#ec4899'
    },
    {
        id: 'desktop-app',
        name: 'Desktop App',
        category: iconCategories.WEB_APP,
        svg: 'M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z',
        color: '#ec4899'
    },
    {
        id: 'iot-device',
        name: 'IoT Device',
        category: iconCategories.WEB_APP,
        svg: 'M21 11h-2V9h2V7h-2V5c0-1.1-.9-2-2-2h-2V1h-2v2h-2V1h-2v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2h-2v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2v2h2v-2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2zM17 17H7V7h10v10z',
        color: '#ec4899'
    },
    {
        id: 'smart-watch',
        name: 'Smart Watch',
        category: iconCategories.WEB_APP,
        svg: 'M12 2H8a2 2 0 00-2 2v16a2 2 0 002 2h4 M6 6h4v12H6 M16 2h-4v20h4a2 2 0 002-2V4a2 2 0 00-2-2z M12 7h4v10h-4V7z',
        color: '#ec4899'
    },
    {
        id: 'smart-tv',
        name: 'Smart TV',
        category: iconCategories.WEB_APP,
        svg: 'M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z',
        color: '#ec4899'
    },
    {
        id: 'bot-crawler',
        name: 'Bot / Crawler',
        category: iconCategories.WEB_APP,
        svg: 'M12 2a6 6 0 00-6 6v3H4v4h2v3a2 2 0 002 2h8a2 2 0 002-2v-3h2v-4h-2V8a6 6 0 00-6-6zM9 9h2v2H9V9zm4 0h2v2h-2V9zm-5 8h6v2H8v-2z',
        color: '#ec4899'
    },
    {
        id: 'external-api',
        name: 'External API',
        category: iconCategories.WEB_APP,
        svg: 'M19 13h-4v-2h4V8l4 4-4 4v-3zM5 13h4v-2H5V8L1 12l4 4v-3zm7-8v4h-2V5H7l5-5 5 5h-3zm0 14v-4h2v4h3l-5 5-5-5h3z',
        color: '#ec4899'
    },
    {
        id: 'graphql-client',
        name: 'GraphQL Client',
        category: iconCategories.WEB_APP,
        svg: 'M12 2L2 7v10l10 5 10-5V7L12 2zM12 4.1l8.2 4.1L12 12.3 3.8 8.2 12 4.1zM4 16.2V9.4l8 4v6.8l-8-4zm16 0l-8 4v-6.8l8-4v6.8z',
        color: '#ec4899'
    },
    {
        id: 'jamstack',
        name: 'Jamstack',
        category: iconCategories.WEB_APP,
        svg: 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 18l-8-4v-8l8 4 8-4v8l-8 4z M12 6l4 2-4 2-4-2 4-2z',
        color: '#ec4899'
    },
    {
        id: 'websocket',
        name: 'WebSocket',
        category: iconCategories.WEB_APP,
        svg: 'M21 11.5L13.5 19l-1.5-1.5 6-6H3v-2h15L12 3.5 13.5 2 21 9.5v2z',
        color: '#ec4899'
    },
    {
        id: 'webrtc',
        name: 'WebRTC',
        category: iconCategories.WEB_APP,
        svg: 'M15 8v8H5V8h10m1-2H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2l4 4V6l-4 4V8c0-1.1-.9-2-2-2z',
        color: '#ec4899'
    },
    {
        id: 'html5',
        name: 'HTML5',
        category: iconCategories.WEB_APP,
        svg: 'M12 2L3 4l1.5 14L12 22l7.5-4L21 4l-9-2zm5 14.5L12 19l-5-2.5 1-8h8l-1 8z',
        color: '#ec4899'
    },

    // ANALYTICS (20 icons)
    {
        id: 'analytics-service',
        name: 'Analytics Service',
        category: iconCategories.ANALYTICS,
        svg: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z',
        color: '#2dd4bf'
    },
    {
        id: 'data-warehouse-v2',
        name: 'Data Warehouse+',
        category: iconCategories.ANALYTICS,
        svg: 'M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2zm0 13l-4 1.7L12 6l4 10.7-4-1.7z',
        color: '#2dd4bf'
    },
    {
        id: 'interactive-query',
        name: 'Interactive Query',
        category: iconCategories.ANALYTICS,
        svg: 'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z M10 12l-2-2 1.4-1.4 0.6 0.6 2.6-2.6 1.4 1.4z',
        color: '#2dd4bf'
    },
    {
        id: 'big-data-cluster',
        name: 'Big Data Cluster',
        category: iconCategories.ANALYTICS,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2 .9 2 2v3.41l1.9 1.9c.5.5.17 1.69-.9 1.69z',
        color: '#2dd4bf'
    },
    {
        id: 'stream-analytics',
        name: 'Stream Analytics',
        category: iconCategories.ANALYTICS,
        svg: 'M13 3l-1.5 4.5H16L12 12l4 4.5H13L11 21 M4 10h2v4H4zm5 0h2v4H9zm10 0h2v4h-2z',
        color: '#2dd4bf'
    },
    {
        id: 'data-catalog',
        name: 'Data Catalog',
        category: iconCategories.ANALYTICS,
        svg: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm12 16H6V4h4l3 3h5v13z',
        color: '#2dd4bf'
    },
    {
        id: 'dashboard-analytics',
        name: 'BI Dashboard',
        category: iconCategories.ANALYTICS,
        svg: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z M12 3v2 M12 19v2',
        color: '#2dd4bf'
    },
    {
        id: 'search-analytics',
        name: 'Search Analytics',
        category: iconCategories.ANALYTICS,
        svg: 'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z M8 8h3v3H8V8z',
        color: '#2dd4bf'
    },
    {
        id: 'data-prep',
        name: 'Data Prep',
        category: iconCategories.ANALYTICS,
        svg: 'M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z',
        color: '#2dd4bf'
    },
    {
        id: 'data-exchange',
        name: 'Data Exchange',
        category: iconCategories.ANALYTICS,
        svg: 'M18 12.5V10h-6v2.5L8.5 9l3.5-3.5V8h6c1.1 0 2 .9 2 2v2.5h-2zM6 11.5V14h6v-2.5l3.5 3.5-3.5 3.5V16H6c-1.1 0-2-.9-2-2v-2.5h2z',
        color: '#2dd4bf'
    },
    {
        id: 'real-time-analytics',
        name: 'Real-time Analytics',
        category: iconCategories.ANALYTICS,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L11 13.17l-2.59-2.58L7 12l4 4 7-7-1.41-1.42z',
        color: '#2dd4bf'
    },
    {
        id: 'business-intel',
        name: 'Business Intel',
        category: iconCategories.ANALYTICS,
        svg: 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z',
        color: '#2dd4bf'
    },
    {
        id: 'data-gov',
        name: 'Data Governance',
        category: iconCategories.ANALYTICS,
        svg: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z',
        color: '#2dd4bf'
    },
    {
        id: 'data-quality',
        name: 'Data Quality',
        category: iconCategories.ANALYTICS,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-11 5l-5-5 1.4-1.4 3.6 3.6 7.6-7.6 1.4 1.4-9 9z',
        color: '#2dd4bf'
    },
    {
        id: 'data-lineage',
        name: 'Data Lineage',
        category: iconCategories.ANALYTICS,
        svg: 'M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM12 22l5.5-9h-11L12 22zm0-3.84L10.07 15h3.87L12 18.16z',
        color: '#2dd4bf'
    },
    {
        id: 'predictive-analytics',
        name: 'Predictive Analytics',
        category: iconCategories.ANALYTICS,
        svg: 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z',
        color: '#2dd4bf'
    },
    {
        id: 'log-analytics',
        name: 'Log Analytics',
        category: iconCategories.ANALYTICS,
        svg: 'M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9l-7-7zm0 1.5L17.5 9H13V3.5z M15.5 17h-1.1s-.4-.4-.4-.5c.5-.5.8-1.2.8-1.9 0-1.7-1.3-3-3-3s-3 1.3-3 3 1.3 3 3 3c.7 0 1.4-.3 1.9-.8.1.1.5.4.5.4v1.1l4 3.9 1-1-4-4z M11.8 16.1c-1.1 0-2-.9-2-2.1s.9-2.1 2-2.1 2 .9 2 2.1-.9 2.1-2 2.1z M7 8h4v1H7V8zm0 3h2v1H7v-1zm0 3h1v1H7v-1z',
        color: '#2dd4bf'
    },
    {
        id: 'cloud-search',
        name: 'Cloud Search',
        category: iconCategories.ANALYTICS,
        svg: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm3.5-6h-.8l-.3-.3c1-.9 1.6-2.2 1.6-3.7 0-3-2.5-5.5-5.5-5.5s-5.5 2.5-5.5 5.5 2.5 5.5 5.5 5.5c1.5 0 2.8-.6 3.7-1.6l.3.3v.8l5 5 1.5-1.5-5-5zM10.5 12c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z',
        color: '#2dd4bf'
    },
    {
        id: 'data-lake-formation',
        name: 'Data Lake Formation',
        category: iconCategories.ANALYTICS,
        svg: 'M12 2L2 7v10l10 5 10-5V7L12 2zM12 4.1l8.2 4.1L12 12.3 3.8 8.2 12 4.1zM4 16.2V9.4l8 4v6.8l-8-4zm16 0l-8 4v-6.8l8-4v6.8z M12 6l4 2-4 2-4-2 4-2z M12 14l4 2-4 2-4-2 4-2z M12 10v10',
        color: '#2dd4bf'
    },
    {
        id: 'kinesis-video',
        name: 'Video Streams',
        category: iconCategories.ANALYTICS,
        svg: 'M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z M8 7v10l8-5-8-5z M2 9h1V8H2v1zm0 3h1v-1H2v1zm0 3h1v-1H2v1zm19-6h-1v1h1V9zm0 3h-1v1h1v-1zm0 3h-1v1h1v-1z',
        color: '#2dd4bf'
    },

    // AI & MACHINE LEARNING (20 icons)
    {
        id: 'ai-service',
        name: 'AI Service',
        category: iconCategories.AI_ML,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h3l-4 4-4-4h3V7z M9 14h6v2H9v-2z',
        color: '#f472b6'
    },
    {
        id: 'ml-model',
        name: 'ML Model',
        category: iconCategories.AI_ML,
        svg: 'M12 2.5a5.5 5.5 0 013.096 10.047 9.005 9.005 0 015.9 8.128.75.75 0 11-1.492.15 7.505 7.505 0 00-14.996 0 .75.75 0 01-1.492-.15 9.005 9.005 0 015.9-8.128A5.5 5.5 0 0112 2.5zM8 8a4 4 0 108 0 4 4 0 00-8 0z M9.5 12h5v1.5h-5V12z',
        color: '#f472b6'
    },
    {
        id: 'sagemaker',
        name: 'SageMaker',
        category: iconCategories.AI_ML,
        svg: 'M21 16.5c0 .38-.21.71-.53.88l-7.97 4.43c-.16.09-.33.14-.5.14s-.34-.05-.5-.14l-7.97-4.43c-.32-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.43c.16-.09.33-.14.5-.14s.34.05.5.14l7.97 4.43c.32.17.53.5.53.88v9z M12 4.15L5.75 7.62 12 11.09l6.25-3.47L12 4.15zM4.5 15.65l6.75 3.75v-6.91L4.5 8.74v6.91zm15 0V8.74l-6.75 3.75v6.91l6.75-3.75z',
        color: '#f472b6'
    },
    {
        id: 'rekognition',
        name: 'Image Rec',
        category: iconCategories.AI_ML,
        svg: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z M18 8l2-2 M6 8l-2-2 M18 16l2 2 M6 16l-2 2',
        color: '#f472b6'
    },
    {
        id: 'polly',
        name: 'Text to Speech',
        category: iconCategories.AI_ML,
        svg: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z M11 5v14 M7 7v10 M3 10v4',
        color: '#f472b6'
    },
    {
        id: 'transcribe',
        name: 'Speech to Text',
        category: iconCategories.AI_ML,
        svg: 'M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z M8 8h1v1H8z M15 8h1v1h-1z',
        color: '#f472b6'
    },
    {
        id: 'translate',
        name: 'Translation',
        category: iconCategories.AI_ML,
        svg: 'M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z',
        color: '#f472b6'
    },
    {
        id: 'textract',
        name: 'Text Extraction',
        category: iconCategories.AI_ML,
        svg: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z M14 3l5 5h-5V3z M8 12h8m-8 4h4',
        color: '#f472b6'
    },
    {
        id: 'comprehend',
        name: 'NLP Service',
        category: iconCategories.AI_ML,
        svg: 'M21 15c0-4.62-3.5-8.44-8-8.94V5h2V3h-6v2h2v1.06c-4.5.5-8 4.32-8 8.94 0 5 4 9 9 9s9-4 9-9zm-9 7c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z M10 12h4v2h-4v-2z M9 15h6v2H9v-2z',
        color: '#f472b6'
    },
    {
        id: 'lex',
        name: 'Chatbot AI',
        category: iconCategories.AI_ML,
        svg: 'M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 11-7.6-13.9H12a8 8 0 010 16 8 8 0 01-5-1.7L3 21l1.6-3.9a8 8 0 1116.4-5.6z',
        color: '#f472b6'
    },
    {
        id: 'forecast',
        name: 'Forecasting',
        category: iconCategories.AI_ML,
        svg: 'M3 18l6-6 4 4 8-8 M21 16l0 5 -5 0 M3 3v18h18',
        color: '#f472b6'
    },
    {
        id: 'personalize',
        name: 'Personalization',
        category: iconCategories.AI_ML,
        svg: 'M12 2a10 10 0 100 20 10 10 0 000-20z M12 12a3 3 0 100-6 3 3 0 000 6z M7 14l2-2 2 2 M17 14l-2-2-2 2',
        color: '#f472b6'
    },
    {
        id: 'fraud-detector',
        name: 'Fraud Detect',
        category: iconCategories.AI_ML,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8z',
        color: '#f472b6'
    },
    {
        id: 'devops-guru',
        name: 'AI DevOps',
        category: iconCategories.AI_ML,
        svg: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.21.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z',
        color: '#f472b6'
    },
    {
        id: 'kendra',
        name: 'Enterprise Search',
        category: iconCategories.AI_ML,
        svg: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z M8 12h4m-4 2h6',
        color: '#f472b6'
    },
    {
        id: 'bedrock',
        name: 'Generative AI',
        category: iconCategories.AI_ML,
        svg: 'M12 3L2 12l10 9 10-9L12 3zm0 15.5L4.5 12 12 5.5l7.5 6.5-7.5 6.5z M12 7l-3 5 3 5 3-5-3-5z',
        color: '#f472b6'
    },
    {
        id: 'codewhisperer',
        name: 'Code AI',
        category: iconCategories.AI_ML,
        svg: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z M10 5h4v14h-4z',
        color: '#f472b6'
    },
    {
        id: 'deepracer',
        name: 'RL Model',
        category: iconCategories.AI_ML,
        svg: 'M21 16.5c0 .38-.21.71-.53.88l-7.97 4.43c-.16.09-.33.14-.5.14s-.34-.05-.5-.14l-7.97-4.43c-.32-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.43c.16-.09.33-.14.5-.14s.34.05.5.14l7.97 4.43c.32.17.53.5.53.88v9z M18.1 11l-3.3 1.9v3.8l3.3-1.9V11zm-12.2 0v3.8l3.3 1.9v-3.8L5.9 11zM11 18.5l-3.3-1.9v-3.8L11 14.7v3.8zm2 0v-3.8l3.3-1.9v3.8L13 18.5z',
        color: '#f472b6'
    },
    {
        id: 'deepcomposer',
        name: 'Generative Audio',
        category: iconCategories.AI_ML,
        svg: 'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z M10 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
        color: '#f472b6'
    },
    {
        id: 'healthlake',
        name: 'Health AI',
        category: iconCategories.AI_ML,
        svg: 'M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-2v-4H8v-2h4V8h2v4h4v2z',
        color: '#f472b6'
    },

    // IOT & ROBOTICS (20 icons)
    {
        id: 'iot-core',
        name: 'IoT Core',
        category: iconCategories.IOT,
        svg: 'M15 2H9c-1.1 0-2 .9-2 2v1h10V4c0-1.1-.9-2-2-2zM7 21a2 2 0 002 2h6a2 2 0 002-2v-1H7v1zM20 7h-1V5h-2v2H7V5H5v2H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h1v2h2v-2h10v2h2v-2h1c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM9 15H7v-2h2v2zm0-4H7V9h2v2zm4 4h-2v-2h2v2zm0-4h-2V9h2v2zm4 4h-2v-2h2v2zm0-4h-2V9h2v2z',
        color: '#fbbf24'
    },
    {
        id: 'iot-analytics',
        name: 'IoT Analytics',
        category: iconCategories.IOT,
        svg: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z M12 3v2 M12 19v2',
        color: '#fbbf24'
    },
    {
        id: 'iot-defender',
        name: 'IoT Security',
        category: iconCategories.IOT,
        svg: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M12 8l2 2-2 2-2-2 2-2z',
        color: '#fbbf24'
    },
    {
        id: 'iot-device-mgt',
        name: 'Device Mgmt',
        category: iconCategories.IOT,
        svg: 'M19 13h-4v-2h4V8l4 4-4 4v-3zM5 13h4v-2H5V8L1 12l4 4v-3zm7-8v4h-2V5H7l5-5 5 5h-3zm0 14v-4h2v4h3l-5 5-5-5h3z M12 12m-2 0a2 2 0 104 0a2 2 0 10-4 0',
        color: '#fbbf24'
    },
    {
        id: 'iot-events',
        name: 'IoT Events',
        category: iconCategories.IOT,
        svg: 'M13 2L3 14h9v8l10-12h-9l1 8z',
        color: '#fbbf24'
    },
    {
        id: 'iot-greengrass',
        name: 'Greengrass',
        category: iconCategories.IOT,
        svg: 'M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z M12 12c-2 0-3 2-3 2',
        color: '#fbbf24'
    },
    {
        id: 'iot-sitewise',
        name: 'SiteWise',
        category: iconCategories.IOT,
        svg: 'M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2zm0 13l-4 1.7L12 6l4 10.7-4-1.7z M12 3v2',
        color: '#fbbf24'
    },
    {
        id: 'iot-things-graph',
        name: 'Things Graph',
        category: iconCategories.IOT,
        svg: 'M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z M12 12c-2 0-3 1-3 1',
        color: '#fbbf24'
    },
    {
        id: 'iot-1click',
        name: 'IoT 1-Click',
        category: iconCategories.IOT,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z M12 7l-1 5h2l-1-5zm0 10c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z',
        color: '#fbbf24'
    },
    {
        id: 'freertos',
        name: 'FreeRTOS',
        category: iconCategories.IOT,
        svg: 'M12 2a10 10 0 100 20 10 10 0 000-20z M12 6v6l4 2',
        color: '#fbbf24'
    },
    {
        id: 'iot-twinmaker',
        name: 'Digital Twin',
        category: iconCategories.IOT,
        svg: 'M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM12 22l5.5-9h-11L12 22zm0-3.84L10.07 15h3.87L12 18.16z',
        color: '#fbbf24'
    },
    {
        id: 'iot-fleet-wise',
        name: 'Fleet Wise',
        category: iconCategories.IOT,
        svg: 'M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z M12 12c-2 0-3 2-3 2 M6 12h1v1h-1z',
        color: '#fbbf24'
    },
    {
        id: 'iot-roborunner',
        name: 'RoboRunner',
        category: iconCategories.IOT,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 1.28-1.54 2.29-1.73l.64-.12.35-.55c.34-.54.91-.88 1.55-.88s1.21.34 1.55.88l.35.55.64.12c1.01.19 1.86.83 2.29 1.73.12.26.02.58-.23.7-.26.12-.58.02-.7-.23-.28-.58-.8-1.02-1.44-1.14l-1.47-.28-.79 1.26c-.46.74-1.25 1.13-2.1 1.13s-1.64-.39-2.1-1.13l-.79-1.26-1.47.28c-.64.12-1.16.56-1.44 1.14-.12.25-.44.35-.7.23s-.35-.44-.23-.7zM18 11.5c0 .38.21.71.53.88l-7.97 4.43c-.16.09-.33.14-.5.14s-.34-.05-.5-.14l-7.97-4.43c-.32-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.43c.16-.09.33-.14.5-.14s.34.05.5.14l7.97 4.43c.32.17.53.5.53.88v4z',
        color: '#fbbf24'
    },
    {
        id: 'kinesis-video-iot',
        name: 'Kinesis Video',
        category: iconCategories.IOT,
        svg: 'M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z M12 12c-2 0-3 3-3 3 M7 19h2v2h-2z',
        color: '#fbbf24'
    },
    {
        id: 'mqtt-broker',
        name: 'MQTT Broker',
        category: iconCategories.IOT,
        svg: 'M12 2l10 5v10l-10 5L2 17V7l10-5zm0 18l7-3.5V8.5l-7 3.5V20zm-1-11.5l-7-3.5L11 8.5v11.5l1-0.5V8.5z M12 12m-2 0a2 2 0 104 0a2 2 0 10-4 0 M10 7l4 4-4 4',
        color: '#fbbf24'
    },
    {
        id: 'lorawan-gateway',
        name: 'LoRaWAN',
        category: iconCategories.IOT,
        svg: 'M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z M12 12c-2 0-3 3-3 3 M9 15h2v2h-2z',
        color: '#fbbf24'
    },
    {
        id: 'industrial-sensor',
        name: 'Ind. Sensor',
        category: iconCategories.IOT,
        svg: 'M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z M12 12c-2 0-3 2-3 2 M18 6h1v1h-1z',
        color: '#fbbf24'
    },
    {
        id: 'smart-home',
        name: 'Smart Home',
        category: iconCategories.IOT,
        svg: 'M12 3L2 12h3v8h14v-8h3L12 3zm0 10.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
        color: '#fbbf24'
    },
    {
        id: 'smart-camera',
        name: 'Smart Camera',
        category: iconCategories.IOT,
        svg: 'M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z M12 12c-2 0-3 1-3 1 M9 15h2v2h-2z',
        color: '#fbbf24'
    },
    {
        id: 'wind-turbine',
        name: 'Wind Turbine',
        category: iconCategories.IOT,
        svg: 'M12 2L3 14h9l-1 8 10-12h-9l1-8z M12 12m-3 0a3 3 0 106 0a3 3 0 10-6 0',
        color: '#fbbf24'
    },

    // APPLICATION INTEGRATION (20 icons)
    {
        id: 'event-bridge',
        name: 'Event Bus',
        category: iconCategories.INTEGRATION,
        svg: 'M21 7.28V11.5c0 .38-.21.71-.53.88l-7.97 4.43c-.16.09-.33.14-.5.14s-.34-.05-.5-.14l-7.97-4.43c-.32-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.43c.16-.09.33-.14.5-.14s.34.05.5.14l7.97 4.43c.32.17.53.5.53.88v3z M12 4.15L5.75 7.62 12 11.09l6.25-3.47L12 4.15z M10 13h4v2h-4v-2z M10 9l4 4-4 4',
        color: '#ec4899'
    },
    {
        id: 'sns',
        name: 'Notification Service',
        category: iconCategories.INTEGRATION,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z M12 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z',
        color: '#ec4899'
    },
    {
        id: 'sqs',
        name: 'Queue Service',
        category: iconCategories.INTEGRATION,
        svg: 'M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM4 14v-4h3v4H4zm5 0v-4h3v4H9zm5 0v-4h3v4h-3zm5 0v-4h1v4h-1z M2 12l2 2-2 2',
        color: '#ec4899'
    },
    {
        id: 'step-functions',
        name: 'Step Functions',
        category: iconCategories.INTEGRATION,
        svg: 'M13 2v3h3v14h-3v3h-2v-3H8V5h3V2h2zM11 7v10h2V7h-2z M12 2h1v4h-1V2zm0 16h1v4h-1v-4z M5 8h2v2H5V8zm12 0h2v2h-2V8z M5 14h2v2H5v-2zm12 0h2v2h-2v-2z',
        color: '#ec4899'
    },
    {
        id: 'app-flow',
        name: 'App Flow',
        category: iconCategories.INTEGRATION,
        svg: 'M18 12.5V10h-6v2.5L8.5 9l3.5-3.5V8h6c1.1 0 2 .9 2 2v2.5h-2zM6 11.5V14h6v-2.5l3.5 3.5-3.5 3.5V16H6c-1.1 0-2-.9-2-2v-2.5h2z M10 7h4v2h-4V7z',
        color: '#ec4899'
    },
    {
        id: 'app-sync',
        name: 'App Sync',
        category: iconCategories.INTEGRATION,
        svg: 'M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm4.59-12.42L11 13.17l-2.59-2.58L7 12l4 4 7-7-1.41-1.42z',
        color: '#ec4899'
    },
    {
        id: 'mq-broker',
        name: 'MQ Broker',
        category: iconCategories.INTEGRATION,
        svg: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z M12 3v2 M12 19v2',
        color: '#ec4899'
    },
    {
        id: 'airflow',
        name: 'Airflow',
        category: iconCategories.INTEGRATION,
        svg: 'M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5L17.5 7 12 10.5 6.5 7 12 4.5zM6 8.5l5 3.1v6.8l-5-3.1V8.5zm12 0v6.8l-5 3.1v-6.8l5-3.1z M12 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
        color: '#ec4899'
    },
    {
        id: 'simple-workflow',
        name: 'Simple Workflow',
        category: iconCategories.INTEGRATION,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-9h-3V8h-2v3H8v2h3v3h2v-3h3v-2z',
        color: '#ec4899'
    },
    {
        id: 'express-workflows',
        name: 'Express Workflows',
        category: iconCategories.INTEGRATION,
        svg: 'M11.5 1L2 13h7v10l9.5-12h-7L11.5 1z M13 10h4v2h-4v-2z M13 14h2v2h-2v-2z',
        color: '#ec4899'
    },
    {
        id: 'schema-registry',
        name: 'Schema Registry',
        category: iconCategories.INTEGRATION,
        svg: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z M10 13h4v2h-4v-2z',
        color: '#ec4899'
    },
    {
        id: 'app-mesh',
        name: 'App Mesh',
        category: iconCategories.INTEGRATION,
        svg: 'M12 2a10 10 0 100 20 10 10 0 000-20z M12 22v-2M12 4V2 M2 12h2M22 12h-2 M12 12m-5 0a5 5 0 1010 0a5 5 0 10-10 0 M7 7l10 10 M17 7L7 17',
        color: '#ec4899'
    },
    {
        id: 'cloud-map',
        name: 'Cloud Map',
        category: iconCategories.INTEGRATION,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5l-3.5-2 3.5-2v4zm-5-3h6v2H8v-2z M7 7h10v10H7V7zm2 2h6v6H9V9z M12 6V4m0 16v-2 M4 12h2m12 0h2',
        color: '#ec4899'
    },
    {
        id: 'api-destinations',
        name: 'API Destination',
        category: iconCategories.INTEGRATION,
        svg: 'M21 7h-3V4c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v3H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM8 4h8v3H8V4zm13 15H3v-8h18v8zm-4-4h2v2h-2v-2zm-3 0h2v2h-2v-2zm-3 0h2v2h-2v-2z M19 9h2v1h-2V9z',
        color: '#ec4899'
    },
    {
        id: 'pipes',
        name: 'Event Pipes',
        category: iconCategories.INTEGRATION,
        svg: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 9h16v2H4V9zm0 4h16v2H4v-2zm0 4h16v1H4v-1z M4 7h16V6H4v1z M5 10l2 2-2 2 M17 10l-2 2 2 2',
        color: '#ec4899'
    },
    {
        id: 'scheduler',
        name: 'Scheduler',
        category: iconCategories.INTEGRATION,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z M12 4V2 M12 22v-2 M4 12H2 M22 12h-2',
        color: '#ec4899'
    },
    {
        id: 'managed-workflows',
        name: 'Managed Workflows',
        category: iconCategories.INTEGRATION,
        svg: 'M20 4h-4.17c-.41-1.17-1.52-2-2.83-2s-2.42.83-2.83 2H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM12 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM20 20H6V6h2v2h8V6h2v14z M8 12l2 2 4-4',
        color: '#ec4899'
    },
    {
        id: 'datasync-discovery',
        name: 'Discovery Agent',
        category: iconCategories.INTEGRATION,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z M13 12h2l-3-3-3 3h2v3h2v-3z',
        color: '#ec4899'
    },
    {
        id: 'transfer-family',
        name: 'Transfer Family',
        category: iconCategories.INTEGRATION,
        svg: 'M19 13H5v-2h14v2zm-2-6H7v2h10V7zM5 17h14v-2H5v2z M2 4h20v16H2V4z M4 1h1v3H4V1zm15 0h1v3h-1V1z M10 10l2 2 2-2',
        color: '#ec4899'
    },
    {
        id: 'b2b-exchange',
        name: 'B2B Exchange',
        category: iconCategories.INTEGRATION,
        svg: 'M4 8h16v4H4z M4 16h16v4H4z M4 10l2 2-2 2 M12 18h1v1h-1z',
        color: '#ec4899'
    },

    // BUSINESS APPLICATIONS (20 icons)
    {
        id: 'chime',
        name: 'Chime',
        category: iconCategories.BUSINESS,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.46 12.44L14.07 16c-2.31-1.07-4.14-2.91-5.07-5.07L11.56 8.41c.21-.21.27-.52.19-.8l-.81-3.21c-.07-.3-.34-.51-.65-.51H6.11c-.37 0-.68.32-.61.69.45 2.53 1.83 4.8 3.73 6.7s4.17 3.28 6.7 3.73c.37.07.69-.24.69-.61v-4.18c0-.31-.21-.58-.51-.65l-3.21-.81c-.28-.08-.59-.02-.8.19z',
        color: '#ef4444'
    },
    {
        id: 'connect',
        name: 'Connect',
        category: iconCategories.BUSINESS,
        svg: 'M12 2C6.48 2 2 6.48 2 12v3c0 1.66 1.34 3 3 3h3v-7H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-3v7h3c1.66 0 3-1.34 3-3v-3c0-5.52-4.48-10-10-10zm0 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z M12 4v2 M12 6c-3.3 0-6 2.7-6 6',
        color: '#ef4444'
    },
    {
        id: 'pinpoint',
        name: 'Pinpoint',
        category: iconCategories.BUSINESS,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M12 10l2 2-2 2-2-2 2-2z M12 6l6 6-6 6-6-6 6-6z',
        color: '#ef4444'
    },
    {
        id: 'ses',
        name: 'Email Service',
        category: iconCategories.BUSINESS,
        svg: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5M2 12l10 5 10-5 M12 7l-1 4h2l-1-4z',
        color: '#ef4444'
    },
    {
        id: 'workmail',
        name: 'WorkMail',
        category: iconCategories.BUSINESS,
        svg: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v.01L12 13 4 6.01V6zm16 12H4V8l8 7 8-7v10z M12 3h1v2h-1V3z',
        color: '#ef4444'
    },
    {
        id: 'workdocs',
        name: 'WorkDocs',
        category: iconCategories.BUSINESS,
        svg: 'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
        color: '#ef4444'
    },
    {
        id: 'honeycode',
        name: 'Honeycode',
        category: iconCategories.BUSINESS,
        svg: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h7v7H4V6zm0 12v-4h7v4H4zm16 0h-7v-4h7v4zm0-5h-7V6h7v7z',
        color: '#ef4444'
    },
    {
        id: 'wickr',
        name: 'Secure Chat',
        category: iconCategories.BUSINESS,
        svg: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM4 16V4h16v10H4v2zm9-10h4v2h-4V6zm0 3h4v2h-4V9zm-8-3h6v5H5V6z',
        color: '#ef4444'
    },
    {
        id: 'supply-chain',
        name: 'Supply Chain',
        category: iconCategories.BUSINESS,
        svg: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v12H4V6zm3 10h10v-2H7v2zm0-4h10v-2H7v2zm0-4h10V6H7v2z M2 8h1v8H2V8z M21 8h1v8h-1V8z',
        color: '#ef4444'
    },
    {
        id: 'marketing',
        name: 'Marketing',
        category: iconCategories.BUSINESS,
        svg: 'M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM4 4h16v4H4V4zm0 14V10h16v8H4zm4-6h8v2H8v-2z',
        color: '#ef4444'
    },
    {
        id: 'commerce',
        name: 'Commerce',
        category: iconCategories.BUSINESS,
        svg: 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z',
        color: '#ef4444'
    },
    {
        id: 'customer-profiles',
        name: 'Cust. Profiles',
        category: iconCategories.BUSINESS,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
        color: '#ef4444'
    },
    {
        id: 'fraud-prevention',
        name: 'Fraud Prev',
        category: iconCategories.BUSINESS,
        svg: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z M12 13h1v1h-1v-1z',
        color: '#ef4444'
    },
    {
        id: 'voice-id',
        name: 'Voice ID',
        category: iconCategories.BUSINESS,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M9 13a3 3 0 016 0v0a3 3 0 01-6 0z M7 12h2 M15 12h2 M12 7v2 M12 17v2',
        color: '#ef4444'
    },
    {
        id: 'wisdom',
        name: 'Wisdom',
        category: iconCategories.BUSINESS,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v6z M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8z M9 10h6v1H9v-1z',
        color: '#ef4444'
    },
    {
        id: 'cases',
        name: 'Cases',
        category: iconCategories.BUSINESS,
        svg: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v12H4V6zm3 4h10v2H7v-2zm0 4h7v2H7v-2z M16 14h1v1h-1v-1z',
        color: '#ef4444'
    },
    {
        id: 'billing-conductor',
        name: 'Billing',
        category: iconCategories.BUSINESS,
        svg: 'M13 13h-2v6h2v-6zm4 2h-2v4h2v-4zm-8 2H7v2h2v-2zm10-14H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z M12 7h1v1h-1V7z',
        color: '#ef4444'
    },
    {
        id: 'cost-explorer',
        name: 'Cost Explorer',
        category: iconCategories.BUSINESS,
        svg: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z M12 3v2 M12 19v2',
        color: '#ef4444'
    },
    {
        id: 'budgets',
        name: 'Budgets',
        category: iconCategories.BUSINESS,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M7 15h10v2H7v-2zm0-4h10v2H7v-2zm0-4h10v2H7V7z M12 3h1v2h-1V3z',
        color: '#ef4444'
    },
    {
        id: 'compute-optimizer',
        name: 'Optimizer',
        category: iconCategories.BUSINESS,
        svg: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.21.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z M12 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z',
        color: '#ef4444'
    },

    // DEVELOPER TOOLS (20 icons)
    {
        id: 'code-commit',
        name: 'Code Commit',
        category: iconCategories.DEV_TOOLS,
        svg: 'M21 16.5c0 .38-.21.71-.53.88l-7.97 4.43c-.16.09-.33.14-.5.14s-.34-.05-.5-.14l-7.97-4.43c-.32-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.43c.16-.09.33-.14.5-.14s.34.05.5.14l7.97 4.43c.32.17.53.5.53.88v3z M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10l-4-4 4-4 4 4-4 4z',
        color: '#6366f1'
    },
    {
        id: 'code-build',
        name: 'Code Build',
        category: iconCategories.DEV_TOOLS,
        svg: 'M21 16.5c0 .38-.21.71-.53.88l-7.97 4.43c-.16.09-.33.14-.5.14s-.34-.05-.5-.14l-7.97-4.43c-.32-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.43c.16-.09.33-.14.5-.14s.34.05.5.14l7.97 4.43c.32.17.53.5.53.88v9z M12 4.15L5.75 7.62 12 11.09l6.25-3.47L12 4.15z M10 13h4v4h-4v-4z',
        color: '#6366f1'
    },
    {
        id: 'code-deploy',
        name: 'Code Deploy',
        category: iconCategories.DEV_TOOLS,
        svg: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v12H4V6zm6 9h4v2h-4v-2zm5-6l-3 3-3-3h2V6h2v3h2z',
        color: '#6366f1'
    },
    {
        id: 'code-pipeline',
        name: 'Code Pipeline',
        category: iconCategories.DEV_TOOLS,
        svg: 'M2 12h20M2 12l4-4M2 12l4 4 M10 4h4v16h-4V4zm8 0h4v16h-4V4z M12 12m-2 0a2 2 0 104 0a2 2 0 10-4 0',
        color: '#6366f1'
    },
    {
        id: 'cloud9',
        name: 'Cloud 9',
        category: iconCategories.DEV_TOOLS,
        svg: 'M16 13h-3V3h-2v10H8l4 4 4-4z M4 19v2h16v-2H4z M12 3c-1.1 0-2 .9-2 2v2h4V5c0-1.1-.9-2-2-2z',
        color: '#6366f1'
    },
    {
        id: 'cloudshell',
        name: 'CloudShell',
        category: iconCategories.DEV_TOOLS,
        svg: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 18V9h16v9H4zm14-7l-1.41-1.41L12 14.17 7.41 9.58 6 11l6 6 6-6z',
        color: '#6366f1'
    },
    {
        id: 'x-ray',
        name: 'X-Ray',
        category: iconCategories.DEV_TOOLS,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z M8 12h8',
        color: '#6366f1'
    },
    {
        id: 'code-star',
        name: 'CodeStar',
        category: iconCategories.DEV_TOOLS,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-15l1.6 4.9h5.1l-4.1 3 1.6 4.9-4.2-3.1-4.2 3.1 1.6-4.9-4.1-3h5.1L12 5z',
        color: '#6366f1'
    },
    {
        id: 'code-artifact',
        name: 'Artifacts',
        category: iconCategories.DEV_TOOLS,
        svg: 'M21 16.5c0 .38-.21.71-.53.88l-7.97 4.43c-.16.09-.33.14-.5.14s-.34-.05-.5-.14l-7.97-4.43c-.32-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.43c.16-.09.33-.14.5-.14s.34.05.5.14l7.97 4.43c.32.17.53.5.53.88v9z M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z M10 7h4v2h-4V7z',
        color: '#6366f1'
    },
    {
        id: 'device-farm',
        name: 'Device Farm',
        category: iconCategories.DEV_TOOLS,
        svg: 'M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v14H7V4zm5 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z M4 9h2 M18 9h2 M4 14h2 M18 14h2',
        color: '#6366f1'
    },
    {
        id: 'fault-injection',
        name: 'Fault Injection',
        category: iconCategories.DEV_TOOLS,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z M7 12l2.5-3.5 2 4.5 2-6.5 2 3.5 M19 12h2 M3 12h2',
        color: '#6366f1'
    },
    {
        id: 'app-config',
        name: 'App Config',
        category: iconCategories.DEV_TOOLS,
        svg: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.21.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z',
        color: '#6366f1'
    },
    {
        id: 'cloud-control',
        name: 'Cloud Control',
        category: iconCategories.DEV_TOOLS,
        svg: 'M21 7.28V11.5c0 .38-.21.71-.53.88l-7.97 4.43c-.16.09-.33.14-.5.14s-.34-.05-.5-.14l-7.97-4.43c-.32-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.43c.16-.09.33-.14.5-.14s.34.05.5.14l7.97 4.43c.32.17.53.5.53.88v3z M12 4.15L5.75 7.62 12 11.09l6.25-3.47L12 4.15z',
        color: '#6366f1'
    },
    {
        id: 'cloud-formation',
        name: 'IaC Stack',
        category: iconCategories.DEV_TOOLS,
        svg: 'M12 2L4.5 5.5v13L12 22l7.5-3.5v-13L12 2zM12 4.1l6.2 2.9L12 9.9 5.8 7 12 4.1zM5.8 17.5v-9L12 11.4v9l-6.2-2.9zm12.4 0L12 20.4v-9l6.2-2.9v9z M10 7l4 2-4 2-4-2 4-2z',
        color: '#6366f1'
    },
    {
        id: 'cdk',
        name: 'CDK App',
        category: iconCategories.DEV_TOOLS,
        svg: 'M12 2L4.5 5.5v13L12 22l7.5-3.5v-13L12 2zM12 4.1l6.2 2.9L12 9.9 5.8 7 12 4.1zM10 12l2 2 2-2-2-2-2 2z M12 6h1v4h-1V6z',
        color: '#6366f1'
    },
    {
        id: 'amplify',
        name: 'Amplify',
        category: iconCategories.DEV_TOOLS,
        svg: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5M2 12l10 5 10-5 M12 7l-1 5h2l-1-5zm0 10c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z M12 4v4 M12 16v4',
        color: '#6366f1'
    },
    {
        id: 'app-runner',
        name: 'App Runner',
        category: iconCategories.DEV_TOOLS,
        svg: 'M12 1L3 5v6c0 5.5 9 12 9 12s9-6.5 9-12V5l-9-4z M12 12a3 3 0 100-6 3 3 0 000 6z',
        color: '#6366f1'
    },
    {
        id: 'bug-tracker',
        name: 'Bug Tracker',
        category: iconCategories.DEV_TOOLS,
        svg: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v12H4V6zm10 10h-4v-2h4v2zm2-4H8V8h8v4z M12 7h1v1h-1V7z',
        color: '#6366f1'
    },
    {
        id: 'git-repo',
        name: 'Git Repo',
        category: iconCategories.DEV_TOOLS,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5V13h2l-3-3-3 3h2v3.5h2z M10 7l4 4-4 4 M12 3h1v2h-1V3z',
        color: '#6366f1'
    },
    {
        id: 'build-server',
        name: 'Build Server',
        category: iconCategories.DEV_TOOLS,
        svg: 'M19 13h-4v-2h4V8l4 4-4 4v-3zM5 13h4v-2H5V8L1 12l4 4v-3zm7-8v4h-2V5H7l5-5 5 5h-3zm0 14v-4h2v4h3l-5 5-5-5h3z M12 12m-2 0a2 2 0 104 0a2 2 0 10-4 0',
        color: '#6366f1'
    },

    // MIGRATION & TRANSFER (20 icons)
    {
        id: 'migration-hub',
        name: 'Migration Hub',
        category: iconCategories.MIGRATION,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v10.5h-2V7z M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z',
        color: '#10b981'
    },
    {
        id: 'dms',
        name: 'DB Migration',
        category: iconCategories.MIGRATION,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.5-12.5L13 11V8h-2v3L7.5 7.5l-1.4 1.4L11 13.8V17h2v-3.2l4.9-4.9-1.4-1.4z M12 4v2 M12 18v2',
        color: '#10b981'
    },
    {
        id: 'sms',
        name: 'Server Migration',
        category: iconCategories.MIGRATION,
        svg: 'M19 15v3H5v-3h14m2-10H3v12h18V5zm-2 2v3H5V7h14zM5 11h14v3H5v-3z M12 2l4 4-4 4V2z',
        color: '#10b981'
    },
    {
        id: 'datasync',
        name: 'DataSync',
        category: iconCategories.MIGRATION,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-4h-2l3-3 3 3h-2v4zm0-6h-2V7h-2l3-3 3 3h-2v4z',
        color: '#10b981'
    },
    {
        id: 'snowball',
        name: 'Snowball',
        category: iconCategories.MIGRATION,
        svg: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v12H4V6zm2 2h12v3H6V8zm0 5h12v3H6v-3z M12 3h1v2h-1V3z M2 8h1v8H2V8z M21 8h1v8h-1V8z',
        color: '#10b981'
    },
    {
        id: 'snow-edge',
        name: 'Snowcone',
        category: iconCategories.MIGRATION,
        svg: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v12H4V6zm5 10l-1.4-1.4 3.3-3.3-3.3-3.3L9 6.6l4.7 4.7L9 16z',
        color: '#10b981'
    },
    {
        id: 'snowmobile',
        name: 'Snowmobile',
        category: iconCategories.MIGRATION,
        svg: 'M20 8h-3V4H1v13h2c0 1.66 1.34 3 3 3s3-1.34 3-3h11c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z M3 6h12v10H3V6z M17 8h3l2 3v5h-5V8z',
        color: '#10b981'
    },
    {
        id: 'ads-discovery',
        name: 'App Discovery',
        category: iconCategories.MIGRATION,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z M12 10a2 2 0 100 4 2 2 0 000-4z',
        color: '#10b981'
    },
    {
        id: 'mgn',
        name: 'App Migration',
        category: iconCategories.MIGRATION,
        svg: 'M19 10h-6V4h-2v6H5l7 7 7-7zM5 18v2h14v-2H5z M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
        color: '#10b981'
    },
    {
        id: 'mainframe-mod',
        name: 'Mainframe Mod',
        category: iconCategories.MIGRATION,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-4h2v4zm0-6h-2V7h2v3z M19 12l-7-7-7 7 7 7 7-7z',
        color: '#10b981'
    },
    {
        id: 'schema-conversion',
        name: 'Schema Convert',
        category: iconCategories.MIGRATION,
        svg: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z M12 11h2v2h-2v-2z',
        color: '#10b981'
    },
    {
        id: 'sftp-transfer',
        name: 'SFTP Transfer',
        category: iconCategories.MIGRATION,
        svg: 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM3 19V5h18v14H3z M12 13h2v2h-2v-2zm-4-4h2v2H8V9zm0 4h2v2H8v-2zm4-4h2v2h-2V9z',
        color: '#10b981'
    },
    {
        id: 'etl-pipeline',
        name: 'ETL Pipeline',
        category: iconCategories.MIGRATION,
        svg: 'M2 12h20M2 12l4-4M2 12l4 4 M10 4h4v16h-4V4zm-8 0h1v16H2V4z M21 4h1v16h-1V4z',
        color: '#10b981'
    },
    {
        id: 'kinesis-firehose',
        name: 'Firehose',
        category: iconCategories.MIGRATION,
        svg: 'M12 2a10 10 0 100 20 10 10 0 000-20z M12 18l-4-4h3V9h2v5h3l-4 4z M12 4v3',
        color: '#10b981'
    },
    {
        id: 'glue-databrew',
        name: 'DataBrew',
        category: iconCategories.MIGRATION,
        svg: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z M12 11h5',
        color: '#10b981'
    },
    {
        id: 'migration-eval',
        name: 'Evaluator',
        category: iconCategories.MIGRATION,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M12 6a1 1 0 011 1v6a1 1 0 11-2 0V7a1 1 0 011-1z M12 16a1 1 0 100 2 1 1 0 000-2z',
        color: '#10b981'
    },
    {
        id: 'app-assess',
        name: 'App Assess',
        category: iconCategories.MIGRATION,
        svg: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v12H4V6zm3 4h10v2H7v-2zm0 4h7v2H7v-2z M10 7h4v2h-4V7z',
        color: '#10b981'
    },
    {
        id: 'db-convert',
        name: 'DB Convert',
        category: iconCategories.MIGRATION,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4l3-3-3-3v2h-2z',
        color: '#10b981'
    },
    {
        id: 'cart-migration',
        name: 'Cart Migration',
        category: iconCategories.MIGRATION,
        svg: 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020 4H5.21l-.94-2H1zm11 8l4-4-4-4v3H8v2h4v3z',
        color: '#10b981'
    },
    {
        id: 'vm-import',
        name: 'VM Import',
        category: iconCategories.MIGRATION,
        svg: 'M21 16.5c0 .38-.21.71-.53.88l-7.97 4.43c-.16.09-.33.14-.5.14s-.34-.05-.5-.14l-7.97-4.43c-.32-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.43c.16-.09.33-.14.5-.14s.34.05.5.14l7.97 4.43c.32.17.53.5.53.88v3z M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z M12 12v3l4-4-4-4v3H6v2h6z',
        color: '#10b981'
    },

    // MEDIA SERVICES (20 icons)
    {
        id: 'media-convert',
        name: 'MediaConvert',
        category: iconCategories.MEDIA,
        svg: 'M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z M13 11a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-2 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z M12 9h1v4h-1V9z',
        color: '#f59e0b'
    },
    {
        id: 'media-live',
        name: 'MediaLive',
        category: iconCategories.MEDIA,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14H11v-4h2v4zm0-6H11V7h2v3z M12 12a3 3 0 100-6 3 3 0 000 6z M12 3v2 M12 19v2',
        color: '#f59e0b'
    },
    {
        id: 'media-package',
        name: 'MediaPackage',
        category: iconCategories.MEDIA,
        svg: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v12H4V6zm2 2h4v4H6V8zm0 6h4v2H6v-2zm6-6h6v2h-6V8zm0 4h6v2h-6v-2zm0 4h6v1h-6v-1z',
        color: '#f59e0b'
    },
    {
        id: 'media-store',
        name: 'MediaStore',
        category: iconCategories.MEDIA,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-4h2v4zm0-6h-2V7h2v5zm4 7h-1v-4h1v4zm-8 0H7v-4h1v4z',
        color: '#f59e0b'
    },
    {
        id: 'media-tailor',
        name: 'MediaTailor',
        category: iconCategories.MEDIA,
        svg: 'M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z M10 10h4v1H10v-1zm1 2h2v4h-2v-4z',
        color: '#f59e0b'
    },
    {
        id: 'media-connect',
        name: 'MediaConnect',
        category: iconCategories.MEDIA,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-4h2v4zm0-6h-2V7h2v3z M19 12l-7-7-7 7 7 7 7-7z M12 11a1 1 0 100 2 1 1 0 000-2z',
        color: '#f59e0b'
    },
    {
        id: 'ivs',
        name: 'Interact Video',
        category: iconCategories.MEDIA,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M10 9l6 3-6 3V9z M12 4v2 M12 18v2',
        color: '#f59e0b'
    },
    {
        id: 'elemental-server',
        name: 'On-Prem Video',
        category: iconCategories.MEDIA,
        svg: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 2v4H5V6h14zm-5 12h-2v-4h2v4zm4 0h-2v-4h2v4zm-8 0H7v-4h2v4z M6 7h1v1H6V7z',
        color: '#f59e0b'
    },
    {
        id: 'elastic-transcode',
        name: 'Transcoder',
        category: iconCategories.MEDIA,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-4h2v4zm0-6h-2V7L19 12l-6 5v-4z',
        color: '#f59e0b'
    },
    {
        id: 'kinesis-video-streams',
        name: 'Kinesis Video',
        category: iconCategories.MEDIA,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-4h2v4zm0-6h-2V7h2v3z M10 9l6 3-6 3V9z M10 6h4v1h-4V6z',
        color: '#f59e0b'
    },
    {
        id: 'nimble-studio',
        name: 'Nimble Studio',
        category: iconCategories.MEDIA,
        svg: 'M12 2L4.5 5.5v13L12 22l7.5-3.5v-13L12 2zM12 4.1l6.2 2.9L12 9.9 5.8 7 12 4.1zM10 12l2 2 2-2-2-2-2 2z M10 7l5 3-5 3v-6z',
        color: '#f59e0b'
    },
    {
        id: 'thinkbox-deadline',
        name: 'Render Farm',
        category: iconCategories.MEDIA,
        svg: 'M21 16.5c0 .38-.21.71-.53.88l-7.97 4.43c-.16.09-.33.14-.5.14s-.34-.05-.5-.14l-7.97-4.43c-.32-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.43c.16-.09.33-.14.5-.14s.34.05.5.14l7.97 4.43c.32.17.53.5.53.88v9z M12 4.15L5.75 7.62 12 11.09l6.25-3.47L12 4.15z M18 11.5l-3 1.7v3.5l3-1.7v-3.5z M7 14h1v1H7z',
        color: '#f59e0b'
    },
    {
        id: 'media-services',
        name: 'Media Svcs',
        category: iconCategories.MEDIA,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14H11v-4h2v4zm0-6H11V7h2v3z M19 12h2 M3 12h2 M10 10l5 2-5 2v-4zm0 6l5 1.5-5 1.5v-3z',
        color: '#f59e0b'
    },
    {
        id: 'content-production',
        name: 'Content Prod',
        category: iconCategories.MEDIA,
        svg: 'M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z M10 12l5 3-5 3v-6z M8 10h1v4H8v-4z',
        color: '#f59e0b'
    },
    {
        id: 'streaming-distribution',
        name: 'Streaming',
        category: iconCategories.MEDIA,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M10 9l6 3-6 3V9z M12 3h1v2h-1V3zm0 16h1v2h-1v-2z M19 12h2 M3 12h2',
        color: '#f59e0b'
    },
    {
        id: 'archive-media',
        name: 'Media Archive',
        category: iconCategories.MEDIA,
        svg: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM4 16V4h16v10H4v2zm6-6l5 2-5 2v-4z',
        color: '#f59e0b'
    },
    {
        id: 'media-ingest',
        name: 'Media Ingest',
        category: iconCategories.MEDIA,
        svg: 'M12 2a10 10 0 100 20 10 10 0 000-20z M12 18l-4-4h3V9h2v5h3l-4 4z M10 6h4v2h-4V6z',
        color: '#f59e0b'
    },
    {
        id: 'digital-rights',
        name: 'DRM',
        category: iconCategories.MEDIA,
        svg: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm4 12h-3v3h-2v-3H8v-2h3V8h2v3h3v2z M12 6V5h1v1h-1z',
        color: '#f59e0b'
    },
    {
        id: 'subtitle-gen',
        name: 'Subtitles',
        category: iconCategories.MEDIA,
        svg: 'M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z M7 12h10v2H7v-2zm2 3h6v2H9v-2z',
        color: '#f59e0b'
    },
    {
        id: 'elastic-transcoder',
        name: 'Elastic Transcoder',
        category: iconCategories.MEDIA,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M11 11h2v4h-2v-4zm.5-7L12 3l.5 1h-1z M12 21l-.5-1h1l-.5 1zm9-9.5l-1 .5 1 .5v-1z M3 12l1-.5-1-.5v1z',
        color: '#f59e0b'
    },
    {
        id: 'thumbnail-gen',
        name: 'Thumbnails',
        category: iconCategories.MEDIA,
        svg: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h7v5H4V6zm0 12v-5h7v5H4zm16 0h-7v-5h7v5zm0-7h-7V6h7v5z',
        color: '#f59e0b'
    },
    {
        id: 'media-transcoder',
        name: 'Transcoder+',
        category: iconCategories.MEDIA,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-15l1 1-1 1-1-1 1-1z M10 9l6 3-6 3V9z M12 6h1v2h-1V6z',
        color: '#f59e0b'
    },
    {
        id: 'elemental-link',
        name: 'Elemental Link',
        category: iconCategories.MEDIA,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-4h-2l3-3 3 3h-2v4zm1-9.5h-4V4h4V6.5z',
        color: '#f59e0b'
    },
    {
        id: 'media-asset',
        name: 'Media Asset',
        category: iconCategories.MEDIA,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 12h-2v3h-3v-3h-2l3.5-3.5 3.5 3.5zm-3.5-12h2v3h-2V2z M6 10h4v4H6v-4z',
        color: '#f59e0b'
    },
    {
        id: 'renderman',
        name: 'RenderMan',
        category: iconCategories.MEDIA,
        svg: 'M12 2L4 5v14l8 3 8-3V5l-8-3zM6 18V7l6 2.5V18l-6-8.5z M18 18V7l-6 2.5V18l6-8.5z',
        color: '#f59e0b'
    },
    {
        id: 'deadline',
        name: 'Deadline',
        category: iconCategories.MEDIA,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14H11V7h2v9z M12 6c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z',
        color: '#f59e0b'
    },
    {
        id: 'thinkbox',
        name: 'Thinkbox',
        category: iconCategories.MEDIA,
        svg: 'M21 16.5c0 .38-.21.71-.53.88l-7.97 4.43c-.16.09-.33.14-.5.14s-.34-.05-.5-.14l-7.97-4.43c-.32-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.43C11.3 2.1 11.64 2.05 12 2.05s.7.05 1.03.14l7.97 4.43c.32.17.53.5.53.88v9z M12 4.15l-6 3.47 6 3.47 6-3.47-6-3.47z',
        color: '#f59e0b'
    },
    {
        id: 'media-stream',
        name: 'Media Stream',
        category: iconCategories.MEDIA,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M10 9l6 3-6 3V9z M12 3v2 M12 19v2 M19 12h2 M3 12h2',
        color: '#f59e0b'
    },
    {
        id: 'broadcast-cam',
        name: 'Broadcast Cam',
        category: iconCategories.MEDIA,
        svg: 'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z M12 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z',
        color: '#f59e0b'
    },
    {
        id: 'satellite-uplink',
        name: 'Sat Uplink',
        category: iconCategories.MEDIA,
        svg: 'M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8z M12 6v6l4.2 4.2 1.4-1.4L13.4 12V6h-1.4zm-1 5h2v3h-2v-3z',
        color: '#f59e0b'
    },
    {
        id: 'edit-workstation',
        name: 'Edit Station',
        category: iconCategories.MEDIA,
        svg: 'M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-7 6h2v4h-2v-4zm6 0h2v4h-2v-4zm-12 0h2v4H5v-4zm0 6h14v1H5v-1z',
        color: '#f59e0b'
    },
    {
        id: 'content-server',
        name: 'Content Server',
        category: iconCategories.MEDIA,
        svg: 'M19 15v3H5v-3h14m2-10H3v12h18V5zm-2 2v3H5V7h14zM5 11h14v3H5v-3z M12 12a2 2 0 100-4 2 2 0 000 4z',
        color: '#f59e0b'
    },

    // END USER COMPUTING (20 icons)
    {
        id: 'workspaces',
        name: 'WorkSpaces',
        category: iconCategories.EUC,
        svg: 'M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v10H4V6zm2 13h12l-1 1H7l-1-1z M12 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z',
        color: '#a855f7'
    },
    {
        id: 'appstream',
        name: 'AppStream',
        category: iconCategories.EUC,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M11 7l4 3-4 3V7zm-2 10h6v1H9v-1z M12 5l1 1-1 1-1-1 1-1z',
        color: '#a855f7'
    },
    {
        id: 'worklink',
        name: 'WorkLink',
        category: iconCategories.EUC,
        svg: 'M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 18V4h10v14H7z M12 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
        color: '#a855f7'
    },
    {
        id: 'workdocs-drive',
        name: 'Docs Drive',
        category: iconCategories.EUC,
        svg: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v12H4V6zm2 2h4v2H6V8zm0 4h4v2H6v-2zm6-4h6v2h-6V8zm0 4h6v2h-6v-2z',
        color: '#a855f7'
    },
    {
        id: 'wam',
        name: 'App Manager',
        category: iconCategories.EUC,
        svg: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v12H4V6zm10 2l4 4-4 4V8z M6 8h6v2H6V8zm0 4h6v2H6v-2zm0 4h6v1H6v-1z',
        color: '#a855f7'
    },
    {
        id: 'nice-dcv',
        name: 'NICE DCV',
        category: iconCategories.EUC,
        svg: 'M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 18V6h18v12H3z M12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm-.5 1.5v3h3l-3 3v-3h-3l3-3z',
        color: '#a855f7'
    },
    {
        id: 'thin-client',
        name: 'Thin Client',
        category: iconCategories.EUC,
        svg: 'M19 13H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2zM5 5v6h14V5H5zm2 10h10v2H7v-2zm-2 4h14v1H5v-1z',
        color: '#a855f7'
    },
    {
        id: 'secure-browser',
        name: 'Secure Browser',
        category: iconCategories.EUC,
        svg: 'M18 10V8c0-3.31-2.69-6-6-6S6 4.69 6 8v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-1zM8 8c0-2.21 1.79-4 4-4s4 1.79 4 4v2H8V8zm7 7c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z',
        color: '#a855f7'
    },
    {
        id: 'virtual-desktop',
        name: 'Virt. Desktop',
        category: iconCategories.EUC,
        svg: 'M21 4H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 16V6h18v10H3z M12 11c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 4c0-2 4-3 6-3s6 1 6 3v1H8v-1z',
        color: '#a855f7'
    },
    {
        id: 'workspace-web',
        name: 'Workspace Web',
        category: iconCategories.EUC,
        svg: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 18V8h16v10H4z M12 10c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 1.5l-2 4.5h4l-2-4.5z',
        color: '#a855f7'
    },
    {
        id: 'workspace-core',
        name: 'Workspace Core',
        category: iconCategories.EUC,
        svg: 'M12 2L4 5v14l8 3 8-3V5l-8-3zm0 18l-6-2.5V7l6-2.5 6 2.5v8.5l-6 2.5z M12 7c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z',
        color: '#a855f7'
    },
    {
        id: 'remote-access',
        name: 'Remote Access',
        category: iconCategories.EUC,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm0-4h-2V7h2v7z M19 12h-2 M7 12H5 M12 5V3 M12 21v-2 M18 18l-1.5-1.5 M6 6l1.5 1.5',
        color: '#a855f7'
    },
    {
        id: 'endpoint-mgmt',
        name: 'Endpoint Mgmt',
        category: iconCategories.EUC,
        svg: 'M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 18V6h18v12H3z M12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z M7 7h1v1H7V7z M16 16h1v1h-1v-1z',
        color: '#a855f7'
    },
    {
        id: 'pc-backup',
        name: 'PC Backup',
        category: iconCategories.EUC,
        svg: 'M19 13h-4v-2h4V8l4 4-4 4v-3zM5 13h4v-2H5V8L1 12l4 4v-3z M12 18H3c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2v3h-2V4H3v12h9v2z',
        color: '#a855f7'
    },
    {
        id: 'file-share',
        name: 'File Share',
        category: iconCategories.EUC,
        svg: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
        color: '#a855f7'
    },
    {
        id: 'collaboration',
        name: 'Collab Tool',
        category: iconCategories.EUC,
        svg: 'M16.5 13c-1.2 0-2.25.45-3.08 1.17C12.35 14.39 12.18 14 12 14c-.18 0-.35.39-1.42.17-.83-.72-1.88-1.17-3.08-1.17-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5c1.2 0 2.25-.45 3.08-1.17.42.36.92.59 1.42.67.5-.08 1-.31 1.42-.67.83.72 1.88 1.17 3.08 1.17 2.48 0 4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5zM7.5 20c-1.38 0-2.5-1.12-2.5-2.5S6.12 15 7.5 15 10 16.12 10 17.5 8.88 20 7.5 20zm5.92-2.5l-1.42 2.5-1.42-2.5 1.42-2.5 1.42 2.5zM16.5 20c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
        color: '#a855f7'
    },
    {
        id: 'vdi-image',
        name: 'VDI Image',
        category: iconCategories.EUC,
        svg: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z',
        color: '#a855f7'
    },
    {
        id: 'directory-svc',
        name: 'Directory Svc',
        category: iconCategories.EUC,
        svg: 'M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM4 18V6h5.17l2 2H20v10H4z M12 10a2 2 0 100 4 2 2 0 000-4z',
        color: '#a855f7'
    },
    {
        id: 'sso-portal',
        name: 'SSO Portal',
        category: iconCategories.EUC,
        svg: 'M12 2L4 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm1-9H11V7h2v1z',
        color: '#a855f7'
    },
    {
        id: 'user-profile',
        name: 'User Profile',
        category: iconCategories.EUC,
        svg: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v12H4V6zm8 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm-6 8c0-2.33 4.67-3.5 7-3.5s7 1.17 7 3.5V17H6v-1z',
        color: '#a855f7'
    },
    // Removal of duplicate AppStream entry at line 2253

    {
        id: 'docs-sdk',
        name: 'Docs SDK',
        category: iconCategories.EUC,
        svg: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm-4 4l-2 2 2 2h4l2-2-2-2H9z',
        color: '#a855f7'
    },
    {
        id: 'desktop-client',
        name: 'Desktop Client',
        category: iconCategories.EUC,
        svg: 'M21 4H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 16V6h18v10H3z M6 9h12v1H6V9z M6 11h12v1H6v-1z M6 13h5v1H6v-1z',
        color: '#a855f7'
    },
    {
        id: 'zero-client',
        name: 'Zero Client',
        category: iconCategories.EUC,
        svg: 'M21 4H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM12 14v-4l-3 3h6l-3-3z',
        color: '#a855f7'
    },
    {
        id: 'mobile-workspace',
        name: 'Mob Workspace',
        category: iconCategories.EUC,
        svg: 'M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 18V4h10v14H7z M12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z M9 14h6v1H9v-1z',
        color: '#a855f7'
    },
    {
        id: 'call-center-client',
        name: 'Call Center',
        category: iconCategories.EUC,
        svg: 'M12 2c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z M12 11c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z',
        color: '#a855f7'
    },
    {
        id: 'remote-office',
        name: 'Remote Office',
        category: iconCategories.EUC,
        svg: 'M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-8h8v8zm-2-6h-4v4h4v-4z',
        color: '#a855f7'
    },
    {
        id: 'home-office',
        name: 'Home Office',
        category: iconCategories.EUC,
        svg: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z M12 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z',
        color: '#a855f7'
    },
    {
        id: 'print-server',
        name: 'Print Server',
        category: iconCategories.EUC,
        svg: 'M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z',
        color: '#a855f7'
    },
    {
        id: 'file-server',
        name: 'File Server',
        category: iconCategories.EUC,
        svg: 'M19 15v3H5v-3h14m2-10H3v12h18V5zm-2 2v3H5V7h14zM5 11h14v3H5v-3z M12 12c-1.11 0-2-.89-2-2s.89-2 2-2 2 .89 2 2-.89 2-2 2z',
        color: '#a855f7'
    },
    {
        id: 'identity-provider',
        name: 'IdP',
        category: iconCategories.EUC,
        svg: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c-1.66 0-3 1.34-3 3 0 2.25 3 5.33 3 5.33S15 12.25 15 10c0-1.66-1.34-3-3-3z M11 11h2v3h-2v-3z',
        color: '#a855f7'
    },
    {
        id: 'mdm-server',
        name: 'MDM Server',
        category: iconCategories.EUC,
        svg: 'M19 15v3H5v-3h14m2-10H3v12h18V5z M7 7h10v1H7V7zm0 2h10v1H7V9zm0 2h6v1H7v-1z M17 2H7v2h10V2z',
        color: '#a855f7'
    },
    {
        id: 'vdi-gateway',
        name: 'VDI Gateway',
        category: iconCategories.EUC,
        svg: 'M19 15v3H5v-3h14m2-10H3v12h18V5zm-2 2v3H5V7h14z M12 11c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z M10 6l4 4-4 4V6z',
        color: '#a855f7'
    },

    // MOBILE (20 icons)
    {
        id: 'mobile-hub',
        name: 'Mobile Hub',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M12 2v4 M12 18v3 M5 12h3 M16 12h3',
        color: '#db2777'
    },
    {
        id: 'location-service',
        name: 'Location Svc',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M12 7c-1.66 0-3 1.34-3 3 0 2.25 3 5.33 3 5.33S15 12.25 15 10c0-1.66-1.34-3-3-3z M12 17a1 1 0 110 2 1 1 0 010-2z',
        color: '#db2777'
    },

    {
        id: 'ios-client',
        name: 'iOS',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M12 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z M9 18h6v1H9v-1z',
        color: '#db2777'
    },
    {
        id: 'android-client',
        name: 'Android',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M12 6l4 4-4 4V6z M12 17a1 1 0 110 2 1 1 0 010-2z',
        color: '#db2777'
    },
    {
        id: 'react-native',
        name: 'React Native',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M11.5 6.5l3 3-3 3-3-3 3-3z M12 17a1 1 0 110 2 1 1 0 010-2z',
        color: '#db2777'
    },
    {
        id: 'flutter-app',
        name: 'Flutter',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M14.3 7l-2.5 2.5 2.5 2.5 M9.5 9.5l2.5-2.5',
        color: '#db2777'
    },
    {
        id: 'mobile-analytics-new',
        name: 'Mob Analytics',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M9 13h2v2H9v-2zm4-4h2v6h-2v-6zm-4-2h2v4H9V7z',
        color: '#db2777'
    },
    {
        id: 'push-notif',
        name: 'Push Notif',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M12 7c2 0 3 1 3 3v2H9v-2c0-2 1-3 3-3zm0 8h-2v1h4v-1h-2z',
        color: '#db2777'
    },
    {
        id: 'in-app-msg',
        name: 'In-App Msg',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M9 8h6v1H9z M9 10h4v1H9z M10 13l2 2 2-2',
        color: '#db2777'
    },
    {
        id: 'mobile-auth',
        name: 'Mobile Auth',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M12 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-3 6c0-1 2-2 3-2s3 1 3 2v1H9v-1z',
        color: '#db2777'
    },
    {
        id: 'offline-sync',
        name: 'Offline Sync',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M12 7l2 2-2 2V7zm-2 6l-2-2 2-2v4z',
        color: '#db2777'
    },
    {
        id: 'crashlines',
        name: 'Crash Report',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M12 7l1.5 1.5L12 10l-1.5-1.5L12 7zm0 6l1.5-1.5L12 10l-1.5 1.5L12 13z',
        color: '#db2777'
    },
    {
        id: 'test-lab',
        name: 'Test Lab',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M13 7h-2v6h2V7zm-1 8a1 1 0 100 2 1 1 0 000-2z',
        color: '#db2777'
    },
    {
        id: 'feature-flag',
        name: 'Feature Flag',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M9 7h6v5l-3-2-3 2V7z',
        color: '#db2777'
    },
    {
        id: 'mobile-api',
        name: 'Mobile API',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M10 7h4v2h2v4h-6v-6z M8 12h2v1h-2v-1z',
        color: '#db2777'
    },
    {
        id: 'mobile-analytics',
        name: 'Analytics+',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M9 15h2v2H9v-2zm4-4h2v6h-2v-6zm-4-2h2v4H9V7z',
        color: '#db2777'
    },
    {
        id: 'device-farm-mobile',
        name: 'Device Farm+',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M12 7l3 3-5 5-3-3 5-5z M10 17h4v1h-4v-1z',
        color: '#db2777'
    },
    {
        id: 'app-sync-mobile',
        name: 'AppSync SDK',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M12 7c-1.66 0-3 1.34-3 3h2L8.5 12.5 6 10h2c0-2.21 1.79-4 4-4v1z M12 11c1.66 0 3-1.34 3-3h-2l2.5-2.5L18 8h-2c0 2.21-1.79 4-4 4v-1z',
        color: '#db2777'
    },
    {
        id: 'amplify-mobile',
        name: 'Amplify SDK',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M12 6.5L15.5 13H8.5L12 6.5z',
        color: '#db2777'
    },
    {
        id: 'pinpoint-mobile',
        name: 'Pinpoint SDK',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M12 7c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z M12 6V5 M12 16v-1 M16 11h1 M8 11H7',
        color: '#db2777'
    },
    {
        id: 'wa-tool',
        name: 'Arch Tool',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M9 7l6 6-1.5 1.5L7.5 8.5 9 7z M12 17a1 1 0 110 2 1 1 0 010-2z',
        color: '#db2777'
    },
    {
        id: 'sns-mobile',
        name: 'Push SDK',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M12 7v4M12 13v2 M12 2v1 M12 21v1',
        color: '#db2777'
    },
    {
        id: 'worklink-mobile',
        name: 'WorkLink+',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M13 7h-2v4h2V7zm0 6h-2v2h2v-2z',
        color: '#db2777'
    },
    {
        id: 'honeycode-mobile',
        name: 'Honeycode+',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M9 8h6v1H9z M9 10h6v1H9z M9 12h4v1H9z',
        color: '#db2777'
    },
    {
        id: 'chime-sdk',
        name: 'Chime SDK',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M12 7c-2.21 0-4 1.79-4 4v4h8v-4c0-2.21-1.79-4-4-4z M12 17a1 1 0 110 2 1 1 0 010-2z',
        color: '#db2777'
    },
    {
        id: 'ivs-mobile',
        name: 'Video SDK',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M10 7l5 3-5 3V7z M12 17a1 1 0 110 2 1 1 0 010-2z',
        color: '#db2777'
    },
    {
        id: 'device-shadow',
        name: 'Dev Shadow',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M10 10c0-1.1.9-2 2-2s2 .9 2 2v3h-4v-3z M12 17a1 1 0 110 2 1 1 0 010-2z',
        color: '#db2777'
    },
    {
        id: 'iot-mobile',
        name: 'IoT SDK',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M12 7c1.66 0 3 1.34 3 3 0 2.25-3 5.33-3 5.33S9 12.25 9 10c0-1.66 1.34-3 3-3z',
        color: '#db2777'
    },
    {
        id: 'freertos-mobile',
        name: 'RTOS SDK',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M12 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z M9 15h6v1H9v-1z',
        color: '#db2777'
    },
    {
        id: 'greengrass-mobile',
        name: 'Greengrass+',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M12 6c-1.5 0-3 1.5-3 3 0 2 3 5 3 5s3-3 3-5c0-1.5-1.5-3-3-3z M12 11l-2 2h4l-2-2z',
        color: '#db2777'
    },
    {
        id: 'lambda-mobile',
        name: 'Lambda SDK',
        category: iconCategories.MOBILE,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M10 7l1 3-1 3h2l1-3-1-3h-2z M14 7l-1 3 1 3h2l1-3-1-3h-2z',
        color: '#db2777'
    },

    // BLOCKCHAIN (20 icons)
    {
        id: 'managed-blockchain',
        name: 'Blockchain',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M12 2l-10 5v10l10 5 10-5V7l-10-5zm8 14.2l-8 4-8-4V8.8l8-4 8 4v7.4z M12 7l4 2-4 2-4-2 4-2zm0 6l4 2-4 2-4-2 4-2z',
        color: '#f59e0b'
    },
    {
        id: 'qldb',
        name: 'QLDB',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v16H7V4zm2 4h6v2H9V8zm0 4h6v2H9v-2zm0 4h3v2H9v-2z M17 19l2-2-2-2v4z',
        color: '#f59e0b'
    },
    {
        id: 'miner',
        name: 'Miner',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M2 13l6-6 6 6-6 6-6-6zm12-9l-2 2 4 4-2 2m5 1l3-3-4-4-3 3 4 4zm-7 8l-8 8v2h2l8-8-2-2z',
        color: '#f59e0b'
    },
    {
        id: 'wallet',
        name: 'Wallet',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M19 5h-2V3c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM9 3h6v2H9V3zm10 16H5V7h14v12zm-3-6h-2v-2h2v2zm0 4h-2v-2h2v2z',
        color: '#f59e0b'
    },
    {
        id: 'smart-contract',
        name: 'Contract',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2zM7 5h10v14H7V5zm2 4h6v2H9V9zm0 4h6v2H9v-2z M17 3v4l-2-2 2-2z',
        color: '#f59e0b'
    },
    {
        id: 'token',
        name: 'Token',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M12 2l10 5v10l-10 5L2 17V7l10-5zm0 18.5l8-4V7.5l-8-4-8 4v7l8 4z M10 10h4v2h-4v-2z',
        color: '#f59e0b'
    },
    {
        id: 'ledger',
        name: 'Ledger',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm-5 5h8v2H8v-2zm0-4h8v2H8v-2z M12 6l2 2-2 2-2-2 2-2z',
        color: '#f59e0b'
    },
    {
        id: 'crypto-network',
        name: 'Network',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M12 2l-10 5v10l10 5 10-5V7l-10-5zm0 18.5l-8-4V7.5l8-4 8 4v7l-8 4z M12 7l1 1-1 1-1-1 1-1z M7 12l1 1-1 1-1-1 1-1z M17 12l1 1-1 1-1-1 1-1z',
        color: '#f59e0b'
    },
    {
        id: 'membership',
        name: 'Membership',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M12 2l-10 5v10l10 5 10-5V7l-10-5zm0 18.5l-8-4V7.5l8-4 8 4v7l-8 4z M12 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z M9 15c0-1.5 3-2.5 4.5-2.5s4.5 1 4.5 2.5v.5H9v-.5z',
        color: '#f59e0b'
    },
    {
        id: 'proposal',
        name: 'Proposal',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 5h10v14H7V5zm3 4l2 2 4-4 M8 16h8v1H8v-1z',
        color: '#f59e0b'
    },
    {
        id: 'ethereum-node',
        name: 'Ethereum',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M12 2l-8 4.5v9L12 20l8-4.5v-9L12 2zm0 2.5L17.5 8 12 11 6.5 8 12 4.5z M11 18.5v-7.5l-6-3.5v7l6 4z M13 18.5l6-4v-7l-6 3.5v7.5z',
        color: '#f59e0b'
    },
    {
        id: 'fabric-ca',
        name: 'Fabric CA',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 11c-2 0-3.5-1-4.5-2.5.5-1.5 2.5-2.5 4.5-2.5s4 1 4.5 2.5c-1 1.5-2.5 2.5-4.5 2.5z M12 2v2 M12 19v2',
        color: '#f59e0b'
    },
    {
        id: 'peer-node',
        name: 'Peer Node',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M12 2L4 7l8 5 8-5-8-5z M4 17l8 5 8-5 M4 12l8 5 8-5 M12 7l1.5 1.5L12 10l-1.5-1.5L12 7z M12 12v5',
        color: '#f59e0b'
    },
    {
        id: 'crypto-wallet',
        name: 'Wallet+',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M19 5h-2V3c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM9 3h6v2H9V3zm10 16H5V7h14v12zm-8-6h4v1.5L13 16l2 1.5V19h-4v-6z',
        color: '#f59e0b'
    },
    {
        id: 'blockchain-network',
        name: 'Network+',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M12 2l-10 5v10l10 5 10-5V7l-10-5zm0 18.5l-8-4V7.5l8-4 8 4v7l-8 4z M12 6l2 2-2 2-2-2 2-2zm-4 4l2 2-2 2-2-2 2-2zm8 0l2 2-2 2-2-2 2-2z M12 12v3',
        color: '#f59e0b'
    },
    {
        id: 'token-service',
        name: 'Token Svcs',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M12 2l10 5v10l-10 5L2 17V7l10-5zm0 18.5l8-4V7.5l-8-4-8 4v7l8 4z M12 11c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z',
        color: '#f59e0b'
    },
    {
        id: 'ledger-db',
        name: 'Ledger DB',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M18 2H6L4 22h16L18 2z M6 4h12l1 14H5L6 4z M9 8h6v2H9V8zm0 4h6v2H9v-2z',
        color: '#f59e0b'
    },
    {
        id: 'member',
        name: 'Member',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M12 2l-10 5v10l10 5 10-5V7l-10-5zm0 2.5L19.5 8 12 11.5 4.5 8 12 4.5z M12 11c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z',
        color: '#f59e0b'
    },
    {
        id: 'orderer',
        name: 'Orderer',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M12 2L2 21h20L12 2zm0 4.5L17.5 18H6.5L12 6.5z M11 13h2v3h-2v-3z',
        color: '#f59e0b'
    },
    {
        id: 'ca-service',
        name: 'CA Svc',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 11c-2 0-3.5-1-4.5-2.5.5-1.5 2.5-2.5 4.5-2.5s4 1 4.5 2.5c-1 1.5-2.5 2.5-4.5 2.5z M7 12h10',
        color: '#f59e0b'
    },
    {
        id: 'fabric-client',
        name: 'Fabric Clt',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M20 18c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8l8 4 8-4v10zM12 10L4 6l8-4 8 4-8 4z M8 13h8v1H8v-1z',
        color: '#f59e0b'
    },
    {
        id: 'ethereum-client',
        name: 'Ethereum Clt',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M20 18c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8l8 4 8-4v10zM12 10L4 6l8-4 8 4-8 4z M12 13c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z',
        color: '#f59e0b'
    },
    {
        id: 'corda-client',
        name: 'Corda Clt',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M20 18c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8l8 4 8-4v10zM12 10L4 6l8-4 8 4-8 4z M8 13h5v1H8v-1z',
        color: '#f59e0b'
    },
    {
        id: 'hyperledger',
        name: 'Hyperledger',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M12 2l10 5v10l-10 5L2 17V7l10-5zm0 18.5l8-4V7.5l-8-4-8 4v7l8 4z M12 7l1.5 1.5L12 10l-1.5-1.5L12 7z',
        color: '#f59e0b'
    },
    {
        id: 'hash-function',
        name: 'Hasher',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.5-8c0 2.48-2.02 4.5-4.5 4.5S7.5 14.48 7.5 12s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5z M10 12h4',
        color: '#f59e0b'
    },
    {
        id: 'block-explorer',
        name: 'Explorer',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1.5-14.5l-1.5 1.5-1.5-1.5 1.5-1.5 1.5 1.5z M12 16l3 3-3 3-3-3 3-3z',
        color: '#f59e0b'
    },
    {
        id: 'mining-node',
        name: 'Mining Node',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M12 2l-10 5v10l10 5 10-5V7l-10-5zm0 18.5l-8-4V7.5l8-4 8 4v7l-8 4z M10 12h4v2h-4v-2z',
        color: '#f59e0b'
    },
    {
        id: 'consensus-algo',
        name: 'Consensus',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z',
        color: '#f59e0b'
    },
    {
        id: 'dapp',
        name: 'DApp',
        category: iconCategories.BLOCKCHAIN,
        svg: 'M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7 3h10v18H7V3zm3 4l2 2-2 2-2-2 2-2zm4 8h-4v2h4v-2z',
        color: '#f59e0b'
    },
    // SATELLITE (10 icons)
    {
        id: 'ground-station',
        name: 'Ground Stn',
        category: iconCategories.SATELLITE,
        svg: 'M12 22v-4M5 22h14v-2H5v2z M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M12 14c1.1 0 2-.9 2-2V7h-4v5c0 1.1.9 2 2 2z',
        color: '#3b82f6'
    },
    {
        id: 'satellite',
        name: 'Satellite',
        category: iconCategories.SATELLITE,
        svg: 'M21 7h-4V3c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v4H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4v4c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-4h4c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM7 3h6v4H7V3zm14 12h-6v4H9v-4H3V9h18v6z M12 11c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z',
        color: '#3b82f6'
    },
    {
        id: 'antenna',
        name: 'Antenna',
        category: iconCategories.SATELLITE,
        svg: 'M12 2l-7 12h14L12 2zm0 3.5L16.5 13H7.5L12 5.5z M11 16h2v6h-2v-6z M8 18h8v1H8v-1z',
        color: '#3b82f6'
    },
    {
        id: 'orbital-data',
        name: 'Orbital Data',
        category: iconCategories.SATELLITE,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M12 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z M4 12c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm14 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z M12 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z',
        color: '#3b82f6'
    },
    {
        id: 'downlink',
        name: 'Downlink',
        category: iconCategories.SATELLITE,
        svg: 'M12 2L4.5 16h15L12 2zm0 4.5l3.5 6.5h-7L12 6.5z M11 18v4h2v-4h3l-4-4-4 4h3z',
        color: '#3b82f6'
    },
    {
        id: 'uplink',
        name: 'Uplink',
        category: iconCategories.SATELLITE,
        svg: 'M12 2L4.5 16h15L12 2zm0 4.5l3.5 6.5h-7L12 6.5z M11 18v4h2v-4h-3l4 e-4 4-4-4h3z',
        color: '#3b82f6'
    },
    {
        id: 'mission-profile',
        name: 'Mission Prof',
        category: iconCategories.SATELLITE,
        svg: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 5h14v14H5V5zm2 4h10v2H7V9zm0 4h10v2H7v-2z M17 5v4l-2-2 2-2z',
        color: '#3b82f6'
    },
    {
        id: 'satellite-contact',
        name: 'Contact',
        category: iconCategories.SATELLITE,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M11 7h2v6h-2V7z M11 15h2v2h-2v-2z',
        color: '#3b82f6'
    },
    {
        id: 'rf-signal',
        name: 'RF Signal',
        category: iconCategories.SATELLITE,
        svg: 'M2 12c0-5.52 4.48-10 10-10s10 4.48 10 10h-2c0-4.41-3.59-8-8-8s-8 3.59-8 8H2zm4 0c0-3.31 2.69-6 6-6s6 2.69 6 6h-2c0-2.21-1.79-4-4-4s-4 1.79-4 4H6zm4 0c0-1.1.9-2 2-2s2 .9 2 2h-4z',
        color: '#3b82f6'
    },
    {
        id: 'space-image',
        name: 'Space Img',
        category: iconCategories.SATELLITE,
        svg: 'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM5 5h14v14H5V5zm2 10.5L10.5 11l3 3.5 2-2.5 3.5 5.5H5l2-2.5z',
        color: '#3b82f6'
    },



    // GAME TECH (20 icons)
    {
        id: 'gamelift',
        name: 'GameLift',
        category: iconCategories.GAME_TECH,
        svg: 'M20 18c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8l8 4 8-4v10zM12 10L4 6l8-4 8 4-8 4zm5 3h-2v2h2v-2z',
        color: '#8b5cf6'
    },
    {
        id: 'lumberyard',
        name: 'Open 3D',
        category: iconCategories.GAME_TECH,
        svg: 'M12 2l10 5v10l-10 5L2 17V7l10-5zm0 2.5L4.5 8 12 11.5 19.5 8 12 4.5z M11 19V11.5L4 8v7.5l7 3.5z M13 19l7-3.5V8l-7 3.5V19z',
        color: '#8b5cf6'
    },
    {
        id: 'game-spark',
        name: 'Game Spark',
        category: iconCategories.GAME_TECH,
        svg: 'M11.5 2L15 9h7l-5.5 4L18 20l-6-4.5L6 20l1.5-7L2 9h7l3.5-7z',
        color: '#8b5cf6'
    },
    {
        id: 'game-kit',
        name: 'GameKit',
        category: iconCategories.GAME_TECH,
        svg: 'M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A1.003 1.003 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z M12 4.14L4.96 8.1 12 12.05l7.04-3.95L12 4.14z M11 19.86l-7-3.93v-7.01l7 3.93v7.01z M13 19.86l7-3.93v-7.01l7-3.93z',
        color: '#8b5cf6'
    },
    {
        id: 'game-server',
        name: 'Game Server',
        category: iconCategories.GAME_TECH,
        svg: 'M19 15v3H5v-3h14m2-10H3v12h18V5zm-2 2v3H5V7h14zM5 11h14v3H5v-3z M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z M8 8h1v1H8z',
        color: '#8b5cf6'
    },
    {
        id: 'matchmaking',
        name: 'Matchmaking',
        category: iconCategories.GAME_TECH,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v7z M18 12h-2M7 12H5 M12 11l1 1-1 1-1-1 1-1z',
        color: '#8b5cf6'
    },
    {
        id: 'leaderboard',
        name: 'Leaderboard',
        category: iconCategories.GAME_TECH,
        svg: 'M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1c2.45-.39 4.39-2.47 4.39-4.91V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z',
        color: '#8b5cf6'
    },
    {
        id: 'player-data',
        name: 'Player Data',
        category: iconCategories.GAME_TECH,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z',
        color: '#8b5cf6'
    },
    {
        id: 'game-analytics',
        name: 'Game Analytics',
        category: iconCategories.GAME_TECH,
        svg: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z',
        color: '#8b5cf6'
    },
    {
        id: 'session-mgr',
        name: 'Session Mgr',
        category: iconCategories.GAME_TECH,
        svg: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71-1.42 1.41z',
        color: '#8b5cf6'
    },
    {
        id: 'game-sec',
        name: 'Game Sec',
        category: iconCategories.GAME_TECH,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm0-4h-2V7h2v7z M12 17c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z',
        color: '#8b5cf6'
    },
    {
        id: 'voice-chat',
        name: 'Voice Chat',
        category: iconCategories.GAME_TECH,
        svg: 'M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z',
        color: '#8b5cf6'
    },

    // MANAGEMENT & GOVERNANCE (20 icons)
    {
        id: 'organizations',
        name: 'Orgs',
        category: iconCategories.MANAGEMENT,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M12 6l-3.5 6h7L12 6zm-5 8l-3.5 6h7l-3.5-6zm10 0l-3.5 6h7l-3.5-6z',
        color: '#ef4444'
    },
    {
        id: 'control-tower',
        name: 'Control Tower',
        category: iconCategories.MANAGEMENT,
        svg: 'M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z M11 16h2v-4h-2v4zm0-6h2V7h-2v3z',
        color: '#ef4444'
    },
    {
        id: 'trusted-advisor',
        name: 'Trusted Advisor',
        category: iconCategories.MANAGEMENT,
        svg: 'M12 2L1 7l11 5 9-4.09V7L12 2zm0 13c-2 0-3.5-1-4.5-2.5.5-1.5 2.5-2.5 4.5-2.5s4 1 4.5 2.5c-1 1.5-2.5 2.5-4.5 2.5z M12 22l-4-9 4-2 4 2-4 9z',
        color: '#ef4444'
    },
    {
        id: 'well-architected',
        name: 'Well Arch',
        category: iconCategories.MANAGEMENT,
        svg: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M12 22V12 M12 7l3 1.5-3 1.5-3-1.5 3-1.5z M7 4.5L12 7l5-2.5',
        color: '#ef4444'
    },
    {
        id: 'license-manager',
        name: 'License Mgr',
        category: iconCategories.MANAGEMENT,
        svg: 'M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z M9 10h6v2H9v-2zm0 4h6v2H9v-2z',
        color: '#ef4444'
    },
    {
        id: 'service-catalog',
        name: 'Catalog',
        category: iconCategories.MANAGEMENT,
        svg: 'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H10v-2h8v2zm0-4H10V8h8v2zm0-4H10V4h8v2z',
        color: '#ef4444'
    },
    {
        id: 'health-dashboard',
        name: 'Health',
        category: iconCategories.MANAGEMENT,
        svg: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z M12 18l3-3-3-3-3 3 3 3z',
        color: '#ef4444'
    },
    {
        id: 'support-center',
        name: 'Support',
        category: iconCategories.MANAGEMENT,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z M18 12h2M4 12h2',
        color: '#ef4444'
    },
    {
        id: 'marketplace',
        name: 'Marketplace',
        category: iconCategories.MANAGEMENT,
        svg: 'M12 2l-5.5 3v13.5L12 22l5.5-3.5V5L12 2zm2 14l-2 1.5-2-1.5V11l4-2.5v5.5z M12 9l2-1.5-2-1.5-2 1.5 2 1.5z',
        color: '#ef4444'
    },
    {
        id: 'systems-manager',
        name: 'Sys Manager',
        category: iconCategories.MANAGEMENT,
        svg: 'M19 15v3H5v-3h14m2-10H3v12h18V5zm-2 2v3H5V7h14zM5 11h14v3H5v-3z M12 12c-1.11 0-2-.89-2-2s.89-2 2-2 2 .89 2 2-.89 2-2 2z M8 8h1v1H8z',
        color: '#ef4444'
    },
    {
        id: 'opsworks',
        name: 'OpsWorks',
        category: iconCategories.MANAGEMENT,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2V7h2v9z M12 18l1-1-1-1-1 1 1 1z',
        color: '#ef4444'
    },
    {
        id: 'managed-services',
        name: 'Managed Svcs',
        category: iconCategories.MANAGEMENT,
        svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M12 11c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z M17 11h1v1h-1v-1z',
        color: '#ef4444'
    },
    {
        id: 'console-mobile',
        name: 'Console App',
        category: iconCategories.MANAGEMENT,
        svg: 'M17 19H7V5h10v14zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z M10 7h4v2h2v4h-6v-6z',
        color: '#ef4444'
    },
    {
        id: 'chat-ops',
        name: 'ChatOps',
        category: iconCategories.MANAGEMENT,
        svg: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z',
        color: '#ef4444'
    },
    {
        id: 'auto-scaling',
        name: 'Auto Scaling',
        category: iconCategories.MANAGEMENT,
        svg: 'M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z M7 9l4 4-4 4 M14 9l4 4-4 4',
        color: '#ef4444'
    },
    {
        id: 'service-health',
        name: 'Service Health',
        category: iconCategories.MANAGEMENT,
        svg: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z',
        color: '#ef4444'
    },
    {
        id: 'personal-health',
        name: 'Personal Health',
        category: iconCategories.MANAGEMENT,
        svg: 'M12 5.9v.01 M6 18l3.81-8.19L18 6l-3.81 8.19L6 18z',
        color: '#ef4444'
    },
    {
        id: 'open-telemetry',
        name: 'OpenTelemetry',
        category: iconCategories.MANAGEMENT,
        svg: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z',
        color: '#ef4444'
    },
    {
        id: 'service-health-ops',
        name: 'Service Health',
        category: iconCategories.DEVOPS,
        svg: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z',
        color: '#f59e0b'
    },
    {
        id: 'personal-health-ops',
        name: 'Personal Health',
        category: iconCategories.DEVOPS,
        svg: 'M12 5.9v.01 M6 18l3.81-8.19L18 6l-3.81 8.19L6 18z',
        color: '#f59e0b'
    },
    {
        id: 'license-manager-ops',
        name: 'License Mgr',
        category: iconCategories.DEVOPS,
        svg: 'M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z M9 10h6v2H9v-2zm0 4h6v2H9v-2z',
        color: '#f59e0b'
    },
    {
        id: 'trusted-advisor-ops',
        name: 'Trusted Advisor',
        category: iconCategories.DEVOPS,
        svg: 'M12 2L1 7l11 5 9-4.09V7L12 2zm0 13c-2 0-3.5-1-4.5-2.5.5-1.5 2.5-2.5 4.5-2.5s4 1 4.5 2.5c-1 1.5-2.5 2.5-4.5 2.5z M12 22l-4-9 4-2 4 2-4 9z',
        color: '#f59e0b'
    },
    {
        id: 'well-architected-ops',
        name: 'Well Arch',
        category: iconCategories.DEVOPS,
        svg: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M12 22V12 M12 7l3 1.5-3 1.5-3-1.5 3-1.5z M7 4.5L12 7l5-2.5',
        color: '#f59e0b'
    },
    {
        id: 'open-telemetry-ops',
        name: 'OpenTelemetry',
        category: iconCategories.DEVOPS,
        svg: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z',
        color: '#f59e0b'
    }



];

// Dynamic Connection Rules derived from Categories and specific overrides
export const connectionRules = {
    PUBLIC: [],
    SENSITIVE: [],
    SECURITY_LAYER: [],
    COMPUTE: []
};

// Helper to populate rules after icons are loaded
const initializeRules = () => {
    icons.forEach(icon => {
        // 1. PUBLIC RULES
        if (VALIDATION_ROLES.PUBLIC_ENTRY.includes(icon.category) ||
            ['public-users', 'internet-gateway', 'cdn'].includes(icon.id)) {
            connectionRules.PUBLIC.push(icon.id);
        }

        // 2. SENSITIVE RULES
        if (VALIDATION_ROLES.SENSITIVE_DATA.includes(icon.category) ||
            ['database', 'secrets-manager', 'secrets-vault'].includes(icon.id)) {
            connectionRules.SENSITIVE.push(icon.id);
        }

        // 3. SECURITY LAYER RULES
        if (VALIDATION_ROLES.SECURITY_LAYER.includes(icon.category) ||
            ['load-balancer', 'api-gateway', 'nat-gateway', 'transit-gateway', 'vpn-gateway'].includes(icon.id)) {
            connectionRules.SECURITY_LAYER.push(icon.id);
        }

        // 4. COMPUTE RULES
        if (VALIDATION_ROLES.COMPUTE_LAYER.includes(icon.category)) {
            connectionRules.COMPUTE.push(icon.id);
        }
    });
};

// Initialize rules immediately
initializeRules();

// Validation function to check if a connection is allowed
export const isConnectionAllowed = (sourceNode, targetNode) => {
    const sourceIcon = icons.find(icon => icon.id === sourceNode.data.iconId);
    const targetIcon = icons.find(icon => icon.id === targetNode.data.iconId);

    if (!sourceIcon || !targetIcon) return { allowed: true };

    // --- RULE 1: Block Public -> Sensitive ---
    // Direct connections from untrusted public sources to sensitive data are blocked
    if (connectionRules.PUBLIC.includes(sourceIcon.id) &&
        connectionRules.SENSITIVE.includes(targetIcon.id)) {

        // Exception: S3 Bucket (often public) might be flexible, but generally discouraged direct write
        // Let's strictly block to enforce architecture best practices (Use API/CloudFront)
        return {
            allowed: false,
            reason: `🚫 Dangerous Connection: Direct access from ${sourceIcon.name} (${sourceIcon.category}) to ${targetIcon.name} is unsafe. Use an API Gateway, Load Balancer, or CloudFront.`
        };
    }

    // --- RULE 2: Block SENSITIVE -> PUBLIC (Exfiltration?) ---
    // Usually invalid direction
    if (connectionRules.SENSITIVE.includes(sourceIcon.id) &&
        connectionRules.PUBLIC.includes(targetIcon.id)) {
        return {
            allowed: false,
            reason: `🚫 Invalid Direction: ${sourceIcon.name} should not initiate connections to ${targetIcon.name}.`
        };
    }

    // --- RULE 3: Warn Public -> Compute (Direct Access) ---
    // Recommend Intermediary
    if (connectionRules.PUBLIC.includes(sourceIcon.id) &&
        connectionRules.COMPUTE.includes(targetIcon.id)) {

        // Exception: WEB_APP -> API Gateway (which is security) - Handled by allowed
        // Exception: WEB_APP -> EC2 (Should warn)
        return {
            allowed: true, // Allow but warn? The UI only supports block or allow msg? 
            // If the UI supports "warning" state without blocking, that's ideal. 
            // Looking at FlowCanvas, it checks `allowed`.
            // Let's ALLOW but providing a toast might be separate. 
            // For now, we only block High Risk. 
            // Changing to Block creates friction. Let's strictly block High Risk only.
            allowed: true
        };
    }

    return { allowed: true };
};