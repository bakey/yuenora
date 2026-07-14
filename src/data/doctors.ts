import { assetUrl } from "@/lib/assets";
export interface Doctor {
  id: number;
  name: string;
  title: string;
  specialty: string;
  hospitalTier: string;
  experience: string;
  image: string;
  expertise: string[];
  services: string[];
  description: string;
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Wei Zhang",
    title: "Chief Physician",
    specialty: "Oncology",
    hospitalTier: "Class-A Tertiary Hospital",
    experience: "22+ years",
    image: assetUrl("/images/doctor-1.jpg"),
    expertise: ["Lung Cancer", "Gastric Cancer", "Immunotherapy", "Targeted Therapy"],
    services: ["Online Consultation", "Second Opinion", "Treatment Plan Review"],
    description: "Specializes in comprehensive cancer care with extensive experience in both solid tumors and hematological malignancies.",
  },
  {
    id: 2,
    name: "Dr. Lily Chen",
    title: "Associate Chief Physician",
    specialty: "Neurology",
    hospitalTier: "Class-A Tertiary Hospital",
    experience: "15+ years",
    image: assetUrl("/images/doctor-2.jpg"),
    expertise: ["Stroke", "Epilepsy", "Parkinson's Disease", "Neurodegenerative Disorders"],
    services: ["Online Consultation", "Second Opinion", "Medical Travel Recommendation"],
    description: "Expert in diagnosing and treating complex neurological conditions with a focus on patient-centered care.",
  },
  {
    id: 3,
    name: "Dr. Ming Liu",
    title: "Chief Physician",
    specialty: "Orthopedics",
    hospitalTier: "Class-A Tertiary Hospital",
    experience: "20+ years",
    image: assetUrl("/images/doctor-3.jpg"),
    expertise: ["Joint Replacement", "Spine Surgery", "Sports Injuries", "Minimally Invasive Surgery"],
    services: ["Online Consultation", "Second Opinion", "Treatment Plan Review", "Medical Travel Recommendation"],
    description: "Renowned orthopedic surgeon specializing in joint reconstruction and minimally invasive spinal procedures.",
  },
  {
    id: 4,
    name: "Dr. Sophia Wang",
    title: "Chief Physician",
    specialty: "Cardiology",
    hospitalTier: "Class-A Tertiary Hospital",
    experience: "18+ years",
    image: assetUrl("/images/doctor-4.jpg"),
    expertise: ["Interventional Cardiology", "Heart Failure", "Arrhythmia", "Hypertension Management"],
    services: ["Online Consultation", "Second Opinion", "Treatment Plan Review"],
    description: "Leading cardiologist with expertise in complex cardiac interventions and chronic heart disease management.",
  },
  {
    id: 5,
    name: "Dr. Hong Li",
    title: "Chief Physician",
    specialty: "Neurosurgery",
    hospitalTier: "Class-A Tertiary Hospital",
    experience: "25+ years",
    image: assetUrl("/images/doctor-5.jpg"),
    expertise: ["Brain Tumors", "Cerebrovascular Surgery", "Spinal Cord Disorders", "Minimally Invasive Neurosurgery"],
    services: ["Second Opinion", "Treatment Plan Review", "Medical Travel Recommendation"],
    description: "Distinguished neurosurgeon with over two decades of experience in treating complex brain and spinal conditions.",
  },
  {
    id: 6,
    name: "Dr. Alex Yang",
    title: "Associate Chief Physician",
    specialty: "Orthopedics",
    hospitalTier: "Class-A Tertiary Hospital",
    experience: "12+ years",
    image: assetUrl("/images/doctor-6.jpg"),
    expertise: ["Sports Medicine", "Knee Arthroscopy", "Shoulder Surgery", "Cartilage Repair"],
    services: ["Online Consultation", "Second Opinion", "Medical Travel Recommendation"],
    description: "Sports medicine specialist focusing on minimally invasive joint procedures and athletic injury rehabilitation.",
  },
  {
    id: 7,
    name: "Dr. Rachel Xu",
    title: "Chief Physician",
    specialty: "Dermatology",
    hospitalTier: "Class-A Tertiary Hospital",
    experience: "16+ years",
    image: assetUrl("/images/doctor-7.jpg"),
    expertise: ["Skin Cancer", "Psoriasis", "Autoimmune Skin Diseases", "Cosmetic Dermatology"],
    services: ["Online Consultation", "Second Opinion", "Treatment Plan Review"],
    description: "Board-certified dermatologist combining medical and aesthetic dermatology for comprehensive skin health solutions.",
  },
  {
    id: 8,
    name: "Dr. Guo Huang",
    title: "Chief Physician",
    specialty: "Traditional Chinese Medicine",
    hospitalTier: "Class-A Tertiary Hospital",
    experience: "30+ years",
    image: assetUrl("/images/doctor-8.jpg"),
    expertise: ["TCM Oncology Support", "Chronic Disease Management", "Herbal Medicine", "Acupuncture"],
    services: ["Online Consultation", "Treatment Plan Review"],
    description: "Master practitioner of Traditional Chinese Medicine with decades of experience in integrative cancer care and chronic conditions.",
  },
  {
    id: 9,
    name: "Dr. Emily Zhao",
    title: "Associate Chief Physician",
    specialty: "Fertility & IVF",
    hospitalTier: "Class-A Tertiary Hospital",
    experience: "14+ years",
    image: assetUrl("/images/doctor-9.jpg"),
    expertise: ["IVF/ICSI", "Recurrent Miscarriage", "PCOS", "Fertility Preservation"],
    services: ["Online Consultation", "Second Opinion", "Treatment Plan Review", "Medical Travel Recommendation"],
    description: "Reproductive medicine specialist helping couples achieve their dream of parenthood through advanced fertility treatments.",
  },
  {
    id: 10,
    name: "Dr. Grace Lin",
    title: "Chief Physician",
    specialty: "Dentistry",
    hospitalTier: "Class-A Tertiary Hospital",
    experience: "13+ years",
    image: assetUrl("/images/doctor-10.jpg"),
    expertise: ["Dental Implants", "Cosmetic Dentistry", "Oral Surgery", "Full Mouth Rehabilitation"],
    services: ["Online Consultation", "Second Opinion", "Medical Travel Recommendation"],
    description: "Expert dental surgeon specializing in implantology and full-mouth aesthetic rehabilitation.",
  },
  {
    id: 11,
    name: "Dr. James Wu",
    title: "Chief Physician",
    specialty: "Cosmetic Medicine",
    hospitalTier: "Class-A Tertiary Hospital",
    experience: "17+ years",
    image: assetUrl("/images/doctor-11.jpg"),
    expertise: ["Facial Rejuvenation", "Rhinoplasty", "Body Contouring", "Anti-aging Treatments"],
    services: ["Online Consultation", "Second Opinion", "Treatment Plan Review", "Medical Travel Recommendation"],
    description: "Leading cosmetic surgeon combining artistic vision with surgical precision for natural-looking aesthetic results.",
  },
  {
    id: 12,
    name: "Dr. Anna Feng",
    title: "Associate Chief Physician",
    specialty: "Rehabilitation",
    hospitalTier: "Class-A Tertiary Hospital",
    experience: "11+ years",
    image: assetUrl("/images/doctor-12.jpg"),
    expertise: ["Stroke Rehabilitation", "Spinal Cord Injury", "Chronic Pain Management", "Neurological Recovery"],
    services: ["Online Consultation", "Treatment Plan Review", "Medical Travel Recommendation"],
    description: "Dedicated rehabilitation specialist focused on maximizing functional recovery and quality of life for patients.",
  },
];

