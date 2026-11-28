// Content for /services/ziyarat-tours (Ziyarat Places in Makkah).
import { FARE_ROUTES, type Fare } from './home-content';

const ziyaratFares = FARE_ROUTES.find((r) => r.id === 'mak-ziyarat')!.fares;
const hourlyFares = FARE_ROUTES.find((r) => r.id === 'hourly')!.fares;

export const formatSar = (fare: Fare) => (typeof fare === 'number' ? `SAR ${fare}` : fare);

export const ZIYARAT_PRICES = {
    camry: ziyaratFares.camry,
    staria: ziyaratFares.staria,
    hiace: ziyaratFares.hiace,
    gmc: ziyaratFares.gmc,
    coaster: ziyaratFares.coaster,
    hourlyFrom: hourlyFares.camry,
} as const;

export const ZIYARAT_PRICE_FROM = Math.min(
    ...[ZIYARAT_PRICES.camry, ZIYARAT_PRICES.staria, ZIYARAT_PRICES.hiace, ZIYARAT_PRICES.gmc, ZIYARAT_PRICES.coaster].filter(
        (f): f is number => typeof f === 'number'
    )
);

export const QUICK_FACTS = [
    { label: 'Main sites', value: '14' },
    { label: 'Time needed', value: '3 to 4 hours', note: 'Full day with museums: 6 to 8 hours' },
    { label: 'Best time', value: 'Right after Fajr' },
    { label: 'Furthest site', value: 'Arafat', note: 'About 20 km east of the Haram' },
    { label: 'Ticket needed', value: 'Museums only', note: 'In the Hira Cultural District' },
];

export const TOURS = [
    { name: 'Makkah Private Luxury Ziyarat Tour', bestFor: 'Couples, VIP guests', vehicle: 'GMC Yukon or Camry', time: '3 to 4 hours', price: ZIYARAT_PRICES.camry, href: '/fleet/gmc-yukon-at4' },
    { name: 'Makkah Family Premium Ziyarat Tour', bestFor: 'Elderly parents, children, wheelchair users', vehicle: 'Hyundai Staria (7 seats)', time: '4 hours, extra rest stops', price: ZIYARAT_PRICES.staria, href: '/fleet/hyundai-staria' },
    { name: 'Makkah Small Group Luxury Ziyarat Tour', bestFor: '8 to 11 pilgrims', vehicle: 'Toyota Hiace', time: '4 hours', price: ZIYARAT_PRICES.hiace, href: '/fleet/toyota-hiace' },
    { name: 'Makkah Large Group Premium Ziyarat Tour', bestFor: 'Umrah groups and agents', vehicle: 'Toyota Coaster (17 to 21 seats)', time: '4 to 5 hours', price: ZIYARAT_PRICES.coaster, href: '/fleet/toyota-coaster' },
];

export const TOUR_DAY = [
    { title: 'The night before', text: "You get the driver's name, car number and pickup time on WhatsApp." },
    { title: '6:30 AM pickup', text: 'The driver meets you in your hotel lobby or at the nearest pickup bay, since some streets around the Haram are closed to cars.' },
    { title: 'Al Hajun first', text: "Jannat al Mu'alla and Masjid al Jinn while the air is still cool." },
    { title: 'Jabal al Nour', text: 'A stop below the mountain, or a drop at the climb path if you planned the climb.' },
    { title: 'Mina to Arafat', text: 'Your guide explains each Hajj site from the car or after a short walk.' },
    { title: 'Thawr and back', text: 'You are back at your hotel before Dhuhr, in time to pray in the Haram.' },
];

