import { SendPhoneMessageChannel } from "@/Domain/user-communication/SendPhoneMessageChannel";
import { SendPhoneMessageByUrlChannel } from "@/Domain/user-communication/SendUrlPhoneMessageChannel";

type MessageDrivers = SendPhoneMessageChannel | SendPhoneMessageByUrlChannel;

const usePhoneMessage = (driver: MessageDrivers) => {
  const sendByUrl = (number: string, message: string): string => {
    if ("sendByUrl" in driver) {
      return driver.sendByUrl(number, message);
    }

    throw new Error("El driver no soporta el método sendByUrl");
  };
  const send = (number: string, message: string): string => {
    if ("send" in driver) {
      return driver.send(number, message);
    }

    throw new Error("El driver no soporta el método send");
  };

  return { sendByUrl, send };
};

export default usePhoneMessage;
