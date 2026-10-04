import type {
  NavItem,
  StatItem,
  AcademicProgram,
  Pillar,
  Facility,
  StudentLifeActivity,
  Testimonial,
  FAQItem,
} from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About TIS', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Campus', href: '#campus' },
  { label: 'Student Life', href: '#student-life' },
  { label: 'Admissions', href: '#admissions' },
];

export const SCHOOL_STATS: StatItem[] = [
  {
    id: 'campus',
    value: '22',
    numberValue: 22,
    suffix: ' Acres',
    label: 'Himalayan Campus',
    description: 'Expansive lush green campus designed with modern eco-friendly architectural infrastructure in Dehradun.',
    tag: '01 / INFRASTRUCTURE',
  },
  {
    id: 'ratio',
    value: '5:1',
    numberValue: 5,
    suffix: ':1',
    label: 'Student-Teacher Ratio',
    description: 'Ensuring intimate mentorship, personalized academic pathways, and individual pastoral care for every student.',
    tag: '02 / MENTORSHIP',
  },
  {
    id: 'sports',
    value: '16+',
    numberValue: 16,
    suffix: '+',
    label: 'Olympic Sports',
    description: 'From Horse Riding and Archery to All-Weather Swimming and Rifle Shooting with professional coaches.',
    tag: '03 / ATHLETICS',
  },
  {
    id: 'established',
    value: '2012',
    numberValue: 2012,
    suffix: '',
    label: 'Year Established',
    description: 'Founded under the aegis of Rishabh Educational Trust to rethink boarding education in North India.',
    tag: '04 / HERITAGE',
  },
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'early-middle',
    code: 'CLASS IV – VIII',
    title: 'Middle Years Academy',
    grades: 'Grades 4 to 8',
    description: 'Foundational CBSE curriculum focused on inquiry-based learning, cognitive development, STEM discovery, and creative expression in a supportive residential ecosystem.',
    highlights: [
      'Inquiry & Project-Based Curriculum',
      'Robotics & Experiential Science Labs',
      'Bilingual Fluency & Creative Writing',
      'Holistic Sports & Fine Arts Integration',
    ],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'secondary',
    code: 'CLASS IX – X',
    title: 'Secondary School',
    grades: 'Grades 9 to 10',
    description: 'Rigorously aligned with CBSE standards, preparing students with strong analytical skills, critical thinking, problem-solving, and competitive exam readiness.',
    highlights: [
      'CBSE Secondary Board Certification',
      'Advanced Mathematics & Sciences',
      'Leadership & Public Speaking Seminars',
      'Inter-School Olympiads & Tech Fests',
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'senior-secondary',
    code: 'CLASS XI – XII',
    title: 'Senior Secondary',
    grades: 'Grades 11 to 12',
    description: 'Specialized academic streams (Science, Commerce, Humanities) equipped with intensive university preparation, career counseling, and national competitive exam coaching.',
    highlights: [
      'Science, Commerce & Arts Streams',
      'Integrated JEE / NEET / SAT Preparation',
      'Global University Admissions Guidance',
      'Capstone Research & Social Impact Projects',
    ],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
  },
];

export const PHILOSOPHY_PILLARS: Pillar[] = [
  {
    id: 'gurukul',
    number: '01',
    title: 'Modern Gurukul Ethos',
    subtitle: 'Timeless Wisdom Meets Global Innovation',
    description: 'We fuse ancient Indian values of reverence, discipline, and self-inquiry with 21st-century technological fluency and international perspectives.',
  },
  {
    id: 'holistic',
    number: '02',
    title: 'Character & Pastoral Care',
    subtitle: 'Nurturing Moral Courage & Empathy',
    description: 'Residential life at TIS is built around emotional well-being, peer solidarity, structured routines, and faculty mentors residing on campus.',
  },
  {
    id: 'intellectual',
    number: '03',
    title: 'Intellectual Rigour',
    subtitle: 'Beyond Rote Memorization',
    description: 'Our pedagogy prioritizes deep conceptual mastery, analytical reasoning, and creative problem solving tailored to individual learning styles.',
  },
  {
    id: 'leadership',
    number: '04',
    title: 'Global Leadership',
    subtitle: 'Preparing Tomorrow’s Visionaries',
    description: 'Students participate in Model United Nations, environmental stewardship, debate societies, and community initiatives that cultivate confident leadership.',
  },
];

export const CAMPUS_FACILITIES: Facility[] = [
  {
    id: 'digital-classrooms',
    title: 'Smart Academic Blocks',
    category: 'Academics',
    description: 'Ergonomically designed classrooms integrated with interactive smart boards, acoustic control, and panoramic Himalayan views.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop',
    size: 'Spacious & Air-Cooled',
  },
  {
    id: 'sports-complex',
    title: 'Olympic-Grade Athletics',
    category: 'Sports & Wellness',
    description: 'Includes a synthetic lawn tennis court, full-size football field, cricket pitch, horse-riding arena, and 10m rifle shooting range.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    size: '16+ Sports Infrastructure',
  },
  {
    id: 'swimming-pool',
    title: 'All-Weather Aquatic Center',
    category: 'Aquatics',
    description: 'Semi-Olympic temperature-controlled swimming pool with dedicated life-guards and certified swim coaches for year-round training.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200&auto=format&fit=crop',
    size: 'Temperature Controlled',
  },
  {
    id: 'dorms',
    title: 'Residential Hostels',
    category: 'Boarding Life',
    description: 'Separate climate-controlled housing for boys and girls with housemasters, 24/7 security surveillance, and comfortable study lounges.',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop',
    size: 'Secure & Air-Conditioned',
  },
  {
    id: 'dining-hall',
    title: 'Central Refectory',
    category: 'Nutrition',
    description: 'Hygienic central dining facility providing balanced, nutritionist-curated multi-cuisine meals cooked in modern stainless-steel kitchens.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    size: 'Nutritious Organic Meals',
  },
  {
    id: 'library',
    title: 'Central Library & Media Center',
    category: 'Knowledge',
    description: 'Houses 20,000+ print volumes, international journals, digital databases, quiet study carrels, and e-learning terminals.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop',
    size: '20,000+ Volumes',
  },
];

