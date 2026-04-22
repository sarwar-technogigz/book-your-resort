export type TourPackage = {
  id: string;
  imageSrc: string;
  badgeText?: string;
  title: string;
  locationText: string;
  durationText: string;
  price: number;
  oldPrice?: number;
  reviewsText: string;
  type: string;
  groupSize: string;
  languages: string;
  gallery: {
    main: string;
    topRight: string;
    bottomLeft: string;
    bottomRight: string;
  };
};

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "1",
    imageSrc: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6807-1170x620.jpg",
    badgeText: "New",
    title: "Luxury Pool Cottage",
    locationText: "Village Amgarhi, Jim Corbett National Park, Uttarakhand - 244715",
    durationText: "1 Night",
    price:  17000,
    oldPrice: 99,
    reviewsText: "(5 Reviews)",
    type: "Adventure",
    groupSize: "50 People",
    languages: "English",
    gallery: {
      main: "/images/pool.jpg",
      topRight: "/images/umbrella-chair-around-swimming-pool.jpg",
      bottomLeft: "/images/san-diego-dawn-early-morning-with-palm-tree-silhouette.jpg",
      bottomRight: "/images/pool.jpg",
    },
  },
  {
    id: "2",
    imageSrc: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6933-1170x620.jpg",
    badgeText: "% Offer",
    title: "Premium Pool Cottage",
    locationText: "Village Amgarhi, Jim Corbett National Park, Uttarakhand - 244715",
    durationText: "2 Days",
    price: 18000,
    oldPrice:  17000,
    reviewsText: "(5 Reviews)",
    type: "Luxury",
    groupSize: "20 People",
    languages: "English",
    gallery: {
      main: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6933-1170x620.jpg",
      topRight: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6975-382x311.jpg",
      bottomLeft: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6807-1170x620.jpg",
      bottomRight: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6958-382x311.jpg",
    },
  },
  {
    id: "3",
    imageSrc: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6807-1170x620.jpg",
    badgeText: "Featured",
    title: "Luxury Pool Cottage",
    locationText: "Village Amgarhi, Jim Corbett National Park, Uttarakhand - 244715",
    durationText: "3 Days",
    price:  17000,
    oldPrice: 400,
    reviewsText: "(4 Reviews)",
    type: "Nature",
    groupSize: "35 People",
    languages: "English",
    gallery: {
      main: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6807-1170x620.jpg",
      topRight: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6958-382x311.jpg",
      bottomLeft: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6837-382x311.jpg",
      bottomRight: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6780-382x311.jpg",
    },
  },
  {
    id: "4",
    imageSrc: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6975-382x311.jpg",
    badgeText: "% Offer",
    title: "Premium Pool Cottage",
    locationText: "Village Amgarhi, Jim Corbett National Park, Uttarakhand - 244715",
    durationText: "5 Days",
    price: 15000,
    oldPrice: 12000,
    reviewsText: "(6 Reviews)",
    type: "Relax",
    groupSize: "25 People",
    languages: "English",
    gallery: {
      main: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6975-382x311.jpg",
      topRight: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6958-382x311.jpg",
      bottomLeft: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6837-382x311.jpg",
      bottomRight: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6780-382x311.jpg",
    },
  },
  {
    id: "5",
    imageSrc: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6958-382x311.jpg",
    badgeText: "New",
    title: "Premium Pool Cottage",
    locationText: "Village Amgarhi, Jim Corbett National Park, Uttarakhand - 244715",
    durationText: "7 Days",
    price: 13000,
    oldPrice: 15000,
    reviewsText: "(5 Reviews)",
    type: "City",
    groupSize: "40 People",
    languages: "English",
    gallery: {
      main: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6958-382x311.jpg",
      topRight: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6975-382x311.jpg",
      bottomLeft: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6837-382x311.jpg",
      bottomRight: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6780-382x311.jpg",
    },
  },
  {
    id: "6",
    imageSrc: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6837-382x311.jpg",
    badgeText: "Featured",
    title: "Premium Pool Cottage",
    locationText: "Village Amgarhi, Jim Corbett National Park, Uttarakhand - 244715",
    durationText: "3 Days",
    price: 30000,
    oldPrice: 20000,
    reviewsText: "(4 Reviews)",
    type: "Nature",
    groupSize: "35 People",
    languages: "English",
    gallery: {
      main: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6837-382x311.jpg",
      topRight: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6975-382x311.jpg",
      bottomLeft: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6807-1170x620.jpg",
      bottomRight: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6958-382x311.jpg",
    },
  },
  {
    id: "7",
    imageSrc: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6780-382x311.jpg",
    badgeText: "Featured",
    title: "Premium Pool Cottage",
    locationText: "Village Amgarhi, Jim Corbett National Park, Uttarakhand - 244715",
    durationText: "3 Days",
    price: 12000,
    oldPrice: 14000,
    reviewsText: "(4 Reviews)",
    type: "Nature",
    groupSize: "35 People",
    languages: "English",
    gallery: {
      main: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6780-382x311.jpg",
      topRight: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6975-382x311.jpg",
      bottomLeft: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6807-1170x620.jpg",
      bottomRight: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6958-382x311.jpg",
    },
  },
  {
    id: "8",
    imageSrc: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6958-382x311.jpg",
    badgeText: "Featured",
    title: "Premium Pool Cottage",
    locationText: "Village Amgarhi, Jim Corbett National Park, Uttarakhand - 244715",
    durationText: "3 Days",
    price: 10000,
    oldPrice: 40000,
    reviewsText: "(4 Reviews)",
    type: "Nature",
    groupSize: "35 People",
    languages: "English",
    gallery: {
      main: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6958-382x311.jpg",
      topRight: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6975-382x311.jpg",
      bottomLeft: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6807-1170x620.jpg",
      bottomRight: "https://www.corbettvanvaas.com/wp-content/uploads/2023/04/DSC_6958-382x311.jpg",
    },
  },
];
