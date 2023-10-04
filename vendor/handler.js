'use strict';

const eventEmitter = require('../eventPool.js');

const createOrder = (storeName) => {
  const order = {
    store: storeName,
    orderId: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
    customer: 'Jamal Braun',
    address: 'Schmittfort, LA',
  };
  return order;
 
};

// handles delivered event
const handleDelivered = (payload) => {
  console.log('PAYLOAD: ', payload);
  console.log('Thank you for your order ' , payload.customer);
};


module.exports = { createOrder, handleDelivered};
