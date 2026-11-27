import { BUSINESS_ADDRESS, BUSINESS_ADDRESS_LINE, BUSINESS_EMAIL, BUSINESS_MAP_URL, BUSINESS_PHONE } from '@/lib/contact';

// Homepage content for the Makkah taxi landing page.
// Fares are per vehicle in SAR. Update PRICES_UPDATED whenever the fare table changes.

export const CONTACT = {
    whatsappDisplay: BUSINESS_PHONE.display,
    phoneDisplay: BUSINESS_PHONE.display,
    phoneHref: BUSINESS_PHONE.href,
    email: BUSINESS_EMAIL,
    address: BUSINESS_ADDRESS_LINE,
    plusCode: BUSINESS_ADDRESS.plusCode,
    mapUrl: BUSINESS_MAP_URL,
    officeHours: 'Daily 9 AM to 10 PM',
} as const;

export const PRICES_UPDATED = 'November 2026';

export type FareVehicleId = 'camry' | 'staria' | 'starex' | 'hiace' | 'gmc' | 'coaster';

export interface FareVehicle {
    id: FareVehicleId;
    name: string;
    seats: string;
    /** Max passengers, used by the calculator to suggest a vehicle. */
    maxPassengers: number;
    /** Large suitcases the vehicle carries comfortably. */
    maxBags: number;
}

export const FARE_VEHICLES: FareVehicle[] = [
    { id: 'camry', name: 'Camry', seats: '4 seats', maxPassengers: 4, maxBags: 2 },
    { id: 'staria', name: 'Staria', seats: '7 seats', maxPassengers: 7, maxBags: 5 },
    { id: 'starex', name: 'Starex', seats: '7 seats', maxPassengers: 7, maxBags: 7 },
    { id: 'gmc', name: 'GMC Yukon', seats: '7 seats', maxPassengers: 7, maxBags: 6 },
    { id: 'hiace', name: 'Hiace', seats: '11 seats', maxPassengers: 11, maxBags: 11 },
    { id: 'coaster', name: 'Coaster', seats: '17 to 21 seats', maxPassengers: 21, maxBags: 21 },
];

/** A fare is a number in SAR, or a short note when there is no fixed price. */
export type Fare = number | string;

export interface FareRoute {
    id: string;
    name: string;
    distance: string;
    time: string;
    fares: Record<FareVehicleId, Fare>;
}

const fares = (camry: Fare, staria: Fare, starex: Fare, hiace: Fare, gmc: Fare, coaster: Fare) =>
    ({ camry, staria, starex, hiace, gmc, coaster });

