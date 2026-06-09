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

export const skills = [
  // Programming & Development — color group: blue
  { name: 'Python',      category: 'dev',  level: 'Experienced', proficiency: 90, color: '#3b82f6' },
  { name: 'JavaScript',  category: 'dev',  level: 'Experienced', proficiency: 88, color: '#2563eb' },
  { name: 'SQL',         category: 'dev',  level: 'Intermediate', proficiency: 72, color: '#60a5fa' },
  { name: 'Node.js',     category: 'dev',  level: 'Intermediate', proficiency: 68, color: '#1d4ed8' },
  { name: 'Express',     category: 'dev',  level: 'Intermediate', proficiency: 65, color: '#3b82f6' },
  { name: 'Flask',       category: 'dev',  level: 'Intermediate', proficiency: 65, color: '#2563eb' },
  { name: 'HTML/CSS',    category: 'dev',  level: 'Intermediate', proficiency: 74, color: '#60a5fa' },
  { name: 'WebSocket',   category: 'dev',  level: 'Intermediate', proficiency: 62, color: '#1d4ed8' },
  { name: 'Bootstrap',   category: 'dev',  level: 'Intermediate', proficiency: 65, color: '#3b82f6' },
  // Data Science & ML — color group: purple
  { name: 'XGBoost',       category: 'ml', level: 'Experienced',  proficiency: 85, color: '#7c3aed' },
  { name: 'Random Forest', category: 'ml', level: 'Experienced',  proficiency: 85, color: '#8b5cf6' },
  { name: 'Scikit-learn',  category: 'ml', level: 'Intermediate', proficiency: 75, color: '#6d28d9' },
  { name: 'Pandas',        category: 'ml', level: 'Intermediate', proficiency: 78, color: '#7c3aed' },
  { name: 'NumPy',         category: 'ml', level: 'Intermediate', proficiency: 76, color: '#8b5cf6' },
  { name: 'K-Means',       category: 'ml', level: 'Intermediate', proficiency: 68, color: '#6d28d9' },
  { name: 'SHAP',          category: 'ml', level: 'Intermediate', proficiency: 65, color: '#7c3aed' },
  { name: 'AngularJS',     category: 'ml', level: 'Intermediate', proficiency: 60, color: '#8b5cf6' },
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
    role: 'President',
    organization: 'Sigma Chi Fraternity',
    period: '2024 – Present',
    type: 'leadership',
    icon: '🏛️',
    description:
      'Leading one of the most prestigious fraternities at the College of Idaho. Overseeing chapter operations, member development programs, community service initiatives, and inter-fraternal relations.',
  },
  {
    role: 'Student Hall Director',
    organization: 'College of Idaho Residence Life',
    period: '2023 – Present',
    type: 'leadership',
    icon: '🏠',
    description:
      'Managing residential hall operations for 80+ students. Fostering a supportive community, coordinating programming events, mediating conflicts, and supporting student well-being.',
  },
  {
    role: 'Environmental Engineering Intern',
    organization: 'Micron Technology',
    period: 'Summer 2024',
    type: 'professional',
    icon: '💼',
    description:
      'Worked on environmental data analysis and sustainability engineering solutions at a leading global semiconductor company. Applied data-driven methods to track and reduce environmental impact.',
  },
  {
    role: 'Treasurer',
    organization: 'Coding Club',
    period: '2023 – 2024',
    type: 'leadership',
    icon: '💻',
    description:
      'Managed club finances, allocated resources for workshops and hackathon participation, and helped grow membership by organizing technical talks and hands-on coding events.',
  },
  {
    role: 'ASCI Representative',
    organization: 'Associated Students of College of Idaho',
    period: '2022 – Present',
    type: 'leadership',
    icon: '🎓',
    description:
      'Representing student interests in campus government. Participating in policy decisions, budget allocations, and campus improvement initiatives that impact the student body.',
  },
  {
    role: 'President',
    organization: 'Boxing Club',
    period: '2022 – 2023',
    type: 'leadership',
    icon: '🥊',
    description:
      'Co-founded and led the college boxing club from the ground up. Organized weekly training sessions, sparring events, and inter-collegiate matches, growing membership to 30+ students.',
  },
  {
    role: 'Leadership Role',
    organization: 'Amnesty International',
    period: '2022 – 2023',
    type: 'leadership',
    icon: '✊',
    description:
      "Advocated for human rights and social justice. Organized awareness campaigns, letter-writing drives, and community outreach events to support Amnesty International's global mission.",
  },
]

export const education = [
  {
    school: 'College of Idaho',
    degree: 'B.S. Computer Science & Business Administration',
    note: 'Double Major',
    period: '2022 – 2025',
    location: 'Caldwell, Idaho',
    gpa: '3.5+',
    coursework: [
      'Data Structures & Algorithms',
      'Machine Learning',
      'Data Visualization',
      'Software Engineering',
      'Database Systems',
      'Business Strategy',
    ],
  },
  {
    school: 'Kathmandu Model College',
    degree: 'High School Diploma',
    note: '',
    period: '2019 – 2022',
    location: 'Kathmandu, Nepal',
    gpa: '',
    coursework: [],
  },
]
