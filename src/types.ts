export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string;
  isFeatured?: boolean;
  iconName: string;
  category: 'restorative' | 'cosmetic' | 'preventive' | 'surgical' | 'orthodontic';
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  treatment: string;
  text: string;
  verified: boolean;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  procedure: string;
  description: string;
  beforeImg: string;
  afterImg: string;
}

export interface BookingFormState {
  name: string;
  phone: string;
  service: string;
  date: string;
  timeSlot: string;
  notes: string;
}
