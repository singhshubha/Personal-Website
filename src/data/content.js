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