export const SITES_TABLE = [
    ["Jannat al Mu'alla", 'About 1 km north', '15 min', 'Easy'],
    ['Masjid al Jinn', 'About 1 km north', '10 min', 'Easy'],
    ['Birthplace of the Prophet ﷺ (Makkah Library)', 'Next to the Haram courtyards', '10 min', 'Easy'],
    ['Jabal al Nour, Cave of Hira', 'About 4 km north', '2 to 3 hours with climb', 'Hard, about 1,200 steps'],
    ['Hira Cultural District', 'Foot of Jabal al Nour', '1 to 2 hours', 'Easy, wheelchair friendly'],
    ["Masjid Aisha (Tan'im)", 'About 7 km north', '20 min', 'Easy'],
    ['Mina and Masjid al Khayf', 'About 6 km east', '20 min', 'Easy, by car'],
    ["Masjid al Bay'ah", 'Near the Jamarat, Mina', '10 min', 'Easy'],
    ['Muzdalifah', 'About 10 km east', '15 min', 'Easy, by car'],
    ['Arafat and Jabal al Rahmah', 'About 20 km east', '30 min', 'Easy, climb optional'],
    ['Masjid Nimrah', 'Arafat', 'Seen from outside', 'Easy'],
    ['Jabal Thawr, Cave of Thawr', 'About 6 km south', '2 to 3 hours with climb', 'Very hard'],
    ["Masjid al Ji'ranah", 'Northeast edge of Makkah', '20 min', 'Easy'],
    ['Makkah Museum', 'Al Zahir, about 15 min by car', '1 hour', 'Easy'],
];

export const LOCAL_NAMES = [
    ['Cave of Hira', 'غار حراء', 'Ghar e Hira'],
    ['Jabal al Nour', 'جبل النور', 'Jabal e Noor'],
    ['Cave of Thawr', 'غار ثور', 'Ghar e Saur'],
    ["Jannat al Mu'alla", 'مقبرة المعلاة', 'Jannat ul Mualla'],
    ['Masjid al Jinn', 'مسجد الجن', 'Masjid e Jinn'],
    ['Jabal al Rahmah', 'جبل الرحمة', 'Jabal e Rehmat'],
    ['Masjid Aisha', 'مسجد التنعيم', 'Masjid e Ayesha'],
    ["Masjid al Ji'ranah", 'مسجد الجعرانة', 'Masjid e Jurana'],
];

export type SourceLabel = 'Authentic' | 'Historical report' | 'Popular story, not proven';

export interface SiteDetail {
    title: string;
    labels: SourceLabel[];
    text: string;
}

export const SITE_DETAILS: SiteDetail[] = [
    {
        title: 'Jabal al Nour and the Cave of Hira',
        labels: ['Authentic'],
        text: 'This is where the first verses of Surah al Alaq (96:1 to 5) came down to the Prophet ﷺ, as narrated in Sahih al Bukhari 3. The climb takes about an hour. Start after Fajr and carry water.',
    },
    {
        title: 'Hira Cultural District and the Holy Quran Museum',
        labels: [],
        text: 'If your parents cannot climb, come here. It sits at the foot of Jabal al Nour, and the district itself needs no ticket. The Revelation Exhibition and the Holy Quran Museum charge a small fee. As of June 2026 both open 24 hours, except Friday from 7 AM to 3:30 PM.',
    },
    {
        title: 'Jabal Thawr and the Cave of Thawr',
        labels: ['Authentic', 'Popular story, not proven'],
        text: 'The Prophet ﷺ and Abu Bakr (RA) hid here for three nights during the Hijrah. The Quran records his words "Do not grieve, Allah is with us" (9:40). The spider web and nesting dove story is a popular story, not proven by Sahih hadith. The climb is steep and takes 60 to 90 minutes.',
    },
    {
        title: "Jannat al Mu'alla (Al Hajun)",
        labels: ['Authentic'],
        text: "Khadijah (RA), the Prophet's ﷺ first wife, rests here with many of his family and the Sahabah. Walk the paths and do not step on graves. Say the Sunnah greeting for graves taught in Sahih Muslim 975.",
    },
    {
        title: 'Masjid al Jinn',
        labels: ['Historical report'],
        text: "Local tradition links this mosque to the night jinn heard the Quran, the event told in Surah al Jinn (72:1). The exact spot is a historical report. It stands a short walk from Al Mu'alla.",
    },
    {
        title: 'Mina, Masjid al Khayf and the Jamarat',
        labels: ['Historical report'],
        text: 'Mina holds the tent city and the three Jamarat pillars. The Prophet ﷺ prayed in Masjid al Khayf during Hajj. A narration says seventy prophets prayed there; scholars differ on its grade.',
    },
    {
        title: 'Muzdalifah',
        labels: ['Authentic'],
        text: "The Quran names al Mash'ar al Haram here (2:198). Pilgrims spend the night under the open sky after Arafat. Outside Hajj you see it from the road.",
    },
    {
        title: 'Arafat, Jabal al Rahmah and Masjid Nimrah',
        labels: ['Authentic', 'Popular story, not proven'],
        text: "The Farewell Sermon was given in the valley of Uranah, beside today's Masjid Nimrah (Sahih Muslim 1218). The meeting of Adam (AS) and Hawwa on Jabal al Rahmah is a popular story, not proven. You do not need to climb it. Masjid Nimrah opens mainly on the Day of Arafah.",
    },
    {
        title: "Masjid Aisha (Tan'im)",
        labels: ['Authentic'],
        text: "Aisha (RA) entered Ihram here for her Umrah on the Prophet's ﷺ instruction. Pilgrims still come here for a second Umrah.",
    },
    {
        title: "Masjid al Ji'ranah",
        labels: ['Authentic'],
        text: 'The Prophet ﷺ entered Ihram here for Umrah after the Battle of Hunayn. It is quieter than Tan\'im.',
    },
    {
        title: "Masjid al Bay'ah",
        labels: ['Historical report'],
        text: 'This mosque marks the Pledge of Aqabah, when the Ansar of Madinah gave their oath to the Prophet ﷺ before the Hijrah. The exact spot is a historical report.',
    },
    {
        title: 'Birthplace of the Prophet ﷺ and the Makkah Museum',
        labels: ['Historical report'],
        text: 'The library building beside the Haram courtyards stands where, by historical report, the Prophet ﷺ was born. View it from outside. The Makkah Museum in Al Zahir tells the story of Makkah and the Hijaz through old objects and maps.',
    },
];

