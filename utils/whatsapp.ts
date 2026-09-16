export const WHATSAPP_NUMBER = '919990366338';
export const WHATSAPP_DISPLAY = '+91 9990366338';

export const getWhatsAppLink = (message: string = 'Hello Alliance Estate, I would like to connect with an advisor.') => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
