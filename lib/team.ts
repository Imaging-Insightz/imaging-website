export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualifications?: string;
  bio?: string;
  photo: string;
  group: 'leadership' | 'operations';
}

export const TEAM: TeamMember[] = [
  {
    id: 'smita-kachewar',
    name: 'Dr. Smita Sankaye Kachewar',
    role: 'CEO & Founder',
    qualifications: 'Consultant Oncopathologist',
    bio: 'Deenanath Mangeshkar Hospital & Research Centre. Leading the vision of Radiogenomes AI — bringing clinical-grade genomic intelligence to Indian healthcare.',
    photo: '/team/smita-kachewar.webp',
    group: 'leadership',
  },
  {
    id: 'rahim-pathan',
    name: 'Rahim Pathan',
    role: 'COO & Co-Founder',
    qualifications: '',
    bio: 'Co-Founder and Chief Operating Officer at ImagingInsight AI — driving business strategy, partnerships, and operational excellence to scale Radiogenomes AI across India.',
    photo: '/team/rahim-pathan.png',
    group: 'leadership',
  },
  {
    id: 'sushil-kachewar',
    name: 'Prof. Dr. Sushil Kachewar',
    role: 'Chief Research Head',
    qualifications: 'MD, DNB, Ph.D',
    bio: 'Professor & HOD, Department of Radio-diagnosis at DY Patil Medical College, Pimpri, Pune. Driving the research and scientific excellence behind every Radiogenomes AI report.',
    photo: '/team/sushil-kachewar.webp',
    group: 'leadership',
  },
  {
    id: 'swapnali-borade',
    name: 'Dr. Swapnali Borade',
    role: 'Partner & Chief Clinical Advisor',
    qualifications: 'MBBS, DGO, DNB · Fellowship in Fetal Medicine · UK FMF Certified',
    bio: 'Chief Clinical Advisor guiding the clinical validation, report quality, and medical review workflow at Radiogenomes AI.',
    photo: '/team/swapnali-borade.webp',
    group: 'leadership',
  },
  {
    id: 'faiyyaz-hangad',
    name: 'Faiyyaz Hangad',
    role: 'Senior AI/ML Engineer',
    qualifications: '',
    bio: 'Building the AI engine and software platform that powers Radiogenomes AI — from intelligent processing to clinical-grade report generation.',
    photo: '/team/faiyyaz-hangad.webp',
    group: 'operations',
  },
  {
    id: 'nutika-bandekar',
    name: 'Nutika Bandekar',
    role: 'Operations Manager',
    qualifications: '',
    bio: 'Leading day-to-day operations, client coordination, and ensuring smooth report delivery across all partner hospitals and labs.',
    photo: '/team/nutika-bandekar.webp',
    group: 'operations',
  },
];
