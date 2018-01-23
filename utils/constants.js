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
};