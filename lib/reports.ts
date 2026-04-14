export type ReportCategory =
  | 'Clinical Core'
  | 'Disease Risk'
  | 'Pharmacogenomics'
  | 'Lifestyle & Longevity'
  | 'Reproductive & Specialized';

export interface Report {
  id: string;
  title: string;
  category: ReportCategory;
  blurb: string;
  highlights: string[];
  pdf: string;
  accent: string; // tailwind from-/to- color names
}

export const REPORTS: Report[] = [
  {
    id: 'clinical_summary',
    title: 'Clinical Genomic Summary',
    category: 'Clinical Core',
    blurb:
      'A complete top-level summary of your genomic findings — clinically reviewed and prepared for your physician.',
    highlights: ['Doctor-Verified', 'Key Findings', 'Drug Alerts'],
    pdf: '/reports/clinical_summary_report.pdf',
    accent: 'from-teal-500/20 to-cyan-500/5',
  },
  {
    id: 'prevention_plan',
    title: 'Prevention Plan',
    category: 'Clinical Core',
    blurb:
      'Personalised, age-appropriate prevention recommendations designed around your unique genetic profile.',
    highlights: ['Lifestyle', 'Screening Schedule', 'Risk Tiers'],
    pdf: '/reports/prevention_plan_report.pdf',
    accent: 'from-emerald-500/20 to-teal-500/5',
  },
  {
    id: 'family_health_map',
    title: 'Family Health Map',
    category: 'Clinical Core',
    blurb:
      'Multi-generational hereditary risk view to support family screening and genetic counseling decisions.',
    highlights: ['Family Risk', 'Cascade Screening', 'Inheritance'],
    pdf: '/reports/family_health_map_report.pdf',
    accent: 'from-cyan-500/20 to-blue-500/5',
  },
  {
    id: 'cancer',
    title: 'Cancer Risk Insight',
    category: 'Disease Risk',
    blurb:
      'Hereditary cancer predisposition assessment across major cancer types, designed to support early detection.',
    highlights: ['Hereditary Cancer', '8 Cancer Panels', 'Early Detection'],
    pdf: '/reports/cancer_report.pdf',
    accent: 'from-pink-500/20 to-rose-500/5',
  },
  {
    id: 'cardiac_diabetes',
    title: 'Cardiac & Diabetes',
    category: 'Disease Risk',
    blurb:
      'Cardiovascular and type 2 diabetes predisposition assessment to support preventive care planning.',
    highlights: ['Type 2 Diabetes', 'Heart Disease', 'Lipid Health'],
    pdf: '/reports/cardiac_diabetes_report.pdf',
    accent: 'from-red-500/20 to-orange-500/5',
  },
  {
    id: 'liver_lipid',
    title: 'Liver & Lipid',
    category: 'Disease Risk',
    blurb:
      'Liver function and lipid metabolism insights — fatty liver, cholesterol, and drug-related liver risks.',
    highlights: ['Fatty Liver', 'Cholesterol', 'Drug Sensitivity'],
    pdf: '/reports/liver_lipid_report.pdf',
    accent: 'from-amber-500/20 to-yellow-500/5',
  },
  {
    id: 'kidney',
    title: 'Kidney Health',
    category: 'Disease Risk',
    blurb:
      'Hereditary kidney disease screening and chronic kidney disease risk assessment.',
    highlights: ['Hereditary Risk', 'CKD Risk', 'Family History'],
    pdf: '/reports/kidney_report.pdf',
    accent: 'from-blue-500/20 to-indigo-500/5',
  },
  {
    id: 'neurodegeneration',
    title: 'Neurodegeneration',
    category: 'Disease Risk',
    blurb:
      'Predisposition insights for Alzheimer\'s, Parkinson\'s, and related neurodegenerative conditions.',
    highlights: ["Alzheimer's", "Parkinson's", 'Memory Health'],
    pdf: '/reports/neurodegeneration_report.pdf',
    accent: 'from-violet-500/20 to-purple-500/5',
  },
  {
    id: 'autoimmune',
    title: 'Autoimmune Risk',
    category: 'Disease Risk',
    blurb:
      'Autoimmune predisposition assessment including arthritis, lupus, IBD, and type 1 diabetes risks.',
    highlights: ['Arthritis', 'Lupus', 'IBD'],
    pdf: '/reports/autoimmune_report.pdf',
    accent: 'from-fuchsia-500/20 to-pink-500/5',
  },
  {
    id: 'rare_disease',
    title: 'Rare Disease Panel',
    category: 'Disease Risk',
    blurb:
      'Comprehensive screen for known rare genetic conditions, clinically reviewed by our medical team.',
    highlights: ['Rare Conditions', 'Doctor-Reviewed', 'Comprehensive'],
    pdf: '/reports/rare_disease_report.pdf',
    accent: 'from-indigo-500/20 to-violet-500/5',
  },
  {
    id: 'pharmacogenomics',
    title: 'Pharmacogenomics',
    category: 'Pharmacogenomics',
    blurb:
      'Personalised drug-response insights — find out which medications work best for you and which to avoid.',
    highlights: ['Drug Response', 'Avoid Side Effects', 'Personalised'],
    pdf: '/reports/pharmacogenomics_report.pdf',
    accent: 'from-teal-500/20 to-emerald-500/5',
  },
  {
    id: 'longevity',
    title: 'Longevity Insight',
    category: 'Lifestyle & Longevity',
    blurb:
      'Biological aging insights and lifestyle recommendations to support long-term health and well-being.',
    highlights: ['Biological Age', 'Healthy Aging', 'Wellness Plan'],
    pdf: '/reports/longevity_report.pdf',
    accent: 'from-amber-500/20 to-orange-500/5',
  },
  {
    id: 'vision_hearing',
    title: 'Vision & Hearing',
    category: 'Lifestyle & Longevity',
    blurb:
      'Hereditary vision and hearing health assessment for early identification and care planning.',
    highlights: ['Vision Health', 'Hearing Health', 'Early Care'],
    pdf: '/reports/vision_hearing_report.pdf',
    accent: 'from-sky-500/20 to-blue-500/5',
  },
  {
    id: 'carrier_screening',
    title: 'Carrier Screening',
    category: 'Reproductive & Specialized',
    blurb:
      'Find out which inherited conditions you may carry and could pass on — essential for family planning.',
    highlights: ['Family Planning', 'Inherited Risks', 'Confidential'],
    pdf: '/reports/carrier_screening_report.pdf',
    accent: 'from-rose-500/20 to-pink-500/5',
  },
  {
    id: 'prenatal',
    title: 'Prenatal Insight',
    category: 'Reproductive & Specialized',
    blurb:
      'Prenatal genetic risk insights to support expecting parents and their care providers.',
    highlights: ['Prenatal Care', 'Risk Assessment', 'Peace of Mind'],
    pdf: '/reports/prenatal_report.pdf',
    accent: 'from-pink-500/20 to-fuchsia-500/5',
  },
  {
    id: 'mens_health',
    title: "Men's Health",
    category: 'Reproductive & Specialized',
    blurb:
      'Male-specific health insights including prostate, fertility, and hormone-related genetic factors.',
    highlights: ['Prostate Health', 'Fertility', 'Hormone Health'],
    pdf: '/reports/mens_health_report.pdf',
    accent: 'from-blue-500/20 to-cyan-500/5',
  },
  {
    id: 'womens_health',
    title: "Women's Health",
    category: 'Reproductive & Specialized',
    blurb:
      'Female-specific health insights including breast and ovarian risk, hormonal balance, and reproductive health.',
    highlights: ['Hereditary Risk', 'Hormonal Health', 'Wellness'],
    pdf: '/reports/womens_health_report.pdf',
    accent: 'from-fuchsia-500/20 to-rose-500/5',
  },
];

export const CATEGORIES: ReportCategory[] = [
  'Clinical Core',
  'Disease Risk',
  'Pharmacogenomics',
  'Lifestyle & Longevity',
  'Reproductive & Specialized',
];
