import { ServiceItem, ReviewItem, BeforeAfterItem } from '../types';

export const CLINIC_INFO = {
  name: "Dr. Roja's Dental Clinic",
  doctor: "Dr. Yenneti Roja",
  qualification: "BDS — Dental Surgeon",
  registrationNo: "A30469",
  council: "Andhra Pradesh Dental Council",
  rating: 5.0,
  reviewsCount: 25,
  address: "Door No: 30, 95-58, Appikonda R.H Colony, Kurmannapalem, Gajuwaka, Visakhapatnam, Andhra Pradesh - 530046",
  landmark: "Duvvada Railway Station Road, Near Kurmannapalem Junction (Opposite HP Petrol Bunk)",
  // Single source of truth for the primary contact number.
  // (Previously duplicated as `phone`/`phoneRaw`, which had drifted out of sync.)
  phone1: "+91 82474 91265",
  phone1Raw: "918247491265",
  whatsappNumber: "918247491265",
  languages: "Telugu, English & Hindi",
  areasServed: "Kurmannapalem, Duvvada, Ukkunagaram (Steel Plant Township), Gajuwaka, Vadlapudi & Aganampudi",
  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 9:00 PM" },
    { days: "Sunday", time: "9:00 AM – 5:00 PM" }
  ],
  googleMapsUrl: "https://maps.app.goo.gl/mtauKva9JUmjKvuN6",
  embedMapUrl: "https://maps.google.com/maps?q=Dr.+Roja's+Dental+Clinic+Kurmannapalem+Visakhapatnam&t=&z=15&ie=UTF8&iwloc=&output=embed"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "clear-aligners",
    title: "Clear Aligners & Invisible Braces",
    description: "Straighten teeth discreetly and comfortably without noticeable metal brackets.",
    details: "Custom 3D-planned transparent aligners offering virtually invisible, removable orthodontic alignment. Perfect for working professionals, college students, and teens.",
    isFeatured: true,
    iconName: "Sparkles",
    category: "orthodontic"
  },
  {
    id: "implants",
    title: "Dental Implants & Fixed Teeth",
    description: "Permanent, natural-looking tooth replacements with lifelong stability.",
    details: "Precision titanium implant placement with aesthetic zirconia crown restoration. Restores full chewing power, jawbone health, and smile confidence.",
    isFeatured: true,
    iconName: "ShieldCheck",
    category: "restorative"
  },
  {
    id: "rct",
    title: "Painless Root Canal Treatment (RCT)",
    description: "Painless single-sitting and multi-sitting RCT with modern rotary technology.",
    details: "Advanced endodontic care using local anesthesia, apex locators, and digital X-rays to save infected teeth gently and permanently without discomfort.",
    isFeatured: false,
    iconName: "Zap",
    category: "restorative"
  },
  {
    id: "whitening",
    title: "Teeth Whitening & Smile Designing",
    description: "Professional brightening and cosmetic smile makeovers for a radiant smile.",
    details: "Clinical-grade enamel whitening in 45 minutes plus custom aesthetic smile makeovers. Removes tough tea, coffee, and tobacco stains safely.",
    isFeatured: false,
    iconName: "Sparkles",
    category: "cosmetic"
  },
  {
    id: "dentures-bridges",
    title: "Dentures & Ceramic Bridges",
    description: "Custom-fitted solutions for complete smile and bite restoration.",
    details: "Lightweight, natural-looking flexible dentures and zirconia bridges tailored for comfortable daily chewing, natural aesthetics, and effortless speech.",
    isFeatured: false,
    iconName: "Layers",
    category: "restorative"
  },
  {
    id: "scaling",
    title: "Teeth Scaling & Deep Polishing",
    description: "Ultrasonic deep cleaning for healthy pink gums and lasting fresh breath.",
    details: "Painless removal of tartar, calculus build-up, and stubborn surface discoloration to prevent periodontitis, gum recession, and bad breath.",
    isFeatured: false,
    iconName: "Smile",
    category: "preventive"
  },
  {
    id: "fillings",
    title: "Tooth-Colored Dental Fillings",
    description: "Composite restorations that blend seamlessly with your natural teeth.",
    details: "Biocompatible composite resin fillings that repair cavities and tooth wear discretely while preserving maximum natural tooth structure.",
    isFeatured: false,
    iconName: "Sparkle",
    category: "restorative"
  },
  {
    id: "extraction",
    title: "Painless Tooth Extractions & Wisdom Tooth Removal",
    description: "Safe, gentle extractions including complex and impacted wisdom teeth.",
    details: "Trauma-free extractions under painless local anesthesia with rapid recovery protocols and thorough post-extraction care guidance.",
    isFeatured: false,
    iconName: "Activity",
    category: "surgical"
  },
  {
    id: "pediatric",
    title: "Kids & Pediatric Dental Care",
    description: "Warm, stress-free, and friendly dental care designed specifically for children.",
    details: "Preventive screenings, cavity fillings, topical fluoride treatment, habit-breaking appliances, and dental education in a calm environment.",
    isFeatured: false,
    iconName: "Smile",
    category: "preventive"
  },
  {
    id: "bonding",
    title: "Cosmetic Dental Bonding & Veneers",
    description: "Quick cosmetic fixes for chipped edges, gaps, and tooth discoloration.",
    details: "Single-session tooth reshaping and chip repair using aesthetic resin bonding and custom veneers for immediate smile enhancement.",
    isFeatured: false,
    iconName: "Wand2",
    category: "cosmetic"
  },
  {
    id: "checkups",
    title: "Routine Check-ups & Digital X-Ray",
    description: "Preventive digital screening to catch dental issues early before they cause pain.",
    details: "Comprehensive oral health evaluation, intraoral digital X-ray screening, and personalized preventive dental maintenance plans.",
    isFeatured: false,
    iconName: "Stethoscope",
    category: "preventive"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Priya S.",
    location: "Kurmannapalem, Visakhapatnam",
    rating: 5,
    date: "August 2026",
    treatment: "Painless Root Canal",
    text: "Dr. Roja was extremely gentle, professional, and ensured the procedure was completely painless. Highly recommend this place for anyone looking for quality dental care in Kurmannapalem!",
    verified: true
  },
  {
    id: "rev-2",
    author: "Ravi Kumar M.",
    location: "Ukkunagaram (Steel Plant Township)",
    rating: 5,
    date: "July 2026",
    treatment: "Dental Implants",
    text: "Dr. Roja and the team were professional, caring, and made me feel comfortable throughout my treatment. Modern equipment, spotless hygiene, and very fair pricing compared to corporate hospitals in Vizag.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Lakshmi Devi P.",
    location: "Gajuwaka, Visakhapatnam",
    rating: 5,
    date: "August 2026",
    treatment: "Family Dental Care & Scaling",
    text: "Warm & Professional. I had a wonderful experience with the dental treatment provided by Dr. Roja. Best budget-friendly clinic with 24/7 assistance and latest digital equipment in Kurmannapalem.",
    verified: true
  },
  {
    id: "rev-4",
    author: "Srinivas Rao K.",
    location: "Duvvada, Visakhapatnam",
    rating: 5,
    date: "August 2026",
    treatment: "Root Canal & Ceramic Crown",
    text: "Had very good experience with doctor treatment.. Doctor Roja and her team is very helpful and friendly while treating patients. The clinic on Duvvada station road is very easy to locate.",
    verified: true
  },
  {
    id: "rev-5",
    author: "Anand Verma",
    location: "Sector 6, Steel Plant",
    rating: 5,
    date: "July 2026",
    treatment: "Clear Aligners & Teeth Whitening",
    text: "Best dental clinic in Kurmannapalem. Dr. Roja explained the clear aligners procedure with complete honesty. Speaking Telugu, Hindi and English makes communication effortless for everyone.",
    verified: true
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: "ba-1",
    title: "Laser Teeth Whitening",
    procedure: "Single-session clinical stain removal",
    description: "45-minute clinical whitening treatment removing deep tea, coffee, and tobacco discoloration for a 6-shade brighter radiant smile.",
    beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    afterImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ba-2",
    title: "Clear Aligner Straightening",
    procedure: "Discreet orthodontic gap closure",
    description: "Virtually invisible aligners correcting dental crowding and closing anterior gaps without metal wires in 6 months.",
    beforeImg: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800",
    afterImg: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ba-3",
    title: "Dental Implant & Crown",
    procedure: "Precision titanium implant & zirconia crown",
    description: "Permanent replacement of broken/missing molar with a bio-compatible implant and natural-looking porcelain crown.",
    beforeImg: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800",
    afterImg: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ba-4",
    title: "Painless Root Canal & Crown",
    procedure: "Single-visit RCT & full coverage crown",
    description: "Advanced endodontic therapy saving severely decayed tooth without pain, capped with a color-matched ceramic crown.",
    beforeImg: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
    afterImg: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ba-5",
    title: "Ultrasonic Scaling & Cleaning",
    procedure: "Tartar removal & tooth enamel polishing",
    description: "Gentle removal of stubborn calculus and plaque build-up to heal bleeding gums and leave teeth smooth and refreshed.",
    beforeImg: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800",
    afterImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
  }
];
