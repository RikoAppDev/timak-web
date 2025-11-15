import type { TeamMember, ProjectLog } from '~/types';

export const teamMembers: TeamMember[] = [
    {
        id: 7,
        name: "Abd Alrahman Saleh",
        role: "Senior Software Engineer, PhD Student",
        specialization: "JS/TS Expert, Angular Aficionado, Frontend Architect, Information Security, Applied Informatics",
        bio: "Senior Software Engineer at Siemens Healthineers, PhD student focusing on cybersecurity in banking sector, co-founder of NorthExcel, experienced in software engineering and teaching in cryptography and cybersecurity.",
        image: "/images/abdo.jpeg",
        email: "quantumleapcrew@gmail.com",
        github: null,
        linkedIn: "https://www.linkedin.com/in/abdo-saleh",
        skills: ["TypeScript", "Angular", "Frontend Architecture", "Information Security", "Cryptography"]
    },
    {
        id: 8,
        name: "Tomáš Šefčovič",
        role: "Senior Technical Solution Lead, IT Director",
        specialization: "Event Streaming, Cloud Architecture, Payment Systems, Scalable FinTech Solutions",
        bio: "Senior Technical Solution Lead and IT Director with expertise in event streaming, cloud architecture, and payment systems. Leading scalable FinTech projects with strong focus on technical strategy and innovation.",
        image: "/images/tomas.jpeg",
        email: "quantumleapcrew@gmail.com",
        github: null,
        linkedIn: "https://www.linkedin.com/in/sefcovict",
        skills: ["Event Streaming", "Cloud Architecture", "Payment Systems", "FinTech", "Technical Leadership"]
    },
    {
        id: 9,
        name: "Matej Lipták",
        role: "Co-founder & CEO",
        specialization: "Startup Leadership, Business Development, Strategic Management, Marketing, International Trade",
        bio: "Ambitious leader and entrepreneur, co-founder and CEO of Airlogy Labs, focused on startup growth, business strategy, and collaboration. Experienced in managing complex tasks, market analysis, and driving innovation.",
        image: "/images/matej.jpeg",
        email: "quantumleapcrew@gmail.com",
        github: null,
        linkedIn: "https://www.linkedin.com/in/matej-liptak-62001a140",
        skills: ["Business Development", "Strategic Management", "Marketing", "International Trade"]
    },
    {
        id: 1,
        name: "Denis Ivan",
        role: "Security & IoT Specialist",
        specialization: "Penetration Testing & Hardware Security",
        bio: "Penetration tester focused on hardware security and IoT devices, especially those using Wi-Fi, Bluetooth and BLE. Passionate about research and automation in smart home environments.",
        image: "/images/denis.jpeg",
        email: "quantumleapcrew@gmail.com",
        github: "thenisvan",
        linkedIn: "https://www.linkedin.com/in/denis-ivan",
        skills: ["IoT Security", "Penetration Testing", "BLE/WiFi", "Smart Home", "Hardware Security"],
        bachelorThesis: "Security Threats and Vulnerabilities of IoT Devices with Physical Access"
    },
    {
        id: 2,
        name: "Peter Farkaš",
        role: "Embedded Systems Developer",
        specialization: "C++ & Low-Level Programming",
        bio: "C++ developer straight from Asgard focused on data transfer implementation in mythology with expertise in embedded systems and low-level programming. Enthusiast of 3D printing with notable projects including functional Iron Man suit.",
        image: "/images/peter.jpeg",
        email: "quantumleapcrew@gmail.com",
        github: "xfarkasp",
        linkedIn: "https://www.linkedin.com/in/peter-farka%C5%A1-451496232",
        skills: ["C/C++", "Embedded Systems", "Microcontrollers", "3D Printing", "IoT"],
        bachelorThesis: "Modular Communication Service Managed by Microservices"
    },
    {
        id: 3,
        name: "Darius-Dušan Horvath",
        role: "Full-Stack Developer",
        specialization: "Cloud Architecture & Scalability",
        bio: "Full-stack developer specializing in designing and implementing complex software solutions from user interfaces to databases and cloud. Focus on scalability, performance and user experience.",
        image: "/images/darius.jpeg",
        email: "quantumleapcrew@gmail.com",
        github: "HorvathDarius",
        linkedIn: "https://www.linkedin.com/in/darius-horvath",
        skills: ["React", "Spring", "Full-Stack", "Systems Designer", "AWS", "Microservices"],
        bachelorThesis: "Digital Twin for Connected Automated Vehicle"
    },
    {
        id: 4,
        name: "Martin Sivák",
        role: "AI & ML Engineer",
        specialization: "Computer Vision & Deep Learning",
        bio: "Web application developer and AI specialist focused on medicine and image data processing. Current focus on machine learning, deep models and multimodal data.",
        image: "/images/martin.jpeg",
        email: "quantumleapcrew@gmail.com",
        github: "dr-furious",
        linkedIn: "https://www.linkedin.com/in/sivak-martin",
        skills: ["AI/ML", "Computer Vision", "PyTorch", "TensorFlow", "Deep Learning", "Medical Imaging"],
        bachelorThesis: "Histological Image Data Processing Using Computer Vision and Deep Neural Networks"
    },
    {
        id: 5,
        name: "Frederik Duvač",
        role: "Multiplatform Developer",
        specialization: "Frontend & UX/UI Design",
        bio: "Experienced in multiplatform development of mobile and desktop applications, frontend and backend development, web development, UX/UI and blockchain technologies.",
        image: "/images/frederik.jpeg",
        email: "quantumleapcrew@gmail.com",
        github: "RikoAppDev",
        linkedIn: "https://www.linkedin.com/in/frederik-duvac",
        skills: ["Full-Stack", "Databases", "Mobile Dev", "React", "Vue.js", "UX/UI", "Blockchain", "IoT"],
        bachelorThesis: "Application for Item Management"
    },
    {
        id: 6,
        name: "Adrián Komanek",
        role: "DevOps Engineer",
        specialization: "Kubernetes & AWS Infrastructure",
        bio: "DevOps engineer with experience in managing deployments and monitoring Kubernetes clusters and cloud solutions in AWS. Interested in microcontrollers, IoT, LoRa technology and 3D model design for printing.",
        image: "/images/adrian.jpeg",
        email: "quantumleapcrew@gmail.com",
        github: "K-o-m-A",
        linkedIn: "https://www.linkedin.com/in/adrian-komanek-3a988822b",
        skills: ["DevOps", "Kubernetes", "AWS", "Terraform", "Docker", "CI/CD", "Grafana"],
        bachelorThesis: "Virtual Infrastructure Management Based on Infrastructure as Code"
    }
];