export const ETIQUETTE = {
    do: [
        'Learn the story before you arrive, so the site means more',
        'Dress modestly and carry water, a cap and an umbrella',
        "Say salam at Jannat al Mu'alla and keep to the paths",
        "Keep your Umrah first: ziyarat comes after Tawaf, Sa'i and the haircut",
    ],
    avoid: [
        'Touching or kissing rocks and walls for blessing',
        'Tying threads, writing names or leaving notes in the caves',
        'Taking stones or soil home',
        'Climbing Jabal al Rahmah thinking it is part of Hajj',
    ],
};

export const ROUTE_3H = [
    "Jannat al Mu'alla and Masjid al Jinn (Al Hajun)",
    'Jabal al Nour, seen from below',
    'Mina, Masjid al Khayf and the Jamarat',
    'Muzdalifah',
    'Arafat, Jabal al Rahmah and Masjid Nimrah',
    'Jabal Thawr, seen from below',
    'Back to your hotel before Dhuhr',
];

export const WHEN_TO_GO = [
    { label: 'Time of day', text: 'Right after Fajr, before the rocks heat up' },
    { label: 'Summer', text: 'Temperatures pass 40°C by noon, so finish by 11 AM' },
    { label: 'Ramadan', text: 'Go in the morning, roads around the Haram jam after Asr' },
    { label: 'Hajj season', text: 'Roads to Mina, Muzdalifah and Arafat close to normal traffic around the Hajj days' },
];

export const PRICE_FACTORS = [
    'Vehicle size (Camry, Staria, Hiace, Coaster or GMC)',
    'Number of sites and total hours',
    'A climb at Hira or Thawr, which adds waiting time',
    'Season: Ramadan and school holidays cost more',
];

export const INCLUDED = [
    'Hotel pickup and drop off anywhere in central Makkah',
    'AC vehicle, cold water and rest stops',
    'A guide who explains each site in Urdu, English or Arabic',
    'Waiting time at every stop',
];

export const VEHICLES = [
    { name: 'Toyota Camry', text: 'up to 4 passengers', href: '/fleet/toyota-camry', price: ZIYARAT_PRICES.camry },
    { name: 'Hyundai Staria or Starex', text: '7 passengers, room for a folded wheelchair', href: '/fleet/hyundai-staria', price: ZIYARAT_PRICES.staria },
    { name: 'Toyota Hiace', text: 'up to 11 passengers', href: '/fleet/toyota-hiace', price: ZIYARAT_PRICES.hiace },
    { name: 'Toyota Coaster', text: '17 to 21 passengers for Umrah groups', href: '/fleet/toyota-coaster', price: ZIYARAT_PRICES.coaster },
    { name: 'GMC Yukon', text: 'VIP private tours', href: '/fleet/gmc-yukon-at4', price: ZIYARAT_PRICES.gmc },
];

