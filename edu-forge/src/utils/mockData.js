// Reference datasets that stand in for the data EduForge AI would otherwise
// source from a job-market API, an LMS, and institutional records. Every
// analysis function in analysisEngine.js is written against this shape, so
// swapping these constants for live API responses does not require
// touching the pages themselves.

export const ROLE_REQUIREMENTS = {
  'Frontend Engineer': ['javascript', 'react', 'css', 'html', 'git', 'typescript', 'testing'],
  'Backend Engineer': ['java', 'spring', 'sql', 'rest apis', 'git', 'docker', 'system design'],
  'Data Analyst': ['sql', 'excel', 'python', 'statistics', 'data visualization', 'power bi'],
  'Data Scientist': ['python', 'statistics', 'machine learning', 'sql', 'pandas', 'data visualization'],
  'ML Engineer': ['python', 'machine learning', 'deep learning', 'pytorch', 'sql', 'mlops'],
  'DevOps Engineer': ['linux', 'docker', 'kubernetes', 'ci/cd', 'aws', 'terraform', 'scripting'],
  'Full Stack Developer': ['javascript', 'react', 'node.js', 'sql', 'git', 'rest apis', 'css'],
  'Cloud Engineer': ['aws', 'azure', 'terraform', 'linux', 'networking', 'docker'],
  'Cybersecurity Analyst': ['networking', 'linux', 'siem', 'penetration testing', 'python', 'risk assessment'],
  'Product Manager': ['communication', 'sql', 'roadmapping', 'user research', 'analytics']
}

export const LANGUAGES = [
  { name: 'Python', tags: ['data', 'ai', 'scripting', 'beginner-friendly'], description: 'Broad ecosystem for data, AI and automation; the most forgiving starting point.' },
  { name: 'JavaScript', tags: ['web', 'frontend', 'fullstack'], description: 'Runs in every browser and on the server; essential for interactive web products.' },
  { name: 'TypeScript', tags: ['web', 'frontend', 'fullstack', 'large-teams'], description: 'JavaScript with static types; favored on larger codebases and teams.' },
  { name: 'Java', tags: ['backend', 'enterprise', 'android'], description: 'Mature, strongly typed, and dominant in enterprise backend systems.' },
  { name: 'C++', tags: ['systems', 'performance', 'gamedev'], description: 'Low-level control for performance-critical systems, embedded and game engines.' },
  { name: 'Go', tags: ['backend', 'cloud', 'infra'], description: 'Simple syntax with strong concurrency support; common in cloud infrastructure.' },
  { name: 'SQL', tags: ['data', 'backend', 'analytics'], description: 'The query language of relational data; near-mandatory for analytics roles.' },
  { name: 'R', tags: ['data', 'statistics', 'research'], description: 'Statistics-first language favored in research and applied analytics.' },
  { name: 'Swift', tags: ['mobile', 'ios'], description: 'Apple\u2019s language for iOS and macOS application development.' },
  { name: 'Kotlin', tags: ['mobile', 'android', 'backend'], description: 'Modern, concise language for Android and increasingly for backend services.' }
]

export const DOMAINS = [
  { name: 'Web Development', tags: ['javascript', 'react', 'css', 'html', 'node.js'], description: 'Building the products people use directly in a browser.' },
  { name: 'Data Science', tags: ['python', 'statistics', 'machine learning', 'pandas', 'sql'], description: 'Turning raw data into models and decisions.' },
  { name: 'Cloud & DevOps', tags: ['docker', 'kubernetes', 'aws', 'terraform', 'linux'], description: 'Running and scaling infrastructure reliably.' },
  { name: 'Cybersecurity', tags: ['networking', 'linux', 'siem', 'penetration testing'], description: 'Protecting systems and data from compromise.' },
  { name: 'Mobile Development', tags: ['swift', 'kotlin', 'react native', 'android', 'ios'], description: 'Building native and cross-platform mobile apps.' },
  { name: 'AI / Machine Learning', tags: ['python', 'deep learning', 'pytorch', 'machine learning'], description: 'Designing and training predictive and generative systems.' },
  { name: 'Product & Analytics', tags: ['sql', 'communication', 'analytics', 'user research'], description: 'Deciding what to build next and measuring its impact.' }
]

