export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
}

export const IMAGES: GalleryImage[] = [
  { id: 1, src: '/images/pool.jpg', title: 'Mountain Mist', category: 'Nature' },
  { id: 2, src: '/images/forest.jpg', title: 'Forest Path', category: 'Nature' },
  { id: 3, src: '/images/golden-bridge.jpg', title: 'Golden Bridge', category: 'City' },
  { id: 4, src: '/images/lake-reflection.jpg', title: 'Lake Reflection', category: 'Nature' },
  { id: 5, src: '/images/venice-waters.jpg', title: 'Venice Waters', category: 'City' },
  { id: 6, src: '/images/foggy-hills.jpg', title: 'Foggy Hills', category: 'Nature' },
];