export const BOOKING_STEPS = [
    'Message us on WhatsApp with your hotel name, date and number of people.',
    'Pick your tour: private, family, small group or large group.',
    'Get one fixed price and a pickup time, usually 6:30 AM.',
    'Meet your driver in your hotel lobby. Pay after the tour, in cash or by card.',
];

export const PICKUP_AREAS = [
    { title: 'Central', text: 'Ajyad, Misfalah, Jabal Omar, Ibrahim al Khalil Road and Shubaikah' },
    { title: 'North and east', text: 'Al Hajun, Al Aziziyah, Al Naseem, Al Shisha and Al Awali' },
    { title: 'West and south', text: 'Kudai, Al Zahir, Al Rusaifah and the Umm Al Qura University area in Al Abdiyah' },
    { title: 'Arriving by train', text: 'Pickup from the Haramain station in Al Rusaifah, with ziyarat on the way to your hotel' },
];

export const NEARBY = [
    {
        title: 'Hotels for easy pickup',
        text: "We pick up from every hotel in Ajyad, Ibrahim al Khalil Road, Jabal Omar, Misfalah and Aziziyah. Hotels near Al Hajun are closest to Jannat al Mu'alla and Masjid al Jinn.",
    },
    {
        title: 'Markets after your tour',
        text: 'Abraj Al Bait Mall under the Clock Tower is the easiest stop for dates, prayer mats and Zamzam bottles. Bin Dawood supermarkets in Ajyad and Aziziyah sell the same goods at local prices.',
    },
    {
        title: 'Barbers for Halq and Taqsir',
        text: 'Barber shops line the streets outside the Marwah side exits of Masjid al Haram. Men shave (Halq) or trim (Taqsir) to leave Ihram. Women cut a fingertip length of hair themselves, so they do not need a barber.',
    },
];

export const TRUST_POINTS = [
    'Local experience: Ahsas Cab has driven pilgrims on ziyarat from hotels in Ajyad, Misfalah and Aziziyah since 2015',
    'Checked stories: every story carries a label (Authentic, Historical report or Popular story) with its Quran or Sahih hadith reference from Quran.com and Sunnah.com',
    'Open sources: opening hours and visitor figures come from Visit Saudi and the Pilgrim Experience Program',
    'Last updated: November 2026',
];

export const ZIYARAT_FAQS = [
    { question: 'How many ziyarat places are in Makkah?', answer: 'There are about 14 main sites. The Royal Commission has opened 27 historical sites to visitors in total.' },
    { question: 'Is ziyarat part of Umrah?', answer: 'No. It is optional and done after your Umrah.' },
    { question: 'How long does a Makkah ziyarat tour take?', answer: '3 to 4 hours for the main sites, or 6 to 8 hours with the museums.' },
    { question: 'Can elderly pilgrims climb to the Cave of Hira?', answer: 'It is about 1,200 steep steps. Elderly pilgrims should visit the Hira Cultural District at the foot of the mountain instead.' },
    { question: 'Do I need a ticket or permit for ziyarat places?', answer: 'No permit is needed for open air sites. Only the Revelation Exhibition and the Holy Quran Museum charge a small entry fee.' },
    { question: 'Private or group tour for families?', answer: 'Private. You set the pace, stop for prayer and rest when your parents need it.' },
    { question: 'Can I do ziyarat while in Ihram?', answer: 'Yes, but finish your Umrah first. All Ihram rules still apply, and a hot tour in Ihram is tiring.' },
    { question: 'Can I start a second Umrah from Masjid Aisha on the tour?', answer: 'Yes. We stop at Masjid Aisha in Tan\'im so you can enter Ihram, then drive you back to the Haram.' },
    { question: 'Is Uber cheaper than a ziyarat taxi?', answer: 'For one site, often yes. For the full loop with waiting time at every stop, a fixed price ziyarat car usually costs less.' },
    { question: 'Can I get an Urdu speaking guide?', answer: 'Yes. Choose Urdu, English or Arabic when you book.' },
    { question: 'What should I wear and bring?', answer: 'Loose modest clothes, shoes with good grip, water, a cap, and some cash for museum tickets.' },
    { question: 'Are ziyarat sites open on Friday?', answer: 'Open air sites, yes. As of June 2026, the Holy Quran Museum and the Revelation Exhibition close on Friday from 7 AM to 3:30 PM.' },
];
