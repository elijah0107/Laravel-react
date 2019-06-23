import { connectGet } from './connectApi'

export const sendToTelegram = ( message ) => {
  const token = '716231571:AAEnjjHaoAoNjZZTrhC75cIjCZE7tG03cQ0';
  const chatId = '-375012688';
  const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`;
  connectGet(telegramUrl);
}