export const projectLogs: ProjectLog[] = [
    {
        id: 1,
        date: "2025-09-16",
        type: "meeting",
        title: "Project Kickoff - Fiserv Event Gateway",
        description: "Initial team meeting to discuss the Fiserv Serverless Event Gateway Transformation project. Reviewed project requirements, AWS serverless architecture and established team roles.",
        attendees: ["Denis Ivan", "Peter Farkaš", "Darius-Dušan Horvath", "Martin Sivák", "Frederik Duvač", "Adrián Komanek"],
        outcomes: [
            "Assigned AWS architecture design to Adrián and Darius",
            "Denis to lead security analysis and threat modeling",
            "Martin to research event-driven patterns and AI optimization",
            "Frederik to design frontend dashboard and monitoring UI",
            "Peter to handle low-level event processing optimization"
        ],
        nextSteps: [
            "Create AWS account and setup development environment",
            "Research API Gateway, Lambda, and EventBridge patterns",
            "Design initial system architecture diagram"
        ],
        tags: ["kickoff", "planning", "architecture"]
    },
    {
        id: 2,
        date: "2025-09-20",
        type: "development",
        title: "AWS Infrastructure Setup",
        description: "Configured AWS development environment with Lambda functions, API Gateway and EventBridge. Implemented Infrastructure as Code using Terraform for reproducible deployments.",
        hours: 8,
        attendees: ["Adrián Komanek", "Darius-Dušan Horvath"],
        outcomes: [
            "Created Terraform modules for Lambda, API Gateway, EventBridge",
            "Setup CI/CD pipeline with GitHub Actions",
            "Configured CloudWatch logging and monitoring",
            "Established multi-environment strategy (dev, staging, prod)"
        ],
        tags: ["aws", "terraform", "infrastructure", "devops"]
    },
    {
        id: 3,
        date: "2025-09-23",
        type: "meeting",
        title: "Architecture Review & Sprint Planning",
        description: "Weekly team sync to review AWS architecture design and plan first development sprint. Discussed event-driven patterns and serverless best practices.",
        attendees: ["Denis Ivan", "Peter Farkaš", "Darius-Dušan Horvath", "Martin Sivák", "Frederik Duvač", "Adrián Komanek"],
        outcomes: [
            "Approved event-driven architecture using pub-sub pattern",
            "Decided on event sourcing for transaction logging",
            "Sprint 1 backlog finalized with 8 user stories",
            "Established twice-weekly standup schedule"
        ],
        nextSteps: [
            "Implement core Lambda functions for event processing",
            "Create EventBridge rules and event schemas",
            "Design monitoring dashboard wireframes"
        ],
        tags: ["meeting", "sprint-planning", "architecture"]
    },
    {
        id: 4,
        date: "2025-09-27",
        type: "development",
        title: "Lambda Function Development",
        description: "Developed core Lambda functions for event ingestion, transformation and routing. Implemented event validation and error handling with DLQ (Dead Letter Queue) pattern.",
        hours: 12,
        attendees: ["Peter Farkaš", "Darius-Dušan Horvath"],
        outcomes: [
            "Created 5 Lambda functions in TypeScript",
            "Implemented event schema validation using JSON Schema",
            "Setup SQS dead letter queues for failed events",
            "Added comprehensive CloudWatch logging",
            "Achieved <100ms p95 latency for event processing"
        ],
        tags: ["lambda", "development", "typescript", "aws"]
    },
    {
        id: 5,
        date: "2025-09-30",
        type: "testing",
        title: "Security Testing & Vulnerability Assessment",
        description: "Conducted comprehensive security audit of API Gateway endpoints and Lambda functions. Implemented AWS security best practices and IAM role hardening.",
        hours: 6,
        attendees: ["Denis Ivan", "Adrián Komanek"],
        outcomes: [
            "Identified and fixed 3 IAM overpermission issues",
            "Implemented API Gateway request validation",
            "Added WAF rules to protect against common attacks",
            "Setup AWS GuardDuty for threat detection",
            "Documented security guidelines for the team"
        ],
        tags: ["security", "testing", "iam", "waf"]
    },
    {
        id: 6,
        date: "2025-10-04",
        type: "development",
        title: "EventBridge Integration & Event Routing",
        description: "Implemented EventBridge event buses and routing rules for multi-tenant event processing. Created event patterns for different event types and consumers.",
        hours: 7,
        attendees: ["Darius-Dušan Horvath", "Martin Sivák"],
        outcomes: [
            "Configured custom EventBridge event bus",
            "Created 12 event routing rules with pattern matching",
            "Implemented event filtering and transformation",
            "Setup cross-account event delivery",
            "Integrated with SNS for notifications"
        ],
        tags: ["eventbridge", "aws", "event-driven", "integration"]
    },
    {
        id: 7,
        date: "2025-10-07",
        type: "meeting",
        title: "Sprint 1 Review & Retrospective",
        description: "Demo of event gateway core functionality to stakeholders. Team retrospective on development process and lessons learned.",
        attendees: ["Denis Ivan", "Peter Farkaš", "Darius-Dušan Horvath", "Martin Sivák", "Frederik Duvač", "Adrián Komanek"],
        outcomes: [
            "Successfully demonstrated event ingestion and routing",
            "Showed monitoring dashboard prototype",
            "Identified need for better error handling documentation",
            "Team velocity: 34 story points completed",
            "Stakeholder feedback: positive, requested analytics features"
        ],
        nextSteps: [
            "Add event analytics and insights dashboard",
            "Improve error handling and retry logic",
            "Create comprehensive API documentation"
        ],
        tags: ["meeting", "sprint-review", "retrospective"]
    },
    {
        id: 8,
        date: "2025-10-11",
        type: "development",
        title: "Monitoring Dashboard Implementation",
        description: "Built real-time monitoring dashboard using Vue 3 and Nuxt to visualize event flows, Lambda metrics and system health. Integrated with CloudWatch APIs.",
        hours: 10,
        attendees: ["Frederik Duvač", "Darius-Dušan Horvath"],
        outcomes: [
            "Implemented real-time event flow visualization",
            "Created Lambda performance metrics dashboard",
            "Added cost tracking and optimization suggestions",
            "Integrated CloudWatch alarms and notifications",
            "Deployed dashboard using AWS Amplify"
        ],
        tags: ["frontend", "vue", "dashboard", "cloudwatch"]
    },
    {
        id: 9,
        date: "2025-10-14",
        type: "development",
        title: "AI-Powered Event Analysis",
        description: "Implemented machine learning model to detect anomalies in event patterns and predict potential issues. Used AWS SageMaker for model training and deployment.",
        hours: 9,
        attendees: ["Martin Sivák", "Darius-Dušan Horvath"],
        outcomes: [
            "Trained anomaly detection model on historical event data",
            "Achieved 94% accuracy in detecting abnormal patterns",
            "Integrated model with Lambda for real-time predictions",
            "Created alerting system for detected anomalies",
            "Documented ML pipeline and retraining process"
        ],
        tags: ["ai", "machine-learning", "sagemaker", "anomaly-detection"]
    },
    {
        id: 10,
        date: "2025-10-18",
        type: "documentation",
        title: "API Documentation & Developer Guide",
        description: "Created comprehensive API documentation using OpenAPI 3.0 specification. Wrote developer guide for onboarding and integration.",
        hours: 5,
        attendees: ["Frederik Duvač", "Peter Farkaš"],
        outcomes: [
            "Published OpenAPI 3.0 specification",
            "Created interactive API documentation with examples",
            "Wrote integration guide with code samples",
            "Added troubleshooting section",
            "Setup automated documentation deployment"
        ],
        tags: ["documentation", "api", "openapi"]
    },
    {
        id: 11,
        date: "2025-10-21",
        type: "meeting",
        title: "Mid-Project Status Review",
        description: "Comprehensive review of project progress with Fiserv stakeholders. Discussed achievements, challenges and roadmap for remaining sprints.",
        attendees: ["Denis Ivan", "Peter Farkaš", "Darius-Dušan Horvath", "Martin Sivák", "Frederik Duvač", "Adrián Komanek"],
        outcomes: [
            "Demonstrated working event gateway with 99.9% uptime",
            "Showed AI anomaly detection in action",
            "Discussed scaling to handle 10k events/second",
            "Received approval for advanced analytics features",
            "Updated timeline for final deployment"
        ],
        nextSteps: [
            "Implement advanced event analytics",
            "Performance optimization for high-throughput scenarios",
            "Prepare for production deployment"
        ],
        tags: ["meeting", "stakeholder-review", "milestone"]
    },
    {
        id: 12,
        date: "2025-10-25",
        type: "deployment",
        title: "Performance Optimization & Load Testing",
        description: "Conducted extensive load testing and optimized Lambda functions for high-throughput scenarios. Achieved target performance of 10,000 events per second.",
        hours: 8,
        attendees: ["Adrián Komanek", "Peter Farkaš", "Darius-Dušan Horvath"],
        outcomes: [
            "Optimized Lambda cold start times to <200ms",
            "Implemented connection pooling for DynamoDB",
            "Added provisioned concurrency for critical functions",
            "Load tested with 15k events/second successfully",
            "Reduced average processing time by 35%"
        ],
        tags: ["performance", "optimization", "load-testing", "aws"]
    },
    {
        id: 13,
        date: "2025-10-28",
        type: "development",
        title: "Event Analytics Dashboard",
        description: "Built advanced analytics dashboard with real-time event metrics, trends analysis and business insights. Integrated with AWS QuickSight for detailed reporting.",
        hours: 7,
        attendees: ["Frederik Duvač", "Martin Sivák"],
        outcomes: [
            "Created interactive charts and visualizations",
            "Implemented trend analysis and forecasting",
            "Added custom metric definitions",
            "Integrated QuickSight for executive reporting",
            "Setup automated daily/weekly reports"
        ],
        tags: ["analytics", "dashboard", "quicksight", "visualization"]
    },
    {
        id: 14,
        date: "2025-11-01",
        type: "testing",
        title: "End-to-End Testing & QA",
        description: "Comprehensive end-to-end testing of entire event gateway system. Verified all integration points, error handling and recovery mechanisms.",
        hours: 6,
        attendees: ["Denis Ivan", "Peter Farkaš", "Frederik Duvač"],
        outcomes: [
            "Executed 150 test cases covering all scenarios",
            "Verified disaster recovery procedures",
            "Tested multi-region failover mechanisms",
            "Confirmed security compliance requirements",
            "All critical bugs resolved, 2 minor issues documented"
        ],
        tags: ["testing", "qa", "end-to-end", "compliance"]
    },
    {
        id: 15,
        date: "2025-11-04",
        type: "documentation",
        title: "Final Documentation & Team Website",
        description: "Completed project documentation including architecture diagrams, deployment guides and operational runbooks. Created team website to showcase project progress.",
        hours: 4,
        attendees: ["Frederik Duvač", "Darius-Dušan Horvath"],
        outcomes: [
            "Finalized architecture documentation with diagrams",
            "Created deployment and rollback procedures",
            "Wrote operational runbooks for common scenarios",
            "Published team website with project overview",
            "Prepared presentation for final demo"
        ],
        tags: ["documentation", "website", "presentation"]
    }
];

// Statistics helpers
export const getLatestLogs = (count: number = 3): ProjectLog[] => {
    return [...projectLogs]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, count);
};

export const getMeetingLogs = (): ProjectLog[] => {
    return projectLogs.filter(log => log.type === 'meeting');
};

export const getTotalHours = (): number => {
    return projectLogs.reduce((sum, log) => sum + (log.hours || 0), 0);
};

export const getLogsByType = (type: ProjectLog['type']): ProjectLog[] => {
    return projectLogs.filter(log => log.type === type);
};
