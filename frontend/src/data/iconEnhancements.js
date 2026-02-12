
// SENITNEL 40 - COMPONENT DETAILS SYSTEM (PROFESSIONAL TIER)
// Complete documentation for 40+ Cloud Architecture Components
// Follows AWS/Azure/GCP documentation standards

export const iconEnhancements = {

    // ==================== SECURITY COMPONENTS (8) ====================

    'waf': {
        name: 'Web Application Firewall',
        category: 'Security',
        description: 'A Web Application Firewall (WAF) helps protect web applications by filtering and monitoring HTTP traffic between a web application and the Internet. It specifically defends against common exploits such as SQL injection, Cross-Site Scripting (XSS), and other OWASP Top 10 vulnerabilities.',
        howToUse: {
            summary: 'Deploy in front of public-facing applications to filter malicious traffic.',
            implementation: [
                'Provision WAF at the network edge (e.g., attached to CloudFront or ALB).',
                'Configure Web Access Control Lists (Web ACLs) with rule sets.',
                'Enable logging to analyze traffic patterns and blocked requests.'
            ],
            bestPractices: [
                'Use managed rule sets for OWASP Top 10 protection.',
                'Start in "Count" mode to test rules before enforcing "Block" mode.',
                'Implement rate-limiting rules to prevent brute force attacks.',
                'Regularly review and update custom rules based on threat intelligence.'
            ]
        },
        connections: [
            { target: 'load-balancer', purpose: 'Filters traffic before it reaches the load balancer', protocol: 'HTTPS', dataFlow: 'Inbound' },
            { target: 'api-gateway', purpose: 'Protects API endpoints from malicious payloads', protocol: 'HTTPS', dataFlow: 'Inbound' },
            { target: 'cdn', purpose: 'Edge security integration for global caching', protocol: 'HTTPS', dataFlow: 'Bidirectional' }
        ]
    },

    'firewall': {
        name: 'Network Firewall',
        category: 'Security',
        description: 'A Network Firewall is a managed network security service that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It establishes a barrier between a trusted internal network and untrusted external networks.',
        howToUse: {
            summary: 'Define network-level traffic rules to secure VPC subnets.',
            implementation: [
                'Create stateful or stateless rule groups to allow/deny traffic.',
                'Apply firewall policies across multiple VPCs using a Firewall Manager.',
                'Enable VPC Flow Logs to monitor traffic decisions.'
            ],
            bestPractices: [
                'Adopt a "deny-all" default policy and explicitly allow required traffic.',
                'Segment networks into zones (e.g., DMZ, Application, Database) with strict rules.',
                'Use Intrusion Prevention System (IPS) features if available.',
                'Regularly audit firewall rules to remove unused permissions.'
            ]
        },
        connections: [
            { target: 'public-subnet', purpose: 'Filters ingress/egress traffic for the subnet', protocol: 'TCP/UDP', dataFlow: 'Bidirectional' },
            { target: 'nat-gateway', purpose: 'Secures outbound traffic from private instances', protocol: 'TCP/URL Filtering', dataFlow: 'Outbound' },
            { target: 'vpn', purpose: 'Inspects traffic entering from corporate networks', protocol: 'IPsec/TLS', dataFlow: 'Bidirectional' }
        ]
    },

    'encryption': {
        name: 'Key Management Service',
        category: 'Security',
        description: 'Key Management Service (KMS) enables you to create and control the cryptographic keys used to encrypt your data. It integrates with other services to provide encryption at rest and facilitates the management of encryption lifecycles.',
        howToUse: {
            summary: 'Manage cryptographic keys for encrypting data across services.',
            implementation: [
                'Create Customer Master Keys (CMKs) for sensitive data encryption.',
                'Define Key Policies to control who can administer or use the keys.',
                'Enable automatic key rotation to meet compliance requirements.'
            ],
            bestPractices: [
                'Use separate keys for different data classifications and environments.',
                'Never store keys in plain text; use KMS for all cryptographic operations.',
                'Audit key usage logs (e.g., CloudTrail) to detect unauthorized access.',
                'Use Envelope Encryption for large datasets.'
            ]
        },
        connections: [
            { target: 'database', purpose: 'Encrypts database storage volumes at rest', protocol: 'Internal API', dataFlow: 'Internal' },
            { target: 'object-storage', purpose: 'Server-side encryption for stored objects', protocol: 'Internal API', dataFlow: 'Internal' },
            { target: 'secrets-vault', purpose: 'Encrypts stored secrets and credentials', protocol: 'Envelope Encryption', dataFlow: 'Internal' }
        ]
    },

    'identity-mgmt': {
        name: 'Identity & Access Mgmt (IAM)',
        category: 'Security',
        description: 'Identity and Access Management (IAM) enables you to manage access to cloud services and resources securely. You can create and manage cloud users and groups, and use permissions to allow and deny their access to resources.',
        howToUse: {
            summary: 'Centralized control for authentication and authorization.',
            implementation: [
                'Create individual users or integrate with an Identity Provider (IdP).',
                'Define Roles for services to assume (e.g., EC2 accessing S3).',
                'Attach Policies (JSON) to grant granular permissions.'
            ],
            bestPractices: [
                'Follow the Principle of Least Privilege (grant only necessary permissions).',
                'Enable Multi-Factor Authentication (MFA) for all human users.',
                'Avoid using root account credentials for daily tasks.',
                'Regularly rotate access keys and credentials.'
            ]
        },
        connections: [
            { target: 'admin-service', purpose: 'Authenticates administrators accessing the portal', protocol: 'OIDC/SAML', dataFlow: 'Bidirectional' },
            { target: 'api-gateway', purpose: 'Authorizes API requests using IAM roles', protocol: 'SigV4', dataFlow: 'Internal' },
            { target: 'auth-service', purpose: 'Provides identity store for user authentication', protocol: 'LDAP/OIDC', dataFlow: 'Bidirectional' }
        ]
    },

    'inspector': {
        name: 'Amazon Inspector',
        category: 'Security',
        description: 'Automated security assessment service that helps improve the security and compliance of applications deployed on AWS.',
        howToUse: {
            summary: 'Scan EC2 and containers for vulnerabilities.',
            implementation: ['Install agent.', 'Configure assessment target.', 'Run assessment.'],
            bestPractices: ['Regular scans.', 'Automate via EventBridge.', 'Prioritize critical findings.']
        },
        connections: [{ target: 'ec2-instance', purpose: 'Security scanning', protocol: 'Agent', dataFlow: 'Inbound' }]
    },
    'guardduty': {
        name: 'GuardDuty',
        category: 'Security',
        description: 'Threat detection service that continuously monitors for malicious activity and unauthorized behavior.',
        howToUse: {
            summary: 'Enable intelligent threat detection.',
            implementation: ['Enable service.', 'Monitor findings.', 'Automate remediation.'],
            bestPractices: ['Analyze VPC Flow Logs.', 'Integrate with Security Hub.', 'Suppress false positives.']
        },
        connections: []
    },
    'macie': {
        name: 'Macie',
        category: 'Security',
        description: 'Fully managed data security and data privacy service that uses ML to discover and protect sensitive data in S3.',
        howToUse: {
            summary: 'Discover sensitive data in S3.',
            implementation: ['Enable Macie.', 'Run discovery jobs.', 'Review findings.'],
            bestPractices: ['Define custom data identifiers.', 'Schedule regular scans.', 'Monitor S3 public access.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Data scanning', protocol: 'S3 API', dataFlow: 'Inbound' }]
    },
    'shield': {
        name: 'Shield',
        category: 'Security',
        description: 'Managed DDoS protection service that safeguards applications running on AWS.',
        howToUse: {
            summary: 'Protect from DDoS attacks.',
            implementation: ['Standard is automatic.', 'Enable Advanced for Route53/CloudFront.', 'Configure health checks.'],
            bestPractices: ['Use Route 53 for DNS.', 'Deploy CloudFront.', 'Baseline normal traffic.']
        },
        connections: [{ target: 'cloudfront', purpose: 'Edge protection', protocol: 'HTTPS', dataFlow: 'Inbound' }]
    },
    'kms': {
        name: 'KMS',
        category: 'Security',
        description: 'Managed service that makes it easy for you to create and control the cryptographic keys used to encrypt your data.',
        howToUse: {
            summary: 'Encryption key management.',
            implementation: ['Create CMK.', 'Define policy.', 'Encrypt data.'],
            bestPractices: ['Least privilege policy.', 'Enable rotation.', 'Audit key usage.']
        },
        connections: []
    },
    'cloudhsm': {
        name: 'CloudHSM',
        category: 'Security',
        description: 'Cloud-based hardware security module (HSM) that enables you to easily generate and use your own encryption keys on the AWS Cloud.',
        howToUse: {
            summary: 'Dedicated hardware for keys.',
            implementation: ['Provision cluster.', 'Initialize HSM.', 'Connect app.'],
            bestPractices: ['Multi-AZ for HA.', 'Secure backup.', 'FIPS 140-2 Level 3 compliance.']
        },
        connections: []
    },
    'cert-manager': {
        name: 'Certificate Manager',
        category: 'Security',
        description: 'Provision, manage, and deploy public and private SSL/TLS certificates.',
        howToUse: {
            summary: 'SSL/TLS certificate management.',
            implementation: ['Request cert.', 'Verify domain.', 'Attach to Load Balancer.'],
            bestPractices: ['Automated renewal.', 'Use for all public endpoints.', 'DNS validation.']
        },
        connections: [{ target: 'load-balancer', purpose: 'HTTPS termination', protocol: 'SSL/TLS', dataFlow: 'Inbound' }]
    },
    'waf-v2': {
        name: 'WAF V2',
        category: 'Security',
        description: 'Modern Web Application Firewall with simplified rules and improved scale.',
        howToUse: {
            summary: 'Advanced web security.',
            implementation: ['Create Web ACL.', 'Add rule groups.', 'Associate resource.'],
            bestPractices: ['Use managed rules.', 'Rate limiting.', 'IP sets for blocking.']
        },
        connections: [{ target: 'api-gateway', purpose: 'API Security', protocol: 'HTTPS', dataFlow: 'Inbound' }]
    },
    'firewall-mgr': {
        name: 'Firewall Manager',
        category: 'Security',
        description: 'Central management for security rules across multiple accounts and resources.',
        howToUse: {
            summary: 'Centralized security policies.',
            implementation: ['Set up Org.', 'Define policy.', 'Apply across accounts.'],
            bestPractices: ['Enforce baseline security.', 'Monitor compliance.', 'Automate remediation.']
        },
        connections: [{ target: 'organizations', purpose: 'Multi-account management', protocol: 'Internal', dataFlow: 'Outbound' }]
    },
    'artifact': {
        name: 'Artifact',
        category: 'Security',
        description: 'Central resource for compliance-related information, providing access to security and compliance reports.',
        howToUse: {
            summary: 'Access compliance reports.',
            implementation: ['Search reports.', 'Accept terms.', 'Download reports.'],
            bestPractices: ['Auditor access.', 'Review SOC/PCI reports.', 'Share securely.']
        },
        connections: []
    },
    'detective': {
        name: 'Detective',
        category: 'Security',
        description: 'Deep security analysis and investigation platform that helps find root causes of security findings.',
        howToUse: {
            summary: 'Investigate security issues.',
            implementation: ['Enable service.', 'Analyze graph.', 'Identify impact.'],
            bestPractices: ['Integrate with GuardDuty.', 'Review findings daily.', 'Deep dive into anomalies.']
        },
        connections: []
    },
    'security-hub': {
        name: 'Security Hub',
        category: 'Security',
        description: 'Cloud security posture management service that performs security best practice checks and aggregates alerts.',
        howToUse: {
            summary: 'Central security view.',
            implementation: ['Enable service.', 'Review findings.', 'Automate responses.'],
            bestPractices: ['Consolidate findings.', 'Monitor compliance score.', 'Enable all standards.']
        },
        connections: [{ target: 'guardduty', purpose: 'Aggregates findings', protocol: 'Event', dataFlow: 'Inbound' }]
    },
    'mfa': {
        name: 'Multi-Factor Authentication',
        category: 'Security',
        description: 'Multi-Factor Authentication (MFA) adds an extra layer of protection on top of your user name and password. With MFA enabled, users must provide two or more distinct forms of authentication to verify their identity.',
        howToUse: {
            summary: 'Enforce secondary verification for user logins.',
            implementation: [
                'Enable MFA at the root account level immediately.',
                'Enforce MFA policies for all IAM users accessing the console.',
                'Integrate virtual MFA devices (Authenticator apps) or hardware tokens.'
            ],
            bestPractices: [
                'Require MFA for any privilege escalation or sensitive operation.',
                'Use context-aware access policies (e.g., trusted devices only).',
                'Train users on the importance of MFA and phishing resistance.',
                'Have backup recovery codes for emergency access.'
            ]
        },
        connections: [
            { target: 'identity-mgmt', purpose: 'Enhances security for user authentication', protocol: 'TOTP', dataFlow: 'Internal' },
            { target: 'vpn', purpose: 'Requires 2FA for remote network access', protocol: 'RADIUS', dataFlow: 'Inbound' },
            { target: 'admin-service', purpose: 'Protects administrative interfaces', protocol: 'HTTPS', dataFlow: 'Inbound' }
        ]
    },

    'ddos-protection': {
        name: 'DDoS Protection Service',
        category: 'Security',
        description: 'DDoS Protection is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on the cloud. It provides always-on detection and automatic inline mitigations that minimize application downtime and latency.',
        howToUse: {
            summary: 'Defend against volumetric and application-layer DDoS attacks.',
            implementation: [
                'Enable standard protection for basic network layer defense.',
                'Subscribe to advanced protection for specific resource coverage and cost protection.',
                'Configure response teams (DRT) for 24/7 support during attacks.'
            ],
            bestPractices: [
                'Combine with WAF for comprehensive Layer 7 protection.',
                'Reduce attack surface by placing resources behind protected endpoints (CloudFront/ALB).',
                'Test application resilience with simulated attack traffic.',
                'Set up CloudWatch alarms for DDoS detection metrics.'
            ]
        },
        connections: [
            { target: 'cdn', purpose: 'Protects edge distributions from volumetric attacks', protocol: 'Internal', dataFlow: 'Inbound' },
            { target: 'dns', purpose: 'Mitigates DNS-query flood attacks', protocol: 'UDP/TCP', dataFlow: 'Inbound' },
            { target: 'load-balancer', purpose: 'Shields load balancers from SYN floods', protocol: 'TCP', dataFlow: 'Inbound' }
        ]
    },

    'secrets-vault': {
        name: 'Secrets Vault / Manager',
        category: 'Security',
        description: 'Secrets Vault helps you protect secrets needed to access your applications, services, and IT resources. The service enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle.',
        howToUse: {
            summary: 'Securely store and rotate application secrets.',
            implementation: [
                'Store database credentials, API keys, and OAuth tokens.',
                'Configure automatic rotation schedules using Lambda functions.',
                'Retrieve secrets programmatically via API calls at runtime.'
            ],
            bestPractices: [
                'Eliminate hard-coded credentials in source code.',
                'Use fine-grained permissions to control who can access specific secrets.',
                'Audit secret usage patterns to detect compromised keys.',
                'Enable replication for multi-region redundancy.'
            ]
        },
        connections: [
            { target: 'database', purpose: 'Stores and rotates DB credentials automatically', protocol: 'Internal API', dataFlow: 'Internal' },
            { target: 'serverless', purpose: 'Injects secrets into function environment at runtime', protocol: 'HTTPS', dataFlow: 'Outbound' },
            { target: 'container', purpose: 'Mounts secrets as volumes or env vars', protocol: 'Internal API', dataFlow: 'Outbound' }
        ]
    },

    'compliance': {
        name: 'Compliance Monitor',
        category: 'Security',
        description: 'Compliance Monitor provides a consolidated view of your compliance status. It automates the assessment of your resources against simplified or customized sets of requirements (e.g., PCI DSS, HIPAA, GDPR).',
        howToUse: {
            summary: 'Audit and report on resource configuration compliance.',
            implementation: [
                'Select compliance frameworks (CIS benchmarks, NIST, etc.) relevant to your org.',
                'Schedule automated assessments and config recording.',
                'Generate audit reports for stakeholders.'
            ],
            bestPractices: [
                'Enable continuous monitoring for real-time compliance status.',
                'Automate remediation for common non-compliant findings.',
                'Aggregrate findings across all accounts and regions.',
                'Regularly review exceptions and false positives.'
            ]
        },
        connections: [
            { target: 'monitoring', purpose: 'Sends compliance metrics for visualization', protocol: 'Internal API', dataFlow: 'Outbound' },
            { target: 'notification', purpose: 'Alerts admins of compliance violations', protocol: 'SNS/Email', dataFlow: 'Outbound' },
            { target: 'encryption', purpose: 'Verifies encryption status of resources', protocol: 'Audit API', dataFlow: 'Inbound' }
        ]
    },


    // ==================== NETWORKING COMPONENTS (8) ====================

    'load-balancer': {
        name: 'Elastic Load Balancer',
        category: 'Networking',
        description: 'Elastic Load Balancing automatically distributes incoming application traffic across multiple targets, such as EC2 instances, containers, and IP addresses. It handles the varying load of your application traffic in a single Availability Zone or across multiple Availability Zones.',
        howToUse: {
            summary: 'Distribute traffic target groups to improve availability.',
            implementation: [
                'Choose between Application (HTTP/S), Network (TCP/UDP), or Gateway LB.',
                'Define Target Groups containing your backend resources.',
                'Configure Listeners and Rules to route traffic based on path or host.'
            ],
            bestPractices: [
                'Enable Cross-Zone Load Balancing for even traffic distribution.',
                'Use Health Checks to automatically remove unhealthy targets.',
                'Implement Sticky Sessions if your application requires state.',
                'Enable Access Logs for traffic analysis.'
            ]
        },
        connections: [
            { target: 'app-server', purpose: 'Routes traffic to healthy instances', protocol: 'HTTP', dataFlow: 'Outbound' },
            { target: 'container', purpose: 'Distributes requests to container pods', protocol: 'HTTP/gRPC', dataFlow: 'Outbound' },
            { target: 'waf', purpose: 'Receives filtered traffic from WAF', protocol: 'HTTPS', dataFlow: 'Inbound' }
        ]
    },

    'api-gateway': {
        name: 'API Gateway',
        category: 'Networking',
        description: 'API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. It acts as the "front door" for applications to access data, business logic, or functionality from your backend services.',
        howToUse: {
            summary: 'Create, manage, and secure REST and WebSocket APIs.',
            implementation: [
                'Define API resources and methods (GET, POST, etc.).',
                'Integrate with Lambda, HTTP endpoints, or other AWS services.',
                'Deploy APIs to Stages (dev, prod) for lifecycle management.'
            ],
            bestPractices: [
                'Enable Throttling and Quotas to protect backend systems.',
                'Use API Keys or Cognito Authorizers for security.',
                'Validate request parameters before they reach the backend.',
                'Enable Caching to improve response latency and reduce cost.'
            ]
        },
        connections: [
            { target: 'serverless', purpose: 'Triggers functions to process API requests', protocol: 'Internal Event', dataFlow: 'Outbound' },
            { target: 'identity-mgmt', purpose: 'Authenticates API callers', protocol: 'OIDC', dataFlow: 'Inbound' },
            { target: 'waf', purpose: 'Protects API from web exploits', protocol: 'HTTPS', dataFlow: 'Inbound' }
        ]
    },

    'cdn': {
        name: 'Content Delivery Network',
        category: 'Networking',
        description: 'A Content Delivery Network (CDN) is a highly-distributed platform of servers that helps minimize delays in loading web page content by reducing the physical distance between the server and the user.',
        howToUse: {
            summary: 'Cache and deliver static content from edge locations.',
            implementation: [
                'Create a distribution pointing to your Origin (S3 or Load Balancer).',
                'Configure cache behaviors relative to path patterns.',
                'Set up Geo-Restriction if necessary.'
            ],
            bestPractices: [
                'Use detailed Cache-Control headers on your origin objects.',
                'Invalidate objects only when necessary (versioning is better).',
                'Serve traffic over HTTPS using custom SSL certificates.',
                'Compress objects automatically (Gzip/Brotli) to save bandwidth.'
            ]
        },
        connections: [
            { target: 'object-storage', purpose: 'Pulls static assets (images/js) from origin', protocol: 'HTTPS', dataFlow: 'Outbound' },
            { target: 'waf', purpose: 'Applies security rules at the edge', protocol: 'Internal', dataFlow: 'Inbound' },
            { target: 'public-users', purpose: 'Delivers cached content with low latency', protocol: 'HTTPS', dataFlow: 'Outbound' }
        ]
    },

    'database': {
        name: 'Database',
        category: 'Storage',
        description: 'Relational or NoSQL database service.',
        howToUse: {
            summary: 'Structured data storage.',
            implementation: ['Provision instance.', 'Configure schema.', 'Connect app.'],
            bestPractices: ['Regular backups.', 'Multi-AZ for HA.', 'Encryption at rest.']
        },
        connections: [{ target: 'snapshot', purpose: 'Backups', protocol: 'Internal', dataFlow: 'Outbound' }]
    },
    's3-bucket': {
        name: 'S3 Bucket',
        category: 'Storage',
        description: 'Object storage built to store and retrieve any amount of data from anywhere.',
        howToUse: {
            summary: 'Store files and objects.',
            implementation: ['Create bucket.', 'Upload data.', 'Set policy.'],
            bestPractices: ['Versioning.', 'Lifecycle policies.', 'Private by default.']
        },
        connections: [{ target: 'cdn', purpose: 'Origin', protocol: 'HTTPS', dataFlow: 'Outbound' }]
    },
    's3-glacier': {
        name: 'Glacier',
        category: 'Storage',
        description: 'Long-term, secure, durable storage classes for data archiving and long-term backup.',
        howToUse: {
            summary: 'Archive data.',
            implementation: ['Create vault.', 'Upload archive.', 'Retrieve (minutes to hours).'],
            bestPractices: ['Use for cold data.', 'Lifecycle from S3.', 'Audit retrieval costs.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Lifecycle target', protocol: 'Internal', dataFlow: 'Inbound' }]
    },
    'efs': {
        name: 'Elastic File System',
        category: 'Storage',
        description: 'Serverless, fully managed file storage for use with AWS Cloud services and on-premises resources.',
        howToUse: {
            summary: 'Shared file system.',
            implementation: ['Create file system.', 'Mount on EC2/Containers.', 'Scale performance.'],
            bestPractices: ['Multi-AZ mount targets.', 'Infrequent Access tier.', 'Backup via AWS Backup.']
        },
        connections: [{ target: 'ec2-instance', purpose: 'Network mount', protocol: 'NFSv4', dataFlow: 'Bidirectional' }]
    },
    'fsx': {
        name: 'FSx',
        category: 'Storage',
        description: 'Fully managed third-party file systems (Lustre, Windows, NetApp, OpenZFS).',
        howToUse: {
            summary: 'High performance file systems.',
            implementation: ['Choose engine.', 'Determine sizing.', 'Mount instances.'],
            bestPractices: ['FSx for Lustre for HPC.', 'FSx for Windows for AD.', 'Performance tiering.']
        },
        connections: []
    },
    'ebs-volume': {
        name: 'EBS Volume',
        category: 'Storage',
        description: 'Block level storage volumes for use with EC2 instances.',
        howToUse: {
            summary: 'Persistent block storage.',
            implementation: ['Create volume.', 'Attach to EC2.', 'Mount as drive.'],
            bestPractices: ['SSD for performance.', 'Snapshot frequently.', 'Delete on termination if not needed.']
        },
        connections: [{ target: 'ec2-instance', purpose: 'Disk drive', protocol: 'NVMe/iSCSI', dataFlow: 'Bidirectional' }]
    },
    'storage-gateway': {
        name: 'Storage Gateway',
        category: 'Storage',
        description: 'Hybrid cloud storage service that provides on-premises access to virtually unlimited cloud storage.',
        howToUse: {
            summary: 'Hybrid storage.',
            implementation: ['Deploy gateway VM.', 'Activate with cloud.', 'Connect on-prem app.'],
            bestPractices: ['File/Volume/Tape modes.', 'Local caching.', 'Bandwidth management.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Backing store', protocol: 'HTTPS', dataFlow: 'Outbound' }]
    },
    'backup-vault': {
        name: 'Backup Vault',
        category: 'Storage',
        description: 'Logical container where backups are stored.',
        howToUse: {
            summary: 'Organize backups.',
            implementation: ['Create vault.', 'Configure KMS key.', 'Add recovery points.'],
            bestPractices: ['Vault Lock for immutability.', 'Access policies.', 'Cross-region copy.']
        },
        connections: []
    },
    'dr-service': {
        name: 'Disaster Recovery',
        category: 'Storage',
        description: 'Services and patterns for disaster recovery.',
        howToUse: {
            summary: 'Ensure business continuity.',
            implementation: ['Define RPO/RTO.', 'Set up replication.', 'Test failover.'],
            bestPractices: ['Regular drills.', 'Automated failover.', 'Pilot light vs Warm standby.']
        },
        connections: []
    },
    'archive': {
        name: 'Archive Storage',
        category: 'Storage',
        description: 'General purpose archive storage.',
        howToUse: {
            summary: 'Store cold data.',
            implementation: ['Upload.', 'Tag.', 'Retrieve.'],
            bestPractices: ['Cost management.', 'Security.', 'Retention policies.']
        },
        connections: []
    },
    'snapshot': {
        name: 'Snapshot',
        category: 'Storage',
        description: 'Point-in-time copy of your data.',
        howToUse: {
            summary: 'Backup storage state.',
            implementation: ['Create snapshot.', 'Manage lifecycle.', 'Restore to new volume.'],
            bestPractices: ['Incremental backups.', 'Consistency checks.', 'Cross-account sharing.']
        },
        connections: [{ target: 'volume', purpose: 'Source', protocol: 'Internal', dataFlow: 'Inbound' }]
    },
    'volume': {
        name: 'Storage Volume',
        category: 'Storage',
        description: 'Generic storage volume.',
        howToUse: {
            summary: 'Data storage unit.',
            implementation: ['Create.', 'Format.', 'Mount.'],
            bestPractices: ['Performance monitoring.', 'Right-sizing.', 'Encryption.']
        },
        connections: []
    },
    'bucket-policy': {
        name: 'Bucket Policy',
        category: 'Storage',
        description: 'Access policy for object storage buckets.',
        howToUse: {
            summary: 'Secure bucket access.',
            implementation: ['Define JSON policy.', 'Attach to bucket.', 'Test access.'],
            bestPractices: ['Deny public access.', 'Principal-based restrictions.', 'Encryption requirements.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Controls access', protocol: 'Internal', dataFlow: 'Internal' }]
    },

    'vpc': {
        name: 'VPC',
        category: 'Networking',
        description: 'Logically isolated section of the cloud where you can launch resources in a virtual network that you define.',
        howToUse: {
            summary: 'Virtual Private Cloud.',
            implementation: ['Define CIDR block.', 'Create subnets.', 'Configure route tables.'],
            bestPractices: ['Use private subnets for DBs.', 'Enable VPC Flow Logs.', 'Implement Network ACLs.']
        },
        connections: [{ target: 'subnet', purpose: 'Containers subnets', protocol: 'Internal', dataFlow: 'Internal' }]
    },
    'subnet': {
        name: 'Subnet',
        category: 'Networking',
        description: 'A range of IP addresses in your VPC.',
        howToUse: {
            summary: 'Network segmentation.',
            implementation: ['Choose AZ.', 'Define CIDR.', 'Associate with RT.'],
            bestPractices: ['Public vs Private.', 'AZ redundancy.', 'Sizing for growth.']
        },
        connections: [{ target: 'vpc', purpose: 'Part of', protocol: 'Internal', dataFlow: 'Internal' }]
    },
    'internet-gateway': {
        name: 'Internet Gateway',
        category: 'Networking',
        description: 'Horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet.',
        howToUse: {
            summary: 'Public internet access.',
            implementation: ['Create IGW.', 'Attach to VPC.', 'Add route 0.0.0.0/0.'],
            bestPractices: ['One per VPC.', 'Only for public subnets.', 'Monitor traffic.']
        },
        connections: [{ target: 'vpc', purpose: 'Connectivity', protocol: 'Internal', dataFlow: 'Bidirectional' }]
    },
    'vpn-gateway': {
        name: 'VPN Gateway',
        category: 'Networking',
        description: 'The VPC-side of a VPN connection.',
        howToUse: {
            summary: 'Site-to-site VPN.',
            implementation: ['Create VGW.', 'Attach to VPC.', 'Create VPN connection.'],
            bestPractices: ['Redundant tunnels.', 'Static vs Dynamic (BGP).', 'Verify MTU.']
        },
        connections: []
    },
    'customer-gateway': {
        name: 'Customer Gateway',
        category: 'Networking',
        description: 'Physical device or software application on your side of the VPN connection.',
        howToUse: {
            summary: 'On-prem VPN endpoint.',
            implementation: ['Provide public IP.', 'Configure device.', 'Test tunnel.'],
            bestPractices: ['Check compatibility.', 'Firewall rules.', 'IKE version.']
        },
        connections: []
    },
    'transit-gateway': {
        name: 'Transit Gateway',
        category: 'Networking',
        description: 'Network transit hub that you can use to connect your virtual private clouds (VPCs) and your on-premises networks.',
        howToUse: {
            summary: 'Scale networks.',
            implementation: ['Create TGW.', 'Attach VPCs.', 'Update route tables.'],
            bestPractices: ['Centralized egress.', 'Shared services VPC.', 'Routing policies.']
        },
        connections: [{ target: 'vpc', purpose: 'Interconnect', protocol: 'Internal', dataFlow: 'Bidirectional' }]
    },
    'route-table': {
        name: 'Route Table',
        category: 'Networking',
        description: 'Set of rules, called routes, that are used to determine where network traffic from your subnet or gateway is directed.',
        howToUse: {
            summary: 'Network routing.',
            implementation: ['Create RT.', 'Add routes.', 'Associate with subnet.'],
            bestPractices: ['Specific routes.', 'Propagation.', 'Audit regularly.']
        },
        connections: [{ target: 'subnet', purpose: 'Directs traffic', protocol: 'Internal', dataFlow: 'Internal' }]
    },
    'network-acl': {
        name: 'NACL',
        category: 'Networking',
        description: 'Optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets.',
        howToUse: {
            summary: 'Subnet firewall.',
            implementation: ['Create NACL.', 'Add Inbound/Outbound rules.', 'Associate with subnet.'],
            bestPractices: ['Stateless rules.', 'Rule numbering gap.', 'Ephemeral port ranges.']
        },
        connections: [{ target: 'subnet', purpose: 'Inbound/Outbound filtering', protocol: 'Stateless', dataFlow: 'Bidirectional' }]
    },
    'elastic-ip': {
        name: 'Elastic IP',
        category: 'Networking',
        description: 'Static IPv4 address designed for dynamic cloud computing.',
        howToUse: {
            summary: 'Static IP.',
            implementation: ['Allocate EIP.', 'Associate with instance/network interface.'],
            bestPractices: ['Release when not used (cost).', 'Use for NAT Gateway.', 'DNS mapping.']
        },
        connections: [{ target: 'ec2-instance', purpose: 'Static address', protocol: 'IP', dataFlow: 'Bidirectional' }]
    },
    'vpc-peering': {
        name: 'VPC Peering',
        category: 'Networking',
        description: 'Networking connection between two VPCs that enables you to route traffic between them using private IPv4 addresses or IPv6 addresses.',
        howToUse: {
            summary: 'Connect two VPCs.',
            implementation: ['Request peering.', 'Accept peering.', 'Update route tables.'],
            bestPractices: ['No overlapping CIDRs.', 'Security groups integration.', 'Cross-region supported.']
        },
        connections: [{ target: 'vpc', purpose: 'Inter-VPC comms', protocol: 'Internal', dataFlow: 'Bidirectional' }]
    },
    'direct-connect': {
        name: 'Direct Connect',
        category: 'Networking',
        description: 'Dedicated network connection from your premises to AWS.',
        howToUse: {
            summary: 'Private high-speed link.',
            implementation: ['Request connection.', 'Cross-connect.', 'Create VIF.'],
            bestPractices: ['Redundancy (Link Aggregation).', 'Direct Connect Gateway.', 'Cost analysis.']
        },
        connections: []
    },
    'private-link': {
        name: 'PrivateLink',
        category: 'Networking',
        description: 'Privately connect your VPC to supported services, other AWS accounts, or SaaS applications within the AWS network.',
        howToUse: {
            summary: 'Secure service access.',
            implementation: ['Create Interface Endpoint.', 'Select service.', 'Update security groups.'],
            bestPractices: ['Avoid internet-facing endpoints.', 'TCP traffic only.', 'Cross-AZ availability.']
        },
        connections: [{ target: 'vpc', purpose: 'Expose service', protocol: 'HTTPS', dataFlow: 'Inbound' }]
    },

    'dns': {
        name: 'DNS Service',
        category: 'Networking',
        description: 'A scalable and highly available Domain Name System (DNS) web service. It translates names like www.example.com into the numeric IP addresses like 192.0.2.1 that computers use to connect to each other.',
        howToUse: {
            summary: 'Manage domain names and route user traffic.',
            implementation: [
                'Create Hosted Zones for your domains.',
                'Add Record Sets (A, CNAME, MX) to define routing.',
                'Configure Alias records for internal cloud resources (ALB, S3).'
            ],
            bestPractices: [
                'Use Latency-Based Routing for global applications.',
                'Implement DNS Failover with Health Checks.',
                'Set appropriate TTLs (Time To Live) to balance caching vs flexibility.',
                'Enable DNSSEC for domain security.'
            ]
        },
        connections: [
            { target: 'load-balancer', purpose: 'Routes domain traffic to LB endpoint', protocol: 'DNS', dataFlow: 'Outbound' },
            { target: 'cdn', purpose: 'Maps custom domain to CDN distribution', protocol: 'DNS', dataFlow: 'Outbound' },
            { target: 'public-users', purpose: 'Resolves IP addresses for clients', protocol: 'UDP 53', dataFlow: 'Bidirectional' }
        ]
    },

    'vpn': {
        name: 'Virtual Private Network',
        category: 'Networking',
        description: 'VPN solutions establish a secure and private tunnel from your device or network to your cloud VPC. This allows secure access to internal resources without exposing them to the public internet.',
        howToUse: {
            summary: 'Securely connect on-premises or remote clients to the cloud.',
            implementation: [
                'Set up a Site-to-Site VPN for connecting corporate offices.',
                'Deploy Client VPN endpoints for remote individual users.',
                'Configure Route Tables to direct VPN traffic to correct subnets.'
            ],
            bestPractices: [
                'Use strong logic and certificate-based authentication.',
                'Monitor VPN connection status and bandwidth usage.',
                'Use redundant tunnels for high-availability site connections.',
                'Restrict VPN access to specific CIDR blocks.'
            ]
        },
        connections: [
            { target: 'firewall', purpose: 'Traffic inspection for VPN tunnel', protocol: 'IPsec', dataFlow: 'Bidirectional' },
            { target: 'vm', purpose: 'Allows RDP/SSH access to private instances', protocol: 'TCP', dataFlow: 'Outbound' },
            { target: 'identity-mgmt', purpose: 'Authenticates VPN users', protocol: 'RADIUS/SAML', dataFlow: 'Inbound' }
        ]
    },

    'nat-gateway': {
        name: 'NAT Gateway',
        category: 'Networking',
        description: 'A Network Address Translation (NAT) Gateway allows instances in a private subnet to connect to the internet or other AWS services, but prevents the internet from initiating a connection with those instances.',
        howToUse: {
            summary: 'Enable outbound internet access for private subnets.',
            implementation: [
                'Deploy NAT Gateway in a Public Subnet.',
                'Allocate an Elastic IP (EIP) to the gateway.',
                'Update Private Subnet Route Tables to point 0.0.0.0/0 to NAT Gateway.'
            ],
            bestPractices: [
                'Use one NAT Gateway per Availability Zone for high availability.',
                'Monitor Data Transfer metrics as NAT Gateways carry data costs.',
                'Transition to VPC Endpoints for internal AWS service access to save costs.',
                'Keep NAT Gateway in a secured public subnet.'
            ]
        },
        connections: [
            { target: 'vm', purpose: 'Routes outbound requests (e.g., updates)', protocol: 'TCP/UDP', dataFlow: 'Inbound' },
            { target: 'container', purpose: 'Allows containers to pull external images', protocol: 'HTTPS', dataFlow: 'Inbound' },
            { target: 'firewall', purpose: 'Passes traffic to internet gateway', protocol: 'TCP', dataFlow: 'Outbound' }
        ]
    },

    'public-users': {
        name: 'Global Users / Internet',
        category: 'Networking',
        description: 'Represents the diverse global user base or unauthenticated internet traffic attempting to access your application. This is the source of both legitimate business traffic and potential threats.',
        howToUse: {
            summary: 'The theoretical source of traffic for your architecture.',
            implementation: [
                'Model expected traffic volume and geographic distribution.',
                'Plan for mobile vs desktop usage patterns.',
                'Consider latency impact on user experience.'
            ],
            bestPractices: [
                'Assume zero trust for all incoming traffic.',
                'Optimize content delivery based on user location.',
                'Monitor User Experience metrics (Core Web Vitals).',
                'Design for variable bandwidth conditions.'
            ]
        },
        connections: [
            { target: 'dns', purpose: 'Initiates request by resolving domain name', protocol: 'DNS', dataFlow: 'Outbound' },
            { target: 'cdn', purpose: 'Requests static content from nearest edge', protocol: 'HTTPS', dataFlow: 'Outbound' },
            { target: 'waf', purpose: 'Routes dynamic requests through security layer', protocol: 'HTTPS', dataFlow: 'Outbound' }
        ]
    },

    'web-server': {
        name: 'Web Server',
        category: 'Networking',
        description: 'A purpose-built server or fleet of servers dedicated to handling HTTP requests and serving static/dynamic web content. Typically runs Nginx, Apache, or IIS.',
        howToUse: {
            summary: 'Serve frontend application code or websites.',
            implementation: [
                'Install web server software (e.g., Nginx) on Compute Instances.',
                'Configure virtual hosts and SSL certificates.',
                'Set up reverse proxy rules to backend application servers.'
            ],
            bestPractices: [
                'Disable server signature headers to hide version info.',
                'Keep server software patched and up to date.',
                'Offload SSL termination to Load Balancer where possible.',
                'Use immutable infrastructure patterns for deployments.'
            ]
        },
        connections: [
            { target: 'app-server', purpose: 'Proxies API requests to application logic', protocol: 'HTTP/FastCGI', dataFlow: 'Outbound' },
            { target: 'load-balancer', purpose: 'Receives distributed traffic', protocol: 'HTTP', dataFlow: 'Inbound' },
            { target: 'cache', purpose: 'Caches HTML fragments or API responses', protocol: 'TCP', dataFlow: 'Bidirectional' }
        ]
    },


    // ==================== COMPUTE COMPONENTS (8) ====================

    'vm': {
        name: 'Virtual Machine Instance',
        category: 'Compute',
        description: 'A virtual server in the cloud (e.g., EC2, Azure VM). Provides scalable computing capacity. You have complete control over your virtual computing environment, including the operating system and software stack.',
        howToUse: {
            summary: 'General purpose computing for running applications.',
            implementation: [
                'Select instance type (CPU, Memory, Storage optimized) based on workload.',
                'Launch in a VPC subnet with Security Groups.',
                'Bootstrap configuration using User Data scripts.'
            ],
            bestPractices: [
                'Use Auto Scaling Groups to handle variable load and replace unhealthy instances.',
                'Leverage Reserved or Spot instances for cost optimization.',
                'Apply OS patches regularly or use managed images.',
                'Never use default SSH ports or open access to 0.0.0.0/0.'
            ]
        },
        connections: [
            { target: 'load-balancer', purpose: 'Registers as a target for traffic', protocol: 'HTTP/TCP', dataFlow: 'Inbound' },
            { target: 'block-storage', purpose: 'Boot volume and data persistence', protocol: 'iSCSI/NVMe', dataFlow: 'Bidirectional' },
            { target: 'database', purpose: 'Connects to persistence layer', protocol: 'TCP', dataFlow: 'Outbound' }
        ]
    },

    'container': {
        name: 'Container Instance',
        category: 'Compute',
        description: 'A standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. Typically managed via Docker or Container Runtimes.',
        howToUse: {
            summary: 'Run microservices in isolated, portable environments.',
            implementation: [
                'Build container images using Dockerfiles.',
                'Push images to a Container Registry.',
                'Deploy tasks/pods via an Orchestrator (ECS/Kubernetes).'
            ],
            bestPractices: [
                'Keep images lightweight (use Alpine or Distroless).',
                'Run one process per container.',
                'Don\'t store state inside containers; use external storage.',
                'Scan images for vulnerabilities in CI/CD.'
            ]
        },
        connections: [
            { target: 'container-registry', purpose: 'Pulls container images on startup', protocol: 'HTTPS', dataFlow: 'Inbound' },
            { target: 'database', purpose: 'Persists application data', protocol: 'TCP', dataFlow: 'Outbound' },
            { target: 'logging', purpose: 'Streams stdout/stderr logs', protocol: 'Fluentd', dataFlow: 'Outbound' }
        ]
    },

    'serverless': {
        name: 'Serverless Function',
        category: 'Compute',
        description: 'Event-driven, serverless compute service (e.g., Lambda, Azure Functions) that lets you run code without provisioning or managing servers. You pay only for the compute time you consume.',
        howToUse: {
            summary: 'Execute logic in response to events or API calls.',
            implementation: [
                'Upload code (Zip or Container Image).',
                'Configure triggers (API Gateway, S3 Event, DynamoDB Stream).',
                'Set memory and timeout limits.'
            ],
            bestPractices: [
                'Write stateless, idempotent code.',
                'Optimize cold start time (keep package size small).',
                'Use Environment Variables for configuration.',
                'Implement structured logging and comprehensive error handling.'
            ]
        },
        connections: [
            { target: 'api-gateway', purpose: 'Invoked by HTTP requests', protocol: 'Internal Event', dataFlow: 'Inbound' },
            { target: 'database', purpose: 'Reads/Writes data (use connection pooling!)', protocol: 'TCP', dataFlow: 'Outbound' },
            { target: 'message-queue', purpose: 'Processes messages from queue', protocol: 'Sub', dataFlow: 'Inbound' }
        ]
    },

    'kubernetes': {
        name: 'Kubernetes Cluster',
        category: 'Compute',
        description: 'An open-source system for automating deployment, scaling, and management of containerized applications. It groups containers that make up an application into logical units for easy management and discovery.',
        howToUse: {
            summary: 'Orchestrate complex microservices architectures at scale.',
            implementation: [
                'Provision Control Plane (Managed or Self-hosted).',
                'Join Worker Nodes to the cluster.',
                'Deploy applications using Manifests or Helm charts.'
            ],
            bestPractices: [
                'Use Namespaces to isolate environments within the cluster.',
                'Define Resource Requests and Limits for all pods.',
                'Implement Network Policies to restrict pod-to-pod traffic.',
                'Use RBAC to control access to the cluster API.'
            ]
        },
        connections: [
            { target: 'load-balancer', purpose: 'Exposes services to external traffic', protocol: 'HTTP/TCP', dataFlow: 'Bidirectional' },
            { target: 'container-registry', purpose: 'Nodes pull images for Pods', protocol: 'HTTPS', dataFlow: 'Inbound' },
            { target: 'block-storage', purpose: 'Provisions Persistent Volumes', protocol: 'CSI', dataFlow: 'Bidirectional' }
        ]
    },

    'app-server': {
        name: 'Application Server',
        category: 'Compute',
        description: 'A server designed to install, operate, and host applications and associated services for end users, IT services, and organizations. It facilitates the execution of procedures (scripts, routines) to support the construction of applications.',
        howToUse: {
            summary: 'Host business logic and backend application runtime.',
            implementation: [
                'Deploy runtime environment (Node.js, Java, Python, .NET).',
                'Configure middleware and connection pools.',
                'Set up application performance monitoring (APM).'
            ],
            bestPractices: [
                'Decouple from web server tier for security.',
                'Stateless design is preferred for horizontal scaling.',
                'Centralize configuration management.',
                'Implement robust exception handling.'
            ]
        },
        connections: [
            { target: 'web-server', purpose: 'Receives proxied requests', protocol: 'HTTP', dataFlow: 'Inbound' },
            { target: 'database', purpose: 'Performs CRUD operations', protocol: 'SQL/NoSQL', dataFlow: 'Outbound' },
            { target: 'cache', purpose: 'Reads/Writes ephemeral data', protocol: 'TCP', dataFlow: 'Bidirectional' }
        ]
    },

    'batch-processing': {
        name: 'Batch Processing',
        category: 'Compute',
        description: 'Fully managed batch processing service that plans, schedules, and executes your batch computing workloads via specialized queues and compute environments.',
        howToUse: {
            summary: 'Run large-scale background jobs and data processing.',
            implementation: [
                'Create Compute Environments (Provisioned or Fargate).',
                'Define Job Queues with priority.',
                'Submit Job Definitions outlining docker image and commands.'
            ],
            bestPractices: [
                'Use Spot Instances for significant cost savings.',
                'Containerize all jobs for consistency.',
                'Implement retry logic for failed jobs.',
                'Break large tasks into smaller parallel jobs (MapReduce style).'
            ]
        },
        connections: [
            { target: 'object-storage', purpose: 'Reads input data / Writes results', protocol: 'HTTPS', dataFlow: 'Bidirectional' },
            { target: 'container-registry', purpose: 'Pulls job images', protocol: 'HTTPS', dataFlow: 'Inbound' },
            { target: 'notification', purpose: 'Alerts on job failure/success', protocol: 'Event', dataFlow: 'Outbound' }
        ]
    },

    'queue-worker': {
        name: 'Queue Worker',
        category: 'Compute',
        description: 'A background process or service dedicated to polling a message queue and executing tasks. This pattern decouples heavy processing from the user-facing web tier.',
        howToUse: {
            summary: 'Asynchronously process background tasks.',
            implementation: [
                'Implement polling loop or event subscriber.',
                'Process message payload (e.g., resize image, send email).',
                'Acknowledge/Delete message upon successful completion.'
            ],
            bestPractices: [
                'Handle "poison pill" messages carefully (Dead Letter Queues).',
                'Ensure idempotency as messages may be delivered twice.',
                'Scale worker count based on Queue Depth metrics.',
                'Implement graceful shutdown to finish tasks in flight.'
            ]
        },
        connections: [
            { target: 'message-queue', purpose: 'Polls for new messages', protocol: 'AMQP/HTTPS', dataFlow: 'Bidirectional' },
            { target: 'database', purpose: 'Updates status after processing', protocol: 'TCP', dataFlow: 'Outbound' },
            { target: 'logging', purpose: 'Logs processing results', protocol: 'Syslog', dataFlow: 'Outbound' }
        ]
    },

    'ec2-instance': {
        name: 'EC2 Instance',
        category: 'Compute',
        description: 'Scalable virtual servers in the cloud.',
        howToUse: {
            summary: 'Run applications on virtual servers.',
            implementation: ['Launch instance.', 'Configure SG.', 'Deploy code.'],
            bestPractices: ['Use ASGs.', 'Scale based on CPU.', 'Instance profiles for roles.']
        },
        connections: [{ target: 'ebs-volume', purpose: 'Storage', protocol: 'NVMe', dataFlow: 'Bidirectional' }]
    },
    'auto-scaling-group': {
        name: 'Auto Scaling Group',
        category: 'Compute',
        description: 'Contains a collection of EC2 instances that are treated as a logical grouping for the purposes of automatic scaling and management.',
        howToUse: {
            summary: 'Ensure application availability and scaling.',
            implementation: ['Create Launch Template.', 'Define scaling policies.', 'Set min/max/desired capacity.'],
            bestPractices: ['Scale based on target metrics.', 'Use multiple AZs.', 'Graceful termination.']
        },
        connections: [{ target: 'ec2-instance', purpose: 'Manages instances', protocol: 'Internal', dataFlow: 'Outbound' }]
    },
    'elastic-beanstalk': {
        name: 'Elastic Beanstalk',
        category: 'Compute',
        description: 'Easy-to-use service for deploying and scaling web applications and services.',
        howToUse: {
            summary: 'Quickly deploy web apps.',
            implementation: ['Upload code.', 'Beanstalk handles deployment.', 'Monitor via console.'],
            bestPractices: ['Use for standard web tiers.', 'Customize via .ebextensions.', 'Managed updates.']
        },
        connections: [{ target: 'ec2-instance', purpose: 'Provisions', protocol: 'Internal', dataFlow: 'Outbound' }]
    },
    'lambda-layer': {
        name: 'Lambda Layer',
        category: 'Compute',
        description: 'Distribution mechanism for libraries, custom runtimes, and other function dependencies.',
        howToUse: {
            summary: 'Share code across functions.',
            implementation: ['Create layer zip.', 'Publish layer.', 'Attach to Lambda.'],
            bestPractices: ['Keep layers small.', 'Version control.', 'Shared libraries.']
        },
        connections: [{ target: 'serverless', purpose: 'Extends', protocol: 'Internal', dataFlow: 'Inbound' }]
    },
    'fargate': {
        name: 'Fargate',
        category: 'Compute',
        description: 'Serverless compute engine for containers.',
        howToUse: {
            summary: 'Run containers without managing servers.',
            implementation: ['Define task.', 'Select Fargate launch type.', 'Run service.'],
            bestPractices: ['Right-size CPU/RAM.', 'Use for stateless apps.', 'VPC networking.']
        },
        connections: [{ target: 'container-registry', purpose: 'Pulls image', protocol: 'HTTPS', dataFlow: 'Inbound' }]
    },
    'lightsail': {
        name: 'Lightsail',
        category: 'Compute',
        description: 'Easy-to-use cloud platform that offers you everything needed to build an application or website.',
        howToUse: {
            summary: 'Simple VPS for small projects.',
            implementation: ['Choose blueprint (OS/App).', 'Pick plan.', 'Launch.'],
            bestPractices: ['Static IPs.', 'Snapshots for backup.', 'Upgrade to EC2 if needed.']
        },
        connections: []
    },
    'outposts': {
        name: 'Outposts',
        category: 'Compute',
        description: 'Fully managed service that extends cloud infrastructure, services, APIs, and tools to virtually any data center, co-location space, or on-premises facility.',
        howToUse: {
            summary: 'Cloud on-premise.',
            implementation: ['Order Outpost rack.', 'Install on-site.', 'Launch resources locally via cloud console.'],
            bestPractices: ['Low latency requirements.', 'Local data processing.', 'Consistent management.']
        },
        connections: []
    },
    'vmware-cloud': {
        name: 'VMware Cloud',
        category: 'Compute',
        description: 'Run VMware workloads on the cloud.',
        howToUse: {
            summary: 'Hybrid cloud for VMware.',
            implementation: ['Provision SDDC.', 'Migrate VMs.', 'Manage via vCenter.'],
            bestPractices: ['HCX for migration.', 'Direct Connect for speed.', 'Consistent operations.']
        },
        connections: []
    },
    'batch-job': {
        name: 'Batch Job',
        category: 'Compute',
        description: 'Unit of work submitted to the Batch service.',
        howToUse: {
            summary: 'Scale background tasks.',
            implementation: ['Define job.', 'Submit to queue.', 'Execute.'],
            bestPractices: ['Spot instances.', 'Retry logic.', 'Resource limits.']
        },
        connections: []
    },
    'parallel-cluster': {
        name: 'Parallel Cluster',
        category: 'Compute',
        description: 'Deploy and manage High Performance Computing (HPC) clusters.',
        howToUse: {
            summary: 'Run HPC workloads.',
            implementation: ['Define cluster config.', 'pcluster create.', 'Submit jobs via Slurm.'],
            bestPractices: ['EFA for networking.', 'FSx for Lustre storage.', 'Dynamic scaling.']
        },
        connections: []
    },
    'wavelength': {
        name: 'Wavelength',
        category: 'Compute',
        description: 'Delivers ultra-low latency applications for 5G devices.',
        howToUse: {
            summary: 'Edge computing for 5G.',
            implementation: ['Deploy resources in Wavelength Zone.', 'Connect via carrier network.'],
            bestPractices: ['Gaming/AR/VR use cases.', 'Local breakout.', 'Minimize hops.']
        },
        connections: []
    },
    'simspaceweaver': {
        name: 'SimSpace Weaver',
        category: 'Compute',
        description: 'Run large-scale spatial simulations in the cloud.',
        howToUse: {
            summary: 'Massive simulations.',
            implementation: ['Define simulation app.', 'Upload to SimSpace.', 'Start simulation.'],
            bestPractices: ['Distributed state.', 'Real-time visualization.', 'Scalability.']
        },
        connections: []
    },

    'edge-compute': {
        name: 'Edge Computing',
        category: 'Compute',
        description: 'Run code closer to users at global edge locations, minimizing latency. Examples include CloudFront Functions or Lambda@Edge.',
        howToUse: {
            summary: 'Modify requests/responses at the CDN edge.',
            implementation: [
                'Write lightweight functions (JavaScript/Python).',
                'Associate function with CDN distribution behaviors.',
                'Deploy to global edge network.'
            ],
            bestPractices: [
                'Keep execution time extremely short (< 5ms if possible).',
                'Avoid network calls from edge functions for performance.',
                'Use for header manipulation, auth application, or A/B testing.',
                'Test thoroughly as global propagation takes time.'
            ]
        },
        connections: [
            { target: 'cdn', purpose: 'Executes within CDN request flow', protocol: 'Internal', dataFlow: 'Bidirectional' },
            { target: 'public-users', purpose: 'Delivers personalized response instantly', protocol: 'HTTPS', dataFlow: 'Outbound' },
            { target: 'object-storage', purpose: 'Can redirect to different objects', protocol: 'Internal', dataFlow: 'Outbound' }
        ]
    },


    // ==================== STORAGE & DATABASE COMPONENTS (8) ====================


    'object-storage': {
        name: 'Object Storage',
        category: 'Storage',
        description: 'A scalable, high-speed, web-based cloud storage service designed for online backup and archiving of data and applications. It allows you to store and retrieve any amount of data, at any time, from anywhere on the web.',
        howToUse: {
            summary: 'Store unstructured data (images, docs, backups).',
            implementation: [
                'Create Buckets with globally unique names.',
                'Upload objects via API, SDK, or Console.',
                'Set permissions using Bucket Policies and IAM.'
            ],
            bestPractices: [
                'Block public access by default; use Pre-Signed URLs for sharing.',
                'Enable Versioning to protect against accidental deletes.',
                'Use Lifecycle Rules to move old data to Cold Storage.',
                'Enable Server-Side Encryption (SSE).'
            ]
        },
        connections: [
            { target: 'cdn', purpose: 'Origins static content for distribution', protocol: 'HTTPS', dataFlow: 'Outbound' },
            { target: 'app-server', purpose: 'Stores/Retrieves user uploads', protocol: 'HTTPS', dataFlow: 'Bidirectional' },
            { target: 'data-warehouse', purpose: 'Serves as Data Lake storage', protocol: 'Internal', dataFlow: 'Outbound' }
        ]
    },

    'cache': {
        name: 'In-Memory Cache (Redis/Memcached)',
        category: 'Storage',
        description: 'A fully managed in-memory data store service. It retrieves data from high-throughput, low-latency in-memory data stores, improving the performance of web applications by allowing you to retrieve information from fast, managed, in-memory caches.',
        howToUse: {
            summary: 'Sub-millisecond data access for high-speed use cases.',
            implementation: [
                'Provision Redis or Memcached cluster.',
                'Configure subnet groups and security groups.',
                'Select node type based on memory requirements.'
            ],
            bestPractices: [
                'Set appropriate TTL (Time To Live) on keys to avoid stale data.',
                'Use as a "Cache-Aside" or "Write-Through" layer for DB.',
                'Monitor Evictions; scale up if eviction rate is high.',
                'Use Redis Auth/Encryption in transit.'
            ]
        },
        connections: [
            { target: 'app-server', purpose: 'Provides 1ms data retrieval', protocol: 'TCP', dataFlow: 'Bidirectional' },
            { target: 'database', purpose: 'Offloads read traffic from DB', protocol: 'Logic Link', dataFlow: 'Association' },
            { target: 'serverless', purpose: 'stores ephemeral session data', protocol: 'TCP', dataFlow: 'Bidirectional' }
        ]
    },

    'file-storage': {
        name: 'Network File Storage (EFS/NFS)',
        category: 'Storage',
        description: 'Scalable, elastic, cloud-native file system. It grows and shrinks automatically as you add and remove files, suitable for generic file workloads in a Linux environment.',
        howToUse: {
            summary: 'Shared file system for multiple instances.',
            implementation: [
                'Create File System resource.',
                'Create Mount Targets in your VPC subnets.',
                'Mount on EC2/Containers using standard NFS client.'
            ],
            bestPractices: [
                'Use for content management, development shared folders.',
                'Monitor throughput modes (Bursting vs Provisioned).',
                'Use Lifecycle Management to save costs.',
                'Encrypt file system at rest.'
            ]
        },
        connections: [
            { target: 'vm', purpose: 'Mounts shared directory', protocol: 'NFS', dataFlow: 'Bidirectional' },
            { target: 'container', purpose: 'Persists state across pod restarts', protocol: 'NFS/CSI', dataFlow: 'Bidirectional' },
            { target: 'backup', purpose: 'Target for file-level backups', protocol: 'Internal', dataFlow: 'Outbound' }
        ]
    },

    'backup': {
        name: 'Backup Service',
        category: 'Storage',
        description: 'A centralized backup service that makes it easy and cost-effective for you to backup your application data across other cloud services. It helps you meet your data backup compliance requirements.',
        howToUse: {
            summary: 'Automate data protection policy execution.',
            implementation: [
                'Define Backup Plans (Frequency, Retention, Window).',
                'Assign resources (Tags or IDs) to plans.',
                'Monitor backup jobs for success/failure.'
            ],
            bestPractices: [
                'Use Cross-Region backup for disaster recovery.',
                'Enable "Backup Vault Lock" for WORM compliance.',
                'Regularly test Restore procedures.',
                'Encrypt backups with independent keys.'
            ]
        },
        connections: [
            { target: 'database', purpose: 'Creates periodic snapshots', protocol: 'Internal API', dataFlow: 'Inbound' },
            { target: 'file-storage', purpose: 'Backs up file systems', protocol: 'Internal API', dataFlow: 'Inbound' },
            { target: 'block-storage', purpose: 'Snapshots volumes', protocol: 'Internal API', dataFlow: 'Inbound' }
        ]
    },

    'data-warehouse': {
        name: 'Data Warehouse',
        category: 'Storage',
        description: 'A fast, simple, cost-effective data warehousing service. It allows you to analyze all your data across your data warehouse and data lake using standard SQL.',
        howToUse: {
            summary: 'Analytics and Business Intelligence (BI) storage.',
            implementation: [
                'Provision cluster nodes.',
                'Design schema (Star or Snowflake).',
                'Load data via ETL pipelines.'
            ],
            bestPractices: [
                'Use columnar storage for analytical query performance.',
                'Sort and Distribute keys effectively to minimize shuffling.',
                'Use Workload Management (WLM) to prioritize query queues.',
                'Pause clusters when not in use (if supported).'
            ]
        },
        connections: [
            { target: 'object-storage', purpose: 'Ingests raw data via COPY command', protocol: 'HTTPS', dataFlow: 'Inbound' },
            { target: 'monitoring', purpose: 'Source for business metrics', protocol: 'SQL', dataFlow: 'Outbound' },
            { target: 'database', purpose: 'Replicates transactional data for analysis', protocol: 'ETL Pipeline', dataFlow: 'Inbound' }
        ]
    },

    'message-queue': {
        name: 'Message Queue',
        category: 'Storage',
        description: 'A fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. It eliminates the complexity and overhead associated with managing middleware.',
        howToUse: {
            summary: 'Decouple components with asynchronous messaging.',
            implementation: [
                'Create Standard (best effort) or FIFO (strictly ordered) queue.',
                'Configure visibility timeouts and message retention.',
                'Grant producer/consumer permissions.'
            ],
            bestPractices: [
                'Use Dead Letter Queues (DLQ) to capture failed messages.',
                'Set Visibility Timeout > Processing Time.',
                'Use Long Polling to reduce cost and empty responses.',
                'Encrypt messages with KMS.'
            ]
        },
        connections: [
            { target: 'serverless', purpose: 'Triggers function on new message', protocol: 'Event', dataFlow: 'Outbound' },
            { target: 'queue-worker', purpose: 'Pulled by worker for processing', protocol: 'HTTPS', dataFlow: 'Outbound' },
            { target: 'notification', purpose: 'Fans out messages to subscribers', protocol: 'Internal', dataFlow: 'Inbound' }
        ]
    },

    'block-storage': {
        name: 'Block Storage (EBS)',
        category: 'Storage',
        description: 'High-performance block storage service designed for use with Elastic Compute Cloud (EC2) for both throughput and transaction intensive workloads at any scale.',
        howToUse: {
            summary: 'Persistent disk drive for VMs and Databases.',
            implementation: [
                'Create volume (GP3, IO2) in same AZ as instance.',
                'Attach to instance.',
                'Format and mount within OS.'
            ],
            bestPractices: [
                'Use GP3 for general purpose to save costs over GP2.',
                'Snapshot regularly for backups.',
                'Encrypt volumes at creation time.',
                'Resize volumes on-the-fly when capacity is needed.'
            ]
        },
        connections: [
            { target: 'vm', purpose: 'Attached as local disk', protocol: 'iSCSI/NVMe', dataFlow: 'Bidirectional' },
            { target: 'backup', purpose: 'Source of snapshots', protocol: 'Internal API', dataFlow: 'Outbound' },
            { target: 'encryption', purpose: 'Utilizes keys for volume encryption', protocol: 'KMS', dataFlow: 'Internal' }
        ]
    },


    // ==================== DEVOPS COMPONENTS (8) ====================

    'ci-cd': {
        name: 'CI/CD Pipeline',
        category: 'DevOps',
        description: 'Continuous Integration and Continuous Delivery service for fast and reliable application and infrastructure updates. It builds, tests, and deploys your code every time there is a code change, based on the release process models you define.',
        howToUse: {
            summary: 'Automate software release processes.',
            implementation: [
                'Connect source repository (GitHub, CodeCommit).',
                'Define Build spec (commands to compile/test).',
                'Configure Deploy stage (ECS, S3, Lambda).'
            ],
            bestPractices: [
                'Fail fast: Run unit tests early in the pipeline.',
                'Use manual approval gates for production deployments.',
                'Store build artifacts in an artifact repository.',
                'Keep build environments ephemeral and clean.'
            ]
        },
        connections: [
            { target: 'container-registry', purpose: 'Pushes built images', protocol: 'HTTPS', dataFlow: 'Outbound' },
            { target: 'container', purpose: 'Triggers rolling update', protocol: 'API', dataFlow: 'Outbound' },
            { target: 'serverless', purpose: 'Deploys function code', protocol: 'API', dataFlow: 'Outbound' }
        ]
    },

    'monitoring': {
        name: 'Monitoring & Observability',
        category: 'DevOps',
        description: 'A monitoring and observability service built for DevOps engineers, developers, site reliability engineers (SREs), and IT managers. It provides data and actionable insights to monitor your applications, respond to system-wide performance changes, and optimize resource utilization.',
        howToUse: {
            summary: 'Visualize and alert on infrastructure health.',
            implementation: [
                'Install agents on VMs/Containers.',
                'Create Dashboards for key KPIs.',
                'Define Alarms for threshold breaches.'
            ],
            bestPractices: [
                'Monitor the "Four Golden Signals": Latency, Traffic, Errors, Saturation.',
                'Use composite alarms to reduce noise.',
                'Tag resources for cost allocation monitoring.',
                'Set up anomaly detection.'
            ]
        },
        connections: [
            { target: 'web-server', purpose: 'Captures access logs', protocol: 'Agent', dataFlow: 'Inbound' },
            { target: 'database', purpose: 'Monitors IOPS/Memory', protocol: 'Internal API', dataFlow: 'Inbound' },
            { target: 'notification', purpose: 'Sends alerts on threshold breach', protocol: 'HTTPS', dataFlow: 'Outbound' }
        ]
    },

    'cloudwatch': {
        name: 'CloudWatch',
        category: 'Management',
        description: 'Monitoring and observability service built for DevOps engineers, developers, site reliability engineers (SREs), and IT managers.',
        howToUse: {
            summary: 'Collect and track metrics.',
            implementation: ['Install custom metrics.', 'Create dashboards.', 'Set alarms.'],
            bestPractices: ['Use cross-account dashboards.', 'High-resolution metrics.', 'Aggregate logs.']
        },
        connections: []
    },
    'config': {
        name: 'Config',
        category: 'Management',
        description: 'Service that enables you to assess, audit, and evaluate the configurations of your cloud resources.',
        howToUse: {
            summary: 'Audit resource configurations.',
            implementation: ['Enable recording.', 'Set config rules.', 'Monitor compliance.'],
            bestPractices: ['Enable across all regions.', 'Use conformance packs.', 'Automate remediation.']
        },
        connections: []
    },
    'cloudtrail': {
        name: 'CloudTrail',
        category: 'Management',
        description: 'Service that enables governance, compliance, operational auditing, and risk auditing of your AWS account.',
        howToUse: {
            summary: 'Track user activity and API usage.',
            implementation: ['Enable trail.', 'Store in S3.', 'Analyze with Athena.'],
            bestPractices: ['Enable in all regions.', 'Log file validation.', 'Alert on critical API calls.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Logs storage', protocol: 'S3 API', dataFlow: 'Outbound' }]
    },
    'systems-manager-ops': {
        name: 'Systems Manager',
        category: 'Management',
        description: 'Operations hub for AWS that helps you automate tasks and manage resources at scale.',
        howToUse: {
            summary: 'Centralized operations.',
            implementation: ['Install SSM Agent.', 'Configure IAM roles.', 'Run commands.'],
            bestPractices: ['Use Patch Manager.', 'Store secrets in Parameter Store.', 'Inventory management.']
        },
        connections: [{ target: 'ec2-instance', purpose: 'Remote management', protocol: 'Agent', dataFlow: 'Bidirectional' }]
    },
    'service-health': {
        name: 'Service Health',
        category: 'Management',
        description: 'Current status of AWS services worldwide.',
        howToUse: {
            summary: 'Monitor cloud health.',
            implementation: ['Check dashboard.', 'Subscribe to notifications.'],
            bestPractices: ['Integrate with internal status pages.', 'Regional awareness.']
        },
        connections: []
    },
    'trusted-advisor-ops': {
        name: 'Trusted Advisor',
        category: 'Management',
        description: 'Online tool that provides real-time guidance to help you provision your resources following AWS best practices.',
        howToUse: {
            summary: 'Optimization recommendations.',
            implementation: ['Review dashboard.', 'Implement suggestions.', 'Reduce costs.'],
            bestPractices: ['Check weekly.', 'Cost optimization.', 'Security audits.']
        },
        connections: []
    },
    'personal-health': {
        name: 'Health Dashboard',
        category: 'Management',
        description: 'Personalized view of the health of the AWS services that power your applications.',
        howToUse: {
            summary: 'Resource-specific health alerts.',
            implementation: ['Review alerts.', 'Plan for maintenance.', 'Automate responses via EventBridge.'],
            bestPractices: ['Dedicated notification channel.', 'Proactive planning.']
        },
        connections: []
    },
    'license-manager-ops': {
        name: 'License Manager',
        category: 'Management',
        description: 'Easier to manage licenses from software vendors such as Microsoft, SAP, Oracle, and IBM across AWS and on-premises.',
        howToUse: {
            summary: 'Track software licenses.',
            implementation: ['Define license rules.', 'Attach to instances.', 'Track usage.'],
            bestPractices: ['Prevent overages.', 'Audit compliance.', 'Automate enforcement.']
        },
        connections: []
    },
    'well-architected-ops': {
        name: 'Well-Architected Tool',
        category: 'Management',
        description: 'Review your workloads against architectural best practices.',
        howToUse: {
            summary: 'Architectural reviews.',
            implementation: ['Define workload.', 'Perform review.', 'Create improvement plan.'],
            bestPractices: ['Regular reviews.', 'Alignment with 6 pillars.', 'Document decisions.']
        },
        connections: []
    },
    'distro-opentelemetry': {
        name: 'OpenTelemetry',
        category: 'Management',
        description: 'AWS distribution of OpenTelemetry for collecting metrics and traces.',
        howToUse: {
            summary: 'Standardized observability.',
            implementation: ['Install collector.', 'Instrument app.', 'Export to CloudWatch/X-Ray.'],
            bestPractices: ['Vendor-neutral.', 'Unified telemetry.', 'High scale.']
        },
        connections: []
    },
    'managed-grafana': {
        name: 'Managed Grafana',
        category: 'Management',
        description: 'Managed service for Grafana, a popular open-source dashboarding tool.',
        howToUse: {
            summary: 'Visualize metrics.',
            implementation: ['Provision workspace.', 'Connect data sources.', 'Build dashboards.'],
            bestPractices: ['Use SSO.', 'Aggregated dashboards.', 'Alerting.']
        },
        connections: []
    },
    'managed-prometheus': {
        name: 'Managed Prometheus',
        category: 'Management',
        description: 'Managed Prometheus-compatible monitoring service.',
        howToUse: {
            summary: 'Scale Prometheus metrics.',
            implementation: ['Provision workspace.', 'Configure scrapers.', 'Query via PromQL.'],
            bestPractices: ['Container monitoring.', 'Alertmanager integration.', 'Scalable storage.']
        },
        connections: []
    },

    'logging': {
        name: 'Centralized Logging',
        category: 'DevOps',
        description: 'A service to collect, monitor, and analyze log data. It enables you to centralize the logs from all your systems, applications, and AWS services in a single, highly scalable service.',
        howToUse: {
            summary: 'Aggregate and search system logs.',
            implementation: [
                'Configure Log Groups for services.',
                'Set up Log Streams from instances.',
                'Create Metric Filters to turn logs into data.'
            ],
            bestPractices: [
                'Never log sensitive information (PII, Secrets).',
                'Use structured logging (JSON) for easy parsing.',
                'Set retention policies to save storage costs.',
                'Export old logs to S3 (Object Storage) for archiving.'
            ]
        },
        connections: [
            { target: 'object-storage', purpose: 'Archives historical logs', protocol: 'HTTPS', dataFlow: 'Outbound' },
            { target: 'monitoring', purpose: 'Extracts metrics from log patterns', protocol: 'Internal', dataFlow: 'Bidirectional' },
            { target: 'container', purpose: 'Captures application stdout', protocol: 'Docker Driver', dataFlow: 'Inbound' }
        ]
    },

    'notification': {
        name: 'Notification Service (Pub/Sub)',
        category: 'DevOps',
        description: 'A fully managed Pub/Sub messaging service. It allows you to fan out messages to a large number of subscriber endpoints for parallel processing, including mobile devices, email addresses, and other distributed services.',
        howToUse: {
            summary: 'Send alerts and fan-out messages to systems/humans.',
            implementation: [
                'Create a Topic.',
                'Subscribe Endpoints (Email, SMS, Lambda, SQS).',
                'Publish messages to the Topic.'
            ],
            bestPractices: [
                'Use for decoupling "one-to-many" communication.',
                'Secure topics with resource policies.',
                'Use raw message delivery for system-to-system integration.',
                'Filter messages at the subscription level.'
            ]
        },
        connections: [
            { target: 'monitoring', purpose: 'Receives alarm state changes', protocol: 'Internal', dataFlow: 'Inbound' },
            { target: 'message-queue', purpose: 'Subscribes to topic for processing', protocol: 'Internal', dataFlow: 'Outbound' },
            { target: 'serverless', purpose: 'Invoked on notification', protocol: 'Event', dataFlow: 'Outbound' }
        ]
    },

    'container-registry': {
        name: 'Container Registry',
        category: 'DevOps',
        description: 'A fully managed container registry that makes it easy to store, manage, share, and deploy your container images and artifacts anywhere.',
        howToUse: {
            summary: 'Store Docker/OCI images securely.',
            implementation: [
                'Authenticate Docker client with registry.',
                'Tag images accurately.',
                'Push images to repositories.'
            ],
            bestPractices: [
                'Use immutable image tags (SHA or unique version) in prod.',
                'Enable Image Scanning for vulnerabilities.'
            ]
        },
        connections: [
            { target: 'ci-cd', purpose: 'Source of build artifacts', protocol: 'HTTPS', dataFlow: 'Inbound' },
            { target: 'container', purpose: 'Source of deployment images', protocol: 'HTTPS', dataFlow: 'Outbound' },
            { target: 'kubernetes', purpose: 'Source of pod images', protocol: 'HTTPS', dataFlow: 'Outbound' }
        ]
    },

    'media-transcoder': {
        name: 'Media Transcoder',
        category: 'Media Services',
        description: 'Cloud-based media transcoding service that converts media files from their source format into versions that will play on devices like smartphones, tablets, and PCs.',
        howToUse: {
            summary: 'Convert video/audio formats.',
            implementation: [
                'Create a transcoding job.',
                'Specify input/output buckets and formats.',
                'Monitor job status.'
            ],
            bestPractices: [
                'Use Lifecycle Policies to expire old untagged images.',
                'Replicate images across regions for faster deployment.'
            ]
        },
        connections: [
            { target: 'object-storage', purpose: 'Source for media ingestion', protocol: 'HTTPS', dataFlow: 'Inbound' },
            { target: 'cdn', purpose: 'Distributes transcoded content', protocol: 'RTMP/HLS', dataFlow: 'Outbound' },
            { target: 'logging', purpose: 'Logs encoding metrics', protocol: 'CloudWatch', dataFlow: 'Outbound' }
        ]
    },



    'secrets-manager': {
        name: 'Secrets Manager',
        category: 'DevOps',
        description: 'Service to protect secrets needed to access your applications, services, and IT resources. Prevents hardcoding credentials in code.',
        howToUse: {
            summary: 'Manage credentials securely.',
            implementation: [
                'Store key-value pairs (DB Password, API Token).',
                'Configure automatic rotation logic.',
                'Access via SDK in application.'
            ],
            bestPractices: [
                'Rotate credentials regularly (e.g., every 30 days).',
                'Restrict access using specific IAM policies.',
                'Audit usage logs.',
                'Use local caching clients to reduce API costs.'
            ]
        },
        connections: [
            { target: 'database', purpose: 'Manages DB user credentials', protocol: 'Internal', dataFlow: 'Bidirectional' },
            { target: 'app-server', purpose: 'Fetches config secrets at runtime', protocol: 'HTTPS', dataFlow: 'Outbound' },
            { target: 'ci-cd', purpose: 'Injects secrets during build', protocol: 'HTTPS', dataFlow: 'Outbound' }
        ]
    },

    'config-service': {
        name: 'Configuration Manager',
        category: 'DevOps',
        description: 'A managed service that enables you to assess, audit, and evaluate the configurations of your resources. It continuously monitors and records your resource configurations.',
        howToUse: {
            summary: 'Track resource changes and inventory.',
            implementation: [
                'Enable recording for all resource types.',
                'Create Conformance Packs for governance.',
                'Review Configuration Timeline for changes.'
            ],
            bestPractices: [
                'Use for forensic analysis after incidents.',
                'Detect "Drift" from expected infrastructure state.',
                'Aggregate data centrally for multi-account organizations.',
                'Automate remediation of non-compliant configs.'
            ]
        },
        connections: [
            { target: 'compliance', purpose: 'Feeds configuration data', protocol: 'Internal', dataFlow: 'Outbound' },
            { target: 'notification', purpose: 'Alerts on config change', protocol: 'SNS', dataFlow: 'Outbound' },
            { target: 'object-storage', purpose: 'Stores configuration snapshots', protocol: 'HTTPS', dataFlow: 'Outbound' }
        ]
    },

    'admin-service': {
        name: 'Admin Console / Bastion',
        category: 'DevOps',
        description: 'Represents administrative access points, such as jump boxes (Bastions) or management portals used by DevOps and IT staff to manage the infrastructure.',
        howToUse: {
            summary: 'Secure entry point for manual administration.',
            implementation: [
                'Launch minimal OS instance in Public Subnet.',
                'Restrict Security Group to known corporate IPs only.',
                'Use SSH Agent Forwarding or Session Manager.'
            ],
            bestPractices: [
                'Turn off when not in use.',
                'Monitor all session activity heavily.',
                'Prefer Systems Manager (Session Manager) over SSH/RDP.',
                'Enforce MFA for all accesses.'
            ]
        },
        connections: [
            { target: 'vm', purpose: 'Tunnel to private instances', protocol: 'SSH/RDP', dataFlow: 'Bidirectional' },
            { target: 'database', purpose: 'Direct DB administration', protocol: 'SQL', dataFlow: 'Bidirectional' },
            { target: 'identity-mgmt', purpose: 'Authenticates admin users', protocol: 'LDAP', dataFlow: 'Inbound' }
        ]
    },

    // ==================================================================================
    // WEB APPLICATION COMPONENTS (16)
    // ==================================================================================

    'browser': {
        name: 'Web Browser',
        category: 'Web Application',
        description: 'Represents the client-side environment (Chrome, Firefox, Safari, Edge) where web applications run and users interact with the interface.',
        howToUse: {
            summary: 'The end-user interface running on a desktop or laptop.',
            implementation: [
                'Ensure cross-browser compatibility.',
                'Implement responsive design for various screen sizes.',
                'Use HTTPS for all communications.'
            ],
            bestPractices: [
                'Minimize JavaScript bundle size for faster load times.',
                'Implement Content Security Policy (CSP).',
                'Use HttpOnly and Secure cookies.'
            ]
        },
        connections: [
            { target: 'cdn', purpose: 'Load static assets', protocol: 'HTTPS', dataFlow: 'Inbound' },
            { target: 'load-balancer', purpose: 'API requests', protocol: 'HTTPS', dataFlow: 'Outbound' },
            { target: 'waf', purpose: 'Protected web traffic', protocol: 'HTTPS', dataFlow: 'Outbound' }
        ]
    },
    'mobile-client': {
        name: 'Mobile Client',
        category: 'Mobile',
        description: 'A native mobile application (iOS/Android) or mobile web interface accessed via smartphones/tablets.',
        howToUse: {
            summary: 'Client app running on mobile devices.',
            implementation: [
                'Design for touch interfaces.',
                'Handle offline capabilities where possible.',
                'Optimize for battery and data usage.'
            ],
            bestPractices: [
                'Use biometric authentication when available.',
                'Implement certificate pinning for API security.',
                'Secure local storage of sensitive data.'
            ]
        },
        connections: [
            { target: 'api-gateway', purpose: 'API access', protocol: 'HTTPS/REST', dataFlow: 'Bidirectional' },
            { target: 'auth-service', purpose: 'User authentication', protocol: 'OIDC/OAuth', dataFlow: 'Bidirectional' }
        ]
    },
    'spa': {
        name: 'Single Page Application (SPA)',
        category: 'Web Application',
        description: 'A web application that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of loading entire new pages.',
        howToUse: {
            summary: 'Rich, interactive client-side application (React, Vue, Angular).',
            implementation: [
                'Deploy static assets to CDN/S3.',
                'Use client-side routing.',
                'Fetch data via APIs.'
            ],
            bestPractices: [
                'Implement code splitting.',
                'Use lazy loading for routes and components.',
                'Handle loading and error states gracefully.'
            ]
        },
        connections: [
            { target: 'cdn', purpose: 'Load app bundles', protocol: 'HTTPS', dataFlow: 'Inbound' },
            { target: 'api-gateway', purpose: 'Data fetch', protocol: 'REST/GraphQL', dataFlow: 'Outbound' }
        ]
    },
    'ssr-app': {
        name: 'SSR Application',
        category: 'Web Application',
        description: 'Server-Side Rendered application (Next.js, Nuxt, Remix) that generates HTML on the server for each request, improving SEO and initial load performance.',
        howToUse: {
            summary: 'Hybrid app rendering HTML on server, hydrating on client.',
            implementation: [
                'Deploy to Node.js server or Serverless/Edge functions.',
                'Handle data fetching on both server and client.',
                'Cache rendered pages where possible.'
            ],
            bestPractices: [
                'Optimize server response time (TTFB).',
                'Use ISR (Incremental Static Regeneration) for static content.',
                'Monitor server resource usage.'
            ]
        },
        connections: [
            { target: 'database', purpose: 'Fetch data for rendering', protocol: 'SQL/NoSQL', dataFlow: 'Outbound' },
            { target: 'cache', purpose: 'Cache HTML/API responses', protocol: 'Redis/Memcached', dataFlow: 'Bidirectional' },
            { target: 'cdn', purpose: 'Serve static assets', protocol: 'HTTPS', dataFlow: 'Inbound' }
        ]
    },
    'pwa': {
        name: 'Progressive Web App (PWA)',
        category: 'Web Application',
        description: 'A web application that uses modern web capabilities to deliver an app-like experience to users, including offline support, push notifications, and device hardware access.',
        howToUse: {
            summary: 'Web app with native-like capabilities.',
            implementation: [
                'Register a Service Worker.',
                'Create a Web App Manifest.',
                'Implement offline caching strategies.'
            ],
            bestPractices: [
                'Follow the "offline-first" architecture.',
                'Provide an "Add to Home Screen" prompt.',
                'Audit with Lighthouse.'
            ]
        },
        connections: [
            { target: 'object-storage', purpose: 'Stores original and transcoded media files', protocol: 'HTTPS', dataFlow: 'Bidirectional' },
            { target: 'cdn', purpose: 'Pulls content from MediaStore for delivery', protocol: 'HTTPS', dataFlow: 'Inbound' }
        ]
    },



    'ivs': {
        name: 'IVS',
        category: 'Media Services',
        description: 'Managed live streaming solution that is quick and easy to set up, and ideal for creating interactive video experiences.',
        howToUse: {
            summary: 'Interactive live video.',
            implementation: ['Create channel.', 'Configure stream key.', 'Embed player.'],
            bestPractices: ['Low-latency mode.', 'Chat integration.', 'Recording to S3.']
        },
        connections: []
    },
    'elemental-server': {
        name: 'Elemental Server',
        category: 'Media Services',
        description: 'On-premises video processing solutions.',
        howToUse: { summary: 'On-prem media encoding.', implementation: ['Setup server.', 'Manage via cloud.'], bestPractices: ['Hybrid workflows.'] },
        connections: []
    },
    'elastic-transcode': {
        name: 'Elastic Transcoder',
        category: 'Media Services',
        description: 'Media transcoding in the cloud.',
        howToUse: { summary: 'Simple transcoding.', implementation: ['Create job.', 'Monitor result.'], bestPractices: ['Legacy support.'] },
        connections: []
    },
    'kinesis-video-streams': {
        name: 'Kinesis Video',
        category: 'Media Services',
        description: 'Stream video from connected devices for analytics and playback.',
        howToUse: { summary: 'Real-time video ingestion.', implementation: ['Install SDK.', 'Stream data.', 'Analyze.'], bestPractices: ['Low latency.', 'Secure streaming.'] },
        connections: []
    },
    'thinkbox-deadline': {
        name: 'Thinkbox Deadline',
        category: 'Media Services',
        description: 'Hassle-free management and administration for render farms.',
        howToUse: { summary: 'Manage render farms.', implementation: ['Install deadline.', 'Manage nodes.'], bestPractices: ['Scale-out rendering.'] },
        connections: []
    },
    'media-services': {
        name: 'Media Services',
        category: 'Media Services',
        description: 'Generic media services.',
        howToUse: { summary: 'General media processing.', implementation: ['Integrate service.'], bestPractices: ['Optimization.'] },
        connections: []
    },
    'content-production': {
        name: 'Content Production',
        category: 'Media Services',
        description: 'Resources for media content production.',
        howToUse: { summary: 'Media creation workflows.', implementation: ['Collaborative tools.'], bestPractices: ['Secure storage.'] },
        connections: []
    },
    'streaming-distribution': {
        name: 'Streaming Distribution',
        category: 'Media Services',
        description: 'Services for global streaming distribution.',
        howToUse: { summary: 'Deliver stream globally.', implementation: ['CDN integration.'], bestPractices: ['Multi-bitrate.'] },
        connections: []
    },
    'archive-media': {
        name: 'Media Archive',
        category: 'Media Services',
        description: 'Long-term storage for media assets.',
        howToUse: { summary: 'Cold storage for video.', implementation: ['Glacier integration.'], bestPractices: ['Index archives.'] },
        connections: []
    },
    'media-ingest': {
        name: 'Media Ingest',
        category: 'Media Services',
        description: 'Ingestion services for media content.',
        howToUse: { summary: 'Capture media data.', implementation: ['Direct upload.', 'Edge ingest.'], bestPractices: ['Pre-processing.'] },
        connections: []
    },
    'digital-rights': {
        name: 'Digital Rights (DRM)',
        category: 'Media Services',
        description: 'Digital Rights Management (DRM) services.',
        howToUse: { summary: 'Protect content.', implementation: ['Key management.', 'Access control.'], bestPractices: ['License security.'] },
        connections: []
    },
    'subtitle-gen': {
        name: 'Subtitle Generator',
        category: 'Media Services',
        description: 'Automated subtitle and caption generation.',
        howToUse: { summary: 'Generate captions.', implementation: ['Transcribe integration.'], bestPractices: ['Multiple languages.'] },
        connections: []
    },
    'thumbnail-gen': {
        name: 'Thumbnail Generator',
        category: 'Media Services',
        description: 'Automated thumbnail and image sprite generation from video.',
        howToUse: { summary: 'Create video previews.', implementation: ['Lambda trigger.', 'FFmpeg.'], bestPractices: ['Dynamic sizing.'] },
        connections: []
    },
    'static-site': {
        name: 'Static Website',
        category: 'Web Application',
        description: 'A website consisting of pre-built HTML, CSS, and JavaScript files served directly to the client without server-side processing.',
        howToUse: {
            summary: 'Marketing sites, documentation, blogs (Gatsby, Astro, Hugo).',
            implementation: [
                'Build site at compile time.',
                'Deploy to object storage or CDN hosting.',
                'Use client-side JS for minor interactivity.'
            ],
            bestPractices: [
                'Optimize images and assets.',
                'Use a CDN for global distribution.',
                'Implement aggressive caching policies.'
            ]
        },
        connections: [
            { target: 'identity-mgmt', purpose: 'Provides user directory service', protocol: 'LDAP/AD', dataFlow: 'Inbound' },
            { target: 'all-services', purpose: 'Enables SSO for cloud resources', protocol: 'SAML 2.0', dataFlow: 'Outbound' }
        ]
    },

    'appstream': {
        name: 'AppStream 2.0',
        category: 'End User Computing',
        description: 'Fully managed non-persistent application and desktop streaming service.',
        howToUse: {
            summary: 'Stream desktop apps to browsers.',
            implementation: ['Create image.', 'Build fleet.', 'Configure stack.'],
            bestPractices: ['Optimize image size.', 'Enable persistence.', 'Auto-scaling for fleets.']
        },
        connections: []
    },
    'workdocs-drive': {
        name: 'WorkDocs Drive',
        category: 'End User Computing',
        description: 'Apps for accessing WorkDocs content directly from your desktop.',
        howToUse: { summary: 'Desktop file sync.', implementation: ['Install app.', 'Sync files.'], bestPractices: ['Secure sharing.'] },
        connections: []
    },
    'nice-dcv': {
        name: 'NICE DCV',
        category: 'End User Computing',
        description: 'High-performance remote display protocol.',
        howToUse: { summary: 'High-end remote desktop.', implementation: ['Install server.', 'Connect client.'], bestPractices: ['GPU acceleration.'] },
        connections: []
    },
    'secure-browser': {
        name: 'Secure Browser',
        category: 'End User Computing',
        description: 'Managed enterprise browser service.',
        howToUse: { summary: 'Controlled web access.', implementation: ['Provision browser.', 'Apply policies.'], bestPractices: ['Data isolation.'] },
        connections: []
    },
    'workspace-web': {
        name: 'WorkSpaces Web',
        category: 'End User Computing',
        description: 'Low-cost, fully managed work browser.',
        howToUse: { summary: 'Browser-based workspace.', implementation: ['Setup portal.', 'Assign users.'], bestPractices: ['Policy enforcement.'] }
        ,
        connections: []
    },
    'workspace-core': {
        name: 'WorkSpaces Core',
        category: 'End User Computing',
        description: 'Cloud-based virtual desktop infrastructure (VDI) APIs.',
        howToUse: { summary: 'VDI infrastructure.', implementation: ['Integrate APIs.', 'Manage desktops.'], bestPractices: ['Scale-out VDI.'] },
        connections: []
    },
    'remote-access': {
        name: 'Remote Access',
        category: 'End User Computing',
        description: 'General remote access services.',
        howToUse: { summary: 'Secure remote connection.', implementation: ['Setup VPN/Gateway.'], bestPractices: ['MFA required.'] },
        connections: []
    },
    'endpoint-mgmt': {
        name: 'Endpoint Management',
        category: 'End User Computing',
        description: 'Manage and secure enterprise endpoints.',
        howToUse: { summary: 'Manage devices.', implementation: ['Enroll devices.', 'Apply policies.'], bestPractices: ['Compliance checks.'] },
        connections: []
    },
    'pc-backup': {
        name: 'PC Backup',
        category: 'End User Computing',
        description: 'Backup and recovery for personal computers.',
        howToUse: { summary: 'Backup user data.', implementation: ['Install client.', 'Schedule backups.'], bestPractices: ['Off-site copies.'] },
        connections: []
    },
    'file-share': {
        name: 'File Share',
        category: 'End User Computing',
        description: 'Shared file resources for end users.',
        howToUse: { summary: 'Collaborative storage.', implementation: ['Setup mount.', 'Shared folders.'], bestPractices: ['Access audits.'] },
        connections: []
    },
    'collaboration': {
        name: 'Collaboration',
        category: 'End User Computing',
        description: 'Tools for team collaboration.',
        howToUse: { summary: 'Team productivity.', implementation: ['Deploy tools.'], bestPractices: ['Real-time editing.'] },
        connections: []
    },
    'vdi-image': {
        name: 'VDI Image',
        category: 'End User Computing',
        description: 'Custom desktop images for VDI deployment.',
        howToUse: { summary: 'Standardized desktops.', implementation: ['Build golden image.'], bestPractices: ['Patching strategy.'] },
        connections: []
    },
    'micro-frontend-host': {
        name: 'Micro-Frontend Host',
        category: 'Web Application',
        description: 'The container application that composes multiple micro-frontends into a single cohesive user experience.',
        howToUse: {
            summary: 'Shell application (Module Federation Host).',
            implementation: [
                'Define shared dependencies.',
                'Configure remote entry points.',
                'Handle routing between micro-frontends.'
            ],
            bestPractices: [
                'Keep the host lightweight.',
                'Isolate styles to prevent bleeding.',
                'Version control shared libraries carefully.'
            ]
        },
        connections: [
            { target: 'micro-frontend-remote', purpose: 'Load remote modules', protocol: 'HTTPS', dataFlow: 'Inbound' }
        ]
    },
    'micro-frontend-remote': {
        name: 'Micro-Frontend Remote',
        category: 'Web Application',
        description: 'An independent feature or section of a web application developed and deployed separately, then consumed by a host application.',
        howToUse: {
            summary: 'Feature module (e.g., Checkout, Profile).',
            implementation: [
                'Expose specific components/modules.',
                'Build and deploy independently.',
                'Ensure runtime compatibility with host.'
            ],
            bestPractices: [
                'Avoid tight coupling with the host.',
                'Minimize shared state.',
                'Use distinct deployment pipelines.'
            ]
        },
        connections: [
            { target: 'micro-frontend-host', purpose: 'Loaded by host', protocol: 'HTTPS', dataFlow: 'Outbound' },
            { target: 'bff', purpose: 'Fetch feature-specific data', protocol: 'HTTPS', dataFlow: 'Bidirectional' }
        ]
    },
    'bff': {
        name: 'Backend for Frontend (BFF)',
        category: 'Web Application',
        description: 'A dedicated backend service that shapes data specifically for a particular frontend interface (e.g., Mobile BFF, Web BFF).',
        howToUse: {
            summary: 'API layer tailored to a specific UI.',
            implementation: [
                'Aggregate data from multiple microservices.',
                'Filter/Format data for the client.',
                'Handle authentication/session management.'
            ],
            bestPractices: [
                'One BFF per user experience (Mobile vs Web).',
                'Keep business logic in domain services, not BFF.',
                'Use GraphQL for flexible data fetching.'
            ]
        },
        connections: [
            { target: 'microservice', purpose: 'Fetch domain data', protocol: 'gRPC/REST', dataFlow: 'Outbound' },
            { target: 'spa', purpose: 'Serve formatted data', protocol: 'REST/GraphQL', dataFlow: 'Inbound' }
        ]
    },
    'desktop-app': {
        name: 'Desktop Application',
        category: 'Web Application',
        description: 'A cross-platform desktop application built with web technologies (Electron, Tauri) or native frameworks.',
        howToUse: {
            summary: 'Installed app on Windows/macOS/Linux.',
            implementation: [
                'Package web app with Electron/Tauri.',
                'Handle auto-updates.',
                'Access native OS APIs (File System, Notifications).'
            ],
            bestPractices: [
                'Sign code for OS security requirements.',
                'Minimize memory usage (common Electron issue).',
                'Secure IPC communication.'
            ]
        },
        connections: [
            { target: 'api-gateway', purpose: 'Sync data', protocol: 'HTTPS', dataFlow: 'Bidirectional' },
            { target: 'object-storage', purpose: 'Download updates', protocol: 'HTTPS', dataFlow: 'Inbound' }
        ]
    },
    'iot-device': {
        name: 'IoT Device',
        category: 'Web Application',
        description: 'Smart devices (sensors, appliances, industrial equipment) interacting with the cloud infrastructure.',
        howToUse: {
            summary: 'Connected physical hardware.',
            implementation: [
                'Use MQTT for lightweight communication.',
                'Implement device shadowing.',
                'Secure with X.509 certificates.'
            ],
            bestPractices: [
                'Rotate certificates regularly.',
                'Handle intermittent connectivity gracefully.',
                'Validate all device input on the cloud side.'
            ]
        },
        connections: [
            { target: 'iot-core', purpose: 'MQTT Telemetry', protocol: 'MQTT', dataFlow: 'Outbound' },
            { target: 'edge-compute', purpose: 'Local processing', protocol: 'Local Network', dataFlow: 'Bidirectional' }
        ]
    },
    'smart-watch': {
        name: 'Smart Watch App',
        category: 'Web Application',
        description: 'Companion application or standalone app running on wearable devices (Apple Watch, WearOS).',
        howToUse: {
            summary: 'Wearable interface.',
            implementation: [
                'Focus on glanceable information.',
                'Optimize for extremely small screens.',
                'Sync via paired phone or direct LTE/WiFi.'
            ],
            bestPractices: [
                'Minimize battery drain.',
                'Prioritize voice and touch interactions.',
                'Use haptic feedback effectively.'
            ]
        },
        connections: [
            { target: 'mobile-client', purpose: 'Bluetooth Sync', protocol: 'BLE', dataFlow: 'Bidirectional' },
            { target: 'api-gateway', purpose: 'Direct API access (LTE)', protocol: 'HTTPS', dataFlow: 'Bidirectional' }
        ]
    },
    'smart-tv': {
        name: 'Smart TV App',
        category: 'Web Application',
        description: 'Application designed for large screen experiences (tvOS, Android TV, Tizen, WebOS).',
        howToUse: {
            summary: 'Lean-back experience (Video streaming, Dashboard).',
            implementation: [
                'Design for D-pad navigation (Focus states).',
                'Support high-resolution assets (4K).',
                'Handle DRM for media content.'
            ],
            bestPractices: [
                'Avoid complex text input.',
                'Test on actual hardware.',
                'Optimize for varying hardware performance.'
            ]
        },
        connections: [
            { target: 'cdn', purpose: 'Stream video content', protocol: 'HLS/DASH', dataFlow: 'Inbound' },
            { target: 'api-gateway', purpose: 'Metadata/Auth', protocol: 'HTTPS', dataFlow: 'Bidirectional' }
        ]
    },
    'bot-crawler': {
        name: 'Bot / Crawler',
        category: 'Web Application',
        description: 'Automated script or program that interacts with web services, often for indexing, monitoring, or automation.',
        howToUse: {
            summary: 'Automated agent (Googlebot, Scrapers).',
            implementation: [
                'Establish `User-Agent` string.',
                'Respect `robots.txt`.',
                'Implement rate limiting.'
            ],
            bestPractices: [
                'Identify your bot responsibly.',
                'Don\'t overload target servers.',
                'Handle dynamic content (Headless Chrome) if needed.'
            ]
        },
        connections: [
            { target: 'web-server', purpose: 'Crawl content', protocol: 'HTTP/HTTPS', dataFlow: 'Inbound' },
            { target: 'waf', purpose: 'Filtered access', protocol: 'HTTP', dataFlow: 'Outbound' }
        ]
    },
    'external-api': {
        name: 'External API',
        category: 'Web Application',
        description: 'Third-party API services integrated into the application (e.g., Stripe, Twilio, Google Maps).',
        howToUse: {
            summary: '3rd Party Service Integration.',
            implementation: [
                'Store API keys in Secrets Manager.',
                'Implement circuit breakers.',
                'Handle rate limits and errors.'
            ],
            bestPractices: [
                'Cache responses where allowed.',
                'Monitor latency and errors.',
                'Use webhooks for async updates.'
            ]
        },
        connections: [
            { target: 'api-gateway', purpose: 'Proxy requests', protocol: 'HTTPS', dataFlow: 'Inbound' },
            { target: 'backend-service', purpose: 'Server-side integration', protocol: 'HTTPS', dataFlow: 'Bidirectional' }
        ]
    },
    'graphql-client': {
        name: 'GraphQL Client',
        category: 'Web Application',
        description: 'A client implementing the GraphQL protocol to query data efficiently from a GraphQL server.',
        howToUse: {
            summary: 'Data fetcher (Apollo, Relay, Urql).',
            implementation: [
                'Define typed queries/mutations.',
                'Implement normalized caching.',
                'Handle optimistic UI updates.'
            ],
            bestPractices: [
                'Use fragments for component data masking.',
                'Monitor query performance.',
                'Prevent over-fetching.'
            ]
        },
        connections: [
            { target: 'api-gateway', purpose: 'Send Query/Mutation', protocol: 'HTTPS', dataFlow: 'Outbound' },
            { target: 'bff', purpose: 'Query specific backend', protocol: 'GraphQL', dataFlow: 'Outbound' }
        ]
    },

    // ==================== ANALYTICS COMPONENTS ====================

    'analytics-service': {
        name: 'Analytics Service',
        category: 'Analytics',
        description: 'A comprehensive service for analyzing vast amounts of data to uncover patterns, correlations, and insights.',
        howToUse: {
            summary: 'General purpose analytics engine.',
            implementation: ['Ingest data from various sources.', 'Run analytical queries.', 'Visualize results.'],
            bestPractices: ['Partition data for performance.', 'Use compression.', 'Implement lifecycle policies.']
        },
        connections: [{ target: 'data-warehouse-v2', purpose: 'Stores processed data', protocol: 'JDBC', dataFlow: 'Outbound' }]
    },
    'data-warehouse-v2': {
        name: 'Data Warehouse+',
        category: 'Analytics',
        description: 'A scalable, serverless data warehouse that makes it easy to analyze all your data using standard SQL.',
        howToUse: {
            summary: 'Central repository for structured data.',
            implementation: ['Design schemas (Star/Snowflake).', 'Load data via ETL.', 'Connect BI tools.'],
            bestPractices: ['Use sort keys for frequent filters.', 'Analyze vacuum needs.', 'Monitor query queues.']
        },
        connections: [{ target: 'dashboard-analytics', purpose: 'Source for dashboards', protocol: 'SQL', dataFlow: 'Outbound' }]
    },
    'interactive-query': {
        name: 'Interactive Query',
        category: 'Analytics',
        description: 'Serverless interactive query service that makes it easy to analyze data in S3 using standard SQL.',
        howToUse: {
            summary: 'Ad-hoc SQL analysis on data lakes.',
            implementation: ['Point to S3 bucket.', 'Define schema.', 'Run SQL queries.'],
            bestPractices: ['Use columnar formats (Parquet/ORC).', 'Partition data by date.', 'Compress data files.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Queries data directly', protocol: 'S3 API', dataFlow: 'Bidirectional' }]
    },
    'big-data-cluster': {
        name: 'Big Data Cluster',
        category: 'Analytics',
        description: 'Cloud big data platform for processing vast amounts of data using open source tools such as Apache Spark, Hive, HBase, Flink, Hudi, and Presto.',
        howToUse: {
            summary: 'Process massive datasets with Spark/Hadoop.',
            implementation: ['Launch cluster.', 'Submit jobs.', 'Store output in S3.'],
            bestPractices: ['Use Spot Instances for task nodes.', 'Auto-scale based on load.', 'Decouple compute and storage.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Data storage', protocol: 'HDFS/S3', dataFlow: 'Bidirectional' }]
    },
    'stream-analytics': {
        name: 'Stream Analytics',
        category: 'Analytics',
        description: 'Real-time analytics service that allows you to easily analyze and process streaming data.',
        howToUse: {
            summary: 'Analyze data streams in real-time.',
            implementation: ['Connect input stream (Kinesis/Kafka).', 'Write SQL queries.', 'Send to output destination.'],
            bestPractices: ['Handle late-arriving data.', 'Monitor throughput lag.', 'Checkpoint state regularly.']
        },
        connections: [{ target: 'kinesis-firehose', purpose: 'Ingests stream', protocol: 'Internal', dataFlow: 'Inbound' }]
    },
    'data-catalog': {
        name: 'Data Catalog',
        category: 'Analytics',
        description: 'A fully managed metadata repository that makes it easy to discover and understand your data assets.',
        howToUse: {
            summary: 'Centralize metadata.',
            implementation: ['Crawl data sources.', 'Classify data.', 'Search catalog.'],
            bestPractices: ['Automate crawlers.', 'Tag sensitive data.', 'Versioning for schemas.']
        },
        connections: [{ target: 'data-warehouse-v2', purpose: 'Catalogs tables', protocol: 'API', dataFlow: 'Inbound' }]
    },
    'dashboard-analytics': {
        name: 'BI Dashboard',
        category: 'Analytics',
        description: 'Business intelligence service that delivers insights to everyone in your organization.',
        howToUse: {
            summary: 'Visualize business data.',
            implementation: ['Connect data source.', 'Build visuals.', 'Publish dashboard.'],
            bestPractices: ['Optimize dataset performance (SPICE).', 'Use row-level security.', 'Schedule email reports.']
        },
        connections: [{ target: 'data-warehouse-v2', purpose: 'Reads data', protocol: 'SQL', dataFlow: 'Inbound' }]
    },
    'search-analytics': {
        name: 'Search Analytics',
        category: 'Analytics',
        description: 'Managed service that makes it easy to deploy, operate, and scale Elasticsearch clusters.',
        howToUse: {
            summary: 'Log analytics and full-text search.',
            implementation: ['Ingest logs/documents.', 'Index data.', 'Search via API/Kibana.'],
            bestPractices: ['Use dedicated master nodes.', 'Rotate indices.', 'Secure access with VPC.']
        },
        connections: [{ target: 'log-analytics', purpose: 'Visualizes logs', protocol: 'HTTP', dataFlow: 'Outbound' }]
    },
    'data-prep': {
        name: 'Data Prep',
        category: 'Analytics',
        description: 'Visual data preparation tool that makes it easy for data analysts and data scientists to clean and normalize data.',
        howToUse: {
            summary: 'Clean and transform data visually.',
            implementation: ['Import dataset.', 'Apply transforms.', 'Run job.'],
            bestPractices: ['Profile data first.', 'Use recipes for reproducibility.', 'Scale workers for large jobs.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Reads/Writes data', protocol: 'S3 API', dataFlow: 'Bidirectional' }]
    },
    'data-exchange': {
        name: 'Data Exchange',
        category: 'Analytics',
        description: 'Service that makes it easy to find, subscribe to, and use third-party data in the cloud.',
        howToUse: {
            summary: 'Share and consume data.',
            implementation: ['Publish dataset.', 'Define entitlement.', 'Subscriber exports to S3.'],
            bestPractices: ['Update datasets regularly.', 'Document data schemas.', 'Monitor usage.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Exports data to', protocol: 'S3 API', dataFlow: 'Outbound' }]
    },
    'real-time-analytics': {
        name: 'Real-time Analytics',
        category: 'Analytics',
        description: 'Analyze streaming data, gain insights, and respond to your business and customers in real time.',
        howToUse: {
            summary: 'Instant insights from streams.',
            implementation: ['Define stream source.', 'Process windowed data.', 'Trigger actions.'],
            bestPractices: ['Optimize window sizes.', 'Handle backpressure.', 'Ensure high availability.']
        },
        connections: [{ target: 'stream-analytics', purpose: 'Core processing', protocol: 'Internal', dataFlow: 'Bidirectional' }]
    },
    'business-intel': {
        name: 'Business Intel',
        category: 'Analytics',
        description: 'Scalable, serverless, embeddable, machine learning-powered business intelligence (BI) service.',
        howToUse: {
            summary: 'Enterprise BI reporting.',
            implementation: ['Model data.', 'Create reports.', 'Embed in apps.'],
            bestPractices: ['Use parameters for dynamic reports.', 'Implement caching.', 'Secure with IAM.']
        },
        connections: [{ target: 'data-warehouse-v2', purpose: 'Data source', protocol: 'SQL', dataFlow: 'Inbound' }]
    },
    'data-gov': {
        name: 'Data Governance',
        category: 'Analytics',
        description: 'Manage data access, security, and policies across your organization.',
        howToUse: {
            summary: 'Govern data assets.',
            implementation: ['Define policies.', 'Audit access.', 'Enforce compliance.'],
            bestPractices: ['Least privilege access.', 'Regular audits.', 'Automate policy enforcement.']
        },
        connections: [{ target: 'data-catalog', purpose: 'Governs assets', protocol: 'API', dataFlow: 'Bidirectional' }]
    },
    'data-quality': {
        name: 'Data Quality',
        category: 'Analytics',
        description: 'Service to measure and monitor the quality of your data.',
        howToUse: {
            summary: 'Ensure data integrity.',
            implementation: ['Define quality rules.', 'Run checks.', 'Alert on failure.'],
            bestPractices: ['Check for nulls/duplicates.', 'Validate schema conformity.', 'Trend quality metrics.']
        },
        connections: [{ target: 'data-prep', purpose: 'Validates data', protocol: 'Internal', dataFlow: 'Inbound' }]
    },
    'data-lineage': {
        name: 'Data Lineage',
        category: 'Analytics',
        description: 'Track the flow of data from source to consumption.',
        howToUse: {
            summary: 'Visualize data flow.',
            implementation: ['Enable lineage tracking.', 'View graph.', 'Debug issues.'],
            bestPractices: ['Document transformations.', 'Tag data sensitivity.', 'Monitor changes.']
        },
        connections: [{ target: 'etl-pipeline', purpose: 'Tracks movement', protocol: 'API', dataFlow: 'Inbound' }]
    },
    'predictive-analytics': {
        name: 'Predictive Analytics',
        category: 'Analytics',
        description: 'Use historical data to predict future outcomes.',
        howToUse: {
            summary: 'Forecast trends.',
            implementation: ['Train model.', 'Generate predictions.', 'Integrate with apps.'],
            bestPractices: ['Validate model accuracy.', 'Retrain regularly.', 'Explain predictions.']
        },
        connections: [{ target: 'ml-model', purpose: 'Uses model', protocol: 'API', dataFlow: 'Outbound' }]
    },
    'log-analytics': {
        name: 'Log Analytics',
        category: 'Analytics',
        description: 'Centralized log management and analysis.',
        howToUse: {
            summary: 'Analyze system logs.',
            implementation: ['Ship logs.', 'Parse fields.', 'Query and visualize.'],
            bestPractices: ['Structured logging (JSON).', 'Retention policies.', 'Alert on errors.']
        },
        connections: [{ target: 'search-analytics', purpose: 'Indexed storage', protocol: 'HTTP', dataFlow: 'Outbound' }]
    },
    'cloud-search': {
        name: 'Cloud Search',
        category: 'Analytics',
        description: 'Managed service in the cloud that makes it easy to set up, manage, and scale a search solution for your website or application.',
        howToUse: {
            summary: 'Add search to apps.',
            implementation: ['Define search domain.', 'Upload documents.', 'Search via API.'],
            bestPractices: ['Optimize ranking expressions.', 'Use suggesters.', 'Secure endpoints.']
        },
        connections: [{ target: 'web-basic-3tier', purpose: 'Provides search', protocol: 'HTTPS', dataFlow: 'Inbound' }]
    },
    'data-lake-formation': {
        name: 'Data Lake Formation',
        category: 'Analytics',
        description: 'Service that makes it easy to set up a secure data lake in days.',
        howToUse: {
            summary: 'Build secure data lakes.',
            implementation: ['Register S3 paths.', 'Define permissions.', 'Blueprint schemas.'],
            bestPractices: ['centralize permission management.', 'Enforce encryption.', 'Audit access logs.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Manages storage', protocol: 'API', dataFlow: 'Outbound' }]
    },
    'kinesis-video': {
        name: 'Video Streams',
        category: 'Analytics',
        description: 'Securely stream video from connected devices to AWS for analytics, machine learning (ML), playback, and other processing.',
        howToUse: {
            summary: 'Ingest video streams.',
            implementation: ['Create stream.', 'Stream from device.', 'Process with Rekognition.'],
            bestPractices: ['Use producer SDKs.', 'Adjust retention.', 'Encrypted streams.']
        },
        connections: [{ target: 'rekognition', purpose: 'Video analysis', protocol: 'Stream', dataFlow: 'Outbound' }]
    },

    // ==================== AI & ML COMPONENTS ====================

    'ai-service': {
        name: 'AI Service',
        category: 'AI & Machine Learning',
        description: 'General purpose Artificial Intelligence service.',
        howToUse: {
            summary: 'Integrate AI capabilities.',
            implementation: ['Select model.', 'Call API.', 'Process response.'],
            bestPractices: ['Handle rate limits.', 'Secure API keys.', 'Monitor costs.']
        },
        connections: [{ target: 'api-gateway', purpose: 'Exposes AI', protocol: 'HTTPS', dataFlow: 'Inbound' }]
    },
    'ml-model': {
        name: 'ML Model',
        category: 'AI & Machine Learning',
        description: 'A trained machine learning model ready for inference.',
        howToUse: {
            summary: 'Serve predictions.',
            implementation: ['Train.', 'Deploy endpoint.', 'Invoke.'],
            bestPractices: ['Version models.', 'Monitor drift.', 'A/B test.']
        },
        connections: [{ target: 'sagemaker', purpose: 'Hosted by', protocol: 'Internal', dataFlow: 'Inbound' }]
    },
    'sagemaker': {
        name: 'SageMaker',
        category: 'AI & Machine Learning',
        description: 'Fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning (ML) models quickly.',
        howToUse: {
            summary: 'Build, train, deploy ML.',
            implementation: ['Prepare data in notebook.', 'Train model.', 'Deploy to endpoint.'],
            bestPractices: ['Use Spot training.', 'Label data efficiently.', 'Monitor endpoints.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Training data', protocol: 'S3 API', dataFlow: 'Bidirectional' }]
    },
    'rekognition': {
        name: 'Image Rec',
        category: 'AI & Machine Learning',
        description: 'Automate your image and video analysis with machine learning.',
        howToUse: {
            summary: 'Analyze images/video.',
            implementation: ['Upload image.', 'Call DetectLabels/Faces.', 'Store results.'],
            bestPractices: ['Use confidence thresholds.', 'Store images in S3.', 'Process async for video.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Image source', protocol: 'S3 API', dataFlow: 'Inbound' }]
    },
    'polly': {
        name: 'Text to Speech',
        category: 'AI & Machine Learning',
        description: 'Turn text into lifelike speech using deep learning.',
        howToUse: {
            summary: 'Generate speech audio.',
            implementation: ['Input text.', 'Select voice.', 'Stream audio.'],
            bestPractices: ['Use SSML for control.', 'Cache common audio.', 'Choose neural voices.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Store audio', protocol: 'S3 API', dataFlow: 'Outbound' }]
    },
    'transcribe': {
        name: 'Speech to Text',
        category: 'AI & Machine Learning',
        description: 'Automatically convert speech to text.',
        howToUse: {
            summary: 'Transcribe audio.',
            implementation: ['Upload audio.', 'Start transcription job.', 'Get JSON result.'],
            bestPractices: ['Use custom vocabularies.', 'Speaker identification.', 'Filter PII.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Input/Output', protocol: 'S3 API', dataFlow: 'Bidirectional' }]
    },
    'translate': {
        name: 'Translation',
        category: 'AI & Machine Learning',
        description: 'Neural machine translation service that delivers fast, high-quality, and affordable language translation.',
        howToUse: {
            summary: 'Translate text.',
            implementation: ['Input text.', 'Specify target language.', 'Get translation.'],
            bestPractices: ['Use custom terminologies.', 'Batch processing.', 'Detect language auto.']
        },
        connections: [{ target: 'comprehend', purpose: 'Analyze translated text', protocol: 'API', dataFlow: 'Outbound' }]
    },
    'textract': {
        name: 'Text Extraction',
        category: 'AI & Machine Learning',
        description: 'Automatically extract printed text, handwriting, and data from scanned documents.',
        howToUse: {
            summary: 'OCR for documents.',
            implementation: ['Upload document.', 'Call AnalyzeDocument.', 'Parse forms/tables.'],
            bestPractices: ['Human review loop (A2I).', 'Preprocessing images.', 'Async for multi-page.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Document storage', protocol: 'S3 API', dataFlow: 'Inbound' }]
    },
    'comprehend': {
        name: 'NLP Service',
        category: 'AI & Machine Learning',
        description: 'Natural language processing (NLP) service that uses machine learning to find insights and relationships in text.',
        howToUse: {
            summary: 'Analyze text sentiment/entities.',
            implementation: ['Input text.', 'Detect sentiment/entities.', 'Classify.'],
            bestPractices: ['Custom entity recognition.', 'Topic modeling.', 'PII redaction.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Input documents', protocol: 'S3 API', dataFlow: 'Inbound' }]
    },
    'lex': {
        name: 'Chatbot AI',
        category: 'AI & Machine Learning',
        description: 'Service for building conversational interfaces into any application using voice and text.',
        howToUse: {
            summary: 'Build chatbots.',
            implementation: ['Define intents.', 'Configure slots.', 'Deploy bot.'],
            bestPractices: ['Use fallback intents.', 'Test variations.', 'Integrate with Lambda.']
        },
        connections: [{ target: 'serverless', purpose: 'Fulfillment logic', protocol: 'Invoke', dataFlow: 'Outbound' }]
    },
    'forecast': {
        name: 'Forecasting',
        category: 'AI & Machine Learning',
        description: 'Time-series forecasting service based on the same machine learning used at Amazon.com.',
        howToUse: {
            summary: 'Predict time-series data.',
            implementation: ['Import historical data.', 'Train predictor.', 'Query forecast.'],
            bestPractices: ['Include related time series.', 'Backtest models.', 'Clean data gaps.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Data source', protocol: 'S3 API', dataFlow: 'Inbound' }]
    },
    'personalize': {
        name: 'Personalization',
        category: 'AI & Machine Learning',
        description: 'Machine learning service that makes it easy for developers to create individualized recommendations for customers using their applications.',
        howToUse: {
            summary: 'Product recommendations.',
            implementation: ['Ingest interactions.', 'Create campaign.', 'Get recommendations.'],
            bestPractices: ['Real-time event recording.', 'Filter items.', 'Explore/Exploit.']
        },
        connections: [{ target: 'web-basic-3tier', purpose: 'Serving recs', protocol: 'API', dataFlow: 'Inbound' }]
    },
    'fraud-detector': {
        name: 'Fraud Detect',
        category: 'AI & Machine Learning',
        description: 'Fully managed service that makes it easy to identify potentially fraudulent online activities.',
        howToUse: {
            summary: 'Detect fraud.',
            implementation: ['Define event type.', 'Train model.', 'Get fraud prediction.'],
            bestPractices: ['Use custom variables.', 'Combine rules and models.', 'Monitor performance.']
        },
        connections: [{ target: 'api-gateway', purpose: 'Real-time check', protocol: 'HTTPS', dataFlow: 'Inbound' }]
    },
    'devops-guru': {
        name: 'AI DevOps',
        category: 'AI & Machine Learning',
        description: 'ML-powered service that makes it easy to improve an application’s operational performance and availability.',
        howToUse: {
            summary: 'Detect operational anomalies.',
            implementation: ['Enable service.', 'Analyze insights.', 'Remediate issues.'],
            bestPractices: ['Integrate with OpsCenter.', 'Review recommendations.', 'Feedback loop.']
        },
        connections: [{ target: 'sns', purpose: 'Alerting', protocol: 'Topic', dataFlow: 'Outbound' }]
    },
    'kendra': {
        name: 'Enterprise Search',
        category: 'AI & Machine Learning',
        description: 'Intelligent search service powered by machine learning.',
        howToUse: {
            summary: 'Search enterprise docs.',
            implementation: ['Connect data sources.', 'Index content.', 'Query with natural language.'],
            bestPractices: ['Tune relevance.', 'Use FAQs.', 'Secure access.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Document source', protocol: 'S3 API', dataFlow: 'Inbound' }]
    },
    'bedrock': {
        name: 'Generative AI',
        category: 'AI & Machine Learning',
        description: 'Easiest way to build and scale generative AI applications with foundation models (FMs).',
        howToUse: {
            summary: 'Access Foundation Models.',
            implementation: ['Choose provider.', 'Prompt engineering.', 'Integrate via API.'],
            bestPractices: ['Use guarding rails.', 'Prompt versioning.', 'Monitor token usage.']
        },
        connections: [{ target: 'serverless', purpose: 'App logic', protocol: 'API', dataFlow: 'Bidirectional' }]
    },
    'codewhisperer': {
        name: 'Code AI',
        category: 'AI & Machine Learning',
        description: 'AI coding companion that generates whole line and full function code suggestions in your IDE.',
        howToUse: {
            summary: 'Generate code.',
            implementation: ['Install plugin.', 'Write comments.', 'Accept suggestions.'],
            bestPractices: ['Scan for security.', 'Review license info.', 'Context aware comments.']
        },
        connections: []
    },
    'deepracer': {
        name: 'RL Model',
        category: 'AI & Machine Learning',
        description: '3D racing simulator, global racing league, and the easiest way to get started with reinforcement learning (RL).',
        howToUse: {
            summary: 'Reinforcement Learning.',
            implementation: ['Define reward function.', 'Train in sim.', 'Race.'],
            bestPractices: ['Reward smooth steering.', 'Prevent zigzag.', 'Gradual difficulty.']
        },
        connections: []
    },
    'deepcomposer': {
        name: 'Generative Audio',
        category: 'AI & Machine Learning',
        description: 'Creative tool that uses Generative AI to create music.',
        howToUse: {
            summary: 'Compose music with AI.',
            implementation: ['Input melody.', 'Select genre.', 'Generate backing track.'],
            bestPractices: ['Experiment with GANs.', 'Train custom models.', 'Export MIDI.']
        },
        connections: []
    },
    'healthlake': {
        name: 'Health AI',
        category: 'AI & Machine Learning',
        description: 'HIPAA-eligible service that stores, transforms, and analyzes health data in the petabyte scale.',
        howToUse: {
            summary: 'Store and analyze health data.',
            implementation: ['Import FHIR data.', 'Query data.', 'Run ML models.'],
            bestPractices: ['Standardize on FHIR.', 'Control access strictly.', 'Use integrated NLP.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Data lake', protocol: 'S3 API', dataFlow: 'Bidirectional' }]
    },

    // ==================== IOT & ROBOTICS COMPONENTS ====================

    'iot-core': {
        name: 'IoT Core',
        category: 'IoT & Robotics',
        description: 'Managed cloud service that lets connected devices easily and securely interact with cloud applications and other devices.',
        howToUse: {
            summary: 'Connect devices to cloud.',
            implementation: ['Register device (Thing).', 'Install certificates.', 'Send MQTT messages.'],
            bestPractices: ['Use unique certificates.', 'Implement least privilege policies.', 'Monitor connectivity.']
        },
        connections: [{ target: 'iot-analytics', purpose: 'Sends data', protocol: 'MQTT', dataFlow: 'Outbound' }]
    },
    'iot-analytics': {
        name: 'IoT Analytics',
        category: 'IoT & Robotics',
        description: 'Fully managed service that makes it easy to run and operationalize sophisticated analytics on massive volumes of IoT data.',
        howToUse: {
            summary: 'Analyze IoT data.',
            implementation: ['Create channel.', 'Define pipeline.', 'Query datastore.'],
            bestPractices: ['Filter noise early.', 'Enrich messages.', 'Set retention periods.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Data storage', protocol: 'Batch', dataFlow: 'Outbound' }]
    },
    'iot-defender': {
        name: 'IoT Security',
        category: 'IoT & Robotics',
        description: 'Security service that allows you to audit the configuration of your devices, monitor connected devices, and mitigate security issues.',
        howToUse: {
            summary: 'Secure IoT fleet.',
            implementation: ['Enable audit checks.', 'Define metric behaviors.', 'Receive alerts.'],
            bestPractices: ['Audit regularly.', 'Monitor anomalies.', 'Automate mitigation.']
        },
        connections: [{ target: 'sns', purpose: 'Security alerts', protocol: 'Topic', dataFlow: 'Outbound' }]
    },
    'iot-device-mgt': {
        name: 'Device Mgmt',
        category: 'IoT & Robotics',
        description: 'Service to securely onboard, organize, monitor, and remotely manage IoT devices at scale.',
        howToUse: {
            summary: 'Manage device fleet.',
            implementation: ['Group devices.', 'Schedule jobs (OTA).', 'Monitor index.'],
            bestPractices: ['Use dynamic groups.', 'Test OTA updates.', 'Monitor job progress.']
        },
        connections: [{ target: 'iot-core', purpose: 'Manages things', protocol: 'Internal', dataFlow: 'Bidirectional' }]
    },
    'iot-events': {
        name: 'IoT Events',
        category: 'IoT & Robotics',
        description: 'Fully managed IoT service that makes it easy to detect and respond to events from IoT sensors and applications.',
        howToUse: {
            summary: 'Detect complex events.',
            implementation: ['Define detector model.', 'Input telemetry.', 'Trigger action.'],
            bestPractices: ['Model state machines.', 'Handle timeouts.', 'Test logic.']
        },
        connections: [{ target: 'sns', purpose: 'Event notification', protocol: 'Topic', dataFlow: 'Outbound' }]
    },
    'iot-greengrass': {
        name: 'Greengrass',
        category: 'IoT & Robotics',
        description: 'Edge runtime and cloud service for building, deploying, and managing device software.',
        howToUse: {
            summary: 'Edge computing.',
            implementation: ['Install Core software.', 'Deploy components.', 'Run Lambda locally.'],
            bestPractices: ['Containerize components.', 'Secure local resources.', 'Monitor health.']
        },
        connections: [{ target: 'iot-core', purpose: 'Syncs shadow', protocol: 'MQTT', dataFlow: 'Bidirectional' }]
    },
    'iot-sitewise': {
        name: 'SiteWise',
        category: 'IoT & Robotics',
        description: 'Managed service that makes it easy to collect, store, organize, and monitor data from industrial equipment at scale.',
        howToUse: {
            summary: 'Industrial IoT monitoring.',
            implementation: ['Model assets.', 'Ignest data via Gateway.', 'Monitor portal.'],
            bestPractices: ['Hierarchy design.', 'Compute metrics at edge.', 'Visualize effectively.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Long term storage', protocol: 'S3 API', dataFlow: 'Outbound' }]
    },
    'iot-things-graph': {
        name: 'Things Graph',
        category: 'IoT & Robotics',
        description: 'Service that makes it easy to visually connect different devices and web services to build IoT applications.',
        howToUse: {
            summary: 'Visual IoT workflow.',
            implementation: ['Define models.', 'Drag and drop flow.', 'Deploy to Greengrass.'],
            bestPractices: ['Reuse models.', 'Version flows.', 'Test interactions.']
        },
        connections: []
    },
    'iot-1click': {
        name: 'IoT 1-Click',
        category: 'IoT & Robotics',
        description: 'Service that enables simple devices to trigger AWS Lambda functions.',
        howToUse: {
            summary: 'Button triggers.',
            implementation: ['Claim device.', 'Associate Lambda.', 'Click to run.'],
            bestPractices: ['Handle debouncing.', 'Check battery health.', 'Secure placement.']
        },
        connections: [{ target: 'serverless', purpose: 'Triggers function', protocol: 'Invoke', dataFlow: 'Outbound' }]
    },
    'freertos': {
        name: 'FreeRTOS',
        category: 'IoT & Robotics',
        description: 'Real-time operating system for microcontrollers that makes it easy to securely connect low-power devices to the cloud.',
        howToUse: {
            summary: 'OS for microcontrollers.',
            implementation: ['Flash firmware.', 'Connect library.', 'Send telemetry.'],
            bestPractices: ['Optimize memory.', 'Secure boot.', 'Handle network loss.']
        },
        connections: [{ target: 'iot-core', purpose: 'Connects to', protocol: 'MQTT', dataFlow: 'Outbound' }]
    },
    'iot-twinmaker': {
        name: 'Digital Twin',
        category: 'IoT & Robotics',
        description: 'Service that makes it faster and easier to create digital twins of real-world systems.',
        howToUse: {
            summary: 'Create digital twins.',
            implementation: ['Import 3D models.', 'Bind data sources.', 'Visualize in Grafana.'],
            bestPractices: ['Optimize 3D assets.', 'Hierarchy mapping.', 'Refresh rates.']
        },
        connections: [{ target: 'iot-sitewise', purpose: 'Data source', protocol: 'API', dataFlow: 'Inbound' }]
    },
    'iot-fleet-wise': {
        name: 'Fleet Wise',
        category: 'IoT & Robotics',
        description: 'Service that makes it easy to collect, transform, and transfer vehicle data to the cloud in near-real time.',
        howToUse: {
            summary: 'Vehicle data collection.',
            implementation: ['Define signal catalog.', 'Deploy agent.', 'Collect campaigns.'],
            bestPractices: ['Efficient encoding.', 'Prioritize signals.', 'Contextualize data.']
        },
        connections: [{ target: 'timestream', purpose: 'Stores telemetry', protocol: 'API', dataFlow: 'Outbound' }]
    },
    'iot-roborunner': {
        name: 'RoboRunner',
        category: 'IoT & Robotics',
        description: 'Service that makes it easier to build and deploy applications that help fleets of robots work seamlessly together.',
        howToUse: {
            summary: 'Robot fleet management.',
            implementation: ['Register fleets.', 'Centralize data.', 'Coordinate tasks.'],
            bestPractices: ['Standardize interfaces.', 'Handle latency.', 'Safety zones.']
        },
        connections: []
    },
    'kinesis-video-iot': {
        name: 'Kinesis Video',
        category: 'IoT & Robotics',
        description: 'Stream video securely from connected devices to AWS for analytics and playback.',
        howToUse: {
            summary: 'IoT Video streaming.',
            implementation: ['Install C++ Producer SDK.', 'Stream from camera.', 'View in console.'],
            bestPractices: ['Adjust bitrate.', 'Handle connectivity.', 'Secure credentials.']
        },
        connections: [{ target: 'rekognition', purpose: 'Analysis', protocol: 'Stream', dataFlow: 'Outbound' }]
    },
    'mqtt-broker': {
        name: 'MQTT Broker',
        category: 'IoT & Robotics',
        description: 'Standard MQTT broker for IoT messaging.',
        howToUse: {
            summary: 'Pub/Sub messaging.',
            implementation: ['Connect client.', 'Publish topic.', 'Subscribe topic.'],
            bestPractices: ['Topic hierarchy.', 'QoS levels.', 'Retain messages.']
        },
        connections: [{ target: 'iot-core', purpose: 'Managed implementation', protocol: 'MQTT', dataFlow: 'Bidirectional' }]
    },
    'lorawan-gateway': {
        name: 'LoRaWAN',
        category: 'IoT & Robotics',
        description: 'Gateway for Long Range Wide Area Network devices.',
        howToUse: {
            summary: 'Long range connectivity.',
            implementation: ['Register gateway.', 'Connect sensors.', 'Forward to cloud.'],
            bestPractices: ['Line of sight placement.', 'Secure backhaul.', 'Monitor duty cycle.']
        },
        connections: [{ target: 'iot-core-wireless', purpose: 'Connects to', protocol: 'LoRaWAN', dataFlow: 'Outbound' }]
    },
    'industrial-sensor': {
        name: 'Ind. Sensor',
        category: 'IoT & Robotics',
        description: 'Industrial grade sensor for manufacturing environments.',
        howToUse: {
            summary: 'Monitor machinery.',
            implementation: ['Mount sensor.', 'Connect via gateway.', 'Monitor vibration/temp.'],
            bestPractices: ['Regular calibration.', 'Ruggedized wiring.', 'Redundancy.']
        },
        connections: [{ target: 'iot-sitewise', purpose: 'Sends metrics', protocol: 'OPC-UA', dataFlow: 'Outbound' }]
    },
    'smart-home': {
        name: 'Smart Home',
        category: 'IoT & Robotics',
        description: 'Connected home device or controller.',
        howToUse: {
            summary: 'Home automation.',
            implementation: ['Connect Wi-Fi.', 'Link account.', 'Control remotely.'],
            bestPractices: ['Secure local network.', 'Update firmware.', 'User privacy.']
        },
        connections: [{ target: 'iot-core', purpose: 'Control plane', protocol: 'MQTT', dataFlow: 'Bidirectional' }]
    },
    'smart-camera': {
        name: 'Smart Camera',
        category: 'IoT & Robotics',
        description: 'Internet connected camera with potential edge AI capabilities.',
        howToUse: {
            summary: 'Visual monitoring.',
            implementation: ['Connect network.', 'Stream video.', 'Detect motion.'],
            bestPractices: ['Privacy masking.', 'Secure storage.', 'Edge processing.']
        },
        connections: [{ target: 'kinesis-video', purpose: 'Streams to', protocol: 'RTSP', dataFlow: 'Outbound' }]
    },
    'wind-turbine': {
        name: 'Wind Turbine',
        category: 'IoT & Robotics',
        description: 'Renewable energy generation asset.',
        howToUse: {
            summary: 'Energy monitoring.',
            implementation: ['Telemetry sensors.', 'Predictive maintenance.', 'Output tracking.'],
            bestPractices: ['Vibration analysis.', 'Weather correlation.', 'Remote control.']
        },
        connections: [{ target: 'iot-sitewise', purpose: 'Operational data', protocol: 'MQTT', dataFlow: 'Outbound' }]
    },

    // ==================== INTEGRATION COMPONENTS ====================

    'event-bridge': {
        name: 'Event Bus',
        category: 'App Integration',
        description: 'Serverless event bus to build event-driven applications at scale using events from your own applications, SaaS applications, and AWS services.',
        howToUse: {
            summary: 'Route events.',
            implementation: ['Create bus.', 'Define rules.', 'Target destinations.'],
            bestPractices: ['Schema registry.', 'Archive events.', 'Dead letter queues.']
        },
        connections: [{ target: 'serverless', purpose: 'Trigger', protocol: 'Event', dataFlow: 'Outbound' }]
    },
    'sns': {
        name: 'Notification Service',
        category: 'App Integration',
        description: 'Fully managed messaging service for both application-to-application (A2A) and application-to-person (A2P) communication.',
        howToUse: {
            summary: 'Pub/Sub messaging.',
            implementation: ['Create topic.', 'Subscribe endpoints (Email/SMS/SQS).', 'Publish message.'],
            bestPractices: ['Filter policies.', 'Raw message delivery.', 'Encryption.']
        },
        connections: [{ target: 'sqs', purpose: 'Fan-out', protocol: 'Internal', dataFlow: 'Outbound' }]
    },
    'sqs': {
        name: 'Queue Service',
        category: 'App Integration',
        description: 'Fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.',
        howToUse: {
            summary: 'Decouple components.',
            implementation: ['Create queue.', 'Send message.', 'Poll/consume message.'],
            bestPractices: ['Visibility timeouts.', 'Dead letter queues.', 'Batch processing.']
        },
        connections: [{ target: 'serverless', purpose: 'Trigger', protocol: 'Poller', dataFlow: 'Outbound' }]
    },
    'step-functions': {
        name: 'Step Functions',
        category: 'App Integration',
        description: 'Visual workflow service that helps developers use AWS services to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning (ML) pipelines.',
        howToUse: {
            summary: 'Orchestrate workflows.',
            implementation: ['Define state machine.', 'Start execution.', 'Handle errors/retries.'],
            bestPractices: ['Standard vs Express.', 'Input/Output path filtering.', 'catch/retry block.']
        },
        connections: [{ target: 'serverless', purpose: 'Task execution', protocol: 'Invoke', dataFlow: 'Outbound' }]
    },
    'app-flow': {
        name: 'App Flow',
        category: 'App Integration',
        description: 'Fully managed integration service that enables you to securely transfer data between Software-as-a-Service (SaaS) applications and AWS.',
        howToUse: {
            summary: 'SaaS integration.',
            implementation: ['Connect source (Salesforce).', 'Connect destination (S3).', 'Run flow.'],
            bestPractices: ['Schedule flows.', 'Encrypt data.', 'Transform fields.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Data sink', protocol: 'API', dataFlow: 'Outbound' }]
    },
    'app-sync': {
        name: 'App Sync',
        category: 'App Integration',
        description: 'Serverless GraphQL and Pub/Sub API service that simplifies building modern web and mobile applications.',
        howToUse: {
            summary: 'Managed GraphQL.',
            implementation: ['Define schema.', 'Attach resolvers.', 'Connect data sources.'],
            bestPractices: ['Auth modes (Cognito/API Key).', 'Pipeline resolvers.', 'Caching.']
        },
        connections: [{ target: 'dynamodb', purpose: 'Data source', protocol: 'Internal', dataFlow: 'Bidirectional' }]
    },
    'mq-broker': {
        name: 'MQ Broker',
        category: 'App Integration',
        description: 'Managed message broker service for Apache ActiveMQ and RabbitMQ.',
        howToUse: {
            summary: 'Managed ActiveMQ/RabbitMQ.',
            implementation: ['Create broker.', 'Connect app.', 'Send messages.'],
            bestPractices: ['Private VPC.', 'Multi-AZ.', 'Maintenance windows.']
        },
        connections: [{ target: 'microservices', purpose: 'Messaging', protocol: 'AMQP/MQTT', dataFlow: 'Bidirectional' }]
    },
    'airflow': {
        name: 'Airflow',
        category: 'App Integration',
        description: 'Managed Workflow for Apache Airflow (MWAA) tailored for data pipelines.',
        howToUse: {
            summary: 'Workflow orchestration.',
            implementation: ['Upload DAGs to S3.', 'Configure environment.', 'Monitor UI.'],
            bestPractices: ['Modular DAGs.', 'Secret manager integration.', 'Worker scaling.']
        },
        connections: [{ target: 's3-bucket', purpose: 'DAG storage', protocol: 'S3 API', dataFlow: 'Inbound' }]
    },
    'simple-workflow': {
        name: 'Simple Workflow',
        category: 'App Integration',
        description: 'Fully managed state tracker and task coordinator.',
        howToUse: {
            summary: 'Orchestrate background jobs.',
            implementation: ['Define domain.', 'Write decider/worker.', 'Start workflow.'],
            bestPractices: ['Use Step Functions for new apps.', 'Handle timeouts.', 'Signal workflows.']
        },
        connections: []
    },
    'express-workflows': {
        name: 'Express Workflows',
        category: 'App Integration',
        description: 'High-volume, short-duration workflows within Step Functions.',
        howToUse: {
            summary: 'Fast orchestration.',
            implementation: ['Select Express type.', 'Define steps.', 'Execute synchronously.'],
            bestPractices: ['Ideal for API backends.', 'Logging configuration.', 'Retries.']
        },
        connections: []
    },
    'schema-registry': {
        name: 'Schema Registry',
        category: 'App Integration',
        description: 'Feature of EventBridge to discover, create, and manage schemas for events.',
        howToUse: {
            summary: 'Manage event schemas.',
            implementation: ['Discover schemas.', 'Download bindings.', 'Validate events.'],
            bestPractices: ['Version schemas.', 'Code generation.', 'Evolution rules.']
        },
        connections: []
    },
    'app-mesh': {
        name: 'App Mesh',
        category: 'App Integration',
        description: 'Service mesh that provides application-level networking to make it easy for your services to communicate with each other across multiple types of compute infrastructure.',
        howToUse: {
            summary: 'Microservice networking.',
            implementation: ['Define mesh/nodes.', 'Deploy Envoy proxy.', 'Route traffic.'],
            bestPractices: ['Canary deployments.', 'Circuit breaking.', 'Observability.']
        },
        connections: [{ target: 'microservices', purpose: 'Controls traffic', protocol: 'gRPC/HTTP', dataFlow: 'Internal' }]
    },
    'cloud-map': {
        name: 'Cloud Map',
        category: 'App Integration',
        description: 'Cloud resource discovery service.',
        howToUse: {
            summary: 'Service discovery.',
            implementation: ['Register instances.', 'Discover via DNS/API.', 'Health check.'],
            bestPractices: ['DNS TTL settings.', 'Custom attributes.', 'Cleanup stale instances.']
        },
        connections: []
    },
    'api-destinations': {
        name: 'API Destination',
        category: 'App Integration',
        description: 'EventBridge feature to send events to external APIs.',
        howToUse: {
            summary: 'Push events to HTTP endpoints.',
            implementation: ['Create connection (Auth).', 'Create destination.', 'Create rule.'],
            bestPractices: ['Rate limiting.', 'Oauth auth.', 'Retry policies.']
        },
        connections: [{ target: 'external-api', purpose: 'Target', protocol: 'HTTPS', dataFlow: 'Outbound' }]
    },
    'pipes': {
        name: 'Event Pipes',
        category: 'App Integration',
        description: 'Point-to-point integration between event producers and consumers with optional filtering and enrichment.',
        howToUse: {
            summary: 'Connect source to target.',
            implementation: ['Select source (SQS/Kinesis).', 'Add enrichment (Lambda).', 'Select target.'],
            bestPractices: ['Filter early.', 'Input transformation.', 'Concurrency control.']
        },
        connections: []
    },
    'scheduler': {
        name: 'Scheduler',
        category: 'App Integration',
        description: 'Serverless scheduler that allows you to create, run, and manage tasks from one central managed service.',
        howToUse: {
            summary: 'Schedule tasks.',
            implementation: ['Create schedule (Cron/Rate).', 'Select target.', 'Configure input.'],
            bestPractices: ['Time zones.', 'Flexible windows.', 'Retries.']
        },
        connections: [{ target: 'serverless', purpose: 'Invokes', protocol: 'API', dataFlow: 'Outbound' }]
    },
    'managed-workflows': {
        name: 'Managed Workflows',
        category: 'App Integration',
        description: 'Managed orchestration services.',
        howToUse: {
            summary: 'Orchestrate tasks.',
            implementation: ['Define definition.', 'Deploy.', 'Monitor.'],
            bestPractices: ['Error handling.', 'Idempotency.', 'Traceability.']
        },
        connections: []
    },
    'datasync-discovery': {
        name: 'Discovery Agent',
        category: 'App Integration',
        description: 'Agent to discover on-premise storage for migration.',
        howToUse: {
            summary: 'Analyze on-prem storage.',
            implementation: ['Deploy agent.', 'Run discovery.', 'View recommendations.'],
            bestPractices: ['Network bandwidth.', 'Firewall rules.', 'Performance impact.']
        },
        connections: []
    },
    'transfer-family': {
        name: 'Transfer Family',
        category: 'App Integration',
        description: 'Fully managed support for SFTP, FTPS, and FTP directly into and out of Amazon S3 or EFS.',
        howToUse: {
            summary: 'Managed SFTP server.',
            implementation: ['Create server.', 'Manage users.', 'Map to S3/EFS.'],
            bestPractices: ['Public/VPC endpoint.', 'Custom identity provider.', 'Logging.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Backing storage', protocol: 'Internal', dataFlow: 'Bidirectional' }]
    },
    'b2b-exchange': {
        name: 'B2B Exchange',
        category: 'App Integration',
        description: 'B2B data interchange capability.',
        howToUse: {
            summary: 'EDI exchange.',
            implementation: ['Create profile.', 'Define partnership.', 'Transfer EDI documents.'],
            bestPractices: ['Validate EDI standards.', 'Audit trails.', 'Secure transport.']
        },
        connections: []
    },

    // ==================== BUSINESS APPLICATIONS ====================

    'chime': {
        name: 'Chime',
        category: 'Business Apps',
        description: 'Communications service that lets you meet, chat, and place business calls inside and outside your organization.',
        howToUse: {
            summary: 'Meetings and Chat.',
            implementation: ['Create account.', 'Download client.', 'Schedule meetings.'],
            bestPractices: ['SDK for custom apps.', 'Voice connector for SIP.', 'Screen sharing.']
        },
        connections: []
    },
    'connect': {
        name: 'Connect',
        category: 'Business Apps',
        description: 'Omnichannel cloud contact center.',
        howToUse: {
            summary: 'Cloud call center.',
            implementation: ['Claim phone number.', 'Design contact flows.', 'Integrate CRM.'],
            bestPractices: ['Recordings analysis.', 'Lex integration.', 'Metrics monitoring.']
        },
        connections: [{ target: 'lex', purpose: 'Voice bot', protocol: 'Internal', dataFlow: 'Bidirectional' }]
    },
    'pinpoint': {
        name: 'Pinpoint',
        category: 'Business Apps',
        description: 'Flexible and scalable outbound and inbound marketing communications service.',
        howToUse: {
            summary: 'Engage customers.',
            implementation: ['Import segments.', 'Create campaign.', 'Send SMS/Push/Email.'],
            bestPractices: ['A/B testing.', 'Analytics tracking.', 'Deliverability dashboard.']
        },
        connections: [{ target: 'mobile-client', purpose: 'Push notification', protocol: 'Push', dataFlow: 'Outbound' }]
    },
    'ses': {
        name: 'Email Service',
        category: 'Business Apps',
        description: 'Cost-effective, flexible, and scalable email service that enables developers to send mail from within any application.',
        howToUse: {
            summary: 'Send/Receive email.',
            implementation: ['Verify domain.', 'Request limit increase.', 'Send via SMTP/API.'],
            bestPractices: ['Handle bounces/complaints.', 'DKIM/SPF auth.', 'Reputation monitoring.']
        },
        connections: [{ target: 'sns', purpose: 'Bounce notifications', protocol: 'Topic', dataFlow: 'Outbound' }]
    },
    'workmail': {
        name: 'WorkMail',
        category: 'Business Apps',
        description: 'Secure, managed business email and calendar service.',
        howToUse: {
            summary: 'Business email.',
            implementation: ['Add domain.', 'Create users.', 'Configure clients.'],
            bestPractices: ['MFA enforcement.', 'Journaling.', 'Mobile device management.']
        },
        connections: []
    },
    'workdocs': {
        name: 'WorkDocs',
        category: 'Business Apps',
        description: 'Fully managed, secure content creation, storage, and collaboration service.',
        howToUse: {
            summary: 'Document collaboration.',
            implementation: ['Upload docs.', 'Share with users.', 'Comment/Review.'],
            bestPractices: ['Directory integration.', 'IP allow lists.', 'Activity feed.']
        },
        connections: []
    },
    'honeycode': {
        name: 'Honeycode',
        category: 'Business Apps',
        description: 'Build mobile & web apps without programming.',
        howToUse: {
            summary: 'No-code app builder.',
            implementation: ['Create table.', 'Design screen.', 'Add automation.'],
            bestPractices: ['Team collaboration.', 'Automate notifications.', 'Simple workflows.']
        },
        connections: []
    },
    'wickr': {
        name: 'Secure Chat',
        category: 'Business Apps',
        description: 'End-to-end encrypted enterprise communication.',
        howToUse: {
            summary: 'Secure messaging.',
            implementation: ['Create network.', 'Invite users.', 'Set retention.'],
            bestPractices: ['Ephemeral messages.', 'Federation.', 'Bot integration.']
        },
        connections: []
    },
    'supply-chain': {
        name: 'Supply Chain',
        category: 'Business Apps',
        description: 'Application that helps you mitigate risks and lower costs to increase supply chain resilience.',
        howToUse: {
            summary: 'Manage supply chain.',
            implementation: ['Connect ERP.', 'Map supply network.', 'View insights.'],
            bestPractices: ['Data hygiene.', 'Supplier collaboration.', 'inventory visibility.']
        },
        connections: []
    },
    'marketing': {
        name: 'Marketing',
        category: 'Business Apps',
        description: 'Marketing tools and services.',
        howToUse: {
            summary: 'Marketing campaigns.',
            implementation: ['Define strategy.', 'Execute channels.', 'Measure ROI.'],
            bestPractices: ['Segmentation.', 'Personalization.', 'Compliance (GDPR/CCPA).']
        },
        connections: []
    },
    'commerce': {
        name: 'Commerce',
        category: 'Business Apps',
        description: 'E-commerce capabilities.',
        howToUse: {
            summary: 'Sell products online.',
            implementation: ['Catalog management.', 'Cart/Checkout.', 'Payment processing.'],
            bestPractices: ['PCI compliance.', 'Caching.', 'Abandoned cart recovery.']
        },
        connections: []
    },
    'customer-profiles': {
        name: 'Cust. Profiles',
        category: 'Business Apps',
        description: 'Unified view of customer profiles.',
        howToUse: {
            summary: '360 Customer view.',
            implementation: ['Connect sources.', 'Merge identities.', 'Query profile.'],
            bestPractices: ['Identity resolution rules.', 'Data privacy.', 'Real-time updates.']
        },
        connections: []
    },
    'fraud-prevention': {
        name: 'Fraud Prev',
        category: 'Business Apps',
        description: 'Prevent fraud in business transactions.',
        howToUse: {
            summary: 'Stop fraud.',
            implementation: ['Analyze transaction.', 'Scoring model.', 'Decision logic.'],
            bestPractices: ['Feedback loops.', 'Real-time blocking.', 'Case management.']
        },
        connections: []
    },
    'voice-id': {
        name: 'Voice ID',
        category: 'Business Apps',
        description: 'Real-time caller authentication and fraud risk detection.',
        howToUse: {
            summary: 'Voice biometrics.',
            implementation: ['Enroll voiceprint.', 'Verify caller.', 'Detect watchlist.'],
            bestPractices: ['Consent management.', 'Threshold tuning.', 'Risk analysis.']
        },
        connections: []
    },
    'wisdom': {
        name: 'Wisdom',
        category: 'Business Apps',
        description: 'ML-powered knowledge search for contact centers.',
        howToUse: {
            summary: 'Agent assist.',
            implementation: ['Index knowledge base.', 'Real-time lookups.', 'Agent suggestions.'],
            bestPractices: ['Connect Salesforce/ServiceNow.', 'Content freshness.', 'Relevance tuning.']
        },
        connections: []
    },
    'cases': {
        name: 'Cases',
        category: 'Business Apps',
        description: 'Case management for customer issues.',
        howToUse: {
            summary: 'Track issues.',
            implementation: ['Create case.', 'Assign tasks.', 'Resolve.'],
            bestPractices: ['Automated routing.', 'SLA tracking.', 'History audit.']
        },
        connections: []
    },
    'billing-conductor': {
        name: 'Billing',
        category: 'Business Apps',
        description: 'Customize billing rates and generate reports.',
        howToUse: {
            summary: 'Custom billing.',
            implementation: ['Define billing groups.', 'Set custom rates.', 'Generate pro-forma.'],
            bestPractices: ['Chargeback models.', 'Margin analysis.', 'Account grouping.']
        },
        connections: []
    },
    'cost-explorer': {
        name: 'Cost Explorer',
        category: 'Business Apps',
        description: 'Visualize, understand, and manage your AWS costs and usage over time.',
        howToUse: {
            summary: 'Analyze costs.',
            implementation: ['Filter by service/tag.', 'Create reports.', 'Forecast spend.'],
            bestPractices: ['Tagging strategy.', 'Budget alerts.', 'RI/Savings Plan coverage.']
        },
        connections: []
    },
    'budgets': {
        name: 'Budgets',
        category: 'Business Apps',
        description: 'Set custom budgets to track your cost and usage.',
        howToUse: {
            summary: 'Cost control.',
            implementation: ['Set budget limit.', 'Configure alerts.', 'Monitor.'],
            bestPractices: ['Forecast vs Actual.', 'Action on breach.', 'Granular budgets.']
        },
        connections: [{ target: 'sns', purpose: 'Alert notification', protocol: 'Topic', dataFlow: 'Outbound' }]
    },
    'compute-optimizer': {
        name: 'Optimizer',
        category: 'Business Apps',
        description: 'Recommends optimal AWS resources for your workloads to reduce costs and improve performance.',
        howToUse: {
            summary: 'Rightsizing.',
            implementation: ['Enable service.', 'View recommendations.', 'Resize instances.'],
            bestPractices: ['Install CloudWatch agent.', 'Regular reviews.', 'Automate resizing.']
        },
        connections: []
    },

    // ==================== DEVELOPER TOOLS COMPONENTS ====================

    'code-commit': {
        name: 'CodeCommit',
        category: 'Dev Tools',
        description: 'Secure, highly scalable, managed source control service that hosts private Git repositories.',
        howToUse: {
            summary: 'Host private Git repos.',
            implementation: ['Create repository.', 'Clone URL.', 'Push code.'],
            bestPractices: ['Use IAM for access control.', 'Enable branch restrictions.', 'Trigger pipelines on commit.']
        },
        connections: [{ target: 'code-build', purpose: 'Source code', protocol: 'Git', dataFlow: 'Outbound' }]
    },
    'code-build': {
        name: 'CodeBuild',
        category: 'Dev Tools',
        description: 'Fully managed continuous integration service that compiles source code, runs tests, and produces software packages.',
        howToUse: {
            summary: 'Build and test code.',
            implementation: ['Define buildspec.yml.', 'Select source.', 'Run build.'],
            bestPractices: ['Cache dependencies.', 'Use custom images.', 'Encrypt artifacts.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Stores artifacts', protocol: 'S3 API', dataFlow: 'Outbound' }]
    },
    'code-deploy': {
        name: 'CodeDeploy',
        category: 'Dev Tools',
        description: 'Fully managed deployment service that automates software deployments to a variety of compute services.',
        howToUse: {
            summary: 'Automate deployment.',
            implementation: ['Install agent.', 'Define appspec.yml.', 'Create deployment group.'],
            bestPractices: ['Blue/Green deployments.', 'Rollback on verify failure.', 'Monitor hooks.']
        },
        connections: [{ target: 'web-basic-3tier', purpose: 'Deploys to', protocol: 'Agent', dataFlow: 'Outbound' }]
    },
    'code-pipeline': {
        name: 'CodePipeline',
        category: 'Dev Tools',
        description: 'Fully managed continuous delivery service that helps you automate your release pipelines for fast and reliable application and infrastructure updates.',
        howToUse: {
            summary: 'Orchestrate release pipeline.',
            implementation: ['Define source stage.', 'Add build stage.', 'Add deploy stage.'],
            bestPractices: ['Manual approval gates.', 'Cross-account actions.', 'Security scanning integration.']
        },
        connections: [{ target: 'code-build', purpose: 'Executes build', protocol: 'Internal', dataFlow: 'Outbound' }]
    },
    'cloud9': {
        name: 'Cloud9',
        category: 'Dev Tools',
        description: 'Cloud-integrated IDE for writing, running, and debugging code.',
        howToUse: {
            summary: 'Cloud IDE.',
            implementation: ['Create environment.', 'Write code in browser.', 'Share environment.'],
            bestPractices: ['Auto-hibernate to save cost.', 'Pair programming.', 'Access VPC resources.']
        },
        connections: [{ target: 'serverless', purpose: 'Deploys function', protocol: 'API', dataFlow: 'Outbound' }]
    },
    'cloudshell': {
        name: 'CloudShell',
        category: 'Dev Tools',
        description: 'Browser-based shell that makes it easy to securely manage, explore, and interact with your AWS resources.',
        howToUse: {
            summary: 'CLI in browser.',
            implementation: ['Open shell.', 'Run CLI commands.', 'Upload/Download files.'],
            bestPractices: ['Use for ad-hoc tasks.', 'Persist $HOME.', 'Secure access.']
        },
        connections: []
    },
    'x-ray': {
        name: 'X-Ray',
        category: 'Dev Tools',
        description: 'Analyze and debug production, distributed applications, such as those built using a microservices architecture.',
        howToUse: {
            summary: 'Trace requests.',
            implementation: ['Instrument app with SDK.', 'View service map.', 'Analyze traces.'],
            bestPractices: ['Sample requests.', 'Annotate traces.', 'Correlate with logs.']
        },
        connections: [{ target: 'microservices', purpose: 'Traces', protocol: 'UDP', dataFlow: 'Inbound' }]
    },
    'code-star': {
        name: 'CodeStar',
        category: 'Dev Tools',
        description: 'Unified user interface, enabling you to easily manage your software development activities in one place.',
        howToUse: {
            summary: 'Project management.',
            implementation: ['Choose template.', 'Add team members.', 'Manage pipeline.'],
            bestPractices: ['Quick start projects.', 'Dashboard monitoring.', 'Collaborate via Jira.']
        },
        connections: []
    },
    'code-artifact': {
        name: 'CodeArtifact',
        category: 'Dev Tools',
        description: 'Secure, scalable, and cost-effective artifact management for software development.',
        howToUse: {
            summary: 'Manage packages.',
            implementation: ['Create domain/repo.', 'Configure npm/pip.', 'Publish/Install.'],
            bestPractices: ['Upstream repositories.', 'Cross-account access.', 'Audit package versions.']
        },
        connections: [{ target: 'code-build', purpose: 'Fetches dependencies', protocol: 'HTTPS', dataFlow: 'Inbound' }]
    },
    'device-farm': {
        name: 'Device Farm',
        category: 'Dev Tools',
        description: 'App testing service that lets you test and interact with your Android, iOS, and web apps on many devices at once.',
        howToUse: {
            summary: 'Test on real devices.',
            implementation: ['Upload app.', 'Select device pool.', 'Run test suite.'],
            bestPractices: ['Test fragmentation.', 'Remote access for debug.', 'Automate with Jenkins.']
        },
        connections: []
    },
    'fault-injection': {
        name: 'Fault Injection',
        category: 'Dev Tools',
        description: 'Fully managed chaos engineering service.',
        howToUse: {
            summary: 'Simulate failures.',
            implementation: ['Define experiment.', 'Target resource.', 'Run scenario.'],
            bestPractices: ['Start small.', 'Monitor steady state.', 'Stop conditions.']
        },
        connections: []
    },
    'app-config': {
        name: 'AppConfig',
        category: 'Dev Tools',
        description: 'Feature of Systems Manager that makes it easy to create, manage, and quickly deploy application configurations.',
        howToUse: {
            summary: 'Manage config flags.',
            implementation: ['Create profile.', 'Deploy strategy.', 'Poll for config.'],
            bestPractices: ['Validate configuration.', 'Gradual rollout.', 'Rollback on alarm.']
        },
        connections: []
    },
    'cloud-control': {
        name: 'Cloud Control',
        category: 'Dev Tools',
        description: 'Standardized set of APIs to Create, Read, Update, Delete, and List (CRUDL) cloud resources.',
        howToUse: {
            summary: 'Unified API.',
            implementation: ['Call CreateResource.', 'Wait for completion.', 'Get properties.'],
            bestPractices: ['Consistent tooling.', 'Handle async operations.', 'Third-party extensions.']
        },
        connections: []
    },
    'cloud-formation': {
        name: 'CloudFormation',
        category: 'Dev Tools',
        description: 'Model and set up your AWS resources with specialized programming languages or a simple text file.',
        howToUse: {
            summary: 'Infrastructure as Code.',
            implementation: ['Write template (YAML/JSON).', 'Create Stack.', 'Update Stack.'],
            bestPractices: ['Modular nested stacks.', 'Drift detection.', 'Protect termination.']
        },
        connections: [{ target: 'serverless', purpose: 'Provisions', protocol: 'API', dataFlow: 'Outbound' }]
    },
    'cdk': {
        name: 'CDK',
        category: 'Dev Tools',
        description: 'Open source software development framework to define your cloud application resources using familiar programming languages.',
        howToUse: {
            summary: 'Code your infrastructure.',
            implementation: ['Init project.', 'Define constructs.', 'cdk deploy.'],
            bestPractices: ['Unit test infra.', 'Modular constructs.', 'Context separation.']
        },
        connections: [{ target: 'cloud-formation', purpose: 'Synthesizes to', protocol: 'Internal', dataFlow: 'Outbound' }]
    },
    'amplify': {
        name: 'Amplify',
        category: 'Dev Tools',
        description: 'Complete set of tools and services that enables front-end web and mobile developers to build secure, scalable full stack applications.',
        howToUse: {
            summary: 'Build fullstack apps.',
            implementation: ['Connect repo.', 'Configure build.', 'Add backend via CLI.'],
            bestPractices: ['CI/CD via console.', 'Feature branches.', 'Backend environments.']
        },
        connections: [{ target: 'web-basic-3tier', purpose: 'Hosts frontend', protocol: 'HTTPS', dataFlow: 'Outbound' }]
    },
    'app-runner': {
        name: 'App Runner',
        category: 'Dev Tools',
        description: 'Fully managed service that makes it easy for developers to parse, build, deploy, and scale containerized web applications and APIs.',
        howToUse: {
            summary: 'Run containers easily.',
            implementation: ['Connect source code/image.', 'Configure port.', 'Deploy.'],
            bestPractices: ['Auto-scaling config.', 'Health checks.', 'VPC connectors.']
        },
        connections: [{ target: 'container-registry', purpose: 'Pulls image', protocol: 'HTTPS', dataFlow: 'Inbound' }]
    },
    'bug-tracker': {
        name: 'Bug Tracker',
        category: 'Dev Tools',
        description: 'Tool to track software bugs.',
        howToUse: {
            summary: 'Track issues.',
            implementation: ['Create issue.', 'Assign priority.', 'Close.'],
            bestPractices: ['Detailed steps to reproduce.', 'Screenshots.', 'Version numbers.']
        },
        connections: []
    },
    'git-repo': {
        name: 'Git Repo',
        category: 'Dev Tools',
        description: 'Generic Git repository.',
        howToUse: {
            summary: 'Source control.',
            implementation: ['Commit.', 'Push.', 'Merged.'],
            bestPractices: ['Branching strategy.', 'Code review.', 'Signed commits.']
        },
        connections: [{ target: 'ci-cd', purpose: 'Trigger pipeline', protocol: 'Webhook', dataFlow: 'Outbound' }]
    },
    'build-server': {
        name: 'Build Server',
        category: 'Dev Tools',
        description: 'Server dedicated to compiling code.',
        howToUse: {
            summary: 'Compile code.',
            implementation: ['Install dependencies.', 'Run tests.', 'Package.'],
            bestPractices: ['Clean environment.', 'Parallel builds.', 'Artifact caching.']
        },
        connections: [{ target: 'cis-cd', purpose: 'Part of pipeline', protocol: 'Internal', dataFlow: 'Bidirectional' }]
    },

    // ==================== MIGRATION & TRANSFER COMPONENTS ====================

    'migration-hub': {
        name: 'Migration Hub',
        category: 'Migration',
        description: 'Single place to track the progress of application migrations across AWS and partner solutions.',
        howToUse: {
            summary: 'Track migrations.',
            implementation: ['Import server list.', 'Group apps.', 'Track status.'],
            bestPractices: ['Tag resources.', 'Centralize tracking.', 'Authorize tools.']
        },
        connections: []
    },
    'dms': {
        name: 'DB Migration',
        category: 'Migration',
        description: 'Migrate databases to AWS quickly and securely.',
        howToUse: {
            summary: 'Migrate DBs.',
            implementation: ['Create replication instance.', 'Define endpoints.', 'Start task.'],
            bestPractices: ['Schema conversion (SCT).', 'CDC for minimal downtime.', 'Monitor latency.']
        },
        connections: [{ target: 'database', purpose: 'Target DB', protocol: 'JDBC', dataFlow: 'Outbound' }]
    },
    'sms': {
        name: 'Server Migration',
        category: 'Migration',
        description: 'Migrate on-premise servers to AWS.',
        howToUse: {
            summary: 'Migrate VMs.',
            implementation: ['Install connector.', 'Replicate server.', 'Launch instance.'],
            bestPractices: ['Incremental replication.', 'Test launch.', 'Cutover planning.']
        },
        connections: []
    },
    'datasync': {
        name: 'DataSync',
        category: 'Migration',
        description: 'Secure, online service that automates and accelerates moving data between on-premises and AWS storage services.',
        howToUse: {
            summary: 'Move data.',
            implementation: ['Deploy agent.', 'Create task.', 'Start transfer.'],
            bestPractices: ['Bandwidth throttling.', 'Verification mode.', 'Schedule transfers.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Target', protocol: 'NFS/SMB', dataFlow: 'Outbound' }]
    },
    'snowball': {
        name: 'Snowball',
        category: 'Migration',
        description: 'Petabyte-scale data transport solution that uses secure devices to transfer large amounts of data into and out of the AWS Cloud.',
        howToUse: {
            summary: 'Physical data transfer.',
            implementation: ['Order device.', 'Copy data.', 'Ship back.'],
            bestPractices: ['Encrypt data.', 'Validate copy.', 'Use local client.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Import to', protocol: 'Manual', dataFlow: 'Outbound' }]
    },
    'snow-edge': {
        name: 'Snowcone',
        category: 'Migration',
        description: 'Small, rugged, and secure edge computing and data transfer device.',
        howToUse: {
            summary: 'Portable edge data.',
            implementation: ['Order device.', 'Collect data/Run EC2.', 'Ship/Online transfer.'],
            bestPractices: ['Battery power support.', 'Wireless connectivity.', 'Edge logic.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Transfer to', protocol: 'Methods', dataFlow: 'Outbound' }]
    },
    'snowmobile': {
        name: 'Snowmobile',
        category: 'Migration',
        description: 'Exabyte-scale data transfer service used to move extremely large amounts of data to AWS.',
        howToUse: {
            summary: 'Massive data move.',
            implementation: ['Schedule truck.', 'Connect power/network.', 'Ingest data.'],
            bestPractices: ['Site survey.', 'Security escrow.', 'Planning.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Target', protocol: 'Fiber', dataFlow: 'Outbound' }]
    },
    'ads-discovery': {
        name: 'App Discovery',
        category: 'Migration',
        description: 'Helps you plan reliable migration projects by gathering information about your on-premises data centers.',
        howToUse: {
            summary: 'Discover assets.',
            implementation: ['Install agents/connector.', 'Collect data.', 'Map dependencies.'],
            bestPractices: ['Wait for full cycle.', 'Group applications.', 'Export for analysis.']
        },
        connections: []
    },
    'mgn': {
        name: 'App Migration',
        category: 'Migration',
        description: 'Primary service for lift-and-shift migrations to AWS.',
        howToUse: {
            summary: 'Rehost applications.',
            implementation: ['Install agent.', 'Replicate block storage.', 'Launch test/cutover.'],
            bestPractices: ['Non-disruptive testing.', 'Right-sizing.', 'Tagging.']
        },
        connections: [{ target: 'web-basic-3tier', purpose: 'Migrated app', protocol: 'Replication', dataFlow: 'Outbound' }]
    },
    'mainframe-mod': {
        name: 'Mainframe Mod',
        category: 'Migration',
        description: 'Migrate on-premise mainframe workloads to a managed runtime environment.',
        howToUse: {
            summary: 'Modernize mainframe.',
            implementation: ['Analyze code.', 'Replatform/Refactor.', 'Deploy runtime.'],
            bestPractices: ['Incremental migration.', 'Automated testing.', 'Performance tuning.']
        },
        connections: []
    },
    'schema-conversion': {
        name: 'Schema Convert',
        category: 'Migration',
        description: 'Tool to convert database schemas from one engine to another.',
        howToUse: {
            summary: 'Convert schemas.',
            implementation: ['Connect source/target.', 'Generate report.', 'Apply schema.'],
            bestPractices: ['Analyze complexity report.', 'Handle stored procs manually.', 'Validate.']
        },
        connections: [{ target: 'database', purpose: 'Target schema', protocol: 'SQL', dataFlow: 'Outbound' }]
    },
    'sftp-transfer': {
        name: 'SFTP Transfer',
        category: 'Migration',
        description: 'SFTP connector for data transfer.',
        howToUse: {
            summary: 'SFTP file move.',
            implementation: ['Configure endpoint.', 'Transfer files.', 'Sync to storage.'],
            bestPractices: ['SSH keys.', 'File integrity check.', 'Automated scripts.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Storage', protocol: 'SFTP', dataFlow: 'Outbound' }]
    },
    'etl-pipeline': {
        name: 'ETL Pipeline',
        category: 'Migration',
        description: 'Extract, Transform, Load pipeline for data migration.',
        howToUse: {
            summary: 'Data transformation.',
            implementation: ['Define source.', 'Transform logic.', 'Load to target.'],
            bestPractices: ['Error handling.', 'Retry logic.', 'Data validation.']
        },
        connections: [{ target: 'data-warehouse-v2', purpose: 'Load target', protocol: 'SQL', dataFlow: 'Outbound' }]
    },
    'kinesis-firehose': {
        name: 'Firehose',
        category: 'Migration',
        description: 'Easiest way to reliably load streaming data into data lakes, data stores, and analytics services.',
        howToUse: {
            summary: 'Load streams.',
            implementation: ['Create delivery stream.', 'Configure source.', 'Select destination.'],
            bestPractices: ['Buffer size/interval.', 'Compression.', 'Transformation Lambda.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Data delivery', protocol: 'S3 API', dataFlow: 'Outbound' }]
    },
    'glue-databrew': {
        name: 'DataBrew',
        category: 'Migration',
        description: 'Visual data preparation tool to clean and normalize data.',
        howToUse: {
            summary: 'Visual ETL.',
            implementation: ['Connect dataset.', 'Build recipe.', 'Run job.'],
            bestPractices: ['Profile data.', 'Reuse recipes.', 'Scale jobs.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Input/Output', protocol: 'S3 API', dataFlow: 'Bidirectional' }]
    },
    'migration-eval': {
        name: 'Evaluator',
        category: 'Migration',
        description: 'Evaluate migration readiness.',
        howToUse: {
            summary: 'Assess readiness.',
            implementation: ['Answer questionnaire.', 'Generate report.', 'Identify gaps.'],
            bestPractices: ['Involve stakeholders.', 'Realistic timelines.', 'Skill gap analysis.']
        },
        connections: []
    },
    'app-assess': {
        name: 'App Assess',
        category: 'Migration',
        description: 'Assess applications for cloud suitability.',
        howToUse: {
            summary: 'Assess apps.',
            implementation: ['Scan code.', 'Identify dependencies.', 'Estimate effort.'],
            bestPractices: ['Prioritize low effort/high value.', 'Refactor advisor.', 'Security review.']
        },
        connections: []
    },
    'db-convert': {
        name: 'DB Convert',
        category: 'Migration',
        description: 'Convert specific database engines.',
        howToUse: {
            summary: 'Engine conversion.',
            implementation: ['Select source.', 'Select target.', 'Convert data.'],
            bestPractices: ['Data type mapping.', 'Performance testing.', 'Consistency check.']
        },
        connections: []
    },
    'cart-migration': {
        name: 'Cart Migration',
        category: 'Migration',
        description: 'Migrate shopping cart data.',
        howToUse: {
            summary: 'E-commerce migration.',
            implementation: ['Export catalog.', 'Export customers.', 'Import to new platform.'],
            bestPractices: ['Redirect URLs.', 'SEO preservation.', 'Order history.']
        },
        connections: []
    },
    'vm-import': {
        name: 'VM Import',
        category: 'Migration',
        description: 'Import/Export VM images.',
        howToUse: {
            summary: 'Import images.',
            implementation: ['Prepare OVA/VMDK.', 'Upload to S3.', 'Import as AMI.'],
            bestPractices: ['Install drivers (virtio).', 'Remove static IPs.', 'Check kernel support.']
        },
        connections: [{ target: 'web-basic-3tier', purpose: 'Creates instance', protocol: 'API', dataFlow: 'Outbound' }]
    },

    // ==================== MEDIA SERVICES COMPONENTS ====================

    'elastic-transcoder': {
        name: 'Transcoder',
        category: 'Media Services',
        description: 'Media transcoding in the cloud.',
        howToUse: {
            summary: 'Convert media files.',
            implementation: ['Create pipeline.', 'Create preset.', 'Submit job.'],
            bestPractices: ['Use MediaConvert for new workloads.', 'Pipeline notifications.', 'S3 input/output.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Media storage', protocol: 'S3 API', dataFlow: 'Bidirectional' }]
    },

    'media-connect': {
        name: 'MediaConnect',
        category: 'Media Services',
        description: 'High-quality transport service for live video.',
        howToUse: {
            summary: 'Live video transport.',
            implementation: ['Create flow.', 'Add source.', 'Add entitlement/output.'],
            bestPractices: ['Use multiple AZs.', 'Encryption.', 'Monitor metrics.']
        },
        connections: [{ target: 'media-live', purpose: 'Source', protocol: 'RTP/FEC', dataFlow: 'Outbound' }]
    },
    'media-convert': {
        name: 'MediaConvert',
        category: 'Media Services',
        description: 'File-based video transcoding service with broadcast-grade features.',
        howToUse: {
            summary: 'Convert video files.',
            implementation: ['Create job template.', 'Submit job.', 'Monitor status.'],
            bestPractices: ['Automated workflows via Lambda.', 'Acceleration for urgents.', 'cost allocation tags.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Storage', protocol: 'S3 API', dataFlow: 'Bidirectional' }]
    },
    'media-live': {
        name: 'MediaLive',
        category: 'Media Services',
        description: 'Broadcast-grade live video processing service.',
        howToUse: {
            summary: 'Live encoding.',
            implementation: ['Create input.', 'Create channel.', 'Start channel.'],
            bestPractices: ['Input redundancy.', 'Pipeline locks.', 'Alerting.']
        },
        connections: [{ target: 'media-package', purpose: 'HLS/DASH output', protocol: 'HLS', dataFlow: 'Outbound' }]
    },
    'media-package': {
        name: 'MediaPackage',
        category: 'Media Services',
        description: 'Prepare and protect your video for delivery over the Internet.',
        howToUse: {
            summary: 'Packaging and DRM.',
            implementation: ['Create channel.', 'Create endpoints.', 'Configure DRM.'],
            bestPractices: ['Harvest live to VOD.', 'CDN authorization.', 'Cache settings.']
        },
        connections: [{ target: 'cloudfront', purpose: 'Delivery', protocol: 'HTTPS', dataFlow: 'Outbound' }]
    },
    'media-store': {
        name: 'MediaStore',
        category: 'Media Services',
        description: 'AWS Elemental MediaStore is an AWS storage service optimized for media.',
        howToUse: {
            summary: 'Low latency media storage.',
            implementation: ['Create container.', 'Set policy.', 'Upload objects.'],
            bestPractices: ['CORS configuration.', 'Lifecycle policies.', 'Access logging.']
        },
        connections: [{ target: 'cloudfront', purpose: 'Delivery', protocol: 'HTTPS', dataFlow: 'Outbound' }]
    },
    'media-tailor': {
        name: 'MediaTailor',
        category: 'Media Services',
        description: 'Server-side ad insertion service.',
        howToUse: {
            summary: 'Insert ads.',
            implementation: ['Configure config.', 'Map ad decision server.', 'Stitch ads.'],
            bestPractices: ['Prefetch ads.', 'Personalization.', 'Measurement.']
        },
        connections: [{ target: 'media-package', purpose: 'Content source', protocol: 'HLS', dataFlow: 'Inbound' }]
    },

    'elemental-link': {
        name: 'Link Device',
        category: 'Media Services',
        description: 'Device to connect live video source to MediaLive.',
        howToUse: {
            summary: 'On-prem ingest.',
            implementation: ['Plug in device.', 'Associate with account.', 'Start streaming.'],
            bestPractices: ['Internet bandwidth.', 'Secure location.', 'Cooling.']
        },
        connections: [{ target: 'media-live', purpose: 'Input', protocol: 'Secure', dataFlow: 'Outbound' }]
    },
    'nimble-studio': {
        name: 'Nimble Studio',
        category: 'Media Services',
        description: 'Empowers creative studios to produce visual effects, animation, and interactive content entirely in the cloud.',
        howToUse: {
            summary: 'Cloud studio.',
            implementation: ['Create studio.', 'Add workstations.', 'Onboard artists.'],
            bestPractices: ['Latency management.', 'Storage tiering.', 'License server.']
        },
        connections: []
    },
    'media-asset': {
        name: 'Media Asset',
        category: 'Media Services',
        description: 'Generic media asset.',
        howToUse: {
            summary: 'Asset management.',
            implementation: ['Ingest.', 'Tag.', 'Archive.'],
            bestPractices: ['Metadata schema.', 'Previews.', 'Access control.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Storage', protocol: 'S3 API', dataFlow: 'Bidirectional' }]
    },
    'renderman': {
        name: 'RenderMan',
        category: 'Media Services',
        description: 'Rendering software.',
        howToUse: {
            summary: 'Render scenes.',
            implementation: ['Configure farm.', 'Submit job.', 'Collect frames.'],
            bestPractices: ['Spot instances.', 'Scene optimization.', 'Cache assets.']
        },
        connections: [{ target: 'deadline', purpose: 'Managed by', protocol: 'API', dataFlow: 'Inbound' }]
    },
    'deadline': {
        name: 'Deadline',
        category: 'Media Services',
        description: 'Render farm management.',
        howToUse: {
            summary: 'Manage rendering.',
            implementation: ['Install repository.', 'Configure workers.', 'Submit jobs.'],
            bestPractices: ['Scaling policies.', 'License usage.', 'Log analysis.']
        },
        connections: []
    },
    'thinkbox': {
        name: 'Thinkbox',
        category: 'Media Services',
        description: 'Tools for creative workflow.',
        howToUse: {
            summary: 'Creative tools.',
            implementation: ['Install plugins.', 'Integrate pipeline.', 'Review.'],
            bestPractices: ['Version control.', 'Pipeline automation.', 'Collaboration.']
        },
        connections: []
    },
    'media-stream': {
        name: 'Media Stream',
        category: 'Media Services',
        description: 'Generic media stream.',
        howToUse: {
            summary: 'Stream video/audio.',
            implementation: ['Source.', 'Encode.', 'Distribute.'],
            bestPractices: ['Adaptive bitrate.', 'Low latency.', 'Reliability.']
        },
        connections: []
    },
    'broadcast-cam': {
        name: 'Camera',
        category: 'Media Services',
        description: 'Broadcast camera source.',
        howToUse: {
            summary: 'Video capture.',
            implementation: ['Connect SDI/HDMI.', 'Encode.', 'Transmit.'],
            bestPractices: ['Signal integrity.', 'Backup power.', 'Tally light.']
        },
        connections: [{ target: 'elemental-link', purpose: 'Ingest', protocol: 'SDI', dataFlow: 'Outbound' }]
    },
    'satellite-uplink': {
        name: 'Sat Uplink',
        category: 'Media Services',
        description: 'Satellite uplink facility.',
        howToUse: {
            summary: 'Satellite transmission.',
            implementation: ['Modulate signal.', 'Amplify.', 'Transmit.'],
            bestPractices: ['Link budget.', 'Weather mitigation.', 'Regulatory compliance.']
        },
        connections: []
    },
    'edit-workstation': {
        name: 'Editing Station',
        category: 'Media Services',
        description: 'High-performance workstation for video editing.',
        howToUse: {
            summary: 'Edit video.',
            implementation: ['Install NLE.', 'Connect shared storage.', 'Edit.'],
            bestPractices: ['GPU acceleration.', 'Fast network.', 'Color calibration.']
        },
        connections: [{ target: 'media-store', purpose: 'Assets', protocol: 'SMB/NFS', dataFlow: 'Bidirectional' }]
    },
    'content-server': {
        name: 'Content Server',
        category: 'Media Services',
        description: 'Server to host media content.',
        howToUse: {
            summary: 'Serve content.',
            implementation: ['Store files.', 'Serve HTTP.', 'Cache.'],
            bestPractices: ['CDN integration.', 'High IOPS.', 'Redundancy.']
        },
        connections: []
    },

    // ==================== END USER COMPUTING COMPONENTS ====================

    'workspaces': {
        name: 'WorkSpaces',
        category: 'End User Computing',
        description: 'Fully managed, secure Desktop-as-a-Service (DaaS) solution.',
        howToUse: {
            summary: 'Virtual desktops.',
            implementation: ['Create directory.', 'Launch WorkSpaces.', 'Connect client.'],
            bestPractices: ['Custom images.', 'Multi-region.', 'MFA.']
        },
        connections: [{ target: 'directory-service', purpose: 'Auth', protocol: 'LDAP', dataFlow: 'Internal' }]
    },
    'app-stream': {
        name: 'AppStream 2.0',
        category: 'End User Computing',
        description: 'Fully managed non-persistent application and desktop streaming service.',
        howToUse: {
            summary: 'Stream apps.',
            implementation: ['Create image.', 'Create fleet.', 'Create stack.'],
            bestPractices: ['Home folders (S3).', 'Auto-scaling fleets.', 'Performance testing.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Persistence', protocol: 'S3 API', dataFlow: 'Bidirectional' }]
    },
    'worklink': {
        name: 'WorkLink',
        category: 'End User Computing',
        description: 'Secure, one-click access to your internal websites and web apps from mobile devices.',
        howToUse: {
            summary: 'Mobile intranet access.',
            implementation: ['Link IDP.', 'Assoc. domains.', 'Grant access.'],
            bestPractices: ['No VPN required.', 'Content rendering.', 'Audit logs.']
        },
        connections: []
    },
    'wam': {
        name: 'WAM',
        category: 'End User Computing',
        description: 'WorkSpaces Application Manager.',
        howToUse: {
            summary: 'Deploy apps to WorkSpaces.',
            implementation: ['Package app.', 'Upload to catalog.', 'Assign to users.'],
            bestPractices: ['Version control.', 'Subscription model.', 'Validate packages.']
        },
        connections: [{ target: 'workspaces', purpose: 'Installs apps', protocol: 'Internal', dataFlow: 'Outbound' }]
    },
    'docs-sdk': {
        name: 'Docs SDK',
        category: 'End User Computing',
        description: 'SDK for interacting with WorkDocs.',
        howToUse: {
            summary: 'WorkDocs integration.',
            implementation: ['Auth.', 'Upload/Download.', 'Search.'],
            bestPractices: ['Error handling.', 'Rate limiting.', 'User context.']
        },
        connections: []
    },
    'workspaces-web': {
        name: 'WorkSpace Web',
        category: 'End User Computing',
        description: 'Low-cost, fully managed workspace built specifically to facilitate secure access to internal websites and SaaS applications.',
        howToUse: {
            summary: 'Secure browser.',
            implementation: ['Create portal.', 'Configure network.', 'Policy settings.'],
            bestPractices: ['URL filtering.', 'User settings.', 'CloudWatch logging.']
        },
        connections: []
    },
    'desktop-client': {
        name: 'Desktop Client',
        category: 'End User Computing',
        description: 'Client software for accessing virtual desktops.',
        howToUse: {
            summary: 'Access VDI.',
            implementation: ['Install client.', 'Login.', 'Connect.'],
            bestPractices: ['Keep updated.', 'Optimize network.', 'Peripheral support.']
        },
        connections: [{ target: 'workspaces', purpose: 'Connects to', protocol: 'PCoIP/WSP', dataFlow: 'Outbound' }]
    },
    'virtual-desktop': {
        name: 'Virtual Desktop',
        category: 'End User Computing',
        description: 'Generic virtual desktop instance.',
        howToUse: {
            summary: 'Remote workspace.',
            implementation: ['Provision.', 'Assign user.', 'Manage.'],
            bestPractices: ['Resource allocation.', 'Patch management.', 'Security groups.']
        },
        connections: []
    },
    'thin-client': {
        name: 'Thin Client',
        category: 'End User Computing',
        description: 'Hardware functionality optimized for connecting to remote computing.',
        howToUse: {
            summary: 'Endpoint device.',
            implementation: ['Connect network.', 'Configure boot.', 'Connect VDI.'],
            bestPractices: ['Locked down OS.', 'Central management.', 'Security.']
        },
        connections: [{ target: 'workspaces', purpose: 'Connects to', protocol: 'PCoIP', dataFlow: 'Outbound' }]
    },
    'zero-client': {
        name: 'Zero Client',
        category: 'End User Computing',
        description: 'Ultra-thin client with no local OS.',
        howToUse: {
            summary: 'Secure endpoint.',
            implementation: ['Connect.', 'Auth.', 'Work.'],
            bestPractices: ['High security.', 'Low maintenance.', 'Performant.']
        },
        connections: [{ target: 'workspaces', purpose: 'Connects to', protocol: 'PCoIP', dataFlow: 'Outbound' }]
    },
    'mobile-workspace': {
        name: 'Mobile Wrkspc',
        category: 'End User Computing',
        description: 'Mobile access to workspace resources.',
        howToUse: {
            summary: 'Mobile productivity.',
            implementation: ['Install app.', 'Enroll device.', 'Access apps.'],
            bestPractices: ['Containerization.', 'Remote wipe.', 'Encryption.']
        },
        connections: []
    },
    'call-center-client': {
        name: 'Call Center',
        category: 'End User Computing',
        description: 'Client interface for call center agents.',
        howToUse: {
            summary: 'Agent desktop.',
            implementation: ['Login.', 'Receive calls.', 'CRM pop.'],
            bestPractices: ['Headset integration.', 'Low latency.', 'Single pane of glass.']
        },
        connections: [{ target: 'connect', purpose: 'Voice path', protocol: 'WebRTC', dataFlow: 'Bidirectional' }]
    },
    'remote-office': {
        name: 'Remote Office',
        category: 'End User Computing',
        description: 'Representation of a remote office location.',
        howToUse: {
            summary: 'Branch connectivity.',
            implementation: ['SD-WAN.', 'VPN.', 'Local services.'],
            bestPractices: ['Redundant links.', 'Local breakout.', 'Security appliance.']
        },
        connections: [{ target: 'site-to-site-vpn', purpose: 'Connectivity', protocol: 'IPsec', dataFlow: 'Bidirectional' }]
    },
    'home-office': {
        name: 'Home Office',
        category: 'End User Computing',
        description: 'Remote worker location.',
        howToUse: {
            summary: 'WFH setup.',
            implementation: ['VPN client.', 'VDI client.', 'Collaboration tools.'],
            bestPractices: ['Endpoint security.', 'Split tunneling.', 'Bandwidth awareness.']
        },
        connections: [{ target: 'client-vpn', purpose: 'Access', protocol: 'TLS', dataFlow: 'Bidirectional' }]
    },
    'print-server': {
        name: 'Print Server',
        category: 'End User Computing',
        description: 'Network print server.',
        howToUse: {
            summary: 'Manage printing.',
            implementation: ['Install drivers.', 'Share queues.', 'Audit jobs.'],
            bestPractices: ['Driver isolation.', 'Secure printing.', 'High availability.']
        },
        connections: []
    },
    'file-server': {
        name: 'File Server',
        category: 'End User Computing',
        description: 'Windows file server or similar.',
        howToUse: {
            summary: 'Shared storage.',
            implementation: ['Create shares.', 'Set permissions (ACLs).', 'Backup.'],
            bestPractices: ['DFS Namespace.', 'Shadow copies.', 'Quota management.']
        },
        connections: [{ target: 'directory-service', purpose: 'Auth', protocol: 'SMB', dataFlow: 'Inbound' }]
    },
    'identity-provider': {
        name: 'IdP',
        category: 'End User Computing',
        description: 'Identity Provider (e.g., AD, Okta).',
        howToUse: {
            summary: 'Auth source.',
            implementation: ['Sync users.', 'Federate.', 'MFA.'],
            bestPractices: ['SSO.', 'Conditional access.', 'Lifecycle mgmt.']
        },
        connections: [{ target: 'iam-role', purpose: 'Federation', protocol: 'SAML/OIDC', dataFlow: 'Outbound' }]
    },
    'mdm-server': {
        name: 'MDM',
        category: 'End User Computing',
        description: 'Mobile Device Management server.',
        howToUse: {
            summary: 'Manage devices.',
            implementation: ['Enroll protocols.', 'Push profiles.', 'Compliance check.'],
            bestPractices: ['BYOD vs Corp.', 'App store.', 'Remote commands.']
        },
        connections: []
    },
    'vdi-gateway': {
        name: 'VDI Gateway',
        category: 'End User Computing',
        description: 'Gateway for external VDI access.',
        howToUse: {
            summary: 'Secure access.',
            implementation: ['Place in DMZ.', 'Proxy connections.', 'MFA integration.'],
            bestPractices: ['Load balancing.', 'DDOS protection.', 'SSL offload.']
        },
        connections: [{ target: 'virtual-desktop', purpose: 'Proxy', protocol: 'PCoIP', dataFlow: 'Outbound' }]
    },
    'license-manager': {
        name: 'License Mgr',
        category: 'End User Computing',
        description: 'Service that makes it easier to manage licenses in AWS and on-premises servers from software vendors such as Microsoft, SAP, Oracle, and IBM.',
        howToUse: {
            summary: 'Track licenses.',
            implementation: ['Define rules.', 'Associate AMI.', 'Track usage.'],
            bestPractices: ['Enforce limits.', 'Dashboard reporting.', 'Audit readiness.']
        },
        connections: []
    },

    // ==================== MOBILE COMPONENTS ====================

    'mobile-analytics': {
        name: 'Analytics',
        category: 'Mobile',
        description: 'Service to collect, visualize, and understand app usage data.',
        howToUse: {
            summary: 'Track usage.',
            implementation: ['Initialize SDK.', 'Record events.', 'View dashboard.'],
            bestPractices: ['Custom dimensions.', 'Funnel analysis.', 'Retention tracking.']
        },
        connections: []
    },
    'device-farm-mobile': {
        name: 'Device Farm',
        category: 'Mobile',
        description: 'Test mobile apps on real devices.',
        howToUse: {
            summary: 'App testing.',
            implementation: ['Upload IPA/APK.', 'Select device pool.', 'Run tests.'],
            bestPractices: ['Parallel execution.', 'Video recording.', 'Logs analysis.']
        },
        connections: []
    },
    'mobile-hub': {
        name: 'Mobile Hub',
        category: 'Mobile',
        description: 'Integrated console for building mobile apps.',
        howToUse: {
            summary: 'Mobile backend.',
            implementation: ['Enable features.', 'Download config.', 'Integrate.'],
            bestPractices: ['Use Amplify instead.', 'Centralize config.', 'One-click deploy.']
        },
        connections: []
    },
    'app-sync-mobile': {
        name: 'AppSync',
        category: 'Mobile',
        description: 'GraphQL service for mobile apps.',
        howToUse: {
            summary: 'Data API.',
            implementation: ['Define schema.', 'Connect resolvers.', 'Query from app.'],
            bestPractices: ['Offline caching.', 'Real-time subs.', 'Auth modes.']
        },
        connections: [{ target: 'dynamodb', purpose: 'Data source', protocol: 'Internal', dataFlow: 'Bidirectional' }]
    },
    'amplify-mobile': {
        name: 'Amplify',
        category: 'Mobile',
        description: 'Development platform for building secure, scalable mobile and web applications.',
        howToUse: {
            summary: 'Build & Deploy.',
            implementation: ['amplify init.', 'amplify add api.', 'amplify push.'],
            bestPractices: ['Env management.', 'CI/CD.', 'DataStore sync.']
        },
        connections: [{ target: 'cognito', purpose: 'Auth', protocol: 'Internal', dataFlow: 'Outbound' }]
    },
    'pinpoint-mobile': {
        name: 'Pinpoint',
        category: 'Mobile',
        description: 'Engage customers across multiple channels.',
        howToUse: {
            summary: 'Push notifications.',
            implementation: ['Create project.', 'Integrate SDK.', 'Send campaign.'],
            bestPractices: ['Segment users.', 'Quiet hours.', 'Analytics.']
        },
        connections: [{ target: 'mobile-client', purpose: 'Notification', protocol: 'Push', dataFlow: 'Outbound' }]
    },
    'location-service': {
        name: 'Location',
        category: 'Mobile',
        description: 'Add location data to applications.',
        howToUse: {
            summary: 'Maps & Geofencing.',
            implementation: ['Create map resource.', 'Get credentials.', 'Render map.'],
            bestPractices: ['Cache tiles.', 'Geofence triggers.', 'Track assets.']
        },
        connections: []
    },
    'wa-tool': {
        name: 'WA Tool',
        category: 'Mobile',
        description: 'Workload analytics or similar tool for mobile.',
        howToUse: {
            summary: 'Analyze workload.',
            implementation: ['Connect source.', 'Analyze.', 'Report.'],
            bestPractices: ['Regular checks.', 'Optimization.', 'Security scan.']
        },
        connections: []
    },
    'game-spark': {
        name: 'GameSpark',
        category: 'Mobile',
        description: 'Backend-as-a-Service for games.',
        howToUse: {
            summary: 'Game backend.',
            implementation: ['Define events.', 'Write CloudCode.', 'Connect client.'],
            bestPractices: ['NoSQL data.', 'Real-time match.', 'Leaderboards.']
        },
        connections: []
    },
    'sns-mobile': {
        name: 'SNS Mobile',
        category: 'Mobile',
        description: 'Push notifications to mobile devices.',
        howToUse: {
            summary: 'Send push.',
            implementation: ['Create platform app.', 'Add endpoint.', 'Publish.'],
            bestPractices: ['Topic subscription.', 'Message attributes.', 'Delivery status.']
        },
        connections: [{ target: 'mobile-client', purpose: 'Push', protocol: 'Native', dataFlow: 'Outbound' }]
    },
    'worklink-mobile': {
        name: 'WorkLink',
        category: 'Mobile',
        description: 'Access internal web content.',
        howToUse: {
            summary: 'Secure browser access.',
            implementation: ['Link domains.', 'Auth provider.', 'Access.'],
            bestPractices: ['Audit access.', 'Optimize rendering.', 'User groups.']
        },
        connections: []
    },
    'honeycode-mobile': {
        name: 'Honeycode',
        category: 'Mobile',
        description: 'No-code mobile app builder.',
        howToUse: {
            summary: 'Build app.',
            implementation: ['Table design.', 'UI builder.', 'Share app.'],
            bestPractices: ['Simple workflows.', 'Team use.', 'Automated actions.']
        },
        connections: []
    },
    'chime-sdk': {
        name: 'Chime SDK',
        category: 'Mobile',
        description: 'Add audio, video, and screen sharing to your applications.',
        howToUse: {
            summary: 'Video calling.',
            implementation: ['Create meeting.', 'Join attendee.', 'Render video.'],
            bestPractices: ['Handle connectivity.', 'Device management.', 'Active speaker.']
        },
        connections: []
    },
    'ivs-mobile': {
        name: 'IVS Mobile',
        category: 'Mobile',
        description: 'Interactive low-latency live streaming.',
        howToUse: {
            summary: 'Watch stream.',
            implementation: ['Player SDK.', 'Load source.', 'Play.'],
            bestPractices: ['Adaptive quality.', 'Metadata handling.', 'Low latency.']
        },
        connections: []
    },
    'device-shadow': {
        name: 'Shadow',
        category: 'Mobile',
        description: 'JSON document representing the state of a device.',
        howToUse: {
            summary: 'Sync state.',
            implementation: ['Get shadow.', 'Update reported.', 'Listen for delta.'],
            bestPractices: ['Optimistic locking.', 'Minimize size.', 'Offline handling.']
        },
        connections: [{ target: 'iot-core', purpose: 'Stored in', protocol: 'MQTT', dataFlow: 'Bidirectional' }]
    },
    'iot-mobile': {
        name: 'IoT Mobile',
        category: 'Mobile',
        description: 'Mobile control for IoT.',
        howToUse: {
            summary: 'Control devices.',
            implementation: ['Connect MQTT/HTTP.', 'Auth via Cognito.', 'Publish commands.'],
            bestPractices: ['Fine-grained policy.', 'WebSocket.', 'Command ack.']
        },
        connections: [{ target: 'iot-core', purpose: 'Control', protocol: 'MQTT', dataFlow: 'Bidirectional' }]
    },
    'freertos-mobile': {
        name: 'FreeRTOS Mob',
        category: 'Mobile',
        description: 'Mobile SDK for FreeRTOS Bluetooth/BLE.',
        howToUse: {
            summary: 'Local control.',
            implementation: ['Scan BLE.', 'Connect.', 'Proxy MQTT.'],
            bestPractices: ['BLE security.', 'Power management.', 'Pairing flow.']
        },
        connections: []
    },
    'greengrass-mobile': {
        name: 'GG Mobile',
        category: 'Mobile',
        description: 'Interact with local Greengrass core.',
        howToUse: {
            summary: 'Local edge access.',
            implementation: ['Discovery API.', 'Connect local IP.', 'MQTTS.'],
            bestPractices: ['Cert management.', 'Local fallback.', 'Sync logic.']
        },
        connections: []
    },
    'lambda-mobile': {
        name: 'Lambda Mob',
        category: 'Mobile',
        description: 'Mobile backend logic execution.',
        howToUse: {
            summary: 'Serverless backend.',
            implementation: ['Invoke API.', 'Execute logic.', 'Return result.'],
            bestPractices: ['Cold starts.', 'Input validation.', 'Async processing.']
        },
        connections: [{ target: 'dynamodb', purpose: 'CRUD', protocol: 'Internal', dataFlow: 'Bidirectional' }]
    },

    // ==================== BLOCKCHAIN COMPONENTS ====================

    'managed-blockchain': {
        name: 'Managed Blockchain',
        category: 'Blockchain',
        description: 'Fully managed service for creating and managing scalable blockchain networks.',
        howToUse: {
            summary: 'Create network.',
            implementation: ['Select framework (Hyperledger/Ethereum).', 'Create network.', 'Invite members.'],
            bestPractices: ['VPC endpoint.', 'Member policies.', 'Voting rules.']
        },
        connections: []
    },
    'qldb': {
        name: 'QLDB',
        category: 'Blockchain',
        description: 'Fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log.',
        howToUse: {
            summary: 'Immutable ledger.',
            implementation: ['Create ledger.', 'Insert document.', 'Verify history.'],
            bestPractices: ['Index creation.', 'PartiQL queries.', 'Digest verification.']
        },
        connections: []
    },
    'crypto-wallet': {
        name: 'Wallet',
        category: 'Blockchain',
        description: 'Digital wallet to manage keys and sign transactions.',
        howToUse: {
            summary: 'Manage keys.',
            implementation: ['Generate keys.', 'Sign transaction.', 'Broadcast.'],
            bestPractices: ['Cold storage.', 'Multi-sig.', 'Key rotation.']
        },
        connections: [{ target: 'blockchain-network', purpose: 'Submit tx', protocol: 'P2P', dataFlow: 'Outbound' }]
    },
    'blockchain-network': {
        name: 'Network',
        category: 'Blockchain',
        description: 'P2P network of blockchain nodes.',
        howToUse: {
            summary: 'Consensus layer.',
            implementation: ['Join network.', 'Sync chain.', 'Validate blocks.'],
            bestPractices: ['Peer discovery.', 'Firewall rules.', 'Bandwidth limits.']
        },
        connections: []
    },
    'token-service': {
        name: 'Token Service',
        category: 'Blockchain',
        description: 'Service to issue and manage tokens.',
        howToUse: {
            summary: 'Token management.',
            implementation: ['Define token standard.', 'Mint.', 'Transfer.'],
            bestPractices: ['Smart contract audit.', 'Access control.', 'Gas optimization.']
        },
        connections: []
    },
    'smart-contract': {
        name: 'Smart Contract',
        category: 'Blockchain',
        description: 'Self-executing contract with the terms of the agreement directly written into code.',
        howToUse: {
            summary: 'On-chain logic.',
            implementation: ['Write Solidity/Chaincode.', 'Compile.', 'Deploy.'],
            bestPractices: ['Security checks.', 'Event emission.', 'Upgradability.']
        },
        connections: [{ target: 'ledger-db', purpose: 'State update', protocol: 'Internal', dataFlow: 'Outbound' }]
    },
    'ledger-db': {
        name: 'Ledger DB',
        category: 'Blockchain',
        description: 'The underlying database of the blockchain.',
        howToUse: {
            summary: 'Store state.',
            implementation: ['Write block.', 'Update world state.', 'Read.'],
            bestPractices: ['Pruning.', 'Snapshotting.', 'Indexing.']
        },
        connections: []
    },
    'member': {
        name: 'Member',
        category: 'Blockchain',
        description: 'A participating organization in the network.',
        howToUse: {
            summary: 'Network participant.',
            implementation: ['Create member.', 'Join channel.', 'Endorse tx.'],
            bestPractices: ['Identity isolation.', 'Resource limits.', 'High availability.']
        },
        connections: []
    },
    'peer-node': {
        name: 'Peer Node',
        category: 'Blockchain',
        description: 'Node that maintains the ledger and runs chaincode.',
        howToUse: {
            summary: 'Ledger maintainer.',
            implementation: ['Provision node.', 'Join channel.', 'Install chaincode.'],
            bestPractices: ['Storage scaling.', 'Gossip config.', 'Anchor peers.']
        },
        connections: [{ target: 'orderer', purpose: 'Submit tx', protocol: 'gRPC', dataFlow: 'Outbound' }]
    },
    'orderer': {
        name: 'Orderer',
        category: 'Blockchain',
        description: 'Service that packages transactions into blocks.',
        howToUse: {
            summary: 'Order transactions.',
            implementation: ['Receive txs.', 'Order them.', 'Deliver blocks.'],
            bestPractices: ['Raft consensus.', 'TLS security.', 'Batch size tuning.']
        },
        connections: [{ target: 'peer-node', purpose: 'Deliver blocks', protocol: 'gRPC', dataFlow: 'Outbound' }]
    },
    'ca-service': {
        name: 'CA Service',
        category: 'Blockchain',
        description: 'Certificate Authority for blockchain identity.',
        howToUse: {
            summary: 'Issue certs.',
            implementation: ['Register user.', 'Enroll.', 'Revoke.'],
            bestPractices: ['Root CA security.', 'Intermediate CAs.', 'MSP structure.']
        },
        connections: []
    },
    'fabric-client': {
        name: 'Fabric Client',
        category: 'Blockchain',
        description: 'Client SDK for Hyperledger Fabric.',
        howToUse: {
            summary: 'Interact with Fabric.',
            implementation: ['Connect gateway.', 'Submit transaction.', 'Evaluate transaction.'],
            bestPractices: ['Connection profiles.', 'Wallet management.', 'Event listeners.']
        },
        connections: [{ target: 'peer-node', purpose: 'Evaluate', protocol: 'gRPC', dataFlow: 'Bidirectional' }]
    },
    'ethereum-client': {
        name: 'Eth Client',
        category: 'Blockchain',
        description: 'Client for Ethereum network.',
        howToUse: {
            summary: 'Connect to Eth.',
            implementation: ['JSON-RPC provider.', 'Sign tx.', 'Call contract.'],
            bestPractices: ['Gas estimation.', 'Nonce management.', 'Infura/Alchemy usage.']
        },
        connections: [{ target: 'blockchain-network', purpose: 'RPC', protocol: 'JSON-RPC', dataFlow: 'Bidirectional' }]
    },
    'corda-client': {
        name: 'Corda Client',
        category: 'Blockchain',
        description: 'Client for R3 Corda.',
        howToUse: {
            summary: 'Connect to Corda.',
            implementation: ['RPC connection.', 'Start flow.', 'Query vault.'],
            bestPractices: ['Flow checkpoints.', 'Notary selection.', 'Secure RPC.']
        },
        connections: []
    },
    'hyperledger': {
        name: 'Hyperledger',
        category: 'Blockchain',
        description: 'Hyperledger framework component.',
        howToUse: {
            summary: 'Enterprise blockchain.',
            implementation: ['Configure policy.', 'Deploy chaincode.', 'Transact.'],
            bestPractices: ['Private data collections.', 'Endorsement policies.', 'Channel isolation.']
        },
        connections: []
    },
    'hash-function': {
        name: 'Hashing',
        category: 'Blockchain',
        description: 'Cryptographic hash function.',
        howToUse: {
            summary: 'Data fingerprint.',
            implementation: ['Hash data.', 'Verify hash.', 'Merkle tree.'],
            bestPractices: ['SHA-256.', 'Salted hashes.', 'Collision resistance.']
        },
        connections: []
    },
    'block-explorer': {
        name: 'Explorer',
        category: 'Blockchain',
        description: 'Tool to view blocks and transactions.',
        howToUse: {
            summary: 'View chain data.',
            implementation: ['Index chain.', 'Query block.', 'Visualize.'],
            bestPractices: ['Real-time updates.', 'Search index.', 'API access.']
        },
        connections: [{ target: 'blockchain-network', purpose: 'Sync', protocol: 'P2P', dataFlow: 'Inbound' }]
    },
    'mining-node': {
        name: 'Miner',
        category: 'Blockchain',
        description: 'Node that performs mining (PoW).',
        howToUse: {
            summary: 'Secure network.',
            implementation: ['Calculate hash.', 'Find nonce.', 'Propose block.'],
            bestPractices: ['Hardware efficiency.', 'Pool mining.', 'Cooling.']
        },
        connections: []
    },
    'consensus-algo': {
        name: 'Consensus',
        category: 'Blockchain',
        description: 'Algorithm to agree on state.',
        howToUse: {
            summary: 'Reach agreement.',
            implementation: ['PoW/PoS/Raft.', 'Vote.', 'Commit.'],
            bestPractices: ['Fault tolerance.', 'Finality.', 'Throughput.']
        },
        connections: []
    },
    'dapp': {
        name: 'DApp',
        category: 'Blockchain',
        description: 'Decentralized Application.',
        howToUse: {
            summary: 'Web3 App.',
            implementation: ['Web3 provider.', 'Smart contract interaction.', 'IPFS storage.'],
            bestPractices: ['User experience.', 'Wallet connect.', 'Gas transparency.']
        },
        connections: [{ target: 'blockchain-network', purpose: 'Backend', protocol: 'RPC', dataFlow: 'Bidirectional' }]
    },

    // ==================== SATELLITE COMPONENTS ====================

    'ground-station': {
        name: 'Ground Station',
        category: 'Satellite',
        description: 'Fully managed service that lets you control satellite communications, process data, and scale your operations.',
        howToUse: {
            summary: 'Sat comms.',
            implementation: ['Onboard satellite.', 'Schedule contact.', 'Receive data.'],
            bestPractices: ['Cross-region contacts.', 'Wideband processing.', 'Real-time delivery.']
        },
        connections: [{ target: 's3-bucket', purpose: 'Data delivery', protocol: 'S3 API', dataFlow: 'Outbound' }]
    },
    'uplink': {
        name: 'Uplink',
        category: 'Satellite',
        description: 'Signal transmission from ground to satellite.',
        howToUse: {
            summary: 'Send commands.',
            implementation: ['Configure antenna.', 'Modulate signal.', 'Transmit.'],
            bestPractices: ['Link budget analysis.', 'Frequency coordination.', 'High power amp.']
        },
        connections: []
    },
    'downlink': {
        name: 'Downlink',
        category: 'Satellite',
        description: 'Signal reception from satellite to ground.',
        howToUse: {
            summary: 'Receive telemetry.',
            implementation: ['Track satellite.', 'Demodulate.', 'Decode.'],
            bestPractices: ['Low noise amplifier.', 'Error correction.', 'Data storage.']
        },
        connections: []
    },
    'mission-profile': {
        name: 'Mission Profile',
        category: 'Satellite',
        description: 'Configuration for satellite contacts.',
        howToUse: {
            summary: 'Define contact params.',
            implementation: ['Set frequency.', 'Set duration.', 'Set endpoint.'],
            bestPractices: ['Reuse profiles.', 'Validate config.', 'Monitor status.']
        },
        connections: []
    },
    'satellite-contact': {
        name: 'Contact',
        category: 'Satellite',
        description: 'Scheduled communication time with a satellite.',
        howToUse: {
            summary: 'Talk to sat.',
            implementation: ['Reserve window.', 'Execute pass.', 'Review logs.'],
            bestPractices: ['Priority scheduling.', 'Conflict resolution.', 'Automated retries.']
        },
        connections: []
    },
    'rf-signal': {
        name: 'RF Signal',
        category: 'Satellite',
        description: 'Radio Frequency signal data.',
        howToUse: {
            summary: 'Raw RF data.',
            implementation: ['Digitize signal.', 'Stream VITA 49.', 'Process via SDR.'],
            bestPractices: ['High bandwidth network.', 'Efficient storage.', 'Spectral analysis.']
        },
        connections: []
    },
    'space-image': {
        name: 'Space Image',
        category: 'Satellite',
        description: 'Earth observation imagery.',
        howToUse: {
            summary: 'Process imagery.',
            implementation: ['Ingest TIFF.', 'Tile.', 'Analyze.'],
            bestPractices: ['Cloud-optimized GeoTIFF.', 'Metadata catalog.', 'ML inference.']
        },
        connections: [{ target: 'rekognition', purpose: 'Analysis', protocol: 'API', dataFlow: 'Outbound' }]
    },

    'ios-client': {
        name: 'iOS App',
        category: 'Mobile',
        description: 'Native iOS mobile application.',
        howToUse: { summary: 'Native Apple experience.', implementation: ['Swift/Objective-C.', 'App Store distribution.'], bestPractices: ['Human Interface Guidelines.'] },
        connections: []
    },
    'android-client': {
        name: 'Android App',
        category: 'Mobile',
        description: 'Native Android mobile application.',
        howToUse: { summary: 'Native Android experience.', implementation: ['Kotlin/Java.', 'Play Store distribution.'], bestPractices: ['Material Design.'] },
        connections: []
    },
    'react-native': {
        name: 'React Native',
        category: 'Mobile',
        description: 'Cross-platform mobile application using React.',
        howToUse: { summary: 'Single codebase for iOS/Android.', implementation: ['JavaScript/React.'], bestPractices: ['Native modules for performance.'] },
        connections: []
    },
    'flutter-app': {
        name: 'Flutter App',
        category: 'Mobile',
        description: 'Cross-platform mobile application using Flutter.',
        howToUse: { summary: 'Fast UI development.', implementation: ['Dart/Flutter.'], bestPractices: ['Widget-based design.'] },
        connections: []
    },
    'push-notif': {
        name: 'Push Notifications',
        category: 'Mobile',
        description: 'Services for sending push notifications to mobile devices.',
        howToUse: { summary: 'Real-time engagement.', implementation: ['FCM/APNs integration.'], bestPractices: ['User opt-in.', 'Non-intrusive.'] },
        connections: []
    },
    'in-app-msg': {
        name: 'In-App Messaging',
        category: 'Mobile',
        description: 'Send messages directly to users while they are using your app.',
        howToUse: { summary: 'Engagement while active.', implementation: ['Campaign triggers.'], bestPractices: ['Contextual messages.'] },
        connections: []
    },
    'mobile-auth': {
        name: 'Mobile Auth',
        category: 'Mobile',
        description: 'Authentication services optimized for mobile apps.',
        howToUse: { summary: 'Secure mobile login.', implementation: ['OAuth/OIDC.', 'Biometrics.'], bestPractices: ['Secure token storage.'] },
        connections: []
    },
    'offline-sync': {
        name: 'Offline Sync',
        category: 'Mobile',
        description: 'Synchronize data when the device is offline.',
        howToUse: { summary: 'Sync local changes.', implementation: ['Local DB.', 'Conflict resolution.'], bestPractices: ['Graceful degradation.'] },
        connections: []
    },
    'crashlines': {
        name: 'Crash Reporting',
        category: 'Mobile',
        description: 'Monitor and fix mobile application crashes.',
        howToUse: { summary: 'Detect app crashes.', implementation: ['Install SDK.'], bestPractices: ['Stack trace analysis.'] },
        connections: []
    },
    'test-lab': {
        name: 'Test Lab',
        category: 'Mobile',
        description: 'Test your mobile app on a wide range of devices.',
        howToUse: { summary: 'Automated device testing.', implementation: ['Upload APK/IPA.'], bestPractices: ['Real device testing.'] },
        connections: []
    },
    'feature-flag': {
        name: 'Feature Flags',
        category: 'Mobile',
        description: 'Enable or disable features without redeploying code.',
        howToUse: { summary: 'Roll out features safely.', implementation: ['Conditional logic.'], bestPractices: ['Kill switches.'] },
        connections: []
    },
    'mobile-api': {
        name: 'Mobile API',
        category: 'Mobile',
        description: 'Backend APIs tailored for mobile clients.',
        howToUse: { summary: 'Mobile-specific endpoints.', implementation: ['GraphQL/REST.'], bestPractices: ['Payload optimization.'] },
        connections: []
    },

    'miner': {
        name: 'Blockchain Miner',
        category: 'Blockchain',
        description: 'Resource dedicated to mining and validating new blocks.',
        howToUse: { summary: 'Secure the network.', implementation: ['Proof of Work.', 'GPU/ASIC.'], bestPractices: ['High efficiency.'] },
        connections: []
    },
    'wallet': {
        name: 'Crypto Wallet',
        category: 'Blockchain',
        description: 'Infrastructure for managing cryptographic keys and digital assets.',
        howToUse: { summary: 'Manage digital assets.', implementation: ['BIP-32.', 'Multi-sig.'], bestPractices: ['Cold storage keys.'] },
        connections: []
    },
    'token': {
        name: 'Digital Token',
        category: 'Blockchain',
        description: 'Programmable digital asset (ERC-20, etc.) on a blockchain.',
        howToUse: { summary: 'Define asset value.', implementation: ['Smart contracts.'], bestPractices: ['Security audits.'] },
        connections: []
    },
    'ledger': {
        name: 'Immutable Ledger',
        category: 'Blockchain',
        description: 'The distributed database of transaction records.',
        howToUse: { summary: 'Record transactions.', implementation: ['Chain of blocks.'], bestPractices: ['Public vs Private.'] },
        connections: []
    },
    'crypto-network': {
        name: 'Blockchain Network',
        category: 'Blockchain',
        description: 'The peer-to-peer network infrastructure.',
        howToUse: { summary: 'P2P communication.', implementation: ['Gossip protocol.'], bestPractices: ['Decentralization.'] },
        connections: []
    },
    'membership': {
        name: 'Membership Service',
        category: 'Blockchain',
        description: 'Controls identity and access within a permissioned blockchain.',
        howToUse: { summary: 'Identity management.', implementation: ['PKI.', 'CA.'], bestPractices: ['Role-based access.'] },
        connections: []
    },
    'proposal': {
        name: 'Governance Proposal',
        category: 'Blockchain',
        description: 'Formal proposal for changes to the blockchain protocol or state.',
        howToUse: { summary: 'On-chain governance.', implementation: ['Voting contracts.'], bestPractices: ['Transparency.'] },
        connections: []
    },
    'ethereum-node': {
        name: 'Ethereum Node',
        category: 'Blockchain',
        description: 'Full or light node for the Ethereum network.',
        howToUse: { summary: 'Connect to Ethereum.', implementation: ['Geth/Besu.'], bestPractices: ['Regular sync.'] },
        connections: []
    },
    'fabric-ca': {
        name: 'Fabric CA',
        category: 'Blockchain',
        description: 'Certificate Authority for Hyperledger Fabric.',
        howToUse: { summary: 'Issue certificates.', implementation: ['Enrollment.'], bestPractices: ['Secure root CA.'] },
        connections: []
    },

    'satellite': {
        name: 'Ground Station',
        category: 'Satellite',
        description: 'Communicate with satellites in orbit.',
        howToUse: { summary: 'Downlink data.', implementation: ['Antenna setup.'], bestPractices: ['Contact planning.'] },
        connections: []
    },
    'antenna': {
        name: 'Antenna',
        category: 'Satellite',
        description: 'Physical antenna for satellite communication.',
        howToUse: { summary: 'RF communication.' },
        connections: []
    },
    'orbital-data': {
        name: 'Orbital Data',
        category: 'Satellite',
        description: 'Data gathered from satellites in orbit.',
        howToUse: { summary: 'Space-based insights.' },
        connections: []
    },



    'jamstack': {
        name: 'Jamstack',
        category: 'Frontend',
        description: 'Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.',
        howToUse: { summary: 'Fast, secure sites.', implementation: ['SSG.', 'Decoupled API.'], bestPractices: ['Edge delivery.'] },
        connections: []
    },
    'websocket': {
        name: 'WebSocket',
        category: 'Networking',
        description: 'Bi-directional communication over a single TCP connection.',
        howToUse: { summary: 'Real-time features.', implementation: ['WS/WSS.', 'Event-driven.'], bestPractices: ['Scaling with Pub/Sub.'] },
        connections: []
    },
    'webrtc': {
        name: 'WebRTC',
        category: 'Networking',
        description: 'Real-time communication for web browsers and mobile apps.',
        howToUse: { summary: 'P2P media stream.', implementation: ['ICE/STUN/TURN.'], bestPractices: ['Secure signaling.'] },
        connections: []
    },
    'html5': {
        name: 'HTML5',
        category: 'Frontend',
        description: 'The latest evolution of the standard that defines HTML.',
        howToUse: { summary: 'Web standards.', bestPractices: ['Semantic HTML.'] },
        connections: []
    },

    'gamelift': {
        name: 'GameLift',
        category: 'Game Tech',
        description: 'Managed service for deploying, operating, and scaling dedicated game servers.',
        howToUse: {
            summary: 'Host game servers.',
            implementation: ['Upload build.', 'Create fleet.', 'Create queue.'],
            bestPractices: ['Spot instances.', 'FlexMatch integration.', 'Multi-region.']
        },
        connections: [{ target: 'ec2-instance', purpose: 'Running on', protocol: 'Internal', dataFlow: 'Bidirectional' }]
    },
    'lumberyard': {
        name: 'Open 3D',
        category: 'Game Tech',
        description: 'Open source real-time 3D engine.',
        howToUse: {
            summary: 'Ensure rendering.',
            implementation: ['Integrate engine.', 'Build assets.', 'Deploy.'],
            bestPractices: ['Cloud gems.', 'Script canvas.', 'Cinematics.']
        },
        connections: []
    },
    'game-kit': {
        name: 'GameKit',
        category: 'Game Tech',
        description: 'AWS GameKit involves tools to deploy and manage game backend features.',
        howToUse: {
            summary: 'Game backend.',
            implementation: ['Select features.', 'Deploy from engine.', 'Monitor.'],
            bestPractices: ['Identity.', 'Achievements.', 'Game state.']
        },
        connections: []
    },
    'game-server': {
        name: 'Game Server',
        category: 'Game Tech',
        description: 'Dedicated game server process.',
        howToUse: {
            summary: 'Game logic host.',
            implementation: ['Run executable.', 'Listen on port.', 'Sync state.'],
            bestPractices: ['Tick rate optimization.', 'UDP protocol.', 'State replication.']
        },
        connections: []
    },
    'matchmaking': {
        name: 'Matchmaking',
        category: 'Game Tech',
        description: 'Service to pair players for gaming sessions.',
        howToUse: {
            summary: 'Find players.',
            implementation: ['Define rules.', 'Create ticket.', 'Place match.'],
            bestPractices: ['Latency-based.', 'Skill-based.', 'Backfill.']
        },
        connections: [{ target: 'gamelift', purpose: 'Placement', protocol: 'Internal', dataFlow: 'Outbound' }]
    },
    'leaderboard': {
        name: 'Leaderboard',
        category: 'Game Tech',
        description: 'Rank players based on scores.',
        howToUse: {
            summary: 'Track rankings.',
            implementation: ['Submit score.', 'Get rank.', 'Reset periodically.'],
            bestPractices: ['Redis (ElastiCache).', 'Partitioning.', 'Anti-cheat.']
        },
        connections: []
    },
    'player-data': {
        name: 'Player Data',
        category: 'Game Tech',
        description: 'Persistent storage for player profiles and inventory.',
        howToUse: {
            summary: 'Save progress.',
            implementation: ['Read profile.', 'Update inventory.', 'Save state.'],
            bestPractices: ['DynamoDB usage.', 'Atomic counters.', 'Eventually consistent.']
        },
        connections: [{ target: 'dynamodb', purpose: 'Storage', protocol: 'Internal', dataFlow: 'Bidirectional' }]
    },
    'game-analytics': {
        name: 'Game Analytics',
        category: 'Game Tech',
        description: 'Analyze player behavior and game performance.',
        howToUse: {
            summary: 'Insight stats.',
            implementation: ['Send telemetry.', 'Aggregate.', 'Visualize.'],
            bestPractices: ['Kinesis ingestion.', 'Custom metrics.', 'Retention policy.']
        },
        connections: []
    },
    'session-mgr': {
        name: 'Session Mgr',
        category: 'Game Tech',
        description: 'Manage game sessions.',
        howToUse: {
            summary: 'Active sessions.',
            implementation: ['Create session.', 'Join player.', 'End session.'],
            bestPractices: ['Timeout handling.', 'Reconnection logic.', 'State persistence.']
        },
        connections: []
    },
    'game-sec': {
        name: 'Game Sec',
        category: 'Game Tech',
        description: 'Security for games (anti-cheat, DDoS).',
        howToUse: {
            summary: 'Protect game.',
            implementation: ['Shield Advanced.', 'WAF.', 'Custom logic.'],
            bestPractices: ['Packet encryption.', 'Auth tokens.', 'Rate limiting.']
        },
        connections: []
    },
    'voice-chat': {
        name: 'Voice Chat',
        category: 'Game Tech',
        description: 'In-game voice communication.',
        howToUse: {
            summary: 'Talk to players.',
            implementation: ['Vivox/Chime.', 'Join channel.', 'Positional audio.'],
            bestPractices: ['Echo cancellation.', 'Bandwidth optimization.', 'Moderation.']
        },
        connections: []
    },

    // ==================== MANAGEMENT & GOVERNANCE COMPONENTS ====================

    'organizations': {
        name: 'Organizations',
        category: 'Management',
        description: 'Policy-based management for multiple AWS accounts.',
        howToUse: {
            summary: 'Central management.',
            implementation: ['Create org.', 'Invite accounts.', 'Apply SCPs.'],
            bestPractices: ['Service Control Policies.', 'Consolidated billing.', 'OU structure.']
        },
        connections: []
    },
    'control-tower': {
        name: 'Control Tower',
        category: 'Management',
        description: 'Easiest way to set up and govern a secure, multi-account AWS environment.',
        howToUse: {
            summary: 'Landing Zone.',
            implementation: ['Deploy landing zone.', 'Enroll accounts.', 'Guardrails.'],
            bestPractices: ['Preventative controls.', 'Detective controls.', 'Account factory.']
        },
        connections: [{ target: 'organizations', purpose: 'Manages', protocol: 'Internal', dataFlow: 'Outbound' }]
    },
    'trusted-advisor': {
        name: 'Trusted Advisor',
        category: 'Management',
        description: 'Optimize AWS infrastructure, increase security and performance, reduce costs.',
        howToUse: {
            summary: 'Best practices check.',
            implementation: ['Run checks.', 'Review recommendations.', 'Remediate.'],
            bestPractices: ['Cost optimization.', 'Security gaps.', 'Service limits.']
        },
        connections: []
    },
    'well-architected': {
        name: 'Well Architected',
        category: 'Management',
        description: 'Learn, measure, and build using architectural best practices.',
        howToUse: {
            summary: 'Review architecture.',
            implementation: ['Define workload.', 'Answer questions.', 'View report.'],
            bestPractices: ['6 Pillars.', 'Regular reviews.', 'Milestone tracking.']
        },
        connections: []
    },
    'service-catalog': {
        name: 'Service Catalog',
        category: 'Management',
        description: 'Create and manage catalogs of IT services that are approved for use on AWS.',
        howToUse: {
            summary: 'Self-service IT.',
            implementation: ['Create portfolio.', 'Add product.', 'Grant access.'],
            bestPractices: ['Standardized templates.', 'Tag enforcement.', 'Launch constraints.']
        },
        connections: [{ target: 'cloudformation', purpose: 'Deploys', protocol: 'Internal', dataFlow: 'Outbound' }]
    },
    'health-dashboard': {
        name: 'Health Dashboard',
        category: 'Management',
        description: 'View the status of AWS services and your personal health events.',
        howToUse: {
            summary: 'Service health.',
            implementation: ['Check dashboard.', 'Set alerts (EventBridge).', 'Plan maintenance.'],
            bestPractices: ['Automated remediation.', 'Slack notifications.', 'Account-specific view.']
        },
        connections: []
    },
    'support-center': {
        name: 'Support',
        category: 'Management',
        description: 'AWS Support Center.',
        howToUse: {
            summary: 'Get help.',
            implementation: ['Open case.', 'Chat support.', 'Read docs.'],
            bestPractices: ['Business plan.', 'Enterprise support.', 'Case severity.']
        },
        connections: []
    },
    'marketplace': {
        name: 'Marketplace',
        category: 'Management',
        description: 'Digital catalog to find, buy, deploy, and manage third-party software.',
        howToUse: {
            summary: 'Buy software.',
            implementation: ['Search.', 'Subscribe.', 'Launch.'],
            bestPractices: ['Private offers.', 'AMI/SaaS.', 'Cost management.']
        },
        connections: []
    },
    'systems-manager': {
        name: 'Systems Manager',
        category: 'Management',
        description: 'Centralized visibility and control of your AWS environment.',
        howToUse: {
            summary: 'Ops hub.',
            implementation: ['Install agent.', 'Run command.', 'Patch manager.'],
            bestPractices: ['Session Manager (no SSH).', 'Parameter Store.', 'Automation docs.']
        },
        connections: [{ target: 'ec2-instance', purpose: 'Manages', protocol: 'Agent', dataFlow: 'Bidirectional' }]
    },
    'opsworks': {
        name: 'OpsWorks',
        category: 'Management',
        description: 'Configuration management service using Chef or Puppet.',
        howToUse: {
            summary: 'Config management.',
            implementation: ['Create stack.', 'Add layer.', 'Add instance.'],
            bestPractices: ['Lifecycle events.', 'Custom recipes.', 'Load based scaling.']
        },
        connections: []
    },
    'managed-services': {
        name: 'Managed Services',
        category: 'Management',
        description: 'Infrastructure operations management for AWS.',
        howToUse: {
            summary: 'Outsource ops.',
            implementation: ['Onboard account.', 'Request change.', 'Incidents handled.'],
            bestPractices: ['ITIL process.', 'Change management.', 'Security monitoring.']
        },
        connections: []
    },
    'console-mobile': {
        name: 'Console App',
        category: 'Management',
        description: 'AWS Console Mobile Application.',
        howToUse: {
            summary: 'Mobile monitoring.',
            implementation: ['Install app.', 'Auth.', 'View resources.'],
            bestPractices: ['MFA.', 'Read-only access.', 'Alarm checks.']
        },
        connections: []
    },
    'chat-ops': {
        name: 'ChatOps',
        category: 'Management',
        description: 'Chat-based operations collaboration.',
        howToUse: {
            summary: 'Chat commands.',
            implementation: ['Connect Slack/Teams.', 'AWS Chatbot.', 'Run commands.'],
            bestPractices: ['Approval workflows.', 'Notification filtering.', 'Audit logs.']
        },
        connections: [{ target: 'chatbot', purpose: 'Integration', protocol: 'HTTPS', dataFlow: 'Bidirectional' }]
    },
    'auto-scaling': {
        name: 'Auto Scaling',
        category: 'Management',
        description: 'Application Auto Scaling monitors your applications and automatically adjusts capacity.',
        howToUse: {
            summary: 'Scale resources.',
            implementation: ['Define policy.', 'Set targets.', 'Monitor scaling.'],
            bestPractices: ['Target tracking.', 'Step scaling.', 'Predictive scaling.']
        },
        connections: [{ target: 'ec2-instance', purpose: 'Scales', protocol: 'Internal', dataFlow: 'Outbound' }]
    },
    'directory-svc': {
        name: 'Directory Service',
        category: 'Identity',
        description: 'Managed Microsoft Active Directory in the cloud.',
        howToUse: { summary: 'Managed AD.', implementation: ['Setup directory.', 'Join instances.'], bestPractices: ['Trust relationships.'] },
        connections: []
    },
    'sso-portal': {
        name: 'SSO Portal',
        category: 'Identity',
        description: 'Single Sign-On portal for user access.',
        howToUse: { summary: 'User launchpad.', implementation: ['Configure portal.', 'Assign apps.'], bestPractices: ['MFA for portal.'] },
        connections: []
    },
    'user-profile': {
        name: 'User Profile',
        category: 'Identity',
        description: 'Store and manage user profile data.',
        howToUse: { summary: 'Manage user data.', implementation: ['Cognito attributes.'], bestPractices: ['Consent management.'] },
        connections: []
    },
    'mobile-analytics-new': {
        name: 'Mobile Analytics',
        category: 'Mobile',
        description: 'Measure app usage and revenue.',
        howToUse: { summary: 'Analyze mobile usage.', implementation: ['Install SDK.'], bestPractices: ['Event tracking.', 'Funnel analysis.'] },
        connections: []
    }
};

// Helper function to get enhancement data for a component
export const getEnhancement = (componentId) => {
    return iconEnhancements[componentId] || {
        name: 'Unknown Component',
        category: 'Generic',
        description: 'Detailed documentation is not yet available for this component.',
        howToUse: {
            summary: 'N/A',
            implementation: [],
            bestPractices: []
        },
        connections: []
    };
};
