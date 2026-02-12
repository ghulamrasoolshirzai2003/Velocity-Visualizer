// Enhanced validation rules and connection recommendations
// This provides intelligent suggestions for architecture design

import { connectionRules, icons, iconCategories, VALIDATION_ROLES } from '../data/iconData';

// Default recommendations based on category
const CATEGORY_DEFAULTS = {
    [iconCategories.COMPUTE]: {
        shouldConnectTo: ['database', 'cache', 'message-queue', 'object-storage'],
        shouldNotConnectTo: ['public-users'],
        bestPractices: ['Use for business logic processing', 'Ensure IAM roles are least-privilege'],
        securityLevel: 'medium'
    },
    [iconCategories.STORAGE]: {
        shouldConnectTo: ['backup', 'analytics-service'],
        shouldNotConnectTo: ['public-users', 'internet-gateway'],
        bestPractices: ['Enable encryption at rest', 'Restrict access via resource policies'],
        securityLevel: 'high'
    },
    [iconCategories.Database]: { // Handle variations if strictly specific
        shouldConnectTo: ['backup'],
        shouldNotConnectTo: ['public-users'],
        bestPractices: ['Use private subnets', 'Enable encryption'],
        securityLevel: 'critical'
    },
    // Fallback for general categories
    'DEFAULT': {
        shouldConnectTo: ['Any compatible service'],
        shouldNotConnectTo: [],
        bestPractices: ['Follow least privilege principle'],
        securityLevel: 'medium'
    }
};

export const connectionRecommendations = {
    // Security Components
    'waf': {
        shouldConnectTo: ['load-balancer', 'api-gateway', 'cdn'],
        shouldNotConnectTo: ['database', 'secrets-manager', 'secrets-vault'],
        bestPractices: [
            'Place WAF in front of load balancers or API gateways',
            'Configure rules to block common web attacks (SQL injection, XSS)',
            'Enable logging for security monitoring'
        ],
        securityLevel: 'high'
    },
    'firewall': {
        shouldConnectTo: ['vpc', 'load-balancer', 'vm', 'container'],
        shouldNotConnectTo: ['public-users', 'internet-gateway'],
        bestPractices: [
            'Use firewall to segment network zones',
            'Implement least-privilege access rules',
            'Regular audit of firewall rules'
        ],
        securityLevel: 'high'
    },
    'identity-mgmt': {
        shouldConnectTo: ['All services requiring authentication'],
        shouldNotConnectTo: [],
        bestPractices: [
            'Implement role-based access control (RBAC)',
            'Use multi-factor authentication (MFA)',
            'Regular access reviews and audits'
        ],
        securityLevel: 'critical'
    },

    // Networking Components
    'load-balancer': {
        shouldConnectTo: ['vm', 'container', 'serverless', 'kubernetes'],
        shouldNotConnectTo: ['database'],
        bestPractices: [
            'Distribute traffic across multiple instances',
            'Enable health checks for automatic failover',
            'Use SSL/TLS termination at load balancer'
        ],
        securityLevel: 'medium'
    },
    'api-gateway': {
        shouldConnectTo: ['serverless', 'container', 'vm', 'identity-mgmt'],
        shouldNotConnectTo: ['public-users'],
        bestPractices: [
            'Implement rate limiting and throttling',
            'Use API keys or OAuth for authentication',
            'Enable request/response transformation'
        ],
        securityLevel: 'high'
    },
    'cdn': {
        shouldConnectTo: ['object-storage', 'load-balancer', 'api-gateway'],
        shouldNotConnectTo: ['database', 'secrets-manager'],
        bestPractices: [
            'Cache static content at edge locations',
            'Enable HTTPS for all content delivery',
            'Configure cache invalidation strategies'
        ],
        securityLevel: 'low'
    },
    'dns': {
        shouldConnectTo: ['load-balancer', 'cdn', 'api-gateway'],
        shouldNotConnectTo: ['database', 'cache'],
        bestPractices: [
            'Use DNS for traffic routing and failover',
            'Implement geo-routing for global applications',
            'Enable DNSSEC for security'
        ],
        securityLevel: 'medium'
    },

    // Compute Components
    'vm': {
        shouldConnectTo: ['database', 'cache', 'object-storage'],
        shouldNotConnectTo: ['public-users', 'internet-gateway'],
        bestPractices: [
            'Use auto-scaling groups for high availability',
            'Implement regular patching and updates',
            'Enable monitoring and logging'
        ],
        securityLevel: 'medium'
    },
    'container': {
        shouldConnectTo: ['database', 'cache', 'message-queue'],
        shouldNotConnectTo: ['public-users'],
        bestPractices: [
            'Use container orchestration (Kubernetes)',
            'Implement image scanning for vulnerabilities',
            'Use secrets management for credentials'
        ],
        securityLevel: 'medium'
    },
    'serverless': {
        shouldConnectTo: ['api-gateway', 'message-queue', 'database'],
        shouldNotConnectTo: ['public-users'],
        bestPractices: [
            'Keep functions small and focused',
            'Use environment variables for configuration',
            'Implement proper error handling and retries'
        ],
        securityLevel: 'medium'
    },
    'kubernetes': {
        shouldConnectTo: ['container', 'load-balancer', 'database', 'cache'],
        shouldNotConnectTo: ['public-users'],
        bestPractices: [
            'Use namespaces for resource isolation',
            'Implement network policies',
            'Enable RBAC for access control'
        ],
        securityLevel: 'high'
    },

    // Storage Components
    'database': {
        shouldConnectTo: ['vm', 'container', 'serverless'],
        shouldNotConnectTo: ['public-users', 'internet-gateway', 'cdn'],
        bestPractices: [
            'Never expose database directly to public internet',
            'Use connection pooling for efficiency',
            'Enable encryption at rest and in transit',
            'Implement regular backups'
        ],
        securityLevel: 'critical'
    },
    'cache': {
        shouldConnectTo: ['vm', 'container', 'serverless'],
        shouldNotConnectTo: ['public-users', 'internet-gateway'],
        bestPractices: [
            'Use for frequently accessed data',
            'Implement cache invalidation strategy',
            'Monitor cache hit ratio'
        ],
        securityLevel: 'medium'
    },
    'object-storage': {
        shouldConnectTo: ['cdn', 'vm', 'container', 'backup'],
        shouldNotConnectTo: [],
        bestPractices: [
            'Use for static files and media',
            'Enable versioning for data protection',
            'Implement lifecycle policies'
        ],
        securityLevel: 'low'
    },

    // DevOps Components
    'monitoring': {
        shouldConnectTo: ['All components'],
        shouldNotConnectTo: [],
        bestPractices: [
            'Monitor all critical services',
            'Set up dashboards for visibility',
            'Configure alerts for anomalies'
        ],
        securityLevel: 'low'
    },
    'logging': {
        shouldConnectTo: ['All components'],
        shouldNotConnectTo: [],
        bestPractices: [
            'Centralize logs from all services',
            'Implement log retention policies',
            'Use for troubleshooting and auditing'
        ],
        securityLevel: 'low'
    },
    'ci-cd': {
        shouldConnectTo: ['database', 'container-registry', 'kubernetes', 'vm'],
        shouldNotConnectTo: ['public-users', 'internet-gateway'],
        bestPractices: [
            'Automate build, test, and deployment',
            'Implement security scanning in pipeline',
            'Use blue-green or canary deployments'
        ],
        securityLevel: 'medium'
    }
};