export const TECH_TRENDS = [
  { name: 'Generative AI / LLM tooling', category: 'AI', growth: 92, adoption: 74 },
  { name: 'Cloud-native (Kubernetes, containers)', category: 'Infra', growth: 68, adoption: 81 },
  { name: 'TypeScript', category: 'Web', growth: 61, adoption: 78 },
  { name: 'Data engineering pipelines', category: 'Data', growth: 66, adoption: 64 },
  { name: 'Edge computing', category: 'Infra', growth: 54, adoption: 39 },
  { name: 'Cybersecurity automation', category: 'Security', growth: 58, adoption: 52 },
  { name: 'Low-code / no-code platforms', category: 'Web', growth: 41, adoption: 47 },
  { name: 'WebAssembly', category: 'Web', growth: 37, adoption: 22 },
  { name: 'MLOps', category: 'AI', growth: 71, adoption: 43 },
  { name: 'Rust for systems programming', category: 'Systems', growth: 63, adoption: 28 }
]

export const INDUSTRY_KEYWORDS = [
  'cloud', 'api', 'machine learning', 'data structures', 'algorithms', 'agile',
  'version control', 'git', 'testing', 'security', 'devops', 'ci/cd', 'microservices',
  'react', 'python', 'sql', 'system design', 'containerization', 'ai', 'statistics'
]

export const OUTDATED_KEYWORDS = [
  'visual basic 6', 'silverlight', 'flash', 'cobol maintenance', 'coldfusion',
  'waterfall only', 'foxpro', 'floppy disk', 'jsp only', 'internet explorer',
  'perl cgi', 'dreamweaver', 'j2ee legacy'
]

export const INDUSTRY_SKILL_SETS = {
  'Software & IT Services': ['javascript', 'python', 'sql', 'git', 'cloud', 'api', 'testing', 'system design'],
  'Banking & Finance': ['sql', 'python', 'statistics', 'risk assessment', 'security', 'excel'],
  'Healthcare Technology': ['data privacy', 'python', 'sql', 'statistics', 'interoperability', 'security'],
  'E-commerce & Retail': ['javascript', 'react', 'sql', 'analytics', 'api', 'cloud'],
  'Manufacturing & IoT': ['embedded systems', 'python', 'networking', 'security', 'data structures']
}

export const DEMAND_SKILLS = [
  { skill: 'Python', domain: 'AI / ML', demand: 94 },
  { skill: 'Cloud Platforms (AWS/Azure)', domain: 'Cloud & DevOps', demand: 89 },
  { skill: 'SQL', domain: 'Data', demand: 87 },
  { skill: 'React', domain: 'Web', demand: 82 },
  { skill: 'Machine Learning', domain: 'AI / ML', demand: 85 },
  { skill: 'Kubernetes', domain: 'Cloud & DevOps', demand: 76 },
  { skill: 'Cybersecurity Fundamentals', domain: 'Security', demand: 79 },
  { skill: 'Data Visualization', domain: 'Data', demand: 71 },
  { skill: 'TypeScript', domain: 'Web', demand: 68 },
  { skill: 'System Design', domain: 'Engineering', demand: 73 }
]

export const LEARNING_RESOURCES = {
  javascript: ['Build 3 small projects (todo app, quiz app, weather app)', 'Learn ES6+ syntax and async/await'],
  react: ['Build a component library', 'Learn hooks: useState, useEffect, useContext'],
  python: ['Automate a repetitive task with a script', 'Work through data-structure drills'],
  sql: ['Practice joins and window functions on a sample database', 'Write 20 queries against a public dataset'],
  git: ['Practice branching and resolving merge conflicts', 'Contribute to one open-source repo'],
  'machine learning': ['Complete one end-to-end model project (data \u2192 train \u2192 evaluate)', 'Learn train/test splits and evaluation metrics'],
  docker: ['Containerize an existing project', 'Learn multi-stage builds'],
  statistics: ['Review hypothesis testing and distributions', 'Apply statistics to a real dataset'],
  'system design': ['Study 3 canonical system designs (URL shortener, chat app, feed)', 'Practice estimating scale and trade-offs'],
  default: ['Build a small project applying this skill end to end', 'Find a short, focused course and finish it in one week']
}
