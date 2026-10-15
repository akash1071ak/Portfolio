import {
  Project,
  CaseStudy,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  AchievementItem,
  DesignProcessStep
} from '../types/portfolio';

export const personalInfo = {
  name: "AKASH G",
  role: "UI/UX Designer",
  roles: [
    "UI/UX Designer",
    "Product Designer",
    "Figma & Prototyping Specialist",
    "Human-Centered UX Researcher",
    "Interaction Designer"
  ],
  tagline: "Crafting intuitive, accessible, and high-impact digital experiences that turn complex user problems into elegant interfaces.",
  location: "Tharamani, Chennai, India",
  phone: "+91-9003973056",
  email: "ak.akash1071@gmail.com",
  linkedin: "https://linkedin.com/in/akash-g-90039ak",
  behance: "https://behance.net/yourusername",
  status: "Open to UI/UX & Product Design Opportunities",
  summary: "Creative and user-focused fresher with a strong foundation in user-centered design, wireframing, and prototyping. Skilled in conducting user research, building design systems, and creating high-fidelity interactive prototypes using Figma and Adobe XD. Passionate about solving real user problems through intuitive, accessible, and visually engaging interfaces. Seeking a UI/UX Designer role to contribute to end-to-end product design.",
  philosophy: "Good design is invisible—it removes friction, builds instant trust, and empowers users without demanding cognitive strain.",
  stats: [
    { label: "Design Internships", value: "2+" },
    { label: "Usability Tests Run", value: "10+ Users" },
    { label: "Design Hackathon", value: "Finalist" },
    { label: "Case Study Screens", value: "40+ UI Views" }
  ]
};

