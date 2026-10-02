import { services } from './services';

// Treatment gallery. Every item is a before/after pair for one treatment.
//
// The current images are flat illustrations (public/gallery/illustrative), NOT patient photographs,
// so every item is marked isIllustrative: true and is labelled "Illustrative Example" on the page.
// To publish a real case later: add the clinic's consented, verified photos, point beforeImage /
// afterImage at them, update the alt text, and set isIllustrative: false.

export type GalleryItem = {
  id: string;
  service: string; // must match an approved service title in services.ts
  category: GalleryCategory;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  isIllustrative: boolean;
};

export const galleryCategories = [
  'Restorative',
  'Cosmetic',
  'Orthodontics',
  'Implants & Dentures',
  'Periodontal',
  'Paediatric',
  'Oral Surgery',
] as const;
export type GalleryCategory = (typeof galleryCategories)[number];

// Descriptions come straight from the approved service text, so the wording stays in one place.
const approvedDescription = (service: string) => {
  const match = services.find(s => s.title === service);
  if (!match) throw new Error(`Gallery item references unknown service: ${service}`);
  return match.desc;
};

const illustrative = (
  id: string,
  service: string,
  category: GalleryCategory,
  beforeAlt: string,
  afterAlt: string,
): GalleryItem => ({
  id: `${id}-01`,
  service,
  category,
  title: service,
  description: approvedDescription(service),
  beforeImage: `/gallery/illustrative/${id}-before.svg`,
  afterImage: `/gallery/illustrative/${id}-after.svg`,
  beforeAlt,
  afterAlt,
  isIllustrative: true,
});

export const gallery: GalleryItem[] = [
  illustrative('dental-restoration', 'Dental Restoration', 'Restorative',
    'Illustrative before image for dental restoration: a front tooth with a dark cavity',
    'Illustrative after image for dental restoration: the same tooth with a tooth-coloured filling'),
  illustrative('root-canal-treatment', 'Root Canal Treatment', 'Restorative',
    'Illustrative before image for root canal treatment: cross-section of a tooth with decay and infected pulp',
    'Illustrative after image for root canal treatment: the same tooth with filled root canals and a crown'),
  illustrative('dental-veneers-smile-designing', 'Dental Veneers & Smile Designing', 'Cosmetic',
    'Illustrative before image for dental veneers: uneven, chipped and slightly discoloured front teeth with a gap',
    'Illustrative after image for dental veneers: the same smile with even, uniform front teeth'),
  illustrative('ultrasonic-scaling-polishing', 'Ultrasonic Scaling & Polishing', 'Periodontal',
    'Illustrative before image for scaling and polishing: deposits of calculus along the gum line',
    'Illustrative after image for scaling and polishing: the same teeth cleaned of deposits'),
  illustrative('periodontal-disease-treatment', 'Periodontal Disease Treatment', 'Periodontal',
    'Illustrative before image for periodontal treatment: red, swollen gums and calculus deposits',
    'Illustrative after image for periodontal treatment: the same teeth with healthier pink gums'),
  illustrative('orthodontic-treatment', 'Orthodontic Treatment', 'Orthodontics',
    'Illustrative before image for orthodontic treatment: crowded and rotated front teeth',
    'Illustrative after image for orthodontic treatment: the same teeth evenly aligned'),
  illustrative('dental-implants', 'Dental Implants', 'Implants & Dentures',
    'Illustrative before image for dental implants: side view of a gap where a tooth is missing',
    'Illustrative after image for dental implants: the same gap restored with an implant post and crown'),
  illustrative('paediatric-dentistry', 'Paediatric Dentistry', 'Paediatric',
    'Illustrative before image for paediatric dentistry: a decayed milk tooth',
    'Illustrative after image for paediatric dentistry: the same tooth restored with a stainless steel crown'),
  illustrative('dental-extraction-impaction', 'Dental Extraction and Impaction (Surgical Removal)', 'Oral Surgery',
    'Illustrative before image for surgical removal: side view of an impacted wisdom tooth lying beneath the gum',
    'Illustrative after image for surgical removal: the same area after the impacted tooth is removed'),
  illustrative('dental-bleaching', 'Dental Bleaching', 'Cosmetic',
    'Illustrative before image for dental bleaching: yellow, stained front teeth',
    'Illustrative after image for dental bleaching: the same teeth shown whiter'),
  illustrative('removable-fixed-dentures', 'Removable & Fixed Dentures', 'Implants & Dentures',
    'Illustrative before image for dentures: several missing upper teeth',
    'Illustrative after image for dentures: the same smile with the missing teeth replaced'),
  illustrative('clear-aligners', 'Clear Aligners', 'Orthodontics',
    'Illustrative before image for clear aligners: front teeth with spaces between them',
    'Illustrative after image for clear aligners: the same teeth with the spaces closed'),
];
