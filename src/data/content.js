export const personal = {
  name: 'Shubha Swarnim Singh',
  shortName: 'Shubha Singh',
  titles: ['Computer Scientist', 'Software Developer', 'Data Analyst','AI Enthusiast','Leader', 'Innovator',  'Data Storyteller','Student Leader', 'Finance Geek'],
  bio: "Exploring the intersection of artificial intelligence, machine learning, software engineering, and data. From developing intelligent models to creating scalable applications, I enjoy transforming complex challenges into elegant solutions.",
  email: 'shubhaswarnimsingh@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shubha-swarnim-s-9940a5211/',
  github: 'https://github.com/singhshubha',
  resume: '/assets/Shubha_Singh_Resume.pdf',
  experience: '2+ Years',
  location: 'Boise, Idaho',
}

export const skillGroups = [
  {
    id:    'languages',
    label: 'Languages',
    color: '#c9883a',
    items: [
      { name: 'Python',     proficiency: 90, level: 'Experienced'  },
      { name: 'JavaScript', proficiency: 88, level: 'Experienced'  },
      { name: 'R',          proficiency: 70, level: 'Intermediate' },
      { name: 'React',      proficiency: 72, level: 'Intermediate' },
      { name: 'SQL',        proficiency: 72, level: 'Intermediate' },
    ],
  },
  {
    id:    'web',
    label: 'Web & Frameworks',
    color: '#9b6620',
    items: [
      { name: 'HTML / CSS', proficiency: 74, level: 'Intermediate' },
      { name: 'Node.js',    proficiency: 68, level: 'Intermediate' },
      { name: 'Express',    proficiency: 65, level: 'Intermediate' },
      { name: 'Flask',      proficiency: 65, level: 'Intermediate' },
      { name: 'Bootstrap',  proficiency: 65, level: 'Intermediate' },
      { name: 'AngularJS',  proficiency: 60, level: 'Intermediate' },
      { name: 'WebSocket',  proficiency: 62, level: 'Intermediate' },
    ],
  },
  {
    id:    'data',
    label: 'Data & AI',
    color: '#b07830',
    items: [
      { name: 'Pandas',        proficiency: 78, level: 'Intermediate' },
      { name: 'NumPy',         proficiency: 76, level: 'Intermediate' },
      { name: 'Scikit-learn',  proficiency: 75, level: 'Intermediate' },
      { name: 'XGBoost',       proficiency: 85, level: 'Experienced'  },
      { name: 'Random Forest', proficiency: 85, level: 'Experienced'  },
      { name: 'K-Means',       proficiency: 68, level: 'Intermediate' },
      { name: 'SHAP',          proficiency: 65, level: 'Intermediate' },
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Senate Voting App',
    image: '/assets/senate_voting_app.jpg',
    description:
      'A web application designed to facilitate secure and transparent voting processes for student government. Features real-time vote updates via WebSocket, user authentication, and encrypted ballot submission.',
    tech: ['JavaScript', 'Node.js', 'WebSocket', 'Express'],
    github: 'https://github.com/singhshubha/Senate-Voting-System',
    live: '',
    status: 'complete',
    highlight: 'Real-time results',
  },
  {
    id: 2,
    title: 'Invester Master',
    image: '/assets/invester_master.png',
    description:
      'An investment management platform that tracks multiple asset classes with detailed portfolio analytics. Provides risk assessment, performance metrics, and data-driven investment insights.',
    tech: ['Python', 'Flask', 'Data Analysis', 'SQL'],
    github: 'https://github.com/singhshubha/InvesterMaster',
    live: '',
    status: 'complete',
    highlight: 'Portfolio analytics',
  },
  {
    id: 3,
    title: 'In-Memory Search Engine',
    image: '/assets/in-memory_search_engine.jpg',
    description:
      'A high-performance document search engine that indexes and retrieves files stored in memory. Optimized for speed and efficiency using advanced data structures for sub-millisecond queries.',
    tech: ['Java', 'Algorithms', 'Data Structures'],
    github: 'https://github.com/singhshubha/file-search-engine',
    live: '',
    status: 'complete',
    highlight: 'Sub-ms queries',
  },
  {
    id: 4,
    title: '3D Hall Diagram',
    image: '/assets/3D_hall_diagram.png',
    description:
      'A 3D visualization tool for building and exploring interactive diagrams of residential halls. Supports real-time navigation, floor selection, and customizable room layouts.',
    tech: ['Three.js', 'WebGL', 'JavaScript'],
    github: '',
    live: '',
    status: 'in-progress',
    highlight: 'In Progress',
  },
]

export const experience = [
  {
    role: 'Data Science & Analytics Intern',
    organization: 'Albertsons Companies',
    period: 'Jun 2025 – Aug 2025',
    type: 'work',
    icon: '📊',
    description:
      'Designed and deployed ML infrastructure using Python, Scikit-learn, and XGBoost to predict store profitability across 2,200+ locations, supporting $700M+ CAPEX allocation decisions. Built scalable data pipelines and reduced analysis latency by 87.5% through query and workflow optimization.',
  },
  {
    role: 'IT Intern',
    organization: 'The College of Idaho',
    period: 'Dec 2022 – May 2023',
    type: 'work',
    icon: '🖥️',
    description:
      'Managed relational databases with over 1 million records, optimized SQL queries for institutional analytics, and deployed Multi-Factor Authentication (MFA) for 1,000+ users to strengthen campus-wide security.',
  },
  {
    role: 'Student Hall Director and RA',
    organization: 'The College of Idaho Residence Life',
    period: 'August 2023 – May 2026',
    type: 'leadership',
    icon: '🏠',
    description:
      'Lead residential operations for 200+ students, fostering an inclusive community through mentorship, conflict resolution, crisis response, and educational programming.',
  },
  {
    role: 'ASCI Treasurer',
    organization: 'Associated Students of The College of Idaho',
    period: 'August 2024 – May2025',
    type: 'leadership',
    icon: '💰',
    description:
      'Managed a $100,000+ student government budget, oversee funding allocations, and promoted financial transparency while collaborating with campus leadership on strategic initiatives.',
  }
]

export const education = [
  {
    school: 'College of Idaho',
    degree: 'B.S. Computer Science & Mathematics, B.S. Business Administration',
    note: 'Double Major',
    period: '2022 – 2025',
    location: 'Caldwell, Idaho',
    gpa: '3.5+',
    coursework: [
      'Data Structures & Algorithms',
      'Machine Learning',
      'Programming Languages',
      'Statistics & Probability',
      'Database Systems', 
      'Data Visualization',
    ],
  },
  {
    school: 'Kathmandu Model College',
    degree: 'NEB +2 Science',
    note: 'High School Diploma',
    period: '2019 – 2021',
    location: 'Kathmandu, Nepal',
    gpa: '',
    coursework: [
      'Physics',
      'Chemistry',
      'Mathematics',
      'Computer Science',
    ],
  },
]
