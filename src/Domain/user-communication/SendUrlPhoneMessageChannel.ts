export interface SendPhoneMessageByUrlChannel {
  sendByUrl(number: string, message: string): string;
}
