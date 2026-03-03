import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomStandard from "@/assets/room-standard.jpg";

export interface Room {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  capacity: number;
  image: string;
  images: string[];
  amenities: string[];
  reviews: { name: string; rating: number; text: string; date: string }[];
}

export const rooms: Room[] = [
  {
    id: "deluxe-mountain-view",
    name: "Deluxe Mountain View",
    shortDescription: "Spacious room with panoramic mountain views and premium furnishings.",
    description:
      "Wake up to breathtaking panoramic views of the Maramureș mountains. This spacious room features handcrafted wooden furniture, premium linen bedding, and a private balcony perfect for morning coffee while watching the sunrise over the valleys.",
    price: 180,
    capacity: 2,
    image: roomDeluxe,
    images: [roomDeluxe, roomSuite, roomStandard],
    amenities: ["Mountain View", "Private Balcony", "King Bed", "Free Wi-Fi", "Mini Bar", "En-suite Bathroom", "Heating"],
    reviews: [
      { name: "Anna M.", rating: 5, text: "Absolutely stunning views! The room was impeccably clean and the bed incredibly comfortable. Will definitely return.", date: "2025-11-15" },
      { name: "Cristian P.", rating: 5, text: "The perfect mountain retreat. Every detail was thoughtfully designed.", date: "2025-10-22" },
    ],
  },
  {
    id: "fireplace-suite",
    name: "Fireplace Suite",
    shortDescription: "Cozy suite with a stone fireplace and traditional Maramureș decor.",
    description:
      "Our signature suite features a stunning stone fireplace, traditional Romanian textiles, and hand-carved wooden details. The living area opens to a private terrace overlooking the forest. Perfect for romantic getaways or special celebrations.",
    price: 280,
    capacity: 2,
    image: roomSuite,
    images: [roomSuite, roomDeluxe, roomStandard],
    amenities: ["Stone Fireplace", "Private Terrace", "King Bed", "Living Area", "Free Wi-Fi", "Mini Bar", "Luxury Bathroom", "Heating"],
    reviews: [
      { name: "Elena S.", rating: 5, text: "The fireplace made the entire experience magical. We didn't want to leave!", date: "2025-12-03" },
      { name: "Thomas K.", rating: 4, text: "Beautiful room with great character. The traditional decor is authentic and charming.", date: "2025-09-18" },
    ],
  },
  {
    id: "classic-comfort",
    name: "Classic Comfort",
    shortDescription: "Elegant simplicity with all the essentials for a relaxing stay.",
    description:
      "A beautifully appointed room combining elegant simplicity with mountain warmth. Natural wood interiors, quality bedding, and a window overlooking the green hills create the perfect atmosphere for unwinding after a day of exploring Maramureș.",
    price: 120,
    capacity: 2,
    image: roomStandard,
    images: [roomStandard, roomDeluxe, roomSuite],
    amenities: ["Hill View", "Queen Bed", "Free Wi-Fi", "En-suite Bathroom", "Heating", "Writing Desk"],
    reviews: [
      { name: "Maria D.", rating: 5, text: "Simple but beautiful. Everything we needed for a wonderful stay.", date: "2025-11-01" },
      { name: "Luca B.", rating: 4, text: "Great value for money. Clean, comfortable, and warm.", date: "2025-08-25" },
    ],
  },
];