export const pricingPlans = [
  {
    name: "Basic Review",
    price: "$99",
    description: "Medical record review with initial feedback",
    features: [
      "Medical record review",
      "Initial doctor feedback",
      "3–5 working days turnaround",
      "Suitable for simple cases",
    ],
    popular: false,
  },
  {
    name: "Specialist Consultation",
    price: "$199",
    description: "Comprehensive online consultation with a specialist",
    features: [
      "Online consultation with a specialist",
      "Medical report summary",
      "Treatment direction suggestion",
      "Bilingual coordinator support",
      "Most popular choice",
    ],
    popular: true,
  },
  {
    name: "Expert Second Opinion",
    price: "$599",
    description: "Senior specialist multidisciplinary review",
    features: [
      "Senior specialist or multidisciplinary review",
      "Detailed treatment plan discussion",
      "Hospital recommendation in China",
      "Priority scheduling support",
      "Suitable for complex cases",
    ],
    popular: false,
  },
];

export const specialties = [
  { name: "Oncology", icon: "Microscope" },
  { name: "Neurology", icon: "Brain" },
  { name: "Orthopedics", icon: "Bone" },
  { name: "Cardiology", icon: "Heart" },
  { name: "Fertility & IVF", icon: "Baby" },
  { name: "Dermatology", icon: "Sparkles" },
  { name: "Cosmetic Medicine", icon: "Scissors" },
  { name: "Dentistry", icon: "Smile" },
  { name: "Traditional Chinese Medicine", icon: "Leaf" },
  { name: "Rehabilitation", icon: "Activity" },
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Upload Medical Records",
    description: "Securely upload your medical history, reports, and imaging through our encrypted platform.",
  },
  {
    step: "02",
    title: "Case Review by Coordinator",
    description: "Our bilingual medical coordinator reviews your case and prepares a summary for the specialist.",
  },
  {
    step: "03",
    title: "Match with Chinese Doctor",
    description: "We match you with the most suitable specialist from a top-tier Class-A hospital in China.",
  },
  {
    step: "04",
    title: "Online Consultation",
    description: "Connect with your doctor via secure video call and receive detailed medical guidance.",
  },
  {
    step: "05",
    title: "Receive Medical Opinion",
    description: "Get a comprehensive written medical opinion with treatment recommendations within 24–48 hours.",
  },
];
