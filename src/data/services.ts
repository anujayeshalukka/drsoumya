import dentalImg from '../assets/dental.jpg';

// Approved clinic services (single source for the Services page and the Home carousel).
const IMG_GENERAL = 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=600';
const IMG_CLEANING = 'https://images.pexels.com/photos/6502305/pexels-photo-6502305.jpeg?auto=compress&cs=tinysrgb&w=600';
const IMG_IMPLANTS = 'https://images.pexels.com/photos/3779695/pexels-photo-3779695.jpeg?auto=compress&cs=tinysrgb&w=600';
const IMG_RCT = 'https://images.pexels.com/photos/6502304/pexels-photo-6502304.jpeg?auto=compress&cs=tinysrgb&w=600';
const IMG_ORTHO = 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=600';
const IMG_WHITENING = 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600';
const IMG_PEDIATRIC = 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=600';
const IMG_CLINIC = 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600';

export const services = [
  {
    icon: '🩺',
    title: 'Comprehensive Diagnosis & Treatment',
    desc: 'Comprehensive diagnosis and personalised treatment for dental and oral health conditions through detailed clinical examination and appropriate diagnostic investigations.',
    img: IMG_GENERAL,
    color: '#eff8ff',
  },
  {
    icon: '🩹',
    title: 'Oral Lesion & Ulcer Management',
    desc: 'Evaluation and management of recurrent and persistent oral ulcers, with assessment of possible underlying causes and appropriate treatment to relieve discomfort and promote healing.',
    img: IMG_CLINIC,
    color: '#f0fdfa',
  },
  {
    icon: '🔍',
    title: 'Oral Examination & Diagnosis',
    desc: 'Detailed evaluation of oral swellings, cysts, tumours, mucosal and jaw lesions, red and white lesions, ulcers, growths and other abnormal oral changes using clinical examination and diagnostic imaging.',
    img: IMG_GENERAL,
    color: '#fff7ed',
  },
  {
    icon: '🎗️',
    title: 'Oral Cancer Screening',
    desc: 'Thorough examination of oral tissues to identify suspicious or potentially precancerous changes at an early stage, with further investigation, monitoring or referral when required.',
    img: IMG_CLINIC,
    color: '#fef3c7',
  },
  {
    icon: '💆',
    title: 'TMJ Pain Management',
    desc: 'Evaluation and management of TMJ disorders and jaw-related pain, including clicking, locking, restricted mouth opening, facial pain and associated headaches. Management may include exercises, habit modification, conservative therapy and splint therapy.',
    img: IMG_GENERAL,
    color: '#fdf4ff',
  },
  {
    icon: '🤕',
    title: 'Orofacial Pain Management',
    desc: 'Evaluation and management of facial, jaw and oral pain, including burning sensation, dry mouth, pigmentation, recurrent ulcers, bad breath and other mouth-related complaints.',
    img: IMG_CLINIC,
    color: '#fff1f2',
  },
  {
    icon: '🔬',
    title: 'Oral Potentially Malignant Disorders Screening',
    desc: 'Detailed assessment of persistent red or white patches, tobacco-related lesions and other oral changes requiring investigation, monitoring or further management.',
    img: IMG_GENERAL,
    color: '#f0fdf4',
  },
  {
    icon: '💧',
    title: 'Salivary Gland Disorders',
    desc: 'Evaluation of salivary gland-related swelling, pain, altered salivary flow, dry mouth and excessive salivation, with appropriate diagnostic assessment and management.',
    img: IMG_CLINIC,
    color: '#eff8ff',
  },
  {
    icon: '😬',
    title: 'Bruxism & Teeth Grinding Management',
    desc: 'Assessment and management of teeth grinding and clenching, including habit modification, lifestyle guidance and customised occlusal splints when indicated.',
    img: IMG_GENERAL,
    color: '#f0fdfa',
  },
  {
    icon: '🩻',
    title: 'Digital X-Ray',
    desc: 'Advanced digital dental X-ray imaging for detailed assessment of teeth, jaws and surrounding structures, supporting accurate diagnosis and treatment planning with low radiation exposure.',
    img: IMG_CLINIC,
    color: '#fff7ed',
  },
  {
    icon: '🦷',
    title: 'Dental Restoration',
    desc: 'Functional and aesthetic restoration using Glass Ionomer Cement (GIC) and tooth-coloured composite restorations, selected according to individual clinical requirements.',
    img: IMG_GENERAL,
    color: '#fef3c7',
  },
  {
    icon: '🔄',
    title: 'Root Canal Treatment',
    desc: 'Root Canal Treatment (RCT), re-root canal treatment and restoration of treated teeth with appropriate post-and-core procedures and crown preparation to control infection and preserve natural teeth.',
    img: IMG_RCT,
    color: '#fdf4ff',
  },
  {
    icon: '💎',
    title: 'Dental Veneers & Smile Designing',
    desc: 'Personalised veneers and smile designing to improve tooth colour, shape, minor gaps and proportions while creating a natural, harmonious smile.',
    img: dentalImg,
    color: '#fff1f2',
  },
  {
    icon: '🧹',
    title: 'Ultrasonic Scaling & Polishing',
    desc: 'Professional removal of plaque, calculus and surface stains using ultrasonic scaling and polishing to support healthy gums, fresh breath and improved oral hygiene.',
    img: IMG_CLEANING,
    color: '#f0fdf4',
  },
  {
    icon: '🌿',
    title: 'Periodontal Disease Treatment',
    desc: 'Diagnosis and treatment of gum and periodontal diseases, including scaling, subgingival scaling, root surface debridement and appropriate periodontal surgical procedures, including flap surgery.',
    img: IMG_GENERAL,
    color: '#eff8ff',
  },
  {
    icon: '😁',
    title: 'Orthodontic Treatment',
    desc: 'Fixed and removable orthodontic treatments for malalignment, crowding, spacing and bite irregularities, tailored to individual age, condition and treatment needs.',
    img: IMG_ORTHO,
    color: '#f0fdfa',
  },
  {
    icon: '🔩',
    title: 'Dental Implants',
    desc: 'Implant-supported tooth replacement to restore chewing, speech, appearance and oral function, providing a fixed alternative to removable prosthetic appliances in suitable cases.',
    img: IMG_IMPLANTS,
    color: '#fff7ed',
  },
  {
    icon: '👶',
    title: 'Paediatric Dentistry',
    desc: 'Child-focused preventive and restorative care including caries management, pulpotomy, pulpectomy, stainless steel crowns, space maintainers and appropriate behaviour management.',
    img: IMG_PEDIATRIC,
    color: '#fef3c7',
  },
  {
    icon: '⚕️',
    title: 'Dental Extraction and Impaction (Surgical Removal)',
    desc: 'Routine dental extractions and surgical removal of impacted teeth, including wisdom teeth, following appropriate clinical and radiographic assessment.',
    img: IMG_CLINIC,
    color: '#fdf4ff',
  },
  {
    icon: '✨',
    title: 'Dental Bleaching',
    desc: 'Professional teeth-whitening treatments to reduce common stains and discolouration and enhance the brightness of your smile.',
    img: IMG_WHITENING,
    color: '#fff1f2',
  },
  {
    icon: '😀',
    title: 'Removable & Fixed Dentures',
    desc: 'Removable dentures and fixed prosthetic solutions such as crowns and bridges to restore chewing, speech, appearance and comfort.',
    img: IMG_IMPLANTS,
    color: '#f0fdf4',
  },
  {
    icon: '😊',
    title: 'Clear Aligners',
    desc: 'Custom-made, removable and discreet clear aligners for suitable cases of mild to moderate crowding, spacing and certain bite irregularities.',
    img: IMG_ORTHO,
    color: '#eff8ff',
  },
  {
    icon: '🪥',
    title: 'Preventive Dentistry',
    desc: 'Preventive care including oral hygiene guidance, fluoride application, pit and fissure sealants and personalised advice to help maintain long-term oral health.',
    img: IMG_CLEANING,
    color: '#f0fdfa',
  },
  {
    icon: '🛡️',
    title: 'Mouthguards & Occlusal Splints',
    desc: 'Customised protective appliances for teeth grinding, clenching, selected TMJ-related conditions and sports-related dental protection.',
    img: IMG_GENERAL,
    color: '#fff7ed',
  },
];
