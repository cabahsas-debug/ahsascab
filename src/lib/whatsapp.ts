import { BUSINESS_PHONE } from './contact';

export const WHATSAPP_NUMBER = BUSINESS_PHONE.digits;

export const getWhatsAppLink = (message: string = ''): string => {
    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
};

export const createBookingMessage = (details: {
    service?: string;
    pickup?: string;
    dropoff?: string;
    date?: string;
    time?: string;
    vehicle?: string;
    passengers?: number;
    name?: string;
}) => {
    let message = `Salam Ahsas Alrihlat,\n\nI would like to book a ride.\n`;

    if (details.service) message += `*Service:* ${details.service}\n`;
    if (details.vehicle) message += `*Vehicle:* ${details.vehicle}\n`;
    if (details.date) message += `*Date:* ${details.date}\n`;
    if (details.time) message += `*Time:* ${details.time}\n`;
    if (details.pickup) message += `*Pickup:* ${details.pickup}\n`;
    if (details.dropoff) message += `*Dropoff:* ${details.dropoff}\n`;
    if (details.passengers) message += `*Passengers:* ${details.passengers}\n`;
    if (details.name) message += `*Name:* ${details.name}\n`;

    message += `\nPlease confirm availability and price.`;
    return message;
};
