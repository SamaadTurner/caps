'use strict';

const eventEmitter = require('../eventPool.js'); 

const handlePickUp = (payload) => {
  console.log('DRIVER: picked up ', payload.orderId);  
  eventEmitter.emit('in-transit', payload);

  setTimeout(() => {
  
    console.log('DRIVER: delivered ', payload.orderId);
    eventEmitter.emit('delivered', payload);
  }, 3000);
};
module.exports = handlePickUp;