export const caseStudies: Record<string, CaseStudy> = {
  "vehicle-repair-assistant": {
    id: "vehicle-repair-assistant",
    title: "Vehicle Repair Assistant (FixGo)",
    subtitle: "On-Demand Roadside Bike Repair & Mechanic Dispatch Mobile App",
    clientOrContext: "Flagship Academic UI/UX Design Project",
    duration: "4 Weeks (End-to-End Design Sprint)",
    role: "Lead UI/UX Designer (User Research, IA, Wireframing, Figma Prototyping & Usability Testing)",
    tools: ["Figma", "Adobe XD", "Miro", "FigJam", "Adobe Illustrator"],
    background: "Motorcycle and scooter commuters frequently face sudden mechanical failures, flat tires, and engine stalls in unfamiliar areas or late at night. Riders struggle with finding verified nearby mechanics, communicating their exact breakdown location, and dealing with opaque repair prices.",
    businessGoal: "Design an intuitive mobile solution connecting stranded riders with certified roadside mechanics within a 5 km radius, ensuring transparent estimates and safe emergency dispatch under 60 seconds.",
    userProblem: "Riders experience severe anxiety during roadside breakdowns due to zero visibility on mechanic availability, lengthy emergency phone calls, and unpredictable repair bills.",
    researchInsights: [
      {
        title: "Fear of Unfair Pricing",
        description: "78% of interviewed riders reported being overcharged or handed surprise estimates when stranded at night.",
        stat: "78%"
      },
      {
        title: "Location Ambiguity",
        description: "64% struggled to explain landmarks or bridge exits to mechanics over the phone during stressful breakdowns.",
        stat: "64%"
      },
      {
        title: "Urgency vs Cognitive Load",
        description: "In emergency breakdown moments, users need a 1-tap SOS trigger rather than complex multi-step forms.",
        stat: "1-Tap SOS"
      }
    ],
    painPoints: [
      "Stuck on highways or remote city roads without knowing where the nearest mechanic shop is.",
      "No upfront estimate of parts and labor costs before the mechanic begins repairs.",
      "Lack of mechanic background checks and safety verification for late-night riders.",
      "Zero live ETA or GPS tracking to know if help is truly on the way."
    ],
    personas: [
      {
        name: "Sarah K.",
        role: "Daily IT Commuter (24 yrs, OMR IT Corridor)",
        bio: "Rides her scooter 18 km daily to work. Has minimal technical knowledge about bike engines and panics if the vehicle breaks down after dark.",
        quote: "I just need someone verified to arrive quickly and tell me exactly what it will cost without taking advantage of my situation.",
        goals: ["Rapid emergency roadside assistance", "Transparent labor and parts cost", "Verified mechanic badge for safety"],
        frustrations: ["Difficulty explaining exact coordinates", "Fear of being stranded alone after dark"]
      },
      {
        name: "Karthik R.",
        role: "Weekend Touring Biker (29 yrs, Adventure Rider)",
        bio: "Frequently travels highway routes between Chennai and Bengaluru. Needs quick access to specialized tire puncture and chain lubrication mechanics.",
        quote: "When my chain snaps 40 km outside the city, I need GPS pinpointing and an estimated arrival time right away.",
        goals: ["Live GPS tracking of repair van", "Transparent repair invoice", "Direct in-app messaging"],
        frustrations: ["Unreachable phone lines", "Vague arrival estimates ('10 minutes' turning into an hour)"]
      }
    ],
    userJourney: [
      { phase: "Breakdown Alert", action: "Bike stops running on road; user opens FixGo app", thought: "Will I find help quickly?", emotion: "frustrated" },
      { phase: "SOS Trigger", action: "Taps 'Emergency Breakdown' 1-touch SOS card", thought: "App immediately detected my GPS coordinates!", emotion: "neutral" },
      { phase: "Mechanic Match", action: "Selects issue (Flat Tire, Engine Stall, Brake Failure)", thought: "Clear estimated repair price range ($35-$50) shown upfront", emotion: "happy" },
      { phase: "Live Tracking", action: "Watches verified mechanic ride towards location on map", thought: "Help is 8 minutes away, feeling relieved", emotion: "happy" },
      { phase: "Completion", action: "Approves digital invoice and rates mechanic", thought: "No haggling, transparent and safe", emotion: "relieved" }
    ],
    wireframeNotes: [
      "Low-fidelity paper sketches tested 3 layout variations for the SOS emergency trigger to prevent accidental clicks while maintaining high contrast.",
      "Mid-fidelity wireframes consolidated symptom selection into 4 prominent icon cards (Flat Tire, Battery/Jumpstart, Chain/Engine, General Towing).",
      "Streamlined the booking checkout from 5 fragmented steps into a single 2-step affirmative drawer."
    ],
    designDecisions: [
      {
        decision: "Prominent SOS Banner with Haptic Confirmation",
        rationale: "Stressed users with trembling fingers require high-contrast touch targets (minimum 56px height) and haptic feedback."
      },
      {
        decision: "Transparent Repair Cost Estimator Card",
        rationale: "Directly solves the #1 user anxiety point discovered in research—fear of price gouging—by displaying transparent parts vs. labor estimates."
      },
      {
        decision: "High Contrast Dark Mode Theme",
        rationale: "Designed primarily for roadside and night-time viewing to prevent screen glare and conserve battery during emergency low-battery states."
      }
    ],
    usabilityTesting: [
      {
        metric: "Emergency Booking Time",
        result: "Reduced from 2m 14s to 38 seconds",
        insight: "Direct GPS auto-fill and quick symptom chips cut user input effort by 70%."
      },
      {
        metric: "Task Success Rate",
        result: "92% (11 out of 12 test users)",
        insight: "Users navigated from breakdown screen to confirmed mechanic dispatch on their first attempt."
      },
      {
        metric: "Trust & Safety Score",
        result: "4.8 / 5.0 Rating",
        insight: "Mechanic profile photo, verified badge, and live distance counter provided immense psychological comfort."
      }
    ],
    keyLearnings: [
      "Designing for high-stress situations requires brutal elimination of non-essential input fields.",
      "Transparency in pricing creates instant user trust in peer-to-peer service marketplaces.",
      "User testing with real commuters revealed that map legibility outdoors under bright sunlight requires high-contrast typography and prominent iconography."
    ]
  }
};