export const FARE_ROUTES: FareRoute[] = [
    { id: 'jed-mak', name: 'Jeddah Airport to Makkah hotel', distance: 'about 85 to 95 km', time: '60 to 90 min', fares: fares(200, 250, 250, 300, 350, 550) },
    { id: 'mak-jed', name: 'Makkah hotel to Jeddah Airport', distance: 'about 85 to 95 km', time: '60 to 90 min', fares: fares(150, 200, 200, 250, 300, 400) },
    { id: 'mak-mad', name: 'Makkah hotel to Madinah hotel', distance: 'about 435 to 450 km', time: '4.5 to 5 hours with stops', fares: fares(350, 400, 400, 500, 800, 800) },
    { id: 'mad-mak', name: 'Madinah hotel to Makkah hotel', distance: 'about 435 to 450 km', time: '4.5 to 5 hours with stops', fares: fares(350, 400, 400, 500, 800, 800) },
    { id: 'mak-train', name: 'Makkah hotel to Haramain train station', distance: 'about 3.5 km from the Haram', time: 'about 10 min', fares: fares(100, 100, 100, 150, 200, 300) },
    { id: 'mak-ziyarat', name: 'Makkah Ziyarat tour', distance: 'around Makkah', time: 'about 3 hours', fares: fares(200, 250, 250, 300, 350, 450) },
    { id: 'mak-taif', name: 'Makkah to Taif and back', distance: 'about 90 km each way', time: 'about 1 hour each way', fares: fares(450, 500, 500, 600, 900, 900) },
    { id: 'jed-mad', name: 'Jeddah Airport to Madinah hotel', distance: 'about 420 km', time: 'about 4.5 hours', fares: fares(400, 500, 500, 600, 900, 900) },
    { id: 'mad-jed', name: 'Madinah hotel to Jeddah Airport', distance: 'about 420 km', time: 'about 4.5 hours', fares: fares(350, 400, 400, 500, 800, 800) },
    { id: 'madair-mad', name: 'Madinah Airport to Madinah hotel', distance: 'inside Madinah', time: 'about 20 to 30 min', fares: fares(150, 200, 200, 250, 250, 400) },
    { id: 'mad-madair', name: 'Madinah hotel to Madinah Airport', distance: 'inside Madinah', time: 'about 20 to 30 min', fares: fares(80, 100, 100, 150, 200, 300) },
    { id: 'mad-ziyarat', name: 'Madinah Ziyarat tour', distance: 'around Madinah', time: 'about 3 hours', fares: fares(150, 200, 200, 250, 300, 400) },
    { id: 'mad-train', name: 'Madinah hotel to Madinah train station', distance: 'inside Madinah', time: 'about 15 min', fares: fares(100, 100, 100, 150, 200, 'by fuel rate') },
    { id: 'jedair-jed', name: 'Jeddah Airport to Jeddah hotel', distance: 'inside Jeddah', time: 'about 30 min', fares: fares(150, 200, 200, 200, 250, 350) },
    { id: 'jed-taif', name: 'Jeddah to Taif and back', distance: 'about 170 km each way', time: 'about 2 hours each way', fares: fares(450, 500, 500, 600, 900, 900) },
    { id: 'hourly', name: 'Hourly hire', distance: 'per hour', time: 'per hour', fares: fares(70, 100, 100, 120, 150, 150) },
];

export interface Vehicle {
    id: FareVehicleId;
    name: string;
    passengers: string;
    bestFor: string;
    title: string;
    description: string;
    image: string;
    href: string;
}

export const VEHICLES: Vehicle[] = [
    {
        id: 'camry',
        name: 'Toyota Camry',
        passengers: 'up to 4',
        bestFor: 'couples and small families',
        title: 'Toyota Camry 4 seat car for couples',
        description: 'The sedan is the lowest fare and fits up to four passengers with two large cases. It is the right car for a husband and wife or a parent with one adult child.',
        image: '/images/fleet/camry.png',
        href: '/fleet/toyota-camry',
    },
    {
        id: 'staria',
        name: 'Hyundai Staria',
        passengers: 'up to 7',
        bestFor: 'families of 5 to 7',
        title: 'Staria for families',
        description: 'Local drivers describe the Staria as comfortable for seven to eight people. Its sliding doors make getting in easier for older parents.',
        image: '/images/fleet/staria.png',
        href: '/fleet/hyundai-staria',
    },
    {
        id: 'starex',
        name: 'Hyundai Starex (H1)',
        passengers: '7, more on request',
        bestFor: 'families with many bags',
        title: 'Starex for families with luggage',
        description: 'The Starex, sold as the H1 in some countries, is the van for families with lots of luggage. Like the Staria, it has sliding doors.',
        image: '/images/fleet/starex.png',
        href: '/fleet/hyundai-starex',
    },
    {
        id: 'gmc',
        name: 'GMC Yukon',
        passengers: 'up to 7',
        bestFor: 'VIP rides and families who want more legroom',
        title: 'GMC Yukon for extra comfort',
        description: 'The Yukon has the most legroom of our 7 seaters. Families often choose it for the long Madinah drive, and it is our VIP car for guests who want a premium ride.',
        image: '/images/fleet/gmc.png',
        href: '/fleet/gmc-yukon-at4',
    },
    {
        id: 'hiace',
        name: 'Toyota Hiace',
        passengers: 'up to 11',
        bestFor: 'large families and small groups',
        title: 'Hiace for large families',
        description: 'The Hiace takes up to 11 people, with room for their luggage. A folding wheelchair fits in the back.',
        image: '/images/fleet/hiace.png',
        href: '/fleet/toyota-hiace',
    },
    {
        id: 'coaster',
        name: 'Toyota Coaster',
        passengers: '17 to 21',
        bestFor: 'Umrah groups and travel agents',
        title: 'Coaster for groups',
        description: 'The Coaster carries 17 to 21 people, for full Umrah groups, travel agents and Ziyarat groups from the same building.',
        image: '/images/fleet/coaster.png',
        href: '/fleet/toyota-coaster',
    },
];

