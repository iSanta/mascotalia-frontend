import { SendPhoneMessageByUrlChannel } from "@/Domain/user-communication/SendUrlPhoneMessageChannel";

export const whatsappMessageChannel: SendPhoneMessageByUrlChannel = {
  sendByUrl: function (number: string, message: string): string {
    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send/?phone=+57${number}&text=${encodedMessage}`;
  },
};