export const projects: Project[] = [
  {
    id: "vehicle-repair-assistant",
    title: "Vehicle Repair Assistant (FixGo)",
    category: "Mobile UX/UI",
    tagline: "On-demand roadside bike repair app featuring GPS mechanic dispatch, transparent estimates, and live route tracking.",
    role: "Lead UI/UX Designer",
    timeline: "Academic UI/UX Project",
    overview: "A comprehensive mobile UI/UX solution designed to solve motorcycle breakdowns. Includes user research, persona creation, wireframing, high-fidelity Figma mockups, and usability testing.",
    heroImage: "/assets/vehicle_repair_hero.jpg",
    problemStatement: "Motorcyclists experiencing roadside emergencies in unfamiliar areas suffer from lack of nearby mechanic contacts, fear of exorbitant pricing, and dangerous delays.",
    solution: "A high-fidelity mobile app with a 2-tap SOS emergency trigger, real-time GPS mechanic finder, transparent repair price estimates, and verified technician profiles.",
    tools: ["Figma", "Adobe XD", "FigJam", "Adobe Illustrator", "User Research"],
    metrics: [
      { label: "Emergency Booking", value: "< 40s" },
      { label: "Usability Success", value: "92%" },
      { label: "User Satisfaction", value: "4.8/5" }
    ],
    caseStudyId: "vehicle-repair-assistant",
    behanceUrl: "https://behance.net/yourusername",
    figmaUrl: "https://figma.com/@akashg"
  },
  {
    id: "login360-feature-module",
    title: "Feature Module & UI System",
    category: "Design System",
    tagline: "Collaborative user flows, wireframes, and design system components for an enterprise software feature module.",
    role: "UI/UX Design Intern",
    timeline: "July 2026 – Oct 2026 (Login 360)",
    overview: "During my UI/UX internship at Login 360, I collaborated with product managers and engineers to build user flows, wireframes, and high-fidelity mockups in Figma while conducting usability testing with 10+ users.",
    heroImage: "/assets/vehicle_repair_flow.jpg",
    problemStatement: "The existing application lacked consistent design components and intuitive user flows, leading to user hesitation and higher support tickets.",
    solution: "Crafted standardized UI components (buttons, input fields, cards, modal sheets) and restructured multi-step user workflows to ensure brand consistency and seamless task completion.",
    tools: ["Figma", "Design Systems", "Usability Testing", "Wireframing", "Component Tokens"],
    metrics: [
      { label: "Usability Testing", value: "10+ Users" },
      { label: "Design Consistency", value: "100%" },
      { label: "Workflow Drop-off", value: "-28%" }
    ],
    figmaUrl: "https://figma.com/@akashg"
  },
  {
    id: "design-thinking-hackathon",
    title: "Hackathon Concept: Civic Pulse",
    category: "Academic UX",
    tagline: "Award-winning rapid UX concept addressing urban community issue reporting and resolution tracking.",
    role: "UX Researcher & UI Designer",
    timeline: "Finalist, College Design Hackathon 2025",
    overview: "Created in a rapid 24-hour sprint as a finalist at the College-Level UI/UX Design Hackathon. Focused on empathetic public grievance reporting with location tagging and status feeds.",
    heroImage: "/assets/vehicle_repair_hero.jpg",
    problemStatement: "Citizens abandon reporting civic issues due to convoluted government portals and lack of feedback on submitted grievances.",
    solution: "Designed a clean, visual-first mobile app where users take a photo, categorize with smart tags, and receive push notification milestones as local councils resolve issues.",
    tools: ["Figma", "Adobe Photoshop", "Rapid Prototyping", "Design Thinking"],
    metrics: [
      { label: "Hackathon Status", value: "Finalist" },
      { label: "Sprint Duration", value: "24 Hours" },
      { label: "Prototype Screens", value: "18 Views" }
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "UI Design",
    iconName: "Palette",
    description: "Creating visually striking, pixel-perfect, and modern digital interfaces.",
    skills: [
      { name: "Visual Design & Aesthetics", level: 92, highlight: "Color harmonies, contrast, modern dark modes" },
      { name: "Layout & Visual Hierarchy", level: 90, highlight: "Grid systems, spacing tokens, focal points" },
      { name: "Typography & Font Pairing", level: 88, highlight: "Scale, readability, Space Grotesk / Inter" },
      { name: "Responsive & Mobile-First", level: 89, highlight: "Fluid layouts, breakpoint adaptability" },
      { name: "Design Systems & UI Kits", level: 86, highlight: "Reusable Figma components, auto-layout, variants" }
    ]
  },
  {
    title: "UX Research & Strategy",
    iconName: "Search",
    description: "Uncovering authentic user pain points through disciplined research methodologies.",
    skills: [
      { name: "User Interviews & Surveys", level: 88, highlight: "Empathetic questioning, quantitative analysis" },
      { name: "User Personas & Empathy Maps", level: 90, highlight: "Actionable archetypes, mental models" },
      { name: "User Journey & Flow Mapping", level: 87, highlight: "Touchpoints, friction spots, happy paths" },
      { name: "Information Architecture", level: 85, highlight: "Card sorting, sitemaps, intuitive navigation" },
      { name: "Usability Testing (10+ Users)", level: 89, highlight: "Task observation, feedback synthesis" },
      { name: "Accessibility (WCAG Basics)", level: 82, highlight: "Contrast ratios, accessible tap targets" }
    ]
  },
  {
    title: "Design Tools",
    iconName: "Wrench",
    description: "Industry-standard software for wireframing, prototyping, and asset creation.",
    skills: [
      { name: "Figma (Advanced Auto-layout & Variants)", level: 94, highlight: "Primary tool for end-to-end design" },
      { name: "Adobe XD", level: 85, highlight: "Interactive transitions, voice prototyping" },
      { name: "Adobe Photoshop", level: 82, highlight: "Image manipulation, visual assets" },
      { name: "Adobe Illustrator", level: 80, highlight: "Vector iconography, logos, custom badges" },
      { name: "Sketch (Basics)", level: 75, highlight: "Symbol libraries, Mac workflow" }
    ]
  },
  {
    title: "Technical & Code Literacy",
    iconName: "Code",
    description: "Understanding code constraints allows seamless developer collaboration.",
    skills: [
      { name: "HTML5 & Semantic Markup", level: 85, highlight: "Clean structure, SEO best practices" },
      { name: "CSS3 & Modern Styling (Tailwind)", level: 82, highlight: "Flexbox, CSS Grid, transitions" },
      { name: "JavaScript Fundamentals", level: 78, highlight: "DOM manipulation, event listeners" },
      { name: "Python Programming (Codsoft Intern)", level: 80, highlight: "Logic, problem solving, algorithms" }
    ]
  },
  {
    title: "Soft Skills & Mindset",
    iconName: "Sparkles",
    description: "The interpersonal qualities that make cross-functional product design thrive.",
    skills: [
      { name: "Design Thinking Methodology", level: 92, highlight: "Human-centered problem solving" },
      { name: "Cross-Functional Collaboration", level: 88, highlight: "Partnering with PMs & Developers" },
      { name: "Design Presentation & Storytelling", level: 86, highlight: "Defending design decisions with data" },
      { name: "Continuous Learning & Curiosity", level: 95, highlight: "Exploring AI in design and UX trends" }
    ]
  }
];

export const designProcessSteps: DesignProcessStep[] = [
  {
    stepNumber: "01",
    title: "Empathize",
    subtitle: "Understanding the Human Problem",
    description: "Immerse into the user's world through qualitative interviews, contextual observations, and empathy mapping to discover unspoken frustrations.",
    activities: ["User Interviews", "Surveys & Questionnaires", "Empathy Mapping", "Field Observation"],
    deliverables: ["User Insights Report", "Empathy Maps", "Initial Problem Statements"],
    icon: "Heart"
  },
  {
    stepNumber: "02",
    title: "Define",
    subtitle: "Framing the Core Challenge",
    description: "Synthesize raw research data to define precise user personas, pain points, and 'How Might We' statements that align user needs with business goals.",
    activities: ["Persona Formulation", "User Journey Mapping", "Pain Point Prioritization", "How Might We (HMW) Framing"],
    deliverables: ["Target User Personas", "Journey Map Diagrams", "Product Vision Brief"],
    icon: "Target"
  },
  {
    stepNumber: "03",
    title: "Ideate",
    subtitle: "Exploring Creative Possibilities",
    description: "Brainstorm wide variations of solutions, organize information hierarchy, and explore user navigation flows before touching pixels.",
    activities: ["Information Architecture", "Card Sorting", "Crazy 8s Sketching", "User Flow Mapping"],
    deliverables: ["Site/App Maps", "User Task Flows", "Low-Fi Paper Sketches"],
    icon: "Lightbulb"
  },
  {
    stepNumber: "04",
    title: "Wireframe & Prototype",
    subtitle: "Translating Ideas into Tangible UI",
    description: "Iterate from low-fidelity grayscale wireframes to pixel-perfect high-fidelity interactive Figma prototypes using atomic design tokens.",
    activities: ["Wireframing in Figma", "Atomic Design Systems", "Interactive Prototyping", "Micro-interaction Design"],
    deliverables: ["Mid-Fi Wireframes", "Interactive Figma Prototype", "Design Token Library"],
    icon: "Layers"
  },
  {
    stepNumber: "05",
    title: "Test & Iterate",
    subtitle: "Validating with Real Humans",
    description: "Conduct usability tests with real users (10+ testers), record metrics, analyze cognitive friction, and refine the design based on tangible feedback.",
    activities: ["Usability Testing Sessions", "Think-Aloud Protocols", "Task Completion Tracking", "Iterative Refinement"],
    deliverables: ["Usability Testing Matrix", "Design Refinement Log", "Production-Ready Specs"],
    icon: "CheckCircle"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "login360-intern",
    role: "UI/UX Design Intern",
    company: "Login 360",
    location: "Chennai, Tamil Nadu, India",
    period: "July 2026 – Oct 2026",
    type: "Internship",
    description: "Immersive UI/UX internship focused on end-to-end product design, user research, wireframing, and design system governance for real-world software modules.",
    achievements: [
      "Collaborated closely with product managers and frontend developers to architect intuitive user flows for a new feature module.",
      "Created low-to-high fidelity wireframes and interactive mockups in Figma, strictly maintaining consistency with the established enterprise design system.",
      "Conducted moderated usability testing sessions with 10+ users, synthesized critical task-friction feedback, and iterated final designs to increase workflow completion rates.",
      "Produced comprehensive design handoff specs, component states (hover, pressed, disabled), and spacing tokens for engineering implementation."
    ],
    technologies: ["Figma", "Design Systems", "Usability Testing", "Wireframing", "User Flows", "Prototyping"]
  },
  {
    id: "codsoft-intern",
    role: "Python Programming Intern",
    company: "Codsoft",
    location: "Chennai, Tamil Nadu, India",
    period: "Oct 2025 – Nov 2025",
    type: "Internship",
    description: "Technical programming internship strengthening computational thinking, algorithm design, and developer empathy for UI/UX implementation.",
    achievements: [
      "Completed practical Python programming assignments solving real-world data and logic challenges.",
      "Applied core computer science fundamentals: conditional statements, loops, functions, object-oriented principles, and modular code architecture.",
      "Developed and tested Python-based solutions for assigned tasks, significantly improving debugging speed and analytical problem-solving skills.",
      "Gained firsthand understanding of software engineering constraints, making collaboration with developers during UI handoff significantly smoother."
    ],
    technologies: ["Python", "Algorithms", "Data Structures", "Problem Solving", "Debugging"]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "bca-degree",
    degree: "Bachelor of Computer Application (BCA)",
    institution: "St. Peter's Institute of Higher Education and Research",
    period: "Aug 2023 – May 2026",
    score: "CGPA: 6.7 / 10",
    location: "Chennai, Tamil Nadu",
    highlights: [
      "Core Coursework: Human-Computer Interaction (HCI), Web Development, Software Engineering, Database Systems, Object-Oriented Programming.",
      "Active participant in tech symposiums and university design hackathons.",
      "Bridge builder between software development logic and user-centered interface aesthetics."
    ]
  },
  {
    id: "12th-grade",
    degree: "Higher Secondary Certificate (12th Grade)",
    institution: "Rural Institute of Open Schooling",
    period: "May 2023",
    score: "Percentage: 62.5%",
    location: "India",
    highlights: [
      "Foundational computer science, mathematics, and logical reasoning coursework.",
      "Developed early interest in digital art, visual layout design, and computer applications."
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-login360",
    title: "UI/UX Professional Course",
    issuer: "Login 360, Chennai",
    skillsLearned: ["Figma Mastery", "Wireframing & Prototyping", "Information Architecture", "Design Systems", "Live Project Execution"],
    badgeColor: "from-purple-600 to-indigo-600"
  },
  {
    id: "cert-coursera",
    title: "UI/UX Design Specialization",
    issuer: "Coursera",
    skillsLearned: ["User-Centered Design", "UX Research Methodologies", "High-Fidelity Mockups", "Usability Evaluation", "Interaction Design"],
    badgeColor: "from-violet-600 to-pink-600"
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: "hackathon-finalist",
    title: "Finalist — College-Level UI/UX Design Hackathon",
    organization: "College Design Showcase",
    year: "2025",
    description: "Competed against 40+ student design teams to ideate, wireframe, and prototype an empathetic digital civic reporting solution within an intensive 24-hour sprint.",
    tag: "Hackathon Finalist"
  },
  {
    id: "hci-club",
    title: "Active Member — College Design & HCI Club",
    organization: "St. Peter's Institute of Higher Education and Research",
    year: "2023 – Present",
    description: "Regularly participate in design critiques, peer portfolio reviews, UI workshops, and discussions on emerging trends in user experience and accessibility.",
    tag: "Community Leadership"
  }
];
