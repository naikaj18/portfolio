export const HERO_CONTENT = `I build AI systems that survive production — RAG pipelines, agentic frameworks, and cloud infrastructure designed to hold up under real traffic, not just demos.`;

export const ABOUT_TEXT = [
  `I build AI end-to-end — React on top, FastAPI in the middle, AWS CDK underneath. At AAA, I ship agentic insurance chatbots on AWS Bedrock with RAG pipelines serving customers across multiple states. Security and observability aren't afterthoughts here: IAM hardening, guardrail enforcement, CloudWatch dashboards, and real-time alerting ship with every system.`,
  `Before AAA, I delivered a full-stack RAG platform at Dreamline AI on SageMaker and FAISS, and spent two and a half years at Capgemini cutting query times by 25% across a large PL/SQL environment — picking up STAR and XTRA MILE awards for the architecture work along the way. MS in Computer Science (3.74 GPA) from Cal State Fullerton; AWS Certified Developer – Associate.`,
  `I work fluently alongside agentic coding tools like Claude Code — they compress the distance between idea and production, but the discipline stays mine: tests, reviews, and observability are non-negotiable.`,
];

export const EXPERIENCES = [
  {
    year: "Jun 2025 – Present",
    role: "AI / Cloud Engineer",
    company: "Auto Club Enterprises (AAA)",
    type: "Contractor",
    description: [
      "Architected production AI chatbots for insurance and roadside services on AWS Bedrock — combining Strands-based agentic frameworks with RAG pipelines to keep answers grounded and context-aware across multiple product lines.",
      "Engineered semantic caching inside Lambda-backed Bedrock invocation flows, eliminating redundant LLM calls and measurably reducing inference cost across dev, staging, and production.",
      "Built end-to-end observability with AWS CDK, CloudWatch, CloudTrail, and SNS — delivering real-time visibility into Bedrock API usage and guardrail violations across multi-region deployments.",
      "Shipped cloud infrastructure as code via AWS CDK and YAML-based CI/CD — Lambda, Step Functions, S3, and DynamoDB delivered as production-grade IaC.",
    ],
    technologies: ["AWS Cloud", "Python", "AWS Bedrock", "RAG", "Strands Agents", "AWS CDK", "DynamoDB"],
  },
  {
    year: "Jun 2024 – Jun 2025",
    role: "AI / Full Stack Developer",
    company: "Dreamline AI",
    type: "",
    description: [
      "Built and deployed a RAG Q&A chatbot for the GreenZone Mapping platform — OpenAI embeddings, FAISS vector search, and Mistral 7B on SageMaker — answering geospatial and energy questions with grounded, source-cited responses.",
      "Owned the full stack: React frontend, FastAPI backend, AWS infrastructure, and YAML-based CI/CD — from local dev to production release.",
      "Designed a SQL Server schema unifying geographic, demographic, property, and energy datasets — powering the platform's core cross-domain analytics.",
    ],
    technologies: ["Python", "FastAPI", "React", "AWS SageMaker", "FAISS", "OpenAI"],
  },
  {
    year: "Jan 2020 – Jul 2022",
    role: "Senior Software Developer",
    company: "Capgemini",
    type: "",
    description: [
      "Optimized 100+ enterprise database objects — stored procedures, queries, and indexes — cutting average query execution time by 25% across a large PL/SQL environment.",
      "Shipped a full-stack analytics dashboard (Django REST + React on AWS EC2, PostgreSQL) that eliminated 20% of the operations team's manual reporting effort.",
      "Earned Capgemini's STAR and XTRA MILE awards for architecture and database performance contributions.",
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
    description: "A serverless AWS pipeline that ingests Apple Health data, computes weighted health scores across sleep, fitness, recovery, consistency, and cardio — with 30-day rolling baselines and anomaly detection — generates AI insights via Gemini Flash, and emails a rich HTML dashboard every Sunday morning. Runs entirely on the AWS free tier.",
    technologies: ["AWS CDK", "Lambda", "Step Functions", "DynamoDB", "SES", "API Gateway", "SQS", "Python", "Gemini"],
  },
  {
    title: "Mailliam",
    subtitle: "AI-Powered Email Summarization Assistant",
    link: "https://github.com/naikaj18/mailliam",
    description: "A personal AI inbox assistant that connects to Gmail via OAuth, classifies incoming mail, and generates retrieval-augmented summaries with context-aware LLM prompting. Built with FastAPI and Supabase — designed to shrink the distance between inbox-zero and whatever actually matters.",
    technologies: ["Python", "FastAPI", "React", "LLMs", "Gmail API", "Supabase", "RAG"],
  },
  {
    title: "Masmovil",
    subtitle: "IFS Financials ERP Application",
    description: "Enterprise ERP work for Spain's fourth-largest telecom on the IFS Financials platform. Designed and optimized 100+ database objects, built PL/SQL APIs for financial data workflows, and kept the system reliable for a business operating at national scale.",
    technologies: ["SQL", "PL/SQL", "Oracle", "ERP", "APIs"],
  },
  {
    title: "Trade What You Read",
    subtitle: "Google's Startup Weekend — 3rd Place",
    description: "Conceived and prototyped a peer-to-peer book trading platform in 54 hours at Google's Startup Weekend. Led the team from idea to pitch and landed 3rd place overall — judged on innovation, feasibility, and market potential.",
    technologies: ["Entrepreneurship", "Prototyping", "Product Strategy"],
  },
];

export const CONTACT = {
  location: "San Francisco, California",
  phoneNo: "+1 (657) 525-9667",
  email: "naikaj18@gmail.com",
};
