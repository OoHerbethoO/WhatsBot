import { storage } from '../storage.js';

export const stageFour = {
  exec({ from, message }) {
    const address = storage[from].address;
    const phone = from.split('@');

    storage[from].stage = 5;
    let desserts = '';
    const itens = storage[from].itens;
    itens.map((item, index) => {
      if (index == itens.length - 1) {
        desserts += item.description + '.';
      } else {
        desserts += item.description + ', ';
      }
    });
    const total = storage[from].itens.length;

    return `๐ *NOVO PEDIDO* ๐: \n\n๐ Cliente: +${
      phone[0]
    } \n๐ง Sabores: *${desserts}* \n๐ Endereรงo: *${address}* \n๐ Taxa de entrega: *a confirmar*. \n๐ฐ Valor dos bolos: *${
      total * 6
    },00 reais*. \nโณ Tempo de entrega: *50 minutos*. \n๐ Detalhes: *${message}*`;
  },
};