export const STUDENT_LIFE_ACTIVITIES: StudentLifeActivity[] = [
  {
    id: 'equestrian',
    category: 'Equestrian Sports',
    title: 'Horse Riding & Polo Club',
    description: 'Professional equestrian training with skilled instructors, fostering poise, posture, and deep bond with horses on custom training rings.',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1200&auto=format&fit=crop',
    stats: 'Daily Training & Stables',
  },
  {
    id: 'performing-arts',
    category: 'Arts & Culture',
    title: 'Music, Drama & Fine Arts',
    description: 'State-of-the-art amphitheater and music studios for Indian classical, western instrumental, classical dance, and theatrical productions.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    stats: 'Annual Production Fests',
  },
  {
    id: 'archery-shooting',
    category: 'Precision Sports',
    title: 'Archery & Rifle Shooting Range',
    description: 'Precision sports training developing unwavering focus, hand-eye coordination, and mental toughness under national coaches.',
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1200&auto=format&fit=crop',
    stats: '10m Indoor Shooting Arena',
  },
  {
    id: 'robotics',
    category: 'Innovation & Tech',
    title: 'Robotics & AI Lab',
    description: 'Hands-on coding, 3D printing, circuit design, and automation projects allowing students to compete in national innovation expos.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
    stats: 'STEM Certified Lab',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'At Tulas, my child found an environment where academic ambition is matched by authentic care. The 5:1 teacher ratio means teachers truly know her personality, strengths, and ambitions.',
    author: 'Rajesh Sharma',
    role: 'Parent of Class X Student',
    relation: 'Boarding Parent (New Delhi)',
  },
  {
    id: '2',
    quote: 'The Modern Gurukul ethos is not just a slogan here. My son has learned self-reliance, physical discipline through horse riding, and academic depth that prepared him for top universities.',
    author: 'Ananya & Vikram Singhania',
    role: 'Parents of TIS Alumnus',
    relation: 'Alumni Parents (Mumbai)',
  },
  {
    id: '3',
    quote: 'Living on a 22-acre pristine campus in Dehradun away from city pollution gave me the focus to top my CBSE boards while competing at state-level archery championships.',
    author: 'Siddharth Mehta',
    role: 'TIS Batch of 2024',
    relation: 'Student Alumnus',
  },
];

export const ADMISSION_STEPS = [
  {
    step: '01',
    title: 'Online Enquiry & Registration',
    description: 'Fill out the digital enquiry form or visit the campus admissions cell to initiate your child’s application profile.',
  },
  {
    step: '02',
    title: 'Campus Tour & Interaction',
    description: 'Experience our 22-acre facility, meet school leadership, and discuss your child’s learning requirements.',
  },
  {
    step: '03',
    title: 'Aptitude Assessment',
    description: 'A friendly grade-appropriate evaluation designed to gauge conceptual understanding and learning potential.',
  },
  {
    step: '04',
    title: 'Provisional Offer & Enrollment',
    description: 'Upon selection, complete document verification and formalize admission to join the TIS family.',
  },
];

export const CONTACT_INFO = {
  address: 'Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun, Uttarakhand - 248011, India',
  phone: '+91-9837983791',
  landline: '0135-2699444 / 0135-2699666',
  email: 'info@tis.edu.in',
  admissionsEmail: 'admissions@tis.edu.in',
  hours: 'Monday – Saturday: 8:30 AM – 5:30 PM',
};

export const FAQS: FAQItem[] = [
  {
    category: 'Admissions',
    question: 'What grades are open for admission at Tulas International School?',
    answer: 'TIS offers co-educational residential boarding and day-boarding admissions for Class IV (Grade 4) through Class XII (Grade 12).',
  },
  {
    category: 'Boarding',
    question: 'How is pastoral care handled for residential students?',
    answer: 'Separate hostel wings for boys and girls are supervised by resident Housemasters and Housemistresses. Resident tutors and a 24/7 medical infirmary with qualified staff ensure round-the-clock safety and emotional support.',
  },
  {
    category: 'Academics',
    question: 'What curriculum does Tulas International School follow?',
    answer: 'TIS is affiliated with the Central Board of Secondary Education (CBSE), New Delhi. We supplement standard CBSE textbooks with analytical reasoning, STEM projects, and competitive examination coaching (JEE, NEET, CUET, SAT).',
  },
  {
    category: 'Campus',
    question: 'Where is the school located and how accessible is it?',
    answer: 'The 22-acre campus is located in Dhoolkot, Selaqui on Chakrata Road in Dehradun, approximately 45 minutes from Jolly Grant Airport and 30 minutes from Dehradun Railway Station.',
  },
];
