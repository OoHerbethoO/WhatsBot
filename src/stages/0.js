import { storage } from "../storage.js";

export const initialStage = {
  exec({ from }) {
    storage[from].stage = 1;

    return "ð OlÃ¡, como vai? \n\nEu sou Albert, o *assistente virtual*. \n*Posso te ajudar?* ðââï¸ \n-----------------------------------\n1ï¸â£ - ```FAZER PEDIDO``` \n2ï¸â£ - ```VERIFICAR TAXA DE ENTREGA```\n0ï¸â£ - ```FALAR COM ATENDENTE```";
  },
};
