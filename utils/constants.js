'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SUCCESS_MESSAGE = exports.SUCCESS_MESSAGE = 'Operação realizado com sucesso!';
var ERROR_MESSAGE = exports.ERROR_MESSAGE = 'Ocorreu erro ao realizar operação!';

var successResult = exports.successResult = function successResult(data) {
  return {
    Success: true,
    Data: data,
    Message: SUCCESS_MESSAGE
  };
};

var errorResult = exports.errorResult = function errorResult(serverMessage) {
  return {
    Success: false,
    Message: ERROR_MESSAGE,
    ServerMessage: serverMessage
  };
};

var defaultClient = exports.defaultClient = {
  name: 'Boba Fetch'
};

var defaultProduct = exports.defaultProduct = {
  name: 'A280 blaster rifle',
  unitPrice: 10000,
  multiple: 1
};

var defaultUser = exports.defaultUser = {
  username: 'meupedidoauth',
  password: 'meupedidoauth2018'
<<<<<<< HEAD
};

var defaultOrder = exports.defaultOrder = {
  _id: '5a680bcaed93014034258260',
  productToOrder: [{
    product: defaultProduct,
    unitPrice: 100,
    quantity: 2,
    totalByProduct: 200
  }],
  client: defaultClient,
  totalByOrder: 200
=======
>>>>>>> 4f0b0f06b8c19d8916c2ad2c173b9c92b1e9ad96
};