export const DRIVERS = ['Imran Cheema', 'Hasham Cheema', 'Qasim Cheema', 'Sheraz', 'Rashed Khan'];

export const REVIEWS = [
    { quote: 'Their services are very good and their drivers are professional and their cars are very nice and clean.', author: 'Ahmed Ali', year: 2026 },
    { quote: 'Very good service and professional driver. and clean vehicle.', author: 'Waqas Jutt', year: 2026 },
    { quote: 'Good service.', author: 'Naveed Kahloon', year: 2026 },
];

export const GOOGLE_RATING = { score: 4.8, count: 17 };

export interface Faq {
    question: string;
    answer: string;
}

export const FAQS: Faq[] = [
    {
        question: 'Which is the best taxi service in Makkah?',
        answer: 'The best taxi service in Makkah depends on your trip. For a short solo ride near the Haram, the Makkah Bus or the official metered Makkah Taxi costs the least. For families, elderly parents, airport pickups and Madinah trips, a private car booked in advance with one fixed price per vehicle, like Ahsas Cab, saves time and removes the bargaining.',
    },
    {
        question: 'Which are the top Makkah taxi services for families?',
        answer: 'Look for a fixed price per car, a vehicle chosen by your number of bags and a driver who meets you in arrivals. Read recent Google reviews, get the car type in writing and avoid unmarked drivers who approach you inside the terminal.',
    },
    {
        question: 'How much is a taxi from the Haram to Masjid Aisha?',
        answer: 'Masjid e Aisha is about 7 km from the Haram, around 15 to 20 minutes by car. A return trip with Ahsas Cab includes waiting time while you enter Ihram, and we confirm the fare on WhatsApp before you go. A one way metered ride costs less, but you then need a second car back.',
    },
    {
        question: 'What is the cheapest way to get around Makkah?',
        answer: 'The Makkah Bus. One ride costs SAR 4, and the network has 12 routes and 431 stations, with stops near the Haram at Ajyad Al Masafi, Jarwal and Shaib Amir. It works well if you travel light. With big suitcases or elderly parents, a taxi is far easier.',
    },
    {
        question: 'Can I book a Makkah taxi online before I arrive?',
        answer: 'Yes. Send your flight number, hotel, number of people and bags on WhatsApp at ' + BUSINESS_PHONE.display + ' or through our booking form. We reply with a fixed price and the car type. Booking early also helps with Nusuk, which now asks for confirmed transport before your Umrah visa is issued.',
    },
    {
        question: 'Do you offer emergency Makkah taxi services at night?',
        answer: 'Yes. We answer 24 hours a day, including late rides after Umrah, Tahajjud or Fajr. Send your location pin on WhatsApp and we send the nearest free driver. For a medical emergency, call 997 for the Saudi Red Crescent first.',
    },
    {
        question: 'Do your drivers speak Urdu and English?',
        answer: 'Yes. Our drivers speak Urdu, English and Arabic. Tell us your language when you book and we match you with a driver who speaks it. Ziyarat tours are explained in Urdu or English.',
    },
    {
        question: 'What happens if my flight is delayed?',
        answer: 'Nothing changes for you. We track your flight number and move the pickup time. Your driver calls you as soon as you land and guides you to the meeting point. If your flight is cancelled, message us and we move the booking to your new date at no charge.',
    },
    {
        question: 'Do I have to pay in advance?',
        answer: 'There is no prepayment. You pay on arrival, in cash or by card, whichever suits you, and we never ask for card details on WhatsApp.',
    },
    {
        question: 'Can I cancel or change my booking?',
        answer: 'Yes, and it costs nothing. We do not charge for changes or cancellations. Please message us on WhatsApp as early as you can, so we can give the car to another family.',
    },
];