// Architecture validation rules
export const validationRules = [
    {
        id: 'no-public-to-sensitive',
        severity: 'error',
        check: (source, target) => {
            // Use the comprehensive dynamic rules from iconData.js
            return connectionRules.PUBLIC.includes(source.data.iconId) &&
                connectionRules.SENSITIVE.includes(target.data.iconId);
        },
        message: (source, target) =>
            `🚫 SECURITY RISK: Direct connection from ${source.data.label} (${source.data.category}) to ${target.data.label} is unsafe.`,
        suggestion: 'Use an API Gateway, Load Balancer, or Security Layer as an intermediary.'
    },
    {
        id: 'public-to-compute-warning',
        severity: 'warning',
        check: (source, target) => {
            // Warn if Public connects directly to Compute (excluding specific allowed edge services)
            // 'internet-gateway' -> 'ec2' is valid but risky without firewall usually
            // We use the dynamic rules from iconData.js
            return connectionRules.PUBLIC.includes(source.data.iconId) &&
                connectionRules.COMPUTE.includes(target.data.iconId) &&
                // Exclude if target is conceptually a "Public Intermediary" but categorized as Compute? 
                // No, our COMPUTE list is strict.
                // Exclude static site hosting which is STORAGE actually.
                target.data.iconId !== 'cdn'; // CDN is Networking
        },
        message: (source, target) =>
            `⚠️ ARCHITECTURE WARNING: Accessible directly from public. Ensure security groups are strict.`,
        suggestion: 'Consider placing a Load Balancer or API Gateway in front for scalability and security.'
    },
    // Keep specific best practice rules
    {
        id: 'database-needs-protection',
        severity: 'warning',
        check: (source, target) => {
            const isDatabase = connectionRules.SENSITIVE.includes(target.data.iconId);
            const isProtector = connectionRules.SECURITY_LAYER.includes(source.data.iconId) ||
                connectionRules.COMPUTE.includes(source.data.iconId);

            return isDatabase && !isProtector && !connectionRules.SENSITIVE.includes(source.data.iconId); // Allow DB-to-DB
        },
        message: (source, target) =>
            `⚠️ BEST PRACTICE: ${target.data.label} should be accessed through application servers or security layers.`,
        suggestion: 'Add a VM, Container, or Serverless function to handle database queries.'
    },
    {
        id: 'use-load-balancer-for-scaling',
        severity: 'info',
        check: (source, target) => {
            const computeNodes = ['vm', 'container', 'ec2-instance'];
            return source.data.iconId === 'internet-gateway' && computeNodes.includes(target.data.iconId);
        },
        message: (source, target) =>
            `💡 SUGGESTION: Consider adding a Load Balancer before ${target.data.label}.`,
        suggestion: 'Load Balancers distribute traffic and provide health checks.'
    }
];

// Get validation warnings for a connection
export const validateConnection = (sourceNode, targetNode) => {
    const warnings = [];

    validationRules.forEach(rule => {
        if (rule.check(sourceNode, targetNode)) {
            warnings.push({
                id: rule.id,
                severity: rule.severity,
                message: rule.message(sourceNode, targetNode),
                suggestion: rule.suggestion
            });
        }
    });

    return warnings;
};

// Get recommendations for what a node should connect to
export const getConnectionSuggestions = (iconId) => {
    let recommendations = connectionRecommendations[iconId];

    // Fallback: Use Category Defaults if specific recommendations don't exist
    if (!recommendations) {
        const iconDef = icons.find(i => i.id === iconId);
        if (iconDef) {
            recommendations = CATEGORY_DEFAULTS[iconDef.category] || CATEGORY_DEFAULTS['DEFAULT'];
        }
    }

    if (!recommendations) {
        return CATEGORY_DEFAULTS['DEFAULT'];
    }
    return recommendations;
};
