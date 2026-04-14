// ============================================================
// PORTFOLIO DATA — Edit everything here to customize your portfolio
// ============================================================

// portfolioData.js

export const data = {
  // ── Personal ────────────────────────────────────────────────
  name: 'Mahesh Dasarwad',
  headline: 'Full Stack Developer | MERN | Python | AI/ML Enthusiast',
  degree: 'Computer Engineering',
  location: 'Pune, Maharasthra, India - 411033',
  email: 'maheshdasarwad855@gmail.com',
  photo: '', 
  resumeUrl: '/Resume_sem6.pdf',
  github: "https://github.com/maheshdasarwad",
  linkedIn: "https://www.linkedin.com/in/maheshdasarwad/",
  hackerrank: "https://www.hackerrank.com/profile/maheshdasarwad81",
  leetcode: "https://leetcode.com/u/maheshdasarwad/",
  instagram: "https://www.instagram.com/mahesh.dasarwad/",

  
  // ── Introduction & Skills (Overview) ───────────────────────
  introduction: `Hi! I'm a passionate Full Stack Developer with expertise in building scalable web applications using MERN stack, Python, and exploring the frontiers of AI/ML. I love turning complex problems into elegant solutions.`,

  skills: [
    { category: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'TypeScript', 'HTML5', 'CSS3'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'Django', 'FastAPI', 'REST APIs', 'GraphQL'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'] },
    { category: 'AI / ML', items: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV'] },
    { category: 'DevOps', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Netlify', 'CI/CD'] },
    { category: 'Tools', items: ['VS Code', 'Postman', 'Figma', 'Jira', 'Linux'] },
  ],

  // ── Projects ────────────────────────────────────────────────
  projects: [
    {
      id: 1,
      category: 'Full Stack',
      title: 'Simply Saral',
      description: 'Built a centralized platform enabling Indian citizens to easily discover and access government schemes. Designed a responsive user interface to improve navigation and scheme search efficiency. Future scope includes AI chatbot and mobile app expansion',
      images: [
        '/Projects/simplysaral.png',
      ],
      demoVideo: 'https://www.youtube.com/watch?v=fFI7NmgH8ac',
      githubLink: 'https://github.com/maheshdasarwad/simply_saral_next_majorproject.git',
      liveLink: 'https://simply-saral.vercel.app/',
      techStack: ['React', 'Tailwind CSS', 'MongoDB' ,'Next.js',  ],
    },
    {
      id: 2,
      category: 'Full Stack',
      title: 'AgriPulse',
      description: 'Developed an GenAI-integrated web application to help farmers make informed decisions across the complete crop lifecycle. This solution improves farm productivity, reduces losses due to diseases, and supports smarter financial utilization with relevant government scheme awareness.',
      images: [
        '/Projects/agripulsess.png',
      ],
      demoVideo: '',
      githubLink: 'https://github.com/maheshdasarwad/AgriPulse',
      liveLink: '',
      techStack: ['React', 'FastAPI', 'Python', 'Clerk'],
    },
    {
      id: 3,
      category: 'Frontend',
      title: 'Spotify Clone',
      description: 'Built a responsive Spotify-style music player using React and Tailwind CSS, allowing users to play, pause, and navigate songs smoothly. Focused on clean UI, real-time controls, and a simple, intuitive user experience.',
      images: [
        '/Projects/spotifycloness.png',
      ],
      demoVideo: '',
      githubLink: 'https://github.com/maheshdasarwad/Spotify_Clone',
      liveLink: '',
      techStack: ['React', 'Tailwind CSS'],
    },
    {
      id: 4,
      category: 'Full Stack Python',
      title: 'CarForum',
      description: 'Built a web application demonstrating secure user authentication and authorization using Node.js, Express, and JWT tokens, with MongoDB used for storing and managing data. Implemented a simple frontend to display car information.',
      images: [
         '/Projects/carforumss.png',
         '/Projects/carforumss2.png',
         '/Projects/carforumss3.png',
      ],
      demoVideo: '',
      githubLink: 'https://github.com/maheshdasarwad/mern_authentication_project',
      liveLink: '',
      techStack: ['Node.js', 'Express', 'JWT', 'MongoDB', 'React'],
    },
    
  ],

  // ── Education ───────────────────────────────────────────────
  education: [
    {
      degree: 'Bachelor of Engineering',
      field: 'Computer Engineering',
      institution: 'Dr D Y Patil College Of Engineering, Akurdi, Pune',
      location: '',
      startYear: '2023',
      endYear: '2027',
      gpa: 'CGPA: 9.41',
      logo: '/clg_logo.png',
       highlights: [],
    },
    {
      degree: 'HSC (12th)',
      field: 'PCM',
      institution: 'Netaji Subhash Chandra Bose Jr. College, Nanded',
      location: '',
      startYear: '2021',
      endYear: '2022',
      gpa: 'Percentage: 75.33%',
      logo: '/nsb_logo.png',
      highlights: [],
    },
    {
      degree: 'CBSE (10th)',
      field: '',
      institution: 'Nagarjuna Public School, Nanded',
      location: '',
      startYear: '2017',
      endYear: '2020',
      gpa: 'Percentage: 90%',
      logo: '/nps_logo.png',
       highlights: [],
    },
  ],

  // ── Certifications ──────────────────────────────────────────
  certifications: [
    {
      id: 1,
      title: 'Python for Data Science',
      issuer: 'NPTEL',
      date: '2025',
      image: '/certificates/NPTEL2025.png',
      credentialUrl: '',
    },
    {
      id: 2,
      title: 'AI Foundation',
      issuer: 'Oracle',
      date: '2025',
      image: '/certificates/OracleAIFoundationeCertificate.png',
      credentialUrl: '',
    },
    {
      id: 3, 
      title: 'Data Structure Algorithm',
      issuer: 'Udemy',
      date: '2025',
      image: '/certificates/UdemyCertificateCPP.jpg',
      credentialUrl: '',

    },
    {
      id: 4,
      
      title: 'Project Competition',
      issuer: 'Computer Department',
      date: '2025',
      image: '/certificates/PBL2025.jpg',
      credentialUrl: '',
     
    },
    {
      id: 5,
      title: 'Fundamentals of Deep Learning',
      issuer: 'Nvidia',
      date: '2024',
      image: '/certificates/nvidia1.png',
      credentialUrl: '',
    },
    {
      id: 6,
      title: 'Generative AI',
      issuer: 'EduBridge',
      date: '2024',
      image: '/certificates/EduBridge_GenAI_Certificate.png',
      credentialUrl: '',
    },
  ],

  // ── Experience ──────────────────────────────────────────────
  experience: [
    {
      role: 'Full Stack Developer Intern',
      company: 'Tech Startup XYZ',
      location: 'Remote',
      type: 'Internship',
      startDate: 'Jun 2024',
      endDate: 'Aug 2024',
      logo: '',
      description: [
        'Built RESTful APIs using Node.js and Express serving 10k+ daily users',
        'Migrated legacy jQuery frontend to React, improving performance by 40%',
        'Implemented real-time notifications using Socket.io',
        'Collaborated with UI/UX team to deliver pixel-perfect components',
      ],
      techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    },
    {
      role: 'Frontend Developer Intern',
      company: 'Digital Agency ABC',
      location: 'Mumbai, India',
      type: 'Internship',
      startDate: 'Dec 2023',
      endDate: 'Feb 2024',
      logo: '',
      description: [
        'Developed 5+ responsive landing pages for client campaigns',
        'Integrated Razorpay and Stripe payment gateways',
        'Reduced page load time by 35% through lazy loading and code splitting',
      ],
      techStack: ['React', 'Tailwind CSS', 'TypeScript'],
    },
  ],

  // ── Extracurricular ─────────────────────────────────────────
  extracurricular: [
    {
      title: 'Technical Club Lead',
      organization: 'CodeCraft Club — College',
      period: '2023 – 2025',
      icon: '🚀',
      description: 'Led a 50-member coding club. Organized 10+ workshops, hackathons, and coding contests. Mentored juniors on web development and competitive programming.',
      highlights: ['Organized 3 inter-college hackathons', 'Grew club membership by 120%', 'Conducted weekly DSA sessions'],
    },
    {
      title: 'Hackathon Participant',
      organization: 'Smart India Hackathon 2023',
      period: 'Sep 2023',
      icon: '🏆',
      description: 'Reached national finals with an AI-powered crop disease detection system. Team of 6 built and deployed a full-stack solution in 36 hours.',
      highlights: ['National finalist', 'Built CNN model with 92% accuracy', '36-hour sprint'],
    },
    {
      title: 'Open Source Contributor',
      organization: 'GitHub / Various Projects',
      period: '2022 – Present',
      icon: '💻',
      description: 'Active contributor to open source projects. Contributed bug fixes and features to 5+ repositories including React component libraries.',
      highlights: ['50+ PRs merged', '200+ GitHub stars earned', 'GSSoC 2024 participant'],
    },
    {
      title: 'Cultural Secretary',
      organization: 'Student Council',
      period: '2022 – 2023',
      icon: '🎭',
      description: 'Coordinated cultural events and inter-college fests. Managed a team of 20 volunteers for annual tech fest with 500+ attendees.',
      highlights: ['Managed ₹2L budget', '500+ attendees', '20-person team'],
    },
  ],
}

export type ProjectCategory = 'All' | 'Frontend' | 'Full Stack MERN' | 'Full Stack Python' | 'AI/ML'
export const PROJECT_CATEGORIES: ProjectCategory[] = ['All', 'Frontend', 'Full Stack MERN', 'Full Stack Python', 'AI/ML']
