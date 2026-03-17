export const HERO_CONTENT = `I build production AI systems and full-stack applications — RAG pipelines, agentic frameworks, and cloud infrastructure — hardened for security, wired for observability, and built to scale.`;

export const ABOUT_TEXT = [
  `I'm an AI, Cloud & Full Stack Engineer with end-to-end ownership across the stack — from React frontends and FastAPI backends to AWS CDK infrastructure. At AAA, I build agentic insurance chatbots on AWS Bedrock with RAG pipelines serving multiple states, and I treat security and observability as first-class concerns: IAM hardening, guardrail enforcement, CloudWatch dashboards, and real-time alerting are part of every system I ship.`,
  `Before that, I delivered a full-stack RAG platform at Dreamline AI on SageMaker and FAISS, and optimized enterprise database systems at Capgemini — earning recognition awards for architecture improvements that cut query times by 25%. I hold an MS in Computer Science (3.74 GPA) from Cal State Fullerton and an AWS Certified Developer – Associate credential.`,
];

export const EXPERIENCES = [
  {
    year: "Jun 2025 – Present",
    role: "AI / Cloud Engineer",
    company: "Auto Club Enterprises (AAA)",
    type: "Contractor",
    description: [
      "Architected production AI chatbots for insurance and emergency roadside services on AWS Bedrock, combining Strands-based agentic frameworks with RAG pipelines to deliver context-aware responses across multiple product lines.",
      "Engineered semantic caching within Lambda-backed Bedrock invocation flows, eliminating redundant LLM API calls and measurably reducing inference costs across dev, staging, and production environments.",
      "Built end-to-end observability infrastructure using AWS CDK, CloudWatch, CloudTrail, and SNS — enabling real-time monitoring of Bedrock API usage and guardrail violations across multi-region deployments.",
      "Provisioned and maintained cloud infrastructure via AWS CDK and YAML-based CI/CD pipelines, delivering Lambda functions, Step Functions, S3 buckets, and DynamoDB tables as production-grade IaC.",
    ],
    technologies: ["AWS Cloud", "Python", "AWS Bedrock", "RAG", "Strands Agents", "AWS CDK", "DynamoDB"],
  },
  {
    year: "Jun 2024 – Jun 2025",
    role: "AI / Full Stack Developer",
    company: "Dreamline AI",
    type: "",
    description: [
      "Built and deployed a RAG Q&A chatbot for the GreenZone Mapping platform — combining OpenAI embeddings, FAISS vector search, and Mistral 7B hosted on AWS SageMaker to answer geospatial and energy questions with grounded, source-cited responses.",
      "Owned the full stack: React frontend, FastAPI backend, and AWS-deployed infrastructure with YAML-based CI/CD pipelines — from local development to production release.",
      "Designed a SQL Server schema unifying geographic, demographic, property, and energy datasets, enabling structured cross-domain queries that powered the platform's core analytics.",
    ],
    technologies: ["Python", "FastAPI", "React", "AWS SageMaker", "FAISS", "OpenAI"],
  },
  {
    year: "Jan 2020 – Jul 2022",
    role: "Senior Software Developer",
    company: "Capgemini",
    type: "",
    description: [
      "Optimized 100+ enterprise database objects — stored procedures, queries, and indexes — reducing average query execution time by 25% across a large-scale PL/SQL environment.",
      "Delivered a full-stack analytics dashboard (Django REST + React, deployed on AWS EC2 and PostgreSQL) that eliminated 20% of manual reporting effort for the operations team.",
      "Recognized with Capgemini's STAR and XTRA MILE awards for outstanding contributions to application architecture and database performance improvement.",
    ],
    technologies: ["Python", "Django", "React", "PostgreSQL", "SQL", "PL/SQL"],
  },
];

export const SKILLS = {
  "Languages & Frameworks": ["Python", "React.js", "TypeScript", "JavaScript", "FastAPI", "Django", "SQL", "PL/SQL", "React Native", "Tailwind CSS"],
  "AI / ML": ["AWS Bedrock", "Strands Agents", "RAG Pipelines", "Prompt Engineering", "FAISS", "SageMaker", "Scikit-learn", "NumPy", "Pandas", "NLP"],
  "Cloud & DevOps": ["AWS CDK", "Lambda", "DynamoDB", "CloudWatch", "S3", "Step Functions", "Docker", "CI/CD", "GitHub", "Linux"],
};

export const PROJECTS = [
  {
    title: "HealthForge",
    subtitle: "Serverless Health Analytics Pipeline",
    link: "https://github.com/naikaj18/HealthForge",
    description: "Serverless pipeline on AWS that ingests Apple Health data via REST API, computes weighted health scores across sleep, fitness, recovery, consistency, and cardio with 30-day rolling baselines and anomaly detection, generates AI insights via Google Gemini Flash, and delivers a rich HTML dashboard email every Sunday morning. Built entirely on AWS free tier.",
    technologies: ["AWS CDK", "Lambda", "Step Functions", "DynamoDB", "SES", "API Gateway", "SQS", "Python", "Gemini"],
  },
  {
    title: "Mailliam",
    subtitle: "AI-Powered Email Summarization Assistant",
    link: "https://github.com/naikaj18/mailliam",
    description: "Personal AI assistant that connects to Gmail via OAuth, fetches and classifies emails, and generates retrieval-augmented summaries using context-aware LLM prompting. Built with FastAPI and Supabase — designed to cut time-to-inbox-zero and surface what actually matters.",
    technologies: ["Python", "FastAPI", "React", "LLMs", "Gmail API", "Supabase", "RAG"],
  },
  {
    title: "Masmovil",
    subtitle: "IFS Financials ERP Application",
    description: "Enterprise ERP development for Masmovil (Spain's fourth-largest telecom) on the IFS Financials platform. Designed and optimized 100+ database objects, built PL/SQL APIs for financial data workflows, and maintained system reliability for a business operating at national scale.",
    technologies: ["SQL", "PL/SQL", "Oracle", "ERP", "APIs"],
  },
  {
    title: "Trade What You Read",
    subtitle: "Google's Startup Weekend — 3rd Place",
    description: "Conceived and prototyped a peer-to-peer book trading platform in 54 hours at Google's Startup Weekend. Led the team from idea to pitch, winning 3rd place out of all competing teams — judged on innovation, feasibility, and market potential.",
    technologies: ["Entrepreneurship", "Prototyping", "Product Strategy"],
  },
];

export const CONTACT = {
  location: "San Francisco, California",
  phoneNo: "+1 (657) 525-9667",
  email: "naikaj18@gmail.com",
};
